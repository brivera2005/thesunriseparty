import { citations } from "./citations";

export interface AccountabilityFact {
  title: string;
  body: string;
  sourceIds: string[];
}

export const accountabilityIntro = {
  title: "Dark Money & Elite Capture",
  subtitle:
    "Who funds the agenda - and what the Blueprint would change. Factual overview with primary sources.",
  paragraphs: [
    "Project 2025 was drafted by think tanks and advocacy groups whose donors are often undisclosed. Citizens United v. FEC (2010) opened the door for unlimited independent political spending by corporations and nonprofits, while FEC enforcement deadlocks and weak disclosure rules let billionaires shape policy without voters seeing the receipts.",
    "Project Sunrise tracks implementation actions; this page tracks the capture architecture - dark money, lobbying, revolving doors, and the safeguards in our Blueprint designed to sever them.",
    "OpenSecrets, the FEC, FOIA.gov, and Congress.gov are the public ledgers we lean on. When disclosure is missing, that absence is itself evidence of a system designed to hide paymasters while amplifying their speech.",
  ],
};

export const citizensUnitedOverview = {
  title: "Citizens United & Post-2010 Spending",
  paragraphs: [
    "In Citizens United v. FEC, the Supreme Court held that independent political expenditures by corporations and unions are protected speech under the First Amendment, striking down limits on corporate electioneering. Super PACs and 501(c)(4) 'social welfare' organizations can now raise and spend unlimited sums - often without disclosing donors to the public.",
    "OpenSecrets and the FEC publish what disclosure exists: super PAC receipts, party committees, and lobbying registrations. But 'dark money' - spending by nonprofits that do not disclose funders - routinely exceeds hundreds of millions per cycle, according to OpenSecrets tracking.",
  ],
  sourceIds: ["citizens_united_scotus", "dark_money_transparency", "fec_campaign_data"],
};

export const blueprintSafeguards = {
  title: "Blueprint Safeguards Against Capture",
  intro:
    "The Progressive Blueprint's irreversible safeguards (SAFE-001 Anti-Corruption Architecture, SAFE-004 Transparency Mandates) would structurally limit elite capture:",
  mechanisms: [
    "Lifetime lobbying ban for former members of Congress and senior executive branch officials",
    "Public financing of federal elections with real-time disclosure of contributions over $200",
    "Independent Office of Public Integrity with direct referral power to federal prosecutors",
    "Mandatory publication of all lobbying contacts within 48 hours",
    "Machine-readable federal spending database updated daily with recipient-level detail",
  ],
  blueprintLinks: [
    { id: "SAFE-001", label: "Anti-Corruption Architecture" },
    { id: "SAFE-004", label: "Transparency Mandates" },
  ],
  sourceIds: ["safeguard_anticorruption", "safeguard_transparency"],
};

export const transparencyDeclassification = {
  title: "Declassification & Public Records",
  intro:
    "Accountability requires enforceable transparency - not selective leaks. These are documented policy gaps, legislative responses, and disclosure rollbacks tied to Blueprint SAFE-004 Transparency Mandates.",
  mandates: [
    {
      title: "Epstein Files Transparency Act",
      body: "Bipartisan legislation in the 119th Congress (H.R. 4405) would require DOJ to release unclassified Epstein investigation records on a fixed timeline. The bill responds to a documented gap: victims and the public cannot audit what was investigated when records stay sealed without statutory deadlines. SAFE-004 would extend this model - mandatory publication timelines for high-public-interest investigations.",
      sourceIds: ["epstein_records_act", "safeguard_transparency"],
    },
    {
      title: "Dark money donor disclosure",
      body: "501(c)(4) 'social welfare' organizations spent hundreds of millions per cycle without naming donors, per OpenSecrets tracking. Treasury and IRS moves to weaken nonprofit disclosure expand those channels. Citizens United did not require anonymity - it struck expenditure limits. Real-time disclosure over $200, in SAFE-004, restores voter visibility without banning speech.",
      sourceIds: ["dark_money_transparency", "irs_dark_money_rule", "fec_campaign_data"],
    },
    {
      title: "FOIA & public records access",
      body: "The Freedom of Information Act lets citizens request federal records; FOIA.gov publishes agency compliance data and backlogs. Litigation - like ACLU FOIA cases on ICE detention expansion - often produces documents agencies would not release voluntarily. SAFE-004 mandates machine-readable spending data and 48-hour lobbying contact publication to reduce FOIA bottlenecks for routine accountability.",
      sourceIds: ["foia_gov", "doj_oip_foia", "aclu_immigration"],
    },
  ],
  blueprintNote:
    "SAFE-004 Transparency Mandates would require daily machine-readable federal spending data, 48-hour lobbying contact publication, whistleblower bounties on recovered fraud, and searchable congressional hearing transcripts within 24 hours.",
  blueprintLinkId: "SAFE-004" as const,
  sourceIds: ["safeguard_transparency", "epstein_records_act", "foia_gov"],
};

