/**
 * Refresh Distraction / Cover-up Watch auto stubs from public signals.
 *
 * Sources (fail soft):
 *   - Federal Register presidential documents (high-signal FOIA / emergency /
 *     personnel / immigration / tariff actions → distraction candidates)
 *   - Congress.gov recent bills when CONGRESS_API_KEY is set
 *   - NPR Politics RSS headlines (context stubs)
 *
 * Writes:
 *   - public/data/distracted-live.json
 *   - lib/data/distracted-auto.ts  (DIST-AUTO-* stubs merged at build)
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
const MAX_NEW = Number(process.env.DISTRACTED_MAX_NEW || "25");
const FR_PRESIDENT = process.env.FR_PRESIDENT || "donald-trump";
const NPR_RSS =
  process.env.DISTRACTED_RSS_URL ||
  "https://feeds.npr.org/1014/rss.xml";

type FrDoc = {
  title: string;
  abstract?: string | null;
  document_number: string;
  html_url: string;
  publication_date: string;
  presidential_document_type?: string | string[];
};

function wayback(url: string): string {
  return `https://web.archive.org/web/${url}`;
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

/** High-signal FR titles that often coincide with news-cycle diversions. */
function isDistractionSignal(title: string, abstract?: string | null): boolean {
  const text = `${title} ${abstract || ""}`.toLowerCase();
  // Skip pure ceremonial / commemorative proclamations
  if (
    /anniversary|flag|honor|day of|commemorat|thanksgiving|mother.?s day|father.?s day|prayer/.test(
      text
    ) &&
    !/emergency|suspend|revoke|schedule|personnel|excepted|tariff|immigr|border|pardon|immunity|foi|classif/.test(
      text
    )
  ) {
    return false;
  }
  return /emergency|executive order|memorandum|determination|emergency|tariff|trade|immigr|border|asylum|deport|schedule f|excepted service|personnel|civil service|doge|foi|freedom of information|classif|declass|pardon|immunity|special counsel|inspector general|ethics|lobby|sanctions|withdraw|rescind|suspend|national security|defense production|national guard|election|voting|census|medicaid|medicare|aca|climate|epa|doi|interior|land|forest|lease|drill/.test(
    text
  );
}

function guessCategories(title: string, abstract?: string | null): string[] {
  const text = `${title} ${abstract || ""}`.toLowerCase();
  const cats: string[] = [];
  if (/immigr|border|asylum|deport/.test(text)) cats.push("Immigration");
  if (/tariff|trade|tax|econom|labor/.test(text)) cats.push("Economy");
  if (/foi|classif|declass|pardon|immunity|special counsel|ethics|inspector/.test(text))
    cats.push("Accountability");
  if (/schedule|personnel|excepted|civil service|doge/.test(text))
    cats.push("Personnel");
  if (/election|voting|census/.test(text)) cats.push("Democracy");
  if (/health|medicaid|medicare|aca|fda|cdc/.test(text)) cats.push("Healthcare");
  if (/climate|epa|energy|land|forest|drill|lease/.test(text))
    cats.push("Environment");
  if (/culture|dei|woke|gender|crt|pride|sports/.test(text)) cats.push("Culture War");
  if (cats.length === 0) cats.push("News Cycle");
  return cats;
}

function guessSeverity(title: string): number {
  const text = title.toLowerCase();
  let score = 5;
  if (/emergency|suspend|revoke|pardon|immunity|schedule|excepted/.test(text))
    score += 2;
  if (/tariff|immigr|border|foi|classif|election/.test(text)) score += 1;
  if (/commemorat|flag|honor|day of/.test(text)) score = Math.min(score, 3);
  return Math.max(3, Math.min(9, score));
}

/** Keep auto stub distraction lines scannable (~15 words). */
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

