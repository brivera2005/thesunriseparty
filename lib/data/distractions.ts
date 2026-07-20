import type { DistractionEntry } from "@/lib/types";
import { cite } from "./conversation-citations";
import { autoDistractedEntries } from "./distracted-auto";

/** Category chips on /distracted */
export const distractionCategories = [
  "All",
  "Epstein / Transparency",
  "Culture War",
  "Elections",
  "Immigration",
  "Whataboutism",
  "Deep State",
  "Project 2025",
  "Admin Pattern",
  "Media Panic",
  "Corruption Cover",
] as const;

export type DistractionCategoryFilter = (typeof distractionCategories)[number];

export function distractionDetailPath(id: string): string {
  return `/distracted/${encodeURIComponent(id)}`;
}

export function getDistractionById(id: string): DistractionEntry | undefined {
  return distractions.find((d) => d.id === id);
}

export function getDistractionStats() {
  const total = distractions.length;
  const avgSeverity =
    total === 0
      ? 0
      : Math.round(
          (distractions.reduce((sum, d) => sum + d.severity, 0) / total) * 10
        ) / 10;
  return { total, avgSeverity };
}

export function filterDistractions(opts: {
  category?: DistractionCategoryFilter;
  minSeverity?: number;
  query?: string;
}): DistractionEntry[] {
  const category = opts.category ?? "All";
  const minSeverity = opts.minSeverity ?? 1;
  const q = (opts.query ?? "").trim().toLowerCase();

  return distractions
    .filter((d) => {
      if (category !== "All" && !d.categories.includes(category)) return false;
      if (d.severity < minSeverity) return false;
      if (!q) return true;
      const hay = [
        d.title,
        d.distraction,
        d.coveringUp,
        d.whyTheyDoIt,
        d.whyPeopleBelieveIt,
        d.howToSpotIt,
        ...d.categories,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    })
    .sort((a, b) => {
      // Curated cards first so the deck opens on readable flashbangs, not FR auto stubs.
      const aAuto = a.id.startsWith("DIST-AUTO-") ? 1 : 0;
      const bAuto = b.id.startsWith("DIST-AUTO-") ? 1 : 0;
      if (aAuto !== bAuto) return aAuto - bAuto;
      return b.date.localeCompare(a.date) || b.severity - a.severity;
    });
}

const src = {
  congressEpstein: cite(
    "d-congress-epstein",
    "Epstein Files Transparency Act (H.R. 4405)",
    "Congress.gov",
    "https://www.congress.gov/bill/119th-congress/house-bill/4405",
    "Bipartisan bill requiring DOJ to release unclassified Epstein investigation records on a statutory timeline.",
    "2025-11-19"
  ),
  dojOip: cite(
    "d-doj-oip",
    "DOJ Office of Information Policy",
    "U.S. Department of Justice",
    "https://www.justice.gov/oip",
    "FOIA and disclosure policy for DOJ records, including how redactions and delays are justified.",
    "2025-01-01"
  ),
  heritageMandate: cite(
    "d-heritage-mandate",
    "Mandate for Leadership 2025 (Project 2025)",
    "Heritage Foundation",
    "https://s3.documentcloud.org/documents/25180135/2025_mandateforleadership_full-1.pdf",
    "Full Project 2025 policy book outlining Schedule F, agency capture, and culture-war priorities.",
    "2023-01-01"
  ),
  p2025Org: cite(
    "d-p2025-org",
    "Project 2025 Policy Agenda",
    "Project 2025",
    "https://www.project2025.org/policy/",
    "Official Project 2025 policy hub describing the Mandate for Leadership agenda.",
    "2024-01-01"
  ),
  p2025Observer: cite(
    "d-p2025-observer",
    "Project 2025 Observer",
    "project2025.observer",
    "https://www.project2025.observer/",
    "Independent tracker of Project 2025 implementation against Heritage Mandate chapters.",
    "2025-01-20"
  ),
  brennanFraud: cite(
    "d-brennan-fraud",
    "The Truth About Voter Fraud",
    "Brennan Center for Justice",
    "https://www.brennancenter.org/our-work/research-reports/truth-about-voter-fraud",
    "Reviews show fraud that could change an election outcome is vanishingly rare.",
    "2017-01-01"
  ),
  brennanNoncitizen: cite(
    "d-brennan-noncitizen",
    "Noncitizen Voting: The Missing Millions",
    "Brennan Center for Justice",
    "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
    "Documents that noncitizen voting is extremely rare and not a meaningful election threat.",
    "2024-01-01"
  ),
  cisaElection: cite(
    "d-cisa-election",
    "Election Security",
    "CISA",
    "https://www.cisa.gov/topics/election-security",
    "Federal election-security guidance: U.S. elections are highly resilient and audited.",
    "2024-01-01"
  ),
  apElection2020: cite(
    "d-ap-2020",
    "AP: Election 2020 reporting hub",
    "Associated Press",
    "https://apnews.com/hub/election-2020",
    "AP and partner audits found no evidence of widespread fraud altering 2020 results.",
    "2020-12-01"
  ),
  apGeorgia: cite(
    "d-ap-georgia",
    "AP: Georgia election recount and audits",
    "Associated Press",
    "https://apnews.com/article/election-2020-joe-biden-donald-trump-georgia-elections-1a2ea5e8df69614f4e09b47fea581a09",
    "Georgia's recounts and audits confirmed Biden's win; fraud claims collapsed under scrutiny.",
    "2020-12-01"
  ),
  heritageFraudDb: cite(
    "d-heritage-fraud-db",
    "Heritage Election Fraud Database",
    "Heritage Foundation",
    "https://www.heritage.org/voterfraud",
    "Even Heritage's own database shows sparse, isolated cases over decades, not mass fraud.",
    "2024-01-01"
  ),
  cbpStats: cite(
    "d-cbp-stats",
    "Southwest Land Border Encounters",
    "U.S. Customs and Border Protection",
    "https://www.cbp.gov/newsroom/stats/southwest-land-border-encounters",
    "Official encounter statistics for measuring border volumes over time.",
    "2025-01-01"
  ),
  dhsImmigration: cite(
    "d-dhs-stats",
    "DHS Immigration Statistics",
    "U.S. Department of Homeland Security",
    "https://www.dhs.gov/immigration-statistics",
    "Official immigration enforcement and demographic statistics.",
    "2025-01-01"
  ),
  iceFy24: cite(
    "d-ice-fy24",
    "ICE Annual Report FY2024",
    "U.S. Immigration and Customs Enforcement",
    "https://www.ice.gov/doclib/eoy/iceAnnualReportFY2024.pdf",
    "ICE enforcement, detention, and removal data for FY2024.",
    "2024-12-01"
  ),
  hunterPlea: cite(
    "d-hunter-plea",
    "Hunter Biden guilty plea (tax and firearm)",
    "U.S. Department of Justice",
    "https://www.justice.gov/usao-dc/pr/hunter-biden-pleads-guilty-federal-tax-and-firearm-charges",
    "Hunter Biden pleaded guilty to federal tax and firearm charges in U.S. court.",
    "2024-01-01"
  ),
  jan6Hub: cite(
    "d-jan6-hub",
    "AP: Capitol siege hub",
    "Associated Press",
    "https://apnews.com/hub/capitol-siege",
    "Documented Jan. 6 attack, prosecutions, and congressional findings.",
    "2021-01-06"
  ),
  fbiCapitol: cite(
    "d-fbi-capitol",
    "FBI Capitol Violence Wanted",
    "Federal Bureau of Investigation",
    "https://www.fbi.gov/wanted/capitol-violence",
    "FBI sought and charged hundreds for violence at the U.S. Capitol on Jan. 6.",
    "2021-01-06"
  ),
  factcheck: cite(
    "d-factcheck",
    "FactCheck.org",
    "Annenberg Public Policy Center",
    "https://www.factcheck.org/",
    "Nonpartisan fact-checking of viral political claims.",
    "2025-01-01"
  ),
  whitehouseJan6Pardon: cite(
    "d-jan6-pardons",
    "Jan. 6 related pardons and commutations",
    "The White House",
    "https://www.whitehouse.gov/presidential-actions/2025/01/granting-pardons-and-commutation-of-sentences-for-certain-offenses-relating-to-the-events-at-or-near-the-united-states-capitol-on-january-6-2021/",
    "Day One actions granting pardons and commutations for certain Jan. 6 related offenses.",
    "2025-01-20"
  ),
  brennanVoting2025: cite(
    "d-brennan-voting-2025",
    "State Voting Laws Roundup 2025",
    "Brennan Center for Justice",
    "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review",
    "Tracks restrictive voting laws and election administration changes into 2025.",
    "2025-01-01"
  ),
  crsElections: cite(
    "d-crs-elections",
    "CRS election and voting reports",
    "Congressional Research Service",
    "https://crsreports.congress.gov/",
    "Congress's nonpartisan research service on election administration and voting law.",
    "2024-01-01"
  ),
  constitution14: cite(
    "d-14th",
    "Constitution Annotated",
    "Congress.gov",
    "https://constitution.congress.gov/browse/essay/artI-S2-C3-3/ALDE_00001082/",
    "Constitutional framework relevant to citizenship and representation fights.",
    "2024-01-01"
  ),
  fbiCrime: cite(
    "d-fbi-ucr",
    "FBI Uniform Crime Reporting",
    "Federal Bureau of Investigation",
    "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr",
    "National crime data that undercuts viral migrant crime wave anecdotes.",
    "2024-01-01"
  ),
  dojNews: cite(
    "d-doj-opa",
    "DOJ Office of Public Affairs",
    "U.S. Department of Justice",
    "https://www.justice.gov/opa/pr",
    "Official DOJ press releases on enforcement and prosecutions.",
    "2025-01-01"
  ),
};

/** Curated Distraction / Cover-up Watch entries (editorial). */
const curatedDistractions: DistractionEntry[] = [
  {
    id: "DST-EPSTEIN-THEATER",
    date: "2025-11-19",
    title: "Epstein Files Theater",
    distraction:
      "Client-list memes claim the files are finally dropping.",
    coveringUp:
      "Dockets, statutory deadlines, and redacted pages that name allies.",
    whyTheyDoIt:
      "Spectacle keeps the base hunting while slow-walks protect the network.",
    whyPeopleBelieveIt:
      "A villain list feels like justice, so drip leaks read as proof.",
    howToSpotIt:
      "Demand a docket, statute, and release date - not vibes.",
    severity: 9,
    categories: ["Epstein / Transparency", "Corruption Cover", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-1119-040"],
    relatedRebuttalIds: ["epstein-files-distraction"],
    sources: [src.congressEpstein, src.dojOip],
  },
  {
    id: "DST-EPSTEIN-CLIENT-LIST-MYTH",
    date: "2025-07-15",
    title: "The Imaginary Client List",
    distraction:
      "Viral posts invent one sealed list that topples every enemy.",
    coveringUp:
      "Public flight logs, civil dockets, and plea records already online.",
    whyTheyDoIt:
      "A mythical list mobilizes harder than FOIA PDFs and lets people invent names.",
    whyPeopleBelieveIt:
      "Real crimes create demand for one master document; conspiracies invent it.",
    howToSpotIt:
      "No filing number means a story, not evidence.",
    severity: 8,
    categories: ["Epstein / Transparency", "Media Panic"],
    relatedRebuttalIds: ["epstein-files-distraction"],
    sources: [src.congressEpstein, src.dojOip, src.factcheck],
  },
  {
    id: "DST-EPSTEIN-BOTH-SIDES",
    date: "2025-03-01",
    title: "Epstein Both-Sides Fog",
    distraction:
      "Scrutiny of a MAGA figure ends with Democrats are in the files too.",
    coveringUp:
      "Who enabled trafficking networks and who still blocks sunlight.",
    whyTheyDoIt:
      "Mutual dirt freezes action so nobody has to clean anything.",
    whyPeopleBelieveIt:
      "Both sides sounds fair even when it is a stall.",
    howToSpotIt:
      "Agree any party should face records, then demand the records anyway.",
    severity: 7,
    categories: ["Epstein / Transparency", "Whataboutism"],
    relatedRebuttalIds: ["epstein-files-distraction"],
    sources: [src.congressEpstein, src.factcheck],
  },
  {
    id: "DST-P2025-DENIAL",
    date: "2025-01-20",
    title: "Project 2025 I Know Nothing",
    distraction:
      "Claims Project 2025 was fringe or unknown after Day One matched it.",
    coveringUp:
      "Schedule F, agency purges, and orders tracking Mandate chapters.",
    whyTheyDoIt:
      "Denial buys time while the agenda ships through executive orders.",
    whyPeopleBelieveIt:
      "Voters separate a candidate brand from think-tank PDFs until orders land.",
    howToSpotIt:
      "Match Heritage Mandate verbs to Federal Register actions.",
    severity: 10,
    categories: ["Project 2025", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-001", "EVT-2025-0120-002", "EVT-2025-0120-006"],
    relatedRebuttalIds: [
      "project-2025-doesnt-exist",
      "project-2025-not-trump",
      "project-2025-still-denied",
    ],
    sources: [src.heritageMandate, src.p2025Org, src.p2025Observer],
  },
  {
    id: "DST-P2025-JUST-IDEAS",
    date: "2025-02-01",
    title: "Project 2025 Was Just Ideas",
    distraction:
      "Allies reframe the Mandate as optional brainstorming nobody had to follow.",
    coveringUp:
      "Transition teams and Day One orders that treat the book as a manual.",
    whyTheyDoIt:
      "Plausible deniability for ads while the machine keeps running.",
    whyPeopleBelieveIt:
      "Ideas sounds academic and harmless.",
    howToSpotIt:
      "Ideas do not reclassify civil servants. Actions do.",
    severity: 9,
    categories: ["Project 2025", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-002", "EVT-2025-0120-006"],
    relatedRebuttalIds: ["p2025-just-suggestions", "project-2025-just-ideas"],
    sources: [src.heritageMandate, src.p2025Observer],
  },
  {
    id: "DST-SCHEDULE-F-BURIED",
    date: "2025-01-29",
    title: "Culture War Over Schedule F",
    distraction:
      "Pronoun and campus fights flood feeds the week Schedule F guidance hits.",
    coveringUp:
      "At-will reclassification of policy civil servants.",
    whyTheyDoIt:
      "Personnel is policy. Outrage is cheaper than explaining civil-service law.",
    whyPeopleBelieveIt:
      "Identity fights feel personal; Schedule F feels bureaucratic until services break.",
    howToSpotIt:
      "When a culture scrap peaks, check OPM the same day.",
    severity: 10,
    categories: ["Project 2025", "Culture War", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-002", "EVT-2025-0129-012"],
    relatedRebuttalIds: ["project-2025-still-denied"],
    sources: [src.heritageMandate, src.p2025Observer],
  },
  {
    id: "DST-DOGE-EFFICIENCY",
    date: "2025-01-20",
    title: "DOGE Efficiency Theater",
    distraction:
      "Viral waste clips sold as common-sense savings.",
    coveringUp:
      "Payment-system access, RIFs, and politicized cuts to benefits processing.",
    whyTheyDoIt:
      "Efficiency branding launders power grabs as thrift.",
    whyPeopleBelieveIt:
      "Everyone has seen waste, so clips confirm the stereotype without audits.",
    howToSpotIt:
      "Ask for IG oversight and who got Treasury system access.",
    severity: 9,
    categories: ["Admin Pattern", "Corruption Cover", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-006"],
    sources: [src.p2025Observer, src.heritageMandate],
  },
  {
    id: "DST-ELECTION-STOLEN-2020",
    date: "2020-12-01",
    title: "The Stolen Election That Was Not",
    distraction:
      "Years of claims that 2020 was stolen by machines or cabals.",
    coveringUp:
      "Certified results, recounts, audits, and court losses.",
    whyTheyDoIt:
      "Delegitimizing loss preserves the brand and fuels fundraising.",
    whyPeopleBelieveIt:
      "Partisan media repeats the claim until it feels like memory.",
    howToSpotIt:
      "Demand precinct math that survives recounts. Vibes are not tallies.",
    severity: 10,
    categories: ["Elections", "Deep State"],
    relatedRebuttalIds: ["election-stolen"],
    sources: [src.apElection2020, src.apGeorgia, src.cisaElection, src.brennanFraud],
  },
  {
    id: "DST-NONCITIZEN-VOTING",
    date: "2024-10-01",
    title: "Noncitizen Voting Flood Myth",
    distraction:
      "Claims millions of noncitizens swing federal elections.",
    coveringUp:
      "Rare cases and efforts to shrink legal voting access.",
    whyTheyDoIt:
      "Invented ballot contamination justifies ID and purge rules that suppress turnout.",
    whyPeopleBelieveIt:
      "Anecdotes travel faster than matched-database tables.",
    howToSpotIt:
      "Ask for statewide matched data, not one viral registration form.",
    severity: 8,
    categories: ["Elections", "Immigration", "Media Panic"],
    relatedRebuttalIds: ["election-stolen"],
    sources: [src.brennanNoncitizen, src.brennanFraud, src.brennanVoting2025],
  },
  {
    id: "DST-2024-STEAL-WARMUP",
    date: "2024-11-05",
    title: "Preemptive Steal Narratives",
    distraction:
      "Before counts finish, influencers seed they will steal it storylines.",
    coveringUp:
      "Normal election friction reframed as proof of conspiracy.",
    whyTheyDoIt:
      "Heads I win, tails you cheated preserves loyalty either way.",
    whyPeopleBelieveIt:
      "Prior Big Lie conditioning makes the next claim feel continuous.",
    howToSpotIt:
      "Watch whether evidence standards flip based on who is ahead.",
    severity: 9,
    categories: ["Elections", "Admin Pattern"],
    relatedRebuttalIds: ["election-stolen"],
    sources: [src.cisaElection, src.crsElections, src.factcheck],
  },
  {
    id: "DST-BORDER-INVASION",
    date: "2024-06-01",
    title: "Border Invasion Rhetoric",
    distraction:
      "War words frame asylum seekers as a military enemy.",
    coveringUp:
      "Labor markets, asylum backlogs, and funding fights that move encounter numbers.",
    whyTheyDoIt:
      "Invasion talk triggers fear and justifies emergency cruelty as defense.",
    whyPeopleBelieveIt:
      "Crossing video looks like war footage without context.",
    howToSpotIt:
      "Compare CBP monthly series, not one viral clip.",
    severity: 9,
    categories: ["Immigration", "Media Panic"],
    relatedEventIds: ["EVT-2025-0120-008"],
    relatedRebuttalIds: ["border-open", "border-open-intentionally", "border-only-issue"],
    sources: [src.cbpStats, src.dhsImmigration, src.iceFy24],
  },
  {
    id: "DST-MIGRANT-CRIME-WAVE",
    date: "2024-09-01",
    title: "Migrant Crime Wave Anecdotes",
    distraction:
      "Cable turns rare migrant crimes into a demographic crime wave.",
    coveringUp:
      "FBI crime trends and the political use of racialized fear.",
    whyTheyDoIt:
      "Fear of the outsider consolidates the coalition around max enforcement.",
    whyPeopleBelieveIt:
      "A shocking local story feels like a national pattern.",
    howToSpotIt:
      "Demand rates, not cherry-picked body counts.",
    severity: 8,
    categories: ["Immigration", "Media Panic"],
    relatedRebuttalIds: ["border-open"],
    sources: [src.fbiCrime, src.dhsImmigration, src.factcheck],
  },
  {
    id: "DST-SPRINGFIELD-PETS",
    date: "2024-09-10",
    title: "Springfield Pet-Eating Panic",
    distraction:
      "False claims Haitian immigrants ate pets, amplified on a debate stage.",
    coveringUp:
      "City capacity strains and the cost of circulating racialized blood libels.",
    whyTheyDoIt:
      "Disgust plus immigrants equals sticky loyalty content.",
    whyPeopleBelieveIt:
      "It sounds too weird to invent, so people assume a kernel of truth.",
    howToSpotIt:
      "City officials denied it in real time. Facebook posts are not sources.",
    severity: 9,
    categories: ["Immigration", "Media Panic", "Culture War"],
    relatedRebuttalIds: ["border-open"],
    sources: [src.factcheck, src.dhsImmigration],
  },
  {
    id: "DST-HUNTER-WHATABOUT",
    date: "2023-06-01",
    title: "Hunter Biden as Universal Shield",
    distraction:
      "Any MAGA corruption story gets answered with Hunter laptop talking points.",
    coveringUp:
      "Separate cases and defendants that Hunter's plea does not erase.",
    whyTheyDoIt:
      "Whataboutism converts accountability into team sports.",
    whyPeopleBelieveIt:
      "One Biden relative's guilt makes reciprocity feel fair.",
    howToSpotIt:
      "Grant the Hunter facts, then ask what that has to do with this claim.",
    severity: 8,
    categories: ["Whataboutism", "Corruption Cover"],
    relatedRebuttalIds: ["hunter-biden-laptop", "hunter-biden-everything"],
    sources: [src.hunterPlea, src.dojNews, src.factcheck],
  },
  {
    id: "DST-HUNTER-EQUALS-TRUMP",
    date: "2024-05-01",
    title: "Hunter Plea Equals Trump Cases",
    distraction:
      "Talking heads treat a son's plea as interchangeable with a president's cases.",
    coveringUp:
      "Different statutes, facts, and stakes of executive self-protection.",
    whyTheyDoIt:
      "False equivalence dulls urgency for cases against the powerful.",
    whyPeopleBelieveIt:
      "Shared news-cycle names blur distinct legal theories.",
    howToSpotIt:
      "Compare charging documents. Names are not the legal theory.",
    severity: 7,
    categories: ["Whataboutism", "Elections"],
    relatedRebuttalIds: ["hunter-biden-everything"],
    sources: [src.hunterPlea, src.dojNews],
  },
  {
    id: "DST-DEEP-STATE",
    date: "2025-01-20",
    title: "Deep State Runs Everything",
    distraction:
      "Any adverse fact or court loss is blamed on a deep state plot.",
    coveringUp:
      "Ordinary checks, IGs, career specialists, and the MAGA personnel purge.",
    whyTheyDoIt:
      "If institutions are illegitimate, breaking them becomes patriotism.",
    whyPeopleBelieveIt:
      "Opaque bureaucracy plus grievance equals conspiracy.",
    howToSpotIt:
      "Ask which statute, office, and document. They is not a source.",
    severity: 9,
    categories: ["Deep State", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-002"],
    relatedRebuttalIds: ["deep-state", "deep-state-runs-everything"],
    sources: [src.p2025Observer, src.heritageMandate, src.dojOip],
  },
  {
    id: "DST-FBI-COUP",
    date: "2022-08-08",
    title: "FBI Coup and Raid Mythology",
    distraction:
      "Lawful warrants get framed as coups against MAGA leaders.",
    coveringUp:
      "Probable cause, magistrate judges, and the evidence those warrants sought.",
    whyTheyDoIt:
      "Casting law enforcement as the enemy immunizes leaders from consequences.",
    whyPeopleBelieveIt:
      "Supporters experience legal pressure as persecution of the tribe.",
    howToSpotIt:
      "Read warrant affidavits and charging theories, not cable chyrons.",
    severity: 8,
    categories: ["Deep State", "Whataboutism"],
    relatedRebuttalIds: ["deep-state"],
    sources: [src.dojNews, src.fbiCapitol, src.factcheck],
  },
  {
    id: "DST-JAN6-TOURISTS",
    date: "2025-01-20",
    title: "Jan. 6 Tourists Rewrite",
    distraction:
      "The Capitol attack gets reframed as tourism or mostly peaceful milling.",
    coveringUp:
      "Violence, injured officers, disrupted certification, and hundreds of cases.",
    whyTheyDoIt:
      "Pardons and mythmaking rehabilitate the base and erase a democratic crisis.",
    whyPeopleBelieveIt:
      "Selective angles and fed theories offer an exit from shame.",
    howToSpotIt:
      "Compare pardon rhetoric to FBI wanted posters and contemporaneous footage.",
    severity: 10,
    categories: ["Elections", "Deep State", "Admin Pattern"],
    relatedRebuttalIds: ["election-stolen"],
    sources: [src.jan6Hub, src.fbiCapitol, src.whitehouseJan6Pardon],
  },
  {
    id: "DST-CRT-FLASHBANG",
    date: "2021-09-01",
    title: "CRT School Board Flashbang",
    distraction:
      "Parents told CRT was secretly mandatory in every K-12 classroom.",
    coveringUp:
      "School-board takeovers, book bans, and chilled history teaching.",
    whyTheyDoIt:
      "Racial grievance is a turnout machine.",
    whyPeopleBelieveIt:
      "A scary academic label gets glued to any equity lesson.",
    howToSpotIt:
      "Ask for the actual lesson plan, not a viral clip from another district.",
    severity: 7,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck, src.brennanVoting2025],
  },
  {
    id: "DST-BUD-LIGHT",
    date: "2023-04-01",
    title: "Bud Light Boycott Flashbang",
    distraction:
      "A beer partnership became months of culture war that drowned policy news.",
    coveringUp:
      "Labor, antitrust, and rights rollbacks that moved while feeds stayed on cans.",
    whyTheyDoIt:
      "Consumer boycotts feel like agency without legislation.",
    whyPeopleBelieveIt:
      "Brands are everyday touchpoints; punishing them feels concrete.",
    howToSpotIt:
      "Ask what statute changed the same week the boycott led every show.",
    severity: 6,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-TRANS-ATHLETES",
    date: "2024-03-01",
    title: "Trans Athlete Flashbang",
    distraction:
      "Rare high-school sports cases get nationalized as all gender policy.",
    coveringUp:
      "Broader attacks on healthcare access and school inclusion.",
    whyTheyDoIt:
      "A vivid unfairness story recruits voters who skip abstract rights language.",
    whyPeopleBelieveIt:
      "Fairness in sports is intuitive; edge cases feel like the whole field.",
    howToSpotIt:
      "Ask how many athletes are at issue versus how many rights bills stack behind it.",
    severity: 7,
    categories: ["Culture War", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-007"],
    sources: [src.factcheck, src.heritageMandate],
  },
  {
    id: "DST-TARGET-PRIDE",
    date: "2023-05-01",
    title: "Target Pride Panic",
    distraction:
      "Retail pride displays framed as grooming kids into ideology.",
    coveringUp:
      "Harassment campaigns and state bills restricting LGBTQ expression and care.",
    whyTheyDoIt:
      "Moral panic mobilizes donors and primary voters.",
    whyPeopleBelieveIt:
      "Parents are primed to protect kids; aisle predator imagery hijacks that instinct.",
    howToSpotIt:
      "Separate merchandising taste fights from bill text that removes healthcare.",
    severity: 7,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-BOOK-BANS",
    date: "2023-01-01",
    title: "Book Ban Moral Panic",
    distraction:
      "Claims schools flood shelves with porn to justify mass removals.",
    coveringUp:
      "Erasure of Black history, LGBTQ stories, and librarian judgment.",
    whyTheyDoIt:
      "Controlling the shelf controls the next generation's reference points.",
    whyPeopleBelieveIt:
      "A few extreme excerpts get sold as the whole catalog.",
    howToSpotIt:
      "Read the challenged title list. Pattern beats one screenshot.",
    severity: 7,
    categories: ["Culture War"],
    sources: [src.factcheck, src.brennanVoting2025],
  },
  {
    id: "DST-GROOMER-SMEAR",
    date: "2022-04-01",
    title: "Teacher Groomer Smear",
    distraction:
      "Educators called groomers for teaching gender, sexuality, or inclusive history.",
    coveringUp:
      "Real child-protection work and the politics of driving teachers out.",
    whyTheyDoIt:
      "Accusations that stick without proof destroy careers and chill classrooms.",
    whyPeopleBelieveIt:
      "Protecting kids is sacred; the smear hijacks sacred language.",
    howToSpotIt:
      "Demand specific conduct, not vibes about curriculum labels.",
    severity: 8,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-REPLACEMENT",
    date: "2022-05-01",
    title: "Great Replacement Frame",
    distraction:
      "Claim Democrats import voters to replace real Americans.",
    coveringUp:
      "Decades of demographic change and how naturalization actually works.",
    whyTheyDoIt:
      "Ethnonational panic hardens the base and excuses harsh enforcement.",
    whyPeopleBelieveIt:
      "Visible diversity gets misread as a plot instead of births, visas, and history.",
    howToSpotIt:
      "Citizens vote. Naturalization is not a same-week ballot dump.",
    severity: 9,
    categories: ["Immigration", "Elections", "Culture War"],
    relatedRebuttalIds: ["border-open", "election-stolen"],
    sources: [src.brennanNoncitizen, src.dhsImmigration, src.factcheck],
  },
  {
    id: "DST-OPEN-BORDERS-SLOGAN",
    date: "2025-01-20",
    title: "Open Borders vs CBP Data",
    distraction:
      "Claims the border is wide open even when encounter patterns shift.",
    coveringUp:
      "Operational choices and asylum limits that show up in the spreadsheet.",
    whyTheyDoIt:
      "Open borders is a permanent campaign line; complicating data gets ignored.",
    whyPeopleBelieveIt:
      "Slogans stick; monthly tables do not.",
    howToSpotIt:
      "Open the CBP southwest encounter series year over year.",
    severity: 8,
    categories: ["Immigration", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-008"],
    relatedRebuttalIds: ["border-open", "border-open-intentionally"],
    sources: [src.cbpStats, src.iceFy24, src.dhsImmigration],
  },
  {
    id: "DST-BIRTHRIGHT-COVER",
    date: "2025-01-20",
    title: "Birthright Buried Under Border Theater",
    distraction:
      "Invasion talk peaks while an order challenges birthright citizenship papers.",
    coveringUp:
      "A constitutional fight with the 14th Amendment in federal court.",
    whyTheyDoIt:
      "War framing makes an extreme legal move feel like border housekeeping.",
    whyPeopleBelieveIt:
      "If you accept invasion, emergency exceptions feel natural.",
    howToSpotIt:
      "Read the order text and injunctions. Citizenship is not a vibe.",
    severity: 10,
    categories: ["Immigration", "Admin Pattern", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-004"],
    relatedRebuttalIds: ["border-open"],
    sources: [src.constitution14, src.p2025Observer, src.heritageMandate],
  },
  {
    id: "DST-DEI-TERMINATION",
    date: "2025-01-20",
    title: "DEI Purge Victory Lap",
    distraction:
      "Celebratory posts about ending DEI sold as defeating wokeness.",
    coveringUp:
      "Removal of civil-rights offices, training, and anti-discrimination contracting rules.",
    whyTheyDoIt:
      "Culture-win messaging hides rollback of equity enforcement.",
    whyPeopleBelieveIt:
      "DEI became a slur; killing it feels like common sense without reading the EO.",
    howToSpotIt:
      "Ask which anti-discrimination functions were deleted, not which slogan died.",
    severity: 7,
    categories: ["Culture War", "Admin Pattern", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-007"],
    sources: [src.heritageMandate, src.p2025Observer],
  },
  {
    id: "DST-ENERGY-EMERGENCY",
    date: "2025-01-20",
    title: "Climate Hoax vs Energy Emergency",
    distraction:
      "Climate hoax talk while declaring a national energy emergency for fossil expansion.",
    coveringUp:
      "Oil and gas permitting speed-ups and renewable constraints in Day One policy.",
    whyTheyDoIt:
      "Denial plus emergency powers beats winning a climate debate on science.",
    whyPeopleBelieveIt:
      "Energy prices are felt; climate attribution is abstract.",
    howToSpotIt:
      "If it is a hoax, why the emergency order. Follow the permitting.",
    severity: 8,
    categories: ["Admin Pattern", "Project 2025", "Media Panic"],
    relatedEventIds: ["EVT-2025-0120-005"],
    sources: [src.heritageMandate, src.p2025Observer],
  },
  {
    id: "DST-LAWFARE",
    date: "2023-08-01",
    title: "Lawfare Label on Criminal Cases",
    distraction:
      "Every indictment gets called lawfare so evidence never has to be engaged.",
    coveringUp:
      "Grand juries, statutes, and discovery that would be litigated in open court.",
    whyTheyDoIt:
      "If courts are enemy weapons, verdicts become illegitimate in advance.",
    whyPeopleBelieveIt:
      "Partisan timing theories feel clever even when the facts are heavy.",
    howToSpotIt:
      "Ask which count fails on elements, not which host called it lawfare.",
    severity: 8,
    categories: ["Whataboutism", "Deep State", "Elections"],
    relatedRebuttalIds: ["deep-state"],
    sources: [src.dojNews, src.factcheck],
  },
  {
    id: "DST-WOKE-MILITARY",
    date: "2023-03-01",
    title: "Woke Military Readiness Panic",
    distraction:
      "Claims diversity training destroyed the armed forces.",
    coveringUp:
      "Recruitment, retention, and budget fights that need boring analysis.",
    whyTheyDoIt:
      "Culture war reframes force posture as a values fight the base already won emotionally.",
    whyPeopleBelieveIt:
      "A viral training slide looks like proof of collapse.",
    howToSpotIt:
      "Compare readiness metrics and GAO reports to influencer screenshots.",
    severity: 6,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-ANTIFA-EVERYWHERE",
    date: "2020-06-01",
    title: "Antifa Everywhere Narrative",
    distraction:
      "Every protest clash gets blamed on a national Antifa command.",
    coveringUp:
      "Local policing choices, far-right violence, and inconvenient MAGA footage.",
    whyTheyDoIt:
      "A shapeless enemy justifies crackdowns and excuses friendly violence.",
    whyPeopleBelieveIt:
      "Chaos needs an author; Antifa is a ready-made author.",
    howToSpotIt:
      "Ask for org charts, funding trails, and charging documents - not vibes.",
    severity: 7,
    categories: ["Deep State", "Media Panic"],
    sources: [src.fbiCapitol, src.factcheck, src.jan6Hub],
  },
  {
    id: "DST-CENSORSHIP-FLIP",
    date: "2025-01-20",
    title: "Censorship Outrage While Watchdogs Fall",
    distraction:
      "Constant claims that MAGA speech is uniquely censored online.",
    coveringUp:
      "Demolition of IG capacity, civil-service independence, and moderation research.",
    whyTheyDoIt:
      "Speech victimhood distracts from capturing the state that shapes speech environments.",
    whyPeopleBelieveIt:
      "Everyone has seen a post taken down; it feels like proof of a plot.",
    howToSpotIt:
      "Separate platform gripes from executive attacks on oversight offices.",
    severity: 8,
    categories: ["Admin Pattern", "Deep State", "Media Panic"],
    relatedEventIds: ["EVT-2025-0120-001", "EVT-2025-0120-002"],
    sources: [src.p2025Observer, src.heritageMandate],
  },
  {
    id: "DST-INFLATION-FOREVER",
    date: "2025-06-01",
    title: "Forever Blame on the Last Team",
    distraction:
      "Every price spike pinned on Democrats long after MAGA holds power.",
    coveringUp:
      "Tariffs, labor shocks, and policy choices under the current administration.",
    whyTheyDoIt:
      "A permanent scapegoat means never owning tradeoffs.",
    whyPeopleBelieveIt:
      "Grocery bills are emotional; lagged causation is not.",
    howToSpotIt:
      "Check who wrote the last tariff memo and who controls the agencies now.",
    severity: 7,
    categories: ["Admin Pattern", "Whataboutism"],
    sources: [src.factcheck, src.p2025Observer],
  },
  {
    id: "DST-DEFUND-ZOMBIE",
    date: "2024-08-01",
    title: "Defund the Police Zombie Slogan",
    distraction:
      "Running against 2020 protest slogans as if they are today's Democratic platform.",
    coveringUp:
      "Actual safety budgets, crime trends, and MAGA policing and gun policy.",
    whyTheyDoIt:
      "A frozen enemy slogan is cheaper than debating present bills.",
    whyPeopleBelieveIt:
      "Old viral clips still circulate as current events.",
    howToSpotIt:
      "Ask what the candidate's current budget does, not what a 2020 tweet said.",
    severity: 6,
    categories: ["Culture War", "Elections", "Media Panic"],
    sources: [src.fbiCrime, src.factcheck],
  },
  {
    id: "DST-WAR-ON-CARS",
    date: "2024-02-01",
    title: "War on Cars and EV Panic",
    distraction:
      "Claims elites will ban gas cars tomorrow and strand rural America.",
    coveringUp:
      "Staged standards and fossil subsidy politics in Project 2025 energy chapters.",
    whyTheyDoIt:
      "Car identity is cultural; fear of forced transition rallies the base.",
    whyPeopleBelieveIt:
      "People need vehicles; existential threat language lands.",
    howToSpotIt:
      "Read the phase-in timelines. Panic rarely matches the regulation text.",
    severity: 5,
    categories: ["Culture War", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-005"],
    sources: [src.heritageMandate, src.factcheck],
  },
  {
    id: "DST-TIKTOK-CHINA",
    date: "2024-03-01",
    title: "TikTok China Panic as Cover",
    distraction:
      "All-consuming China app threat narratives dominate Capitol weeks.",
    coveringUp:
      "Domestic oligarchic capture, dark money, and administrative-state purges.",
    whyTheyDoIt:
      "Foreign adversaries unite factions; domestic corruption splits them.",
    whyPeopleBelieveIt:
      "Geopolitical fear is real enough to hijack attention.",
    howToSpotIt:
      "Ask what domestic accountability bill died in the same news cycle.",
    severity: 6,
    categories: ["Media Panic", "Corruption Cover"],
    sources: [src.factcheck, src.crsElections],
  },
  {
    id: "DST-SANCTUARY-ANECDOTES",
    date: "2024-04-01",
    title: "Sanctuary City Crime Anecdotes",
    distraction:
      "One tragedy in a sanctuary city nationalized as proof the model is murderous.",
    coveringUp:
      "Local cooperation agreements, detainer law, and comparative crime rates.",
    whyTheyDoIt:
      "A single horror story can justify nationwide cruelty policies.",
    whyPeopleBelieveIt:
      "Tragedy plus immigrant equals a ready causal story.",
    howToSpotIt:
      "Demand matched rates and policy mechanisms, not one funeral as legislation.",
    severity: 7,
    categories: ["Immigration", "Media Panic"],
    relatedRebuttalIds: ["border-open"],
    sources: [src.fbiCrime, src.dhsImmigration, src.factcheck],
  },
  {
    id: "DST-MASS-DEPORTATION-LOGISTICS",
    date: "2025-02-01",
    title: "Invasion Talk Hides Deportation Logistics",
    distraction:
      "Endless invasion rhetoric while detention expansion quietly scales.",
    coveringUp:
      "Fiscal cost, due-process risk, workforce shocks, and family separations by design.",
    whyTheyDoIt:
      "War words make logistical cruelty feel like defense spending.",
    whyPeopleBelieveIt:
      "If you accept invasion, mass removal feels like cleanup.",
    howToSpotIt:
      "Follow ICE capacity releases, not podium adjectives.",
    severity: 9,
    categories: ["Immigration", "Admin Pattern", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-008"],
    relatedRebuttalIds: ["border-open-intentionally"],
    sources: [src.iceFy24, src.dhsImmigration, src.cbpStats],
  },
  {
    id: "DST-IG-FIRINGS-COVER",
    date: "2025-01-25",
    title: "Shiny Objects Over Watchdog Removals",
    distraction:
      "Culture-war spikes timed around inspector general and oversight disruptions.",
    coveringUp:
      "Removal of watchdogs who investigate waste, fraud, and abuse.",
    whyTheyDoIt:
      "You cannot audit a capture project if the auditors are gone.",
    whyPeopleBelieveIt:
      "IG offices are invisible until a scandal; their absence is invisible too.",
    howToSpotIt:
      "When a meme war peaks, check who lost an IG.",
    severity: 9,
    categories: ["Corruption Cover", "Admin Pattern", "Deep State"],
    relatedEventIds: ["EVT-2025-0120-002", "EVT-2025-0120-006"],
    sources: [src.p2025Observer, src.dojOip],
  },
  {
    id: "DST-TARIFF-CULTURE-COVER",
    date: "2025-04-01",
    title: "Culture War Over Tariff Pain",
    distraction:
      "Identity fights surge when tariff shocks hit prices.",
    coveringUp:
      "Household cost increases from America First trade experiments.",
    whyTheyDoIt:
      "Anger at pronouns is cheaper than defending a grocery receipt.",
    whyPeopleBelieveIt:
      "Culture content is engineered for engagement; price indices are not.",
    howToSpotIt:
      "If the feed is suddenly about bathrooms, check the tariff schedule.",
    severity: 7,
    categories: ["Admin Pattern", "Culture War"],
    relatedEventIds: ["EVT-2025-0120-041"],
    sources: [src.p2025Observer, src.factcheck],
  },
  {
    id: "DST-HERITAGE-FRAUD-DB",
    date: "2024-01-01",
    title: "Heritage Fraud Database Misuse",
    distraction:
      "Citing Heritage's voter fraud database as proof of mass theft.",
    coveringUp:
      "The database shows sparse cases across decades, not a stolen election.",
    whyTheyDoIt:
      "Borrowing a conservative brand to launder a false scale claim.",
    whyPeopleBelieveIt:
      "If Heritage says fraud, people assume it must be huge.",
    howToSpotIt:
      "Open the database counts. Sparse is the opposite of systemic.",
    severity: 7,
    categories: ["Elections", "Media Panic"],
    relatedRebuttalIds: ["election-stolen"],
    sources: [src.heritageFraudDb, src.brennanFraud, src.cisaElection],
  },
  {
    id: "DST-MIDTERM-FLOOD-2026",
    date: "2026-01-15",
    title: "2026 Midterm Flood-the-Zone",
    distraction:
      "Rotating pets, pronouns, Epstein memes, and border clips into midterms.",
    coveringUp:
      "Schedule F expansion, enforcement militarization, and watchdog erosion.",
    whyTheyDoIt:
      "Attention is finite. Flooding it blocks coherent opposition messaging.",
    whyPeopleBelieveIt:
      "Each flashbang feels like breaking news, so the pattern stays invisible.",
    howToSpotIt:
      "Keep two columns: viral topic vs Federal Register that week.",
    severity: 9,
    categories: ["Admin Pattern", "Media Panic", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-002", "EVT-2025-0120-008"],
    relatedRebuttalIds: ["project-2025-still-denied"],
    sources: [src.p2025Observer, src.heritageMandate, src.factcheck],
  },
  {
    id: "DST-DAY-ONE-RESCISSIONS",
    date: "2025-01-20",
    title: "Culture Wins Hide Day One Rescissions",
    distraction:
      "Victory laps about ending wokeness on inauguration day.",
    coveringUp:
      "Mass rescission of climate, equity, and regulatory orders in one stroke.",
    whyTheyDoIt:
      "Culture framing makes a governance wipe feel like a values celebration.",
    whyPeopleBelieveIt:
      "People hear the slogan, not the Federal Register list.",
    howToSpotIt:
      "Count the rescinded orders. Celebration is not a policy inventory.",
    severity: 8,
    categories: ["Admin Pattern", "Culture War", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-001"],
    sources: [src.p2025Observer, src.heritageMandate],
  },
  {
    id: "DST-VACCINE-FLASH",
    date: "2021-08-01",
    title: "Vaccine Conspiracy Flashbang",
    distraction:
      "Medical conspiracy cycles that treat public health as a deep state plot.",
    coveringUp:
      "Injury reporting systems, trial data, and the cost of distrust in outbreaks.",
    whyTheyDoIt:
      "Health fear plus government distrust is a durable engagement engine.",
    whyPeopleBelieveIt:
      "Rare adverse events plus online certainty beat population statistics.",
    howToSpotIt:
      "Prefer CDC and peer-reviewed rates over telegram certainty.",
    severity: 7,
    categories: ["Deep State", "Media Panic"],
    relatedRebuttalIds: ["deep-state"],
    sources: [src.factcheck, src.dojNews],
  },
  {
    id: "DST-WAR-ON-CHRISTMAS",
    date: "2024-12-01",
    title: "War on Christmas Seasonal Flash",
    distraction:
      "Annual claims that elites banned Christmas greetings and traditions.",
    coveringUp:
      "Year-end riders, budget fights, and quiet rulemaking while feeds argue about cups.",
    whyTheyDoIt:
      "Seasonal identity threat is a reliable December fundraiser.",
    whyPeopleBelieveIt:
      "Nostalgia plus one corporate memo becomes a civilization story.",
    howToSpotIt:
      "If Christmas is banned, why are the lights still up. Check Congress.",
    severity: 4,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-DRAG-PANIC",
    date: "2023-06-01",
    title: "Drag Show Panic",
    distraction:
      "Drag brunch framed as a national child-endangerment crisis.",
    coveringUp:
      "Speech and performance bills that chill LGBTQ public life far beyond any venue.",
    whyTheyDoIt:
      "Sexualized fear is high-arousal content that travels.",
    whyPeopleBelieveIt:
      "Protect the kids language short-circuits scrutiny of the bill text.",
    howToSpotIt:
      "Read the statute's definitions. Vague bans are the tell.",
    severity: 6,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-OLYMPICS-GENDER",
    date: "2024-07-01",
    title: "Olympics Gender Flashbang",
    distraction:
      "International sports eligibility fights used as domestic culture-war fuel.",
    coveringUp:
      "State bills and federal civil-rights rollbacks that use sports as the door.",
    whyTheyDoIt:
      "Global spectacle gives local bills a prestige backdrop.",
    whyPeopleBelieveIt:
      "Fairness in elite sport feels universal and urgent.",
    howToSpotIt:
      "Track what local bill advances during the viral sports cycle.",
    severity: 6,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck, src.heritageMandate],
  },
];

const curatedIds = new Set(curatedDistractions.map((d) => d.id));

/**
 * Curated + auto stubs (`DIST-AUTO-*`) from `npm run refresh:distracted`.
 * Unraid updater refreshes auto stubs hourly; do not hand-edit those.
 */
export const distractions: DistractionEntry[] = [
  ...curatedDistractions,
  ...autoDistractedEntries.filter((e) => !curatedIds.has(e.id)),
];
