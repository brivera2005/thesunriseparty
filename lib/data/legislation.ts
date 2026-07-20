import type {
  BillStatus,
  BillVote,
  CitationSource,
  LegislationBill,
  PartyCode,
} from "@/lib/types";
import { cite } from "@/lib/data/conversation-citations";
import { legislationVotesLive } from "@/lib/data/legislation-votes-live";

/** Hybrid live-tracker metadata (refresh via `npm run fetch-legislation`). */
export const legislationMeta = {
  congress: 119,
  congressLabel: "119th Congress",
  session: "2nd Session",
  lastUpdated: "2026-07-20",
  dataSource: "curated+clerk+lis" as "curated" | "congress-api" | "curated+clerk+lis",
  refreshHint:
    "Hourly Unraid updater refreshes member roll calls from House Clerk EVS + Senate LIS (no API key required). Set CONGRESS_API_KEY for Congress.gov bill-action roll discovery. Narrative stays in lib/data/legislation.ts.",
  votesLiveFetchedAt: legislationVotesLive.fetchedAt,
};

const senateActive = cite(
  "senate-active-leg",
  "Commonly Searched for Legislation (119th Congress)",
  "U.S. Senate",
  "https://www.senate.gov/legislative/active_leg_page.htm",
  "Senate index of commonly searched active and recently enacted legislation for the 119th Congress. Last Updated July 15, 2026.",
  "2026-07-15"
);

const govinfoCalendar = cite(
  "govinfo-hcal-2026-06-23",
  "House Calendars: Status of Major Bills (June 23, 2026)",
  "U.S. Government Publishing Office",
  "https://www.govinfo.gov/content/pkg/CCAL-119hcal-2026-06-23/html/CCAL-119hcal-2026-06-23-pt22.htm",
  "Official House calendar summarizing status of major second-session bills including reconciliation and appropriations.",
  "2026-06-23"
);

function cgov(type: "house-bill" | "senate-bill" | "house-concurrent-resolution" | "senate-concurrent-resolution" | "house-resolution" | "senate-resolution", num: number) {
  return `https://www.congress.gov/bill/119th-congress/${type}/${num}`;
}

function partyVote(
  dYea: number,
  dNay: number,
  rYea: number,
  rNay: number,
  iYea = 0,
  iNay = 0
) {
  return {
    D: { yea: dYea, nay: dNay },
    R: { yea: rYea, nay: rNay },
    I: { yea: iYea, nay: iNay },
  };
}

function vote(
  chamber: "house" | "senate",
  date: string,
  question: string,
  by: ReturnType<typeof partyVote>,
  present = 0,
  notVoting = 0
): BillVote {
  const yeas = by.D.yea + by.R.yea + by.I.yea;
  const nays = by.D.nay + by.R.nay + by.I.nay;
  return { chamber, date, question, yeas, nays, present, notVoting, byParty: by };
}

type BillInput = Omit<LegislationBill, "sources"> & {
  sources?: CitationSource[];
};

function bill(input: BillInput): LegislationBill {
  return {
    ...input,
    sources: input.sources ?? [senateActive, govinfoCalendar],
  };
}

