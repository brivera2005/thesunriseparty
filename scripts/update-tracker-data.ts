/**
 * Refresh Project 2025 tracker candidates from public sources.
 *
 * Sources:
 *   - Federal Register API (presidential documents) — primary
 *   - project2025.observer — best-effort probe (no public API; fail soft)
 *   - Congress.gov via fetch-legislation.ts when CONGRESS_API_KEY is set
 *
 * Writes:
 *   - public/data/tracker-live.json      (audit trail of fetched docs)
 *   - lib/data/tracker-auto-events.ts    (stub TimelineEvent[] merged at build)
 *
 * Usage:
 *   npm run refresh:tracker
 *   npx tsx scripts/update-tracker-data.ts
 */
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  readFileSync,
} from "fs";
import { join } from "path";
import { spawnSync } from "child_process";
import type { TimelineCategory, TimelineEvent } from "../lib/types";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "data");
const LIVE_FILE = join(OUT_DIR, "tracker-live.json");
const AUTO_TS = join(ROOT, "lib", "data", "tracker-auto-events.ts");
const OBSERVER_URL = "https://www.project2025.observer/";

const FR_BASE = "https://www.federalregister.gov/api/v1/documents.json";
const LOOKBACK_DAYS = Number(process.env.TRACKER_LOOKBACK_DAYS || "45");
const MAX_NEW = Number(process.env.TRACKER_MAX_NEW || "15");
const FR_PRESIDENT = process.env.FR_PRESIDENT || "donald-trump";
/** OFF by default — site stays curated-only unless explicitly enabled. */
const FR_AUTO_ENABLED = process.env.TRACKER_FR_AUTO === "1";
/** Reject FR titles longer than this (Section 301 dumps, etc.). */
const MAX_TITLE_CHARS = Number(process.env.TRACKER_MAX_TITLE_CHARS || "120");

type FrDoc = {
  title: string;
  abstract?: string | null;
  document_number: string;
  html_url: string;
  publication_date: string;
  presidential_document_type?: string | string[];
};

function wayback(url: string): string {
  return `https://web.archive.org/web/*/${url}`;
}

