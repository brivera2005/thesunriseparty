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
    .sort((a, b) => b.date.localeCompare(a.date) || b.severity - a.severity);
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
    title: "Epstein Files Theater: Promise Release, Deliver Delay",
    distraction:
      "MAGA influencers flood feeds with client-list memes and revenge fantasies while claiming the files are finally coming.",
    coveringUp:
      "Actual court-ordered and statutory disclosure fights, redaction games, and elite accountability that would implicate powerful allies across parties.",
    whyTheyDoIt:
      "Spectacle sells loyalty. Slow-walking real records protects networks while still letting the base feel like hunters.",
    whyPeopleBelieveIt:
      "People want a simple villain list. Delay plus drip-feed leaks feel like confirmation even when the paperwork is incomplete.",
    howToSpotIt:
      "Ask for a docket, a statute, a release date, and unredacted primary pages. If the pitch is vibes and trust me, it is theater.",
    severity: 9,
    categories: ["Epstein / Transparency", "Corruption Cover", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-1119-040"],
    relatedRebuttalIds: ["epstein-files-distraction"],
    sources: [src.congressEpstein, src.dojOip],
  },
  {
    id: "DST-EPSTEIN-CLIENT-LIST-MYTH",
    date: "2025-07-15",
    title: "The Imaginary Epstein Client List",
    distraction:
      "Viral posts pretend a single sealed client list exists and that releasing it will topple every enemy overnight.",
    coveringUp:
      "Real flight logs, civil dockets, plea deals, and institutional failures already on the public record that require boring reading.",
    whyTheyDoIt:
      "A mythical list is more mobilizing than FOIA PDFs. It also lets bad actors invent names without evidence.",
    whyPeopleBelieveIt:
      "True crimes create demand for a master document. Conspiratorial media fills the gap with certainty.",
    howToSpotIt:
      "Courts publish dockets. If someone cannot point to a specific filing number, they are selling a story, not evidence.",
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
      "Whenever a MAGA figure faces scrutiny, the reply is that Democrats are in the files too, as if that ends the inquiry.",
    coveringUp:
      "Whoever is named, the accountability question stays: who enabled trafficking networks and who blocked sunlight.",
    whyTheyDoIt:
      "Mutual incrimination talk freezes action. If everyone is dirty, nobody has to clean anything.",
    whyPeopleBelieveIt:
      "Cynicism feels sophisticated. Both sides sounds fair even when it is a stall.",
    howToSpotIt:
      "Agree that powerful people of any party should face records, then demand the records anyway.",
    severity: 7,
    categories: ["Epstein / Transparency", "Whataboutism"],
    relatedRebuttalIds: ["epstein-files-distraction"],
    sources: [src.congressEpstein, src.factcheck],
  },
  {
    id: "DST-P2025-DENIAL",
    date: "2025-01-20",
    title: "Project 2025 I Know Nothing Drown-Out",
    distraction:
      "Campaign-season claims that Project 2025 was fringe or unknown, repeated even after Day One matched the playbook.",
    coveringUp:
      "Schedule F, agency purges, immigration militarization, and energy emergency orders that track Mandate for Leadership chapters.",
    whyTheyDoIt:
      "Voters punished the brand in polls. Denial buys time while the agenda ships through executive orders.",
    whyPeopleBelieveIt:
      "People separate a candidate brand from think-tank PDFs until the orders arrive.",
    howToSpotIt:
      "Line up Heritage Mandate chapter language next to Federal Register actions. Match the verbs.",
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
      "After implementation starts, allies reframe the Mandate as optional brainstorming nobody had to follow.",
    coveringUp:
      "Personnel lists, agency transition teams, and Day One orders that treat the book as an operating manual.",
    whyTheyDoIt:
      "Plausible deniability for midterm ads while keeping the machine running.",
    whyPeopleBelieveIt:
      "Governing is complex; ideas sounds academic and harmless.",
    howToSpotIt:
      "Ideas do not reclassify civil servants or seize payment systems. Actions do.",
    severity: 9,
    categories: ["Project 2025", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-002", "EVT-2025-0120-006"],
    relatedRebuttalIds: ["p2025-just-suggestions", "project-2025-just-ideas"],
    sources: [src.heritageMandate, src.p2025Observer],
  },
  {
    id: "DST-SCHEDULE-F-BURIED",
    date: "2025-01-29",
    title: "Culture War Noise Over Schedule F",
    distraction:
      "Viral fights about pronouns, flags, and campus speech dominate feeds the week agencies get Schedule F guidance.",
    coveringUp:
      "At-will reclassification of policy-influencing civil servants, a structural capture of the administrative state.",
    whyTheyDoIt:
      "Personnel is policy. Outrage is cheaper than explaining civil-service law.",
    whyPeopleBelieveIt:
      "Identity fights feel personal; Schedule F feels bureaucratic until firings hit services.",
    howToSpotIt:
      "When a culture scrap peaks, check OPM and Federal Register the same day.",
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
      "Viral waste clips and agency dunks sold as common-sense savings.",
    coveringUp:
      "Extra-constitutional access to payment systems, workforce RIFs, and politicized cuts that hit benefits processing.",
    whyTheyDoIt:
      "Efficiency branding launders power grabs as thrift.",
    whyPeopleBelieveIt:
      "Everyone has seen government waste. Clips confirm the stereotype without audits.",
    howToSpotIt:
      "Ask for GAO-style scoring, inspector general oversight, and who gained access to Treasury systems.",
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
      "Years of MAGA claims that 2020 was stolen through machines, ballots, or secret cabals.",
    coveringUp:
      "Certified results, recounts, audits, and court losses; later used to justify Jan. 6 revisionism and voting restrictions.",
    whyTheyDoIt:
      "Delegitimizing loss preserves the leader's brand and fuels fundraising.",
    whyPeopleBelieveIt:
      "Partisan media repeats the claim until it feels like memory.",
    howToSpotIt:
      "Look for specific precinct math that survives recounts. Vibes are not tallies.",
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
      "Claims that millions of noncitizens are voting and swinging federal elections.",
    coveringUp:
      "Actual rare cases, state penalties already on the books, and broader efforts to shrink legal voting access.",
    whyTheyDoIt:
      "Invented ballot contamination justifies stricter ID and purge rules that suppress turnout.",
    whyPeopleBelieveIt:
      "Anecdotes travel faster than Brennan Center tables.",
    howToSpotIt:
      "Ask for statewide matched databases, not a viral video of one registration form.",
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
      "Before ballots are counted, influencers seed they will steal it storylines for any unfavorable outcome.",
    coveringUp:
      "Normal election administration friction used as proof of conspiracy instead of process.",
    whyTheyDoIt:
      "Heads I win, tails you cheated preserves loyalty regardless of results.",
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
      "War language about invasion, occupation, and military enemy frames for asylum seekers and migrants.",
    coveringUp:
      "Labor markets, asylum backlogs, congressional funding fights, and how enforcement choices change encounter numbers.",
    whyTheyDoIt:
      "Invasion talk triggers fear and justifies emergency powers and cruelty as defense.",
    whyPeopleBelieveIt:
      "Dramatic video of crossings looks like war footage without context.",
    howToSpotIt:
      "Compare CBP monthly series, not a single viral clip. Invasion is a metaphor, not a legal finding.",
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
      "National cable segments turn rare violent crimes by migrants into a demographic crime wave.",
    coveringUp:
      "Broader crime trends in FBI data and the political usefulness of racialized fear.",
    whyTheyDoIt:
      "Fear of the outsider consolidates the MAGA coalition around enforcement maximalism.",
    whyPeopleBelieveIt:
      "Availability bias: a shocking local story feels like national pattern.",
    howToSpotIt:
      "Demand rates, not body counts from cherry-picked cities.",
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
      "False claims that Haitian immigrants in Springfield, Ohio were eating pets, amplified on a national debate stage.",
    coveringUp:
      "Real city capacity strains, immigration policy complexity, and the cost of circulating racialized blood libels.",
    whyTheyDoIt:
      "Disgust is sticky. Disgust plus immigrants equals viral loyalty content.",
    whyPeopleBelieveIt:
      "It sounds too weird to invent, so people assume it must be based on something.",
    howToSpotIt:
      "City officials and police denied it in real time. Treat anonymous Facebook posts as non-sources.",
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
      "Any MAGA corruption story gets answered with Hunter Biden laptop or plea talking points.",
    coveringUp:
      "Separate cases, separate evidence. Hunter's guilty plea does not erase other defendants' exposure.",
    whyTheyDoIt:
      "Whataboutism converts accountability into team sports.",
    whyPeopleBelieveIt:
      "If one Biden relative was corrupt, the brand feels contaminated, so reciprocity feels fair.",
    howToSpotIt:
      "Grant the Hunter facts, then ask what that has to do with the claim under discussion.",
    severity: 8,
    categories: ["Whataboutism", "Corruption Cover"],
    relatedRebuttalIds: ["hunter-biden-laptop", "hunter-biden-everything"],
    sources: [src.hunterPlea, src.dojNews, src.factcheck],
  },
  {
    id: "DST-HUNTER-EQUALS-TRUMP",
    date: "2024-05-01",
    title: "Equating Hunter Plea With Trump Indictments",
    distraction:
      "Talking heads treat a presidential son's plea as interchangeable with cases against a former president.",
    coveringUp:
      "Different statutes, different fact patterns, and the unique democratic stakes of executive self-protection.",
    whyTheyDoIt:
      "False equivalence dulls the urgency of accountability for the powerful.",
    whyPeopleBelieveIt:
      "Both involve Biden and Trump news cycles, so they blur in memory.",
    howToSpotIt:
      "Compare charging documents side by side. Names are not the legal theory.",
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
      "Any adverse fact, leak, or court loss is blamed on a permanent deep state conspiracy.",
    coveringUp:
      "Ordinary checks and balances, inspectors general, career specialists, and the MAGA project's own personnel purge.",
    whyTheyDoIt:
      "If institutions are illegitimate, breaking them becomes patriotism.",
    whyPeopleBelieveIt:
      "Bureaucracy is opaque. Opacity plus grievance equals conspiracy.",
    howToSpotIt:
      "Ask which statute, which office, which document. They is not a source.",
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
      "Framing lawful warrants and investigations as coups against MAGA leaders.",
    coveringUp:
      "Probable-cause standards, magistrate judges, and the evidence actually sought in those actions.",
    whyTheyDoIt:
      "Casting law enforcement as enemy immunizes leaders from consequences.",
    whyPeopleBelieveIt:
      "Supporters experience legal pressure as persecution of the tribe.",
    howToSpotIt:
      "Read the warrant affidavit excerpts and charging theories, not cable chyron.",
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
      "Reframing the Capitol attack as tourism, entrapping protesters, or mostly peaceful milling.",
    coveringUp:
      "Violence, officer injuries, disrupted certification, and hundreds of federal cases.",
    whyTheyDoIt:
      "Pardons and mythmaking rehabilitate the base and erase a democratic crisis.",
    whyPeopleBelieveIt:
      "Selective camera angles and fed theories offer an exit from shame.",
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
      "Parents told critical race theory was secretly mandatory in every K-12 classroom.",
    coveringUp:
      "Curriculum fights used to seize school boards, ban books, and chill honest history teaching.",
    whyTheyDoIt:
      "Racial grievance is a turnout machine.",
    whyPeopleBelieveIt:
      "A scary academic label gets glued to any equity lesson.",
    howToSpotIt:
      "Ask for the actual lesson plan, not a viral TikTok of a different district.",
    severity: 7,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck, src.brennanVoting2025],
  },
  {
    id: "DST-BUD-LIGHT",
    date: "2023-04-01",
    title: "Bud Light Boycott Flashbang",
    distraction:
      "A beer partnership became a months-long culture war that drowned policy news.",
    coveringUp:
      "Labor, antitrust, and state-level rights rollbacks that moved while feeds stayed on cans.",
    whyTheyDoIt:
      "Consumer boycotts feel like agency without legislation.",
    whyPeopleBelieveIt:
      "Brands are everyday touchpoints; punishing them feels concrete.",
    howToSpotIt:
      "Ask what statute changed this week while the boycott led every show.",
    severity: 6,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-TRANS-ATHLETES",
    date: "2024-03-01",
    title: "Trans Athlete Flashbang",
    distraction:
      "Nationalizing rare high-school sports cases as if they define all gender policy.",
    coveringUp:
      "Broader attacks on healthcare access, civil rights enforcement, and public school inclusion.",
    whyTheyDoIt:
      "A vivid sports unfairness story recruits voters who would ignore abstract rights language.",
    whyPeopleBelieveIt:
      "Fairness in sports is intuitive; edge cases feel like the whole field.",
    howToSpotIt:
      "Ask how many athletes are at issue versus how many rights bills are stacked behind the outrage.",
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
      "Organized harassment campaigns and state bills restricting LGBTQ expression and care.",
    whyTheyDoIt:
      "Moral panic mobilizes donors and primary voters.",
    whyPeopleBelieveIt:
      "Parents are primed to protect children; predators-in-aisles imagery hijacks that instinct.",
    howToSpotIt:
      "Separate merchandising taste fights from legislative text that removes healthcare.",
    severity: 7,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-BOOK-BANS",
    date: "2023-01-01",
    title: "Book Ban Moral Panic",
    distraction:
      "Claims that schools are flooding shelves with porn, used to justify mass removals.",
    coveringUp:
      "Erasure of Black history, LGBTQ stories, and library professional judgment.",
    whyTheyDoIt:
      "Controlling the shelf controls the next generation's reference points.",
    whyPeopleBelieveIt:
      "A few extreme excerpts can be presented as the whole catalog.",
    howToSpotIt:
      "Read the challenged title list. Pattern recognition beats one screenshot.",
    severity: 7,
    categories: ["Culture War"],
    sources: [src.factcheck, src.brennanVoting2025],
  },
  {
    id: "DST-GROOMER-SMEAR",
    date: "2022-04-01",
    title: "Teacher Groomer Smear",
    distraction:
      "Calling educators groomers for discussing gender, sexuality, or inclusive history.",
    coveringUp:
      "Actual child-protection failures and the political value of terrorizing teachers out of the profession.",
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
    title: "Great Replacement as Policy Frame",
    distraction:
      "Claiming Democrats import voters to replace real Americans.",
    coveringUp:
      "Demographic change over decades, immigration law written by Congress, and how naturalization actually works.",
    whyTheyDoIt:
      "Ethnonational panic hardens the MAGA base and excuses harsh enforcement.",
    whyPeopleBelieveIt:
      "Visible diversity gets misread as a plot instead of births, visas, and history.",
    howToSpotIt:
      "Check who can vote: citizens. Naturalization is not a same-week ballot dump.",
    severity: 9,
    categories: ["Immigration", "Elections", "Culture War"],
    relatedRebuttalIds: ["border-open", "election-stolen"],
    sources: [src.brennanNoncitizen, src.dhsImmigration, src.factcheck],
  },
  {
    id: "DST-OPEN-BORDERS-SLOGAN",
    date: "2025-01-20",
    title: "Open Borders Slogan vs CBP Data",
    distraction:
      "Claiming the border is wide open even when encounter patterns shift under new enforcement.",
    coveringUp:
      "Operational choices, asylum processing limits, and the gap between slogan and spreadsheet.",
    whyTheyDoIt:
      "Open borders is a permanent campaign message; data that complicates it gets ignored.",
    whyPeopleBelieveIt:
      "Slogans are sticky; monthly tables are not.",
    howToSpotIt:
      "Open the CBP southwest encounter series and compare year over year.",
    severity: 8,
    categories: ["Immigration", "Admin Pattern"],
    relatedEventIds: ["EVT-2025-0120-008"],
    relatedRebuttalIds: ["border-open", "border-open-intentionally"],
    sources: [src.cbpStats, src.iceFy24, src.dhsImmigration],
  },
  {
    id: "DST-BIRTHRIGHT-COVER",
    date: "2025-01-20",
    title: "Birthright Order Buried Under Border Theater",
    distraction:
      "Invasion talk peaks while an order challenges birthright citizenship documents for U.S.-born kids.",
    coveringUp:
      "A direct constitutional confrontation with the 14th Amendment, litigated in federal court.",
    whyTheyDoIt:
      "War framing makes an extreme legal move feel like border housekeeping.",
    whyPeopleBelieveIt:
      "If you accept invasion, emergency exceptions feel natural.",
    howToSpotIt:
      "Read the order text and the injunctions. Citizenship is not a vibe.",
    severity: 10,
    categories: ["Immigration", "Admin Pattern", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-004"],
    relatedRebuttalIds: ["border-open"],
    sources: [src.constitution14, src.p2025Observer, src.heritageMandate],
  },
  {
    id: "DST-DEI-TERMINATION",
    date: "2025-01-20",
    title: "DEI Purge as Culture Victory Lap",
    distraction:
      "Celebratory posts about ending DEI sold as defeating wokeness.",
    coveringUp:
      "Mass removal of civil-rights offices, training, and contracting rules that policed discrimination.",
    whyTheyDoIt:
      "Culture win messaging hides institutional rollback of equity enforcement.",
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
    title: "Climate Hoax Talk vs Energy Emergency",
    distraction:
      "Recycling climate hoax rhetoric while declaring a national energy emergency for fossil expansion.",
    coveringUp:
      "Permitting acceleration for oil and gas and constraints on renewables baked into Day One energy policy.",
    whyTheyDoIt:
      "Denial plus emergency powers is faster than winning a climate debate on science.",
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
      "Calling every indictment lawfare so evidence never has to be engaged.",
    coveringUp:
      "Grand juries, statutes, and discovery that would be litigated in open court.",
    whyTheyDoIt:
      "If courts are enemy weapons, verdicts become illegitimate in advance.",
    whyPeopleBelieveIt:
      "Partisan timing theories feel clever even when the facts are heavy.",
    howToSpotIt:
      "Ask which count fails on elements, not which cable host called it lawfare.",
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
      "Claiming diversity training destroyed the armed forces.",
    coveringUp:
      "Recruitment, retention, and budget fights that need boring analysis, not culture memes.",
    whyTheyDoIt:
      "Culture war reframes force posture as a values fight the MAGA base already won emotionally.",
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
      "Blaming every protest clash on a shadowy national Antifa command.",
    coveringUp:
      "Local policing choices, far-right violence, and inconvenient footage of MAGA actors.",
    whyTheyDoIt:
      "A shapeless enemy justifies crackdowns and excuses friendly violence.",
    whyPeopleBelieveIt:
      "Chaos needs an author; Antifa is a ready-made author.",
    howToSpotIt:
      "Ask for org charts, funding trails, and charging documents, not vibes.",
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
      "Simultaneous demolition of inspector general capacity, civil-service independence, and evidence-based moderation research.",
    whyTheyDoIt:
      "Victimhood about speech distracts from capturing the state that regulates speech environments.",
    whyPeopleBelieveIt:
      "Everyone has seen a post taken down; it feels like proof of a plot.",
    howToSpotIt:
      "Separate platform moderation gripes from executive attacks on oversight offices.",
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
      "Pinning every price spike on Democrats long after MAGA holds the White House and Congress.",
    coveringUp:
      "Tariffs, labor supply shocks, and policy choices under the current administration.",
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
      "Running against 2020 protest slogans years later as if they are the Democratic platform.",
    coveringUp:
      "Actual public-safety budgets, crime data trends, and MAGA policy on policing and guns.",
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
      "Claiming elites will ban gas cars tomorrow and strand rural America.",
    coveringUp:
      "Staged standards, market shifts, and fossil subsidy politics inside Project 2025 energy chapters.",
    whyTheyDoIt:
      "Car identity is cultural; fear of forced transition rallies the base.",
    whyPeopleBelieveIt:
      "People need vehicles; existential threat language lands.",
    howToSpotIt:
      "Read the actual phase-in timelines. Panic rarely matches the regulation text.",
    severity: 5,
    categories: ["Culture War", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-005"],
    sources: [src.heritageMandate, src.factcheck],
  },
  {
    id: "DST-TIKTOK-CHINA",
    date: "2024-03-01",
    title: "TikTok China Panic as Domestic Cover",
    distraction:
      "All-consuming China app threat narratives dominating Capitol weeks.",
    coveringUp:
      "Domestic oligarchic capture, dark money, and administrative-state purges that need less foreign villain energy.",
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
      "Nationalizing one tragedy in a sanctuary city as proof the whole model is murderous.",
    coveringUp:
      "Local policing cooperation agreements, federal detainers law, and comparative crime rates.",
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
      "Endless invasion rhetoric while ICE detention expansion and Guard coordination quietly scale.",
    coveringUp:
      "Fiscal cost, due process collapse risk, workforce shocks, and family separations as policy design.",
    whyTheyDoIt:
      "War words make logistical cruelty feel like defense spending.",
    whyPeopleBelieveIt:
      "If you accept invasion, mass removal feels like cleanup.",
    howToSpotIt:
      "Follow ICE capacity and DHS ops releases, not podium adjectives.",
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
      "Removal of independent watchdogs who investigate waste, fraud, and abuse inside agencies.",
    whyTheyDoIt:
      "You cannot audit a capture project if the auditors are gone.",
    whyPeopleBelieveIt:
      "IG offices are invisible until a scandal; their absence is invisible too.",
    howToSpotIt:
      "When a meme war peaks, check who lost an IG or MSPB quorum.",
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
      "Identity fights surge when tariff and trade shocks hit prices.",
    coveringUp:
      "Household cost increases and supply-chain hits from America First trade experiments.",
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
      "The database itself shows sparse cases across decades, not a stolen national election.",
    whyTheyDoIt:
      "Borrowing a conservative source's brand to launder a false scale claim.",
    whyPeopleBelieveIt:
      "If Heritage says fraud, it must be huge, people assume.",
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
    title: "2026 Midterm Flood-the-Zone Pattern",
    distraction:
      "Accelerating shiny-object cycles: pets, pronouns, Epstein memes, border invasion clips on rotation.",
    coveringUp:
      "Schedule F expansion, enforcement militarization, and watchdog erosion heading into midterms.",
    whyTheyDoIt:
      "Attention is finite. Flooding it prevents coherent opposition messaging.",
    whyPeopleBelieveIt:
      "Each flashbang feels like breaking news, so the pattern stays invisible.",
    howToSpotIt:
      "Keep a two-column note: viral topic vs Federal Register that week.",
    severity: 9,
    categories: ["Admin Pattern", "Media Panic", "Project 2025"],
    relatedEventIds: ["EVT-2025-0120-002", "EVT-2025-0120-008"],
    relatedRebuttalIds: ["project-2025-still-denied"],
    sources: [src.p2025Observer, src.heritageMandate, src.factcheck],
  },
  {
    id: "DST-DAY-ONE-RESCISSIONS",
    date: "2025-01-20",
    title: "Parade of Culture Wins Hides Day One Rescissions",
    distraction:
      "Victory laps about ending wokeness on inauguration day.",
    coveringUp:
      "Mass rescission of climate, equity, and regulatory orders in a single stroke.",
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
      "Vaccine injury systems, trial data, and the opportunity cost of distrust during real outbreaks.",
    whyTheyDoIt:
      "Health fear plus government distrust is a durable MAGA engagement engine.",
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
      "Year-end legislative riders, budget fights, and quiet agency rulemaking while feeds argue about cups.",
    whyTheyDoIt:
      "Seasonal identity threat is a reliable December fundraiser.",
    whyPeopleBelieveIt:
      "Nostalgia plus one corporate memo becomes a civilization story.",
    howToSpotIt:
      "If Christmas is banned, why are the lights still up. Check Congress, not coffee cups.",
    severity: 4,
    categories: ["Culture War", "Media Panic"],
    sources: [src.factcheck],
  },
  {
    id: "DST-DRAG-PANIC",
    date: "2023-06-01",
    title: "Drag Show Panic",
    distraction:
      "Framing drag brunch as a national child-endangerment crisis.",
    coveringUp:
      "Bills restricting speech and performance that chill LGBTQ public life far beyond any venue.",
    whyTheyDoIt:
      "Sexualized fear is high arousal content that travels.",
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
      "International sports eligibility fights used as domestic culture war fuel.",
    coveringUp:
      "U.S. state bills and federal civil-rights rollbacks that use sports as the door, then expand.",
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
