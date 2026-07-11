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

  // Pass 27 accountability
  {
    title: "GAO improper payments dwarf campaign talking points",
    body: "GAO's improper-payments portfolio documents tens of billions in annual payment errors across major programs. Schedule Policy/Career removals that thin career oversight staff raise the risk those errors grow while political messaging claims efficiency.",
    sourceIds: ["gao_improper_payments", "schedule_policy_career_eo_2026", "safeguard_transparency"],
  },
  {
    title: "Fintech deregulation without consumer cops",
    body: "White House E.O.s 14405 and 14406 push fintech-friendly regulatory integration while CFPB and FTC enforcement capacity is paused or narrowed. Innovation without cops on the beat is a gift to predators in the payment stack.",
    sourceIds: ["fintech_eo_2026", "financial_integrity_eo_2026", "cfpb_enforcement_pause"],
  },
  {
    title: "Federal Register is the receipt book",
    body: "Every durable executive restructuring eventually hits the Federal Register. Project Sunrise treats FR publications and White House presidential-action pages as primary evidence - not influencer summaries - because the official journal is where agencies must publish.",
    sourceIds: ["doge_fr_eo", "wh_eo_index_2026", "safeguard_transparency"],
  },
  {
    title: "OpenSecrets and FEC still understate dark money",
    body: "Even with FEC filings and OpenSecrets aggregation, 501(c)(4) anonymity means the public ledger is incomplete by design. SAFE-004's real-time disclosure over $200 closes the gap Citizens United never required to stay dark.",
    sourceIds: ["dark_money_transparency", "fec_campaign_data", "safeguard_transparency"],
  },
  {
    title: "Vaccine-schedule politicization is a public-health capture risk",
    body: "E.O. 14407's peer-country vaccine realignment inserts political framing into CDC scientific recommendation processes. Public health legitimacy depends on transparent evidence reviews, not executive branding exercises.",
    sourceIds: ["vaccine_realign_eo_2026", "cdc_grant_pause"],
  },


  // Pass 28 accountability
  {
    title: "Freedom-to-Fix is an EPA enforcement posture shift",
    body: "The June 29, 2026 presidential memorandum directs EPA guidance on aftermarket emissions repairs and deprioritization of certain tampering cases. DIY branding does not erase the Clean Air Act implications. Track the guidance text, not the slogan.",
    sourceIds: ["freedom_to_fix_memo_2026", "epa_vehicle_emissions_rollback", "safeguard_transparency"],
  },
  {
    title: "NSPM cascade concentrates security policy off-stage",
    body: "NSPM-11 and NSPM-12 add to a mid-2026 stack of national-security presidential memoranda. These instruments can bind agencies with less public process than statutes or ordinary rules. Sunshine is the safeguard.",
    sourceIds: ["nspm_11_2026", "nspm_12_2026", "safeguard_executive"],
  },
  {
    title: "Trade-by-proclamation is still policy",
    body: "Aircraft-parts and phosphate-fertilizer proclamations show industrial and farm policy moving through emergency and import authorities. Congress can reclaim the tariff and emergency lanes or keep rubber-stamping the receipt book.",
    sourceIds: ["aircraft_imports_proclamation_2026", "phosphate_fertilizer_proclamation_2026", "trade_policy_eo"],
  },
  {
    title: "Clemency patterns are accountability data",
    body: "Individual pardons are constitutional. Patterns of allied clemency alongside Jan. 6 and corruption cases are still fair game for public judgment. Absolute power is exactly when character metrics matter.",
    sourceIds: ["buyer_pardon_2026", "jan6_pardons_eo", "safeguard_anticorruption"],
  },
  {
    title: "200+ tracker events are a receipt stack",
    body: "Project Sunrise Pass 28 crosses 200 verified tracker actions. Volume is not vibes: each entry ties to White House, Federal Register, GAO, CRS, or other primary receipts so readers can audit the chain.",
    sourceIds: ["wh_eo_index_2026", "fr_home_2026", "safeguard_transparency"],
  },


  // Pass 30 accountability
  {
    title: "Metals tariffs are industrial policy by proclamation",
    body: "The June 2026 aluminum, steel, and copper tariff-regime proclamation stacks with reciprocal tariffs and aircraft-parts actions. Duty rates are distributional choices with receipts in the Federal Register.",
    sourceIds: ["metals_tariff_proclamation_2026", "reciprocal_tariffs_eo", "aircraft_imports_proclamation_2026"],
  },
  {
    title: "International-organization exits are still foreign policy",
    body: "The January 2026 withdrawal memorandum directs exits from organizations and treaties framed as contrary to U.S. interests. Formality is not consequence: nonparticipation changes facts on the ground.",
    sourceIds: ["intl_orgs_withdrawal_memo_2026", "who_withdrawal", "paris_withdrawal"],
  },
  {
    title: "DPA waivers deserve sunlight",
    body: "Section 303 waivers and DPA delegation adjustments steer industrial priorities. Speed without disclosure is how favors hide inside emergency grammar.",
    sourceIds: ["dpa_303_waiver_2026", "dpa_delegations_eo_2026", "safeguard_executive"],
  },
  {
    title: "Tribal permit denials are federal Indian law",
    body: "Denying a presidential permit for the Kickapoo Traditional Tribe of Texas is not a HOA spat. Track the rationale beside Pacific fishing and lands rollbacks.",
    sourceIds: ["kickapoo_permit_denial_2026", "pacific_fishing_proclamation_2026", "federal_lands_restrictions_eo_2026"],
  },
  {
    title: "240+ tracker events remain a receipt stack",
    body: "Project Sunrise Pass 30 crosses 240 verified tracker actions. Volume is auditability: each entry ties to White House, Federal Register, GAO, CRS, or other primary receipts.",
    sourceIds: ["wh_eo_index_2026", "fr_home_2026", "safeguard_transparency"],
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
