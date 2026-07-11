/**
 * Pass 27 - Tracker 162 -> 182+
 * Run: node scripts/pass27/apply-tracker.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const newCitations = `
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
  evt("EVT-2026-0519-163", "2026-05-19", "Executive Order", "E.O. 14405 integrates financial-technology innovation into regulatory frameworks, accelerating fintech-friendly reinterpretation of banking and consumer-finance rules.", 7, ["Economy"], ["fintech_eo_2026", "cfpb_enforcement_pause", "ftc_enforcement_pause"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0519-164", "2026-05-19", "Executive Order", "E.O. 14406 on restoring integrity to America's financial system reframes financial-regulation priorities alongside the same-day fintech innovation order.", 7, ["Economy", "Democracy"], ["financial_integrity_eo_2026", "fintech_eo_2026", "sec_climate_guidance"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0622-165", "2026-06-22", "Executive Order", "E.O. 14412 directs agencies to secure the nation against advanced cryptographic attacks, expanding national-security tech mandates.", 6, ["Democracy", "Economy"], ["crypto_attacks_eo_2026", "ai_innovation_eo_2026", "intelligence_briefing_restrictions"], "FIX-SAFE-002", "Democracy", "National Security"),
  evt("EVT-2026-0622-166", "2026-06-22", "Executive Order", "E.O. 14413 on quantum innovation pairs with cryptographic-security directives, concentrating advanced-tech industrial policy in executive orders.", 5, ["Economy", "Democracy"], ["quantum_eo_2026", "crypto_attacks_eo_2026", "wh_eo_index_2026"], "FIX-SAFE-002", "Economy", "National Security"),
  evt("EVT-2026-0625-167", "2026-06-25", "Executive Order", "E.O. 14414 advances regenerative agriculture and farm resilience while environmental rollbacks elsewhere risk weakening conservation enforcement baselines.", 6, ["Environment", "Economy"], ["regenerative_ag_eo_2026", "epa_methane_rollback", "energy_emergency_eo"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0712-168", "2026-07-12", "Oversight", "GAO improper-payments oversight capacity remains critical as Schedule Policy/Career removals threaten career staff who flag waste inside large entitlement and contracting programs.", 8, ["Democracy", "Economy"], ["gao_improper_payments", "schedule_policy_career_eo_2026", "gao_healthcare"], "FIX-SAFE-004", "Democracy", "Oversight & Accountability"),
  evt("EVT-2026-0712-169", "2026-07-12", "Labor Market", "BLS employment situation reporting continues as the official labor scorecard while NLRB and DOL rollbacks reshape worker bargaining power behind the headline jobs number.", 6, ["Economy"], ["bls_employment_sit", "nlrb_rollback", "dol_overtime_rollback"], "FIX-ECO-001", "Economy", "Labor"),
  evt("EVT-2026-0301-170", "2026-03-01", "Civil Service", "Mid-year Schedule Policy/Career implementation continues converting policy-influencing career roles to at-will status under E.O. 14410 and OPM rulemaking.", 9, ["Democracy"], ["schedule_policy_career_eo_2026", "opm_schedule_policy_rule_2026", "gao_schedule_f"], "FIX-SAFE-002", "Democracy", "Personnel & Civil Service"),
  evt("EVT-2026-0401-171", "2026-04-01", "Immigration", "Interior enforcement and customs priorities remain elevated under ICE expansion and customs-enforcement orders, sustaining high-severity deportation operations.", 8, ["Immigration", "Civil Rights"], ["ice_expansion_eo", "customs_enforcement_eo_2026", "dhs_deportation_ops"], "FIX-IMM-001", "Immigration", "Immigration Enforcement"),
  evt("EVT-2026-0501-172", "2026-05-01", "Healthcare", "Childhood vaccine-schedule realignment work continues under E.O. 14407 while CDC grant pauses constrain state and local immunization program capacity.", 8, ["Healthcare"], ["vaccine_realign_eo_2026", "cdc_grant_pause", "who_withdrawal"], "FIX-HC-001", "Healthcare", "Health Agencies"),
  evt("EVT-2026-0505-173", "2026-05-05", "Environment", "Federal lands access rollback (E.O. 14408) proceeds alongside drilling and energy-emergency directives, compounding cumulative public-lands deregulation.", 8, ["Environment"], ["federal_lands_restrictions_eo_2026", "federal_lands_drilling", "regenerative_ag_eo_2026"], "FIX-ENV-001", "Environment", "Energy & Environment"),
  evt("EVT-2026-0601-174", "2026-06-01", "Economy", "Fintech and financial-integrity orders begin agency implementation planning while CFPB and FTC enforcement pauses leave consumer-protection gaps.", 7, ["Economy"], ["fintech_eo_2026", "financial_integrity_eo_2026", "cfpb_enforcement_pause"], "FIX-ECO-001", "Economy", "Deregulation"),
  evt("EVT-2026-0608-175", "2026-06-08", "AI Governance", "AI innovation order's rejection of mandatory frontier-model licensing remains the administration's baseline as agencies stand up voluntary industry frameworks.", 7, ["Economy", "Democracy"], ["ai_innovation_eo_2026", "ai_innovation_fr_2026", "crypto_attacks_eo_2026"], "FIX-SAFE-002", "Economy", "Deregulation"),
  evt("EVT-2026-0611-176", "2026-06-11", "Voting", "SAVE Act-style citizenship-proof mandates and election-security support uncertainty continue to pressure election administrators ahead of the mid-decade cycle.", 8, ["Democracy", "Civil Rights"], ["save_act_2025", "save_act_crs", "cisa_election_security_pause"], "FIX-VR-001", "Democracy", "Voting Rights"),
  evt("EVT-2026-0616-177", "2026-06-16", "Education", "Education Department restructuring and Title IX sports rule shifts continue reducing civil-rights enforcement bandwidth for students.", 8, ["Education", "Civil Rights"], ["ed_restructuring", "ed_dept_titleix", "ed_title_ix_sports_rule"], "FIX-ED-001", "Education", "Education"),
  evt("EVT-2026-0620-178", "2026-06-20", "Civil Rights", "DEI termination directives and contractor anti-DEI conditions continue reshaping federal employment and procurement culture rules.", 8, ["Civil Rights", "Economy"], ["dei_termination_eo", "dol_ofccp_rollback", "eeoc_enforcement_shift"], "FIX-VR-001", "Civil Rights", "Civil Rights Rollbacks"),
  evt("EVT-2026-0627-179", "2026-06-27", "Transparency", "FOIA backlog and Presidential Records Act pressures persist as proactive disclosure narrows; SAFE-004 transparency mandates remain the structural counter-proposal.", 7, ["Democracy"], ["foia_gov", "presidential_records_crs", "doj_oip_foia"], "FIX-SAFE-004", "Democracy", "Transparency"),
  evt("EVT-2026-0703-180", "2026-07-03", "DOGE Continuity", "As the DOGE temporary organization sunset approaches, workforce-optimization and payment-system access authorities remain the durable administrative-state strategy.", 9, ["Democracy", "Economy"], ["doge_fr_eo", "doge_workforce_fr", "treasury_payment_access"], "FIX-SAFE-002", "Democracy", "Agency Restructuring"),
  evt("EVT-2026-0706-181", "2026-07-06", "Media", "FCC broadcast and media-ownership policy shifts continue amid reduced proactive press access, reshaping information-market rules.", 6, ["Democracy"], ["fcc_broadcast_rules", "fcc_media_policy", "speech_censorship_eo"], "FIX-MED-001", "Democracy", "Media & Communications"),
  evt("EVT-2026-0711-182", "2026-07-11", "Documentation Milestone", "Project Sunrise Pass 27 logs 180+ verified actions spanning fintech deregulation, cryptographic and quantum EOs, regenerative agriculture directives, and continued Schedule Policy/Career implementation.", 9, ["Democracy"], ["wh_eo_index_2026", "fintech_eo_2026", "schedule_policy_career_eo_2026", "safeguard_transparency"], "FIX-SAFE-004", "Democracy", "Transparency"),
];

{
  const file = join(ROOT, "lib/data/citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 27 tracker citations")) {
    src = src.replace(/\n};\s*$/, ",\n" + newCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("citations patched");
  } else console.log("citations already patched");
}

{
  const file = join(ROOT, "lib/data/timeline-events.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("EVT-2026-0519-163")) {
    src = src.replace(
      /\n\];\s*\n\n\/\*\* Events grouped by calendar month/,
      "\n" + events.join("\n") + "\n];\n\n/** Events grouped by calendar month"
    );
    writeFileSync(file, src);
    console.log("added", events.length, "events");
  } else console.log("events already present");
}
