/**
 * Refresh Distraction / Cover-up Watch auto stubs from public signals.
 *
 * DEFAULT: writes EMPTY auto stubs. Curated narrative in distractions.ts is
 * the only Distracted content on the live site.
 *
 * Federal Register → Distracted is OFF by default forever
 * (`DISTRACTED_FR_AUTO=1` required to opt in). Even when enabled, only
 * hard distraction keywords (Epstein / Schedule F / culture-war flashbangs)
 * pass — never trade investigations, emergency continuations, or title dumps.
 *
 * Writes:
 *   - public/data/distracted-live.json
 *   - lib/data/distracted-auto.ts  (DIST-AUTO-* stubs; empty unless opt-in)
 *
 * Usage:
 *   npm run refresh:distracted
 *   npx tsx scripts/update-distracted-data.ts
 */
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  readFileSync,
} from "fs";
import { join } from "path";
import type { DistractionEntry } from "../lib/types";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "data");
const LIVE_FILE = join(OUT_DIR, "distracted-live.json");
const AUTO_TS = join(ROOT, "lib", "data", "distracted-auto.ts");
const CURATED_TS = join(ROOT, "lib", "data", "distractions.ts");

const FR_BASE = "https://www.federalregister.gov/api/v1/documents.json";
const LOOKBACK_DAYS = Number(process.env.DISTRACTED_LOOKBACK_DAYS || "21");
const MAX_NEW = Number(process.env.DISTRACTED_MAX_NEW || "8");
const FR_PRESIDENT = process.env.FR_PRESIDENT || "donald-trump";
const NPR_RSS =
  process.env.DISTRACTED_RSS_URL ||
  "https://feeds.npr.org/1014/rss.xml";

/** OFF by default — never pollute Distracted with FR title dumps. */
const FR_AUTO_ENABLED = process.env.DISTRACTED_FR_AUTO === "1";
/** Headline RSS also OFF by default (curated-only site). */
const RSS_AUTO_ENABLED = process.env.DISTRACTED_RSS_AUTO === "1";
/** Congress bill stubs OFF by default. */
const CONGRESS_AUTO_ENABLED = process.env.DISTRACTED_CONGRESS_AUTO === "1";

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

function slugId(date: string, key: string): string {
  const ymd = date.replace(/-/g, "").slice(0, 8);
  const num = key.replace(/[^0-9A-Za-z-]/g, "").slice(-10);
  return `DIST-AUTO-${ymd}-${num}`;
}

/**
 * Ruthlessly narrow: only known distraction-pattern flashbangs.
 * Trade / tariff / Section 301 / emergency continuations NEVER qualify.
 */
function isHardDistractionSignal(title: string, abstract?: string | null): boolean {
  const text = `${title} ${abstract || ""}`.toLowerCase();

  // Hard reject bureaucratic / ceremonial / trade noise
  if (
    /section 301|trade act|investigation under|preferential tariff|digital trade|ethanol|deforestation|phosphate|golf course|anniversary|flag day|commemorat|national emergency with respect to|continuation of the national emergency|duty-free importation|trafficking victims protection|determination on assistance|determination concerning/.test(
      text
    )
  ) {
    return false;
  }
  // Reject long title dumps (real flashbangs are short)
  if (title.trim().length > 140) return false;

  return /epstein|schedule (f|policy\/?career)|excepted service|civil service|personnel|doge|dei\b|woke|crt\b|critical race|groomer|trans athlete|pride month|book ban|replacement theory|deep state|hunter biden|whatabout|culture war|gender ideology|birthright|sanctuary|mass deport|inspector general|special counsel|foi(a)?\b|declassif|pardon of|immunity/.test(
    text
  );
}

function guessCategories(title: string, abstract?: string | null): string[] {
  const text = `${title} ${abstract || ""}`.toLowerCase();
  const cats: string[] = [];
  if (/epstein|foi|declass|special counsel|pardon|immunity|inspector/.test(text))
    cats.push("Epstein / Transparency");
  if (/schedule|personnel|excepted|civil service|doge/.test(text))
    cats.push("Project 2025");
  if (/dei|woke|crt|groomer|trans|pride|book ban|gender|culture/.test(text))
    cats.push("Culture War");
  if (/immigr|border|asylum|deport|sanctuary|birthright|replacement/.test(text))
    cats.push("Immigration");
  if (/election|voting|deep state|hunter|whatabout/.test(text))
    cats.push("Whataboutism");
  if (cats.length === 0) cats.push("Admin Pattern");
  return cats;
}

function guessSeverity(title: string): number {
  const text = title.toLowerCase();
  let score = 6;
  if (/epstein|schedule|excepted|declass|pardon|immunity/.test(text)) score += 2;
  if (/dei|woke|crt|groomer|trans/.test(text)) score += 1;
  return Math.max(5, Math.min(9, score));
}

