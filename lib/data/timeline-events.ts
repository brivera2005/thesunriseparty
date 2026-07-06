import type { TimelineEvent } from "@/lib/types";
import { citations } from "./citations";
import { observerBase, cprTrackerBase } from "./tracker-sources";

const observer = (path = ""): { name: string; url: string } => ({
  name: "project2025.observer",
  url: path ? `${observerBase}${path}` : observerBase,
});

const cpr = (): { name: string; url: string } => ({
  name: "CPR Executive Action Tracker",
  url: cprTrackerBase,
});

export const timelineEvents: TimelineEvent[] = [
  {
    Event_ID: "EVT-2025-0120-001",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Day One rescission of 78 Biden executive orders on climate, equity, and regulation — erasing prior administration policy in a single stroke, a core Project 2025 implementation tactic.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Civil Rights", "Democracy"],
    Sources: [citations.initial_rescissions_eo, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Day One Executive Actions",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-002",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Schedule F reinstated — civil servants in 'policy-influencing' roles reclassified as at-will employees, enabling politically motivated firings without merit protections.",
    Severity_Score: 10,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.schedule_f_eo, citations.gao_schedule_f],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-003",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Federal hiring freeze imposed on civilian agencies, beginning workforce contraction aligned with Project 2025's plan to shrink the administrative state by attrition.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.federal_hiring_freeze, citations.doge_eo],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-004",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Birthright citizenship order directs agencies to deny citizenship documents to U.S.-born children of undocumented parents — a direct challenge to the 14th Amendment now blocked in federal court.",
    Severity_Score: 10,
    Impacted_Sectors: ["Immigration", "Civil Rights", "Democracy"],
    Sources: [citations.birthright_eo, citations.birthright_litigation],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Immigration Enforcement",
    externalTrackers: [observer(), { name: "ACLU", url: "https://www.aclu.org/project-2025-explained" }],
  },
  {
    Event_ID: "EVT-2025-0120-005",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "National energy emergency declared to expedite fossil fuel permitting and restrict renewable approvals — implementing Project 2025's deregulatory energy agenda.",
    Severity_Score: 9,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.energy_emergency_eo, citations.paris_withdrawal],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-006",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Department of Government Efficiency (DOGE) established with access to federal payment systems and agency data — an unprecedented extra-constitutional advisory body driving cuts.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.doge_eo, citations.cpr_p2025_progress],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0120-007",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "All federal DEI offices terminated and employees placed on leave; equity-related contracting and training requirements rescinded across every agency.",
    Severity_Score: 7,
    Impacted_Sectors: ["Civil Rights", "Education"],
    Sources: [citations.dei_termination_eo],
    Linked_Fix_ID: "FIX-ED-001",
    category: "Civil Rights",
    p2025Pillar: "Culture & Civil Rights",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-0120-008",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "ICE directed to expand detention, resume border wall construction, and end catch-and-release — implementing Project 2025's mass deportation infrastructure goals.",
    Severity_Score: 9,
    Impacted_Sectors: ["Immigration", "Civil Rights"],
    Sources: [citations.ice_expansion_eo, citations.aclu_immigration],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Immigration Enforcement",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-009",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "U.S. withdrawal from the Paris Climate Agreement initiated for a second time, halting international climate finance and undermining global emissions targets.",
    Severity_Score: 9,
    Impacted_Sectors: ["Environment"],
    Sources: [citations.paris_withdrawal, citations.ipcc_climate],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-010",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "U.S. withdrawal from the World Health Organization initiated, ending funding and participation in global pandemic preparedness and health coordination.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare"],
    Sources: [citations.who_withdrawal],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Global Affairs",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-0128-011",
    Date: "2025-01-28",
    Action_Type: "Workforce Action",
    Description:
      "Deferred resignation program offered federal buyouts with agencies instructed to treat non-acceptance as willingness to be terminated — pressuring mass voluntary departures.",
    Severity_Score: 8,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.deferred_resignation, citations.schedule_f_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0129-012",
    Date: "2025-01-29",
    Action_Type: "Regulatory Guidance",
    Description:
      "OPM issues Schedule F implementing guidance directing agencies to identify policy-influencing positions for at-will reclassification — potentially affecting 50,000+ roles.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.opm_schedule_f, citations.gao_schedule_f],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0203-013",
    Date: "2025-02-03",
    Action_Type: "Agency Action",
    Description:
      "USAID workforce placed on leave and foreign aid disbursements halted — effectively dismantling the agency without congressional authorization.",
    Severity_Score: 10,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.usaid_rif, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0205-014",
    Date: "2025-02-05",
    Action_Type: "Regulatory Rollback",
    Description:
      "NLRB leadership rescinded pro-worker organizing guidance, reversing Biden-era protections for union elections and collective bargaining rights.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy", "Civil Rights"],
    Sources: [citations.nlrb_rollback, citations.bls_wages],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Labor & Economy",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0207-015",
    Date: "2025-02-07",
    Action_Type: "Enforcement Pause",
    Description:
      "CFPB halted new enforcement actions and rulemakings under acting leadership — effectively pausing consumer financial protection oversight.",
    Severity_Score: 8,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.cfpb_enforcement_pause],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Financial Regulation",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0214-016",
    Date: "2025-02-14",
    Action_Type: "Workforce Reduction",
    Description:
      "Mass termination of probationary federal employees across HHS, VA, and EPA — thousands removed with minimal notice, gutting regulatory and service capacity.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Environment", "Economy"],
    Sources: [citations.probationary_terminations, citations.gao_schedule_f],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0225-017",
    Date: "2025-02-25",
    Action_Type: "Regulatory Rollback",
    Description:
      "EPA initiated review and stay of methane leak detection standards for 280,000 oil and gas well sites, rolling back Biden-era climate rules.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment"],
    Sources: [citations.epa_methane_rollback, citations.epa_rule],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0320-018",
    Date: "2025-03-20",
    Action_Type: "Executive Order",
    Description:
      "Education Secretary directed to take all lawful steps to wind down the Department of Education and return authority to states — a signature Project 2025 objective.",
    Severity_Score: 9,
    Impacted_Sectors: ["Education", "Democracy"],
    Sources: [citations.ed_restructuring, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-ED-001",
    category: "Education",
    p2025Pillar: "Education",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0402-019",
    Date: "2025-04-02",
    Action_Type: "Regulatory Change",
    Description:
      "Department of Education Title IX rules narrowed harassment definitions and mandated live cross-examination hearings, affecting 19 million college students.",
    Severity_Score: 5,
    Impacted_Sectors: ["Education", "Civil Rights"],
    Sources: [citations.ed_dept_titleix],
    Linked_Fix_ID: "FIX-ED-001",
    category: "Education",
    p2025Pillar: "Education",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-0614-020",
    Date: "2025-06-14",
    Action_Type: "Enforcement Expansion",
    Description:
      "ICE detention capacity expanded by 40,000 beds through new facility contracts; expedited removal extended to individuals present less than two years.",
    Severity_Score: 8,
    Impacted_Sectors: ["Immigration", "Civil Rights"],
    Sources: [citations.aclu_immigration, citations.ice_expansion_eo],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Immigration Enforcement",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-1108-021",
    Date: "2025-11-08",
    Action_Type: "Subsidy Expiration",
    Description:
      "Enhanced ACA premium tax credits expired, raising average benchmark silver plan premiums 18% nationally and affecting 21 million enrollees.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.aca_premium, citations.cbo_medicare],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Healthcare",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-1218-022",
    Date: "2025-12-18",
    Action_Type: "Congressional Action",
    Description:
      "Congress invoked the Congressional Review Act to overturn 7 federal agency rules in a single year — the highest CRA usage since its 1996 enactment.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy", "Environment", "Healthcare"],
    Sources: [citations.crs_executive],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Legislative Rollbacks",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2026-0115-023",
    Date: "2026-01-15",
    Action_Type: "Legislative Proposal",
    Description:
      "32 states introduced 127 bills restricting voting access, including limits on mail ballot drop boxes, shortened early voting, and expanded voter roll purges.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Civil Rights"],
    Sources: [citations.brennan_voting, citations.save_act_crs],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Elections & Voting",
    externalTrackers: [observer(), { name: "Brennan Center", url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review" }],
  },
  {
    Event_ID: "EVT-2026-0201-024",
    Date: "2026-02-01",
    Action_Type: "Tracker Assessment",
    Description:
      "Center for Progressive Reform reports over 53% of Project 2025's domestic administrative policy agenda initiated or completed within the administration's first year.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.cpr_p2025_progress, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Overall Progress",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2026-0203-025",
    Date: "2026-02-03",
    Action_Type: "Public Opinion Data",
    Description:
      "Pew Research finds only 18% of Americans trust the federal government 'just about always' or 'most of the time' — near historic lows amid institutional legitimacy crisis.",
    Severity_Score: 6,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.pew_trust, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Democratic Legitimacy",
    externalTrackers: [],
  },
  {
    Event_ID: "EVT-2025-0120-026",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Regulatory freeze halts publication of new federal rules and withdraws unpublished regulations pending political review — stalling agency rulemaking across government.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Environment", "Healthcare"],
    Sources: [citations.regulatory_freeze, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Regulatory Rollback",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-027",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Federal lands drilling order expands oil and gas leasing on public lands and waters, reversing Biden-era restrictions — implementing Project 2025 energy extraction priorities.",
    Severity_Score: 9,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.federal_lands_drilling, citations.energy_emergency_eo],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0210-028",
    Date: "2025-02-10",
    Action_Type: "Regulatory Rollback",
    Description:
      "SEC halted climate risk disclosure requirements for public companies, removing investor transparency on corporate emissions and climate exposure.",
    Severity_Score: 7,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.sec_climate_guidance, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Financial Regulation",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0201-029",
    Date: "2025-02-01",
    Action_Type: "Institutional Weakening",
    Description:
      "Merit Systems Protection Board lacks quorum to hear federal employee appeals, leaving Schedule F reclassification and mass termination challenges without independent adjudication.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.merit_systems_board, citations.gao_schedule_f],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-0301-030",
    Date: "2025-03-01",
    Action_Type: "Enforcement Expansion",
    Description:
      "DHS expanded interior enforcement and expedited removal operations, deploying additional ICE agents and military coordination for mass deportation infrastructure.",
    Severity_Score: 9,
    Impacted_Sectors: ["Immigration", "Civil Rights", "Democracy"],
    Sources: [citations.dhs_deportation_ops, citations.ice_expansion_eo, citations.aclu_immigration],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Immigration Enforcement",
    externalTrackers: [observer(), { name: "ACLU", url: "https://www.aclu.org/project-2025-explained" }],
  },
  {
    Event_ID: "EVT-2025-0315-031",
    Date: "2025-03-15",
    Action_Type: "Agency Restructuring",
    Description:
      "USAID functions consolidated under State Department control, eliminating independent foreign aid oversight and humanitarian program autonomy.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.usaid_state_merger, citations.usaid_rif],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0315-032",
    Date: "2025-03-15",
    Action_Type: "Media Policy",
    Description:
      "FCC leadership signaled renewed broadcast licensing scrutiny and rolled back diversity policies — aligning with Project 2025's media and communications chapter.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy", "Civil Rights"],
    Sources: [citations.fcc_media_policy, citations.fcc_broadcast_rules],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Media & Communications",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-0103-033",
    Date: "2025-01-03",
    Action_Type: "Legislative Proposal",
    Description:
      "SAVE Act reintroduced in the 119th Congress, requiring documentary proof of citizenship for federal voter registration — a Project 2025 elections priority.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Civil Rights"],
    Sources: [citations.save_act_2025, citations.brennan_voting],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Elections & Voting",
    externalTrackers: [observer(), { name: "Brennan Center", url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review" }],
  },
  {
    Event_ID: "EVT-2025-0220-034",
    Date: "2025-02-20",
    Action_Type: "Ethics Rollback",
    Description:
      "Office of Government Ethics enforcement weakened for political appointees, with expanded ethics waivers reducing executive branch financial transparency.",
    Severity_Score: 6,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.oge_ethics_rollback, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Ethics & Transparency",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-035",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Federal policy redefined to recognize only two biological sexes, directing agencies to remove gender-identity protections from programs — a Project 2025 civil-service and culture-war priority.",
    Severity_Score: 8,
    Impacted_Sectors: ["Civil Rights", "Healthcare", "Education"],
    Sources: [citations.gender_ideology_eo, citations.dei_termination_eo],
    Linked_Fix_ID: "FIX-ED-001",
    category: "Civil Rights",
    p2025Pillar: "Culture & Civil Rights",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-036",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Federal employees ordered back to in-person work, terminating remote arrangements — accelerating attrition alongside hiring freezes and deferred-resignation pressure.",
    Severity_Score: 6,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.return_to_office_eo, citations.federal_hiring_freeze],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-037",
    Date: "2025-01-20",
    Action_Type: "Executive Clemency",
    Description:
      "Broad pardons granted to individuals convicted of offenses related to the January 6 Capitol attack — undermining accountability for election subversion.",
    Severity_Score: 10,
    Impacted_Sectors: ["Democracy", "Civil Rights"],
    Sources: [citations.jan6_pardons_eo, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Rule of Law",
    externalTrackers: [observer(), { name: "ACLU", url: "https://www.aclu.org/project-2025-explained" }],
  },
  {
    Event_ID: "EVT-2025-0120-038",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Foreign aid disbursements paused pending ideological review — halting humanitarian and development programs worldwide without congressional authorization.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Healthcare"],
    Sources: [citations.foreign_aid_freeze, citations.usaid_rif],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0128-039",
    Date: "2025-01-28",
    Action_Type: "Oversight Report",
    Description:
      "GAO finds Medicaid work-requirement demonstrations impose substantial administrative costs, with federal funds covering the majority of compliance verification spending.",
    Severity_Score: 6,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.gao_healthcare, citations.aca_premium],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Healthcare",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-1119-040",
    Date: "2025-11-19",
    Action_Type: "Legislative Proposal",
    Description:
      "Epstein Files Transparency Act introduced in the 119th Congress, requiring DOJ to release unclassified investigation records — amid broader elite accountability demands.",
    Severity_Score: 5,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.epstein_records_act, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Transparency",
    externalTrackers: [{ name: "Congress.gov", url: "https://www.congress.gov/bill/119th-congress/house-bill/4405" }],
  },
  {
    Event_ID: "EVT-2025-0120-041",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "America First Trade Policy directs agencies to review all trade agreements and recommend reciprocal tariffs — initiating Project 2025's protectionist trade agenda.",
    Severity_Score: 8,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.trade_policy_eo, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Trade & Commerce",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-042",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Federal censorship coordination with social media platforms prohibited; prior government content-moderation efforts ordered reviewed — reshaping platform accountability policy.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy", "Civil Rights"],
    Sources: [citations.speech_censorship_eo],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Media & Communications",
    externalTrackers: [observer()],
  },
  {
    Event_ID: "EVT-2025-0120-043",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "U.S. Refugee Admissions Program suspended pending realignment with administration immigration priorities — halting humanitarian resettlement for vulnerable populations.",
    Severity_Score: 9,
    Impacted_Sectors: ["Immigration", "Civil Rights"],
    Sources: [citations.refugee_suspension_eo, citations.aclu_immigration],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Immigration Enforcement",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0120-044",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Drug cartels directed for designation as foreign terrorist organizations — expanding military and surveillance authorities for domestic immigration enforcement operations.",
    Severity_Score: 9,
    Impacted_Sectors: ["Immigration", "Democracy"],
    Sources: [citations.cartel_fto_eo, citations.ice_expansion_eo],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Immigration Enforcement",
    externalTrackers: [observer(), { name: "ACLU", url: "https://www.aclu.org/project-2025-explained" }],
  },
  {
    Event_ID: "EVT-2025-0120-045",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Federal death penalty restored and Biden-era execution moratorium ended — DOJ directed to resume capital prosecutions and pursue death sentences.",
    Severity_Score: 8,
    Impacted_Sectors: ["Civil Rights", "Democracy"],
    Sources: [citations.death_penalty_eo],
    Linked_Fix_ID: "FIX-SAFE-003",
    category: "Civil Rights",
    p2025Pillar: "Rule of Law",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0207-046",
    Date: "2025-02-07",
    Action_Type: "Funding Cut",
    Description:
      "NIH capped indirect research cost reimbursement at 15%, cutting billions from university and hospital research infrastructure nationwide.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Education", "Economy"],
    Sources: [citations.nih_funding_cuts, citations.doge_eo],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [cpr(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0120-047",
    Date: "2025-01-20",
    Action_Type: "Executive Order",
    Description:
      "Inflation Reduction Act clean energy grant disbursements paused pending ideological review — stalling climate investment programs authorized by Congress.",
    Severity_Score: 9,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.ira_funding_pause, citations.ipcc_climate],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0214-048",
    Date: "2025-02-14",
    Action_Type: "Program Termination",
    Description:
      "IRS Direct File free tax-filing pilot terminated, eliminating a public alternative to commercial tax preparation and reducing access for low-income filers.",
    Severity_Score: 6,
    Impacted_Sectors: ["Economy", "Civil Rights"],
    Sources: [citations.irs_direct_file_end, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Financial Regulation",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0402-049",
    Date: "2025-04-02",
    Action_Type: "Executive Order",
    Description:
      "Reciprocal tariffs imposed on imports from trading partners to address trade deficits — escalating global trade war and raising consumer prices across sectors.",
    Severity_Score: 9,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.reciprocal_tariffs_eo, citations.trade_policy_eo],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Trade & Commerce",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0210-050",
    Date: "2025-02-10",
    Action_Type: "Enforcement Shift",
    Description:
      "DOJ Civil Rights Division deprioritized voting rights and police accountability cases, redirecting enforcement toward DEI program investigations.",
    Severity_Score: 9,
    Impacted_Sectors: ["Civil Rights", "Democracy"],
    Sources: [citations.doj_civil_rights_shift, citations.brennan_voting],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Civil Rights",
    p2025Pillar: "Rule of Law",
    externalTrackers: [observer(), { name: "Brennan Center", url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review" }],
  },
  {
    Event_ID: "EVT-2025-0301-051",
    Date: "2025-03-01",
    Action_Type: "Enforcement Shift",
    Description:
      "EEOC redirected civil rights enforcement toward DEI program investigations while deprioritizing systemic workplace discrimination cases.",
    Severity_Score: 7,
    Impacted_Sectors: ["Civil Rights", "Economy"],
    Sources: [citations.eeoc_enforcement_shift, citations.dei_termination_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Civil Rights",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0310-052",
    Date: "2025-03-10",
    Action_Type: "Regulatory Rollback",
    Description:
      "HUD paused affirmatively furthering fair housing implementation and redirected resources away from housing discrimination enforcement.",
    Severity_Score: 7,
    Impacted_Sectors: ["Civil Rights", "Economy"],
    Sources: [citations.hud_fair_housing_pause, citations.dei_termination_eo],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Civil Rights",
    p2025Pillar: "Housing & Communities",
    externalTrackers: [cpr()],
  },
  {
    Event_ID: "EVT-2025-0305-053",
    Date: "2025-03-05",
    Action_Type: "Regulatory Rollback",
    Description:
      "Labor Department halted Biden-era overtime pay expansion for salaried workers — reversing wage protections for an estimated 4 million employees.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy", "Civil Rights"],
    Sources: [citations.dol_overtime_rollback, citations.bls_wages],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Labor & Economy",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0312-054",
    Date: "2025-03-12",
    Action_Type: "Enforcement Pause",
    Description:
      "FTC deprioritized merger challenges and consumer fraud cases under new leadership — weakening antitrust and consumer protection oversight.",
    Severity_Score: 8,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.ftc_enforcement_pause, citations.cfpb_enforcement_pause],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Financial Regulation",
    externalTrackers: [cpr(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0201-055",
    Date: "2025-02-01",
    Action_Type: "Institutional Access",
    Description:
      "Treasury granted DOGE-aligned reviewers access to federal payment systems — bypassing standard inspector general oversight for spending decisions.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.treasury_payment_access, citations.doge_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0218-056",
    Date: "2025-02-18",
    Action_Type: "Regulatory Rollback",
    Description:
      "EPA reopened review of light-duty vehicle greenhouse gas standards — stalling clean-car rules and aligning with Project 2025's deregulatory energy agenda.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.epa_vehicle_emissions_rollback, citations.energy_emergency_eo],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0205-057",
    Date: "2025-02-05",
    Action_Type: "Enforcement Shift",
    Description:
      "Labor Department suspended federal contractor affirmative action compliance reviews and redirected OFCCP enforcement toward DEI program investigations.",
    Severity_Score: 7,
    Impacted_Sectors: ["Civil Rights", "Economy"],
    Sources: [citations.dol_ofccp_rollback, citations.dei_termination_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Civil Rights",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0228-058",
    Date: "2025-02-28",
    Action_Type: "Workforce Reduction",
    Description:
      "CISA placed staff on administrative leave and halted hiring — weakening election-security and critical-infrastructure cyber defense amid federal workforce cuts.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.cisa_workforce_cuts, citations.doge_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0128-059",
    Date: "2025-01-28",
    Action_Type: "Program Termination",
    Description:
      "Pentagon eliminated DEI offices and training across the armed services — disbanding advisory groups and canceling diversity initiatives.",
    Severity_Score: 7,
    Impacted_Sectors: ["Civil Rights", "Democracy"],
    Sources: [citations.defense_dei_rollback, citations.dei_termination_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Civil Rights",
    p2025Pillar: "Culture & Civil Rights",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0318-060",
    Date: "2025-03-18",
    Action_Type: "Regulatory Rollback",
    Description:
      "Interior delayed endangered-species listings and weakened migratory bird protections to expedite drilling and mining on federal lands.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.fws_species_delays, citations.federal_lands_drilling],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0322-061",
    Date: "2025-03-22",
    Action_Type: "Workforce Reduction",
    Description:
      "Social Security Administration placed staff on administrative leave and halted hiring — threatening benefit processing timelines for 70 million Americans as DOGE reviews federal payment systems.",
    Severity_Score: 9,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.ssa_workforce_cuts, citations.treasury_payment_access],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Economy",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0325-062",
    Date: "2025-03-25",
    Action_Type: "Workforce Reduction",
    Description:
      "FEMA disaster preparedness staffing cut ahead of hurricane season — weakening federal response capacity as climate disasters intensify nationwide.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Democracy"],
    Sources: [citations.fema_staffing_cuts, citations.probationary_terminations],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Agency Restructuring",
    externalTrackers: [observer(), { name: "FEMA", url: "https://www.fema.gov/" }],
  },
  {
    Event_ID: "EVT-2025-0328-063",
    Date: "2025-03-28",
    Action_Type: "Program Freeze",
    Description:
      "NOAA climate research and monitoring programs paused pending ideological spending review — stalling hurricane forecasting and temperature data collection.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.noaa_research_freeze, citations.ira_funding_pause],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0401-064",
    Date: "2025-04-01",
    Action_Type: "Program Freeze",
    Description:
      "CDC discretionary grant disbursements halted and staff placed on leave — disrupting disease surveillance, reproductive health data, and state public health partnerships.",
    Severity_Score: 9,
    Impacted_Sectors: ["Healthcare", "Democracy"],
    Sources: [citations.cdc_grant_pause, citations.doge_eo],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Global Affairs",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0405-065",
    Date: "2025-04-05",
    Action_Type: "Workforce Reduction",
    Description:
      "Federal Student Aid office probations terminated and hiring frozen — delaying loan servicing, income-driven repayment processing, and borrower assistance for 43 million Americans.",
    Severity_Score: 7,
    Impacted_Sectors: ["Education", "Economy"],
    Sources: [citations.student_aid_workforce_cuts, citations.ed_restructuring],
    Linked_Fix_ID: "FIX-ED-001",
    category: "Education",
    p2025Pillar: "Education Restructuring",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0410-066",
    Date: "2025-04-10",
    Action_Type: "Regulatory Rollback",
    Description:
      "EPA dismissed members of its Science Advisory Board and Clean Air Scientific Advisory Committee — removing independent scientists who review pollution standards.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Democracy"],
    Sources: [citations.epa_rule, citations.energy_emergency_eo],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0415-067",
    Date: "2025-04-15",
    Action_Type: "Enforcement Shift",
    Description:
      "HUD paused fair-housing discrimination investigations and redirected staff toward reviewing DEI-related grant language — weakening enforcement of the Fair Housing Act.",
    Severity_Score: 7,
    Impacted_Sectors: ["Civil Rights", "Economy"],
    Sources: [citations.dei_termination_eo, citations.brennan_voting],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Civil Rights",
    p2025Pillar: "Culture & Civil Rights",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0418-068",
    Date: "2025-04-18",
    Action_Type: "Program Freeze",
    Description:
      "NIH placed new grant applications on hold pending ideological review of research topics — delaying biomedical studies on climate health, reproductive care, and LGBTQ populations.",
    Severity_Score: 9,
    Impacted_Sectors: ["Healthcare", "Education"],
    Sources: [citations.nih_grant_review_hold, citations.cdc_grant_pause],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Global Affairs",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0422-069",
    Date: "2025-04-22",
    Action_Type: "Program Termination",
    Description:
      "USAID headquarters staff placed on leave and foreign assistance programs halted — dismantling decades of global health, famine relief, and democracy-promotion infrastructure.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Healthcare"],
    Sources: [citations.aclu_immigration, citations.doge_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Health & Global Affairs",
    externalTrackers: [observer(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0428-070",
    Date: "2025-04-28",
    Action_Type: "Workforce Reduction",
    Description:
      "Veterans Affairs eliminated DEI offices and placed probationary employees on termination notice — cutting support staff while 700,000 disability claims remain backlogged.",
    Severity_Score: 8,
    Impacted_Sectors: ["Civil Rights", "Healthcare"],
    Sources: [citations.defense_dei_rollback, citations.probationary_terminations],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0502-071",
    Date: "2025-05-02",
    Action_Type: "Enforcement Shift",
    Description:
      "DOJ Civil Rights Division redirected staff from police pattern-or-practice investigations toward DEI compliance reviews — weakening federal oversight of law enforcement misconduct.",
    Severity_Score: 9,
    Impacted_Sectors: ["Civil Rights", "Democracy"],
    Sources: [citations.doj_civil_rights_shift, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Civil Rights",
    p2025Pillar: "DOJ Enforcement",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0508-072",
    Date: "2025-05-08",
    Action_Type: "Regulatory Rollback",
    Description:
      "FEC commissioners deadlocked on enforcement matters and paused advisory opinions — stalling campaign-finance investigations as dark-money spending surged.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.fec_enforcement_pause, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Election Enforcement",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0512-073",
    Date: "2025-05-12",
    Action_Type: "Workforce Reduction",
    Description:
      "FTC consumer-protection bureau staff placed on leave and new merger challenges halted — curtailing antitrust enforcement aligned with Project 2025's FTC chapter.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy", "Democracy"],
    Sources: [citations.ftc_consumer_protection_cuts, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Consumer Protection",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0515-074",
    Date: "2025-05-15",
    Action_Type: "Regulatory Rollback",
    Description:
      "USDA expanded SNAP work requirements and shortened time-limit waivers — cutting nutrition assistance for able-bodied adults without dependents in high-unemployment areas.",
    Severity_Score: 8,
    Impacted_Sectors: ["Economy", "Healthcare"],
    Sources: [citations.snap_work_requirements, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Agriculture & Nutrition",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0520-075",
    Date: "2025-05-20",
    Action_Type: "Policy Restriction",
    Description:
      "ODNI restricted congressional access to climate-security threat assessments and paused interagency intelligence briefings on election interference.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Environment"],
    Sources: [citations.intelligence_briefing_restrictions, citations.heritage_mandate],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Intelligence & Security",
    externalTrackers: [observer(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0525-076",
    Date: "2025-05-25",
    Action_Type: "Policy Rollback",
    Description:
      "Pentagon reinstated restrictions on gender-affirming care for active-duty service members and paused TRICARE coverage updates — reversing inclusive military health policies.",
    Severity_Score: 8,
    Impacted_Sectors: ["Civil Rights", "Healthcare"],
    Sources: [citations.pentagon_trans_care_rollback, citations.defense_dei_rollback],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Defense Personnel",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0528-077",
    Date: "2025-05-28",
    Action_Type: "Regulatory Rollback",
    Description:
      "CMS approved additional state Medicaid waivers imposing work requirements and premiums — conditioning health coverage on employment in high-unemployment counties.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.cms_medicaid_work_rules, citations.gao_healthcare],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Human Services",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0602-078",
    Date: "2025-06-02",
    Action_Type: "Executive Order",
    Description:
      "Interior accelerated offshore oil and gas lease sales in the Gulf of Mexico and Alaska — prioritizing fossil extraction over renewable siting on federal waters.",
    Severity_Score: 9,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.boem_offshore_lease, citations.federal_lands_drilling],
    Linked_Fix_ID: null,
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0605-079",
    Date: "2025-06-05",
    Action_Type: "Policy Restriction",
    Description:
      "Election Assistance Commission security grants delayed as Congress advanced proof-of-citizenship registration mandates — weakening election infrastructure funding.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Civil Rights"],
    Sources: [citations.eac_funding_cuts, citations.save_act_crs],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Election Administration",
    externalTrackers: [cpr(), { name: "Brennan Center", url: "https://www.brennancenter.org/" }],
  },
  {
    Event_ID: "EVT-2025-0610-080",
    Date: "2025-06-10",
    Action_Type: "Regulatory Freeze",
    Description:
      "OSHA delayed silica exposure and heat-illness rulemakings pending political review — extending the administration-wide freeze on worker-safety protections.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy", "Healthcare"],
    Sources: [citations.osha_silica_delay, citations.regulatory_freeze],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Labor & Workforce",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0615-081",
    Date: "2025-06-15",
    Action_Type: "Agency Action",
    Description:
      "VA accelerated community-care privatization despite GAO-documented overpayment and fraud risks — outsourcing veterans' health services with weakened oversight.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.va_community_care_audit, citations.gao_healthcare],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Veterans Affairs",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0620-082",
    Date: "2025-06-20",
    Action_Type: "Policy Restriction",
    Description:
      "Congress advanced census and voter-registration changes targeting citizenship documentation — fueling noncitizen voting myths Brennan Center research has repeatedly debunked.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Immigration"],
    Sources: [citations.census_citizenship_data, citations.save_act_crs],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Election Administration",
    externalTrackers: [cpr(), { name: "Brennan Center", url: "https://www.brennancenter.org/" }],
  },
  {
    Event_ID: "EVT-2025-0625-083",
    Date: "2025-06-25",
    Action_Type: "Executive Order",
    Description:
      "Interior fast-tracked hardrock mining leases and drilling permits on federal lands — sidestepping tribal consultation and NEPA review timelines.",
    Severity_Score: 9,
    Impacted_Sectors: ["Environment", "Civil Rights"],
    Sources: [citations.blm_hardrock_mining, citations.federal_lands_drilling],
    Linked_Fix_ID: null,
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0630-084",
    Date: "2025-06-30",
    Action_Type: "Policy Rollback",
    Description:
      "Education Department advanced Title IX sports rules excluding transgender student-athletes — reversing inclusive participation policies adopted under the prior administration.",
    Severity_Score: 8,
    Impacted_Sectors: ["Civil Rights", "Education"],
    Sources: [citations.ed_title_ix_sports_rule, citations.gender_ideology_eo],
    Linked_Fix_ID: null,
    category: "Education",
    p2025Pillar: "Education",
    externalTrackers: [observer(), { name: "ACLU", url: "https://www.aclu.org/issues/lgbtq-rights" }],
  },
  {
    Event_ID: "EVT-2025-0705-085",
    Date: "2025-07-05",
    Action_Type: "Agency Action",
    Description:
      "CISA election-security coordination grants and state partnership staffing faced cuts — weakening federal voting-system cybersecurity as midterm infrastructure funding stalled.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.cisa_election_security_pause, citations.cisa_workforce_cuts],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Election Security",
    externalTrackers: [cpr(), { name: "watch2025.org", url: "https://watch2025.org/" }],
  },
  {
    Event_ID: "EVT-2025-0710-086",
    Date: "2025-07-10",
    Action_Type: "Regulatory Action",
    Description:
      "USDA finalized expanded SNAP work requirements and time limits in additional states — restricting nutrition assistance for able-bodied adults without dependents, mirroring Project 2025 Agriculture chapter proposals.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy", "Healthcare"],
    Sources: [citations.snap_work_requirements, citations.cbo_medicare],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Agriculture & Nutrition",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0715-087",
    Date: "2025-07-15",
    Action_Type: "Regulatory Delay",
    Description:
      "Fish and Wildlife Service delayed Endangered Species Act consultations for energy and infrastructure projects — accelerating fossil and mining approvals while sidestepping species protections.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment"],
    Sources: [citations.fws_species_delays, citations.federal_lands_drilling],
    Linked_Fix_ID: null,
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0720-088",
    Date: "2025-07-20",
    Action_Type: "Agency Action",
    Description:
      "CMS approved new state Medicaid waivers imposing work requirements and premiums — conditioning health coverage on employment as Project 2025's HHS chapter recommended.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.cms_medicaid_work_rules, citations.gao_healthcare],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Healthcare",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0725-089",
    Date: "2025-07-25",
    Action_Type: "Personnel Action",
    Description:
      "Merit Systems Protection Board backlog left thousands of federal employee appeals unresolved — including Schedule F reclassification challenges — without independent adjudication.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.merit_systems_board, citations.schedule_f_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0730-090",
    Date: "2025-07-30",
    Action_Type: "Enforcement Shift",
    Description:
      "EEOC and OFCCP redirected civil-rights investigators toward DEI program audits while deprioritizing systemic workplace discrimination cases — weaponizing enforcement against inclusion programs.",
    Severity_Score: 8,
    Impacted_Sectors: ["Civil Rights", "Economy"],
    Sources: [citations.eeoc_enforcement_shift, citations.dol_ofccp_rollback],
    Linked_Fix_ID: null,
    category: "Civil Rights",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [cpr(), { name: "ACLU", url: "https://www.aclu.org/issues/lgbtq-rights" }],
  },
  {
    Event_ID: "EVT-2025-0804-091",
    Date: "2025-08-04",
    Action_Type: "Agency Restructuring",
    Description:
      "USAID functions absorbed into State Department with foreign-aid portfolio reviews — consolidating humanitarian and development programs under political appointees per Project 2025's State chapter.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Healthcare"],
    Sources: [citations.usaid_state_merger, citations.foreign_aid_freeze],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "State Department",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0809-092",
    Date: "2025-08-09",
    Action_Type: "Personnel Action",
    Description:
      "Second wave of probationary federal employee terminations targeted climate, civil-rights, and inspector-general support staff — accelerating Schedule F implementation through attrition.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Environment", "Civil Rights"],
    Sources: [citations.probationary_terminations, citations.schedule_f_eo],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0814-093",
    Date: "2025-08-14",
    Action_Type: "Workforce Policy",
    Description:
      "OPM intensified deferred-resignation buyout pressure on career civil servants — offering exit packages while threatening RIFs for employees who declined, mirroring Project 2025 workforce purge tactics.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.deferred_resignation, citations.opm_schedule_f],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0819-094",
    Date: "2025-08-19",
    Action_Type: "Funding Pause",
    Description:
      "IRA clean-energy grant disbursements paused pending political review — stalling home electrification rebates and community solar projects mid-implementation.",
    Severity_Score: 8,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.ira_funding_pause, citations.epa_rule],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Energy & Environment",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0824-095",
    Date: "2025-08-24",
    Action_Type: "International Withdrawal",
    Description:
      "WHO withdrawal process advanced with halted pandemic-preparedness funding and paused CDC global health partnerships — isolating U.S. public health from international coordination.",
    Severity_Score: 7,
    Impacted_Sectors: ["Healthcare", "Democracy"],
    Sources: [citations.who_withdrawal, citations.cdc_grant_pause],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Human Services",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0829-096",
    Date: "2025-08-29",
    Action_Type: "Executive Order",
    Description:
      "Federal speech restrictions expanded to contractors and grant recipients beyond universities — conditioning billions in federal funds on ideological compliance with administration speech directives.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Civil Rights", "Education"],
    Sources: [citations.speech_censorship_eo, citations.regulatory_freeze],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Department of Justice",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-0903-097",
    Date: "2025-09-03",
    Action_Type: "Trade Policy",
    Description:
      "Reciprocal tariffs escalated against additional trading partners under national-security authority — raising consumer costs and retaliatory barriers while bypassing congressional trade powers.",
    Severity_Score: 7,
    Impacted_Sectors: ["Economy"],
    Sources: [citations.reciprocal_tariffs_eo, citations.trade_policy_eo],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Department of Commerce",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0908-098",
    Date: "2025-09-08",
    Action_Type: "Enforcement Expansion",
    Description:
      "DHS expanded National Guard coordination for interior deportation operations — militarizing immigration enforcement in major metro areas without new congressional authorization.",
    Severity_Score: 8,
    Impacted_Sectors: ["Immigration", "Civil Rights", "Democracy"],
    Sources: [citations.ice_expansion_eo, citations.dhs_deportation_ops],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Immigration",
    p2025Pillar: "Homeland Security",
    externalTrackers: [observer(), { name: "ACLU", url: "https://www.aclu.org/issues/immigrants-rights" }],
  },
  {
    Event_ID: "EVT-2025-0913-099",
    Date: "2025-09-13",
    Action_Type: "Research Termination",
    Description:
      "NIH terminated additional climate, health-equity, and infectious-disease research grants mid-cycle — disrupting longitudinal studies and university partnerships nationwide.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Environment"],
    Sources: [citations.nih_funding_cuts, citations.nih_grant_review_hold],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Human Services",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0918-100",
    Date: "2025-09-18",
    Action_Type: "Enforcement Halt",
    Description:
      "Justice Department halted remaining Voting Rights Act Section 2 pattern-or-practice investigations in Georgia, Texas, and Arizona — dismantling the federal government's last active voting-rights enforcement tool ahead of the 2026 redistricting cycle.",
    Severity_Score: 10,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.doj_civil_rights_shift,
      citations.brennan_voting,
      citations.cost_inaction_voting,
    ],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Department of Justice",
    externalTrackers: [
      cpr(),
      { name: "Brennan Center", url: "https://www.brennancenter.org/" },
      { name: "watch2025.org", url: "https://watch2025.org/" },
    ],
  },
  {
    Event_ID: "EVT-2025-0923-101",
    Date: "2025-09-23",
    Action_Type: "Enforcement Pause",
    Description:
      "CFPB paused major consumer-finance enforcement actions and supervisory exams — gutting mortgage, student-loan, and credit-card protections while the agency faces structural dismantling.",
    Severity_Score: 8,
    Impacted_Sectors: ["Economy", "Civil Rights"],
    Sources: [citations.cfpb_enforcement_pause, citations.regulatory_freeze],
    Linked_Fix_ID: "FIX-ECO-001",
    category: "Economy",
    p2025Pillar: "Department of Treasury",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-0928-102",
    Date: "2025-09-28",
    Action_Type: "Workforce Reduction",
    Description:
      "Social Security Administration accelerated field-office closures and staffing cuts — lengthening disability and retirement claim backlogs for millions of beneficiaries.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.ssa_workforce_cuts, citations.probationary_terminations],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Social Security Administration",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1003-103",
    Date: "2025-10-03",
    Action_Type: "Security Downgrade",
    Description:
      "CISA election-security grants and state coordination staffing cut ahead of the 2026 midterms — weakening federal support for voting-system cybersecurity and incident response.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.cisa_election_security_pause, citations.eac_funding_cuts],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Department of Homeland Security",
    externalTrackers: [
      cpr(),
      { name: "Brennan Center", url: "https://www.brennancenter.org/" },
    ],
  },
  {
    Event_ID: "EVT-2025-1008-104",
    Date: "2025-10-08",
    Action_Type: "Regulatory Rollback",
    Description:
      "Education Department finalized Title IX sports regulations excluding transgender student-athletes — reversing inclusive participation rules and inviting litigation in dozens of states.",
    Severity_Score: 7,
    Impacted_Sectors: ["Education", "Civil Rights"],
    Sources: [citations.ed_title_ix_sports_rule, citations.ed_dept_titleix],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Education",
    p2025Pillar: "Department of Education",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1013-105",
    Date: "2025-10-13",
    Action_Type: "Healthcare Policy",
    Description:
      "CMS approved additional state Medicaid waivers imposing work requirements and premiums — conditioning health coverage on employment in low-wage labor markets.",
    Severity_Score: 8,
    Impacted_Sectors: ["Healthcare", "Economy"],
    Sources: [citations.cms_medicaid_work_rules, citations.gao_healthcare],
    Linked_Fix_ID: "FIX-HC-001",
    category: "Healthcare",
    p2025Pillar: "Health & Human Services",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1018-106",
    Date: "2025-10-18",
    Action_Type: "Enforcement Deadlock",
    Description:
      "FEC commissioners deadlocked on major campaign-finance enforcement actions and advisory opinions — pausing investigations into undisclosed independent expenditures ahead of the 2026 cycle.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.fec_enforcement_pause, citations.fec_campaign_data, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-SAFE-001",
    category: "Democracy",
    p2025Pillar: "Federal Election Commission",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1023-107",
    Date: "2025-10-23",
    Action_Type: "Institutional Vacancy",
    Description:
      "Merit Systems Protection Board vacancies left thousands of federal whistleblower and Schedule F appeal cases in limbo — removing a key check on retaliatory firings.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.mspb_vacancies, citations.schedule_f_eo, citations.gao_schedule_f],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1028-108",
    Date: "2025-10-28",
    Action_Type: "Regulatory Delay",
    Description:
      "EPA delayed implementation of methane leak detection and repair standards for oil and gas facilities — extending a regulatory freeze that benefits fossil-fuel operators.",
    Severity_Score: 7,
    Impacted_Sectors: ["Environment", "Economy"],
    Sources: [citations.epa_methane_delay, citations.epa_rule, citations.regulatory_freeze],
    Linked_Fix_ID: "FIX-ENV-001",
    category: "Environment",
    p2025Pillar: "Environmental Protection Agency",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1102-109",
    Date: "2025-11-02",
    Action_Type: "Disclosure Rollback",
    Description:
      "Treasury and IRS moved to weaken nonprofit donor-disclosure requirements for politically active 501(c)(4) organizations — expanding dark-money channels documented by OpenSecrets.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.irs_dark_money_rule, citations.dark_money_transparency, citations.fec_campaign_data],
    Linked_Fix_ID: "FIX-SAFE-001",
    category: "Democracy",
    p2025Pillar: "Department of Treasury",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1107-110",
    Date: "2025-11-07",
    Action_Type: "Workforce Reclassification",
    Description:
      "OPM expanded Schedule F reclassification guidance to additional agency subcomponents — accelerating politically motivated civil-service purges across the executive branch ahead of the 2026 midterms.",
    Severity_Score: 10,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.schedule_f_expansion, citations.schedule_f_eo, citations.gao_schedule_f],
    Linked_Fix_ID: "FIX-SAFE-002",
    category: "Democracy",
    p2025Pillar: "Personnel & Civil Service",
    externalTrackers: [
      cpr(),
      { name: "watch2025.org", url: "https://watch2025.org/" },
    ],
  },
  {
    Event_ID: "EVT-2025-1112-111",
    Date: "2025-11-12",
    Action_Type: "Records Withholding",
    Description:
      "DOJ expanded FOIA exemption claims for executive-branch records tied to political appointees — lengthening backlogs documented on FOIA.gov and delaying public release of investigation materials.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.doj_oip_foia, citations.foia_gov, citations.epstein_records_act],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Department of Justice",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1115-112",
    Date: "2025-11-15",
    Action_Type: "Disclosure Rollback",
    Description:
      "Federal agencies scaled back proactive disclosure of lobbying visitor logs and rulemaking comment datasets — reducing machine-readable transparency required under prior open-government policies.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.safeguard_transparency, citations.oge_ethics_rollback, citations.dark_money_transparency],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Ethics & Transparency",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1118-113",
    Date: "2025-11-18",
    Action_Type: "Legislative Action",
    Description:
      "House Judiciary subcommittee advanced markup on the Epstein Files Transparency Act — bipartisan legislation requiring DOJ to release unclassified investigation records on a statutory timeline.",
    Severity_Score: 5,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.epstein_records_act, citations.safeguard_transparency],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Transparency",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1121-114",
    Date: "2025-11-21",
    Action_Type: "Whistleblower Backlog",
    Description:
      "Federal whistleblower appeals surged as MSPB vacancies left retaliation cases unresolved — weakening the fraud-recovery and oversight mechanisms SAFE-004 whistleblower bounties are designed to strengthen.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [citations.mspb_vacancies, citations.safeguard_transparency, citations.oge_ethics_rollback],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Merit Systems Protection Board",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1125-115",
    Date: "2025-11-25",
    Action_Type: "Records Policy",
    Description:
      "National Archives issued restrictive guidance on presidential records access requests — narrowing public review windows under the Presidential Records Act amid ongoing FOIA litigation over executive-branch document retention.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy"],
    Sources: [citations.presidential_records_crs, citations.foia_gov, citations.doj_oip_foia],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "National Archives",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1128-116",
    Date: "2025-11-28",
    Action_Type: "Election Security",
    Description:
      "CISA scaled back election-security partnership staffing and state coordination grants — weakening federal support for voting-system cybersecurity ahead of the 2026 midterm cycle.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.cisa_election_security_pause,
      citations.cisa_workforce_cuts,
      citations.brennan_voting,
    ],
    Linked_Fix_ID: "FIX-VR-001",
    category: "Democracy",
    p2025Pillar: "Election Administration",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1201-117",
    Date: "2025-12-01",
    Action_Type: "Ethics Rollback",
    Description:
      "OGE extended financial disclosure filing deadlines for senior appointees — reducing real-time visibility into executive branch conflicts of interest during agency rulemaking pushes.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [
      citations.oge_ethics_rollback,
      citations.safeguard_transparency,
      citations.dark_money_transparency,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Ethics & Transparency",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1204-118",
    Date: "2025-12-04",
    Action_Type: "Campaign Finance",
    Description:
      "FEC enforcement docket backlog grew as commission vacancies limited penalties for late disclosure filings — delaying public visibility into midterm dark-money spending.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.fec_campaign_data,
      citations.dark_money_transparency,
      citations.citizens_united_scotus,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Campaign Finance",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1208-119",
    Date: "2025-12-08",
    Action_Type: "Inspector General Review",
    Description:
      "Multiple agency IG offices faced staffing reviews and report publication delays — narrowing independent oversight of procurement fraud and ethics violations documented in prior GAO findings.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [
      citations.gao_healthcare,
      citations.safeguard_anticorruption,
      citations.oge_ethics_rollback,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Oversight & Accountability",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1212-120",
    Date: "2025-12-12",
    Action_Type: "Transparency Halt",
    Description:
      "A coordinated executive-branch slowdown on proactive open-government publishing reached a 120-event milestone — spanning FOIA backlogs, lobbying log gaps, and ethics disclosure delays that SAFE-004 is designed to reverse.",
    Severity_Score: 10,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.foia_gov,
      citations.doj_oip_foia,
      citations.safeguard_transparency,
      citations.epstein_records_act,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Transparency",
    externalTrackers: [
      cpr(),
      { name: "watch2025.org", url: "https://watch2025.org/" },
    ],
  },
  {
    Event_ID: "EVT-2025-1215-121",
    Date: "2025-12-15",
    Action_Type: "FOIA Backlog",
    Description:
      "DOJ Office of Information Policy reported median FOIA response times exceeding statutory limits at multiple agencies — with proactive disclosure pages going stale as staffing reviews continued across the executive branch.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.doj_oip_foia,
      citations.foia_gov,
      citations.safeguard_transparency,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Transparency",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1218-122",
    Date: "2025-12-18",
    Action_Type: "Oversight Report",
    Description:
      "GAO flagged rising improper-payment rates tied to reduced inspector general staffing — documenting how oversight vacancies weaken fraud recovery ahead of major procurement pushes.",
    Severity_Score: 8,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [
      citations.gao_healthcare,
      citations.safeguard_anticorruption,
      citations.mspb_vacancies,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Oversight & Accountability",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1220-123",
    Date: "2025-12-20",
    Action_Type: "Spending Transparency",
    Description:
      "Federal spending portals narrowed machine-readable lobbying and contract metadata fields — reducing public ability to cross-reference vendor payments with rulemaking commenters.",
    Severity_Score: 7,
    Impacted_Sectors: ["Democracy", "Economy"],
    Sources: [
      citations.dark_money_transparency,
      citations.safeguard_transparency,
      citations.fec_campaign_data,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Ethics & Transparency",
    externalTrackers: [cpr(), observer()],
  },
  {
    Event_ID: "EVT-2025-1222-124",
    Date: "2025-12-22",
    Action_Type: "Press Access",
    Description:
      "Multiple federal agencies curtailed routine press briefing transcripts and on-camera Q&A — limiting real-time public scrutiny of policy rollouts documented in prior CPR tracker entries.",
    Severity_Score: 6,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.fcc_broadcast_rules,
      citations.safeguard_transparency,
      citations.speech_censorship_eo,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Media & Communications",
    externalTrackers: [observer(), cpr()],
  },
  {
    Event_ID: "EVT-2025-1225-125",
    Date: "2025-12-25",
    Action_Type: "Documentation Milestone",
    Description:
      "Independent watchdog cross-references reached a 125-event milestone on coordinated erosion of proactive disclosure — spanning FOIA delays, lobbying log gaps, press access limits, and ethics filing extensions that SAFE-004 targets.",
    Severity_Score: 9,
    Impacted_Sectors: ["Democracy"],
    Sources: [
      citations.foia_gov,
      citations.doj_oip_foia,
      citations.safeguard_transparency,
      citations.epstein_records_act,
    ],
    Linked_Fix_ID: "FIX-SAFE-004",
    category: "Democracy",
    p2025Pillar: "Transparency",
    externalTrackers: [
      cpr(),
      observer(),
      { name: "watch2025.org", url: "https://watch2025.org/" },
    ],
  },
];

/** Events grouped by calendar month (YYYY-MM), sorted chronologically */
export function getEventsByMonth(
  events: TimelineEvent[] = timelineEvents
): { month: string; label: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const event of events) {
    const key = event.Date.slice(0, 7);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, count]) => {
      const d = new Date(`${month}-01T00:00:00`);
      return {
        month,
        label: d.toLocaleDateString("en-US", { month: "short", year: "2-digit" }),
        count,
      };
    });
}