export const accountabilityFacts: AccountabilityFact[] = [
  {
    title: "Lobbying disclosure is incomplete",
    body: "The Lobbying Disclosure Act requires registration for direct contacts with covered officials, but revolving-door moves, 'shadow lobbying,' and think-tank influence often fall outside real-time public view. The Blueprint would mandate 48-hour publication of all lobbying contacts.",
    sourceIds: ["safeguard_transparency"],
  },
  {
    title: "FEC enforcement can deadlock",
    body: "The FEC requires four votes among six commissioners for major enforcement actions. Partisan deadlocks have paused investigations and advisory opinions - weakening campaign-finance oversight even when violations are documented.",
    sourceIds: ["fec_enforcement_pause", "fec_campaign_data"],
  },
  {
    title: "Dark money funds policy agendas",
    body: "501(c)(4) organizations can spend unlimited sums on political messaging without disclosing donors. OpenSecrets documents how dark money groups amplify messages aligned with billionaire and corporate interests - including deregulatory and anti-democracy policy pushes.",
    sourceIds: ["dark_money_transparency"],
  },
  {
    title: "Citizens United unlocked unlimited independent spending",
    body: "The Supreme Court's 2010 ruling treated corporate independent expenditures as protected speech. Super PACs and allied nonprofits can now spend without contribution limits. Disclosure gaps - not the First Amendment itself - are what keep voters from seeing who paid.",
    sourceIds: ["citizens_united_scotus", "fec_campaign_data"],
  },
  {
    title: "IRS and nonprofit disclosure rules still hide donors",
    body: "Social-welfare nonprofits can engage in political messaging while shielding donor lists. OpenSecrets tracking shows hundreds of millions in dark money per cycle. SAFE-004's real-time disclosure over $200 would close the anonymity loophole without banning speech.",
    sourceIds: ["dark_money_transparency", "irs_dark_money_rule", "safeguard_transparency"],
  },
  {
    title: "FOIA backlogs delay accountability",
    body: "FOIA.gov publishes agency request portals and annual compliance stats. Chronic backlogs mean journalists and watchdogs wait months or years for records that should be proactive. Machine-readable spending and lobbying-contact publication would shrink the FOIA bottleneck for routine oversight.",
    sourceIds: ["foia_gov", "doj_oip_foia", "safeguard_transparency"],
  },
  {
    title: "Presidential records need enforceable timelines",
    body: "The Presidential Records Act governs custody and eventual public release of White House records. Without statutory deadlines for high-interest investigations and classified-to-unclassified review, transparency depends on political goodwill. CRS explains the PRA framework; SAFE-004 would add publication clocks.",
    sourceIds: ["presidential_records_crs", "epstein_records_act", "safeguard_transparency"],
  },
  {
    title: "Revolving door converts public service into private access",
    body: "Former officials become lobbyists and 'strategic advisors' who sell access rather than register every contact. Lifetime lobbying bans for senior officials (SAFE-001) and 48-hour contact publication (SAFE-004) treat capture as a structural problem, not a resume perk.",
    sourceIds: ["safeguard_anticorruption", "safeguard_transparency"],
  },
];

export const accountabilityExternalLinks = [
  {
    name: "OpenSecrets",
    url: "https://www.opensecrets.org/",
    description: "Campaign finance, lobbying, and dark money research",
  },
  {
    name: "FEC Campaign Finance Data",
    url: "https://www.fec.gov/data/",
    description: "Official federal election committee filings and disclosures",
  },
  {
    name: "FOIA.gov",
    url: "https://www.foia.gov/",
    description: "Federal FOIA request portals and agency compliance statistics",
  },
  {
    name: "Congress.gov - Lobbying Disclosure",
    url: "https://www.congress.gov/",
    description: "Legislative records and lobbying-related bills",
  },
  {
    name: "GAO - What GAO Does",
    url: "https://www.gao.gov/about/what-gao-does",
    description: "Nonpartisan audits and investigations that document waste, fraud, and program failure",
  },
  {
    name: "CRS Reports",
    url: "https://crsreports.congress.gov/",
    description: "Nonpartisan Congressional Research Service analysis for legislators and the public",
  },
  {
    name: "DOJ Office of Information Policy",
    url: "https://www.justice.gov/oip",
    description: "Federal FOIA guidance, compliance reporting, and exemption policy",
  },
] as const;

/** Resolve citation objects for accountability sections */
export function getAccountabilitySources(sourceIds: string[]) {
  return sourceIds
    .map((id) => citations[id as keyof typeof citations])
    .filter(Boolean);
}
