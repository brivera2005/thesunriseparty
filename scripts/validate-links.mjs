#!/usr/bin/env node
/**
 * Extracts URLs from lib/data/*.ts files and checks HTTP status via GET.
 * Usage: node scripts/validate-links.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, "lib", "data");

const URL_REGEX = /https?:\/\/(?:[^\s"'`,]|\([^)]*\))+/g;

function cleanExtractedUrl(raw) {
  let url = raw.replace(/[.,;]+$/, "");
  // Preserve closing paren when it completes a Wikipedia path segment e.g. _(United_States)
  if (url.includes("_(") && url.endsWith(")")) {
    return url;
  }
  return url.replace(/[)\]]+$/, "");
}

function isValidUrl(url) {
  if (url.includes("${") || url.includes("web.archive.org/web/*")) return false;
  return true;
}

function extractUrlsFromFile(filePath) {
  const content = readFileSync(filePath, "utf8");
  const urls = new Set();
  let match;
  while ((match = URL_REGEX.exec(content)) !== null) {
    const url = cleanExtractedUrl(match[0]);
    if (isValidUrl(url)) urls.add(url);
  }
  return [...urls];
}

function getAllUrls() {
  const files = readdirSync(DATA_DIR).filter(
    (f) => f.endsWith(".ts") && f !== "validated-urls.ts"
  );
  const urlMap = new Map();
  for (const file of files) {
    for (const url of extractUrlsFromFile(join(DATA_DIR, file))) {
      if (!urlMap.has(url)) urlMap.set(url, []);
      urlMap.get(url).push(file);
    }
  }
  return urlMap;
}

/** Detect soft-404 pages that return 200 but are error pages */
function looksLikeSoft404(html, url) {
  if (!html || html.length < 200) return false;
  const lower = html.slice(0, 8000).toLowerCase();
  const patterns = [
    "page not found",
    "404 error",
    "404 - page",
    "this page could not be found",
    "the page you are looking for",
    "no longer available",
    "document not found",
    "we couldn't find that page",
  ];
  if (patterns.some((p) => lower.includes(p))) return true;
  if (url.includes("whitehouse.gov") && lower.includes("<title>") && lower.includes("404")) {
    return true;
  }
  return false;
}

async function checkUrl(url, timeout = 35000) {
  const fetchOpts = {
    redirect: "follow",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 ProjectSunrise-LinkValidator/2.0",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  };

  try {
    const res = await fetch(url, {
      ...fetchOpts,
      method: "GET",
      signal: AbortSignal.timeout(timeout),
    });

    const finalUrl = res.url;
    const status = res.status;

    if (status === 404 || status === 410) {
      return { url, status, ok: false, error: `HTTP ${status}`, finalUrl };
    }

    if (!res.ok && status !== 403) {
      return { url, status, ok: false, error: `HTTP ${status}`, finalUrl };
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (contentType.includes("text/html")) {
      const html = await res.text();
      if (looksLikeSoft404(html, finalUrl)) {
        return { url, status, ok: false, error: "Soft 404 detected", finalUrl };
      }
    }

    return { url, status, ok: true, error: null, finalUrl };
  } catch (err) {
    return {
      url,
      status: 0,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      finalUrl: url,
    };
  }
}

async function main() {
  const urlMap = getAllUrls();
  const urls = [...urlMap.keys()].sort();

  console.log(`\n🔍 Project Sunrise Link Validator v2`);
  console.log(`   GET-checking ${urls.length} unique URLs from lib/data/\n`);

  const results = [];
  const CONCURRENCY = 4;
  const DELAY_MS = 80;

  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map((url) => checkUrl(url)));
    results.push(...batchResults);

    if (i + CONCURRENCY < urls.length) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }

    for (const r of batchResults) {
      const icon = r.ok ? "✅" : "❌";
      const status = r.status || "ERR";
      const short = r.url.length > 80 ? r.url.slice(0, 77) + "..." : r.url;
      console.log(`${icon} [${status}] ${short}`);
      if (!r.ok && r.error) console.log(`       ↳ ${r.error}`);
    }
  }

  const working = results.filter((r) => r.ok);
  const broken = results.filter((r) => !r.ok);

  console.log(`\n${"─".repeat(60)}`);
  console.log(`✅ Working:  ${working.length}`);
  console.log(`❌ Broken:   ${broken.length}`);
  console.log(`📊 Total:    ${results.length}`);

  if (broken.length > 0) {
    console.log(`\n❌ BROKEN LINKS:\n`);
    for (const r of broken) {
      const files = urlMap.get(r.url)?.join(", ") ?? "?";
      console.log(`  ${r.url}`);
      console.log(`    Files: ${files}`);
      console.log(`    Error: ${r.error ?? `HTTP ${r.status}`}`);
      console.log(`    Wayback: https://web.archive.org/web/*/${r.url}\n`);
    }
    process.exit(1);
  }

  const validatedPath = join(ROOT, "lib", "data", "validated-urls.ts");
  const urlList = working.map((r) => r.url).sort();
  const tsContent = `/** Auto-generated by scripts/validate-links.mjs — do not edit manually */
export const validatedUrls = new Set<string>([
${urlList.map((u) => `  ${JSON.stringify(u)},`).join("\n")}
]);

export function isUrlValidated(url: string): boolean {
  return validatedUrls.has(url);
}

/** Extract archive date from Wayback URL (YYYYMMDD) */
export function extractArchiveDate(waybackUrl: string): string | null {
  const match = waybackUrl.match(/web\\.archive\\.org\\/web\\/(\\d{8})/);
  if (!match) return null;
  const raw = match[1];
  const y = raw.slice(0, 4);
  const m = raw.slice(4, 6);
  const d = raw.slice(6, 8);
  const date = new Date(\`\${y}-\${m}-\${d}T00:00:00\`);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
`;
  writeFileSync(validatedPath, tsContent, "utf8");
  console.log(`\n📝 Wrote ${urlList.length} validated URLs to lib/data/validated-urls.ts`);
  console.log(`\n✅ All links passed validation.\n`);
  process.exit(0);
}

main();
