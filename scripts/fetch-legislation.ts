/**
 * Refresh legislation tracker data from Congress.gov API when CONGRESS_API_KEY is set.
 *
 * Usage:
 *   CONGRESS_API_KEY=... npx tsx scripts/fetch-legislation.ts
 *   npm run fetch-legislation
 *
 * Without a key, prints curation instructions and exits 0 (curated dataset remains source of truth).
 * With a key, fetches recent 119th Congress bills and writes public/data/legislation-live.json
 * for diffing / future merge into lib/data/legislation.ts.
 */
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";

const CONGRESS = 119;
const API_BASE = "https://api.congress.gov/v3";
const OUT_DIR = join(process.cwd(), "public", "data");
const OUT_FILE = join(OUT_DIR, "legislation-live.json");
const META_HINT = join(process.cwd(), "lib", "data", "legislation.ts");

function getApiKey(): string | undefined {
  return (
    process.env.CONGRESS_API_KEY ||
    process.env.CONGRESS_GOV_API_KEY ||
    process.env.DATA_GOV_API_KEY
  );
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

async function main() {
  const apiKey = getApiKey();
  mkdirSync(OUT_DIR, { recursive: true });

  if (!apiKey) {
    console.log(`
┌─────────────────────────────────────────────────────────────┐
│  Project Sunrise: Legislation refresh                      │
│  No CONGRESS_API_KEY found.                                 │
│                                                             │
│  Curated dataset remains the live tracker source:           │
│    lib/data/legislation.ts                                  │
│                                                             │
│  To enable API refresh:                                     │
│    1. Get a free key at https://api.congress.gov/sign-up    │
│    2. Set CONGRESS_API_KEY in your environment              │
│    3. Re-run: npm run fetch-legislation                     │
│                                                             │
│  Output (when keyed): public/data/legislation-live.json     │
└─────────────────────────────────────────────────────────────┘
`);
    if (existsSync(META_HINT)) {
      const src = readFileSync(META_HINT, "utf8");
      const match = src.match(/lastUpdated:\s*"([^"]+)"/);
      const count = (src.match(/billNumber:/g) || []).length;
      console.log(`  Current curated lastUpdated: ${match?.[1] ?? "unknown"}`);
      console.log(`  Approximate bill entries: ${count}`);
    }
    process.exit(0);
  }

  console.log(`Fetching 119th Congress bills from api.congress.gov…`);

  const house = await fetchJson(
    `${API_BASE}/bill/${CONGRESS}/hr?limit=50&sort=updateDate+desc`,
    apiKey
  );
  const senate = await fetchJson(
    `${API_BASE}/bill/${CONGRESS}/s?limit=50&sort=updateDate+desc`,
    apiKey
  );

  const payload = {
    fetchedAt: new Date().toISOString(),
    congress: CONGRESS,
    source: "api.congress.gov",
    houseBills: house?.bills ?? [],
    senateBills: senate?.bills ?? [],
    note: "Merge into lib/data/legislation.ts commentary fields manually; API payload is status/skeleton only.",
  };

  writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2), "utf8");
  console.log(`✅ Wrote ${OUT_FILE}`);
  console.log(
    `   House: ${(payload.houseBills as unknown[]).length} · Senate: ${(payload.senateBills as unknown[]).length}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
