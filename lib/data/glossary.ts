/**
 * Plain-English glossary for opaque political / legal jargon.
 * Used by TermTip / TipText for hover and tap help.
 * Keep definitions short (1-3 sentences). No em dashes.
 */

export type GlossaryTerm = {
  /** Stable id */
  id: string;
  /** Display label next to the ? */
  label: string;
  /** Match phrases (longest first when scanning). Case-insensitive. */
  aliases: string[];
  /** Short plain-English definition */
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "enforcement-militarization",
    label: "Enforcement militarization",
    aliases: [
      "enforcement militarization",
      "militarized enforcement",
      "militarization of enforcement",
    ],
    definition:
      "Treating immigration and interior policing like a wartime operation: troops, surplus gear, mass raids, and detention scale-ups. Kitchen-table version: more force and spectacle, less due process, higher risk of family separations and rights violations.",
  },
  {
    id: "watchdog-erosion",
    label: "Watchdog erosion",
    aliases: [
      "watchdog erosion",
      "watchdog capacity",
      "erosion of watchdogs",
      "removing watchdogs",
      "removal of watchdogs",
    ],
    definition:
      "Weakening the people and offices that catch waste, fraud, and illegal orders: inspectors general, career auditors, ethics staff, and independent boards. When watchdogs shrink, self-dealing and cover-ups get easier.",
  },
  {
    id: "schedule-f-expansion",
    label: "Schedule F expansion",
    aliases: [
      "Schedule F expansion",
      "Schedule F expansions",
      "expanding Schedule F",
    ],
    definition:
      "Spreading Schedule F / Schedule Policy/Career reclassification to more agencies and job titles. Same idea as the original purge tool, just a bigger blast radius of at-will firings.",
  },
  {
    id: "schedule-f",
    label: "Schedule F",
    aliases: [
      "Schedule Policy/Career",
      "Schedule Policy / Career",
      "Schedule Policy and Career",
      "Schedule F",
    ],
    definition:
      "A White House reclassification that turns career civil servants in 'policy' jobs into at-will staff. In plain English: mass firing without the usual merit-system appeals. Loyalty tests replace expertise, agencies get hollowed out, and inspectors general or career lawyers become easier to sack. Later branded Schedule Policy/Career; same purge tool.",
  },
  {
    id: "doge",
    label: "DOGE",
    aliases: [
      "Department of Government Efficiency",
      "DOGE Service",
      "U.S. DOGE",
      "DOGE",
    ],
    definition:
      "Department of Government Efficiency: an unofficial White House cost-cutting shop with deep access to agency systems and personnel. Watch payment-system access, workforce directives, and whether temporary 'efficiency' structures outlast their legal shell.",
  },
  {
    id: "project-2025",
    label: "Project 2025",
    aliases: ["Project 2025", "P2025", "Mandate for Leadership"],
    definition:
      "Heritage Foundation's 900+ page playbook to remake the federal government: Schedule F-style personnel, agency gutting, and social policy rollbacks. Trackers map which pieces are already being implemented.",
  },
  {
    id: "congressional-review-act",
    label: "Congressional Review Act",
    aliases: [
      "Congressional Review Act",
      "CRA disapproval",
      "CRA usage",
      "CRA",
    ],
    definition:
      "Congressional Review Act: a fast track for Congress to kill recent agency rules with simple majorities. Used to wipe regulations without rewriting the underlying statute.",
  },
  {
    id: "chevron",
    label: "Chevron",
    aliases: ["Chevron deference", "Chevron doctrine", "Chevron"],
    definition:
      "Old rule that courts deferred to reasonable agency readings of ambiguous laws. The Supreme Court overturned it in 2024 (Loper Bright), making it easier for judges to strike agency rules and harder for agencies to regulate.",
  },
  {
    id: "loper-bright",
    label: "Loper Bright",
    aliases: ["Loper Bright"],
    definition:
      "The 2024 Supreme Court case that ended Chevron deference. Judges, not agencies, get the last word on what ambiguous statutes mean. Expect more lawsuits against rules on environment, labor, and consumer protection.",
  },
  {
    id: "redaction",
    label: "Redaction",
    aliases: ["redacted pages", "redactions", "redaction", "redacted"],
    definition:
      "Blacked-out text in released documents. Sometimes protects privacy or national security; often used to hide names, money trails, or embarrassing facts. Ask what is missing and who controls the unredacted file.",
  },
  {
    id: "client-list",
    label: "Client list",
    aliases: [
      "client list theater",
      "client-list",
      "client list",
      "Epstein client list",
    ],
    definition:
      "Viral claim that a single master 'client list' will drop and end careers. Real Epstein files are messy court and DOJ records, not one tidy list. The theater keeps you staring at celebrities instead of transparency fights and contemporaneous policy moves.",
  },
  {
    id: "asylum-backlog",
    label: "Asylum backlog",
    aliases: ["asylum backlogs", "asylum backlog", "asylum limits"],
    definition:
      "The pile of asylum cases waiting months or years for a hearing. Backlogs are driven by staffing, court capacity, and policy choices, not just 'open borders' slogans. Politicians often point at the line while cutting the clerks who clear it.",
  },
  {
    id: "improper-payments",
    label: "Improper payments",
    aliases: ["improper-payments", "improper payments"],
    definition:
      "Federal money paid to the wrong person, in the wrong amount, or without required documentation. GAO tracks hundreds of billions a year. Not the same as 'fraud' alone; includes paperwork and eligibility errors agencies fail to fix.",
  },
  {
    id: "inspector-general",
    label: "Inspector General",
    aliases: [
      "inspector-general",
      "inspectors general",
      "inspector general",
      "IG capacity",
      "IG office",
      "IG offices",
      "IGs",
      "IG",
    ],
    definition:
      "Independent watchdogs inside agencies who investigate waste, fraud, and abuse. Firing or sidelining IGs weakens the evidence trail on abuse of power.",
  },
  {
    id: "civil-service",
    label: "Civil service",
    aliases: [
      "civil-service independence",
      "civil servants",
      "civil service",
      "career civil servants",
    ],
    definition:
      "The professional workforce hired on merit, not campaign loyalty. Protections exist so experts can say 'that's illegal' without getting fired the next morning. Gutting civil service turns agencies into loyalty shops.",
  },
  {
    id: "merit-system",
    label: "Merit system",
    aliases: [
      "merit-system appeals",
      "merit protections",
      "merit system",
      "merit-system",
    ],
    definition:
      "Rules that federal hiring and firing should turn on qualifications and performance, not politics. Schedule F-style moves punch holes in those rules so 'policy' staff can be removed at will.",
  },
  {
    id: "loyalty-test",
    label: "Loyalty test",
    aliases: ["loyalty tests", "loyalty screens", "loyalty test", "loyalty screen"],
    definition:
      "Screening workers for political obedience instead of competence. Classic authoritarian personnel move: keep the yes-people, purge anyone who might refuse an unlawful order.",
  },
  {
    id: "mass-deportation",
    label: "Mass deportation",
    aliases: [
      "mass deportation infrastructure",
      "mass deportations",
      "mass deportation",
    ],
    definition:
      "Large-scale removal campaigns aimed at millions of people, not case-by-case enforcement. Means huge detention capacity, workplace raids, family separations, and local police pressed into federal immigration roles.",
  },
  {
    id: "title-42",
    label: "Title 42",
    aliases: ["Title 42"],
    definition:
      "A public-health statute used during COVID to rapidly expel migrants at the border without normal asylum processing. Often cited as a template for fast removals even after the health emergency ended.",
  },
  {
    id: "emergency-powers",
    label: "Emergency powers",
    aliases: [
      "national energy emergency",
      "emergency declarations",
      "emergency powers",
      "national emergency",
    ],
    definition:
      "Special authorities a president claims during a declared emergency to move money, rewrite rules, or deploy force faster than Congress usually allows. Real crises exist; 'emergency' can also be a shortcut around normal checks.",
  },
  {
    id: "insurrection-act",
    label: "Insurrection Act",
    aliases: ["Insurrection Act"],
    definition:
      "A statute that lets a president deploy U.S. military domestically to suppress rebellion or enforce federal law when civilian authorities cannot. Extremely rare for good reason: soldiers in the streets is a democracy last resort, not a campaign prop.",
  },
  {
    id: "opm",
    label: "OPM",
    aliases: [
      "Office of Personnel Management",
      "OPM rulemaking",
      "OPM guidance",
      "OPM",
    ],
    definition:
      "Office of Personnel Management: the HR department for the federal workforce. Writes rules on hiring, classification, and Schedule F / Schedule Policy/Career transfers. Whoever controls OPM controls how easy mass firings become.",
  },
  {
    id: "mspb",
    label: "MSPB",
    aliases: [
      "Merit Systems Protection Board",
      "MSPB appeals",
      "MSPB",
    ],
    definition:
      "Merit Systems Protection Board: the independent panel that hears federal employee appeals when someone is fired or demoted unfairly. No quorum means no meaningful hearing, so purge victims have nowhere to go.",
  },
  {
    id: "fec-deadlock",
    label: "FEC deadlock",
    aliases: [
      "FEC deadlock",
      "FEC deadlocks",
      "Federal Election Commission deadlock",
      "FEC",
    ],
    definition:
      "Federal Election Commission: the agency that polices campaign finance. It often deadlocks 3-3 along party lines, which means dark-money cases and disclosure fights sit unresolved while the next election rolls on.",
  },
  {
    id: "dark-money",
    label: "Dark money",
    aliases: ["dark-money", "dark money"],
    definition:
      "Political spending where the true donors stay hidden, usually through nonprofits and shell groups. You see the ad; you cannot see who paid. Makes accountability almost impossible.",
  },
  {
    id: "citizens-united",
    label: "Citizens United",
    aliases: ["Citizens United"],
    definition:
      "2010 Supreme Court decision that unlocked massive independent political spending by corporations and unions. Kitchen-table version: more billionaire megaphones, fewer limits on who can drown out your vote with ads.",
  },
  {
    id: "foia",
    label: "FOIA",
    aliases: [
      "Freedom of Information Act",
      "FOIA fights",
      "FOIA",
    ],
    definition:
      "Freedom of Information Act: the public's right to request federal records. Delays, over-redaction, and fee fights are how agencies slow sunlight.",
  },
  {
    id: "statutory-deadline",
    label: "Statutory deadline",
    aliases: [
      "statutory deadlines",
      "statutory deadline",
    ],
    definition:
      "A date Congress wrote into law for an agency or official to act. Missing it can freeze benefits, stall oversight, or quietly kill a program while headlines look elsewhere.",
  },
  {
    id: "docket",
    label: "Docket",
    aliases: ["civil dockets", "court dockets", "dockets", "docket"],
    definition:
      "The court's official case list and calendar. 'On the docket' means a real filing with deadlines and judges, not a cable-news rumor.",
  },
  {
    id: "floor-vote",
    label: "Floor vote",
    aliases: [
      "House floor",
      "Senate floor",
      "floor votes",
      "floor vote",
      "floor LIVE",
      "on the floor",
    ],
    definition:
      "A recorded vote of the full House or Senate, not just a committee. This is when a bill can actually pass or die in public view.",
  },
  {
    id: "cloture",
    label: "Cloture",
    aliases: ["cloture vote", "cloture"],
    definition:
      "The Senate's tool to end debate and break a filibuster. Usually needs 60 votes. Without cloture, a minority can block most bills forever.",
  },
  {
    id: "continuing-resolution",
    label: "Continuing resolution",
    aliases: [
      "continuing resolutions",
      "continuing resolution",
      "CR funding",
    ],
    definition:
      "A short-term Band-Aid that keeps the government funded at last year's levels when Congress misses a budget deadline. Avoids a shutdown but freezes new priorities and invites last-minute hostage fights.",
  },
  {
    id: "rescission",
    label: "Rescission",
    aliases: [
      "Day One rescission",
      "mass rescission",
      "rescinded orders",
      "rescissions",
      "rescission",
    ],
    definition:
      "Canceling money Congress already approved, or wiping prior executive orders. Budget rescission is a formal clawback fight with Congress; 'Day One rescissions' of EOs erase a predecessor's policy stack overnight.",
  },
  {
    id: "impoundment",
    label: "Impoundment",
    aliases: ["impoundments", "impoundment"],
    definition:
      "When the White House refuses to spend money Congress appropriated. Illegal under the Impoundment Control Act unless Congress agrees. A classic way to starve programs without a new vote.",
  },
  {
    id: "unitary-executive",
    label: "Unitary executive",
    aliases: ["unitary executive theory", "unitary executive"],
    definition:
      "Theory that the president should personally control the entire executive branch, including independent agencies and watchdogs. Used to justify firings, loyalty tests, and ignoring statutory independence.",
  },
  {
    id: "reconciliation",
    label: "Reconciliation",
    aliases: ["budget reconciliation", "reconciliation"],
    definition:
      "Senate fast-track for budget bills that can pass with 51 votes, skipping the 60-vote filibuster. Major tax and spending packages often ride this process.",
  },
  {
    id: "filibuster",
    label: "Filibuster",
    aliases: ["filibusters", "filibuster"],
    definition:
      "Senate delay tactic that effectively requires 60 votes to advance most bills. Defenders call it deliberation; critics call it a permanent minority veto.",
  },
  {
    id: "federal-register",
    label: "Federal Register",
    aliases: ["Federal Register"],
    definition:
      "The government's official daily journal for rules, notices, and executive orders. If it matters for real, it usually shows up here before it shows up in a meme.",
  },
  {
    id: "excepted-service",
    label: "Excepted service",
    aliases: ["excepted-service", "excepted service"],
    definition:
      "Federal jobs outside the normal competitive civil-service hiring track. Schedule F / Schedule Policy/Career moves shove 'policy' roles into excepted status so they can be fired like political staff.",
  },
  {
    id: "at-will",
    label: "At-will",
    aliases: [
      "at-will reclassification",
      "at-will employees",
      "at-will status",
      "at-will staff",
      "at-will roles",
      "at-will",
    ],
    definition:
      "Employment you can lose for almost any reason (or no reason), without the usual civil-service appeal. Turning career experts at-will is how loyalty purges get done.",
  },
  {
    id: "gao",
    label: "GAO",
    aliases: [
      "Government Accountability Office",
      "GAO",
    ],
    definition:
      "Government Accountability Office: Congress's nonpartisan auditor. Scores programs, flags improper payments, and investigates waste. Ignoring GAO is how scandals age into 'everyone knew.'",
  },
  {
    id: "cbo",
    label: "CBO",
    aliases: ["Congressional Budget Office", "CBO"],
    definition:
      "Congressional Budget Office: the scorekeepers who estimate what bills cost and how they hit the deficit. When politicians hate the math, they attack CBO instead of changing the bill.",
  },
  {
    id: "apa",
    label: "APA",
    aliases: [
      "Administrative Procedure Act",
      "APA",
    ],
    definition:
      "Administrative Procedure Act: the basic rulebook for how agencies write regulations (notice, comment, reasoned explanation). Courts use it to strike rushed or arbitrary rules.",
  },
  {
    id: "birthright-citizenship",
    label: "Birthright citizenship",
    aliases: ["birthright citizenship"],
    definition:
      "The 14th Amendment rule that almost everyone born on U.S. soil is a citizen. Attempts to erase it by executive order collide with constitutional text and courts.",
  },
  {
    id: "dpa",
    label: "DPA",
    aliases: [
      "Defense Production Act",
      "DPA waivers",
      "DPA waiver",
      "DPA",
    ],
    definition:
      "Defense Production Act: wartime-style authority to prioritize contracts and reshape supply chains. Useful in real emergencies; easy to abuse as a political industrial-policy cudgel.",
  },
  {
    id: "nspm",
    label: "NSPM",
    aliases: [
      "National Security Presidential Memoranda",
      "National Security Presidential Memorandum",
      "NSPMs",
      "NSPM",
    ],
    definition:
      "National Security Presidential Memorandum: a White House directive on security policy that can reshape agencies without a new statute. Less famous than executive orders, same 'follow this now' force inside government.",
  },
  {
    id: "whistleblower",
    label: "Whistleblower",
    aliases: ["whistleblowers", "whistleblower"],
    definition:
      "A worker who reports waste, fraud, abuse, or illegal orders. Protections exist on paper; retaliatory firings and deadlocked appeal boards are how those protections fail in practice.",
  },
  {
    id: "quorum",
    label: "Quorum",
    aliases: ["lacks quorum", "no quorum", "quorum"],
    definition:
      "The minimum number of members a board or chamber needs to do official business. Starve a watchdog of appointees and it 'lacks quorum,' which means it cannot decide cases.",
  },
  {
    id: "adverse-action",
    label: "Adverse action",
    aliases: [
      "adverse-action appeals",
      "adverse-action protections",
      "adverse action",
      "adverse-action",
    ],
    definition:
      "A serious personnel hit: firing, suspension, demotion, or pay cut. Merit-system rules normally let you appeal; Schedule F-style moves strip those protections for 'policy' roles.",
  },
  {
    id: "probationary",
    label: "Probationary employee",
    aliases: [
      "probationary federal employees",
      "probationary employees",
      "probationary",
    ],
    definition:
      "Newer federal workers still in a trial period with fewer appeal rights. Mass probationary firings are a fast way to shrink agencies before Schedule F paperwork finishes.",
  },
  {
    id: "rif",
    label: "RIF",
    aliases: [
      "reduction in force",
      "RIFs",
      "RIF",
    ],
    definition:
      "Reduction in Force: a formal layoff wave inside government. Can be legitimate downsizing; can also be a paperwork costume for political purges.",
  },
  {
    id: "administrative-state",
    label: "Administrative state",
    aliases: [
      "administrative-state purges",
      "administrative state",
      "administrative-state",
    ],
    definition:
      "The career agencies and experts who actually run programs day to day. 'Drain the administrative state' often means fire the referees so political appointees face less resistance.",
  },
  {
    id: "catch-and-release",
    label: "Catch and release",
    aliases: ["catch-and-release", "catch and release"],
    definition:
      "Political slogan for releasing migrants with notices to appear while cases pend, instead of indefinite detention. Ending it usually means more beds, more raids, and longer family separations.",
  },
  {
    id: "expedited-removal",
    label: "Expedited removal",
    aliases: ["expedited removal"],
    definition:
      "Fast-track deportation with minimal court process for certain recent arrivals. Expanding it inland means more people removed before they ever see a judge.",
  },
  {
    id: "dei",
    label: "DEI",
    aliases: [
      "DEI offices",
      "DEI",
    ],
    definition:
      "Diversity, Equity, and Inclusion programs. Ending them can be a real policy fight; it is also a culture-war banner used to bury quieter rollbacks of civil-rights offices and contracting rules.",
  },
  {
    id: "title-ix",
    label: "Title IX",
    aliases: ["Title IX"],
    definition:
      "The federal law barring sex discrimination in education. Rule changes rewrite how schools handle harassment, sports, and due process for millions of students.",
  },
  {
    id: "aca",
    label: "ACA",
    aliases: [
      "Affordable Care Act",
      "ACA premium tax credits",
      "ACA",
    ],
    definition:
      "Affordable Care Act (Obamacare): the law behind marketplace coverage, pre-existing condition protections, and premium tax credits. Let credits expire and premiums spike for millions of households.",
  },
  {
    id: "nlrb",
    label: "NLRB",
    aliases: ["National Labor Relations Board", "NLRB"],
    definition:
      "National Labor Relations Board: the agency that referees union elections and unfair labor practices. Flip its leadership and worker organizing rules can reverse without Congress passing a new statute.",
  },
  {
    id: "cfpb",
    label: "CFPB",
    aliases: ["Consumer Financial Protection Bureau", "CFPB"],
    definition:
      "Consumer Financial Protection Bureau: the watchdog on banks, lenders, and scams. Pausing enforcement means fewer cops on the beat for junk fees and predatory credit.",
  },
  {
    id: "ice",
    label: "ICE",
    aliases: [
      "Immigration and Customs Enforcement",
      "ICE detention",
      "ICE agents",
      "ICE",
    ],
    definition:
      "Immigration and Customs Enforcement: the agency that detains and deports people inside the U.S. Detention contracts and raid tempo are how 'mass deportation' becomes logistics, not just a slogan.",
  },
  {
    id: "usaid",
    label: "USAID",
    aliases: ["USAID"],
    definition:
      "U.S. Agency for International Development: the main foreign-aid and humanitarian arm. Freezing it without Congress is a way to shut down soft power and oversight overseas overnight.",
  },
  {
    id: "sec",
    label: "SEC",
    aliases: ["Securities and Exchange Commission", "SEC"],
    definition:
      "Securities and Exchange Commission: Wall Street's main cop. Killing climate or fraud disclosure rules means investors and the public see less about corporate risk.",
  },
  {
    id: "fcc",
    label: "FCC",
    aliases: ["Federal Communications Commission", "FCC"],
    definition:
      "Federal Communications Commission: regulates broadcast, broadband, and spectrum. Licensing threats and diversity rollbacks are how political pressure hits what you can watch and who owns the pipe.",
  },
  {
    id: "epa",
    label: "EPA",
    aliases: ["Environmental Protection Agency", "EPA"],
    definition:
      "Environmental Protection Agency: writes and enforces clean air, water, and climate rules. Stays and rollbacks on methane or toxics show up later as asthma, spills, and hotter summers.",
  },
  {
    id: "rider",
    label: "Budget rider",
    aliases: ["year-end riders", "budget riders", "riders", "rider"],
    definition:
      "A policy poison pill attached to a must-pass spending bill. Often the only way a contested idea becomes law without a clean standalone vote.",
  },
  {
    id: "rulemaking",
    label: "Rulemaking",
    aliases: ["quiet rulemaking", "agency rulemaking", "rulemakings", "rulemaking"],
    definition:
      "The formal process agencies use to turn statutes into binding regulations. 'Quiet rulemaking' while the internet fights about culture-war bait is a classic bury-the-lede move.",
  },
  {
    id: "detainer",
    label: "Detainer",
    aliases: ["detainer law", "ICE detainers", "detainers", "detainer"],
    definition:
      "A request from ICE asking local jails to hold someone for pickup. Cooperation agreements and detainer fights decide whether your sheriff becomes a branch office of federal immigration enforcement.",
  },
  {
    id: "14th-amendment",
    label: "14th Amendment",
    aliases: ["14th Amendment", "Fourteenth Amendment"],
    definition:
      "Constitutional amendment guaranteeing birthright citizenship, equal protection, and due process. Birthright fights and equal-protection cases live here.",
  },
  {
    id: "due-process",
    label: "Due process",
    aliases: ["due-process", "due process"],
    definition:
      "The constitutional promise of fair procedures before the government takes your liberty, kids, or status. Mass removals and loyalty firings often skip the boring hearings that make power accountable.",
  },
  {
    id: "oligarchic-capture",
    label: "Oligarchic capture",
    aliases: [
      "oligarchic capture",
      "domestic oligarchic capture",
    ],
    definition:
      "When billionaires and concentrated industries effectively own the rules: dark money, revolving doors, and agencies too weak or too loyal to say no.",
  },
  {
    id: "flood-the-zone",
    label: "Flood the zone",
    aliases: [
      "flood-the-zone",
      "flood the zone",
      "Flood-the-Zone",
    ],
    definition:
      "Overwhelm attention with so many scandals, memes, and culture fights that no single abuse sticks. The point is exhaustion, not persuasion.",
  },
];

