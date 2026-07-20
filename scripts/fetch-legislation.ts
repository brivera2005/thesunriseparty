/**
 * Refresh legislation tracker every updater cycle.
 *
 * When CONGRESS_API_KEY (or CONGRESS_GOV_API_KEY / DATA_GOV_API_KEY) is set:
 *   Fetches recent 119th Congress bills from api.congress.gov and discovers
 *   roll-call numbers from bill actions.
 *
 * Always (no key required for member tallies):
 *   Resolves curated bill votes → House Clerk EVS XML + Senate LIS XML,
 *   writes member-level Yea/Nay/Present/Not Voting into
 *   public/data/legislation-live.json and lib/data/legislation-votes-live.ts
 *   for merge into the UI.
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
const VOTES_LIVE_TS = join(
  process.cwd(),
  "lib",
  "data",
  "legislation-votes-live.ts"
);
const META_HINT = join(process.cwd(), "lib", "data", "legislation.ts");
const UA = "ProjectSunriseLegislationBot/1.0 (+https://thesunriseparty.pages.dev)";

type PartyCode = "D" | "R" | "I";
type MemberVoteCast = "Yea" | "Nay" | "Present" | "Not Voting";

export type LiveVoteMember = {
  bioguideId: string | null;
  name: string;
  party: PartyCode;
  state: string;
  vote: MemberVoteCast;
  chamber: "house" | "senate";
};

export type LiveBillVote = {
  chamber: "house" | "senate";
  date: string;
  question: string;
  yeas: number;
  nays: number;
  present: number;
  notVoting: number;
  byParty: {
    D: { yea: number; nay: number };
    R: { yea: number; nay: number };
    I: { yea: number; nay: number };
  };
  rollCallNumber?: number;
  session?: number;
  year?: number;
  rollCallUrl?: string;
  members?: LiveVoteMember[];
};

type CuratedVoteRef = {
  billId: string;
  billNumber: string;
  chamber: "house" | "senate";
  date: string;
  question: string;
};

type SenateMenuVote = {
  voteNumber: number;
  voteDate: string; // e.g. 14-Jul
  issue: string;
  question: string;
  yeas: number;
  nays: number;
  session: number;
  year: number;
};

function getApiKey(): string | undefined {
  const raw =
    process.env.CONGRESS_API_KEY ||
    process.env.CONGRESS_GOV_API_KEY ||
    process.env.DATA_GOV_API_KEY;
  const key = raw?.trim();
  return key && key.length > 4 ? key : undefined;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchText(url: string, init?: RequestInit): Promise<string> {
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: "*/*",
      "User-Agent": UA,
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function fetchJson(url: string, apiKey: string) {
  const sep = url.includes("?") ? "&" : "?";
  const res = await fetch(`${url}${sep}format=json&api_key=${apiKey}`, {
    headers: { Accept: "application/json", "User-Agent": UA },
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

/** Parse curated legislation.ts for vote stubs we should enrich. */
function parseCuratedVoteRefs(): CuratedVoteRef[] {
  if (!existsSync(META_HINT)) return [];
  const src = readFileSync(META_HINT, "utf8");
  const refs: CuratedVoteRef[] = [];
  // Split on bill({ ... }) blocks roughly by id:
  const billBlocks = src.split(/\n\s*bill\(\{/).slice(1);
  for (const block of billBlocks) {
    const id = block.match(/^\s*id:\s*"([^"]+)"/)?.[1];
    const billNumber = block.match(/billNumber:\s*"([^"]+)"/)?.[1];
    if (!id || !billNumber) continue;
    const voteRe =
      /vote\(\s*"(house|senate)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = voteRe.exec(block))) {
      refs.push({
        billId: id,
        billNumber,
        chamber: m[1] as "house" | "senate",
        date: m[2],
        question: m[3],
      });
    }
  }
  return refs;
}

async function probeSenateActive(): Promise<{
  ok: boolean;
  status?: number;
  note: string;
}> {
  try {
    const res = await fetch(SENATE_ACTIVE, {
      headers: { Accept: "text/html", "User-Agent": UA },
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

function xmlTag(block: string, tag: string): string | null {
  const m = block.match(new RegExp(`<${tag}>([^<]*)</${tag}>`, "i"));
  return m ? m[1].trim() : null;
}

function normalizeBillIssue(s: string): string {
  return s
    .toUpperCase()
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .replace(/^H R /, "HR ")
    .replace(/^S /, "S ")
    .replace(/^H J RES /, "HJRES ")
    .replace(/^S J RES /, "SJRES ")
    .replace(/^H CON RES /, "HCONRES ")
    .replace(/^S CON RES /, "SCONRES ")
    .replace(/^H RES /, "HRES ")
    .replace(/^S RES /, "SRES ")
    .trim();
}

function curatedBillToIssue(billNumber: string): string {
  // "H.R. 1" → "HR 1", "S. 4784" → "S 4784", "H.Con.Res. 14" → "HCONRES 14"
  return normalizeBillIssue(billNumber);
}

function parseIsoDateParts(iso: string): {
  year: number;
  month: number;
  day: number;
} {
  const [y, m, d] = iso.split("-").map(Number);
  return { year: y, month: m, day: d };
}

function senateMenuDateToKey(voteDate: string, year: number): string | null {
  // "14-Jul" or "14-Jul-2026"
  const m = voteDate.trim().match(/^(\d{1,2})-([A-Za-z]{3})(?:-(\d{4}))?/);
  if (!m) return null;
  const months: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const mon = months[m[2]];
  if (!mon) return null;
  const y = m[3] ? Number(m[3]) : year;
  return `${y}-${mon}-${m[1].padStart(2, "0")}`;
}

function houseActionDateToIso(actionDate: string): string | null {
  // "22-May-2025"
  const m = actionDate.trim().match(/^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/);
  if (!m) return null;
  const months: Record<string, string> = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const mon = months[m[2]];
  if (!mon) return null;
  return `${m[3]}-${mon}-${m[1].padStart(2, "0")}`;
}

function normalizeQuestion(q: string): string {
  return q
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function questionsRoughlyMatch(a: string, b: string): boolean {
  const na = normalizeQuestion(a);
  const nb = normalizeQuestion(b);
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  // Passage variants
  if (na.includes("passage") && nb.includes("passage")) return true;
  if (na.includes("cloture") && nb.includes("cloture")) return true;
  if (na.includes("concurrent resolution") && nb.includes("concurrent"))
    return true;
  if (na.includes("agreeing") && nb.includes("agreeing")) return true;
  return false;
}

function partyFromRaw(raw: string | null | undefined): PartyCode {
  const p = (raw || "").trim().toUpperCase();
  if (p.startsWith("D") || p === "DEMOCRAT" || p === "DEMOCRATIC") return "D";
  if (p.startsWith("R") || p === "REPUBLICAN") return "R";
  return "I";
}

function normalizeCast(raw: string | null | undefined): MemberVoteCast {
  const v = (raw || "").trim().toLowerCase();
  if (v === "yea" || v === "aye" || v === "yes") return "Yea";
  if (v === "nay" || v === "no") return "Nay";
  if (v.includes("present")) return "Present";
  return "Not Voting";
}

function emptyByParty() {
  return {
    D: { yea: 0, nay: 0 },
    R: { yea: 0, nay: 0 },
    I: { yea: 0, nay: 0 },
  };
}

function aggregateMembers(members: LiveVoteMember[]) {
  const byParty = emptyByParty();
  let yeas = 0;
  let nays = 0;
  let present = 0;
  let notVoting = 0;
  for (const m of members) {
    if (m.vote === "Yea") {
      yeas++;
      byParty[m.party].yea++;
    } else if (m.vote === "Nay") {
      nays++;
      byParty[m.party].nay++;
    } else if (m.vote === "Present") {
      present++;
    } else {
      notVoting++;
    }
  }
  return { yeas, nays, present, notVoting, byParty };
}

async function loadSenateMenus(): Promise<SenateMenuVote[]> {
  const out: SenateMenuVote[] = [];
  for (const session of [1, 2] as const) {
    const url = `https://www.senate.gov/legislative/LIS/roll_call_lists/vote_menu_${CONGRESS}_${session}.xml`;
    try {
      const xml = await fetchText(url);
      const year =
        Number(xmlTag(xml, "congress_year")) ||
        (session === 1 ? 2025 : 2026);
      const voteBlocks = xml.split(/<vote>/).slice(1);
      for (const block of voteBlocks) {
        const numRaw = xmlTag(block, "vote_number");
        const voteNumber = numRaw ? Number(numRaw) : NaN;
        if (!Number.isFinite(voteNumber)) continue;
        const yeas = Number(xmlTag(block, "yeas") || 0);
        const nays = Number(xmlTag(block, "nays") || 0);
        out.push({
          voteNumber,
          voteDate: xmlTag(block, "vote_date") || "",
          issue: xmlTag(block, "issue") || "",
          question: (xmlTag(block, "question") || "").replace(/\s+/g, " ").trim(),
          yeas,
          nays,
          session,
          year,
        });
      }
      console.log(
        `[legislation] Senate vote menu session ${session}: ${voteBlocks.length} votes`
      );
    } catch (err) {
      console.warn(
        `[legislation] Senate menu session ${session} failed:`,
        err instanceof Error ? err.message : err
      );
    }
  }
  return out;
}

function matchSenateMenu(
  menus: SenateMenuVote[],
  ref: CuratedVoteRef
): SenateMenuVote | null {
  const issues = [curatedBillToIssue(ref.billNumber)];
  // Companion notes in curated questions, e.g. "(S. 5 companion track)"
  const companion = ref.question.match(
    /\(\s*((?:H\.?R\.?|S\.?|H\.?J\.?Res\.?|S\.?J\.?Res\.?|H\.?Con\.?Res\.?|S\.?Con\.?Res\.?)\s*\d+)\s+companion/i
  );
  if (companion?.[1]) issues.push(normalizeBillIssue(companion[1]));

  let candidates: SenateMenuVote[] = [];
  for (const issue of issues) {
    candidates = menus.filter((v) => {
      const vi = normalizeBillIssue(v.issue);
      return vi === issue || vi.includes(issue) || issue.includes(vi);
    });
    if (candidates.length) break;
  }
  if (!candidates.length) return null;

  const dated = candidates.filter((v) => {
    const iso = senateMenuDateToKey(v.voteDate, v.year);
    return iso === ref.date;
  });
  const pool = dated.length ? dated : candidates;

  const qMatch = pool.filter((v) =>
    questionsRoughlyMatch(v.question, ref.question)
  );
  const finalPool = qMatch.length ? qMatch : pool;
  // Prefer passage over amendments when curated says Passage
  if (/passage/i.test(ref.question)) {
    const passage = finalPool.find((v) => /passage/i.test(v.question));
    if (passage) return passage;
  }
  return finalPool[0] || null;
}

async function fetchSenateMemberVote(
  session: number,
  voteNumber: number
): Promise<LiveBillVote | null> {
  const padded = String(voteNumber).padStart(5, "0");
  const xmlUrl = `https://www.senate.gov/legislative/LIS/roll_call_votes/vote${CONGRESS}${session}/vote_${CONGRESS}_${session}_${padded}.xml`;
  const htmlUrl = xmlUrl.replace(/\.xml$/, ".htm");
  try {
    const xml = await fetchText(xmlUrl);
    const question =
      xmlTag(xml, "question") ||
      xmlTag(xml, "vote_question_text") ||
      "Roll call";
    const voteDateRaw = xmlTag(xml, "vote_date") || "";
    // "July 14, 2026,  02:41 PM"
    let date = "";
    const dm = voteDateRaw.match(/([A-Za-z]+) (\d{1,2}), (\d{4})/);
    if (dm) {
      const months: Record<string, string> = {
        January: "01",
        February: "02",
        March: "03",
        April: "04",
        May: "05",
        June: "06",
        July: "07",
        August: "08",
        September: "09",
        October: "10",
        November: "11",
        December: "12",
      };
      date = `${dm[3]}-${months[dm[1]] || "01"}-${dm[2].padStart(2, "0")}`;
    }
    const members: LiveVoteMember[] = [];
    const memberBlocks = xml.split(/<member>/).slice(1);
    for (const block of memberBlocks) {
      const first = xmlTag(block, "first_name") || "";
      const last = xmlTag(block, "last_name") || "";
      const full = xmlTag(block, "member_full") || `${first} ${last}`.trim();
      const name = full.replace(/\s*\([DRI]-[A-Z]{2}\)\s*$/, "").trim();
      members.push({
        bioguideId: null,
        name: name || last,
        party: partyFromRaw(xmlTag(block, "party")),
        state: (xmlTag(block, "state") || "").toUpperCase(),
        vote: normalizeCast(xmlTag(block, "vote_cast")),
        chamber: "senate",
      });
    }
    const agg = aggregateMembers(members);
    return {
      chamber: "senate",
      date,
      question,
      ...agg,
      rollCallNumber: voteNumber,
      session,
      year: Number(xmlTag(xml, "congress_year") || 0) || undefined,
      rollCallUrl: htmlUrl,
      members,
    };
  } catch (err) {
    console.warn(
      `[legislation] Senate vote ${session}/${voteNumber} failed:`,
      err instanceof Error ? err.message : err
    );
    return null;
  }
}

type HouseMeta = {
  year: number;
  roll: number;
  legis: string;
  question: string;
  date: string;
  url: string;
  govtrackLink?: string;
};

const houseDateCache = new Map<string, HouseMeta[]>();

function govtrackBillLabel(related: {
  bill_type_label?: string;
  display_number?: string;
  number?: number;
} | null): string {
  if (!related) return "";
  if (related.display_number) return related.display_number;
  const label = related.bill_type_label || "";
  const num = related.number;
  return num != null ? `${label} ${num}` : label;
}

async function loadHouseVotesForDate(isoDate: string): Promise<HouseMeta[]> {
  if (houseDateCache.has(isoDate)) return houseDateCache.get(isoDate)!;
  const url =
    `https://www.govtrack.us/api/v2/vote?congress=${CONGRESS}&chamber=house` +
    `&created__gte=${isoDate}T00:00:00&created__lt=${isoDate}T23:59:59&limit=100`;
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": UA,
      },
    });
    if (!res.ok) throw new Error(`GovTrack ${res.status}`);
    const data = (await res.json()) as {
      objects?: Array<{
        number: number;
        session: number | string;
        created: string;
        question?: string;
        question_details?: string;
        link?: string;
        related_bill?: {
          bill_type_label?: string;
          display_number?: string;
          number?: number;
        } | null;
      }>;
    };
    const metas: HouseMeta[] = (data.objects || []).map((v) => {
      const year = Number(v.session) || parseIsoDateParts(isoDate).year;
      return {
        year,
        roll: Number(v.number),
        legis: govtrackBillLabel(v.related_bill ?? null),
        question: v.question_details || v.question || "",
        date: isoDate,
        url: `https://clerk.house.gov/Votes/${year}${v.number}`,
        govtrackLink:
          v.link ||
          `https://www.govtrack.us/congress/votes/${CONGRESS}-${year}/h${v.number}`,
      };
    });
    houseDateCache.set(isoDate, metas);
    return metas;
  } catch (err) {
    console.warn(
      `[legislation] GovTrack house votes for ${isoDate} failed:`,
      err instanceof Error ? err.message : err
    );
    houseDateCache.set(isoDate, []);
    return [];
  }
}

async function findHouseRoll(ref: CuratedVoteRef): Promise<HouseMeta | null> {
  const issues = [curatedBillToIssue(ref.billNumber)];
  const companion = ref.question.match(
    /\(\s*((?:H\.?R\.?|S\.?|H\.?J\.?Res\.?|S\.?J\.?Res\.?|H\.?Con\.?Res\.?|S\.?Con\.?Res\.?)\s*\d+)\s+companion/i
  );
  if (companion?.[1]) issues.push(normalizeBillIssue(companion[1]));
  // House often passes Senate companion under S. number (e.g. Laken Riley)
  if (ref.billNumber.startsWith("H.R.")) {
    const alt = ref.billNumber.replace(/^H\.R\./i, "S.");
    // only useful when curated notes companion; skip generic
  }

  const onDate = await loadHouseVotesForDate(ref.date);
  const billMatches = (m: HouseMeta) => {
    const legisN = normalizeBillIssue(m.legis);
    return issues.some(
      (issue) =>
        legisN === issue || legisN.includes(issue) || issue.includes(legisN)
    );
  };

  const exact = onDate.filter(
    (m) =>
      billMatches(m) &&
      (!m.question ||
        !ref.question ||
        questionsRoughlyMatch(m.question, ref.question))
  );
  if (exact.length) {
    const preferred =
      exact.find((m) => questionsRoughlyMatch(m.question, ref.question)) ||
      exact[0];
    console.log(
      `[legislation] House match ${ref.billNumber} ${ref.date} → GovTrack h${preferred.roll}`
    );
    return preferred;
  }

  const billOnDate = onDate.filter(billMatches);
  if (billOnDate.length) {
    // Prefer passage-like when curated asks for passage
    const preferPassage = /passage/i.test(ref.question);
    const hit =
      (preferPassage
        ? billOnDate.find((m) => /passage/i.test(m.question))
        : null) || billOnDate[billOnDate.length - 1];
    console.log(
      `[legislation] House match (date+bill) ${ref.billNumber} ${ref.date} → h${hit.roll}`
    );
    return hit;
  }

  // House often votes the Senate companion under S. N (same number)
  if (/^HR \d+/i.test(issues[0])) {
    const senateIssue = issues[0].replace(/^HR /i, "S ");
    const companionHits = onDate.filter((m) => {
      const legisN = normalizeBillIssue(m.legis);
      return legisN === senateIssue || legisN.includes(senateIssue);
    });
    if (companionHits.length) {
      const preferPassage = /passage/i.test(ref.question);
      const hit =
        (preferPassage
          ? companionHits.find((m) => /passage/i.test(m.question))
          : null) || companionHits[companionHits.length - 1];
      console.log(
        `[legislation] House match (Senate companion) ${ref.billNumber}→${senateIssue} ${ref.date} → h${hit.roll}`
      );
      return hit;
    }
  }

  // Nearby dates (±1 day) for late-night votes
  for (const delta of [-1, 1]) {
    const d = new Date(`${ref.date}T12:00:00Z`);
    d.setUTCDate(d.getUTCDate() + delta);
    const iso = d.toISOString().slice(0, 10);
    const near = (await loadHouseVotesForDate(iso)).filter(billMatches);
    const qNear = near.filter((m) =>
      questionsRoughlyMatch(m.question, ref.question)
    );
    const hit = qNear[0] || near[0];
    if (hit) {
      console.log(
        `[legislation] House match (near-date) ${ref.billNumber} ${ref.date} → h${hit.roll} (${iso})`
      );
      return hit;
    }
  }
  return null;
}

function parseGovtrackCsv(csv: string, year: number, roll: number): LiveBillVote {
  const lines = csv.split(/\r?\n/).filter((l) => l.trim());
  // First line is title; second is header
  const headerIdx = lines.findIndex((l) =>
    /^person,state,district,vote,name,party/i.test(l)
  );
  const dataLines = headerIdx >= 0 ? lines.slice(headerIdx + 1) : lines.slice(2);
  const members: LiveVoteMember[] = [];
  for (const line of dataLines) {
    // CSV with quoted name field
    const m = line.match(
      /^([^,]*),([^,]*),([^,]*),([^,]*),(?:"([^"]*)"|([^,]*)),(.*)$/
    );
    if (!m) continue;
    const state = (m[2] || "").toUpperCase();
    const cast = normalizeCast(m[4]);
    let name = (m[5] || m[6] || "").trim();
    name = name
      .replace(/^(Rep\.|Sen\.|Del\.)\s+/i, "")
      .replace(/\s*\[[^\]]+\]\s*$/, "")
      .trim();
    const party = partyFromRaw(m[7]);
    if (!name || !state) continue;
    members.push({
      bioguideId: null,
      name,
      party,
      state,
      vote: cast,
      chamber: "house",
    });
  }
  const titleLine = lines[0] || "";
  const questionMatch = titleLine.match(/ -\s+(.*)$/);
  const dateMatch = titleLine.match(/(\d{4}-\d{2}-\d{2})/);
  const agg = aggregateMembers(members);
  return {
    chamber: "house",
    date: dateMatch?.[1] || "",
    question: questionMatch?.[1]?.trim() || "On Passage",
    ...agg,
    rollCallNumber: roll,
    year,
    rollCallUrl: `https://www.govtrack.us/congress/votes/${CONGRESS}-${year}/h${roll}`,
    members,
  };
}

async function fetchHouseMemberVote(
  year: number,
  roll: number,
  govtrackLink?: string
): Promise<LiveBillVote | null> {
  const link =
    govtrackLink ||
    `https://www.govtrack.us/congress/votes/${CONGRESS}-${year}/h${roll}`;
  const csvUrl = `${link.replace(/\/$/, "")}/export/csv`;

  // Prefer GovTrack CSV (Clerk EVS often blocks datacenter IPs)
  try {
    const csv = await fetchText(csvUrl);
    if (csv.includes("person,state,district,vote")) {
      return parseGovtrackCsv(csv, year, roll);
    }
  } catch (err) {
    console.warn(
      `[legislation] GovTrack CSV ${year}/h${roll} failed:`,
      err instanceof Error ? err.message : err
    );
  }

  // Fallback: House Clerk EVS XML when reachable
  const url = `https://clerk.house.gov/evs/${year}/roll${roll}.xml`;
  const htmlUrl = `https://clerk.house.gov/Votes/${year}${roll}`;
  try {
    const xml = await fetchText(url);
    if (xml.includes("Access Denied")) throw new Error("Clerk access denied");
    const question = xmlTag(xml, "vote-question") || "Roll call";
    const actionDate = xmlTag(xml, "action-date") || "";
    const date = houseActionDateToIso(actionDate) || "";
    const members: LiveVoteMember[] = [];
    const voteBlocks = xml.split(/<recorded-vote>/).slice(1);
    for (const block of voteBlocks) {
      const legMatch = block.match(
        /<legislator\s+([^>]+)>([^<]*)<\/legislator>/i
      );
      if (!legMatch) continue;
      const attrs = legMatch[1];
      const nameId = attrs.match(/name-id="([^"]+)"/)?.[1] || null;
      const party = partyFromRaw(attrs.match(/party="([^"]+)"/)?.[1]);
      const state = (attrs.match(/state="([^"]+)"/)?.[1] || "").toUpperCase();
      const unaccented =
        attrs.match(/unaccented-name="([^"]+)"/)?.[1] || legMatch[2].trim();
      const cast = normalizeCast(xmlTag(block, "vote"));
      members.push({
        bioguideId: nameId,
        name: unaccented,
        party,
        state,
        vote: cast,
        chamber: "house",
      });
    }
    const agg = aggregateMembers(members);
    return {
      chamber: "house",
      date,
      question,
      ...agg,
      rollCallNumber: roll,
      year,
      rollCallUrl: htmlUrl,
      members,
    };
  } catch (err) {
    console.warn(
      `[legislation] House roll ${year}/${roll} failed:`,
      err instanceof Error ? err.message : err
    );
    return null;
  }
}

/** Optional: resolve roll numbers via Congress.gov API bill actions. */
async function discoverRollCallsFromApi(
  apiKey: string,
  refs: CuratedVoteRef[]
): Promise<Map<string, { chamber: "house" | "senate"; session?: number; year?: number; number: number }>> {
  const map = new Map<
    string,
    { chamber: "house" | "senate"; session?: number; year?: number; number: number }
  >();
  const byBill = new Map<string, CuratedVoteRef[]>();
  for (const r of refs) {
    const list = byBill.get(r.billId) || [];
    list.push(r);
    byBill.set(r.billId, list);
  }

  for (const [billId, billRefs] of byBill) {
    const numMatch = billId.match(/^(hr|s|hconres|sconres|hjres|sjres|hres|sres)-(\d+)$/i);
    if (!numMatch) continue;
    const typeMap: Record<string, string> = {
      hr: "hr",
      s: "s",
      hconres: "hconres",
      sconres: "sconres",
      hjres: "hjres",
      sjres: "sjres",
      hres: "hres",
      sres: "sres",
    };
    const billType = typeMap[numMatch[1].toLowerCase()];
    const billNumber = numMatch[2];
    try {
      const data = await fetchJson(
        `${API_BASE}/bill/${CONGRESS}/${billType}/${billNumber}/actions?limit=250`,
        apiKey
      );
      await sleep(200);
      const actions = data?.actions || [];
      for (const action of actions) {
        const recorded = action?.recordedVotes || [];
        for (const rv of recorded) {
          const chamberRaw = String(rv.chamber || "").toLowerCase();
          const chamber: "house" | "senate" | null =
            chamberRaw.includes("house")
              ? "house"
              : chamberRaw.includes("senate")
                ? "senate"
                : null;
          if (!chamber) continue;
          const number = Number(rv.rollNumber || rv.rollCallNumber);
          if (!Number.isFinite(number)) continue;
          const actionDate = String(action.actionDate || "").slice(0, 10);
          const url = String(rv.url || "");
          // Match to curated ref by chamber + date
          const hit = billRefs.find(
            (r) => r.chamber === chamber && (!actionDate || r.date === actionDate)
          );
          if (!hit) continue;
          const key = `${hit.billId}|${hit.chamber}|${hit.date}|${hit.question}`;
          const session = Number(rv.sessionNumber || rv.session) || undefined;
          let year: number | undefined;
          if (chamber === "house") {
            const ym = url.match(/evs\/(\d{4})\//) || url.match(/Votes\/(\d{4})/);
            year = ym ? Number(ym[1]) : parseIsoDateParts(hit.date).year;
          }
          map.set(key, { chamber, session, year, number });
        }
      }
    } catch (err) {
      console.warn(
        `[legislation] API actions for ${billId} failed:`,
        err instanceof Error ? err.message : err
      );
    }
  }
  return map;
}

function voteKey(ref: CuratedVoteRef): string {
  return `${ref.billId}|${ref.chamber}|${ref.date}|${ref.question}`;
}

async function enrichMemberVotes(
  refs: CuratedVoteRef[],
  apiKey?: string
): Promise<Record<string, LiveBillVote[]>> {
  const byBill: Record<string, LiveBillVote[]> = {};
  const senateMenus = await loadSenateMenus();
  let apiHints = new Map<
    string,
    { chamber: "house" | "senate"; session?: number; year?: number; number: number }
  >();
  if (apiKey) {
    console.log("[legislation] Discovering roll calls via Congress.gov API…");
    apiHints = await discoverRollCallsFromApi(apiKey, refs);
    console.log(`[legislation] API roll-call hints: ${apiHints.size}`);
  }

  for (const ref of refs) {
    const key = voteKey(ref);
    let live: LiveBillVote | null = null;

    if (ref.chamber === "senate") {
      const hint = apiHints.get(key);
      if (hint?.chamber === "senate" && hint.number) {
        live = await fetchSenateMemberVote(hint.session || 2, hint.number);
      }
      if (!live) {
        const menu = matchSenateMenu(senateMenus, ref);
        if (menu) {
          live = await fetchSenateMemberVote(menu.session, menu.voteNumber);
        }
      }
    } else {
      const hint = apiHints.get(key);
      if (hint?.chamber === "house" && hint.number) {
        const year = hint.year || parseIsoDateParts(ref.date).year;
        live = await fetchHouseMemberVote(year, hint.number);
      }
      if (!live) {
        const meta = await findHouseRoll(ref);
        if (meta) {
          live = await fetchHouseMemberVote(
            meta.year,
            meta.roll,
            meta.govtrackLink
          );
        }
      }
    }

    if (live) {
      // Prefer curated date/question if live date blank
      if (!live.date) live.date = ref.date;
      if (!live.question) live.question = ref.question;
      if (!byBill[ref.billId]) byBill[ref.billId] = [];
      byBill[ref.billId].push(live);
      console.log(
        `[legislation] ✓ ${ref.billId} ${ref.chamber} ${ref.date}: ${live.members?.length ?? 0} members`
      );
    } else {
      console.warn(
        `[legislation] ✗ No member roll call for ${ref.billId} ${ref.chamber} ${ref.date} (${ref.question})`
      );
    }
    await sleep(80);
  }

  return byBill;
}

function writeVotesLiveTs(byBill: Record<string, LiveBillVote[]>) {
  const payload = {
    fetchedAt: new Date().toISOString(),
    congress: CONGRESS,
    byBill,
  };
  const body = `/**
 * Auto-generated member-level roll-call votes.
 * Source: House Clerk EVS XML + Senate LIS XML (+ Congress.gov when keyed).
 * Do not edit by hand — regenerated by scripts/fetch-legislation.ts
 */

import type { BillVote } from "@/lib/types";

export type LegislationVotesLive = {
  fetchedAt: string;
  congress: number;
  byBill: Record<string, BillVote[]>;
};

export const legislationVotesLive: LegislationVotesLive = ${JSON.stringify(
    payload,
    null,
    2
  )};
`;
  writeFileSync(VOTES_LIVE_TS, body, "utf8");
  console.log(`✅ Wrote ${VOTES_LIVE_TS}`);
}

async function main() {
  const apiKey = getApiKey();
  mkdirSync(OUT_DIR, { recursive: true });
  const curated = readCuratedMeta();
  const senateProbe = await probeSenateActive();
  console.log(`[legislation] ${senateProbe.note}`);

  let houseBills: unknown[] = [];
  let senateBills: unknown[] = [];
  let source: "api.congress.gov" | "curated+clerk+lis" | "curated+probe" =
    "curated+probe";
  let apiError: string | undefined;

  if (apiKey) {
    try {
      const api = await fetchFromApi(apiKey);
      houseBills = api.houseBills as unknown[];
      senateBills = api.senateBills as unknown[];
      source = "api.congress.gov";
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
│  Member votes still refresh from:                          │
│    • GovTrack House vote CSV (govtrack.us)                 │
│    • Senate LIS roll-call XML (senate.gov)                 │
│    • House Clerk EVS when reachable (fallback)             │
│                                                             │
│  Curated commentary stays in lib/data/legislation.ts       │
│                                                             │
│  To enable Congress.gov bill/action discovery:             │
│    1. Free key: https://api.congress.gov/sign-up           │
│    2. Set CONGRESS_API_KEY in Unraid updater .env          │
│    3. Re-run: npm run fetch-legislation                    │
└─────────────────────────────────────────────────────────────┘
`);
  }

  const refs = parseCuratedVoteRefs();
  console.log(`[legislation] Curated vote stubs to enrich: ${refs.length}`);

  let memberVotesByBill: Record<string, LiveBillVote[]> = {};
  let memberVoteCount = 0;
  try {
    memberVotesByBill = await enrichMemberVotes(refs, apiKey);
    memberVoteCount = Object.values(memberVotesByBill).reduce(
      (n, votes) => n + votes.reduce((m, v) => m + (v.members?.length ?? 0), 0),
      0
    );
    writeVotesLiveTs(memberVotesByBill);
    if (memberVoteCount > 0) {
      source =
        source === "api.congress.gov" ? "api.congress.gov" : "curated+clerk+lis";
    }
  } catch (err) {
    console.warn(
      `[legislation] Member vote enrichment failed (fail soft):`,
      err instanceof Error ? err.message : err
    );
    // Keep prior votes-live file if present
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
    memberVotesByBill,
    memberVoteCount,
    curatedVoteRefs: refs.length,
    refreshDate: today,
    apiError: apiError ?? null,
    apiKeyPresent: Boolean(apiKey),
    note: apiKey
      ? "API bills + member roll calls (Clerk/LIS) merged into legislation-votes-live.ts for UI."
      : "No API key — member roll calls from House Clerk + Senate LIS; curated lib/data/legislation.ts remains narrative source. Set CONGRESS_API_KEY for bill-action roll discovery.",
  };

  writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2), "utf8");
  console.log(`✅ Wrote ${OUT_FILE}`);
  console.log(
    `   Source: ${source} · Curated bills: ${curated.billCount} · Floor: ${curated.floorCount}`
  );
  console.log(
    `   Member votes: ${memberVoteCount} across ${Object.keys(memberVotesByBill).length} bills`
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
