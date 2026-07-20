/**
 * Probe all legislator website/contact URLs; print failures.
 */
import { readFileSync, writeFileSync } from "fs";

const path = "lib/data/legislator-contacts.ts";
const src = readFileSync(path, "utf8");

const urls = new Set();
for (const m of src.matchAll(/"(?:website|contactUrl)":\s*"(https?:\/\/[^"]+)"/g)) {
  urls.add(m[1]);
}

const list = [...urls].sort();
console.log(`Probing ${list.length} legislator URLs...\n`);

const broken = [];
const CONC = 8;

async function check(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });
    const ok = res.status < 400 || res.status === 403;
    return { url, status: res.status, ok };
  } catch (e) {
    return { url, status: 0, ok: false, error: e.message };
  }
}

for (let i = 0; i < list.length; i += CONC) {
  const batch = list.slice(i, i + CONC);
  const results = await Promise.all(batch.map(check));
  for (const r of results) {
    if (!r.ok) {
      broken.push(r);
      console.log(`BAD [${r.status || "ERR"}] ${r.url}`);
    }
  }
}

console.log(`\nBroken: ${broken.length} / ${list.length}`);

const replacements = {};
for (const r of broken) {
  try {
    const u = new URL(r.url);
    // Prefer site root when a deeper path fails
    if (u.pathname !== "/" && u.pathname !== "") {
      const root = `${u.protocol}//${u.host}/`;
      const rootCheck = await check(root);
      if (rootCheck.ok) {
        replacements[r.url] = root;
        console.log(`FIX ${r.url} -> ${root}`);
        continue;
      }
    }
    // Senate fallback
    if (u.host.includes("senate.gov")) {
      replacements[r.url] = "https://www.senate.gov/senators/index.htm";
      console.log(`FIX ${r.url} -> senate directory`);
      continue;
    }
    // House fallback
    if (u.host.includes("house.gov")) {
      const root = `${u.protocol}//${u.host}/`;
      replacements[r.url] = root;
      console.log(`FIX ${r.url} -> ${root} (forced)`);
    }
  } catch {
    console.log(`SKIP ${r.url}`);
  }
}

let out = src;
let count = 0;
for (const [from, to] of Object.entries(replacements)) {
  if (from === to) continue;
  const n = out.split(from).length - 1;
  if (n > 0) {
    out = out.split(from).join(to);
    count += n;
  }
}
if (count > 0) {
  writeFileSync(path, out, "utf8");
  console.log(`\nWrote ${count} replacements to legislator-contacts.ts`);
} else {
  console.log("\nNo replacements written");
}