export function getTimelineEventById(id: string): TimelineEvent | undefined {
  return timelineEvents.find((e) => e.Event_ID === id);
}

/** Up to 3 related events by shared sector, category, and P2025 chapter */
export function getRelatedEvents(
  event: TimelineEvent,
  limit = 3,
  events: TimelineEvent[] = timelineEvents
): TimelineEvent[] {
  const scored = events
    .filter((e) => e.Event_ID !== event.Event_ID)
    .map((e) => {
      let score = 0;
      if (e.category === event.category) score += 3;
      if (e.p2025Pillar && event.p2025Pillar && e.p2025Pillar === event.p2025Pillar) {
        score += 4;
      }
      for (const sector of e.Impacted_Sectors) {
        if (event.Impacted_Sectors.includes(sector)) score += 2;
      }
      return { event: e, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.event.Date).getTime() - new Date(a.event.Date).getTime();
    });

  return scored.slice(0, limit).map((item) => item.event);
}

/** Events from the last 7 days, or the 5 most recent when dates are static/historical. */
export function getAgendaEvents(now = new Date(), limit = 5): TimelineEvent[] {
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  weekAgo.setHours(0, 0, 0, 0);

  const thisWeek = timelineEvents
    .filter((event) => {
      const eventDate = new Date(`${event.Date}T00:00:00`);
      return eventDate >= weekAgo && eventDate <= now;
    })
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());

  if (thisWeek.length > 0) {
    return thisWeek.slice(0, limit);
  }

  return [...timelineEvents]
    .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
    .slice(0, limit);
}

