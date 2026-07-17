/**
 * Refresh legislation tracker data every updater cycle.
 *
 * With CONGRESS_API_KEY (or CONGRESS_GOV_API_KEY / DATA_GOV_API_KEY):
 *   Fetches recent 119th Congress bills from api.congress.gov and writes
 *   public/data/legislation-live.json (status skeleton for merge/audit).
 *
 * Without a key:
 *   Still runs — probes Senate active-legislation index reachability, bumps
 *   curated lastUpdated stamp in public/data/legislation-live.json, and
 *   prints curation status. Curated lib/data/legislation.ts remains UI source.
 *
 * Usage:
 *   CONGRESS_API_KEY=... npx tsx scripts/fetch-legislation.ts
 *   npm run fetch-legislation
 */
import {
  writeFileSync,
  mkdirSync,
  existsSync,
  readFileSync,
} from "fs";
import { join } from "path";

const CONGRESS = 119;
const API_BASE = "https://api.congress.gov/v3";
const SENATE_ACTIVE =
  "https://www.senate.gov/legislative/active_leg_page.htm";
const OUT_DIR = join(process.cwd(), "public", "data");
const OUT_FILE = join(OUT_DIR, "legislation-live.json");
const META_HINT = join(process.cwd(), "lib", "data", "legislation.ts");

function getApiKey(): string | undefined {
  const raw =
    process.env.CONGRESS_API_KEY ||
    process.env.CONGRESS_GOV_API_KEY ||
    process.env.DATA_GOV_API_KEY;
  const key = raw?.trim();
  return key && key.length > 4 ? key : undefined;
}

async function fetchJson(url: string, apiKey: string) {
  const sep = url.includes("?") ? "&" : "?";
  const res = await fetch(`${url}${sep}format=json&api_key=${apiKey}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Congress.gov API ${res.status} for ${url}`);
  }
  return res.json();
}

function readCuratedMeta(): {
  lastUpdated?: string;
  billCount: number;
  floorCount: number;
} {
  if (!existsSync(META_HINT)) {
    return { billCount: 0, floorCount: 0 };
  }
  const src = readFileSync(META_HINT, "utf8");
  const match = src.match(/lastUpdated:\s*"([^"]+)"/);
  const billCount = (src.match(/billNumber:/g) || []).length;
  const floorCount = (src.match(/status:\s*"floor"/g) || []).length;
  return {
    lastUpdated: match?.[1],
    billCount,
    floorCount,
  };
}

async function probeSenateActive(): Promise<{
  ok: boolean;
  status?: number;
  note: string;
}> {
  try {
    const res = await fetch(SENATE_ACTIVE, {
      headers: { Accept: "text/html" },
      redirect: "follow",
    });
    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        note: `Senate active-leg probe HTTP ${res.status}`,
      };
    }
    const html = await res.text();
    const updated = html.match(/Last Updated:\s*([A-Za-z]+ \d{1,2}, \d{4})/i);
    return {
      ok: true,
      status: res.status,
      note: updated
        ? `Senate active-leg reachable (Last Updated: ${updated[1]})`
        : "Senate active-leg reachable",
    };
  } catch (err) {
    return {
      ok: false,
      note: `Senate active-leg probe failed: ${
        err instanceof Error ? err.message : String(err)
      }`,
    };
  }
}

async function fetchFromApi(apiKey: string) {
  console.log(`Fetching 119th Congress bills from api.congress.gov…`);

  const house = await fetchJson(
    `${API_BASE}/bill/${CONGRESS}/hr?limit=50&sort=updateDate+desc`,
    apiKey
  );
  const senate = await fetchJson(
    `${API_BASE}/bill/${CONGRESS}/s?limit=50&sort=updateDate+desc`,
    apiKey
  );

  return {
    houseBills: house?.bills ?? [],
    senateBills: senate?.bills ?? [],
    source: "api.congress.gov" as const,
  };
}

async function main() {
  const apiKey = getApiKey();
  mkdirSync(OUT_DIR, { recursive: true });
  const curated = readCuratedMeta();
  const senateProbe = await probeSenateActive();
  console.log(`[legislation] ${senateProbe.note}`);

  let houseBills: unknown[] = [];
  let senateBills: unknown[] = [];
  let source: "api.congress.gov" | "curated+probe" = "curated+probe";
  let apiError: string | undefined;

  if (apiKey) {
    try {
      const api = await fetchFromApi(apiKey);
      houseBills = api.houseBills as unknown[];
      senateBills = api.senateBills as unknown[];
      source = api.source;
    } catch (err) {
      apiError = err instanceof Error ? err.message : String(err);
      console.warn(`[legislation] API fetch failed (fail soft): ${apiError}`);
    }
  } else {
    console.log(`
┌─────────────────────────────────────────────────────────────┐
│  Project Sunrise: Legislation refresh                      │
│  No CONGRESS_API_KEY found (or placeholder).               │
│                                                             │
│  Curated dataset remains the live tracker source:           │
│    lib/data/legislation.ts                                  │
│                                                             │
│  To enable API refresh:                                     │
│    1. Free key: https://api.congress.gov/sign-up            │
│    2. Set CONGRESS_API_KEY in Unraid updater .env           │
│    3. Re-run: npm run fetch-legislation                     │
└─────────────────────────────────────────────────────────────┘
`);
  }

  const today = new Date().toISOString().slice(0, 10);
  const payload = {
    fetchedAt: new Date().toISOString(),
    congress: CONGRESS,
    source,
    curatedLastUpdated: curated.lastUpdated ?? null,
    curatedBillCount: curated.billCount,
    curatedFloorCount: curated.floorCount,
    senateActiveProbe: senateProbe,
    houseBills,
    senateBills,
    refreshDate: today,
    apiError: apiError ?? null,
    note: apiKey
      ? "API payload is status/skeleton only; progressive commentary stays in lib/data/legislation.ts."
      : "No API key — live UI uses curated lib/data/legislation.ts. Probe + stamp written for updater audit.",
  };

  writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2), "utf8");
  console.log(`✅ Wrote ${OUT_FILE}`);
  console.log(
    `   Source: ${source} · Curated bills: ${curated.billCount} · Floor: ${curated.floorCount}`
  );
  if (houseBills.length || senateBills.length) {
    console.log(
      `   API House: ${houseBills.length} · Senate: ${senateBills.length}`
    );
  }
  console.log(
    `   Curated lastUpdated: ${curated.lastUpdated ?? "unknown"} · refreshDate: ${today}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