/** Active + recently major 119th Congress bills for the live legislation tracker. */
const curatedLegislationBills: LegislationBill[] = [
  bill({
    id: "hr-1",
    chamber: "both",
    billNumber: "H.R. 1",
    title: "One Big Beautiful Bill Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-21.",
    lastActionDate: "2025-07-04",
    sponsor: { name: "Jodey Arrington", party: "R", state: "TX" },
    cosponsorsSummary: { D: 0, R: 18, I: 0 },
    votes: [
      vote("house", "2025-05-22", "On Passage", partyVote(0, 212, 215, 5), 0, 1),
      vote("senate", "2025-07-01", "On Passage of the Bill", partyVote(0, 47, 51, 2), 0, 0),
    ],
    summary:
      "Budget reconciliation package pairing a debt-limit increase with partisan tax, spending, and policy riders advanced under majority-only procedures.",
    whyItMatters:
      "Reconciliation lets one chamber majority rewrite large slices of fiscal policy without a 60-vote Senate cloture threshold. So the bill becomes the vehicle for policy that could not survive regular order.",
    progressiveTake:
      "Receipts: Public Law 119-21 is the majority's signature fiscal rewrite. Watch the tax distribution tables, Medicaid/SNAP riders, and debt-limit timing, not the branding. Reconciliation is a process cheat code, not a mandate for every rider stuffed inside.",
    impactSeverity: 9,
    topics: ["Budget", "Taxes", "Democracy", "Economy"],
    congressGovUrl: cgov("house-bill", 1),
  }),
  bill({
    id: "s-2",
    chamber: "both",
    billNumber: "S. 2",
    title: "Secure America Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-98.",
    lastActionDate: "2026-06-10",
    sponsor: { name: "Lindsey Graham", party: "R", state: "SC" },
    cosponsorsSummary: { D: 0, R: 12, I: 0 },
    votes: [
      vote("senate", "2026-06-04", "On Passage of the Bill", partyVote(3, 44, 50, 1), 0, 2),
      vote("house", "2026-06-09", "On Passage", partyVote(8, 198, 214, 4), 0, 9),
    ],
    summary:
      "Second-session budget reconciliation measure appropriating multi-year border and immigration-enforcement funding, including ICE hiring and DHS supplemental accounts.",
    whyItMatters:
      "It locks large enforcement appropriations through FY2029 and pairs them with reconciliation timing that sidelines ordinary appropriations bargaining.",
    progressiveTake:
      "The statute text funds hiring, training, and detention capacity, not vibes. Progressive critique should track dollar amounts, sunset dates, and civil-liberty oversight gaps in the public law, not conspiracy framing.",
    impactSeverity: 9,
    topics: ["Immigration", "Budget", "National Security"],
    congressGovUrl: cgov("senate-bill", 2),
    sources: [
      senateActive,
      cite(
        "plaw-119-98",
        "Public Law 119-98: Secure America Act",
        "U.S. Government Publishing Office",
        "https://www.congress.gov/119/plaws/publ98/PLAW-119publ98.htm",
        "Enacted text of the Secure America Act providing reconciliation funding for border and immigration enforcement.",
        "2026-06-10"
      ),
      govinfoCalendar,
    ],
  }),
  bill({
    id: "hr-29",
    chamber: "both",
    billNumber: "H.R. 29",
    title: "Laken Riley Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-1.",
    lastActionDate: "2025-01-29",
    sponsor: { name: "Mike Collins", party: "R", state: "GA" },
    cosponsorsSummary: { D: 4, R: 140, I: 0 },
    votes: [
      vote("house", "2025-01-22", "On Passage (S. 5 companion track)", partyVote(48, 164, 217, 0), 0, 4),
      vote("senate", "2025-01-20", "On Passage of the Bill (S. 5 companion track)", partyVote(12, 35, 51, 0), 0, 2),
    ],
    summary:
      "Expands mandatory detention and related enforcement triggers for noncitizens charged with or convicted of certain property and theft offenses, paired with state standing provisions.",
    whyItMatters:
      "It hard-codes detention mandates that reduce DHS discretion and invites state AG litigation strategy against federal immigration administration.",
    progressiveTake:
      "Named bills travel on tragedy. The receipts are the statutory detention triggers and standing clauses. Evaluate due-process impacts and crime-rate evidence separately from the branding.",
    impactSeverity: 8,
    topics: ["Immigration", "Crime", "Courts"],
    congressGovUrl: cgov("house-bill", 29),
  }),
  bill({
    id: "s-5",
    chamber: "senate",
    billNumber: "S. 5",
    title: "Laken Riley Act (Senate)",
    status: "enacted",
    lastAction: "Advanced action; companion path to P.L. 119-1.",
    lastActionDate: "2025-01-29",
    sponsor: { name: "Katie Britt", party: "R", state: "AL" },
    cosponsorsSummary: { D: 2, R: 38, I: 0 },
    summary:
      "Senate vehicle for the Laken Riley detention-mandate package that moved in tandem with H.R. 29.",
    whyItMatters:
      "Shows how House and Senate vehicles can race each other under the same political banner while the enacted text is what binds agencies.",
    progressiveTake:
      "Track the enrolled text and implementing memos. Chamber branding wars are noise; detention criteria and judicial review are the signal.",
    impactSeverity: 8,
    topics: ["Immigration", "Crime"],
    congressGovUrl: cgov("senate-bill", 5),
  }),
  bill({
    id: "hr-4405",
    chamber: "house",
    billNumber: "H.R. 4405",
    title: "Epstein Files Transparency Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-38.",
    lastActionDate: "2025-11-19",
    sponsor: { name: "Thomas Massie", party: "R", state: "KY" },
    cosponsorsSummary: { D: 95, R: 72, I: 0 },
    votes: [
      vote("house", "2025-11-12", "On Passage", partyVote(198, 12, 168, 42), 1, 12),
    ],
    summary:
      "Directs disclosure of federal investigative materials related to Jeffrey Epstein with defined exemptions, creating a statutory disclosure clock.",
    whyItMatters:
      "Rare cross-partisan transparency fight over elite accountability files. Tests whether Congress will force sunlight on powerful networks.",
    progressiveTake:
      "Progressives should celebrate enforceable disclosure schedules while watching exemption abuse. Transparency that stops at politically inconvenient names is theater.",
    impactSeverity: 7,
    topics: ["Accountability", "Transparency", "Justice"],
    congressGovUrl: cgov("house-bill", 4405),
  }),
  bill({
    id: "hr-4",
    chamber: "house",
    billNumber: "H.R. 4",
    title: "Rescissions Act of 2025",
    status: "enacted",
    lastAction: "Became Public Law No: 119-28.",
    lastActionDate: "2025-07-24",
    sponsor: { name: "Tom Cole", party: "R", state: "OK" },
    cosponsorsSummary: { D: 0, R: 22, I: 0 },
    votes: [
      vote("house", "2025-06-12", "On Passage", partyVote(2, 208, 216, 3), 0, 4),
    ],
    summary:
      "Package of rescissions clawing back previously appropriated funds across selected discretionary accounts.",
    whyItMatters:
      "Rescissions can quietly defund programs after the political fight over the original appropriation has passed.",
    progressiveTake:
      "Follow which accounts get hit (climate, housing, foreign aid, and oversight budgets are frequent targets). A rescission is a second vote to undo a first vote.",
    impactSeverity: 7,
    topics: ["Budget", "Economy"],
    congressGovUrl: cgov("house-bill", 4),
  }),
  bill({
    id: "hr-1968",
    chamber: "both",
    billNumber: "H.R. 1968",
    title: "FY2025 Continuing Resolution",
    status: "enacted",
    lastAction: "Became Public Law No: 119-4.",
    lastActionDate: "2025-03-15",
    sponsor: { name: "Tom Cole", party: "R", state: "OK" },
    votes: [
      vote("house", "2025-03-11", "On Passage", partyVote(45, 165, 190, 25), 0, 8),
    ],
    summary:
      "Continuing resolution keeping the government funded through September 30, 2025 under prior-year rates with selected anomalies.",
    whyItMatters:
      "CRs freeze policy fights into short-term cliffs that amplify shutdown brinkmanship and agency planning chaos.",
    progressiveTake:
      "Governing by CR is governing by hostage note. Demand full-year bills with transparent riders instead of midnight anomalies.",
    impactSeverity: 6,
    topics: ["Budget", "Appropriations"],
    congressGovUrl: cgov("house-bill", 1968),
  }),
  bill({
    id: "hr-5371",
    chamber: "both",
    billNumber: "H.R. 5371",
    title: "FY2026 Continuing Resolution (through Jan 30, 2026)",
    status: "enacted",
    lastAction: "Became Public Law No: 119-37.",
    lastActionDate: "2025-11-12",
    sponsor: { name: "Tom Cole", party: "R", state: "OK" },
    votes: [
      vote("house", "2025-11-07", "On Passage", partyVote(52, 155, 188, 28), 0, 10),
    ],
    summary:
      "CR extending funding into early 2026 and locking full-year funding for Agriculture, Military Construction/VA, and Legislative Branch.",
    whyItMatters:
      "Splits the appropriations map: some bills get certainty while others stay on cliff calendars.",
    progressiveTake:
      "Partial full-year packages can be used to isolate fights over DHS, State, and Labor-HHS. Track which fights the majority chooses to keep live.",
    impactSeverity: 6,
    topics: ["Budget", "Appropriations"],
    congressGovUrl: cgov("house-bill", 5371),
  }),
  bill({
    id: "hr-7147",
    chamber: "both",
    billNumber: "H.R. 7147",
    title: "Homeland Security Appropriations Act, 2026",
    status: "enacted",
    lastAction: "Became Public Law No: 119-86.",
    lastActionDate: "2026-04-30",
    sponsor: { name: "Mark Amodei", party: "R", state: "NV" },
    votes: [
      vote("house", "2026-03-27", "On Agreeing to Senate Amendment with Amendment", partyVote(10, 200, 210, 8), 0, 5),
      vote("senate", "2026-04-02", "On Disagreeing to House Amendment", partyVote(5, 42, 48, 3), 0, 2),
    ],
    summary:
      "Homeland Security funding measure that survived a House-Senate amendment ping-pong before final agreement.",
    whyItMatters:
      "DHS funding is where detention, asylum processing, FEMA, and CBP capacity actually get paid for.",
    progressiveTake:
      "Appropriations are policy. Compare detention beds and asylum officer funding to disaster-aid accounts before accepting 'border security' slogans.",
    impactSeverity: 8,
    topics: ["Immigration", "Appropriations", "National Security"],
    congressGovUrl: cgov("house-bill", 7147),
  }),
  bill({
    id: "hr-7148",
    chamber: "both",
    billNumber: "H.R. 7148",
    title: "Consolidated Appropriations Act, 2026",
    status: "enacted",
    lastAction: "Became Public Law No: 119-75.",
    lastActionDate: "2026-02-03",
    sponsor: { name: "Tom Cole", party: "R", state: "OK" },
    votes: [
      vote("house", "2026-01-22", "On Passage", partyVote(40, 170, 195, 22), 0, 6),
      vote("senate", "2026-01-30", "On Passage with Amendments", partyVote(35, 12, 42, 9), 0, 2),
    ],
    summary:
      "Omnibus wrapping Defense and multiple domestic bills (Labor-HHS-Education, Transportation-HUD, Financial Services, National Security/State, and Homeland Security provisions).",
    whyItMatters:
      "Omnibuses concentrate leverage: must-pass defense dollars pull domestic priorities and poison pills along for the ride.",
    progressiveTake:
      "Read the joint explanatory statement. That is where earmarks, riders, and quiet policy changes hide after the floor speeches end.",
    impactSeverity: 8,
    topics: ["Budget", "Appropriations", "Defense"],
    congressGovUrl: cgov("house-bill", 7148),
  }),
  bill({
    id: "hr-6938",
    chamber: "both",
    billNumber: "H.R. 6938",
    title: "Commerce, Justice, Science / Energy & Water / Interior, 2026",
    status: "enacted",
    lastAction: "Became Public Law No: 119-74.",
    lastActionDate: "2026-01-23",
    sponsor: { name: "Hal Rogers", party: "R", state: "KY" },
    votes: [
      vote("house", "2026-01-08", "On Passage", partyVote(18, 190, 208, 10), 0, 7),
    ],
    summary:
      "Minibus funding Commerce-Justice-Science together with Energy & Water and Interior-Environment accounts.",
    whyItMatters:
      "Controls DOJ, NSF, EPA-adjacent interior accounts, and energy project funding in one package.",
    progressiveTake:
      "Watch DOJ grant conditions, EPA rider language, and science-agency freezes. Minibuses are where culture-war riders hitch a ride on must-pass science funding.",
    impactSeverity: 7,
    topics: ["Appropriations", "Environment", "Justice"],
    congressGovUrl: cgov("house-bill", 6938),
  }),
  bill({
    id: "s-1071",
    chamber: "senate",
    billNumber: "S. 1071",
    title: "National Defense Authorization Act for Fiscal Year 2026",
    status: "enacted",
    lastAction: "Became Public Law No: 119-60.",
    lastActionDate: "2025-12-18",
    sponsor: { name: "Roger Wicker", party: "R", state: "MS" },
    votes: [
      vote("senate", "2025-10-09", "On Passage of the Bill", partyVote(38, 8, 48, 4), 0, 2),
    ],
    summary:
      "Annual defense policy authorization setting end-strength, acquisition policy, and national-security authorities for FY2026.",
    whyItMatters:
      "NDAA is the yearly Christmas tree for force structure, contractor rules, and sometimes unrelated policy riders.",
    progressiveTake:
      "Separate readiness and troop pay from contractor giveaways and civil-liberties riders. Authorization is not the same as appropriation (both matter).",
    impactSeverity: 7,
    topics: ["Defense", "National Security"],
    congressGovUrl: cgov("senate-bill", 1071),
  }),
  bill({
    id: "s-1582",
    chamber: "senate",
    billNumber: "S. 1582",
    title: "GENIUS Act (Stablecoin Regulation)",
    status: "enacted",
    lastAction: "Became Public Law No: 119-27.",
    lastActionDate: "2025-07-18",
    sponsor: { name: "Bill Hagerty", party: "R", state: "TN" },
    cosponsorsSummary: { D: 8, R: 14, I: 1 },
    votes: [
      vote("senate", "2025-06-17", "On Passage of the Bill", partyVote(28, 18, 40, 12), 0, 2),
    ],
    summary:
      "Federal framework for payment stablecoin issuance, reserves, and supervision.",
    whyItMatters:
      "Sets the ground rules for a rapidly growing payments market that can transmit bank-like runs without bank-like protections.",
    progressiveTake:
      "Consumer protection and AML rules are the core fight. Industry-written frameworks that privatize gains and socialize runs should be rejected on the text, not the buzzwords.",
    impactSeverity: 6,
    topics: ["Economy", "Finance", "Technology"],
    congressGovUrl: cgov("senate-bill", 1582),
  }),
  bill({
    id: "s-331",
    chamber: "senate",
    billNumber: "S. 331",
    title: "Halt All Lethal Trafficking of Fentanyl Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-26.",
    lastActionDate: "2025-07-16",
    sponsor: { name: "Tom Cotton", party: "R", state: "AR" },
    cosponsorsSummary: { D: 10, R: 32, I: 0 },
    votes: [
      vote("senate", "2025-04-28", "On Passage of the Bill", partyVote(35, 10, 48, 3), 0, 4),
    ],
    summary:
      "Permanently classifies fentanyl-related substances in Schedule I and adjusts related criminal and scheduling authorities.",
    whyItMatters:
      "Scheduling decisions shape prosecution exposure, research barriers, and treatment pathways for years.",
    progressiveTake:
      "Overdose deaths are real. Permanent Schedule I classification without treatment expansion and research pathways repeats the failures of punitive-only drug policy. Demand both supply interdiction and care.",
    impactSeverity: 7,
    topics: ["Healthcare", "Crime", "Justice"],
    congressGovUrl: cgov("senate-bill", 331),
  }),
  bill({
    id: "hr-8322",
    chamber: "house",
    billNumber: "H.R. 8322",
    title: "FISA Extension (through April 30, 2026)",
    status: "enacted",
    lastAction: "Became Public Law No: 119-84.",
    lastActionDate: "2026-04-10",
    sponsor: { name: "Mike Rogers", party: "R", state: "AL" },
    votes: [
      vote("house", "2026-03-18", "On Passage", partyVote(95, 110, 180, 35), 2, 11),
    ],
    summary:
      "Short-term extension of Foreign Intelligence Surveillance Act authorities through April 30, 2026.",
    whyItMatters:
      "FISA fights are where surveillance power, warrant standards, and query rules get renewed under deadline pressure.",
    progressiveTake:
      "Short extensions are leverage. Use them to force warrant fixes and auditability. Do not rubber-stamp surveillance calendars.",
    impactSeverity: 8,
    topics: ["Civil Liberties", "National Security", "Democracy"],
    congressGovUrl: cgov("house-bill", 8322),
  }),
  bill({
    id: "s-4465",
    chamber: "senate",
    billNumber: "S. 4465",
    title: "FISA Extension (through June 12, 2026)",
    status: "enacted",
    lastAction: "Became Public Law No: 119-87.",
    lastActionDate: "2026-05-08",
    sponsor: { name: "Mark Warner", party: "D", state: "VA" },
    votes: [
      vote("senate", "2026-04-29", "On Passage of the Bill", partyVote(40, 7, 38, 12), 0, 3),
    ],
    summary:
      "Further short extension of FISA authorities into mid-June 2026.",
    whyItMatters:
      "Serial short extensions keep surveillance law in permanent emergency mode and shrink public debate windows.",
    progressiveTake:
      "Bipartisan national-security branding is not a substitute for Fourth Amendment reform. Publish query audit stats with the extension.",
    impactSeverity: 8,
    topics: ["Civil Liberties", "National Security"],
    congressGovUrl: cgov("senate-bill", 4465),
  }),
  bill({
    id: "hr-7567",
    chamber: "house",
    billNumber: "H.R. 7567",
    title: "Farm Bill Reauthorization through FY2031",
    status: "floor",
    lastAction: "Advanced action in the House; Senate companion pending (Senate active-leg, July 15, 2026).",
    lastActionDate: "2026-07-15",
    sponsor: { name: "G.T. Thompson", party: "R", state: "PA" },
    cosponsorsSummary: { D: 12, R: 28, I: 0 },
    summary:
      "Multi-year agriculture reauthorization covering commodities, conservation, nutrition, and rural development titles.",
    whyItMatters:
      "The farm bill is the largest nutrition and rural investment package Congress regularly rewrites.",
    progressiveTake:
      "SNAP adequacy, climate-smart conservation, and consolidation of mega-farm subsidies are the real scoreboard, not the ribbon-cutting.",
    impactSeverity: 7,
    topics: ["Agriculture", "Economy", "Healthcare"],
    congressGovUrl: cgov("house-bill", 7567),
  }),
  bill({
    id: "s-2651",
    chamber: "senate",
    billNumber: "S. 2651",
    title: "ROAD to Housing Act of 2025",
    status: "passed",
    lastAction:
      "Senate housing vehicle negotiated into the enacted H.R. 6644 / P.L. 119-101 package.",
    lastActionDate: "2026-06-23",
    sponsor: { name: "Tim Scott", party: "R", state: "SC" },
    cosponsorsSummary: { D: 18, R: 12, I: 1 },
    summary:
      "Senate housing-supply package that fed conference negotiations culminating in the 21st Century ROAD to Housing Act.",
    whyItMatters:
      "Shows how Senate Banking text can become the scaffolding for a House-numbered public law.",
    progressiveTake:
      "Read the enrolled H.R. 6644 text, not the press releases. Supply incentives without tenant and fair-housing guardrails can become developer windfalls.",
    impactSeverity: 7,
    topics: ["Housing", "Economy"],
    congressGovUrl: cgov("senate-bill", 2651),
  }),
  bill({
    id: "hr-6644",
    chamber: "both",
    billNumber: "H.R. 6644",
    title: "21st Century ROAD to Housing Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-101.",
    lastActionDate: "2026-07-11",
    sponsor: { name: "J. French Hill", party: "R", state: "AR" },
    cosponsorsSummary: { D: 28, R: 35, I: 0 },
    votes: [
      vote("house", "2026-06-23", "On Agreeing to Senate Amendment", partyVote(180, 25, 178, 7), 0, 43),
    ],
    summary:
      "Enacted housing-supply package modernizing HUD programs, streamlining reviews for residential construction, and expanding financing tools for affordable production.",
    whyItMatters:
      "Largest bipartisan housing-supply rewrite of the 119th Congress — and the rare kitchen-table bill that actually became law.",
    progressiveTake:
      "Celebrate the supply tools, then audit NEPA streamlining, Opportunity Zone weighting, and whether fair-housing enforcement dollars kept pace. Enactment is the start of implementation fights.",
    impactSeverity: 8,
    topics: ["Housing", "Economy", "Civil Rights"],
    congressGovUrl: cgov("house-bill", 6644),
    sources: [
      senateActive,
      cite(
        "plaw-119-101",
        "Public Law 119-101: 21st Century ROAD to Housing Act",
        "U.S. Congress",
        "https://www.congress.gov/bill/119th-congress/house-bill/6644",
        "Became Public Law No: 119-101 on July 11, 2026 (enacted by 10-day rule after presentment).",
        "2026-07-11"
      ),
      govinfoCalendar,
    ],
  }),
  bill({
    id: "hr-7613",
    chamber: "house",
    billNumber: "H.R. 7613",
    title: "Aviation Safety Enhancement Act",
    status: "floor",
    lastAction: "Advanced action in the House (Senate active-leg index).",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Sam Graves", party: "R", state: "MO" },
    cosponsorsSummary: { D: 15, R: 22, I: 0 },
    summary:
      "Updates FAA safety oversight, certification timelines, and whistleblower protections after recent aviation safety scrutiny.",
    whyItMatters:
      "Certification capture and understaffed oversight are life-and-death regulatory questions.",
    progressiveTake:
      "Speed without inspectors is a lobbyist ask. Tie certification reforms to staffing floors and conflict-of-interest firewalls.",
    impactSeverity: 6,
    topics: ["Transportation", "Safety", "Labor"],
    congressGovUrl: cgov("house-bill", 7613),
  }),
  bill({
    id: "s-1383",
    chamber: "senate",
    billNumber: "S. 1383",
    title: "SAVE America Act",
    status: "floor",
    lastAction:
      "Advanced action on Senate active-leg index; House hardliners blocked related floor packaging after the July recess fight.",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Mike Lee", party: "R", state: "UT" },
    cosponsorsSummary: { D: 0, R: 24, I: 0 },
    summary:
      "Election-administration package altering federal standards for voter list maintenance, proof-of-citizenship documentation, and related grants.",
    whyItMatters:
      "Federal election conditionality can cascade into state purge practices and provisional-ballot rates — and it is live on the majority's must-pass wish list.",
    progressiveTake:
      "Compare text to Shelby County aftermath data. 'Integrity' branding that raises barriers without expanding access is suppression with better marketing.",
    impactSeverity: 9,
    topics: ["Elections", "Democracy", "Civil Rights"],
    congressGovUrl: cgov("senate-bill", 1383),
  }),
  bill({
    id: "hr-7296",
    chamber: "house",
    billNumber: "H.R. 7296",
    title: "SAVE America Act (House)",
    status: "floor",
    lastAction: "Advanced action in the House; tied to the Senate SAVE America fight.",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Bryan Steil", party: "R", state: "WI" },
    cosponsorsSummary: { D: 0, R: 55, I: 0 },
    summary:
      "House companion tightening federal election documentation and list-maintenance conditions.",
    whyItMatters:
      "House Administration markup is often where national election fights get written into grant conditions.",
    progressiveTake:
      "Require GAO and Brennan Center-style turnout impact estimates before any new documentary barrier becomes federal policy.",
    impactSeverity: 9,
    topics: ["Elections", "Democracy"],
    congressGovUrl: cgov("house-bill", 7296),
  }),
  bill({
    id: "hconres-86",
    chamber: "house",
    billNumber: "H.Con.Res. 86",
    title: "Iran War Powers Resolution",
    status: "floor",
    lastAction: "Advanced action; privileged war-powers consideration track (Senate active-leg).",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Ro Khanna", party: "D", state: "CA" },
    cosponsorsSummary: { D: 62, R: 8, I: 0 },
    summary:
      "Concurrent resolution directing removal of U.S. armed forces from hostilities related to Iran absent specific congressional authorization.",
    whyItMatters:
      "War powers votes are the rare floor fights that reassert Article I against unilateral executive force.",
    progressiveTake:
      "If members will not vote, they should not fund forever wars. Force the authorization text into daylight.",
    impactSeverity: 8,
    topics: ["Foreign Policy", "Democracy", "National Security"],
    congressGovUrl: cgov("house-concurrent-resolution", 86),
  }),
  bill({
    id: "sconres-33",
    chamber: "senate",
    billNumber: "S.Con.Res. 33",
    title: "Budget Resolution FY2027-FY2035",
    status: "passed",
    lastAction: "Senate agreed to budget resolution setting reconciliation instructions.",
    lastActionDate: "2026-05-15",
    sponsor: { name: "Lindsey Graham", party: "R", state: "SC" },
    votes: [
      vote("senate", "2026-05-15", "On the Concurrent Resolution", partyVote(0, 47, 51, 1), 0, 1),
    ],
    summary:
      "Budget resolution establishing fiscal aggregates and reconciliation instructions that later enabled S. 2.",
    whyItMatters:
      "The resolution is the procedural key that unlocked majority-only reconciliation on Secure America Act priorities.",
    progressiveTake:
      "Budget resolutions look boring and decide everything. Organize against the instructions, not just the final branded bill.",
    impactSeverity: 8,
    topics: ["Budget", "Democracy"],
    congressGovUrl: cgov("senate-concurrent-resolution", 33),
  }),
  bill({
    id: "sconres-7",
    chamber: "both",
    billNumber: "S.Con.Res. 7",
    title: "Budget Resolution FY2026-FY2034",
    status: "passed",
    lastAction: "Advanced in both chambers; paired with H.Con.Res. 14 track.",
    lastActionDate: "2025-04-05",
    sponsor: { name: "Lindsey Graham", party: "R", state: "SC" },
    votes: [
      vote("senate", "2025-04-04", "On the Concurrent Resolution", partyVote(0, 47, 51, 2), 0, 0),
    ],
    summary:
      "Earlier budget resolution setting the FY2026-34 fiscal framework and reconciliation runway for H.R. 1.",
    whyItMatters:
      "Shows the two-step: pass a resolution, then ram the policy bill through reconciliation.",
    progressiveTake:
      "Teach the process. If voters only see the final 'big beautiful' brand, they miss the procedural heist.",
    impactSeverity: 8,
    topics: ["Budget", "Democracy"],
    congressGovUrl: cgov("senate-concurrent-resolution", 7),
  }),
  bill({
    id: "hconres-14",
    chamber: "house",
    billNumber: "H.Con.Res. 14",
    title: "House Budget Resolution FY2026-FY2034",
    status: "passed",
    lastAction: "House agreed; conference/coordination with Senate resolution track.",
    lastActionDate: "2025-02-25",
    sponsor: { name: "Jodey Arrington", party: "R", state: "TX" },
    votes: [
      vote("house", "2025-02-25", "On Agreeing to the Resolution", partyVote(0, 210, 216, 4), 0, 3),
    ],
    summary:
      "House budget resolution companion establishing reconciliation instructions aligned to majority fiscal priorities.",
    whyItMatters:
      "House Budget votes preview which tax and entitlement fights leadership intends to force.",
    progressiveTake:
      "Score the reconciliation directives line by line. That is the bill of particulars before the marketing starts.",
    impactSeverity: 7,
    topics: ["Budget"],
    congressGovUrl: cgov("house-concurrent-resolution", 14),
  }),
  bill({
    id: "s-2882",
    chamber: "senate",
    billNumber: "S. 2882",
    title: "FY2026 Continuing Resolution (through Oct 31, 2025)",
    status: "failed",
    lastAction: "Failed to pass.",
    lastActionDate: "2025-09-30",
    sponsor: { name: "Susan Collins", party: "R", state: "ME" },
    votes: [
      vote("senate", "2025-09-30", "On Passage of the Bill", partyVote(22, 25, 28, 23), 0, 2),
    ],
    summary:
      "Short CR attempt that failed amid shutdown brinkmanship over partisan riders.",
    whyItMatters:
      "Failed CRs are the receipts for who chose cliffs over governing.",
    progressiveTake:
      "Publish the failed-amendment list. Shutdown politics is a choice with named sponsors.",
    impactSeverity: 5,
    topics: ["Budget", "Appropriations"],
    congressGovUrl: cgov("senate-bill", 2882),
  }),
  bill({
    id: "hr-8800",
    chamber: "house",
    billNumber: "H.R. 8800",
    title: "National Defense Authorization Act for Fiscal Year 2027",
    status: "committee",
    lastAction:
      "Listed on Senate active-leg index; House leadership paused floor action after Freedom Caucus fights over SAVE America packaging.",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Mike Rogers", party: "R", state: "AL" },
    summary:
      "House NDAA vehicle for FY2027 policy authorizations — must-pass defense policy that usually clears every year.",
    whyItMatters:
      "NDAA drafts preview contractor priorities, force structure, and culture-war amendments before conference.",
    progressiveTake:
      "Organize amendments early. Once leadership locks the rule, the Christmas tree is mostly decorated.",
    impactSeverity: 8,
    topics: ["Defense", "National Security"],
    congressGovUrl: cgov("house-bill", 8800),
  }),
  bill({
    id: "s-4784",
    chamber: "senate",
    billNumber: "S. 4784",
    title: "National Defense Authorization Act for Fiscal Year 2027 (Senate)",
    status: "floor",
    lastAction:
      "Cloture on the motion to proceed rejected 50–46 (July 14, 2026); Democrats blocked debate citing Iran war authorization and topline fights.",
    lastActionDate: "2026-07-14",
    sponsor: { name: "Roger Wicker", party: "R", state: "MS" },
    cosponsorsSummary: { D: 0, R: 0, I: 0 },
    votes: [
      vote(
        "senate",
        "2026-07-14",
        "On Cloture on the Motion to Proceed",
        partyVote(0, 43, 50, 1, 0, 2),
        0,
        4
      ),
    ],
    summary:
      "Senate Armed Services FY2027 NDAA (~$1.15T authorization) that failed cloture on the motion to proceed along near party-line lines.",
    whyItMatters:
      "First time in modern practice the Senate blocked the motion to proceed on the annual NDAA — war powers and spending ceilings collided with a must-pass vehicle.",
    progressiveTake:
      "Do not let 'support the troops' branding erase the Article I question. If the White House resumes hostilities without authorization, force that fight onto the NDAA record.",
    impactSeverity: 9,
    topics: ["Defense", "National Security", "Democracy"],
    congressGovUrl: cgov("senate-bill", 4784),
    sources: [
      senateActive,
      cite(
        "senate-vote-195-s4784",
        "Roll Call Vote 195: Cloture on Motion to Proceed to S. 4784",
        "U.S. Senate",
        "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00195.htm",
        "Cloture on the motion to proceed rejected July 14, 2026 (50–46; 3/5 required).",
        "2026-07-14"
      ),
    ],
  }),
  bill({
    id: "hr-9022",
    chamber: "house",
    billNumber: "H.R. 9022",
    title: "Energy and Water Development Appropriations Act, 2027",
    status: "committee",
    lastAction: "Listed on Senate active-leg index; not marked advanced action as of July 15, 2026.",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Chuck Fleischmann", party: "R", state: "TN" },
    summary:
      "FY2027 Energy and Water bill funding Army Corps, DOE, and related accounts.",
    whyItMatters:
      "Controls nuclear cleanup, grid research, and water-infrastructure earmarks.",
    progressiveTake:
      "Defend climate and cleanup accounts against poison-pill riders aimed at IRA implementation.",
    impactSeverity: 6,
    topics: ["Appropriations", "Environment", "Energy"],
    congressGovUrl: cgov("house-bill", 9022),
  }),
  bill({
    id: "hr-8595",
    chamber: "house",
    billNumber: "H.R. 8595",
    title: "National Security and State Appropriations Act, 2027",
    status: "floor",
    lastAction:
      "House leadership priority for the mid-July work period; rule packaging tied to daylight-saving and veterans riders.",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Mario Diaz-Balart", party: "R", state: "FL" },
    summary:
      "FY2027 State and related national-security appropriations vehicle — the House's preferred must-pass spending bill while NDAA is stalled.",
    whyItMatters:
      "State/ForeignOps bills are where diplomacy funding and refugee admissions get squeezed.",
    progressiveTake:
      "Track refugee ceilings, UN dues, and democracy programs. Soft power cuts show up as harder crises later.",
    impactSeverity: 7,
    topics: ["Appropriations", "Foreign Policy"],
    congressGovUrl: cgov("house-bill", 8595),
  }),
  bill({
    id: "hr-8646",
    chamber: "house",
    billNumber: "H.R. 8646",
    title: "Agriculture Appropriations Act, 2027",
    status: "floor",
    lastAction: "Advanced action in the House (Senate active-leg index).",
    lastActionDate: "2026-07-15",
    sponsor: { name: "Andy Harris", party: "R", state: "MD" },
    summary:
      "FY2027 Agriculture appropriations covering nutrition, food safety, and rural development accounts.",
    whyItMatters:
      "Ag appropriations decide WIC, inspection capacity, and rural investment — kitchen-table dollars.",
    progressiveTake:
      "Food assistance is health policy. Treat WIC and SNAP administrative funding as non-negotiable.",
    impactSeverity: 6,
    topics: ["Appropriations", "Agriculture", "Healthcare"],
    congressGovUrl: cgov("house-bill", 8646),
  }),
  bill({
    id: "hr-8469",
    chamber: "house",
    billNumber: "H.R. 8469",
    title: "Military Construction and Veterans Affairs Appropriations Act, 2027",
    status: "floor",
    lastAction: "Advanced action in the House (Senate active-leg index).",
    lastActionDate: "2026-07-15",
    sponsor: { name: "John Carter", party: "R", state: "TX" },
    summary:
      "FY2027 MilCon-VA bill funding VA health care, benefits, and military construction accounts.",
    whyItMatters:
      "VA funding levels are the receipts behind 'support the troops' rhetoric.",
    progressiveTake:
      "Score VA medical care and disability claims backlogs, not ribbon-cuttings. Underfunded claims processing is a broken promise.",
    impactSeverity: 7,
    topics: ["Appropriations", "Veterans", "Defense"],
    congressGovUrl: cgov("house-bill", 8469),
  }),
  bill({
    id: "hr-139",
    chamber: "house",
    billNumber: "H.R. 139",
    title: "Sunshine Protection Act (Permanent Daylight Saving Time)",
    status: "floor",
    lastAction:
      "Rule providing for consideration filed; leadership seeking to attach to mid-July spending packaging.",
    lastActionDate: "2026-07-13",
    sponsor: { name: "Vern Buchanan", party: "R", state: "FL" },
    cosponsorsSummary: { D: 40, R: 55, I: 0 },
    summary:
      "Would make daylight saving time permanent nationwide — a popular rider leaders are using to grease harder votes.",
    whyItMatters:
      "Popular riders are how controversial spending and election bills get packaged. Watch what this gets stapled to.",
    progressiveTake:
      "The clock change is not the story. The story is which election or foreign-aid riders hitch a ride.",
    impactSeverity: 3,
    topics: ["Government", "Economy"],
    congressGovUrl: cgov("house-bill", 139),
  }),
  bill({
    id: "hr-14",
    chamber: "house",
    billNumber: "H.R. 14",
    title: "John R. Lewis Voting Rights Advancement Act",
    status: "introduced",
    lastAction: "Introduced; referred to Judiciary.",
    lastActionDate: "2025-01-09",
    sponsor: { name: "Terri Sewell", party: "D", state: "AL" },
    cosponsorsSummary: { D: 198, R: 0, I: 0 },
    summary:
      "Would restore and modernize Voting Rights Act preclearance coverage based on recent discriminatory voting changes.",
    whyItMatters:
      "Post-Shelby Section 5 paralysis left federal courts as a slow rear-guard; this bill rebuilds prophylactic review.",
    progressiveTake:
      "This is the structural democracy bill. Everything else about 'election integrity' is downstream of whether discriminatory maps and rules get precleared.",
    impactSeverity: 10,
    topics: ["Elections", "Civil Rights", "Democracy"],
    congressGovUrl: cgov("house-bill", 14),
  }),
  bill({
    id: "s-1",
    chamber: "senate",
    billNumber: "S. 1",
    title: "Freedom to Vote Act",
    status: "committee",
    lastAction: "Cloture attempts pending; held at desk / calendar fights ongoing.",
    lastActionDate: "2025-03-05",
    sponsor: { name: "Amy Klobuchar", party: "D", state: "MN" },
    cosponsorsSummary: { D: 47, R: 0, I: 2 },
    summary:
      "National baseline for early voting, automatic registration, mail ballots, and anti-interference protections.",
    whyItMatters:
      "Sets a federal floor so states cannot invent bespoke obstacles every cycle.",
    progressiveTake:
      "Filibuster math is the obstacle, not public support. Say that plainly when explaining why the bill stalls.",
    impactSeverity: 10,
    topics: ["Elections", "Democracy"],
    congressGovUrl: cgov("senate-bill", 1),
  }),
  bill({
    id: "hr-20",
    chamber: "house",
    billNumber: "H.R. 20",
    title: "Richard L. Trumka Protecting the Right to Organize Act",
    status: "introduced",
    lastAction: "Introduced; referred to Education and the Workforce.",
    lastActionDate: "2025-01-09",
    sponsor: { name: "Robert C. Scott", party: "D", state: "VA" },
    cosponsorsSummary: { D: 190, R: 1, I: 0 },
    summary:
      "Strengthens private-sector organizing rights, penalties for ULPs, and first-contract mediation/arbitration pathways.",
    whyItMatters:
      "Union density is one of the few proven counters to wage stagnation and workplace authoritarianism.",
    progressiveTake:
      "If politicians celebrate 'working class' while bottling the PRO Act, believe the vote whip, not the hard-hat photo op.",
    impactSeverity: 8,
    topics: ["Labor", "Economy"],
    congressGovUrl: cgov("house-bill", 20),
  }),
  bill({
    id: "s-1655",
    chamber: "senate",
    billNumber: "S. 1655",
    title: "Medicare for All Act",
    status: "introduced",
    lastAction: "Introduced; referred to Finance.",
    lastActionDate: "2025-05-08",
    sponsor: { name: "Bernie Sanders", party: "I", state: "VT" },
    cosponsorsSummary: { D: 14, R: 0, I: 1 },
    summary:
      "Establishes a single-payer national health insurance program covering medically necessary care.",
    whyItMatters:
      "Forces a public debate on whether health care is a market commodity or a right, with CBO-scoreable design choices.",
    progressiveTake:
      "Meet fearmongering with OECD outcomes: the U.S. pays more for worse coverage. Point to the bill's benefits package and transition timeline, not vibes.",
    impactSeverity: 9,
    topics: ["Healthcare", "Economy"],
    congressGovUrl: cgov("senate-bill", 1655),
  }),
  bill({
    id: "hr-3069",
    chamber: "house",
    billNumber: "H.R. 3069",
    title: "Medicare for All Act (House)",
    status: "introduced",
    lastAction: "Introduced; referred to Energy and Commerce / Ways and Means.",
    lastActionDate: "2025-04-29",
    sponsor: { name: "Pramila Jayapal", party: "D", state: "WA" },
    cosponsorsSummary: { D: 95, R: 0, I: 0 },
    summary:
      "House single-payer companion establishing universal coverage with a defined transition.",
    whyItMatters:
      "Keeps single-payer text alive for hearings, scorekeeping, and primary campaigns.",
    progressiveTake:
      "Use the bill as a litmus for whether 'access' rhetoric includes actual coverage without medical debt.",
    impactSeverity: 9,
    topics: ["Healthcare"],
    congressGovUrl: cgov("house-bill", 3069),
  }),
  bill({
    id: "s-1171",
    chamber: "senate",
    billNumber: "S. 1171",
    title: "Climate Emergency Mobilization Act",
    status: "committee",
    lastAction: "Referred to Environment and Public Works.",
    lastActionDate: "2025-03-27",
    sponsor: { name: "Jeff Merkley", party: "D", state: "OR" },
    cosponsorsSummary: { D: 16, R: 0, I: 1 },
    summary:
      "Declares a climate emergency and authorizes accelerated clean-energy and resilience investments with labor standards.",
    whyItMatters:
      "Emergency framing unlocks urgency, and tests whether Congress will match IPCC timelines with statutory tools.",
    progressiveTake:
      "Pair emissions targets with Just Transition funding. Climate bills that strand workers without wage floors recreate the backlash machine.",
    impactSeverity: 8,
    topics: ["Climate", "Environment", "Labor"],
    congressGovUrl: cgov("senate-bill", 1171),
  }),
  bill({
    id: "hr-11",
    chamber: "house",
    billNumber: "H.R. 11",
    title: "Family and Medical Insurance Leave Act (FAMILY Act)",
    status: "introduced",
    lastAction: "Introduced; referred to Ways and Means.",
    lastActionDate: "2025-01-09",
    sponsor: { name: "Rosa DeLauro", party: "D", state: "CT" },
    cosponsorsSummary: { D: 175, R: 0, I: 0 },
    summary:
      "Creates a national paid family and medical leave insurance program financed by small payroll contributions.",
    whyItMatters:
      "The U.S. remains an outlier among peer democracies without national paid leave.",
    progressiveTake:
      "Cite DOL and OECD leave comparisons. 'Pro-family' politics without paid leave is branding.",
    impactSeverity: 7,
    topics: ["Labor", "Healthcare", "Economy"],
    congressGovUrl: cgov("house-bill", 11),
  }),
  bill({
    id: "s-2342",
    chamber: "senate",
    billNumber: "S. 2342",
    title: "Intelligence Authorization Act for Fiscal Year 2026",
    status: "committee",
    lastAction: "Reported by select committee; awaiting floor.",
    lastActionDate: "2025-09-18",
    sponsor: { name: "Tom Cotton", party: "R", state: "AR" },
    summary:
      "Annual intelligence community authorization covering funding levels and oversight reporting requirements.",
    whyItMatters:
      "IC authorizations set the quiet rules for surveillance capabilities and inspector-general bandwidth.",
    progressiveTake:
      "Demand public annexes on query audits and whistleblower protections whenever the classified schedule grows.",
    impactSeverity: 6,
    topics: ["National Security", "Civil Liberties"],
    congressGovUrl: cgov("senate-bill", 2342),
  }),
  bill({
    id: "s-524",
    chamber: "both",
    billNumber: "S. 524",
    title: "Coast Guard Authorization Act of 2025",
    status: "floor",
    lastAction: "House companion H.R. 4275 advanced; Senate vehicle active.",
    lastActionDate: "2026-01-15",
    sponsor: { name: "Maria Cantwell", party: "D", state: "WA" },
    cosponsorsSummary: { D: 6, R: 5, I: 0 },
    summary:
      "Authorizes Coast Guard end-strength, acquisition, and polar security cutter authorities.",
    whyItMatters:
      "Coast Guard policy sits at the intersection of search-and-rescue, climate Arctic policy, and maritime migration enforcement.",
    progressiveTake:
      "Fund icebreakers and climate readiness without turning every authorization into a stealth immigration bill.",
    impactSeverity: 5,
    topics: ["Defense", "Climate", "Immigration"],
    congressGovUrl: cgov("senate-bill", 524),
  }),
  bill({
    id: "hr-4275",
    chamber: "house",
    billNumber: "H.R. 4275",
    title: "Coast Guard Authorization Act (House)",
    status: "floor",
    lastAction: "Advanced action in the House.",
    lastActionDate: "2026-01-14",
    sponsor: { name: "Sam Graves", party: "R", state: "MO" },
    summary:
      "House Coast Guard authorization companion to S. 524.",
    whyItMatters:
      "Conference negotiations will decide cutter timelines and enforcement authorities.",
    progressiveTake:
      "Watch for riders that expand maritime interception without asylum process capacity.",
    impactSeverity: 5,
    topics: ["Defense", "Transportation"],
    congressGovUrl: cgov("house-bill", 4275),
  }),
  bill({
    id: "sres-708",
    chamber: "senate",
    billNumber: "S.Res. 708",
    title: "Ban on Prediction-Market Trading by Members and Staff",
    status: "committee",
    lastAction: "Submitted and referred.",
    lastActionDate: "2026-06-10",
    sponsor: { name: "Jeff Merkley", party: "D", state: "OR" },
    cosponsorsSummary: { D: 12, R: 4, I: 1 },
    summary:
      "Sense-of-Senate / ethics resolution restricting members and staff from trading on political prediction markets.",
    whyItMatters:
      "Tests whether Congress will close an obvious conflict-of-interest loophole as prediction markets scale.",
    progressiveTake:
      "If insider trading in stocks is wrong, insider trading on legislation odds is worse. Codify it.",
    impactSeverity: 4,
    topics: ["Accountability", "Ethics"],
    congressGovUrl: cgov("senate-resolution", 708),
  }),
  bill({
    id: "sres-526",
    chamber: "senate",
    billNumber: "S.Res. 526",
    title: "Withhold Senators' Pay During Government Shutdown",
    status: "committee",
    lastAction: "Submitted; held amid shutdown politics.",
    lastActionDate: "2025-10-01",
    sponsor: { name: "Chris Murphy", party: "D", state: "CT" },
    cosponsorsSummary: { D: 22, R: 1, I: 1 },
    summary:
      "Resolution pressing that senators should not collect pay while forcing a shutdown.",
    whyItMatters:
      "Symbolic, but it frames who bears costs when brinkmanship closes services.",
    progressiveTake:
      "Pair pay-withholding messaging with concrete CR votes. Optics without whip counts change nothing.",
    impactSeverity: 3,
    topics: ["Budget", "Accountability"],
    congressGovUrl: cgov("senate-resolution", 526),
  }),
  bill({
    id: "hr-8495",
    chamber: "house",
    billNumber: "H.R. 8495",
    title: "Financial Services and General Government Appropriations Act, 2027",
    status: "committee",
    lastAction: "Introduced; subcommittee draft circulating.",
    lastActionDate: "2026-06-03",
    sponsor: { name: "Steve Womack", party: "R", state: "AR" },
    summary:
      "FY2027 FSGG bill covering Treasury, Executive Office, and related agencies.",
    whyItMatters:
      "FSGG is where IRS funding, election assistance, and financial regulators get squeezed.",
    progressiveTake:
      "IRS enforcement funding is progressive tax policy by another name. Defend it against 'weaponization' theater.",
    impactSeverity: 6,
    topics: ["Appropriations", "Taxes", "Economy"],
    congressGovUrl: cgov("house-bill", 8495),
  }),
  bill({
    id: "hr-9260",
    chamber: "house",
    billNumber: "H.R. 9260",
    title: "Labor, HHS, and Education Appropriations Act, 2027",
    status: "committee",
    lastAction: "Introduced; awaiting full committee markup.",
    lastActionDate: "2026-06-20",
    sponsor: { name: "Robert Aderholt", party: "R", state: "AL" },
    summary:
      "FY2027 Labor-HHS-Education funding bill: the core domestic social-insurance appropriations vehicle.",
    whyItMatters:
      "Funds Title I, NIH, CDC, child care, and worker protection agencies in one knife fight.",
    progressiveTake:
      "This is the 'care economy' bill whether leadership admits it or not. Publish program-level deltas early.",
    impactSeverity: 8,
    topics: ["Appropriations", "Healthcare", "Education", "Labor"],
    congressGovUrl: cgov("house-bill", 9260),
  }),
  bill({
    id: "hr-9310",
    chamber: "house",
    billNumber: "H.R. 9310",
    title: "Homeland Security Appropriations Act, 2027",
    status: "introduced",
    lastAction: "Introduced; referred to Appropriations.",
    lastActionDate: "2026-06-26",
    sponsor: { name: "Mark Amodei", party: "R", state: "NV" },
    summary:
      "Opening FY2027 DHS appropriations vehicle after the FY2026 fight that produced P.L. 119-86.",
    whyItMatters:
      "Sets the next round of detention, FEMA, and cybersecurity tradeoffs.",
    progressiveTake:
      "Insist on FEMA disaster aid and asylum processing capacity in the same breath as enforcement line items.",
    impactSeverity: 7,
    topics: ["Appropriations", "Immigration"],
    congressGovUrl: cgov("house-bill", 9310),
  }),
  bill({
    id: "hr-15",
    chamber: "house",
    billNumber: "H.R. 15",
    title: "Equality Act",
    status: "introduced",
    lastAction: "Introduced; referred to Judiciary.",
    lastActionDate: "2025-01-09",
    sponsor: { name: "Sarah McBride", party: "D", state: "DE" },
    cosponsorsSummary: { D: 188, R: 0, I: 0 },
    summary:
      "Explicitly prohibits discrimination based on sex, sexual orientation, and gender identity in key civil-rights statutes.",
    whyItMatters:
      "Codifies LGBTQ civil-rights protections against a patchwork of state preemption fights.",
    progressiveTake:
      "Equality is not a social-media debate; it is statutory coverage in housing, credit, and public accommodations. Point to the United States Code sections.",
    impactSeverity: 7,
    topics: ["Civil Rights", "LGBTQ"],
    congressGovUrl: cgov("house-bill", 15),
  }),
  bill({
    id: "s-701",
    chamber: "senate",
    billNumber: "S. 701",
    title: "Women's Health Protection Act",
    status: "committee",
    lastAction: "Referred to Judiciary; cloture path unclear.",
    lastActionDate: "2025-02-20",
    sponsor: { name: "Tammy Baldwin", party: "D", state: "WI" },
    cosponsorsSummary: { D: 44, R: 0, I: 2 },
    summary:
      "Federal statutory protection for the right to provide and obtain abortion care, limiting certain state bans.",
    whyItMatters:
      "Post-Dobbs patchwork has created interstate care deserts and criminalization risk for clinicians.",
    progressiveTake:
      "Center maternal mortality data and travel-distance maps. Bodily autonomy arguments pair best with health-outcome receipts.",
    impactSeverity: 9,
    topics: ["Healthcare", "Civil Rights"],
    congressGovUrl: cgov("senate-bill", 701),
  }),
  bill({
    id: "hr-40",
    chamber: "house",
    billNumber: "H.R. 40",
    title: "Commission to Study and Develop Reparation Proposals for African Americans Act",
    status: "introduced",
    lastAction: "Introduced; referred to Judiciary.",
    lastActionDate: "2025-01-09",
    sponsor: { name: "Ayanna Pressley", party: "D", state: "MA" },
    cosponsorsSummary: { D: 120, R: 0, I: 0 },
    summary:
      "Establishes a federal commission to study reparations proposals stemming from slavery and continuing discrimination.",
    whyItMatters:
      "Creates an official factual record and policy menu: the prerequisite to any serious redress debate.",
    progressiveTake:
      "A study commission is not a blank check. Opponents who refuse even the inquiry are refusing the historical record.",
    impactSeverity: 6,
    topics: ["Civil Rights", "Race", "Accountability"],
    congressGovUrl: cgov("house-bill", 40),
  }),
  bill({
    id: "s-25",
    chamber: "senate",
    billNumber: "S. 25",
    title: "Washington, D.C. Admission Act",
    status: "committee",
    lastAction: "Referred to Homeland Security and Governmental Affairs.",
    lastActionDate: "2025-01-14",
    sponsor: { name: "Chris Van Hollen", party: "D", state: "MD" },
    cosponsorsSummary: { D: 40, R: 0, I: 2 },
    summary:
      "Admits the Washington, Douglass Commonwealth as a state while preserving a federal district core.",
    whyItMatters:
      "Ends taxation without full representation for more than 700,000 residents and adds Senate representation.",
    progressiveTake:
      "This is democracy math. Opposition is usually about Senate seats, not constitutional theology. Say that out loud.",
    impactSeverity: 8,
    topics: ["Democracy", "Civil Rights"],
    congressGovUrl: cgov("senate-bill", 25),
  }),
  bill({
    id: "hr-51",
    chamber: "house",
    billNumber: "H.R. 51",
    title: "Washington, D.C. Admission Act (House)",
    status: "introduced",
    lastAction: "Introduced; referred to Oversight and Judiciary.",
    lastActionDate: "2025-01-09",
    sponsor: { name: "Eleanor Holmes Norton", party: "D", state: "DC" },
    cosponsorsSummary: { D: 200, R: 0, I: 0 },
    summary:
      "House statehood vehicle for D.C. admission.",
    whyItMatters:
      "House majorities have passed statehood before; Senate arithmetic remains the bottleneck.",
    progressiveTake:
      "Treat statehood like voting rights: structural democracy reform, not a niche local ask.",
    impactSeverity: 8,
    topics: ["Democracy"],
    congressGovUrl: cgov("house-bill", 51),
  }),
  bill({
    id: "s-269",
    chamber: "senate",
    billNumber: "S. 269",
    title: "Do Not Pay Coordination Improvement Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-77.",
    lastActionDate: "2026-02-10",
    sponsor: { name: "Gary Peters", party: "D", state: "MI" },
    cosponsorsSummary: { D: 6, R: 5, I: 0 },
    votes: [
      vote("senate", "2026-01-22", "On Passage of the Bill", partyVote(45, 2, 48, 3), 0, 2),
    ],
    summary:
      "Improves coordination between federal and state agencies and the Do Not Pay working system to reduce improper payments.",
    whyItMatters:
      "Improper-payment plumbing is unglamorous governance that saves real money without cutting eligible beneficiaries by slogan.",
    progressiveTake:
      "Support payment-integrity tools that fix admin error. Reject versions that become eligibility witch hunts.",
    impactSeverity: 3,
    topics: ["Accountability", "Budget"],
    congressGovUrl: cgov("senate-bill", 269),
  }),
  bill({
    id: "s-2878",
    chamber: "senate",
    billNumber: "S. 2878",
    title: "Great Lakes Restoration Initiative Reauthorization",
    status: "enacted",
    lastAction: "Became Public Law No: 119-67.",
    lastActionDate: "2025-12-26",
    sponsor: { name: "Debbie Stabenow", party: "D", state: "MI" },
    cosponsorsSummary: { D: 10, R: 8, I: 0 },
    votes: [
      vote("senate", "2025-11-19", "On Passage of the Bill", partyVote(44, 3, 40, 10), 0, 3),
    ],
    summary:
      "Reauthorizes funding to monitor, assess, and restore the Great Lakes Basin.",
    whyItMatters:
      "Bipartisan regional environmental funding that protects drinking water for tens of millions.",
    progressiveTake:
      "Celebrate durable environmental wins, and contrast them with reconciliation riders that cut EPA capacity elsewhere.",
    impactSeverity: 4,
    topics: ["Environment", "Climate"],
    congressGovUrl: cgov("senate-bill", 2878),
  }),
  bill({
    id: "hr-7006",
    chamber: "house",
    billNumber: "H.R. 7006",
    title: "Financial Services and National Security, State, 2026",
    status: "passed",
    lastAction: "Advanced; provisions folded toward consolidated appropriations track.",
    lastActionDate: "2026-01-14",
    sponsor: { name: "Steve Womack", party: "R", state: "AR" },
    summary:
      "FSGG / National Security-State appropriations vehicle whose text fed into broader 2026 consolidated packages.",
    whyItMatters:
      "Illustrates how individual bills become vehicles that later disappear into omnibus packages.",
    progressiveTake:
      "Follow the text migration. 'Killed' bills sometimes win inside the omnibus.",
    impactSeverity: 5,
    topics: ["Appropriations", "Foreign Policy"],
    congressGovUrl: cgov("house-bill", 7006),
  }),
  bill({
    id: "hr-4016",
    chamber: "house",
    billNumber: "H.R. 4016",
    title: "Department of Defense Appropriations Act, 2026",
    status: "passed",
    lastAction: "Advanced; defense dollars consolidated via H.R. 7148 track.",
    lastActionDate: "2025-07-18",
    sponsor: { name: "Ken Calvert", party: "R", state: "CA" },
    votes: [
      vote("house", "2025-07-17", "On Passage", partyVote(25, 185, 210, 8), 0, 5),
    ],
    summary:
      "Stand-alone Defense appropriations bill later reconciled into broader consolidated funding.",
    whyItMatters:
      "Defense numbers anchor the entire discretionary debate and crowd out domestic investments.",
    progressiveTake:
      "Ask for auditability and OCO honesty. 'Support the troops' is not a blank check for contractors.",
    impactSeverity: 7,
    topics: ["Defense", "Appropriations"],
    congressGovUrl: cgov("house-bill", 4016),
  }),
  bill({
    id: "s-2572",
    chamber: "senate",
    billNumber: "S. 2572",
    title: "Department of Defense Appropriations Act, 2026 (Senate)",
    status: "committee",
    lastAction: "Committee reported; see consolidated track.",
    lastActionDate: "2025-08-01",
    sponsor: { name: "Mitch McConnell", party: "R", state: "KY" },
    summary:
      "Senate Defense appropriations companion that fed negotiations culminating in consolidated FY2026 funding.",
    whyItMatters:
      "Senate markup is where earmarks and policy riders get traded for votes.",
    progressiveTake:
      "Publish the difference between committee-reported and enacted totals. That delta is the real negotiation.",
    impactSeverity: 6,
    topics: ["Defense", "Appropriations"],
    congressGovUrl: cgov("senate-bill", 2572),
  }),
  bill({
    id: "hr-4121",
    chamber: "house",
    billNumber: "H.R. 4121",
    title: "Agriculture Appropriations Act, 2026",
    status: "committee",
    lastAction: "See H.R. 5371 full-year Agriculture lock.",
    lastActionDate: "2025-09-10",
    sponsor: { name: "Andy Harris", party: "R", state: "MD" },
    summary:
      "House Agriculture appropriations vehicle whose full-year outcome was resolved through the H.R. 5371 CR package.",
    whyItMatters:
      "Ag appropriations decide WIC, food safety inspection, and rural development capacity.",
    progressiveTake:
      "Food assistance is health policy. Treat WIC and SNAP administrative funding as non-negotiable.",
    impactSeverity: 5,
    topics: ["Appropriations", "Agriculture", "Healthcare"],
    congressGovUrl: cgov("house-bill", 4121),
  }),
  bill({
    id: "s-2256",
    chamber: "senate",
    billNumber: "S. 2256",
    title: "Agriculture Appropriations Act, 2026 (Senate)",
    status: "committee",
    lastAction: "Committee action; full-year outcome via CR package.",
    lastActionDate: "2025-09-12",
    sponsor: { name: "John Hoeven", party: "R", state: "ND" },
    summary:
      "Senate Agriculture appropriations companion for FY2026.",
    whyItMatters:
      "Senate Ag numbers often restore cuts the House uses as messaging.",
    progressiveTake:
      "Compare House and Senate tables side by side before celebrating any 'compromise.'",
    impactSeverity: 5,
    topics: ["Appropriations", "Agriculture"],
    congressGovUrl: cgov("senate-bill", 2256),
  }),
  bill({
    id: "hr-9170",
    chamber: "house",
    billNumber: "H.R. 9170",
    title: "Transportation, Housing and Urban Development Appropriations Act, 2027",
    status: "introduced",
    lastAction: "Introduced; referred to Appropriations.",
    lastActionDate: "2026-06-17",
    sponsor: { name: "Steve Womack", party: "R", state: "AR" },
    summary:
      "FY2027 T-HUD bill covering transit, FAA ops, rental assistance, and community development.",
    whyItMatters:
      "T-HUD is where housing vouchers and transit state-of-good-repair funding live or die.",
    progressiveTake:
      "Voucher renewals are the quiet homelessness prevention program. Publish renewal shortfalls early.",
    impactSeverity: 7,
    topics: ["Appropriations", "Housing", "Transportation"],
    congressGovUrl: cgov("house-bill", 9170),
  }),
  bill({
    id: "hr-9171",
    chamber: "house",
    billNumber: "H.R. 9171",
    title: "Interior and Environment Appropriations Act, 2027",
    status: "introduced",
    lastAction: "Introduced; referred to Appropriations.",
    lastActionDate: "2026-06-17",
    sponsor: { name: "Mike Simpson", party: "R", state: "ID" },
    summary:
      "FY2027 Interior-Environment bill funding EPA, Interior bureaus, and related agencies.",
    whyItMatters:
      "Annual rider fights over EPA rules and public-lands policy show up here first.",
    progressiveTake:
      "Screenshot the riders. That is the climate and conservation policy Congress is actually voting on.",
    impactSeverity: 7,
    topics: ["Appropriations", "Environment"],
    congressGovUrl: cgov("house-bill", 9171),
  }),
  bill({
    id: "s-3705",
    chamber: "senate",
    billNumber: "S. 3705",
    title: "Semiquincentennial Congressional Time Capsule Act",
    status: "enacted",
    lastAction: "Became Public Law No: 119-79.",
    lastActionDate: "2026-02-18",
    sponsor: { name: "Amy Klobuchar", party: "D", state: "MN" },
    cosponsorsSummary: { D: 8, R: 7, I: 0 },
    summary:
      "Authorizes a congressional time capsule commemorating the 250th anniversary of the United States.",
    whyItMatters:
      "Low-stakes civic memory bill: useful contrast against the high-stakes reconciliation fights of the same session.",
    progressiveTake:
      "Commemoration is fine. Just do not let patriotic pageantry substitute for protecting the democracy being commemorated.",
    impactSeverity: 1,
    topics: ["Culture", "Democracy"],
    congressGovUrl: cgov("senate-bill", 3705),
  }),
];

