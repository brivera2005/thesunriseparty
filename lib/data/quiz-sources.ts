/**
 * Primary sources for Political Standing Quiz tips / Learn more.
 * URLs are checked by scripts/validate-links.mjs. No em dashes in excerpts.
 */

import type { CitationSource } from "@/lib/types";
import { cite } from "@/lib/data/conversation-citations";

export const quizSources = {
  treasury_tax: cite(
    "quiz_treasury_tax",
    "Tax Policy",
    "U.S. Department of the Treasury",
    "https://home.treasury.gov/policy-issues/tax-policy",
    "Treasury tax analyses describe how preferential rates on capital income and avoidance widen the effective-rate gap between ultra-wealthy households and wage earners.",
    "2025-01-01"
  ),
  census_income: cite(
    "quiz_census_income",
    "Income and Poverty in the United States",
    "U.S. Census Bureau",
    "https://www.census.gov/library/publications/2024/demo/p60-284.html",
    "Census income and poverty reports document wage stagnation for typical households alongside concentration of gains at the top of the distribution.",
    "2024-09-10"
  ),
  kff_health_costs: cite(
    "quiz_kff_health_costs",
    "Health Costs",
    "Kaiser Family Foundation",
    "https://www.kff.org/health-costs/",
    "KFF tracking shows U.S. health prices and out-of-pocket burdens remain far above peer-country averages without stronger public price tools.",
    "2025-01-01"
  ),
  kff_aca: cite(
    "quiz_kff_aca",
    "Affordable Care Act",
    "Kaiser Family Foundation",
    "https://www.kff.org/affordable-care-act/",
    "KFF ACA explainers document coverage gains, subsidy design, and what happens when premium tax credits expire or shrink.",
    "2025-01-01"
  ),
  guttmacher_abortion: cite(
    "quiz_guttmacher_abortion",
    "Abortion in the United States",
    "Guttmacher Institute",
    "https://www.guttmacher.org/united-states/abortion",
    "Guttmacher data track abortion timing, access after Dobbs, and maternal health harms from criminalization and clinic closures.",
    "2025-01-01"
  ),
  scotus_dobbs: cite(
    "quiz_scotus_dobbs",
    "Dobbs v. Jackson Women's Health Organization",
    "Oyez / Chicago-Kent",
    "https://www.oyez.org/cases/2021/19-1392",
    "Case materials for Dobbs, which overturned Roe and Casey and returned abortion regulation to the states.",
    "2022-06-24"
  ),
  dhs_immigration: cite(
    "quiz_dhs_immigration",
    "Immigration Statistics",
    "U.S. Department of Homeland Security",
    "https://www.dhs.gov/immigration-statistics",
    "DHS yearbooks document legal admissions, removals, asylum caseloads, and border encounters. The U.S. already runs an inspection and deportation system.",
    "2025-01-01"
  ),
  mit_election: cite(
    "quiz_mit_election",
    "MIT Election Data + Science Lab",
    "Massachusetts Institute of Technology",
    "https://electionlab.mit.edu/",
    "MIT Election Lab research finds U.S. election fraud is extremely rare and focuses on evidence-based improvements to access, auditing, and administration.",
    "2025-01-01"
  ),
  cdc_firearms: cite(
    "quiz_cdc_firearms",
    "Firearm Injury and Death Prevention",
    "Centers for Disease Control and Prevention",
    "https://www.cdc.gov/firearm-violence/about/index.html",
    "CDC firearm-violence data show tens of thousands of U.S. deaths annually; background checks and safe storage are public-health tools, not confiscation schemes.",
    "2025-01-01"
  ),
  pew_guns: cite(
    "quiz_pew_guns",
    "What the data says about gun deaths in the U.S.",
    "Pew Research Center",
    "https://www.pewresearch.org/short-reads/2023/07/13/what-the-data-says-about-gun-deaths-in-the-u-s/",
    "Pew summarizes CDC and other data on U.S. gun death rates, including suicides and homicides, compared with peer countries.",
    "2023-07-13"
  ),
  nasa_climate: cite(
    "quiz_nasa_climate",
    "Evidence: Climate Change",
    "NASA",
    "https://climate.nasa.gov/evidence/",
    "NASA climate evidence pages summarize the measured rise in global temperature, ice loss, and sea level tied to human greenhouse-gas emissions.",
    "2025-01-01"
  ),
  ipcc_climate: cite(
    "quiz_ipcc_climate",
    "AR6 Synthesis Report: Climate Change 2023",
    "Intergovernmental Panel on Climate Change",
    "https://www.ipcc.ch/report/sixth-assessment-report-cycle/",
    "IPCC AR6 finds human-caused warming is unequivocal and that delayed cuts lock in higher damages for communities, food systems, and security.",
    "2023-03-20"
  ),
  doj_election: cite(
    "quiz_doj_election",
    "Election Fraud (Criminal Resource Manual)",
    "U.S. Department of Justice",
    "https://www.justice.gov/archives/jm/criminal-resource-manual-2041-election-fraud",
    "DOJ materials treat election fraud as a serious crime investigated case by case. Scale claims of mass stolen elections have not matched courtroom evidence.",
    "2020-01-01"
  ),
  brennan_voting: cite(
    "quiz_brennan_voting",
    "Ensure Every American Can Vote",
    "Brennan Center for Justice",
    "https://www.brennancenter.org/issues/ensure-every-american-can-vote",
    "Brennan Center research tracks voting access, restrictive state laws, and the rarity of in-person voter fraud relative to turnout.",
    "2025-01-01"
  ),
  bls_unions: cite(
    "quiz_bls_unions",
    "Union Members Summary",
    "Bureau of Labor Statistics",
    "https://www.bls.gov/news.release/union2.nr0.htm",
    "BLS reports a persistent union wage premium and historically low private-sector membership rates after decades of legal and employer resistance.",
    "2025-01-23"
  ),
  nces_education: cite(
    "quiz_nces_education",
    "National Center for Education Statistics",
    "U.S. Department of Education",
    "https://nces.ed.gov/",
    "NCES publishes enrollment, funding, and outcome data for public and private schools used to compare voucher and public-investment claims.",
    "2025-01-01"
  ),
  nato_collective: cite(
    "quiz_nato_collective",
    "Collective defence and Article 5",
    "NATO",
    "https://www.nato.int/cps/en/natohq/topics_49198.htm",
    "NATO explains collective defense commitments. Alliances are treaty obligations, not a plot against American sovereignty.",
    "2025-01-01"
  ),
  doj_civil_rights: cite(
    "quiz_doj_civil_rights",
    "Civil Rights Division",
    "U.S. Department of Justice",
    "https://www.justice.gov/crt",
    "DOJ Civil Rights enforces federal nondiscrimination law in employment, housing, education, and public accommodations including LGBTQ protections where statute and case law apply.",
    "2025-01-01"
  ),
  nimh_mh: cite(
    "quiz_nimh_mh",
    "Mental Health Information",
    "National Institute of Mental Health",
    "https://www.nimh.nih.gov/health",
    "NIMH documents high prevalence of treatable mental illness and the cost of untreated conditions in disability, suicide risk, and lost productivity.",
    "2025-01-01"
  ),
  ssa_trustees: cite(
    "quiz_ssa_trustees",
    "Social Security Trustees Report",
    "Social Security Administration",
    "https://www.ssa.gov/oact/TR/",
    "Trustees reports show Social Security is solvent for years with manageable revenue fixes. Benefit cuts are a political choice, not an actuarial inevitability.",
    "2025-01-01"
  ),
  brennan_avr: cite(
    "quiz_brennan_avr",
    "Automatic Voter Registration Impact",
    "Brennan Center for Justice",
    "https://www.brennancenter.org/our-work/research-reports/avr-impact-state-voter-registration",
    "Brennan Center analysis of automatic voter registration finds higher registration rates and cleaner rolls when DMV and agencies default people onto the list.",
    "2025-01-01"
  ),
  ftc_antitrust: cite(
    "quiz_ftc_antitrust",
    "Competition Enforcement",
    "Federal Trade Commission",
    "https://www.ftc.gov/news-events/topics/competition-enforcement",
    "FTC competition enforcement targets mergers and monopoly conduct that raise prices and shrink consumer choice across tech, pharma, and retail.",
    "2025-01-01"
  ),
  doj_antitrust: cite(
    "quiz_doj_antitrust",
    "Antitrust Division",
    "U.S. Department of Justice",
    "https://www.justice.gov/atr",
    "DOJ Antitrust brings cases against monopolization and anticompetitive mergers under Sherman and Clayton Act authority.",
    "2025-01-01"
  ),
  hud_housing: cite(
    "quiz_hud_housing",
    "Housing and Urban Development",
    "U.S. Department of Housing and Urban Development",
    "https://www.hud.gov/",
    "HUD programs and data track homelessness, rental assistance, and public housing needs that markets alone leave unmet.",
    "2025-01-01"
  ),
  huduser: cite(
    "quiz_huduser",
    "U.S. Housing Market Conditions",
    "HUD User",
    "https://www.huduser.gov/portal/ushmc/home.html",
    "HUD User market reports document supply shortfalls, rent burden, and regional price spikes that zoning and underbuilding help create.",
    "2025-01-01"
  ),
  fcc_broadband: cite(
    "quiz_fcc_broadband",
    "Broadband Data Collection",
    "Federal Communications Commission",
    "https://www.fcc.gov/BroadbandData",
    "FCC broadband maps show persistent rural and low-income gaps in high-speed access that private markets alone leave underserved.",
    "2025-01-01"
  ),
  childcare_gov: cite(
    "quiz_childcare_gov",
    "ChildCare.gov",
    "U.S. Department of Health and Human Services",
    "https://www.childcare.gov/",
    "Federal childcare resources document how cost and supply constrain working parents, especially women, across income levels.",
    "2025-01-01"
  ),
  acf_occ: cite(
    "quiz_acf_occ",
    "Office of Child Care",
    "Administration for Children and Families",
    "https://www.acf.hhs.gov/occ",
    "OCC administers the Child Care and Development Fund and publishes state data on access, quality standards, and workforce wages.",
    "2025-01-01"
  ),
  studentaid: cite(
    "quiz_studentaid",
    "Student Loan Forgiveness and Cancellation",
    "Federal Student Aid",
    "https://studentaid.gov/manage-loans/forgiveness-cancellation",
    "Federal Student Aid explains existing forgiveness pathways. Debt levels and repayment rules are policy choices, not natural laws.",
    "2025-01-01"
  ),
  nist_ai: cite(
    "quiz_nist_ai",
    "Artificial Intelligence",
    "National Institute of Standards and Technology",
    "https://www.nist.gov/artificial-intelligence",
    "NIST AI frameworks treat safety, bias, and transparency as engineering and governance problems, not optional PR.",
    "2025-01-01"
  ),
  fairvote: cite(
    "quiz_fairvote",
    "Ranked Choice Voting",
    "FairVote",
    "https://www.fairvote.org/",
    "FairVote documents ranked choice voting mechanics and U.S. jurisdictions already using RCV in statewide or local elections.",
    "2025-01-01"
  ),
  ncsl_rcv: cite(
    "quiz_ncsl_rcv",
    "Ranked Choice Voting",
    "National Conference of State Legislatures",
    "https://www.ncsl.org/elections-and-campaigns/ranked-choice-voting",
    "NCSL summarizes which states and localities use ranked choice voting and how ballots are counted under state law.",
    "2025-01-01"
  ),
  estonia_egov: cite(
    "quiz_estonia_egov",
    "e-Estonia: e-Governance",
    "e-Estonia",
    "https://e-estonia.com/solutions/e-governance/",
    "Estonia's e-governance stack includes digital ID and remote voting with cryptographic audit logs used in national elections.",
    "2025-01-01"
  ),
  rff_carbon: cite(
    "quiz_rff_carbon",
    "Carbon Pricing",
    "Resources for the Future",
    "https://www.rff.org/topics/carbon-pricing/",
    "RFF research compares carbon taxes and cap-and-trade designs, including dividend rebates that protect households while pricing pollution.",
    "2025-01-01"
  ),
  epa_climate: cite(
    "quiz_epa_climate",
    "Climate Change Science",
    "U.S. Environmental Protection Agency",
    "https://www.epa.gov/climatechange-science",
    "EPA climate science pages summarize observed warming, attribution to greenhouse gases, and sector damages used in U.S. policy analysis.",
    "2025-01-01"
  ),
  md_hscrc: cite(
    "quiz_md_hscrc",
    "Health Services Cost Review Commission",
    "State of Maryland",
    "https://hscrc.maryland.gov/Pages/default.aspx",
    "Maryland's all-payer hospital rate setting and global budget model is a U.S. proof that regulated prices can replace chaotic chargemaster markups.",
    "2025-01-01"
  ),
  kff_medicare: cite(
    "quiz_kff_medicare",
    "Medicare",
    "Kaiser Family Foundation",
    "https://www.kff.org/medicare/",
    "KFF Medicare explainers cover hospital and physician payment, Advantage plans, and why U.S. prices diverge from peer nations.",
    "2025-01-01"
  ),
  urban_housing: cite(
    "quiz_urban_housing",
    "Metropolitan Housing and Communities",
    "Urban Institute",
    "https://www.urban.org/policy-centers/metropolitan-housing-and-communities-policy-center",
    "Urban Institute housing research covers zoning, social housing lessons, vouchers, and how supply constraints drive rent burden.",
    "2025-01-01"
  ),
  fdic_household: cite(
    "quiz_fdic_household",
    "FDIC National Survey of Unbanked and Underbanked Households",
    "Federal Deposit Insurance Corporation",
    "https://www.fdic.gov/analysis/household-survey/index.html",
    "FDIC surveys show millions of households remain unbanked or underbanked, concentrated in bank deserts where payday products fill the gap.",
    "2025-01-01"
  ),
  fed_shed: cite(
    "quiz_fed_shed",
    "Survey of Household Economics and Decisionmaking",
    "Federal Reserve Board",
    "https://www.federalreserve.gov/consumerscommunities/shed.htm",
    "Fed SHED data document banking access, credit use, and financial fragility that postal or public banking proposals aim to address.",
    "2025-01-01"
  ),
  gao_postal: cite(
    "quiz_gao_postal",
    "U.S. Postal Service: Financial Viability and Reform",
    "U.S. Government Accountability Office",
    "https://www.gao.gov/products/gao-21-191",
    "GAO reports on USPS finances and service footprint. Postal banking debates sit on top of an existing nationwide retail network.",
    "2021-04-29"
  ),
  congress_gov: cite(
    "quiz_congress_gov",
    "Congress.gov",
    "Library of Congress",
    "https://www.congress.gov/",
    "Congress.gov is the official bill text and status source for federal legislation on voting, healthcare, climate, and banking proposals.",
    "2025-01-01"
  ),
  cbo_home: cite(
    "quiz_cbo_home",
    "Congressional Budget Office",
    "Congressional Budget Office",
    "https://www.cbo.gov/",
    "CBO scores federal legislation and publishes independent cost estimates used across parties for taxes, health, and climate bills.",
    "2025-01-01"
  ),
} as const satisfies Record<string, CitationSource>;

export type QuizSourceId = keyof typeof quizSources;

export function quizCite(...ids: QuizSourceId[]): CitationSource[] {
  return ids.map((id) => quizSources[id]);
}
