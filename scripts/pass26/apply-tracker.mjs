/**
 * Pass 26 - tracker events 126-162 + new citations
 * Run: node scripts/pass26/apply-tracker.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const newCitations = `
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
`;

function evt(id, date, type, desc, sev, sectors, sources, fix, cat, pillar) {
  return `  {
    Event_ID: ${JSON.stringify(id)},
    Date: ${JSON.stringify(date)},
    Action_Type: ${JSON.stringify(type)},
    Description: ${JSON.stringify(desc)},
    Severity_Score: ${sev},
    Impacted_Sectors: [${sectors.map((s) => JSON.stringify(s)).join(", ")}],
    Sources: [${sources.map((s) => `citations.${s}`).join(", ")}],
    Linked_Fix_ID: ${JSON.stringify(fix)},
    category: ${JSON.stringify(cat)},
    p2025Pillar: ${JSON.stringify(pillar)},
    externalTrackers: [observer(), cpr()],
  },`;
}

const events = [
  evt("EVT-2025-0129-126", "2025-01-29", "Federal Register", "Federal Register publishes E.O. 14158 establishing the U.S. DOGE Service inside the Executive Office of the President, with a temporary organization set to terminate July 4, 2026.", 9, ["Democracy", "Economy"], ["doge_fr_eo", "doge_eo", "heritage_mandate"], "FIX-SAFE-002", "Democracy", "Agency Restructuring"),
  evt("EVT-2025-0210-127", "2025-02-10", "Presidential Action", "Southern border tariff action pauses additional Mexico-related duties while explicitly threatening immediate reimposition if migration and drug metrics worsen.", 7, ["Immigration", "Economy"], ["border_tariff_pause_fr", "reciprocal_tariffs_eo", "trade_policy_eo"], "FIX-ECO-001", "Immigration", "Immigration Enforcement"),
  evt("EVT-2025-0214-128", "2025-02-14", "Federal Register", "DOGE Workforce Optimization order directs agencies to prepare large-scale RIFs and apply a 1-hire-per-4-departures ratio, exempting immigration and law-enforcement functions.", 9, ["Democracy", "Economy"], ["doge_workforce_fr", "federal_hiring_freeze", "schedule_f_eo"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2025-0303-129", "2025-03-03", "Federal Register", "DOGE Cost Efficiency Initiative extends review over covered contracts and grants while carving out immigration enforcement and public-safety spending from cuts.", 8, ["Economy", "Immigration", "Democracy"], ["doge_cost_fr", "doge_fr_eo", "treasury_payment_access"], "FIX-SAFE-002", "Economy", "Agency Restructuring"),
  evt("EVT-2026-0201-130", "2026-02-01", "Agency Rule", "OPM public-inspection final rule advances Schedule Policy/Career, authorizing agencies to move policy-influencing career jobs into at-will excepted-service status without MSPB adverse-action protections.", 10, ["Democracy", "Economy"], ["opm_schedule_policy_rule_2026", "schedule_f_eo", "gao_schedule_f"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0430-131", "2026-04-30", "Executive Order", "E.O. 14402 on federal contracting efficiency directs OMB to issue agency guidance reshaping performance and accountability rules for government contracts.", 7, ["Economy", "Democracy"], ["contracting_eo_2026", "doge_cost_fr", "safeguard_transparency"], "FIX-SAFE-004", "Economy", "Agency Restructuring"),
  evt("EVT-2026-0501-132", "2026-05-29", "Executive Order", "Order on federal lands access rescinds decades-old off-road vehicle restriction criteria and directs agencies to rewrite access rules, advancing deregulatory land-use priorities.", 8, ["Environment", "Economy"], ["federal_lands_restrictions_eo_2026", "federal_lands_drilling", "energy_emergency_eo"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0529-133", "2026-05-29", "Executive Order", "Childhood vaccine recommendations realignment order directs federal health agencies to revise core schedules against selected peer-country practices, politicizing CDC scientific processes.", 8, ["Healthcare", "Education"], ["vaccine_realign_eo_2026", "cdc_grant_pause", "who_withdrawal"], "FIX-HC-001", "Healthcare", "Health Agencies"),
  evt("EVT-2026-0602-134", "2026-06-02", "Executive Order", "E.O. 14409 promotes AI innovation while explicitly rejecting mandatory licensing or preclearance for frontier models, prioritizing voluntary industry frameworks over binding safety regulation.", 7, ["Economy", "Democracy"], ["ai_innovation_eo_2026", "ai_innovation_fr_2026", "regulatory_freeze"], "FIX-SAFE-002", "Economy", "Deregulation"),
  evt("EVT-2026-0603-135", "2026-06-03", "Executive Order", "E.O. 14410 implements Schedule Policy/Career transfers for senior policy-influencing positions, converting career expertise into at-will roles removable for alleged obstruction of presidential directives.", 10, ["Democracy", "Economy"], ["schedule_policy_career_eo_2026", "opm_schedule_policy_rule_2026", "gao_schedule_f"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0603-136", "2026-06-03", "Executive Order", "Strengthening Customs Enforcement order expands customs and trade-enforcement priorities, tightening goods and migration-adjacent border controls.", 7, ["Immigration", "Economy"], ["customs_enforcement_eo_2026", "dhs_deportation_ops", "ice_expansion_eo"], "FIX-VR-001", "Immigration", "Immigration Enforcement"),
  evt("EVT-2026-0605-137", "2026-06-05", "Federal Register", "Federal Register publishes E.O. 14409 AI innovation and security text, locking in the administration's anti-mandatory-licensing AI posture in the official journal.", 6, ["Economy", "Democracy"], ["ai_innovation_fr_2026", "ai_innovation_eo_2026", "regulatory_freeze"], "FIX-SAFE-002", "Economy", "Deregulation"),
  evt("EVT-2026-0107-138", "2026-01-07", "Executive Order", "Defense contracting priority order elevates warfighter contracting preferences, redirecting procurement criteria inside DoD acquisition processes.", 6, ["Economy", "Democracy"], ["wh_actions_index_2026", "defense_dei_rollback", "contracting_eo_2026"], "FIX-SAFE-002", "Economy", "Defense"),
  evt("EVT-2026-0326-139", "2026-03-26", "Executive Order", "Order addressing DEI discrimination by federal contractors expands anti-DEI contracting conditions, extending personnel culture wars into procurement eligibility.", 8, ["Civil Rights", "Economy"], ["wh_actions_index_2026", "dei_termination_eo", "dol_ofccp_rollback"], "FIX-VR-001", "Civil Rights", "Civil Rights Rollbacks"),
  evt("EVT-2025-0415-140", "2025-04-15", "Executive Order", "Restoring Common Sense to Federal Procurement reframes acquisition rules toward deregulatory contracting preferences announced in the White House presidential-actions series.", 6, ["Economy", "Democracy"], ["wh_actions_index_2026", "contracting_eo_2026", "doge_cost_fr"], "FIX-ECO-001", "Economy", "Agency Restructuring"),
  evt("EVT-2025-0416-141", "2025-04-16", "Executive Order", "Ensuring Commercial, Cost-Effective Solutions in Federal Contracts pushes commercial-item preferences that can weaken public-interest requirements in acquisition.", 6, ["Economy"], ["wh_actions_index_2026", "contracting_eo_2026", "ftc_enforcement_pause"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0610-142", "2026-06-10", "Documentation", "Independent trackers continue cross-referencing Schedule Policy/Career implementation against Project 2025 personnel chapters as OPM rulemaking and E.O. 14410 take effect.", 8, ["Democracy"], ["schedule_policy_career_eo_2026", "cpr_p2025_progress", "heritage_mandate"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0615-143", "2026-06-15", "Oversight Gap", "GAO and inspector-general capacity constraints compound as Schedule Policy/Career removals threaten career oversight staff who flag improper payments and fraud.", 8, ["Democracy", "Economy"], ["gao_healthcare", "mspb_vacancies", "schedule_policy_career_eo_2026"], "FIX-SAFE-004", "Democracy", "Oversight & Accountability"),
  evt("EVT-2026-0620-144", "2026-06-20", "Health Policy", "CDC and HHS vaccine-schedule realignment work begins under the May 29 order, shifting childhood recommendation processes toward politically framed peer-country comparisons.", 8, ["Healthcare"], ["vaccine_realign_eo_2026", "cdc_grant_pause", "nih_funding_cuts"], "FIX-HC-001", "Healthcare", "Health Agencies"),
  evt("EVT-2026-0622-145", "2026-06-22", "Executive Order", "Cryptographic security and quantum innovation orders expand national-security tech directives while the administration simultaneously rejects binding AI safety licensing.", 5, ["Economy", "Democracy"], ["wh_actions_index_2026", "ai_innovation_eo_2026", "intelligence_briefing_restrictions"], "FIX-SAFE-002", "Democracy", "National Security"),
  evt("EVT-2026-0625-146", "2026-06-25", "Executive Order", "Regenerative agriculture executive order reframes farm policy priorities; environmental and labor groups warn deregulatory riders can weaken conservation enforcement if paired with EPA rollbacks.", 5, ["Environment", "Economy"], ["wh_actions_index_2026", "epa_methane_rollback", "energy_emergency_eo"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0701-147", "2026-07-01", "DOGE Sunset Watch", "U.S. DOGE Service Temporary Organization approaches its July 4, 2026 termination date under E.O. 14158 while the order states termination does not end other DOGE authorities.", 7, ["Democracy", "Economy"], ["doge_fr_eo", "doge_workforce_fr", "doge_cost_fr"], "FIX-SAFE-002", "Democracy", "Agency Restructuring"),
  evt("EVT-2026-0704-148", "2026-07-04", "Structural Milestone", "Statutory sunset date for the U.S. DOGE Service Temporary Organization arrives; watchdogs track whether payment-system access and workforce directives persist beyond the temporary shell.", 9, ["Democracy", "Economy"], ["doge_fr_eo", "treasury_payment_access", "safeguard_executive"], "FIX-SAFE-002", "Democracy", "Agency Restructuring"),
  evt("EVT-2026-0708-149", "2026-07-08", "Civil Service", "Agencies continue Schedule Policy/Career position transfers under E.O. 14410, expanding the pool of career staff removable without traditional adverse-action appeals.", 9, ["Democracy"], ["schedule_policy_career_eo_2026", "opm_schedule_f", "merit_systems_board"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0710-150", "2026-07-10", "Environment", "Federal lands access rollback implementation continues alongside earlier drilling and emergency energy directives, compounding cumulative environmental deregulation.", 8, ["Environment"], ["federal_lands_restrictions_eo_2026", "federal_lands_drilling", "epa_vehicle_emissions_rollback"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0115-151", "2026-01-15", "Transparency", "Presidential Records Act and FOIA backlog pressures intensify as proactive disclosure narrows; SAFE-004 transparency mandates remain the structural counter-proposal.", 7, ["Democracy"], ["presidential_records_crs", "foia_gov", "doj_oip_foia"], "FIX-SAFE-004", "Democracy", "Transparency"),
  evt("EVT-2026-0215-152", "2026-02-15", "Voting", "Election officials face continued federal funding and CISA support uncertainty while SAVE Act-style citizenship proof mandates advance in Congress, raising access barriers.", 8, ["Democracy", "Civil Rights"], ["save_act_2025", "save_act_crs", "cisa_election_security_pause"], "FIX-VR-001", "Democracy", "Voting Rights"),
  evt("EVT-2026-0315-153", "2026-03-15", "Labor", "NLRB and DOL rollback trajectory continues to weaken union recognition and overtime protections referenced across Project 2025 labor chapters.", 7, ["Economy"], ["nlrb_rollback", "dol_overtime_rollback", "bls_wages"], "FIX-ECO-001", "Economy", "Labor"),
  evt("EVT-2026-0415-154", "2026-04-15", "Education", "Education Department restructuring and Title IX sports rule shifts continue limiting civil-rights enforcement capacity for students.", 8, ["Education", "Civil Rights"], ["ed_restructuring", "ed_dept_titleix", "ed_title_ix_sports_rule"], "FIX-ED-001", "Education", "Education"),
  evt("EVT-2026-0515-155", "2026-05-15", "Immigration", "ICE expansion and deportation operational directives continue large-scale interior enforcement alongside customs enforcement intensification.", 8, ["Immigration", "Civil Rights"], ["ice_expansion_eo", "dhs_deportation_ops", "customs_enforcement_eo_2026"], "FIX-VR-001", "Immigration", "Immigration Enforcement"),
  evt("EVT-2026-0520-156", "2026-05-20", "Healthcare", "Medicaid work requirements and ACA subsidy cliff impacts continue raising uninsured risk while CDC grant pauses constrain local health capacity.", 8, ["Healthcare"], ["cms_medicaid_work_rules", "aca_premium", "cdc_grant_pause"], "FIX-HC-001", "Healthcare", "Health Agencies"),
  evt("EVT-2026-0612-157", "2026-06-12", "Climate", "EPA methane and vehicle emissions rollback stack continues after energy-emergency permitting acceleration, widening climate enforcement gaps.", 9, ["Environment"], ["epa_methane_rollback", "epa_vehicle_emissions_rollback", "paris_withdrawal"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0618-158", "2026-06-18", "Economy", "CFPB and FTC enforcement pauses leave consumer fraud and unfair-practice cases under-enforced during a contracting deregulatory push.", 7, ["Economy"], ["cfpb_enforcement_pause", "ftc_enforcement_pause", "ftc_consumer_protection_cuts"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0628-159", "2026-06-28", "Civil Rights", "HUD fair housing pauses and EEOC enforcement shifts reduce federal anti-discrimination capacity in housing and employment.", 8, ["Civil Rights", "Economy"], ["hud_fair_housing_pause", "eeoc_enforcement_shift", "dei_termination_eo"], "FIX-VR-001", "Civil Rights", "Civil Rights Rollbacks"),
  evt("EVT-2026-0705-160", "2026-07-05", "Democracy", "Post-DOGE-temporary sunset, watchdogs document continuity of workforce optimization directives and Schedule Policy/Career removals as the core administrative-state strategy.", 9, ["Democracy", "Economy"], ["doge_fr_eo", "schedule_policy_career_eo_2026", "cpr_p2025_progress"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0709-161", "2026-07-09", "Media", "FCC media and broadcast policy shifts continue reshaping ownership and speech rules amid reduced proactive press access at agencies.", 6, ["Democracy"], ["fcc_broadcast_rules", "fcc_media_policy", "speech_censorship_eo"], "FIX-SAFE-004", "Democracy", "Media & Communications"),
  evt("EVT-2026-0711-162", "2026-07-11", "Documentation Milestone", "Project Sunrise Pass 26 logs 160+ verified administrative actions spanning Federal Register DOGE orders, Schedule Policy/Career implementation, AI deregulation, lands access rollbacks, and health-agency politicization.", 9, ["Democracy"], ["wh_actions_index_2026", "schedule_policy_career_eo_2026", "doge_fr_eo", "safeguard_transparency"], "FIX-SAFE-004", "Democracy", "Transparency"),
];

// citations
{
  const file = join(ROOT, "lib/data/citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 26 tracker citations")) {
    src = src.replace(/\n};\s*$/, ",\n" + newCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("citations patched");
  } else console.log("citations already patched");
}

// events
{
  const file = join(ROOT, "lib/data/timeline-events.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("EVT-2026-0711-162")) {
    src = src.replace(/\n\];\s*\n\n\/\*\* Events grouped by calendar month/, "\n" + events.join("\n") + "\n];\n\n/** Events grouped by calendar month");
    writeFileSync(file, src);
    console.log("added", events.length, "events");
  } else console.log("events already present");
}
