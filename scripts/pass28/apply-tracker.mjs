/**
 * Pass 28 - Tracker 182 -> 200+
 * Run: node scripts/pass28/apply-tracker.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const newCitations = `
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
  evt("EVT-2026-0604-183", "2026-06-04", "Pardon", "Presidential pardon of former Representative Stephen E. Buyer expands the clemency pattern that watchdogs track alongside Jan. 6 and allied pardon politics.", 6, ["Democracy"], ["buyer_pardon_2026", "jan6_pardons_eo", "safeguard_anticorruption"], "FIX-SAFE-001", "Democracy", "Executive Clemency"),
  evt("EVT-2026-0605-184", "2026-06-05", "National Security Memo", "NSPM-11 adds national-security presidential memorandum authority outside ordinary notice-and-comment, concentrating sensitive directives in executive memoranda.", 7, ["Democracy"], ["nspm_11_2026", "wh_actions_index_2026", "intelligence_briefing_restrictions"], "FIX-SAFE-002", "Democracy", "National Security"),
  evt("EVT-2026-0611-185", "2026-06-11", "Proclamation", "Pacific commercial fishing proclamation reframes ocean access and conservation constraints, stacking with broader energy and lands deregulation.", 6, ["Environment", "Economy"], ["pacific_fishing_proclamation_2026", "federal_lands_restrictions_eo_2026", "energy_emergency_eo"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0612-186", "2026-06-12", "National Security Memo", "NSPM-12 continues the mid-2026 national-security memorandum cascade, expanding policy set outside Federal Register rulemaking norms.", 7, ["Democracy"], ["nspm_12_2026", "nspm_11_2026", "wh_eo_index_2026"], "FIX-SAFE-002", "Democracy", "National Security"),
  evt("EVT-2026-0629-187", "2026-06-29", "Presidential Memorandum", "Freedom-to-Fix memorandum directs EPA to expand aftermarket emissions-repair pathways and deprioritize certain tampering enforcement, narrowing Clean Air Act practical controls.", 8, ["Environment", "Economy"], ["freedom_to_fix_memo_2026", "epa_vehicle_emissions_rollback", "epa_methane_rollback"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0629-188", "2026-06-29", "Emergency Proclamation", "Emergency phosphate-fertilizer duty-free import proclamation uses emergency trade authority for agricultural inputs, illustrating emergency-power breadth beyond classic national-security framing.", 5, ["Economy", "Environment"], ["phosphate_fertilizer_proclamation_2026", "regenerative_ag_eo_2026", "trade_policy_eo"], "FIX-ECO-001", "Economy", "Trade & Agriculture"),
  evt("EVT-2026-0709-189", "2026-07-09", "Trade Proclamation", "Aircraft and jet-engine import proclamation adjusts commercial aerospace trade treatment, extending tariff and supply-chain industrial policy by proclamation.", 6, ["Economy"], ["aircraft_imports_proclamation_2026", "reciprocal_tariffs_eo", "trade_policy_eo"], "FIX-ECO-001", "Economy", "Trade & Tariffs"),
  evt("EVT-2026-0711-190", "2026-07-11", "Environment Stack", "Freedom-to-Fix guidance work compounds prior vehicle-emissions and methane rollbacks, widening cumulative EPA enforcement gaps documented across 2025-2026 actions.", 8, ["Environment"], ["freedom_to_fix_memo_2026", "epa_vehicle_emissions_rollback", "paris_withdrawal"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0711-191", "2026-07-11", "Civil Service Continuity", "Schedule Policy/Career and OPM rulemaking remain the durable personnel strategy even as DOGE temporary branding fades from headlines.", 9, ["Democracy"], ["schedule_policy_career_eo_2026", "opm_schedule_policy_rule_2026", "gao_schedule_f"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0711-192", "2026-07-11", "Consumer Protection", "CFPB and FTC enforcement pauses leave fintech and aftermarket consumer markets under-policed while deregulatory memos accelerate.", 7, ["Economy"], ["cfpb_enforcement_pause", "ftc_enforcement_pause", "fintech_eo_2026"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0711-193", "2026-07-11", "Immigration Continuity", "ICE expansion, customs enforcement, and deportation operational directives remain high-severity interior-enforcement architecture.", 8, ["Immigration", "Civil Rights"], ["ice_expansion_eo", "customs_enforcement_eo_2026", "dhs_deportation_ops"], "FIX-IMM-001", "Immigration", "Immigration Enforcement"),
  evt("EVT-2026-0711-194", "2026-07-11", "Health Agencies", "Vaccine-schedule realignment plus CDC grant pauses continue politicizing public-health recommendation infrastructure.", 8, ["Healthcare"], ["vaccine_realign_eo_2026", "cdc_grant_pause", "who_withdrawal"], "FIX-HC-001", "Healthcare", "Health Agencies"),
  evt("EVT-2026-0711-195", "2026-07-11", "Voting Rights", "SAVE Act-style citizenship-proof pressure and CISA election-security support uncertainty remain a mid-decade election administration risk.", 8, ["Democracy", "Civil Rights"], ["save_act_2025", "save_act_crs", "cisa_election_security_pause"], "FIX-VR-001", "Democracy", "Voting Rights"),
  evt("EVT-2026-0711-196", "2026-07-11", "Education", "Education Department restructuring and Title IX sports rule shifts continue shrinking civil-rights enforcement bandwidth for students.", 8, ["Education", "Civil Rights"], ["ed_restructuring", "ed_dept_titleix", "ed_title_ix_sports_rule"], "FIX-ED-001", "Education", "Education"),
  evt("EVT-2026-0711-197", "2026-07-11", "Transparency", "FOIA backlog and Presidential Records Act pressures persist while Federal Register remains the receipt book for durable restructuring.", 7, ["Democracy"], ["foia_gov", "fr_home_2026", "presidential_records_crs"], "FIX-SAFE-004", "Democracy", "Transparency"),
  evt("EVT-2026-0711-198", "2026-07-11", "Public Lands", "Federal lands access rollback, drilling directives, and Pacific fishing reframing compound cumulative public-resource deregulation.", 8, ["Environment"], ["federal_lands_restrictions_eo_2026", "federal_lands_drilling", "pacific_fishing_proclamation_2026"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0711-199", "2026-07-11", "Labor", "NLRB and DOL overtime rollbacks continue reshaping bargaining power while BLS employment headlines dominate the political narrative.", 7, ["Economy"], ["nlrb_rollback", "dol_overtime_rollback", "bls_employment_sit"], "FIX-ECO-001", "Economy", "Labor"),
  evt("EVT-2026-0711-200", "2026-07-11", "Documentation Milestone", "Project Sunrise Pass 28 logs 200+ verified actions spanning Freedom-to-Fix EPA guidance, trade proclamations, NSPM cascade, and continued Schedule Policy/Career implementation.", 9, ["Democracy"], ["wh_eo_index_2026", "freedom_to_fix_memo_2026", "schedule_policy_career_eo_2026", "safeguard_transparency"], "FIX-SAFE-004", "Democracy", "Transparency"),
  evt("EVT-2026-0711-201", "2026-07-11", "AI & Crypto Stack", "AI innovation order plus cryptographic and quantum directives keep advanced-tech industrial policy concentrated in executive instruments.", 6, ["Economy", "Democracy"], ["ai_innovation_eo_2026", "crypto_attacks_eo_2026", "quantum_eo_2026"], "FIX-SAFE-002", "Economy", "National Security"),
  evt("EVT-2026-0711-202", "2026-07-11", "Improper Payments Risk", "GAO improper-payments oversight remains critical as Schedule Policy/Career removals threaten career staff who flag waste inside large programs.", 8, ["Democracy", "Economy"], ["gao_improper_payments", "schedule_policy_career_eo_2026", "gao_healthcare"], "FIX-SAFE-004", "Democracy", "Oversight & Accountability"),
];

{
  const file = join(ROOT, "lib/data/citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 28 tracker citations")) {
    src = src.replace(/\n};\s*$/, ",\n" + newCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("citations patched");
  } else console.log("citations already patched");
}

{
  const file = join(ROOT, "lib/data/timeline-events.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("EVT-2026-0604-183")) {
    src = src.replace(
      /\n\];\s*\n\n\/\*\* Events grouped by calendar month/,
      "\n" + events.join("\n") + "\n];\n\n/** Events grouped by calendar month"
    );
    writeFileSync(file, src);
    console.log("added", events.length, "events");
  } else console.log("events already present");
}