function loadPriorAuto(): DistractionEntry[] {
  if (!existsSync(LIVE_FILE)) return [];
  try {
    const live = JSON.parse(readFileSync(LIVE_FILE, "utf8")) as {
      autoEntries?: DistractionEntry[];
    };
    return live.autoEntries ?? [];
  } catch {
    return [];
  }
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
    "Federal Register presidential document - auto-stub pending editorial pass.";
  return {
    id: slugId(date, doc.document_number),
    date,
    title: doc.title,
    distraction: `Official FR spotlight: ${shortTitle(doc.title)}`,
    coveringUp:
      "Same-day tracker severity, disclosure fights, or floor votes this may bury.",
    whyTheyDoIt:
      "A fresh official action steals oxygen from accountability stories.",
    whyPeopleBelieveIt:
      "A Federal Register doc feels like the main story because it is dated and quotable.",
    howToSpotIt:
      "Ask what else moved the same day on tracker, Congress, FOIA, and dockets.",
    severity: guessSeverity(doc.title),
    categories: guessCategories(doc.title, doc.abstract),
    sources: [
      {
        id: `fr_dist_${doc.document_number.replace(/[^0-9A-Za-z]/g, "_")}`,
        title: doc.title,
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
  // Only keep headlines that look like outrage / culture-war / scandal bait
  if (
    !/scandal|outrage|woke|dei|border|invasion|fraud|rigged|hoax|witch hunt|deep state|epstein|hunter|impeach|riot|antifa|crt|trans|migrant|caravan|groom|marxist|socialist|stolen|rigged/.test(
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
    title: item.title,
    distraction: shortTitle(item.title),
    coveringUp:
      "Concurrent policy harm, disclosure fights, or tracker events pending review.",
    whyTheyDoIt:
      "Headline gravity redirects attention from costly policy or disclosure deadlines.",
    whyPeopleBelieveIt:
      "Repetition and emotion make the shiny object feel more urgent than structural harm.",
    howToSpotIt:
      "Check the same date on tracker and legislation; ask who benefits if you only talk about this.",
    severity: guessSeverity(item.title),
    categories: guessCategories(item.title, null),
    sources: [
      {
        id: `rss_dist_${key}`,
        title: item.title,
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
      const date =
        bill.latestAction?.actionDate || new Date().toISOString().slice(0, 10);
      const billUrl =
        bill.url ||
        `https://www.congress.gov/bill/119th-congress/${(bill.originChamber || "house").toLowerCase()}-bill/${(bill.number || "").replace(/\D/g, "")}`;
      const num = (bill.number || title).replace(/[^0-9A-Za-z]/g, "").slice(-10);
      out.push({
        id: slugId(date, `bill-${num}`),
        date,
        title: `${bill.number || "Bill"}: ${title}`,
        distraction: `Legislative spotlight: ${shortTitle(title)}`,
        coveringUp:
          "Higher-severity tracker actions or stalled accountability votes this cycle may bury.",
        whyTheyDoIt:
          "Floor theatrics and messaging bills can drown out harmful executive actions.",
        whyPeopleBelieveIt:
          "Congress.gov updates and cable chyron make legislation feel like the only real fight.",
        howToSpotIt:
          "Compare the bill action date with same-week Federal Register and tracker spikes.",
        severity: 5,
        categories: ["Legislation", ...guessCategories(title, bill.latestAction?.text)],
        sources: [
          {
            id: `congress_dist_${num}`,
            title: String(bill.number || title),
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
 * Do not hand-edit — curated narrative entries live in distractions.ts
 * (merged there with autoDistractedEntries).
 */
import type { DistractionEntry } from "@/lib/types";

export const autoDistractedEntries: DistractionEntry[] = ${body} as DistractionEntry[];

export const autoDistractedMeta = ${metaBody} as const;
`;
  writeFileSync(AUTO_TS, file, "utf8");
}

/**
 * Keep a thin re-export for scripts/docs. Canonical merge lives in distractions.ts.
 * Never overwrite curated lib/data/distractions.ts.
 */
function ensureMergeHelper(): void {
  const helper = join(ROOT, "lib", "data", "distracted-with-auto.ts");
  writeFileSync(
    helper,
    `/**
 * Re-export of curated + auto Distraction Watch entries.
 * Canonical merge: lib/data/distractions.ts (imports distracted-auto.ts).
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

  const curatedIds = collectCuratedIds();
  const curatedUrls = collectCuratedSourceUrls();
  console.log(
    `[distracted] Curated ids: ${curatedIds.size}, curated source URLs: ${curatedUrls.size}`
  );

  let docs: FrDoc[] = [];
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

  const frCandidates = docs.filter((d) =>
    isDistractionSignal(d.title, d.abstract)
  );
  console.log(`[distracted] High-signal FR candidates: ${frCandidates.length}`);

  const rssItems = await fetchRssHeadlines();
  console.log(`[distracted] RSS headlines fetched: ${rssItems.length}`);

  const congressEntries = await fetchCongressBills();
  console.log(`[distracted] Congress stubs: ${congressEntries.length}`);

  const fresh: DistractionEntry[] = [];
  for (const doc of frCandidates.slice(0, MAX_NEW)) {
    const url = (doc.html_url || "").replace(/\/$/, "").toLowerCase();
    if (url && curatedUrls.has(url)) continue;
    const entry = frToEntry(doc);
    if (curatedIds.has(entry.id)) continue;
    fresh.push(entry);
  }
  for (const item of rssItems) {
    const entry = rssToEntry(item);
    if (!entry) continue;
    const url = entry.sources[0]?.url?.replace(/\/$/, "").toLowerCase();
    if (url && curatedUrls.has(url)) continue;
    if (curatedIds.has(entry.id)) continue;
    fresh.push(entry);
  }
  for (const entry of congressEntries.slice(0, 10)) {
    if (curatedIds.has(entry.id)) continue;
    fresh.push(entry);
  }

  const prior = loadPriorAuto().filter((e) => !curatedIds.has(e.id));
  const byId = new Map<string, DistractionEntry>();
  for (const e of prior) byId.set(e.id, e);
  for (const e of fresh.slice(0, MAX_NEW)) byId.set(e.id, e);

  const autoEntries = [...byId.values()].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  const newlyAdded = fresh.filter((e) => !prior.some((p) => p.id === e.id));

  const meta = {
    generatedAt: new Date().toISOString(),
    lookbackDays: LOOKBACK_DAYS,
    frFetched: docs.length,
    frCandidates: frCandidates.length,
    rssFetched: rssItems.length,
    congressCount: congressEntries.length,
    newlyAddedCount: newlyAdded.length,
    autoEntryCount: autoEntries.length,
    curatedIdCount: curatedIds.size,
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
  if (newlyAdded.length > 0) {
    console.log("   Newly added this run:");
    for (const e of newlyAdded.slice(0, 12)) {
      console.log(`   · ${e.date} ${e.id} — ${e.title}`);
    }
    if (newlyAdded.length > 12) {
      console.log(`   · …and ${newlyAdded.length - 12} more`);
    }
  } else {
    console.log("   No newly added distraction stubs this run.");
  }
}

main().catch((err) => {
  console.error("[distracted] FATAL:", err);
  process.exit(0); // fail soft for updater loop
});
