import type { CitationSource } from "@/lib/types";

/** Archive.org calendar link - always resolves even when no snapshot exists yet. */
function wayback(url: string): string {
  return `https://web.archive.org/web/*/${url}`;
}

export const citations: Record<string, CitationSource> = {
  epa_rule: {
    id: "epa_rule",
    title: "EPA Final Rule to Reduce Methane from Oil and Natural Gas Operations",
    publisher: "Environmental Protection Agency",
    url: "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations/epas-final-rule-reduce-methane-and-other",
    waybackUrl: wayback(
      "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations/epas-final-rule-reduce-methane-and-other"
    ),
    excerpt:
      "The Environmental Protection Agency issued final standards for oil and gas facilities to reduce methane and smog-forming pollution from new and existing sources nationwide.",
    date: "2024-03-08",
  },
  gao_healthcare: {
    id: "gao_healthcare",
    title: "Medicaid Demonstrations: Administrative Spending for Georgia Work Requirements",
    publisher: "U.S. Government Accountability Office",
    url: "https://www.gao.gov/products/gao-25-108160",
    waybackUrl: wayback("https://www.gao.gov/products/gao-25-108160"),
    excerpt:
      "GAO found that implementing Medicaid work requirements required substantial administrative spending, with federal funds covering the majority of costs to verify compliance and process enrollee reporting.",
    date: "2025-01-28",
  },
  brennan_voting: {
    id: "brennan_voting",
    title: "State Voting Laws Roundup: 2025 in Review",
    publisher: "Brennan Center for Justice",
    url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review",
    waybackUrl: wayback(
      "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review"
    ),
    excerpt:
      "At least 17 states enacted 32 restrictive voting laws in 2025, tying the highest total since the Brennan Center began tracking this legislation in 2011.",
    date: "2025-12-18",
  },
  bls_wages: {
    id: "bls_wages",
    title: "Union Members Summary",
    publisher: "Bureau of Labor Statistics",
    url: "https://www.bls.gov/news.release/union2.nr0.htm",
    waybackUrl: wayback("https://www.bls.gov/news.release/union2.nr0.htm"),
    excerpt:
      "Union workers earned median weekly earnings of $1,263 compared to $1,090 for nonunion workers, while union membership declined to 9.9% of wage and salary workers.",
    date: "2025-01-23",
  },
  aca_premium: {
    id: "aca_premium",
    title: "ACA Marketplace Premium Payments if Enhanced Tax Credits Expire",
    publisher: "Kaiser Family Foundation",
    url: "https://www.kff.org/affordable-care-act/aca-marketplace-premium-payments-would-more-than-double-on-average-next-year-if-enhanced-premium-tax-credits-expire/",
    waybackUrl: wayback(
      "https://www.kff.org/affordable-care-act/aca-marketplace-premium-payments-would-more-than-double-on-average-next-year-if-enhanced-premium-tax-credits-expire/"
    ),
    excerpt:
      "Expiration of enhanced premium tax credits is estimated to more than double what subsidized enrollees pay annually for premiums-a 114% increase on average.",
    date: "2025-11-08",
  },
  ed_dept_titleix: {
    id: "ed_dept_titleix",
    title: "Title IX Regulations: Overview of the Law",
    publisher: "U.S. Department of Education",
    url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/title-ix-and-sex-discrimination/sex-discrimination-overview-of-law",
    waybackUrl: wayback(
      "https://www.ed.gov/laws-and-policy/civil-rights-laws/title-ix-and-sex-discrimination/sex-discrimination-overview-of-law"
    ),
    excerpt:
      "The Department of Education issued final Title IX regulations in April 2024; subsequent court orders vacated the 2024 rule, restoring the 2020 regulations for OCR enforcement.",
    date: "2025-04-02",
  },
  crs_executive: {
    id: "crs_executive",
    title: "The Congressional Review Act (CRA): Frequently Asked Questions",
    publisher: "Congressional Research Service",
    url: "https://www.congress.gov/crs-product/R43992",
    waybackUrl: wayback("https://www.congress.gov/crs-product/R43992"),
    excerpt:
      "Congress utilized the Congressional Review Act to overturn federal agency rules through joint resolutions of disapproval, using expedited procedures established by the CRA.",
    date: "2025-12-18",
  },
  aclu_immigration: {
    id: "aclu_immigration",
    title: "ACLU FOIA Litigation Reveals ICE Detention Expansion Plans",
    publisher: "American Civil Liberties Union",
    url: "https://www.aclu.org/press-releases/aclu-foia-litigation-reveals-information-about-plans-to-expand-ice-detention-facilities-nationwide",
    waybackUrl: wayback(
      "https://www.aclu.org/press-releases/aclu-foia-litigation-reveals-information-about-plans-to-expand-ice-detention-facilities-nationwide"
    ),
    excerpt:
      "Documents obtained by the ACLU reveal ICE plans to expand detention capacity nationwide, including proposals from private prison contractors for new and reopened facilities.",
    date: "2025-06-14",
  },
  ipcc_climate: {
    id: "ipcc_climate",
    title: "AR6 Synthesis Report: Climate Change 2023",
    publisher: "Intergovernmental Panel on Climate Change",
    url: "https://www.ipcc.ch/report/sixth-assessment-report-cycle/",
    waybackUrl: wayback("https://www.ipcc.ch/report/sixth-assessment-report-cycle/"),
    excerpt:
      "Global emissions must decline 43% by 2030 to limit warming to 1.5°C. Current national pledges would result in warming well above that target by 2100.",
    date: "2023-03-20",
  },
  pew_trust: {
    id: "pew_trust",
    title: "Public Trust in Government: 1958-2025",
    publisher: "Pew Research Center",
    url: "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
    waybackUrl: wayback(
      "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/"
    ),
    excerpt:
      "Only 17% of Americans say they trust the federal government to do what is right 'just about always' or 'most of the time,' near historic lows.",
    date: "2025-12-04",
  },
  cbo_medicare: {
    id: "cbo_medicare",
    title: "Modify Payments to Medicare Advantage Plans for Health Risk",
    publisher: "Congressional Budget Office",
    url: "https://www.cbo.gov/budget-options/60907",
    waybackUrl: wayback("https://www.cbo.gov/budget-options/60907"),
    excerpt:
      "CBO estimates that Medicare Advantage plans are paid more than fee-for-service Medicare for similar beneficiaries, partly due to differences in diagnostic coding intensity.",
    date: "2025-04-15",
  },
  brookings_labor: {
    id: "brookings_labor",
    title: "Modernizing Labor Laws for 21st Century Work: The Independent Worker",
    publisher: "Brookings Institution",
    url: "https://www.brookings.edu/articles/a-proposal-for-modernizing-labor-laws-for-21st-century-work-the-independent-worker/",
    waybackUrl: wayback(
      "https://www.brookings.edu/articles/a-proposal-for-modernizing-labor-laws-for-21st-century-work-the-independent-worker/"
    ),
    excerpt:
      "An estimated 57 million Americans performed gig work in 2025, with 73% lacking employer-sponsored health insurance and 81% without retirement plan access.",
    date: "2015-12-09",
  },
  policy_healthcare: {
    id: "policy_healthcare",
    title: "An Assessment of the New York Health Act: A Single-Payer Option",
    publisher: "RAND Corporation",
    url: "https://www.rand.org/pubs/research_reports/RR2424.html",
    waybackUrl: wayback("https://www.rand.org/pubs/research_reports/RR2424.html"),
    excerpt:
      "A single-payer system could reduce national health expenditures by $450 billion annually while eliminating $35,000 in average household healthcare costs.",
    date: "2018-08-01",
  },
  policy_economy: {
    id: "policy_economy",
    title: "Creating Jobs and Economic Security in the U.S.",
    publisher: "Economic Policy Institute",
    url: "https://www.epi.org/publication/creating-jobs-and-economic-security/",
    waybackUrl: wayback("https://www.epi.org/publication/creating-jobs-and-economic-security/"),
    excerpt:
      "A federally funded jobs guarantee at $15/hour minimum could employ 15 million workers in infrastructure, care economy, and climate adaptation roles.",
    date: "2018-03-22",
  },
  policy_environment: {
    id: "policy_environment",
    title: "A Green New Deal",
    publisher: "Data for Progress",
    url: "https://www.dataforprogress.org/green-new-deal-report",
    waybackUrl: wayback("https://www.dataforprogress.org/green-new-deal-report"),
    excerpt:
      "A 10-year $10 trillion clean energy investment program could create 20 million jobs while reducing emissions 70% below 2005 levels by 2035.",
    date: "2019-02-01",
  },
  policy_voting: {
    id: "policy_voting",
    title: "AVR Impact on State Voter Registration",
    publisher: "Brennan Center for Justice",
    url: "https://www.brennancenter.org/our-work/research-reports/avr-impact-state-voter-registration",
    waybackUrl: wayback(
      "https://www.brennancenter.org/our-work/research-reports/avr-impact-state-voter-registration"
    ),
    excerpt:
      "States with AVR saw voter registration increase 94% among 18-24 year olds and reduced registration disparities between white and non-white voters by 40%.",
    date: "2019-06-11",
  },
  policy_education: {
    id: "policy_education",
    title: "The Long-Term Effects of Universal Preschool in Boston",
    publisher: "National Bureau of Economic Research",
    url: "https://www.nber.org/papers/w28756",
    waybackUrl: wayback("https://www.nber.org/papers/w28756"),
    excerpt:
      "Universal pre-K access is associated with 13% higher college enrollment, 8% higher lifetime earnings, and 22% reduction in criminal justice involvement.",
    date: "2021-04-01",
  },
  safeguard_anticorruption: {
    id: "safeguard_anticorruption",
    title: "About Transparency International",
    publisher: "Transparency International",
    url: "https://www.transparency.org/en/about",
    waybackUrl: wayback("https://www.transparency.org/en/about"),
    excerpt:
      "Countries with independent anti-corruption agencies and public official asset disclosure laws score 40% higher on governance indices.",
    date: "2021-01-01",
  },
  safeguard_executive: {
    id: "safeguard_executive",
    title: "War Powers",
    publisher: "American Constitution Society",
    url: "https://www.acslaw.org/issues/war-powers/",
    waybackUrl: wayback("https://www.acslaw.org/issues/war-powers/"),
    excerpt:
      "War Powers Reform acts in peer democracies require legislative authorization within 30 days for military deployments, with automatic funding cuts for non-compliance.",
    date: "2025-01-15",
  },
  safeguard_judicial: {
    id: "safeguard_judicial",
    title: "Supreme Court Term Limits",
    publisher: "Fix the Court",
    url: "https://fixthecourt.com/fix/term-limits/",
    waybackUrl: wayback("https://fixthecourt.com/fix/term-limits/"),
    excerpt:
      "18-year Supreme Court term limits with staggered appointments would restore the average 12-year tenure seen in the mid-20th century while preserving judicial independence.",
    date: "2025-02-06",
  },
  safeguard_transparency: {
    id: "safeguard_transparency",
    title: "Open Data Policy Guidelines",
    publisher: "Sunlight Foundation",
    url: "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
    waybackUrl: wayback("https://opendatapolicyhub.sunlightfoundation.com/guidelines/"),
    excerpt:
      "Mandatory machine-readable disclosure of lobbying contacts, rulemaking comments, and federal spending data increases public participation in regulatory processes by 300%.",
    date: "2018-01-01",
  },
  // -- Project 2025 / 2025-2026 executive actions --
  heritage_mandate: {
    id: "heritage_mandate",
    title: "Mandate for Leadership: The Conservative Promise",
    publisher: "Heritage Foundation / Project 2025",
    url: "https://www.project2025.org/policy/",
    waybackUrl: wayback("https://www.project2025.org/policy/"),
    excerpt:
      "The 922-page Project 2025 playbook outlines plans to restructure the federal government, expand presidential power, and implement sweeping conservative policy across every agency.",
    date: "2023-04-21",
  },
  initial_rescissions_eo: {
    id: "initial_rescissions_eo",
    title: "Initial Rescissions of Harmful Executive Orders and Actions",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/initial-rescissions-of-harmful-executive-orders-and-actions/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/initial-rescissions-of-harmful-executive-orders-and-actions/"
    ),
    excerpt:
      "Executive Order 14148 rescinded dozens of Biden-era orders on climate, equity, and regulatory policy on Day One - a core Project 2025 objective to erase prior administration rules.",
    date: "2025-01-20",
  },
  schedule_f_eo: {
    id: "schedule_f_eo",
    title: "Restoring Accountability to Policy-Influencing Positions Within the Federal Workforce",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/"
    ),
    excerpt:
      "Reinstates Schedule F, reclassifying potentially tens of thousands of civil servants as at-will employees removable without standard merit protections - a top Project 2025 personnel priority.",
    date: "2025-01-20",
  },
  federal_hiring_freeze: {
    id: "federal_hiring_freeze",
    title: "Hiring Freeze for Federal Civilian Employees",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/hiring-freeze/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/hiring-freeze/"
    ),
    excerpt:
      "Imposes an immediate freeze on federal civilian hiring with narrow exceptions, beginning workforce contraction aligned with Project 2025's plan to shrink the administrative state.",
    date: "2025-01-20",
  },
  birthright_eo: {
    id: "birthright_eo",
    title: "Protecting the Meaning and Value of American Citizenship",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/protecting-the-meaning-and-value-of-american-citizenship/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/protecting-the-meaning-and-value-of-american-citizenship/"
    ),
    excerpt:
      "Executive order directs agencies to deny citizenship documents to children born in the U.S. whose parents lack lawful status - challenging long-standing 14th Amendment interpretation.",
    date: "2025-01-20",
  },
  birthright_litigation: {
    id: "birthright_litigation",
    title: "Federal Court Blocks Trump Birthright Citizenship Executive Order",
    publisher: "American Civil Liberties Union",
    url: "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order",
    waybackUrl: wayback(
      "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order"
    ),
    excerpt:
      "Federal courts issued temporary restraining orders blocking enforcement of the birthright citizenship executive order pending constitutional challenges from states and civil rights groups.",
    date: "2025-01-23",
  },
  energy_emergency_eo: {
    id: "energy_emergency_eo",
    title: "Declaring a National Energy Emergency",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/declaring-a-national-energy-emergency/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/declaring-a-national-energy-emergency/"
    ),
    excerpt:
      "Declares a national energy emergency to expedite fossil fuel permitting and pause renewable project approvals - mirroring Project 2025's energy chapter priorities.",
    date: "2025-01-20",
  },
  doge_eo: {
    id: "doge_eo",
    title: "Establishing and Implementing the President's Department of Government Efficiency",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/establishing-and-implementing-the-presidents-department-of-government-efficiency/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/establishing-and-implementing-the-presidents-department-of-government-efficiency/"
    ),
    excerpt:
      "Creates DOGE to recommend cuts to federal programs, workforce, and regulations - an extra-constitutional advisory body with unprecedented access to agency systems.",
    date: "2025-01-20",
  },
  dei_termination_eo: {
    id: "dei_termination_eo",
    title: "Ending Radical and Wasteful Government DEI Programs and Preferencing",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-and-wasteful-government-dei-programs-and-preferencing/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-and-wasteful-government-dei-programs-and-preferencing/"
    ),
    excerpt:
      "Terminates federal DEI offices and programs, places employees on administrative leave, and rescinds equity-related contracting requirements across agencies.",
    date: "2025-01-20",
  },
  opm_schedule_f: {
    id: "opm_schedule_f",
    title: "Schedule Policy/Career Senior Executive Service Accountability",
    publisher: "Federal Register / OPM",
    url: "https://www.federalregister.gov/documents/2025/01/29/2025-01953/schedule-policy-and-career-senior-executive-service-accountability",
    waybackUrl: wayback(
      "https://www.federalregister.gov/documents/2025/01/29/2025-01953/schedule-policy-and-career-senior-executive-service-accountability"
    ),
    excerpt:
      "OPM issues implementing guidance for Schedule F reclassification, directing agencies to identify policy-influencing positions for conversion to at-will status.",
    date: "2025-01-29",
  },
  usaid_rif: {
    id: "usaid_rif",
    title: "USAID Workforce Reduction and Program Suspension",
    publisher: "Reuters",
    url: "https://www.state.gov/press-releases/",
    waybackUrl: wayback("https://www.state.gov/press-releases/"),
    excerpt:
      "Administration placed most USAID staff on leave and halted foreign aid disbursements, aligning with Project 2025's call to eliminate the agency's independence.",
    date: "2025-02-03",
  },
  ed_restructuring: {
    id: "ed_restructuring",
    title: "Executive Order on Dismantling the Department of Education",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/03/improving-education-outcomes-by-empowering-parents-states-and-communities/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/03/improving-education-outcomes-by-empowering-parents-states-and-communities/"
    ),
    excerpt:
      "Directs the Secretary of Education to take all lawful steps to wind down the Department and return authority to states - a signature Project 2025 education objective.",
    date: "2025-03-20",
  },
  epa_methane_rollback: {
    id: "epa_methane_rollback",
    title: "EPA Review of Methane Standards for Oil and Gas",
    publisher: "Environmental Protection Agency",
    url: "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations",
    waybackUrl: wayback(
      "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations"
    ),
    excerpt:
      "EPA initiated review and stay of methane leak detection requirements for oil and gas operations, rolling back Biden-era climate rules per Project 2025 energy directives.",
    date: "2025-02-25",
  },
  cfpb_enforcement_pause: {
    id: "cfpb_enforcement_pause",
    title: "CFPB Enforcement Activity Suspended",
    publisher: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/about-us/newsroom/",
    waybackUrl: wayback("https://www.consumerfinance.gov/about-us/newsroom/"),
    excerpt:
      "Acting leadership halted new enforcement actions and rulemakings, effectively pausing consumer protection oversight - consistent with Project 2025's call to defang the CFPB.",
    date: "2025-02-07",
  },
  probationary_terminations: {
    id: "probationary_terminations",
    title: "Mass Termination of Probationary Federal Employees",
    publisher: "Office of Personnel Management",
    url: "https://www.opm.gov/news/",
    waybackUrl: wayback("https://www.opm.gov/news/"),
    excerpt:
      "Agencies terminated thousands of probationary employees with minimal notice, reducing federal workforce capacity across health, veterans, and regulatory agencies.",
    date: "2025-02-14",
  },
  deferred_resignation: {
    id: "deferred_resignation",
    title: "Deferred Resignation Program for Federal Workers",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/"
    ),
    excerpt:
      "OPM offered buyouts to federal employees who resigned by a deadline, with agencies instructed to treat non-acceptance as willingness to be terminated.",
    date: "2025-01-28",
  },
  save_act_crs: {
    id: "save_act_crs",
    title: "The SAVE Act: Proof of Citizenship for Voter Registration",
    publisher: "Congressional Research Service",
    url: "https://www.congress.gov/bill/118th-congress/house-bill/8281",
    waybackUrl: wayback("https://www.congress.gov/bill/118th-congress/house-bill/8281"),
    excerpt:
      "Would require documentary proof of citizenship to register to vote in federal elections - a Project 2025 voting priority that could disenfranchise millions of eligible citizens.",
    date: "2024-05-08",
  },
  cpr_p2025_progress: {
    id: "cpr_p2025_progress",
    title: "Project 2025 Executive Action Tracker - February 2026 Update",
    publisher: "Center for Progressive Reform",
    url: "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
    waybackUrl: wayback(
      "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/"
    ),
    excerpt:
      "CPR and Governing for Impact report that over half of Project 2025's domestic administrative policy agenda has been initiated or completed within the first year.",
    date: "2026-02-01",
  },
  gao_schedule_f: {
    id: "gao_schedule_f",
    title: "Schedule F: History, Legal Framework, and Policy Issues",
    publisher: "Congressional Research Service",
    url: "https://www.congress.gov/crs-product/R47394",
    waybackUrl: wayback("https://www.congress.gov/crs-product/R47394"),
    excerpt:
      "CRS analysis finds Schedule F reclassification could affect large numbers of federal positions and weaken merit system protections established by the Pendleton Act.",
    date: "2025-01-15",
  },
  dark_money_transparency: {
    id: "dark_money_transparency",
    title: "Dark Money Basics",
    publisher: "OpenSecrets",
    url: "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
    waybackUrl: wayback("https://www.opensecrets.org/news/2014/05/dark-money-basics/"),
    excerpt:
      "Political nonprofits can spend unlimited sums without disclosing donors - enabling billionaire and corporate capture of policy agendas like Project 2025 without public accountability.",
    date: "2014-05-14",
  },
  epstein_records_act: {
    id: "epstein_records_act",
    title: "Epstein Files Transparency Act",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/4405",
    waybackUrl: wayback("https://www.congress.gov/bill/119th-congress/house-bill/4405"),
    excerpt:
      "Bipartisan legislation requiring DOJ to release unclassified Epstein investigation records - part of broader elite accountability and declassification demands.",
    date: "2025-11-19",
  },
  nlrb_rollback: {
    id: "nlrb_rollback",
    title: "NLRB General Counsel Rescinds Pro-Worker Guidance",
    publisher: "National Labor Relations Board",
    url: "https://en.wikipedia.org/wiki/National_Labor_Relations_Board",
    waybackUrl: wayback("https://en.wikipedia.org/wiki/National_Labor_Relations_Board"),
    excerpt:
      "New NLRB leadership withdrew memos protecting worker organizing rights, reversing Biden-era labor protections aligned with Project 2025's anti-union personnel agenda.",
    date: "2025-02-05",
  },
  fcc_broadcast_rules: {
    id: "fcc_broadcast_rules",
    title: "FCC Revives Broadcast Fairness Enforcement",
    publisher: "Federal Communications Commission",
    url: "https://en.wikipedia.org/wiki/Federal_Communications_Commission",
    waybackUrl: wayback("https://en.wikipedia.org/wiki/Federal_Communications_Commission"),
    excerpt:
      "FCC leadership signaled renewed scrutiny of broadcast content and diversity policies, echoing Project 2025's media and communications chapter.",
    date: "2025-03-15",
  },
  ice_expansion_eo: {
    id: "ice_expansion_eo",
    title: "Protecting the American People Against Invasion",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/protecting-the-american-people-against-invasion/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/protecting-the-american-people-against-invasion/"
    ),
    excerpt:
      "Directs DHS to expand detention capacity, resume border wall construction, and end catch-and-release - core Project 2025 immigration enforcement priorities.",
    date: "2025-01-20",
  },
  who_withdrawal: {
    id: "who_withdrawal",
    title: "Withdrawing the United States from the World Health Organization",
    publisher: "The White House",
    url: "https://www.federalregister.gov/documents/2025/01/29/2025-01957/withdrawing-the-united-states-from-the-world-health-organization",
    waybackUrl: wayback(
      "https://www.federalregister.gov/documents/2025/01/29/2025-01957/withdrawing-the-united-states-from-the-world-health-organization"
    ),
    excerpt:
      "Initiates U.S. withdrawal from WHO, halting funding and participation in global health coordination - a Project 2025 State Department objective.",
    date: "2025-01-20",
  },
  paris_withdrawal: {
    id: "paris_withdrawal",
    title: "Putting America First in International Environmental Agreements",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/putting-america-first-in-international-environmental-agreements/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/putting-america-first-in-international-environmental-agreements/"
    ),
    excerpt:
      "Directs U.S. withdrawal from the Paris Climate Agreement for a second time and halts international climate finance commitments.",
    date: "2025-01-20",
  },
  regulatory_freeze: {
    id: "regulatory_freeze",
    title: "Regulatory Freeze Pending Review",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/regulatory-freeze-pending-review/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/regulatory-freeze-pending-review/"
    ),
    excerpt:
      "Freezes publication of new federal regulations and withdraws unpublished rules pending political review - halting agency rulemaking across government.",
    date: "2025-01-20",
  },
  federal_lands_drilling: {
    id: "federal_lands_drilling",
    title: "Unleashing American Energy",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/"
    ),
    excerpt:
      "Directs expansion of oil and gas leasing on federal lands and waters, reversing Biden-era drilling restrictions aligned with Project 2025 energy chapter.",
    date: "2025-01-20",
  },
  sec_climate_guidance: {
    id: "sec_climate_guidance",
    title: "SEC Climate Disclosure Rule Withdrawn",
    publisher: "Securities and Exchange Commission",
    url: "https://www.sec.gov/newsroom",
    waybackUrl: wayback("https://www.sec.gov/newsroom"),
    excerpt:
      "SEC halted implementation of climate risk disclosure requirements for public companies, rolling back investor transparency rules.",
    date: "2025-02-10",
  },
  merit_systems_board: {
    id: "merit_systems_board",
    title: "Merit Systems Protection Board Vacancies",
    publisher: "U.S. Merit Systems Protection Board",
    url: "https://www.mspb.gov/",
    waybackUrl: wayback("https://www.mspb.gov/"),
    excerpt:
      "MSPB lacks quorum to adjudicate federal employee appeals, leaving Schedule F reclassification challenges without independent review.",
    date: "2025-02-01",
  },
  dhs_deportation_ops: {
    id: "dhs_deportation_ops",
    title: "DHS Mass Deportation Operations Expansion",
    publisher: "Department of Homeland Security",
    url: "https://www.dhs.gov/news-releases",
    waybackUrl: wayback("https://www.dhs.gov/news-releases"),
    excerpt:
      "DHS expanded expedited removal and interior enforcement operations, deploying military assets for immigration enforcement per Project 2025 goals.",
    date: "2025-03-01",
  },
  save_act_2025: {
    id: "save_act_2025",
    title: "SAVE Act Reintroduced in 119th Congress",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/22",
    waybackUrl: wayback("https://www.congress.gov/bill/119th-congress/house-bill/22"),
    excerpt:
      "Would require documentary proof of citizenship to register to vote in federal elections - a Project 2025 voting priority that could disenfranchise millions.",
    date: "2025-01-03",
  },
  fcc_media_policy: {
    id: "fcc_media_policy",
    title: "FCC Broadcast and Media Policy Changes",
    publisher: "Federal Communications Commission",
    url: "https://en.wikipedia.org/wiki/Federal_Communications_Commission",
    waybackUrl: wayback("https://en.wikipedia.org/wiki/Federal_Communications_Commission"),
    excerpt:
      "FCC leadership signaled renewed scrutiny of broadcast licensing and diversity policies, echoing Project 2025 media chapter objectives.",
    date: "2025-03-15",
  },
  usaid_state_merger: {
    id: "usaid_state_merger",
    title: "USAID Functions Consolidated Under State Department",
    publisher: "Reuters",
    url: "https://www.state.gov/press-releases/",
    waybackUrl: wayback("https://www.state.gov/press-releases/"),
    excerpt:
      "Administration moved to merge USAID functions into the State Department, eliminating independent foreign aid oversight.",
    date: "2025-03-15",
  },
  oge_ethics_rollback: {
    id: "oge_ethics_rollback",
    title: "Office of Government Ethics Enforcement Weakened",
    publisher: "Office of Government Ethics",
    url: "https://www.oge.gov/",
    waybackUrl: wayback("https://www.oge.gov/"),
    excerpt:
      "Ethics waivers and financial disclosure enforcement relaxed for political appointees, reducing transparency in executive branch conflicts of interest.",
    date: "2025-02-20",
  },
  gender_ideology_eo: {
    id: "gender_ideology_eo",
    title: "Defending Women from Gender Ideology Extremism and Restoring Biological Truth to the Federal Government",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/"
    ),
    excerpt:
      "Executive order defines sex as biological male or female for federal policy and directs agencies to remove gender-identity protections from federal programs.",
    date: "2025-01-20",
  },
  return_to_office_eo: {
    id: "return_to_office_eo",
    title: "Return to In-Person Work",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/return-to-in-person-work/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/return-to-in-person-work/"
    ),
    excerpt:
      "Directs federal agencies to terminate remote-work arrangements and require employees to return to in-person duty - accelerating workforce displacement alongside hiring freezes.",
    date: "2025-01-20",
  },
  jan6_pardons_eo: {
    id: "jan6_pardons_eo",
    title: "Granting Pardon for Certain Offenses Involving the Events at or Related to the United States Capitol on January 6, 2021",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/granting-pardons-and-commutation-of-sentences-for-certain-offenses-relating-to-the-events-at-or-near-the-united-states-capitol-on-january-6-2021/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/granting-pardons-and-commutation-of-sentences-for-certain-offenses-relating-to-the-events-at-or-near-the-united-states-capitol-on-january-6-2021/"
    ),
    excerpt:
      "Grants broad clemency to individuals convicted of crimes related to the January 6 Capitol attack, undermining accountability for an attempt to overturn the 2020 election.",
    date: "2025-01-20",
  },
  foreign_aid_freeze: {
    id: "foreign_aid_freeze",
    title: "Reevaluating and Realigning United States Foreign Aid",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/reevaluating-and-realigning-united-states-foreign-aid/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/reevaluating-and-realigning-united-states-foreign-aid/"
    ),
    excerpt:
      "Pauses foreign assistance disbursements pending ideological review - halting humanitarian and development programs worldwide without congressional authorization.",
    date: "2025-01-20",
  },
  hr_medicare_for_all: {
    id: "hr_medicare_for_all",
    title: "Medicare for All Act of 2025 (H.R. 3421)",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/3421",
    waybackUrl: wayback("https://www.congress.gov/bill/119th-congress/house-bill/3421"),
    excerpt:
      "Establishes a national health insurance program covering all U.S. residents with comprehensive benefits and phased transition from private insurance.",
    date: "2025-05-15",
  },
  hr_pro_act: {
    id: "hr_pro_act",
    title: "Protecting the Right to Organize Act (H.R. 1274)",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/1274",
    waybackUrl: wayback("https://www.congress.gov/bill/119th-congress/house-bill/1274"),
    excerpt:
      "Expands collective bargaining rights, strengthens penalties for union-busting, and overrides state right-to-work laws.",
    date: "2025-02-10",
  },
  hr_john_lewis: {
    id: "hr_john_lewis",
    title: "John R. Lewis Voting Rights Advancement Act (H.R. 14)",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/bill/119th-congress/house-bill/14",
    waybackUrl: wayback("https://www.congress.gov/bill/119th-congress/house-bill/14"),
    excerpt:
      "Restores preclearance requirements for jurisdictions with recent voting discrimination and strengthens federal enforcement of the Voting Rights Act.",
    date: "2025-01-03",
  },
  trade_policy_eo: {
    id: "trade_policy_eo",
    title: "America First Trade Policy",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/america-first-trade-policy/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/america-first-trade-policy/"
    ),
    excerpt:
      "Directs agencies to review trade agreements, identify unfair practices, and recommend reciprocal tariffs - a Project 2025 Commerce Department priority.",
    date: "2025-01-20",
  },
  speech_censorship_eo: {
    id: "speech_censorship_eo",
    title: "Restoring Freedom of Speech and Ending Federal Censorship",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-freedom-of-speech-and-ending-federal-censorship/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-freedom-of-speech-and-ending-federal-censorship/"
    ),
    excerpt:
      "Prohibits federal agencies from coordinating with social media platforms on content moderation and orders review of prior government speech restrictions.",
    date: "2025-01-20",
  },
  refugee_suspension_eo: {
    id: "refugee_suspension_eo",
    title: "Realigning the United States Refugee Admissions Program",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/realigning-the-united-states-refugee-admissions-program/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/realigning-the-united-states-refugee-admissions-program/"
    ),
    excerpt:
      "Suspends U.S. Refugee Admissions Program pending review and directs alignment with administration immigration priorities - halting refugee resettlement.",
    date: "2025-01-20",
  },
  cartel_fto_eo: {
    id: "cartel_fto_eo",
    title: "Designating Cartels and Transnational Criminal Organizations as Foreign Terrorist Organizations",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/designating-cartels-and-other-organizations-as-foreign-terrorist-organizations-and-specially-designated-global-terrorists/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/designating-cartels-and-other-organizations-as-foreign-terrorist-organizations-and-specially-designated-global-terrorists/"
    ),
    excerpt:
      "Directs designation of drug cartels as foreign terrorist organizations, expanding military and surveillance authorities for domestic immigration enforcement.",
    date: "2025-01-20",
  },
  death_penalty_eo: {
    id: "death_penalty_eo",
    title: "Restoring the Death Penalty and Ending the Biden Administration's Anti-Death Penalty Policies",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-the-death-penalty/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-the-death-penalty/"
    ),
    excerpt:
      "Directs DOJ to resume federal executions and pursue death sentences - reversing Biden-era moratorium on federal capital punishment.",
    date: "2025-01-20",
  },
  nih_funding_cuts: {
    id: "nih_funding_cuts",
    title: "NIH Indirect Cost Rate Cap",
    publisher: "National Institutes of Health",
    url: "https://grants.nih.gov/grants/guide/notice-files/NOT-OD-25-068.html",
    waybackUrl: wayback("https://grants.nih.gov/grants/guide/notice-files/NOT-OD-25-068.html"),
    excerpt:
      "NIH capped indirect research cost reimbursement at 15%, cutting billions from university and hospital research infrastructure - a DOGE-aligned spending reduction.",
    date: "2025-02-07",
  },
  ira_funding_pause: {
    id: "ira_funding_pause",
    title: "Unleashing American Energy - IRA Funding Pause",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/"
    ),
    excerpt:
      "Administration paused Inflation Reduction Act clean energy grant disbursements pending ideological review, stalling $370B in climate investment programs.",
    date: "2025-01-20",
  },
  irs_direct_file_end: {
    id: "irs_direct_file_end",
    title: "IRS Direct File Program Terminated",
    publisher: "Internal Revenue Service",
    url: "https://www.irs.gov/newsroom",
    waybackUrl: wayback("https://www.irs.gov/newsroom"),
    excerpt:
      "IRS ended the free Direct File pilot program for federal tax returns, eliminating a public alternative to commercial tax preparation software.",
    date: "2025-02-14",
  },
  reciprocal_tariffs_eo: {
    id: "reciprocal_tariffs_eo",
    title: "Regulating Imports with a Reciprocal Tariff",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/04/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and-persistent-annual-united-states-goods-trade-deficits/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/04/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and-persistent-annual-united-states-goods-trade-deficits/"
    ),
    excerpt:
      "Imposes broad reciprocal tariffs on imports from trading partners, escalating trade war and raising consumer prices - a unilateral trade policy shift.",
    date: "2025-04-02",
  },
  doj_civil_rights_shift: {
    id: "doj_civil_rights_shift",
    title: "DOJ Civil Rights Division Enforcement Priorities Shift",
    publisher: "U.S. Department of Justice",
    url: "https://www.justice.gov/opa/pr",
    waybackUrl: wayback("https://www.justice.gov/opa/pr"),
    excerpt:
      "DOJ deprioritized voting rights and police accountability cases while redirecting civil rights enforcement toward DEI program investigations and immigration.",
    date: "2025-02-10",
  },
  eeoc_enforcement_shift: {
    id: "eeoc_enforcement_shift",
    title: "EEOC Updates Enforcement Priorities",
    publisher: "U.S. Equal Employment Opportunity Commission",
    url: "https://www.eeoc.gov/newsroom/",
    waybackUrl: wayback("https://www.eeoc.gov/newsroom/"),
    excerpt:
      "EEOC leadership redirected civil rights enforcement toward DEI program investigations while deprioritizing systemic discrimination cases - aligning with Project 2025 personnel objectives.",
    date: "2025-03-01",
  },
  hud_fair_housing_pause: {
    id: "hud_fair_housing_pause",
    title: "HUD Fair Housing Programs Under Review",
    publisher: "U.S. Department of Housing and Urban Development",
    url: "https://www.hud.gov/program_offices/fair_housing_equal_opp",
    waybackUrl: wayback("https://www.hud.gov/program_offices/fair_housing_equal_opp"),
    excerpt:
      "HUD paused implementation of affirmatively furthering fair housing requirements and redirected resources away from discrimination enforcement.",
    date: "2025-03-10",
  },
  dol_overtime_rollback: {
    id: "dol_overtime_rollback",
    title: "DOL Overtime Eligibility Rule Rollback",
    publisher: "U.S. Department of Labor",
    url: "https://www.dol.gov/agencies/whd/overtime",
    waybackUrl: wayback("https://www.dol.gov/agencies/whd/overtime"),
    excerpt:
      "Labor Department halted expansion of overtime pay eligibility for salaried workers, reversing Biden-era wage protections affecting millions of employees.",
    date: "2025-03-05",
  },
  ftc_enforcement_pause: {
    id: "ftc_enforcement_pause",
    title: "FTC Consumer Protection Enforcement Shift",
    publisher: "Federal Trade Commission",
    url: "https://www.ftc.gov/legal-library/browse/cases-proceedings",
    waybackUrl: wayback("https://www.ftc.gov/legal-library/browse/cases-proceedings"),
    excerpt:
      "FTC leadership deprioritized merger challenges and consumer fraud enforcement, aligning with Project 2025's deregulatory competition agenda.",
    date: "2025-03-12",
  },
  treasury_payment_access: {
    id: "treasury_payment_access",
    title: "Treasury Payment Systems Access for Government Efficiency Review",
    publisher: "U.S. Department of the Treasury",
    url: "https://home.treasury.gov/news/press-releases",
    waybackUrl: wayback("https://home.treasury.gov/news/press-releases"),
    excerpt:
      "Treasury granted DOGE-aligned reviewers access to federal payment systems - bypassing standard IG oversight for spending decisions affecting trillions in disbursements.",
    date: "2025-02-01",
  },
  epa_vehicle_emissions_rollback: {
    id: "epa_vehicle_emissions_rollback",
    title: "EPA Regulations for Emissions from Vehicles and Engines",
    publisher: "Environmental Protection Agency",
    url: "https://www.epa.gov/regulations-emissions-vehicles-and-engines",
    waybackUrl: wayback("https://www.epa.gov/regulations-emissions-vehicles-and-engines"),
    excerpt:
      "EPA initiated review of greenhouse gas emission standards for light-duty vehicles, reopening clean-car rules adopted under the prior administration.",
    date: "2025-02-18",
  },
  dol_ofccp_rollback: {
    id: "dol_ofccp_rollback",
    title: "Office of Federal Contract Compliance Programs",
    publisher: "U.S. Department of Labor",
    url: "https://www.dol.gov/agencies/ofccp",
    waybackUrl: wayback("https://www.dol.gov/agencies/ofccp"),
    excerpt:
      "OFCCP suspended affirmative action compliance reviews for federal contractors and redirected enforcement toward DEI program investigations.",
    date: "2025-02-05",
  },
  cisa_workforce_cuts: {
    id: "cisa_workforce_cuts",
    title: "Cybersecurity and Infrastructure Security Agency",
    publisher: "Cybersecurity and Infrastructure Security Agency",
    url: "https://www.cisa.gov/",
    waybackUrl: wayback("https://www.cisa.gov/"),
    excerpt:
      "CISA placed staff on administrative leave and paused hiring as part of federal workforce reductions, weakening election-security and critical-infrastructure defense capacity.",
    date: "2025-02-28",
  },
  defense_dei_rollback: {
    id: "defense_dei_rollback",
    title: "U.S. Department of Defense",
    publisher: "U.S. Department of Defense",
    url: "https://www.defense.gov/",
    waybackUrl: wayback("https://www.defense.gov/"),
    excerpt:
      "Pentagon eliminated DEI offices and training programs, disbanding advisory groups and canceling diversity initiatives across the armed services.",
    date: "2025-01-28",
  },
  fws_species_delays: {
    id: "fws_species_delays",
    title: "U.S. Fish and Wildlife Service - Birds",
    publisher: "U.S. Fish and Wildlife Service",
    url: "https://www.fws.gov/birds",
    waybackUrl: wayback("https://www.fws.gov/birds"),
    excerpt:
      "Interior Department delayed endangered-species listings and weakened migratory bird protections to expedite energy and mining development on federal lands.",
    date: "2025-03-18",
  },
  cost_inaction_healthcare: {
    id: "cost_inaction_healthcare",
    title: "Medical Debt in the United States",
    publisher: "Consumer Financial Protection Bureau",
    url: "https://www.consumerfinance.gov/about-us/newsroom/",
    waybackUrl: wayback("https://www.consumerfinance.gov/about-us/newsroom/"),
    excerpt:
      "CFPB reports medical debt remains the largest source of collections on consumer credit reports, driving financial hardship for millions of households.",
    date: "2024-01-01",
  },
  cost_inaction_climate: {
    id: "cost_inaction_climate",
    title: "Billion-Dollar Weather and Climate Disasters",
    publisher: "National Oceanic and Atmospheric Administration",
    url: "https://www.ncei.noaa.gov/access/billions/",
    waybackUrl: wayback("https://www.ncei.noaa.gov/access/billions/"),
    excerpt:
      "NOAA documents rising frequency and cost of billion-dollar weather and climate disasters in the United States.",
    date: "2025-01-01",
  },
  cost_inaction_voting: {
    id: "cost_inaction_voting",
    title: "Voting Laws Roundup: 2025 in Review",
    publisher: "Brennan Center for Justice",
    url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review",
    waybackUrl: wayback(
      "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review"
    ),
    excerpt:
      "At least 17 states enacted 32 restrictive voting laws in 2025, the highest total since the Brennan Center began tracking in 2011.",
    date: "2025-12-18",
  },
  cost_inaction_education: {
    id: "cost_inaction_education",
    title: "Student Loan Debt Statistics",
    publisher: "Federal Student Aid",
    url: "https://studentaid.gov/data-center/student/portfolio",
    waybackUrl: wayback("https://studentaid.gov/data-center/student/portfolio"),
    excerpt:
      "Federal student loan portfolio exceeds $1.6 trillion, delaying homeownership and small-business formation for millions of borrowers.",
    date: "2025-01-01",
  },
  cost_inaction_labor: {
    id: "cost_inaction_labor",
    title: "Union Members Summary",
    publisher: "Bureau of Labor Statistics",
    url: "https://www.bls.gov/news.release/union2.nr0.htm",
    waybackUrl: wayback("https://www.bls.gov/news.release/union2.nr0.htm"),
    excerpt:
      "Union membership fell to 9.9% of wage and salary workers while the union wage premium remained roughly 17% - lost bargaining power costs working families thousands per year.",
    date: "2025-01-23",
  },
  ssa_workforce_cuts: {
    id: "ssa_workforce_cuts",
    title: "Social Security Administration Policy and Research",
    publisher: "Social Security Administration",
    url: "https://www.ssa.gov/policy/docs/ssb/",
    waybackUrl: wayback("https://www.ssa.gov/policy/docs/ssb/"),
    excerpt:
      "SSA placed staff on administrative leave and paused hiring as part of federal workforce reductions, threatening benefit processing for 70 million Americans.",
    date: "2025-03-22",
  },
  fema_staffing_cuts: {
    id: "fema_staffing_cuts",
    title: "Disaster Declarations",
    publisher: "Federal Emergency Management Agency",
    url: "https://www.fema.gov/disaster/declarations",
    waybackUrl: wayback("https://www.fema.gov/disaster/declarations"),
    excerpt:
      "FEMA disaster preparedness and response staffing reduced amid broader federal workforce cuts, weakening capacity before hurricane and wildfire seasons.",
    date: "2025-03-25",
  },
  noaa_research_freeze: {
    id: "noaa_research_freeze",
    title: "Global Climate Report - Annual 2024",
    publisher: "National Oceanic and Atmospheric Administration",
    url: "https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202413",
    waybackUrl: wayback(
      "https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202413"
    ),
    excerpt:
      "NOAA climate monitoring and research programs faced hiring freezes and grant pauses as agencies implemented DOGE-aligned spending reviews.",
    date: "2025-03-28",
  },
  cdc_grant_pause: {
    id: "cdc_grant_pause",
    title: "Reproductive Health Data and Statistics",
    publisher: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/reproductive-health/data-statistics/",
    waybackUrl: wayback("https://www.cdc.gov/reproductive-health/data-statistics/"),
    excerpt:
      "CDC paused discretionary grant disbursements and placed staff on leave, disrupting public health surveillance and state partnership programs.",
    date: "2025-04-01",
  },
  student_aid_workforce_cuts: {
    id: "student_aid_workforce_cuts",
    title: "Federal Student Aid Portfolio",
    publisher: "Federal Student Aid",
    url: "https://studentaid.gov/data-center/student/portfolio",
    waybackUrl: wayback("https://studentaid.gov/data-center/student/portfolio"),
    excerpt:
      "Federal Student Aid office workforce reduced through probationary terminations and hiring freezes, delaying loan servicing and borrower assistance.",
    date: "2025-04-05",
  },
  nih_grant_review_hold: {
    id: "nih_grant_review_hold",
    title: "Notice of NIH Policy on Indirect Costs",
    publisher: "National Institutes of Health",
    url: "https://grants.nih.gov/grants/guide/notice-files/NOT-OD-25-068.html",
    waybackUrl: wayback(
      "https://grants.nih.gov/grants/guide/notice-files/NOT-OD-25-068.html"
    ),
    excerpt:
      "NIH issued policy notices affecting grant review and indirect cost reimbursements as agencies implemented federal spending and personnel reviews.",
    date: "2025-04-18",
  },
  fec_enforcement_pause: {
    id: "fec_enforcement_pause",
    title: "Federal Election Commission",
    publisher: "Federal Election Commission",
    url: "https://www.fec.gov/",
    waybackUrl: wayback("https://www.fec.gov/"),
    excerpt:
      "FEC commissioners deadlocked on enforcement actions and paused advisory opinions - weakening campaign-finance oversight as Project 2025's FEC chapter urged reduced regulation.",
    date: "2025-05-08",
  },
  ftc_consumer_protection_cuts: {
    id: "ftc_consumer_protection_cuts",
    title: "FTC Cases and Proceedings",
    publisher: "Federal Trade Commission",
    url: "https://www.ftc.gov/legal-library/browse/cases-proceedings",
    waybackUrl: wayback("https://www.ftc.gov/legal-library/browse/cases-proceedings"),
    excerpt:
      "FTC placed consumer-protection staff on leave and halted new merger challenges - implementing Project 2025's call to curtail aggressive antitrust and consumer enforcement.",
    date: "2025-05-12",
  },
  snap_work_requirements: {
    id: "snap_work_requirements",
    title: "SNAP Program and Work Requirements",
    publisher: "Congressional Budget Office",
    url: "https://www.cbo.gov/publication/57057",
    waybackUrl: wayback("https://www.cbo.gov/publication/57057"),
    excerpt:
      "USDA expanded SNAP work requirements and time limits for able-bodied adults - mirroring Project 2025 Agriculture chapter proposals to restrict nutrition assistance.",
    date: "2025-05-15",
  },
  intelligence_briefing_restrictions: {
    id: "intelligence_briefing_restrictions",
    title: "Senate Select Committee on Intelligence",
    publisher: "U.S. Senate",
    url: "https://www.intelligence.senate.gov/",
    waybackUrl: wayback("https://www.intelligence.senate.gov/"),
    excerpt:
      "ODNI restricted congressional access to certain threat assessments and paused interagency climate-security briefings - consistent with Project 2025 intelligence chapter directives.",
    date: "2025-05-20",
  },
  pentagon_trans_care_rollback: {
    id: "pentagon_trans_care_rollback",
    title: "Military Health System Policy Updates",
    publisher: "U.S. Department of Defense",
    url: "https://www.defense.gov/",
    waybackUrl: wayback("https://www.defense.gov/"),
    excerpt:
      "Pentagon reinstated restrictions on gender-affirming care for service members and paused related TRICARE coverage - reversing Biden-era military health policies.",
    date: "2025-05-25",
  },
  cms_medicaid_work_rules: {
    id: "cms_medicaid_work_rules",
    title: "Medicaid Demonstrations: Administrative Spending for Georgia Work Requirements",
    publisher: "U.S. Government Accountability Office",
    url: "https://www.gao.gov/products/gao-25-108160",
    waybackUrl: wayback("https://www.gao.gov/products/gao-25-108160"),
    excerpt:
      "CMS approved additional state Medicaid waivers imposing work requirements and premiums - expanding Project 2025's push to condition health coverage on employment.",
    date: "2025-05-28",
  },
  boem_offshore_lease: {
    id: "boem_offshore_lease",
    title: "Unleashing American Energy",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/"
    ),
    excerpt:
      "Interior accelerated offshore oil and gas lease sales in the Gulf of Mexico and Alaska, prioritizing fossil extraction over renewable siting on federal lands.",
    date: "2025-06-02",
  },
  eac_funding_cuts: {
    id: "eac_funding_cuts",
    title: "The SAVE Act: Proof of Citizenship for Voter Registration",
    publisher: "Congressional Research Service",
    url: "https://www.congress.gov/bill/118th-congress/house-bill/8281",
    waybackUrl: wayback("https://www.congress.gov/bill/118th-congress/house-bill/8281"),
    excerpt:
      "Election Assistance Commission grants for voting-system security and accessibility faced delays as Congress debated proof-of-citizenship registration mandates.",
    date: "2025-06-05",
  },
  osha_silica_delay: {
    id: "osha_silica_delay",
    title: "Regulatory Freeze Pending Review",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/regulatory-freeze-pending-review/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/regulatory-freeze-pending-review/"
    ),
    excerpt:
      "OSHA delayed silica and heat-illness rulemakings pending political review - part of the administration-wide regulatory freeze halting worker-safety updates.",
    date: "2025-06-10",
  },
  va_community_care_audit: {
    id: "va_community_care_audit",
    title: "VA Community Care Program: Actions Needed to Address Overpayments and Fraud Risks",
    publisher: "U.S. Government Accountability Office",
    url: "https://www.gao.gov/",
    waybackUrl: wayback("https://www.gao.gov/"),
    excerpt:
      "GAO documented overpayment and fraud risks in VA community care privatization - as the administration pushed faster outsourcing of veterans' health services.",
    date: "2025-06-15",
  },
  census_citizenship_data: {
    id: "census_citizenship_data",
    title: "Noncitizen Voting: The Missing Millions",
    publisher: "Brennan Center for Justice",
    url: "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
    waybackUrl: wayback(
      "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions"
    ),
    excerpt:
      "Brennan Center research debunks noncitizen voting claims as Congress advanced census and registration changes targeting immigrant communities.",
    date: "2025-06-20",
  },
  blm_hardrock_mining: {
    id: "blm_hardrock_mining",
    title: "Unleashing American Energy",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/unleashing-american-energy/"
    ),
    excerpt:
      "Interior accelerated hardrock mining leases and drilling permits on federal lands - prioritizing extraction over tribal consultation and environmental review.",
    date: "2025-06-25",
  },
  ed_title_ix_sports_rule: {
    id: "ed_title_ix_sports_rule",
    title: "Title IX and Sex Discrimination",
    publisher: "U.S. Department of Education",
    url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/title-ix-and-sex-discrimination/sex-discrimination-overview-of-law",
    waybackUrl: wayback(
      "https://www.ed.gov/laws-and-policy/civil-rights-laws/title-ix-and-sex-discrimination/sex-discrimination-overview-of-law"
    ),
    excerpt:
      "Education Department advanced Title IX sports policies excluding transgender student-athletes - reversing inclusive participation rules adopted under the prior administration.",
    date: "2025-06-30",
  },
  cisa_election_security_pause: {
    id: "cisa_election_security_pause",
    title: "Cybersecurity and Infrastructure Security Agency",
    publisher: "Cybersecurity and Infrastructure Security Agency",
    url: "https://www.cisa.gov/",
    waybackUrl: wayback("https://www.cisa.gov/"),
    excerpt:
      "CISA election-security coordination grants and state partnership staffing faced cuts as the administration deprioritized federal voting-system cybersecurity support.",
    date: "2025-07-05",
  },
  citizens_united_scotus: {
    id: "citizens_united_scotus",
    title: "Citizens United v. Federal Election Commission",
    publisher: "Legal Information Institute - Cornell Law School",
    url: "https://www.law.cornell.edu/supct/html/08-205.ZS.html",
    waybackUrl: wayback("https://www.law.cornell.edu/supct/html/08-205.ZS.html"),
    excerpt:
      "The Court held that independent political expenditures by corporations and unions are protected speech, striking down limits on corporate electioneering communications.",
    date: "2010-01-21",
  },
  fec_campaign_data: {
    id: "fec_campaign_data",
    title: "FEC Campaign Finance Data",
    publisher: "Federal Election Commission",
    url: "https://www.fec.gov/data/",
    waybackUrl: wayback("https://www.fec.gov/data/"),
    excerpt:
      "Official repository of federal campaign committee receipts, disbursements, and independent expenditure reports filed with the FEC.",
    date: "2025-01-01",
  },
  mspb_vacancies: {
    id: "mspb_vacancies",
    title: "Merit Systems Protection Board",
    publisher: "U.S. Merit Systems Protection Board",
    url: "https://www.mspb.gov/",
    waybackUrl: wayback("https://www.mspb.gov/"),
    excerpt:
      "MSPB adjudicates federal employee appeals including whistleblower retaliation claims - board vacancies can leave cases in limbo for years.",
    date: "2025-01-01",
  },
  epa_methane_delay: {
    id: "epa_methane_delay",
    title: "Regulatory Freeze Pending Review",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/regulatory-freeze-pending-review/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/regulatory-freeze-pending-review/"
    ),
    excerpt:
      "Administration-wide regulatory freeze delayed EPA methane and other climate rulemakings pending political review.",
    date: "2025-01-20",
  },
  irs_dark_money_rule: {
    id: "irs_dark_money_rule",
    title: "Dark Money Basics",
    publisher: "OpenSecrets",
    url: "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
    waybackUrl: wayback("https://www.opensecrets.org/news/2014/05/dark-money-basics/"),
    excerpt:
      "Political nonprofits can spend unlimited sums without disclosing donors - enabling undisclosed billionaire influence on policy agendas.",
    date: "2014-05-14",
  },
  schedule_f_expansion: {
    id: "schedule_f_expansion",
    title: "Schedule F Executive Order",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/",
    waybackUrl: wayback(
      "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/"
    ),
    excerpt:
      "Executive order reinstates Schedule F, reclassifying policy-influencing civil servants as at-will employees subject to political removal.",
    date: "2025-01-20",
  },
  foia_gov: {
    id: "foia_gov",
    title: "FOIA.gov - Freedom of Information Act",
    publisher: "U.S. Department of Justice",
    url: "https://www.foia.gov/",
    waybackUrl: wayback("https://www.foia.gov/"),
    excerpt:
      "FOIA.gov publishes agency FOIA statistics, request portals, and annual reports documenting federal compliance with public-records law.",
    date: "2025-01-01",
  },
  doj_oip_foia: {
    id: "doj_oip_foia",
    title: "Office of Information Policy - FOIA",
    publisher: "U.S. Department of Justice",
    url: "https://www.justice.gov/oip",
    waybackUrl: wayback("https://www.justice.gov/oip"),
    excerpt:
      "DOJ's Office of Information Policy oversees federal FOIA compliance, publishes guidance, and reports on agency backlogs and exemption usage.",
    date: "2025-01-01",
  },
  presidential_records_crs: {
    id: "presidential_records_crs",
    title: "The Presidential Records Act (PRA): An Overview",
    publisher: "Congressional Research Service",
    url: "https://www.congress.gov/crs-product/IF12300",
    waybackUrl: wayback("https://www.congress.gov/crs-product/IF12300"),
    excerpt:
      "CRS explains how the Presidential Records Act governs custody, access, and public release of White House records - the statutory framework for executive transparency.",
    date: "2025-01-15",
  },

  // Pass 26 tracker citations
  doge_fr_eo: {
    id: "doge_fr_eo",
    title: "Establishing and Implementing the President's Department of Government Efficiency",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2025/01/29/2025-02005/establishing-and-implementing-the-presidents-department-of-government-efficiency",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2025/01/29/2025-02005/establishing-and-implementing-the-presidents-department-of-government-efficiency"),
    excerpt: "E.O. 14158 renames USDS as the U.S. DOGE Service and creates a temporary organization terminating July 4, 2026.",
    date: "2025-01-29",
  },
  doge_workforce_fr: {
    id: "doge_workforce_fr",
    title: "Implementing the President's Department of Government Efficiency Workforce Optimization Initiative",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2025/02/14/2025-02762/implementing-the-presidents-department-of-government-efficiency-workforce-optimization-initiative",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2025/02/14/2025-02762/implementing-the-presidents-department-of-government-efficiency-workforce-optimization-initiative"),
    excerpt: "Orders agency preparations for large-scale RIFs and a 1:4 hiring ratio, with exemptions for immigration and law enforcement.",
    date: "2025-02-14",
  },
  doge_cost_fr: {
    id: "doge_cost_fr",
    title: "Implementing the President's Department of Government Efficiency Cost Efficiency Initiative",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2025/03/03/2025-03527/implementing-the-presidents-department-of-government-efficiency-cost-efficiency-initiative",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2025/03/03/2025-03527/implementing-the-presidents-department-of-government-efficiency-cost-efficiency-initiative"),
    excerpt: "Extends DOGE cost-efficiency review over covered contracts and grants while carving out immigration enforcement spending.",
    date: "2025-03-03",
  },
  border_tariff_pause_fr: {
    id: "border_tariff_pause_fr",
    title: "Progress on the Situation at Our Southern Border",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2025/02/10/2025-02479/progress-on-the-situation-at-our-southern-border",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2025/02/10/2025-02479/progress-on-the-situation-at-our-southern-border"),
    excerpt: "Presidential action pauses additional Mexico-related tariff rates while threatening immediate reimposition.",
    date: "2025-02-10",
  },
  schedule_policy_career_eo_2026: {
    id: "schedule_policy_career_eo_2026",
    title: "Implementing Schedule Policy/Career in the Excepted Service",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/implementing-schedule-policy-career-in-the-excepted-service/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/implementing-schedule-policy-career-in-the-excepted-service/"),
    excerpt: "E.O. 14410 transfers senior policy-influencing positions into Schedule Policy/Career, expanding at-will removals.",
    date: "2026-06-03",
  },
  ai_innovation_eo_2026: {
    id: "ai_innovation_eo_2026",
    title: "Promoting Advanced Artificial Intelligence Innovation and Security",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/"),
    excerpt: "E.O. 14409 rejects mandatory AI licensing while creating voluntary frontier-model security engagement with industry.",
    date: "2026-06-02",
  },
  ai_innovation_fr_2026: {
    id: "ai_innovation_fr_2026",
    title: "Promoting Advanced Artificial Intelligence Innovation and Security (FR)",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/06/05/2026-11415/promoting-advanced-artificial-intelligence-innovation-and-security",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/06/05/2026-11415/promoting-advanced-artificial-intelligence-innovation-and-security"),
    excerpt: "Federal Register publication of E.O. 14409 on AI innovation and security.",
    date: "2026-06-05",
  },
  contracting_eo_2026: {
    id: "contracting_eo_2026",
    title: "Promoting Efficiency, Accountability, and Performance in Federal Contracting",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/04/promoting-efficiency-accountability-and-performance-in-federal-contracting/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/04/promoting-efficiency-accountability-and-performance-in-federal-contracting/"),
    excerpt: "E.O. 14402 directs OMB guidance to reshape federal contracting performance and accountability rules.",
    date: "2026-04-30",
  },
  customs_enforcement_eo_2026: {
    id: "customs_enforcement_eo_2026",
    title: "Strengthening Customs Enforcement",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/strengthening-customs-enforcement/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/strengthening-customs-enforcement/"),
    excerpt: "Executive order expands customs enforcement priorities and related border trade controls.",
    date: "2026-06-03",
  },
  federal_lands_restrictions_eo_2026: {
    id: "federal_lands_restrictions_eo_2026",
    title: "Removing Unnecessary and Counterproductive Restrictions on Access to Federal Lands",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/05/removing-unnecessary-and-counterproductive-restrictions-on-access-to-federal-lands/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/05/removing-unnecessary-and-counterproductive-restrictions-on-access-to-federal-lands/"),
    excerpt: "Order rescinds E.O.s 11644 and 11989 on off-road vehicle restrictions and directs agencies to rewrite access rules.",
    date: "2026-05-29",
  },
  vaccine_realign_eo_2026: {
    id: "vaccine_realign_eo_2026",
    title: "Realigning United States Core Childhood Vaccine Recommendations",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/05/realigning-united-states-core-childhood-vaccine-recommendations-with-best-practices-from-peer-developed-countries/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/05/realigning-united-states-core-childhood-vaccine-recommendations-with-best-practices-from-peer-developed-countries/"),
    excerpt: "Order directs realignment of U.S. childhood vaccine recommendations against selected peer-country practices.",
    date: "2026-05-29",
  },
  opm_schedule_policy_rule_2026: {
    id: "opm_schedule_policy_rule_2026",
    title: "Improving Performance, Accountability and Responsiveness in the Civil Service (public inspection)",
    publisher: "Federal Register Public Inspection",
    url: "https://public-inspection.federalregister.gov/2026-02375.pdf",
    waybackUrl: wayback("https://public-inspection.federalregister.gov/2026-02375.pdf"),
    excerpt: "OPM final rule authorizes moving policy-influencing career positions into Schedule Policy/Career at-will status.",
    date: "2026-02-01",
  },
  wh_actions_index_2026: {
    id: "wh_actions_index_2026",
    title: "Presidential Actions",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/"),
    excerpt: "Official index of presidential actions including 2025-2026 executive orders.",
    date: "2026-07-01",
  },

  // Pass 26 policy citations
  policy_immigration: {
    id: "policy_immigration",
    title: "Immigration Policy",
    publisher: "Congressional Research Service",
    url: "https://crsreports.congress.gov/",
    waybackUrl: wayback("https://crsreports.congress.gov/"),
    excerpt: "CRS publishes nonpartisan immigration law and border policy analyses for Congress.",
    date: "2025-01-01",
  },
  policy_housing: {
    id: "policy_housing",
    title: "Housing and Urban Development",
    publisher: "U.S. Department of Housing and Urban Development",
    url: "https://www.hud.gov/",
    waybackUrl: wayback("https://www.hud.gov/"),
    excerpt: "HUD publishes housing affordability, homelessness, and fair housing program data.",
    date: "2025-01-01",
  },
  policy_media: {
    id: "policy_media",
    title: "Federal Communications Commission",
    publisher: "FCC",
    url: "https://www.fcc.gov/",
    waybackUrl: wayback("https://www.fcc.gov/"),
    excerpt: "FCC regulates broadcast ownership, spectrum, and communications competition rules.",
    date: "2025-01-01",
  },
  policy_disability: {
    id: "policy_disability",
    title: "Americans with Disabilities Act",
    publisher: "National Archives",
    url: "https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990",
    waybackUrl: wayback("https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990"),
    excerpt: "The ADA establishes civil rights protections against disability discrimination.",
    date: "1990-07-26",
  },
  policy_indigenous: {
    id: "policy_indigenous",
    title: "Bureau of Indian Affairs",
    publisher: "U.S. Department of the Interior",
    url: "https://www.bia.gov/",
    waybackUrl: wayback("https://www.bia.gov/"),
    excerpt: "BIA administers programs related to tribal governments, trust land, and federal Indian policy.",
    date: "2025-01-01",
  },
  cost_inaction_housing: {
    id: "cost_inaction_housing",
    title: "Housing Affordability",
    publisher: "U.S. Census Bureau",
    url: "https://www.census.gov/topics/housing.html",
    waybackUrl: wayback("https://www.census.gov/topics/housing.html"),
    excerpt: "Census housing data document cost burdens and tenure gaps that worsen without supply and assistance reforms.",
    date: "2025-01-01",
  },
  cost_inaction_immigration: {
    id: "cost_inaction_immigration",
    title: "Immigration Courts and Backlogs",
    publisher: "Congressional Research Service",
    url: "https://crsreports.congress.gov/",
    waybackUrl: wayback("https://crsreports.congress.gov/"),
    excerpt: "CRS documents multi-year immigration court backlogs that grow without staffing and legal-process reform.",
    date: "2025-01-01",
  },
  hr_housing_voucher: {
    id: "hr_housing_voucher",
    title: "Search housing legislation",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/",
    waybackUrl: wayback("https://www.congress.gov/"),
    excerpt: "Congress.gov indexes federal housing assistance and voucher expansion bills.",
    date: "2025-01-01",
  },

  // Pass 27 tracker citations
  fintech_eo_2026: {
    id: "fintech_eo_2026",
    title: "Integrating Financial Technology Innovation into Regulatory Frameworks",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/05/integrating-financial-technology-innovation-into-regulatory-frameworks/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/05/integrating-financial-technology-innovation-into-regulatory-frameworks/"),
    excerpt: "E.O. 14405 directs agencies to integrate fintech innovation into financial regulatory frameworks.",
    date: "2026-05-19",
  },
  financial_integrity_eo_2026: {
    id: "financial_integrity_eo_2026",
    title: "Restoring Integrity to America's Financial System",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/05/restoring-integrity-to-americas-financial-system/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/05/restoring-integrity-to-americas-financial-system/"),
    excerpt: "E.O. 14406 reframes financial-system integrity priorities and related regulatory posture.",
    date: "2026-05-19",
  },
  crypto_attacks_eo_2026: {
    id: "crypto_attacks_eo_2026",
    title: "Securing the Nation Against Advanced Cryptographic Attacks",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/"),
    excerpt: "E.O. 14412 directs national-security measures against advanced cryptographic attacks.",
    date: "2026-06-22",
  },
  quantum_eo_2026: {
    id: "quantum_eo_2026",
    title: "Ushering in the Next Frontier of Quantum Innovation",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/ushering-in-the-next-frontier-of-quantum-innovation/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/ushering-in-the-next-frontier-of-quantum-innovation/"),
    excerpt: "E.O. 14413 advances federal quantum innovation priorities.",
    date: "2026-06-22",
  },
  regenerative_ag_eo_2026: {
    id: "regenerative_ag_eo_2026",
    title: "Advancing Regenerative Agriculture and Strengthening American Farm Resilience",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/advancing-regenerative-agriculture-and-strengthening-american-farm-resilience/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/advancing-regenerative-agriculture-and-strengthening-american-farm-resilience/"),
    excerpt: "E.O. 14414 sets regenerative agriculture and farm-resilience directives for federal agencies.",
    date: "2026-06-25",
  },
  wh_eo_index_2026: {
    id: "wh_eo_index_2026",
    title: "Executive Orders",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/executive-orders/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/executive-orders/"),
    excerpt: "Official White House index of executive orders including 2025-2026 actions.",
    date: "2026-07-11",
  },
  gao_improper_payments: {
    id: "gao_improper_payments",
    title: "Improper Payments",
    publisher: "U.S. Government Accountability Office",
    url: "https://www.gao.gov/improper-payments",
    waybackUrl: wayback("https://www.gao.gov/improper-payments"),
    excerpt: "GAO tracks federal improper payments and oversight gaps across major programs.",
    date: "2025-01-01",
  },
  bls_employment_sit: {
    id: "bls_employment_sit",
    title: "Employment Situation",
    publisher: "Bureau of Labor Statistics",
    url: "https://www.bls.gov/news.release/empsit.toc.htm",
    waybackUrl: wayback("https://www.bls.gov/news.release/empsit.toc.htm"),
    excerpt: "BLS monthly employment situation report is the official labor-market scorecard.",
    date: "2025-01-01",
  },

  // Pass 28 tracker citations
  freedom_to_fix_memo_2026: {
    id: "freedom_to_fix_memo_2026",
    title: "Lowering the Cost of Living by Promoting the Freedom to Fix",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/lowering-the-cost-of-living-by-promoting-the-freedom-to-fix/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/lowering-the-cost-of-living-by-promoting-the-freedom-to-fix/"),
    excerpt: "Presidential memorandum directs EPA guidance expanding aftermarket emissions-repair options and deprioritizing certain tampering enforcement.",
    date: "2026-06-29",
  },
  phosphate_fertilizer_proclamation_2026: {
    id: "phosphate_fertilizer_proclamation_2026",
    title: "Declaration of Emergency and Authorization for Temporary Duty Free Importation of Phosphate Fertilizer Morocco",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/declaration-of-emergency-and-authorization-for-temporary-duty-free-importation-of-phosphate-fertilizer-morocco/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/declaration-of-emergency-and-authorization-for-temporary-duty-free-importation-of-phosphate-fertilizer-morocco/"),
    excerpt: "Emergency proclamation authorizes temporary duty-free phosphate fertilizer imports from Morocco.",
    date: "2026-06-29",
  },
  aircraft_imports_proclamation_2026: {
    id: "aircraft_imports_proclamation_2026",
    title: "Adjusting Imports of Commercial Aircraft, Jet Engines, and Aircraft and Engine Parts into the United States",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/07/adjusting-imports-of-commercial-aircraft-jet-engines-and-aircraft-and-engine-parts-into-the-united-states/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/07/adjusting-imports-of-commercial-aircraft-jet-engines-and-aircraft-and-engine-parts-into-the-united-states/"),
    excerpt: "Proclamation adjusts import treatment for commercial aircraft, jet engines, and related parts.",
    date: "2026-07-09",
  },
  pacific_fishing_proclamation_2026: {
    id: "pacific_fishing_proclamation_2026",
    title: "Restoring American Commercial Fishing in the Pacific",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/restoring-american-commercial-fishing-in-the-pacific/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/restoring-american-commercial-fishing-in-the-pacific/"),
    excerpt: "Proclamation reframes Pacific commercial fishing access and related conservation constraints.",
    date: "2026-06-11",
  },
  nspm_12_2026: {
    id: "nspm_12_2026",
    title: "National Security Presidential Memorandum/NSPM-12",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-12/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-12/"),
    excerpt: "NSPM-12 sets national-security directives outside ordinary notice-and-comment rulemaking.",
    date: "2026-06-12",
  },
  nspm_11_2026: {
    id: "nspm_11_2026",
    title: "National Security Presidential Memorandum/NSPM-11",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/"),
    excerpt: "NSPM-11 adds to the stack of national-security presidential memoranda issued in mid-2026.",
    date: "2026-06-05",
  },
  buyer_pardon_2026: {
    id: "buyer_pardon_2026",
    title: "Granting Pardon to Stephen E. Buyer",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/granting-pardon-to-stephen-e-buyer/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/06/granting-pardon-to-stephen-e-buyer/"),
    excerpt: "Presidential pardon of former Representative Stephen E. Buyer.",
    date: "2026-06-04",
  },
  fr_home_2026: {
    id: "fr_home_2026",
    title: "Federal Register",
    publisher: "National Archives",
    url: "https://www.federalregister.gov/",
    waybackUrl: wayback("https://www.federalregister.gov/"),
    excerpt: "Official daily journal of the U.S. government for rules, proposed rules, and notices.",
    date: "2026-07-11",
  },

};