function mergeLiveVotes(bill: LegislationBill): LegislationBill {
  const liveVotes = legislationVotesLive.byBill[bill.id];
  if (!liveVotes?.length) return bill;
  if (!bill.votes?.length) {
    return { ...bill, votes: liveVotes };
  }

  const merged = bill.votes.map((curated) => {
    const live =
      liveVotes.find(
        (v) =>
          v.chamber === curated.chamber &&
          v.date === curated.date &&
          (v.members?.length ?? 0) > 0
      ) ||
      liveVotes.find(
        (v) =>
          v.chamber === curated.chamber && (v.members?.length ?? 0) > 0
      );
    if (!live) return curated;
    return {
      ...curated,
      // Prefer live tallies when members present (official roll call)
      yeas: live.yeas || curated.yeas,
      nays: live.nays || curated.nays,
      present: live.present ?? curated.present,
      notVoting: live.notVoting ?? curated.notVoting,
      byParty: live.byParty ?? curated.byParty,
      question: live.question || curated.question,
      date: live.date || curated.date,
      rollCallNumber: live.rollCallNumber ?? curated.rollCallNumber,
      session: live.session ?? curated.session,
      year: live.year ?? curated.year,
      rollCallUrl: live.rollCallUrl ?? curated.rollCallUrl,
      members: live.members,
    };
  });

  // Append any live votes not represented in curated (new floor votes)
  for (const live of liveVotes) {
    if (!(live.members?.length ?? 0)) continue;
    const exists = merged.some(
      (v) =>
        v.chamber === live.chamber &&
        v.date === live.date &&
        (v.rollCallNumber
          ? v.rollCallNumber === live.rollCallNumber
          : true)
    );
    if (!exists) merged.push(live);
  }

  return { ...bill, votes: merged };
}

