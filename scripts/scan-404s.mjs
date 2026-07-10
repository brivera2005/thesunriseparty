#!/usr/bin/env node
/**
 * Quick 404 scanner - sequential GET with status reporting.
 * Usage: node scripts/scan-404s.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "lib", "data");
const URL_REGEX = /https?:\/\/[^\s"'`,\)]+/g;

function getAllUrls() {
  const urls = new Set();
  for (const file of readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts"))) {
    const content = readFileSync(join(DATA_DIR, file), "utf8");
    let m;
    while ((m = URL_REGEX.exec(content)) !== null) {
      const url = m[0].replace(/[)\].,;]+$/, "");
      if (!url.includes("${") && !url.includes("web.archive.org/web/*")) {
        urls.add(url);
      }
    }
  }
  return [...urls].sort();
}

async function check(url) {
  try {
    const r = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(25000),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ProjectSunrise/1.0)" },
    });
    return { url, status: r.status, ok: r.status < 400 || r.status === 403 };
  } catch (e) {
    return { url, status: 0, ok: false, error: e.message };
  }
}

async function main() {
  const urls = getAllUrls();
  const broken = [];
  const timeouts = [];
  let working = 0;

  console.log(`Scanning ${urls.length} URLs for 404s...\n`);

  for (const url of urls) {
    const r = await check(url);
    if (r.status === 404) {
      broken.push(r);
      console.log(`❌ 404  ${url}`);
    } else if (r.status === 0) {
      timeouts.push(r);
      console.log(`⏱️  TMO  ${url}`);
    } else {
      working++;
    }
  }

  console.log(`\n✅ Working/403: ${working}`);
  console.log(`❌ 404:        ${broken.length}`);
  console.log(`⏱️  Timeout:    ${timeouts.length}`);

  if (broken.length) {
    console.log("\n404 URLs to fix:");
    broken.forEach((b) => console.log(`  ${b.url}`));
    process.exit(1);
  }
}

main();
