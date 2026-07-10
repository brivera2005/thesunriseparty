import type { CitationSource } from "@/lib/types";
import { citations } from "./citations";

export interface ScheduleFAgency {
  id: string;
  name: string;
  abbreviation: string;
  estimatedRoles: string;
  impact: string;
  status: "implementing" | "identified" | "litigation";
  sources: CitationSource[];
}

/** Agency-level Schedule F impact - based on OPM Jan 2025 guidance and CRS analysis. */
export const scheduleFAgencies: ScheduleFAgency[] = [
  {
    id: "hhs",
    name: "Health and Human Services",
    abbreviation: "HHS",
    estimatedRoles: "8,000-12,000 policy roles",
    impact:
      "FDA drug approval policy, CDC guidance, Medicare/Medicaid rulemaking, and public health emergency response staffed by removable at-will employees.",
    status: "implementing",
    sources: [citations.opm_schedule_f, citations.gao_schedule_f, citations.probationary_terminations],
  },
  {
    id: "va",
    name: "Veterans Affairs",
    abbreviation: "VA",
    estimatedRoles: "5,000-8,000 policy roles",
    impact:
      "Veterans benefits adjudication, hospital policy, and disability claims processing leadership subject to political loyalty tests over merit.",
    status: "implementing",
    sources: [citations.opm_schedule_f, citations.probationary_terminations],
  },
  {
    id: "epa",
    name: "Environmental Protection Agency",
    abbreviation: "EPA",
    estimatedRoles: "2,000-4,000 policy roles",
    impact:
      "Clean air and water rulemaking, enforcement attorneys, and climate policy staff reclassified - enabling rapid rollback of environmental protections.",
    status: "implementing",
    sources: [citations.opm_schedule_f, citations.epa_methane_rollback, citations.gao_schedule_f],
  },
  {
    id: "ed",
    name: "Department of Education",
    abbreviation: "ED",
    estimatedRoles: "1,500-3,000 policy roles",
    impact:
      "Title IX enforcement, student loan policy, and civil rights oversight staffed by at-will appointees aligned with Project 2025 education chapter.",
    status: "implementing",
    sources: [citations.opm_schedule_f, citations.ed_restructuring, citations.ed_dept_titleix],
  },
  {
    id: "dhs",
    name: "Homeland Security",
    abbreviation: "DHS",
    estimatedRoles: "6,000-10,000 policy roles",
    impact:
      "ICE enforcement policy, asylum adjudication, and border security rulemaking converted to Schedule F - accelerating mass deportation infrastructure.",
    status: "implementing",
    sources: [citations.schedule_f_eo, citations.ice_expansion_eo, citations.opm_schedule_f],
  },
  {
    id: "doj",
    name: "Justice Department",
    abbreviation: "DOJ",
    estimatedRoles: "3,000-5,000 policy roles",
    impact:
      "Civil rights division, antitrust enforcement, and voting rights litigation leadership vulnerable to politically motivated removal.",
    status: "identified",
    sources: [citations.gao_schedule_f, citations.schedule_f_eo],
  },
  {
    id: "treasury",
    name: "Treasury Department",
    abbreviation: "Treasury",
    estimatedRoles: "2,000-4,000 policy roles",
    impact:
      "IRS enforcement policy, sanctions implementation, and financial regulation oversight subject to at-will reclassification.",
    status: "identified",
    sources: [citations.opm_schedule_f, citations.cfpb_enforcement_pause],
  },
  {
    id: "state",
    name: "State Department",
    abbreviation: "State",
    estimatedRoles: "4,000-6,000 policy roles",
    impact:
      "Foreign aid policy, diplomatic corps leadership, and USAID merger planning staffed by removable political appointees.",
    status: "implementing",
    sources: [citations.usaid_rif, citations.opm_schedule_f],
  },
  {
    id: "opm",
    name: "Office of Personnel Management",
    abbreviation: "OPM",
    estimatedRoles: "Guidance issuer",
    impact:
      "OPM issued Federal Register implementing guidance on Jan 29, 2025 directing all agencies to identify Schedule F positions within 120 days.",
    status: "implementing",
    sources: [citations.opm_schedule_f, citations.schedule_f_eo],
  },
];

export const scheduleFOverview = {
  title: "Schedule F Deep Dive",
  summary:
    "Schedule F reclassifies federal employees in 'policy-influencing' roles as at-will political appointees - removable without merit protections. CRS estimates potentially 50,000+ positions across agencies. OPM guidance (Jan 29, 2025) directed agencies to complete position inventories within 120 days.",
  opmGuidanceUrl:
    "https://www.federalregister.gov/documents/2025/01/29/2025-01953/schedule-policy-and-career-senior-executive-service-accountability",
  eoUrl:
    "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/",
};
