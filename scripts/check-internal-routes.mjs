/**
 * Check internal routes on live site + soft-404 detection.
 */
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIVE = "https://thesunriseparty.pages.dev";

const STATIC = [
  "/",
  "/start",
  "/tracker",
  "/rebuttal",
  "/quiz",
  "/distracted",
  "/legislation",
  "/history",
  "/history/rebuttals",
  "/scenarios",
  "/blueprint",
  "/mission",
  "/accountability",
  "/methodology",
  "/donate",
  "/contribute",
  "/sitemap",
  "/events",
  "/saved",
  "/changelog",
  "/bills",
  "/feed.xml",
  "/data/events.json",
  "/data/events.csv",
  "/data/rebuttals.json",
  "/manifest.webmanifest",
];

function soft404(html, url) {
  if (!html || html.length < 80) return true;
  const lower = html.slice(0, 12000).toLowerCase();
  const titleMatch = lower.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch ? titleMatch[1] : "";
  if (
    title.includes("404") ||
    title.includes("page not found") ||
    title.includes("not found |")
  ) {
    return true;
  }
  // Next.js embeds notFound template in RSC payloads for valid pages.
  if (
    lower.includes("bailout_to_client_side_rendering") ||
    lower.includes("self.__next_f")
  ) {
    return false;
  }
  const patterns = [
    "page not found",
    "404 error",
    "this page could not be found",
    "the page you are looking for",
    "sorry, we can't find",
    "error 404",
    "404 not found",
  ];
  return patterns.some((p) => lower.includes(p));
}

async function check(path) {
  const url = path.startsWith("http") ? path : LIVE + path;
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(25000),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; ProjectSunrise-InternalCheck/1.0)",
      },
    });
    const ct = res.headers.get("content-type") || "";
    let soft = false;
    if (ct.includes("text/html")) {
      const html = await res.text();
      soft = soft404(html, url);
    }
    return { url, status: res.status, ok: res.ok && !soft, soft, error: soft ? "soft-404" : null };
  } catch (e) {
    return { url, status: 0, ok: false, soft: false, error: e.message };
  }
}

async function main() {
  // Pull sample dynamic IDs from data
  const routes = new Set(STATIC);

  // tracker events sample
  const te = readFileSync(join(ROOT, "lib/data/timeline-events.ts"), "utf8");
  const evtIds = [...te.matchAll(/Event_ID:\s*"([^"]+)"/g)].map((m) => m[1]).slice(0, 30);
  evtIds.push(
    "EVT-2026-0711-320",
    "EVT-2026-0711-300",
    "EVT-2026-0711-162",
    "EVT-2025-0918-100"
  );
  for (const id of new Set(evtIds)) routes.add(`/tracker/${id}`);

  // distractions
  const dist = readFileSync(join(ROOT, "lib/data/distractions.ts"), "utf8");
  for (const m of dist.matchAll(/\bid:\s*"([^"]+)"/g)) routes.add(`/distracted/${m[1]}`);

  // scenarios
  const sc = readFileSync(join(ROOT, "lib/data/scenarios.ts"), "utf8");
  for (const m of sc.matchAll(/\bid:\s*"([^"]+)"/g)) routes.add(`/scenarios/${m[1]}`);

  // legislation
  const leg = readFileSync(join(ROOT, "lib/data/legislation.ts"), "utf8");
  for (const m of leg.matchAll(/\bid:\s*"([^"]+)"/g)) routes.add(`/legislation/${m[1]}`);

  // blueprint policies
  const pol = readFileSync(join(ROOT, "lib/data/policies.ts"), "utf8");
  for (const m of pol.matchAll(/\bid:\s*"([^"]+)"/g)) {
    if (m[1].startsWith("FIX-") || m[1].startsWith("SAFE-")) routes.add(`/blueprint/${m[1]}`);
  }

  // rebuttal ids from conversation-helpers (first 40)
  const ch = readFileSync(join(ROOT, "lib/data/conversation-helpers.ts"), "utf8");
  let n = 0;
  for (const m of ch.matchAll(/\bid:\s*"([a-z0-9_-]+)"/g)) {
    if (n++ > 80) break;
    if (m[1].length > 3) routes.add(`/rebuttal/${m[1]}`);
  }

  // sitemap featured
  routes.add("/legislation/hr-1");
  routes.add("/rebuttal/category/economy");

  const list = [...routes].sort();
  console.log(`Checking ${list.length} internal routes on ${LIVE}\n`);

  const broken = [];
  let ok = 0;
  const CONC = 6;
  for (let i = 0; i < list.length; i += CONC) {
    const batch = list.slice(i, i + CONC);
    const results = await Promise.all(batch.map(check));
    for (const r of results) {
      if (r.ok) {
        ok++;
        console.log(`OK  [${r.status}] ${r.url.replace(LIVE, "")}`);
      } else {
        broken.push(r);
        console.log(`BAD [${r.status || "ERR"}] ${r.url.replace(LIVE, "")} ${r.error || ""}`);
      }
    }
  }

  console.log(`\nOK: ${ok}  BROKEN: ${broken.length}  TOTAL: ${list.length}`);
  if (broken.length) {
    console.log("\nBroken internals:");
    for (const b of broken) console.log(`  ${b.url} :: ${b.error || b.status}`);
    process.exit(1);
  }
}

main();
