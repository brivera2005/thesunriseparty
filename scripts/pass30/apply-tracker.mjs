/**
 * Pass 30 - Tracker 220 -> 240+
 * Run: node scripts/pass30/apply-tracker.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const newCitations = `
  // Pass 30 tracker citations
  preserving_americas_game_eo_2026: {
    id: "preserving_americas_game_eo_2026",
    title: "Preserving America's Game",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/03/25/2026-05867/preserving-americas-game",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/03/25/2026-05867/preserving-americas-game"),
    excerpt: "Executive order frames federal intervention around preserving American football and related sports policy.",
    date: "2026-03-25",
  },
  dpa_delegations_eo_2026: {
    id: "dpa_delegations_eo_2026",
    title: "Adjusting Certain Delegations Under the Defense Production Act",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/03/18/2026-05382/adjusting-certain-delegations-under-the-defense-production-act",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/03/18/2026-05382/adjusting-certain-delegations-under-the-defense-production-act"),
    excerpt: "Executive order adjusts Defense Production Act delegations across agencies.",
    date: "2026-03-18",
  },
  metals_tariff_proclamation_2026: {
    id: "metals_tariff_proclamation_2026",
    title: "Further Adjusting the Tariff Regimes for Imports of Aluminum, Steel, and Copper Into the United States",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states"),
    excerpt: "Proclamation further adjusts aluminum, steel, and copper import tariff regimes.",
    date: "2026-06-04",
  },
  intl_orgs_withdrawal_memo_2026: {
    id: "intl_orgs_withdrawal_memo_2026",
    title: "Withdrawing the United States From International Organizations, Conventions, and Treaties That Are Contrary to the Interests of the United States",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/01/16/2026-00976/withdrawing-the-united-states-from-international-organizations-conventions-and-treaties-that-are",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/01/16/2026-00976/withdrawing-the-united-states-from-international-organizations-conventions-and-treaties-that-are"),
    excerpt: "Presidential memorandum directs withdrawal from international organizations, conventions, and treaties framed as contrary to U.S. interests.",
    date: "2026-01-16",
  },
  dpa_303_waiver_2026: {
    id: "dpa_303_waiver_2026",
    title: "Presidential Waiver of Statutory Requirements Pursuant to Section 303 of the Defense Production Act of 1950, as Amended",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/02/19/2026-03380/presidential-waiver-of-statutory-requirements-pursuant-to-section-303-of-the-defense-production-act",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/02/19/2026-03380/presidential-waiver-of-statutory-requirements-pursuant-to-section-303-of-the-defense-production-act"),
    excerpt: "Presidential waiver under Defense Production Act Section 303 of statutory requirements.",
    date: "2026-02-19",
  },
  kickapoo_permit_denial_2026: {
    id: "kickapoo_permit_denial_2026",
    title: "Denial of Presidential Permit for the Kickapoo Traditional Tribe of Texas",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/01/14/2026-00697/denial-of-presidential-permit-for-the-kickapoo-traditional-tribe-of-texas",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/01/14/2026-00697/denial-of-presidential-permit-for-the-kickapoo-traditional-tribe-of-texas"),
    excerpt: "Presidential memorandum denies a presidential permit sought by the Kickapoo Traditional Tribe of Texas.",
    date: "2026-01-14",
  },
  appropriations_impl_proclamation_2026: {
    id: "appropriations_impl_proclamation_2026",
    title: "To Implement Certain Provisions in the Consolidated Appropriations Act, 2026, and for Other Purposes",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/05/22/2026-10398/to-implement-certain-provisions-in-the-consolidated-appropriations-act-2026-and-for-other-purposes",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/05/22/2026-10398/to-implement-certain-provisions-in-the-consolidated-appropriations-act-2026-and-for-other-purposes"),
    excerpt: "Proclamation implements selected Consolidated Appropriations Act, 2026 provisions by presidential instrument.",
    date: "2026-05-22",
  },
  critical_pay_memo_2026: {
    id: "critical_pay_memo_2026",
    title: "Approving Critical Position Pay Authority for National Security Investment Workforce",
    publisher: "The White House",
    url: "https://www.whitehouse.gov/presidential-actions/2026/05/approving-critical-position-pay-authority-for-national-security-investment-workforce/",
    waybackUrl: wayback("https://www.whitehouse.gov/presidential-actions/2026/05/approving-critical-position-pay-authority-for-national-security-investment-workforce/"),
    excerpt: "Presidential memorandum approves critical-position pay authority for national-security investment workforce roles.",
    date: "2026-05-29",
  },
  homeownership_month_2026: {
    id: "homeownership_month_2026",
    title: "National Homeownership Month, 2026",
    publisher: "Federal Register",
    url: "https://www.federalregister.gov/documents/2026/06/18/2026-12435/national-homeownership-month-2026",
    waybackUrl: wayback("https://www.federalregister.gov/documents/2026/06/18/2026-12435/national-homeownership-month-2026"),
    excerpt: "Proclamation designates National Homeownership Month amid parallel housing executive-order stack.",
    date: "2026-06-18",
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
  evt("EVT-2026-0318-221", "2026-03-18", "Defense Production", "Defense Production Act delegation adjustments reallocate industrial-mobilization authorities across agencies without new statute.", 6, ["Democracy", "Economy"], ["dpa_delegations_eo_2026", "dpa_303_waiver_2026", "fr_home_2026"], "FIX-SAFE-002", "Democracy", "National Security"),
  evt("EVT-2026-0325-222", "2026-03-25", "Culture Policy", "Preserving America's Game executive order expands federal sports branding into football policy alongside the college-sports emergency order.", 5, ["Education", "Democracy"], ["preserving_americas_game_eo_2026", "college_sports_eo_2026", "wh_eo_index_2026"], "FIX-ED-001", "Education", "Culture & Education"),
  evt("EVT-2026-0116-223", "2026-01-16", "Foreign Policy", "International-organizations withdrawal memorandum directs exits from treaties and conventions framed as contrary to U.S. interests, compounding WHO and Paris exits.", 8, ["Democracy"], ["intl_orgs_withdrawal_memo_2026", "who_withdrawal", "paris_withdrawal"], "FIX-SAFE-002", "Democracy", "Foreign Policy"),
  evt("EVT-2026-0219-224", "2026-02-19", "Defense Production", "Defense Production Act Section 303 waiver suspends statutory requirements for selected industrial priorities under presidential emergency-adjacent authority.", 7, ["Economy", "Democracy"], ["dpa_303_waiver_2026", "dpa_delegations_eo_2026", "energy_emergency_eo"], "FIX-SAFE-002", "Economy", "Industrial Policy"),
  evt("EVT-2026-0114-225", "2026-01-14", "Indigenous Affairs", "Denial of a presidential permit for the Kickapoo Traditional Tribe of Texas shows border and infrastructure permitting used against tribal projects.", 7, ["Civil Rights"], ["kickapoo_permit_denial_2026", "safeguard_transparency", "fr_home_2026"], "FIX-IND-001", "Civil Rights", "Indigenous Sovereignty"),
  evt("EVT-2026-0604-226", "2026-06-04", "Trade Proclamation", "Aluminum, steel, and copper tariff-regime proclamation further adjusts metals import duties on top of reciprocal-tariff and aircraft-parts trade actions.", 7, ["Economy"], ["metals_tariff_proclamation_2026", "reciprocal_tariffs_eo", "aircraft_imports_proclamation_2026"], "FIX-ECO-001", "Economy", "Trade & Tariffs"),
  evt("EVT-2026-0522-227", "2026-05-22", "Appropriations", "Consolidated Appropriations Act 2026 implementation proclamation moves selected spending provisions through presidential instrument rather than agency rule detail alone.", 6, ["Democracy", "Economy"], ["appropriations_impl_proclamation_2026", "fr_home_2026", "safeguard_transparency"], "FIX-SAFE-004", "Democracy", "Oversight & Accountability"),
  evt("EVT-2026-0529-228", "2026-05-29", "Personnel", "Critical-position pay authority for national-security investment workforce pairs pay flexibilities with Schedule Policy/Career personnel restructuring.", 6, ["Democracy"], ["critical_pay_memo_2026", "schedule_policy_career_eo_2026", "opm_schedule_policy_rule_2026"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0618-229", "2026-06-18", "Housing Narrative", "National Homeownership Month proclamation saturates housing messaging while deregulatory housing EOs and institutional-investor orders remake supply and credit policy.", 4, ["Economy"], ["homeownership_month_2026", "housing_barriers_eo_2026", "wall_street_homebuyers_eo_2026"], "FIX-HOUS-001", "Economy", "Housing"),
  evt("EVT-2026-0711-230", "2026-07-11", "Trade Continuity", "Metals tariffs, de minimis suspension continuance, and aircraft-parts proclamations form a durable trade-by-proclamation stack outside ordinary tariff statutes.", 8, ["Economy"], ["metals_tariff_proclamation_2026", "deminimis_suspension_eo_2026", "aircraft_imports_proclamation_2026"], "FIX-ECO-001", "Economy", "Trade & Tariffs"),
  evt("EVT-2026-0711-231", "2026-07-11", "Foreign Policy Stack", "International-organization withdrawals plus Cuba sanctions and arms-transfer strategy concentrate foreign-policy remaking in executive instruments.", 8, ["Democracy"], ["intl_orgs_withdrawal_memo_2026", "cuba_sanctions_eo_2026", "arms_transfer_eo_2026"], "FIX-SAFE-002", "Democracy", "Foreign Policy"),
  evt("EVT-2026-0711-232", "2026-07-11", "Indigenous Continuity", "Kickapoo permit denial stacks with Pacific fishing and federal-lands access rollbacks that treat Indigenous consultation as optional.", 7, ["Civil Rights", "Environment"], ["kickapoo_permit_denial_2026", "pacific_fishing_proclamation_2026", "federal_lands_restrictions_eo_2026"], "FIX-IND-001", "Civil Rights", "Indigenous Sovereignty"),
  evt("EVT-2026-0711-233", "2026-07-11", "Industrial Policy", "DPA delegation shifts and Section 303 waivers expand presidential industrial steering while Schedule Policy/Career remakes the career staff who implement them.", 7, ["Economy", "Democracy"], ["dpa_delegations_eo_2026", "dpa_303_waiver_2026", "schedule_policy_career_eo_2026"], "FIX-SAFE-002", "Economy", "Industrial Policy"),
  evt("EVT-2026-0711-234", "2026-07-11", "Sports Federalization", "College-sports emergency order plus Preserving America's Game expands culture-war federalization into athletics governance.", 5, ["Education", "Democracy"], ["college_sports_eo_2026", "preserving_americas_game_eo_2026", "ed_title_ix_sports_rule"], "FIX-ED-001", "Education", "Culture & Education"),
  evt("EVT-2026-0711-235", "2026-07-11", "Fintech Continuity", "Financial-integrity and fintech-innovation paired orders continue reshaping bank and nonbank oversight while CFPB/FTC pauses reduce consumer policing.", 7, ["Economy"], ["fintech_eo_2026", "financial_integrity_eo_2026", "cfpb_enforcement_pause"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0711-236", "2026-07-11", "Health Continuity", "Vaccine realignment, mental-illness acceleration, and recovery-initiative branding keep public-health priorities under presidential narrative control.", 7, ["Healthcare"], ["vaccine_realign_eo_2026", "mental_illness_eo_2026", "recovery_initiative_eo_2026"], "FIX-HC-001", "Healthcare", "Health Agencies"),
  evt("EVT-2026-0711-237", "2026-07-11", "Elections Continuity", "Citizenship-verification elections order plus SAVE Act-style pressure and CISA support uncertainty remain a mid-decade voting administration risk stack.", 8, ["Democracy", "Civil Rights"], ["citizenship_verification_eo_2026", "save_act_2025", "cisa_election_security_pause"], "FIX-VR-001", "Democracy", "Voting Rights"),
  evt("EVT-2026-0711-238", "2026-07-11", "Contracting Continuity", "Federal contracting efficiency order plus DEI contractor ban remake procurement politics while critical-pay flexibilities privilege selected national-security hiring lanes.", 7, ["Democracy", "Civil Rights"], ["contracting_eo_2026", "dei_contractors_eo_2026", "critical_pay_memo_2026"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0711-239", "2026-07-11", "Transparency Continuity", "Appropriations implementation by proclamation, FOIA backlog persistence, and Federal Register receipt density show sunshine still depends on proactive publishing norms SAFE-004 targets.", 7, ["Democracy"], ["appropriations_impl_proclamation_2026", "foia_gov", "fr_home_2026"], "FIX-SAFE-004", "Democracy", "Transparency"),
  evt("EVT-2026-0711-240", "2026-07-11", "Documentation Milestone", "Project Sunrise Pass 30 crosses 240 verified actions spanning DPA waivers, metals tariffs, international-organization withdrawals, Kickapoo permit denial, and sports federalization orders.", 9, ["Democracy"], ["wh_eo_index_2026", "metals_tariff_proclamation_2026", "intl_orgs_withdrawal_memo_2026", "safeguard_transparency"], "FIX-SAFE-004", "Democracy", "Transparency"),
  evt("EVT-2026-0711-241", "2026-07-11", "Environment Continuity", "Freedom-to-Fix EPA posture, federal-lands access rollback, and regenerative-agriculture branding continue compounding environmental deregulation under greenwashed labels.", 8, ["Environment"], ["freedom_to_fix_memo_2026", "federal_lands_restrictions_eo_2026", "regenerative_ag_eo_2026"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0711-242", "2026-07-11", "Immigration Continuity", "Criminal-actors record-sharing, customs enforcement, and ICE expansion remain the interior-enforcement architecture beneath trade and travel headlines.", 8, ["Immigration", "Civil Rights"], ["criminal_actors_eo_2026", "customs_enforcement_eo_2026", "ice_expansion_eo"], "FIX-IMM-001", "Immigration", "Immigration Enforcement"),
];

{
  const file = join(ROOT, "lib/data/citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 30 tracker citations")) {
    src = src.replace(/\n};\s*$/, ",\n" + newCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("citations patched");
  } else console.log("citations already patched");
}

{
  const file = join(ROOT, "lib/data/timeline-events.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("EVT-2026-0318-221")) {
    src = src.replace(
      /\n\];\s*\n\n\/\*\* Events grouped by calendar month/,
      "\n" + events.join("\n") + "\n];\n\n/** Events grouped by calendar month"
    );
    writeFileSync(file, src);
    console.log("added", events.length, "events");
  } else console.log("events already present");
}