function isoDateDaysAgo(days: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

function slugId(date: string, docNumber: string): string {
  const ymd = date.replace(/-/g, "").slice(0, 8);
  const num = docNumber.replace(/[^0-9A-Za-z-]/g, "").slice(-8);
  return `EVT-AUTO-${ymd}-${num}`;
}

function classifyActionType(doc: FrDoc): string {
  const raw = doc.presidential_document_type;
  const t = Array.isArray(raw) ? raw[0] : raw;
  if (t) {
    const lower = String(t).toLowerCase();
    if (lower.includes("executive")) return "Executive Order";
    if (lower.includes("proclamation")) return "Proclamation";
    if (lower.includes("memorandum")) return "Presidential Memorandum";
    if (lower.includes("determination")) return "Presidential Determination";
    return String(t);
  }
  const title = (doc.title || "").toLowerCase();
  if (title.includes("executive order")) return "Executive Order";
  if (title.includes("proclamation")) return "Proclamation";
  return "Presidential Document";
}

function guessCategory(title: string, abstract?: string | null): TimelineCategory {
  const text = `${title} ${abstract || ""}`.toLowerCase();
  if (/immigr|border|asylum|deport|alien|customs/.test(text)) return "Immigration";
  if (/climate|energy|epa|environment|fossil|oil|gas|land|forest/.test(text))
    return "Environment";
  if (/health|medicaid|medicare|fda|cdc|drug|abortion|reproductive/.test(text))
    return "Healthcare";
  if (/school|education|title ix|department of education|student/.test(text))
    return "Education";
  if (/civil rights|dei|discrim|voting|election|schedule|personnel|doge/.test(text))
    return "Civil Rights";
  if (/tariff|trade|tax|labor|econom|housing|mortgage|bank/.test(text))
    return "Economy";
  return "Democracy";
}

function guessSeverity(title: string, actionType: string): number {
  const text = title.toLowerCase();
  let score = 5;
  if (actionType === "Executive Order") score += 1;
  if (/schedule|civil service|excepted|personnel|emergency|suspend|withdraw/.test(text))
    score += 2;
  if (/tariff|trade|immigration|border|voting|election/.test(text)) score += 1;
  if (/commemorat|flag|honor|day of/.test(text)) score = Math.min(score, 3);
  return Math.max(2, Math.min(9, score));
}

function guessPillar(category: TimelineCategory): string {
  switch (category) {
    case "Immigration":
      return "Immigration Enforcement";
    case "Environment":
      return "Energy & Environment";
    case "Healthcare":
      return "Health & Human Services";
    case "Education":
      return "Education";
    case "Economy":
      return "Economy & Regulation";
    case "Civil Rights":
      return "Personnel & Civil Service";
    default:
      return "Executive Authority";
  }
}

/** URLs already covered by curated timeline/citations (not auto-ingest). */
function collectCuratedUrls(): Set<string> {
  const urls = new Set<string>();
  for (const file of [
    join(ROOT, "lib", "data", "timeline-events.ts"),
    join(ROOT, "lib", "data", "citations.ts"),
  ]) {
    if (!existsSync(file)) continue;
    const src = readFileSync(file, "utf8");
    for (const m of src.matchAll(/https:\/\/www\.federalregister\.gov\/[^"'\s]+/g)) {
      urls.add(m[0].replace(/\/$/, "").toLowerCase());
    }
    for (const m of src.matchAll(/https:\/\/www\.whitehouse\.gov\/[^"'\s]+/g)) {
      urls.add(m[0].replace(/\/$/, "").toLowerCase());
    }
  }
  return urls;
}

async function fetchFrPage(url: string): Promise<{
  results: FrDoc[];
  next_page_url?: string | null;
}> {
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": "ProjectSunriseUpdater/1.0" },
  });
  if (!res.ok) {
    throw new Error(`Federal Register API ${res.status} for ${url}`);
  }
  return res.json();
}

async function fetchPresidentialDocs(since: string): Promise<FrDoc[]> {
  const params = new URLSearchParams({
    "conditions[president][]": FR_PRESIDENT,
    "conditions[publication_date][gte]": since,
    per_page: "100",
    order: "newest",
  });
  const all: FrDoc[] = [];
  const seen = new Set<string>();
  let url: string | null = `${FR_BASE}?${params.toString()}`;
  let pages = 0;

  while (url && pages < 5) {
    pages += 1;
    const data = await fetchFrPage(url);
    for (const doc of data.results ?? []) {
      if (!doc.document_number || seen.has(doc.document_number)) continue;
      seen.add(doc.document_number);
      all.push(doc);
    }
    url = data.next_page_url || null;
    if (url && !url.includes("format=json")) {
      url += (url.includes("?") ? "&" : "?") + "format=json";
    }
  }

  all.sort((a, b) => b.publication_date.localeCompare(a.publication_date));
  return all;
}

async function probeObserver(): Promise<{ ok: boolean; status?: number; note: string }> {
  try {
    const res = await fetch(OBSERVER_URL, {
      method: "GET",
      headers: { "User-Agent": "ProjectSunriseUpdater/1.0" },
      redirect: "follow",
    });
    return {
      ok: res.ok,
      status: res.status,
      note: res.ok
        ? "Reachable (no public JSON API; used as external cross-ref only)"
        : `HTTP ${res.status}`,
    };
  } catch (err) {
    return {
      ok: false,
      note: `Unreachable: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}

/** Short plain title for display — never dump 300-char trade investigations. */
function plainTitle(title: string): string {
  const t = title.replace(/\s+/g, " ").trim();
  if (t.length <= MAX_TITLE_CHARS) return t;
  const cut = t.slice(0, MAX_TITLE_CHARS - 1);
  const at = cut.lastIndexOf(" ");
  return `${(at > 40 ? cut.slice(0, at) : cut).trimEnd()}…`;
}

/**
 * High-signal presidential actions only. Reject ceremonial, trade dumps,
 * emergency continuations, and anything without a real policy bite.
 */
function isHighSignalTrackerDoc(doc: FrDoc): boolean {
  const title = (doc.title || "").trim();
  const text = `${title} ${doc.abstract || ""}`.toLowerCase();
  const actionType = classifyActionType(doc);

  if (title.length > MAX_TITLE_CHARS) return false;
  if (
    /anniversary|flag day|honor|commemorat|mother.?s day|father.?s day|prayer|navy mess|golf course/.test(
      text
    )
  ) {
    return false;
  }
  if (
    /section 301|trade act of 1974|investigation under|digital trade|ethanol market|illegal deforestation|phosphate fertilizer|duty-free importation/.test(
      text
    )
  ) {
    return false;
  }
  if (/continuation of the national emergency/.test(text)) return false;

  // Prefer real EOs / memos / Schedule F / immigration / personnel bites
  const highSignal =
    /executive order|schedule (f|policy\/?career)|excepted service|civil service|personnel|doge|immigr|border|asylum|deport|birthright|tariff|emergency|suspend|revoke|rescind|foi(a)?|declass|pardon|immunity|inspector general|voting|election|dei\b|medicaid|medicare|epa|interior|defense production/.test(
      text
    );
  if (!highSignal) return false;

  // Determinations without the keywords above stay out
  if (actionType === "Presidential Determination" && !highSignal) return false;
  return true;
}

function toTimelineEvent(doc: FrDoc): TimelineEvent {
  const actionType = classifyActionType(doc);
  const category = guessCategory(doc.title, doc.abstract);
  const date = doc.publication_date;
  const citationId = `fr_auto_${doc.document_number.replace(/[^0-9A-Za-z]/g, "_")}`;
  const title = plainTitle(doc.title);
  const excerpt =
    (doc.abstract && doc.abstract.trim().slice(0, 280)) ||
    `${actionType} (${doc.document_number}) published in the Federal Register.`;

  return {
    Event_ID: slugId(date, doc.document_number),
    Date: date,
    Action_Type: actionType,
    Description: title,
    Severity_Score: guessSeverity(doc.title, actionType),
    Impacted_Sectors: [category],
    Sources: [
      {
        id: citationId,
        title,
        publisher: "Federal Register",
        url: doc.html_url,
        waybackUrl: wayback(doc.html_url),
        excerpt,
        date,
      },
    ],
    Linked_Fix_ID: null,
    category,
    p2025Pillar: guessPillar(category),
    externalTrackers: [
      { name: "project2025.observer", url: OBSERVER_URL },
      {
        name: "CPR Executive Action Tracker",
        url: "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
      },
    ],
  };
}

function writeAutoEventsTs(events: TimelineEvent[], meta: Record<string, unknown>) {
  const body = JSON.stringify(events, null, 2);
  const metaBody = JSON.stringify(meta, null, 2);
  const file = `/**
 * Auto-ingested tracker events from Federal Register (and related public feeds).
 * Regenerated by: npm run refresh:tracker (scripts/update-tracker-data.ts)
 *
 * Do not hand-edit — curated narrative events live in timeline-events.ts.
 */
import type { TimelineEvent } from "@/lib/types";

export const autoTimelineEvents: TimelineEvent[] = ${body} as TimelineEvent[];

export const autoTrackerMeta = ${metaBody} as const;
`;
  writeFileSync(AUTO_TS, file, "utf8");
}

function runLegislationRefresh(): void {
  console.log("── Legislation refresh (fetch-legislation) ──");
  const result = spawnSync("npx", ["tsx", "scripts/fetch-legislation.ts"], {
    cwd: ROOT,
    stdio: "inherit",
    env: process.env,
    shell: true,
  });
  if (result.status !== 0) {
    console.warn(
      `Legislation refresh exited ${result.status ?? "null"} — continuing (fail soft).`
    );
  }
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const since = isoDateDaysAgo(LOOKBACK_DAYS);
  console.log(`[tracker] Lookback since ${since} (${LOOKBACK_DAYS} days)`);
  console.log(
    `[tracker] FR_AUTO=${FR_AUTO_ENABLED ? "ON" : "OFF (default curated-only)"} maxTitle=${MAX_TITLE_CHARS}`
  );

  const curatedUrls = collectCuratedUrls();
  console.log(`[tracker] Curated Federal Register / WH URLs: ${curatedUrls.size}`);

  const observer = await probeObserver();
  console.log(`[tracker] project2025.observer: ${observer.note}`);

  let docs: FrDoc[] = [];
  let freshDocs: FrDoc[] = [];
  let capped: FrDoc[] = [];
  let autoEvents: TimelineEvent[] = [];
  let newlyAdded: FrDoc[] = [];

  if (!FR_AUTO_ENABLED) {
    console.log(
      "[tracker] Skipping FR auto-ingest (TRACKER_FR_AUTO!=1) — clearing EVT-AUTO stubs"
    );
  } else {
    console.log("[tracker] Fetching Federal Register presidential documents…");
    try {
      docs = await fetchPresidentialDocs(since);
      console.log(`[tracker] Fetched ${docs.length} presidential documents`);
    } catch (err) {
      console.warn(
        `[tracker] Federal Register fetch failed (fail soft): ${
          err instanceof Error ? err.message : String(err)
        }`
      );
      docs = [];
    }

    for (const doc of docs) {
      const url = (doc.html_url || "").replace(/\/$/, "").toLowerCase();
      if (!url || curatedUrls.has(url)) continue;
      if (!isHighSignalTrackerDoc(doc)) continue;
      freshDocs.push(doc);
    }

    capped = freshDocs.slice(0, MAX_NEW);
    console.log(
      `[tracker] High-signal not in curated: ${freshDocs.length} (keeping up to ${MAX_NEW}: ${capped.length})`
    );

    // Fresh run only — do not accumulate prior low-quality stubs.
    const byId = new Map<string, TimelineEvent>();
    for (const doc of capped) {
      const event = toTimelineEvent(doc);
      byId.set(event.Event_ID, event);
    }
    autoEvents = [...byId.values()].sort((a, b) => b.Date.localeCompare(a.Date));
    newlyAdded = capped;
  }

  const meta = {
    generatedAt: new Date().toISOString(),
    source: "federalregister.gov",
    president: FR_PRESIDENT,
    lookbackDays: LOOKBACK_DAYS,
    frAutoEnabled: FR_AUTO_ENABLED,
    maxTitleChars: MAX_TITLE_CHARS,
    fetchedCount: docs.length,
    notInCurated: freshDocs.length,
    newlyAddedCount: newlyAdded.length,
    autoEventCount: autoEvents.length,
    observer,
    note: FR_AUTO_ENABLED
      ? "Opt-in FR auto with high-signal + short-title filter"
      : "Curated-only: FR→tracker auto disabled (TRACKER_FR_AUTO!=1)",
  };

  writeAutoEventsTs(autoEvents, meta);

  const livePayload = {
    ...meta,
    documents: docs.map((d) => ({
      document_number: d.document_number,
      title: d.title,
      publication_date: d.publication_date,
      html_url: d.html_url,
      type: d.presidential_document_type,
      isNew: newlyAdded.some((n) => n.document_number === d.document_number),
    })),
    autoEvents,
  };
  writeFileSync(LIVE_FILE, JSON.stringify(livePayload, null, 2), "utf8");

  console.log(`✅ Wrote ${LIVE_FILE}`);
  console.log(`✅ Wrote ${AUTO_TS} (${autoEvents.length} auto events)`);
  if (newlyAdded.length > 0) {
    console.log("   Newly added this run:");
    for (const d of newlyAdded.slice(0, 15)) {
      console.log(`   · ${d.publication_date} ${d.document_number} — ${plainTitle(d.title)}`);
    }
    if (newlyAdded.length > 15) {
      console.log(`   · …and ${newlyAdded.length - 15} more`);
    }
  } else {
    console.log("   No auto tracker events this run (curated facts only).");
  }

  runLegislationRefresh();
}

main().catch((err) => {
  console.error("[tracker] FATAL:", err);
  process.exit(0);
});
