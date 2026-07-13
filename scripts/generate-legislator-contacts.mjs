/**
 * Build lib/data/legislator-contacts.ts from unitedstates/congress-legislators YAML.
 * Never invents emails: uses official contact_form / website contact pages.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const yamlPath = path.join(process.env.TEMP || "/tmp", "legislators-ok.dat");

if (!fs.existsSync(yamlPath)) {
  console.error("Missing legislators YAML at", yamlPath);
  process.exit(1);
}

const yaml = fs.readFileSync(yamlPath, "utf8");
// Normalize so the first document entry is included
const normalized = yaml.replace(/^- id:\n/, "\n- id:\n");
const entries = normalized.split(/\n- id:\n/).slice(1);

function parseEntry(block) {
  const bioguide = block.match(/bioguide: (\S+)/)?.[1] ?? null;
  const full = block.match(/official_full: (.+)/)?.[1]?.trim() ?? null;
  const first = block.match(/\n    first: (.+)/)?.[1]?.trim() ?? null;
  const last = block.match(/\n    last: (.+)/)?.[1]?.trim() ?? null;
  const middle = block.match(/\n    middle: (.+)/)?.[1]?.trim() ?? null;
  const nickname = block.match(/\n    nickname: (.+)/)?.[1]?.trim() ?? null;
  const termBlocks = block.split(/\n  - type: /).slice(1);
  if (!termBlocks.length || !full) return null;
  const lastTerm = termBlocks[termBlocks.length - 1];
  const type = lastTerm.match(/^(rep|sen|del)/)?.[1] ?? null;
  const state = lastTerm.match(/\n    state: ([A-Z]{2})/)?.[1] ?? null;
  const partyRaw = lastTerm.match(/\n    party: (.+)/)?.[1]?.trim() ?? null;
  const url = lastTerm.match(/\n    url: (\S+)/)?.[1] ?? null;
  const contact_form = lastTerm.match(/\n    contact_form: (\S+)/)?.[1] ?? null;
  const phone = lastTerm.match(/\n    phone: (.+)/)?.[1]?.trim() ?? null;
  const party = partyRaw?.startsWith("Democrat")
    ? "D"
    : partyRaw?.startsWith("Republican")
      ? "R"
      : partyRaw?.startsWith("Independent")
        ? "I"
        : null;
  return {
    bioguide,
    full,
    first,
    last,
    middle,
    nickname,
    type,
    state,
    party,
    url,
    contact_form,
    phone,
  };
}

const legislators = entries.map(parseEntry).filter(Boolean);

function norm(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function https(u) {
  return u ? u.replace(/^http:\/\//, "https://") : null;
}

function contactUrl(leg) {
  if (leg.contact_form) return https(leg.contact_form);
  if (leg.url) {
    const base = https(leg.url).replace(/\/$/, "");
    if (leg.type === "rep" || leg.type === "del") return `${base}/contact`;
    return `${base}/contact`;
  }
  return null;
}

function titlePrefix(type) {
  if (type === "sen") return "Sen.";
  if (type === "del") return "Del.";
  return "Rep.";
}

const byKey = new Map();
for (const leg of legislators) {
  const keys = [
    norm(leg.full),
    norm(`${leg.first} ${leg.last}`),
    leg.nickname ? norm(`${leg.nickname} ${leg.last}`) : null,
    leg.middle ? norm(`${leg.first} ${leg.middle} ${leg.last}`) : null,
  ].filter(Boolean);
  for (const k of keys) {
    byKey.set(`${k}|${leg.state}`, leg);
    if (!byKey.has(k)) byKey.set(k, leg);
  }
}

const aliases = {
  "bernie sanders": { name: "bernard sanders", state: "VT" },
  "chris murphy": { name: "christopher murphy", state: "CT" },
  "chuck fleischmann": { name: "charles j chuck fleischmann", state: "TN" },
  "g.t. thompson": { name: "glenn thompson", state: "PA" },
  "gt thompson": { name: "glenn thompson", state: "PA" },
  "hal rogers": { name: "harold rogers", state: "KY" },
  "katie britt": { name: "katie boyd britt", state: "AL" },
  "mike simpson": { name: "michael k simpson", state: "ID" },
  "robert aderholt": { name: "robert b aderholt", state: "AL" },
  "robert c. scott": { name: "robert c scott", state: "VA" },
  "bobby scott": { name: "robert c scott", state: "VA" },
  "rosa delauro": { name: "rosa l delauro", state: "CT" },
  "terri sewell": { name: "terri a sewell", state: "AL" },
  "jodey arrington": { name: "jodey c arrington", state: "TX" },
  "mark amodei": { name: "mark e amodei", state: "NV" },
  "mark warner": { name: "mark r warner", state: "VA" },
  "roger wicker": { name: "roger f wicker", state: "MS" },
  "susan collins": { name: "susan m collins", state: "ME" },
  "gary peters": { name: "gary c peters", state: "MI" },
  "lindsey graham": { name: "lindsey graham", state: "SC" },
  "maria cantwell": { name: "maria cantwell", state: "WA" },
  "debbie stabenow": { name: "debbie stabenow", state: "MI" },
};

function resolve(name, state) {
  const n = norm(name);
  const alias = aliases[n];
  const searchName = alias ? alias.name : n;
  const searchState = alias?.state || state;

  if (n.includes("g t thompson") || n === "g.t. thompson" || n === "gt thompson") {
    const gt = legislators.find(
      (l) => l.state === "PA" && norm(l.last) === "thompson" && norm(l.full).includes("glenn")
    );
    if (gt) return gt;
  }
  if (n.includes("robert c") && (searchState === "VA" || state === "VA")) {
    const bobby = legislators.find(
      (l) => l.state === "VA" && norm(l.last) === "scott" && norm(l.full).includes("robert")
    );
    if (bobby) return bobby;
  }

  if (searchState) {
    const hit = byKey.get(`${searchName}|${searchState}`);
    if (hit) return hit;
    const last = searchName.split(" ").pop();
    const byLast = legislators.find(
      (l) => l.state === searchState && norm(l.last) === last
    );
    if (byLast) return byLast;
  }
  return byKey.get(searchName) || byKey.get(`${searchName}|${searchState}`) || null;
}

function toRow(displayName, party, state, leg) {
  return {
    displayName,
    officialName: leg.full,
    bioguide: leg.bioguide,
    chamber: leg.type === "sen" ? "senate" : "house",
    title: titlePrefix(leg.type),
    party: party || leg.party,
    state,
    phone: leg.phone || null,
    website: https(leg.url),
    contactUrl: contactUrl(leg),
    email: null,
  };
}

const legSrc = fs.readFileSync(path.join(root, "lib/data/legislation.ts"), "utf8");
const sponsors = [
  ...legSrc.matchAll(
    /sponsor: \{ name: "([^"]+)", party: "([DRI])", state: "([A-Z]{2})" \}/g
  ),
].map((m) => ({ name: m[1], party: m[2], state: m[3] }));

const unique = new Map();
for (const s of sponsors) unique.set(`${s.name}|${s.state}`, s);

const sponsorMap = {};
const missing = [];
for (const s of unique.values()) {
  const hit = resolve(s.name, s.state);
  if (!hit) {
    missing.push(s);
    continue;
  }
  const row = toRow(s.name, s.party, s.state, hit);
  const keys = [
    `${norm(s.name)}|${s.state}`,
    norm(s.name),
    `${norm(hit.full)}|${s.state}`,
    norm(hit.full),
  ];
  for (const k of keys) sponsorMap[k] = row;
}

// Manual official contact pages for members missing from legislators-current
// (still named as sponsors in our curated data). Never invent emails.
const manualContacts = [
  {
    name: "Lindsey Graham",
    party: "R",
    state: "SC",
    officialName: "Lindsey Graham",
    bioguide: "G000359",
    chamber: "senate",
    title: "Sen.",
    phone: "202-224-5972",
    website: "https://www.lgraham.senate.gov",
    contactUrl: "https://www.lgraham.senate.gov/public/index.cfm/contact",
  },
  {
    name: "Debbie Stabenow",
    party: "D",
    state: "MI",
    officialName: "Debbie Stabenow",
    bioguide: "S000770",
    chamber: "senate",
    title: "Sen.",
    phone: "202-224-4822",
    website: "https://www.stabenow.senate.gov",
    contactUrl: "https://www.stabenow.senate.gov/contact",
  },
];

for (const m of manualContacts) {
  const stillMissing = missing.some((x) => x.name === m.name && x.state === m.state);
  if (!stillMissing) continue;
  const row = {
    displayName: m.name,
    officialName: m.officialName,
    bioguide: m.bioguide,
    chamber: m.chamber,
    title: m.title,
    party: m.party,
    state: m.state,
    phone: m.phone,
    website: m.website,
    contactUrl: m.contactUrl,
    email: null,
  };
  for (const k of [`${norm(m.name)}|${m.state}`, norm(m.name)]) {
    sponsorMap[k] = row;
  }
}

const remainingMissing = missing.filter(
  (x) => !manualContacts.some((m) => m.name === x.name && m.state === x.state)
);
console.log(
  "sponsors keys",
  Object.keys(sponsorMap).length,
  "still missing",
  remainingMissing
);

const allRows = legislators.map((leg) =>
  toRow(leg.full, leg.party, leg.state, leg)
);
// Include manuals in full directory too
for (const m of manualContacts) {
  allRows.push({
    displayName: m.name,
    officialName: m.officialName,
    bioguide: m.bioguide,
    chamber: m.chamber,
    title: m.title,
    party: m.party,
    state: m.state,
    phone: m.phone,
    website: m.website,
    contactUrl: m.contactUrl,
    email: null,
  });
}

const out = `/**
 * Official legislator contact map from unitedstates/congress-legislators
 * (legislators-current.yaml). Emails are NOT invented: most members only
 * publish web contact forms. Use contactUrl (mailto only when email is set).
 * Source: https://github.com/unitedstates/congress-legislators
 * Generated: Pass 43
 */