function shortTitle(title: string, maxWords = 12): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return title.trim();
  return `${words.slice(0, maxWords).join(" ")}…`;
}

function collectCuratedIds(): Set<string> {
  const ids = new Set<string>();
  if (!existsSync(CURATED_TS)) return ids;
  const src = readFileSync(CURATED_TS, "utf8");
  for (const m of src.matchAll(/id:\s*"([^"]+)"/g)) {
    ids.add(m[1]);
  }
  return ids;
}

function collectCuratedSourceUrls(): Set<string> {
  const urls = new Set<string>();
  if (!existsSync(CURATED_TS)) return urls;
  const src = readFileSync(CURATED_TS, "utf8");
  for (const m of src.matchAll(/url:\s*"(https?:\/\/[^"]+)"/g)) {
    urls.add(m[1].replace(/\/$/, "").toLowerCase());
  }
  return urls;
}

async function fetchFrPage(url: string): Promise<{
  results: FrDoc[];
  next_page_url?: string | null;
}> {
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "ProjectSunriseDistractedUpdater/1.0",
    },
  });
  if (!res.ok) throw new Error(`Federal Register API ${res.status}`);
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
  while (url && pages < 4) {
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
  return all;
}

function frToEntry(doc: FrDoc): DistractionEntry {
  const date = doc.publication_date;
  const abstract =
    (doc.abstract && doc.abstract.trim()) ||
    "Federal Register document matching a known distraction-pattern keyword — pending editorial correlation.";
  return {
    id: slugId(date, doc.document_number),
    date,
    title: shortTitle(doc.title, 18),
    distraction: shortTitle(doc.title, 14),
    coveringUp:
      "Editorial pending: correlate against same-day tracker severity and disclosure fights before publishing a bury line.",
    whyTheyDoIt:
      "Flashbang headlines and spectacle docs can redirect attention from costly structural moves.",
    whyPeopleBelieveIt:
      "A dated official document feels authoritative even when it is noise.",
    howToSpotIt:
      "Ask what else moved the same day on tracker, Congress, FOIA, and dockets — then wait for a curated card.",
    severity: guessSeverity(doc.title),
    categories: guessCategories(doc.title, doc.abstract),
    sources: [
      {
        id: `fr_dist_${doc.document_number.replace(/[^0-9A-Za-z]/g, "_")}`,
        title: shortTitle(doc.title, 18),
        publisher: "Federal Register",
        url: doc.html_url,
        waybackUrl: wayback(doc.html_url),
        excerpt: abstract.slice(0, 400),
        date,
      },
    ],
  };
}

type RssItem = { title: string; link: string; pubDate?: string };

async function fetchRssHeadlines(): Promise<RssItem[]> {
  try {
    const res = await fetch(NPR_RSS, {
      headers: { "User-Agent": "ProjectSunriseDistractedUpdater/1.0" },
      redirect: "follow",
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items: RssItem[] = [];
    for (const block of xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)) {
      const chunk = block[1];
      const title = chunk.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/i);
      const link = chunk.match(/<link>(.*?)<\/link>/i);
      const pubDate = chunk.match(/<pubDate>(.*?)<\/pubDate>/i);
      const t = (title?.[1] || title?.[2] || "").trim();
      const href = (link?.[1] || "").trim();
      if (!t || !href) continue;
      items.push({ title: t, link: href, pubDate: pubDate?.[1] });
      if (items.length >= 20) break;
    }
    return items;
  } catch {
    return [];
  }
}

function rssToEntry(item: RssItem): DistractionEntry | null {
  const text = item.title.toLowerCase();
  if (
    !/epstein|schedule f|excepted service|scandal|outrage|woke|dei\b|crt\b|groomer|trans athlete|deep state|hunter|witch hunt|stolen election|migrant crime|caravan|marxist|antifa|book ban|pride|replacement/.test(
      text
    )
  ) {
    return null;
  }
  let date = new Date().toISOString().slice(0, 10);
  if (item.pubDate) {
    const parsed = new Date(item.pubDate);
    if (!Number.isNaN(parsed.getTime())) date = parsed.toISOString().slice(0, 10);
  }
  const key = Buffer.from(item.link).toString("base64url").slice(0, 10);
  return {
    id: slugId(date, key),
    date,
    title: shortTitle(item.title, 16),
    distraction: shortTitle(item.title, 12),
    coveringUp:
      "Editorial pending: check concurrent tracker harm and disclosure deadlines before a bury line.",
    whyTheyDoIt:
      "Headline gravity redirects attention from costly policy or disclosure deadlines.",
    whyPeopleBelieveIt:
      "Repetition and emotion make the shiny object feel more urgent than structural harm.",
    howToSpotIt:
      "Compare the headline date with same-week tracker and legislation spikes.",
    severity: guessSeverity(item.title),
    categories: guessCategories(item.title, null),
    sources: [
      {
        id: `rss_dist_${key}`,
        title: shortTitle(item.title, 16),
        publisher: "NPR Politics (RSS)",
        url: item.link,
        waybackUrl: wayback(item.link),
        excerpt: "High-signal headline ingested as a distraction candidate stub.",
        date,
      },
    ],
  };
}