/** Longest alias first so multi-word phrases win. */
const sortedAliases: { alias: string; term: GlossaryTerm }[] = glossaryTerms
  .flatMap((term) => term.aliases.map((alias) => ({ alias, term })))
  .sort((a, b) => b.alias.length - a.alias.length);

export function getGlossaryTerm(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.id === id);
}

export function findGlossaryTerm(query: string): GlossaryTerm | undefined {
  const q = query.trim().toLowerCase();
  if (!q) return undefined;
  return (
    glossaryTerms.find((t) => t.id === q || t.label.toLowerCase() === q) ??
    glossaryTerms.find((t) =>
      t.aliases.some((a) => a.toLowerCase() === q)
    )
  );
}

export type GlossaryMatch = {
  start: number;
  end: number;
  term: GlossaryTerm;
  matched: string;
};

/** First non-overlapping glossary matches in text (case-insensitive). */
export function findGlossaryMatches(text: string): GlossaryMatch[] {
  if (!text) return [];
  const lower = text.toLowerCase();
  const taken: boolean[] = Array(text.length).fill(false);
  const matches: GlossaryMatch[] = [];

  for (const { alias, term } of sortedAliases) {
    const needle = alias.toLowerCase();
    let from = 0;
    while (from <= lower.length - needle.length) {
      const idx = lower.indexOf(needle, from);
      if (idx === -1) break;
      const end = idx + needle.length;
      const overlaps = taken.slice(idx, end).some(Boolean);
      const leftOk = idx === 0 || !/[a-z0-9]/i.test(text[idx - 1] ?? "");
      const rightOk =
        end >= text.length || !/[a-z0-9]/i.test(text[end] ?? "");
      if (!overlaps && leftOk && rightOk) {
        for (let i = idx; i < end; i++) taken[i] = true;
        matches.push({
          start: idx,
          end,
          term,
          matched: text.slice(idx, end),
        });
      }
      from = idx + 1;
    }
  }

  return matches.sort((a, b) => a.start - b.start);
}