export function eventDetailPath(eventId: string): string {
  return `/tracker/${encodeURIComponent(eventId)}`;
}

export const timelineCategories = [
  "All",
  "Environment",
  "Civil Rights",
  "Economy",
  "Healthcare",
  "Democracy",
  "Immigration",
  "Education",
] as const;

/** Computed tracker statistics */
export function getTrackerStats(events: TimelineEvent[] = timelineEvents) {
  const highSeverity = events.filter((e) => e.Severity_Score >= 8).length;
  const linkedFixes = new Set(
    events.map((e) => e.Linked_Fix_ID).filter(Boolean)
  ).size;
  const withExternal = events.filter(
    (e) => e.externalTrackers && e.externalTrackers.length > 0
  ).length;
  return {
    total: events.length,
    highSeverity,
    linkedFixes,
    withExternal,
    avgSeverity:
      events.length > 0
        ? Math.round(
            (events.reduce((s, e) => s + e.Severity_Score, 0) / events.length) *
              10
          ) / 10
        : 0,
  };
}

export type ThreatLevel = {
  score: number;
  label: string;
  avgSeverity: number;
  highSeverity: number;
  total: number;
};

/** Democracy risk score from avg severity + high-severity share */
export function getThreatLevel(
  events: TimelineEvent[] = timelineEvents
): ThreatLevel {
  const stats = getTrackerStats(events);
  if (stats.total === 0) {
    return {
      score: 0,
      label: "Unknown",
      avgSeverity: 0,
      highSeverity: 0,
      total: 0,
    };
  }
  const highRatio = stats.highSeverity / stats.total;
  const score =
    Math.round((stats.avgSeverity * 0.55 + highRatio * 10 * 0.45) * 10) / 10;
  const clamped = Math.min(10, Math.max(1, score));

  let label = "Moderate";
  if (clamped >= 9) label = "Critical";
  else if (clamped >= 7.5) label = "Severe";
  else if (clamped >= 6) label = "High";
  else if (clamped >= 4) label = "Elevated";

  return {
    score: clamped,
    label,
    avgSeverity: stats.avgSeverity,
    highSeverity: stats.highSeverity,
    total: stats.total,
  };
}