type CongressBill = {
  number?: string;
  title?: string;
  originChamber?: string;
  latestAction?: { actionDate?: string; text?: string };
  url?: string;
};

async function fetchCongressBills(): Promise<DistractionEntry[]> {
  if (!CONGRESS_AUTO_ENABLED) return [];
  const key =
    process.env.CONGRESS_API_KEY ||
    process.env.CONGRESS_GOV_API_KEY ||
    process.env.DATA_GOV_API_KEY;
  if (!key || key.trim().length < 4) return [];
  try {
    const url = `https://api.congress.gov/v3/bill/119?format=json&limit=40&sort=updateDate+desc&api_key=${key.trim()}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "ProjectSunriseDistractedUpdater/1.0",
      },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { bills?: CongressBill[] };
    const out: DistractionEntry[] = [];
    for (const bill of data.bills ?? []) {
      const title = bill.title || bill.number || "Untitled bill";
      if (!isHardDistractionSignal(title, bill.latestAction?.text)) continue;
      const date =
        bill.latestAction?.actionDate || new Date().toISOString().slice(0, 10);
      const billUrl =
        bill.url ||
        `https://www.congress.gov/bill/119th-congress/${(bill.originChamber || "house").toLowerCase()}-bill/${(bill.number || "").replace(/\D/g, "")}`;
      const num = (bill.number || title).replace(/[^0-9A-Za-z]/g, "").slice(-10);
      out.push({
        id: slugId(date, `bill-${num}`),
        date,
        title: shortTitle(`${bill.number || "Bill"}: ${title}`, 16),
        distraction: shortTitle(title, 12),
        coveringUp:
          "Editorial pending: correlate against higher-severity tracker actions before a bury line.",
        whyTheyDoIt:
          "Floor theatrics and messaging bills can drown out harmful executive actions.",
        whyPeopleBelieveIt:
          "Congress.gov updates and cable chyron make legislation feel like the only real fight.",
        howToSpotIt:
          "Compare the bill action date with same-week tracker spikes.",
        severity: 6,
        categories: ["Legislation", ...guessCategories(title, bill.latestAction?.text)],
        sources: [
          {
            id: `congress_dist_${num}`,
            title: String(bill.number || shortTitle(title, 12)),
            publisher: "Congress.gov",
            url: billUrl,
            waybackUrl: wayback(billUrl),
            excerpt: bill.latestAction?.text || "Recent congressional activity.",
            date,
          },
        ],
      });
    }
    return out;
  } catch {
    return [];
  }
}

function writeAutoTs(entries: DistractionEntry[], meta: Record<string, unknown>) {
  const body = JSON.stringify(entries, null, 2);
  const metaBody = JSON.stringify(meta, null, 2);
  const file = `/**
 * Auto-ingested Distraction Watch stubs (DIST-AUTO-*).
 * Regenerated by: npm run refresh:distracted (scripts/update-distracted-data.ts)
 *
 * DEFAULT: empty. FR→Distracted requires DISTRACTED_FR_AUTO=1.
 * Curated narrative entries live in distractions.ts.
 */
import type { DistractionEntry } from "@/lib/types";

export const autoDistractedEntries: DistractionEntry[] = ${body} as DistractionEntry[];

export const autoDistractedMeta = ${metaBody} as const;
`;
  writeFileSync(AUTO_TS, file, "utf8");
}