export interface LegislatorContact {
  displayName: string;
  officialName: string;
  bioguide: string | null;
  chamber: "house" | "senate";
  title: "Rep." | "Sen." | "Del.";
  party: "D" | "R" | "I" | null;
  state: string;
  phone: string | null;
  website: string | null;
  /** Official public contact form / email page */
  contactUrl: string | null;
  /** Only when a verified public inbox exists; almost always null for House */
  email: string | null;
}

export const legislatorContactsByKey: Record<string, LegislatorContact> = ${JSON.stringify(sponsorMap, null, 2)};

export const allLegislatorContacts: LegislatorContact[] = ${JSON.stringify(allRows, null, 2)};

function normName(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\\s+/g, " ").trim();
}

export function lookupLegislatorContact(
  name: string,
  state?: string,
  _party?: string
): LegislatorContact | null {
  const n = normName(name);
  if (state) {
    const keyed = legislatorContactsByKey[\`\${n}|\${state}\`];
    if (keyed) return keyed;
    const last = n.split(" ").pop()!;
    const byLast = allLegislatorContacts.find(
      (l) =>
        l.state === state &&
        (normName(l.officialName) === n ||
          normName(l.displayName) === n ||
          normName(l.officialName).split(" ").pop() === last)
    );
    if (byLast) return byLast;
  }
  return (
    legislatorContactsByKey[n] ??
    allLegislatorContacts.find(
      (l) => normName(l.displayName) === n || normName(l.officialName) === n
    ) ??
    null
  );
}
`;

fs.writeFileSync(path.join(root, "lib/data/legislator-contacts.ts"), out);
console.log("Wrote legislator-contacts.ts", missing);