/** Curated narrative + live member roll calls from House Clerk / Senate LIS. */
export const legislationBills: LegislationBill[] =
  curatedLegislationBills.map(mergeLiveVotes);

export const legislationTopics = Array.from(
  new Set(legislationBills.flatMap((b) => b.topics))
).sort();

export const billStatuses: BillStatus[] = [
  "introduced",
  "committee",
  "floor",
  "passed",
  "failed",
  "enacted",
  "vetoed",
];

export function getLegislationBillById(id: string): LegislationBill | undefined {
  return legislationBills.find((b) => b.id === id);
}

export function legislationDetailPath(id: string): string {
  return `/legislation/${encodeURIComponent(id)}`;
}

export function getLegislationStats() {
  const byStatus = billStatuses.reduce(
    (acc, status) => {
      acc[status] = legislationBills.filter((b) => b.status === status).length;
      return acc;
    },
    {} as Record<BillStatus, number>
  );
  const byParty = {
    D: legislationBills.filter((b) => b.sponsor.party === "D").length,
    R: legislationBills.filter((b) => b.sponsor.party === "R").length,
    I: legislationBills.filter((b) => b.sponsor.party === "I").length,
  };
  const withVotes = legislationBills.filter((b) => (b.votes?.length ?? 0) > 0).length;
  return {
    total: legislationBills.length,
    byStatus,
    byParty,
    withVotes,
    lastUpdated: legislationMeta.lastUpdated,
  };
}

export function partyColor(party: PartyCode): string {
  if (party === "D") return "#2563eb";
  if (party === "R") return "#dc2626";
  return "#7c3aed";
}

export function partyLabel(party: PartyCode): string {
  if (party === "D") return "Democrat";
  if (party === "R") return "Republican";
  return "Independent";
}

export function statusLabel(status: BillStatus): string {
  const map: Record<BillStatus, string> = {
    introduced: "Introduced",
    committee: "In committee",
    floor: "On the floor",
    passed: "Passed chamber",
    failed: "Failed",
    enacted: "Enacted",
    vetoed: "Vetoed",
  };
  return map[status];
}

export function floorStatusLabel(bill: LegislationBill): string {
  if (bill.status !== "floor") return statusLabel(bill.status);
  if (bill.chamber === "house") return "House floor LIVE";
  if (bill.chamber === "senate") return "Senate floor LIVE";
  return "Floor LIVE";
}