function ensureMergeHelper(): void {
  const helper = join(ROOT, "lib", "data", "distracted-with-auto.ts");
  writeFileSync(
    helper,
    `/**
 * Re-export of curated + auto Distraction Watch entries.
 * Canonical merge: lib/data/distractions.ts (imports distracted-auto.ts).
 * Live site is curated-first; auto stubs stay empty unless explicitly enabled.
 */
export {
  distractions as distractedEntries,
  getDistractionById as getDistractedById,
} from "./distractions";
`,
    "utf8"
  );
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(join(ROOT, "lib", "data"), { recursive: true });

  const since = isoDateDaysAgo(LOOKBACK_DAYS);
  console.log(`[distracted] Lookback since ${since} (${LOOKBACK_DAYS} days)`);
  console.log(
    `[distracted] FR_AUTO=${FR_AUTO_ENABLED ? "ON" : "OFF (default)"} RSS_AUTO=${RSS_AUTO_ENABLED ? "ON" : "OFF (default)"} CONGRESS_AUTO=${CONGRESS_AUTO_ENABLED ? "ON" : "OFF (default)"}`
  );

  const curatedIds = collectCuratedIds();
  const curatedUrls = collectCuratedSourceUrls();
  console.log(
    `[distracted] Curated ids: ${curatedIds.size}, curated source URLs: ${curatedUrls.size}`
  );

  let docs: FrDoc[] = [];
  let frCandidates: FrDoc[] = [];
  if (FR_AUTO_ENABLED) {
    try {
      docs = await fetchPresidentialDocs(since);
      console.log(`[distracted] Federal Register docs: ${docs.length}`);
    } catch (err) {
      console.warn(
        `[distracted] FR fetch failed (fail soft): ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
    frCandidates = docs.filter((d) => isHardDistractionSignal(d.title, d.abstract));
    console.log(`[distracted] Hard-signal FR candidates: ${frCandidates.length}`);
  } else {
    console.log(
      "[distracted] Skipping Federal Register ingest (DISTRACTED_FR_AUTO!=1) — curated only"
    );
  }

  let rssItems: RssItem[] = [];
  if (RSS_AUTO_ENABLED) {
    rssItems = await fetchRssHeadlines();
    console.log(`[distracted] RSS headlines fetched: ${rssItems.length}`);
  } else {
    console.log("[distracted] Skipping RSS ingest (DISTRACTED_RSS_AUTO!=1)");
  }

  const congressEntries = await fetchCongressBills();
  if (CONGRESS_AUTO_ENABLED) {
    console.log(`[distracted] Congress stubs: ${congressEntries.length}`);
  }

  // Do NOT carry forward prior auto junk — each run starts clean.
  const fresh: DistractionEntry[] = [];
  if (FR_AUTO_ENABLED) {
    for (const doc of frCandidates.slice(0, MAX_NEW)) {
      const url = (doc.html_url || "").replace(/\/$/, "").toLowerCase();
      if (url && curatedUrls.has(url)) continue;
      const entry = frToEntry(doc);
      if (curatedIds.has(entry.id)) continue;
      fresh.push(entry);
    }
  }
  if (RSS_AUTO_ENABLED) {
    for (const item of rssItems) {
      const entry = rssToEntry(item);
      if (!entry) continue;
      const url = entry.sources[0]?.url?.replace(/\/$/, "").toLowerCase();
      if (url && curatedUrls.has(url)) continue;
      if (curatedIds.has(entry.id)) continue;
      fresh.push(entry);
    }
  }
  for (const entry of congressEntries.slice(0, 5)) {
    if (curatedIds.has(entry.id)) continue;
    fresh.push(entry);
  }

  const autoEntries = fresh
    .slice(0, MAX_NEW)
    .sort((a, b) => b.date.localeCompare(a.date));

  const meta = {
    generatedAt: new Date().toISOString(),
    lookbackDays: LOOKBACK_DAYS,
    frAutoEnabled: FR_AUTO_ENABLED,
    rssAutoEnabled: RSS_AUTO_ENABLED,
    congressAutoEnabled: CONGRESS_AUTO_ENABLED,
    frFetched: docs.length,
    frCandidates: frCandidates.length,
    rssFetched: rssItems.length,
    congressCount: congressEntries.length,
    newlyAddedCount: autoEntries.length,
    autoEntryCount: autoEntries.length,
    curatedIdCount: curatedIds.size,
    note: FR_AUTO_ENABLED
      ? "Opt-in FR auto enabled with hard-signal filter only"
      : "Curated-only: FR→Distracted disabled (DISTRACTED_FR_AUTO!=1)",
  };

  writeAutoTs(autoEntries, meta);
  ensureMergeHelper();

  writeFileSync(
    LIVE_FILE,
    JSON.stringify({ ...meta, autoEntries }, null, 2),
    "utf8"
  );

  console.log(`✅ Wrote ${LIVE_FILE}`);
  console.log(`✅ Wrote ${AUTO_TS} (${autoEntries.length} auto stubs)`);
  if (autoEntries.length > 0) {
    console.log("   Auto stubs this run:");
    for (const e of autoEntries.slice(0, 12)) {
      console.log(`   · ${e.date} ${e.id} — ${e.title}`);
    }
  } else {
    console.log("   No auto stubs — Distracted stays curated-only.");
  }
}

main().catch((err) => {
  console.error("[distracted] FATAL:", err);
  process.exit(0); // fail soft for updater loop
});
