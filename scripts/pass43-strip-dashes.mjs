/**
 * Pass 43: strip em/en dashes from Project Sunrise source copy.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const skip = new Set(["node_modules", ".git", ".next", "dist", "out"]);

const replacements = [
  // Specific readable replacements first
  [/House-Senate/g, "House-Senate"],
  [/FY(\d{4})-FY(\d{4})/g, "FY$1-FY$2"],
  [/FY(\d{4})-(\d{2})/g, "FY$1-$2"],
  [/: /g, ": "],
  [/:/g, ":"],
  [/: /g, ": "],
  [/-/g, "-"],
  [/-/g, "-"],
];

// Prefer context-aware punctuation for common patterns after first pass
const refine = [
  [/. So the bill/g, ". So the bill"],
  [/, not the branding/g, ", not the branding"],
  [/, not vibes/g, ", not vibes"],
  [/. Evaluate due-process/g, ". Evaluate due-process"],
  [/. Tests whether/g, ". Tests whether"],
  [/ (climate, housing/g, " (climate, housing"],
  [/frequent targets\. A rescission/g, "frequent targets). A rescission"],
  [/: some bills get certainty/g, ": some bills get certainty"],
  [/ (Labor-HHS/g, " (Labor-HHS"],
  [/Homeland Security provisions\./g, "Homeland Security provisions)."],
  [/. Minibuses are/g, ". Minibuses are"],
  [/ (both matter)/g, " (both matter)"],
  [/. Demand both/g, ". Demand both"],
  [/. Do not rubber-stamp/g, ". Do not rubber-stamp"],
  [/, not the ribbon-cutting/g, ", not the ribbon-cutting"],
  [/. Supply-only bills/g, ". Supply-only bills"],
  [/. Messaging bills/g, ". Messaging bills"],
  [/. Soft power cuts/g, ". Soft power cuts"],
  [/, with CBO-scoreable/g, ", with CBO-scoreable"],
  [/, and tests whether/g, ", and tests whether"],
  [/, but it frames/g, ", but it frames"],
  [/. Defend it against/g, ". Defend it against"],
  [/: the core domestic/g, ": the core domestic"],
  [/; it is statutory/g, "; it is statutory"],
  [/: the prerequisite/g, ": the prerequisite"],
  [/. Say that out loud/g, ". Say that out loud"],
  [/. Reject versions/g, ". Reject versions"],
  [/, and contrast them/g, ", and contrast them"],
  [/. That delta is/g, ". That delta is"],
  [/: useful contrast/g, ": useful contrast"],
  [/, ready to copy/g, ", ready to copy"],
  [/, every claim cited/g, ", every claim cited"],
  [/, right now/g, ", right now"],
  [/, and what the archives/g, ", and what the archives"],
  [/, with receipts/g, ", with receipts"],
  [/, and who blocked/g, ", and who blocked"],
  [/: policy pillars/g, ": policy pillars"],
  [/, and the pledge/g, ", and the pledge"],
  [/: reconciliation receipts/g, ": reconciliation receipts"],
  [/: enacted enforcement/g, ": enacted enforcement"],
  [/. Start here/g, ". Start here"],
  [/. Now use durable/g, ". Now use durable"],
  [/; use the archived/g, "; use the archived"],
  [/: Secure America Act/g, ": Secure America Act"],
  [/: Status of Major Bills/g, ": Status of Major Bills"],
  [/: Legislation refresh/g, ": Legislation refresh"],
  [/: white only/g, ": white only"],
  [/ (refresh via/g, " (refresh via"],
  [/fetch-legislation`\./g, "fetch-legislation`)."],
  [/: tell it to take/g, ": tell it to take"],
  [/; kept for call-site/g, "; kept for call-site"],
  [/; use for secondary/g, "; use for secondary"],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|js|jsx|mjs|cjs|md|mdx|css|json)$/.test(ent.name)) out.push(p);
  }
  return out;
}

let em = 0;
let en = 0;
let filesChanged = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, "utf8");
  const beforeEm = (text.match(/\u2014/g) || []).length;
  const beforeEn = (text.match(/\u2013/g) || []).length;
  if (!beforeEm && !beforeEn) continue;
  em += beforeEm;
  en += beforeEn;
  for (const [re, to] of replacements) text = text.replace(re, to);
  for (const [re, to] of refine) text = text.replace(re, to);
  fs.writeFileSync(file, text);
  filesChanged++;
}

console.log(JSON.stringify({ em, en, total: em + en, filesChanged }));
