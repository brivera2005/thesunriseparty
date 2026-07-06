import type { PolicyFix, SafeguardItem } from "@/lib/types";
import { citations } from "./citations";

export const policyFixes: PolicyFix[] = [
  {
    id: "FIX-HC-001",
    category: "Healthcare",
    title: "Medicare for All with Integrated Long-Term Care",
    problem:
      "21 million Americans lost affordable ACA coverage after subsidy expiration. Medicare Advantage overpayments drain $83B annually while 27 million remain uninsured and medical debt drives 500,000 bankruptcies per year.",
    proposedFix:
      "Establish a single-payer national health insurance program covering all residents with no premiums, deductibles, or copays. Phase out private Medicare Advantage overpayments, negotiate drug prices centrally, and integrate long-term care into the benefit package.",
    economicImpact:
      "RAND analysis projects $450B in annual savings through administrative simplification and bulk purchasing. Average household healthcare costs drop $35,000/year. 2.1 million jobs transition with 5-year retraining guarantees.",
    costOfInaction:
      "Without reform, medical debt will keep driving roughly two-thirds of personal bankruptcies while 27 million remain uninsured and Medicare Advantage overpayments drain $83B annually from public coffers.",
    costOfInactionCitations: [
      citations.cost_inaction_healthcare,
      citations.gao_healthcare,
      citations.cbo_medicare,
    ],
    safeguards: [
      "Constitutional amendment protecting universal healthcare as a right",
      "Independent Payment Advisory Board with public nomination process",
      "5-year transition fund for displaced insurance industry workers",
      "Annual public audit of all pharmaceutical pricing negotiations",
    ],
    citations: [
      citations.policy_healthcare,
      citations.cbo_medicare,
      citations.aca_premium,
      citations.hr_medicare_for_all,
    ],
    billReferences: [
      {
        number: "H.R. 3421",
        title: "Medicare for All Act of 2025 (Jayapal)",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/3421",
        status: "Introduced — referred to Energy & Commerce",
      },
      {
        number: "S. 1129",
        title: "Medicare for All Act of 2025 (Sanders)",
        url: "https://www.congress.gov/bill/119th-congress/senate-bill/1129",
        status: "Introduced — referred to Finance",
      },
    ],
    implementationTimeline: [
      {
        phase: "Year 1 — Coverage expansion",
        timeframe: "Months 1–12",
        description:
          "Lower Medicare eligibility to 55, cap out-of-pocket costs, and launch public option buy-in while building claims infrastructure.",
      },
      {
        phase: "Year 2–3 — Transition",
        timeframe: "Months 13–36",
        description:
          "Phase out employer-sponsored private plans with 5-year job guarantees for displaced insurance workers; centralize drug price negotiation.",
      },
      {
        phase: "Year 4–5 — Full single payer",
        timeframe: "Months 37–60",
        description:
          "Universal enrollment with integrated long-term care; independent Payment Advisory Board operational with public audits.",
      },
    ],
  },
  {
    id: "FIX-ECO-001",
    category: "Economy & Labor",
    title: "Federal Jobs Guarantee & Worker Classification Reform",
    problem:
      "Union membership at historic 9.9% lows while 57 million gig workers lack basic protections. Wage stagnation persists despite record corporate profits, and automation threatens 15 million jobs without a transition framework.",
    proposedFix:
      "Create a permanent federal jobs guarantee at $20/hour minimum with full benefits for infrastructure, care economy, and climate adaptation work. Reclassify gig workers as employees with collective bargaining rights. Restore card-check union recognition.",
    economicImpact:
      "EPI modeling shows 15 million jobs created at peak implementation. GDP growth of 1.2% annually from increased consumer spending. Union wage premium would lift median household income 16% within a decade.",
    costOfInaction:
      "If labor power keeps eroding at current rates, gig workers remain misclassified without benefits, wage stagnation persists despite record profits, and the 17% union wage premium stays out of reach for 90% of workers.",
    costOfInactionCitations: [
      citations.cost_inaction_labor,
      citations.bls_wages,
      citations.brookings_labor,
    ],
    safeguards: [
      "Jobs Guarantee Board with labor union majority representation",
      "Automatic cost-of-living adjustments tied to regional price indices",
      "Anti-retaliation protections with triple-damages for employer violations",
      "Sunset review every 10 years with mandatory congressional reauthorization",
    ],
    citations: [
      citations.policy_economy,
      citations.bls_wages,
      citations.brookings_labor,
      citations.hr_pro_act,
    ],
    billReferences: [
      {
        number: "H.R. 1274",
        title: "Protecting the Right to Organize Act (PRO Act)",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/1274",
        status: "Introduced — referred to Education & Workforce",
      },
      {
        number: "H.R. 100",
        title: "Federal Jobs Guarantee Development Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/100",
        status: "Introduced — pilot program authorization",
      },
    ],
    implementationTimeline: [
      {
        phase: "Pilot districts",
        timeframe: "Year 1",
        description:
          "Launch jobs guarantee pilots in 10 high-unemployment counties with $20/hr floor and full benefits.",
      },
      {
        phase: "PRO Act labor rights",
        timeframe: "Year 1–2",
        description:
          "Pass PRO Act provisions: card-check recognition, gig worker reclassification, and triple-damage penalties for union-busting.",
      },
      {
        phase: "National scale-up",
        timeframe: "Year 3–5",
        description:
          "Expand guarantee to all willing workers; Jobs Guarantee Board assumes oversight with union majority.",
      },
    ],
  },
  {
    id: "FIX-ENV-001",
    category: "Environment",
    title: "Climate Emergency Mobilization Act",
    problem:
      "Current policies lead to 2.8°C warming by 2100. EPA methane rollbacks expose 280,000 well sites to unmonitored leaks. The U.S. remains the largest historical emitter while clean energy investment lags peer nations.",
    proposedFix:
      "Declare a climate emergency triggering $10T over 10 years for renewable grid modernization, building electrification, public transit expansion, and regenerative agriculture. Reinstate and strengthen methane monitoring with criminal penalties for willful violations.",
    economicImpact:
      "Data for Progress models 20 million clean energy jobs and 70% emissions reduction below 2005 levels by 2035. $2.9T in avoided climate disaster costs by 2050. Energy costs drop 40% for households through public utility ownership.",
    costOfInaction:
      "Current rollback trajectory puts the U.S. on path for 2.8°C warming by 2100, with unmonitored methane leaks from 280,000 well sites and climate damages costing hundreds of billions annually in infrastructure, health, and lost productivity.",
    costOfInactionCitations: [
      citations.cost_inaction_climate,
      citations.ipcc_climate,
      citations.epa_methane_rollback,
    ],
    safeguards: [
      "Climate Impact Office with subpoena power over fossil fuel companies",
      "Just transition fund: 5 years full salary for displaced fossil fuel workers",
      "Community ownership requirements for 30% of new renewable capacity",
      "Annual emissions budget with automatic trigger for additional measures",
    ],
    citations: [
      citations.policy_environment,
      citations.ipcc_climate,
      citations.epa_rule,
      citations.epa_methane_rollback,
    ],
    billReferences: [
      {
        number: "H.R. 7941",
        title: "Green New Deal Resolution",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/7941",
        status: "Introduced — framework resolution",
      },
      {
        number: "S. 685",
        title: "Clean Energy for America Act",
        url: "https://www.congress.gov/bill/119th-congress/senate-bill/685",
        status: "Introduced — tax credit modernization",
      },
    ],
    implementationTimeline: [
      {
        phase: "Emergency declaration",
        timeframe: "Month 1",
        description:
          "Invoke NEA authority for grid interconnection fast-tracking and building electrification standards.",
      },
      {
        phase: "Methane & grid",
        timeframe: "Year 1–3",
        description:
          "Reinstate EPA methane rules with criminal penalties; deploy $3T for renewable grid and transit.",
      },
      {
        phase: "Emissions budget",
        timeframe: "Year 4–10",
        description:
          "Annual emissions targets with automatic supplemental measures if benchmarks missed; 30% community-owned capacity.",
      },
    ],
  },
  {
    id: "FIX-VR-001",
    category: "Voting Rights",
    title: "Democracy Restoration & Automatic Registration",
    problem:
      "127 restrictive voting bills introduced in 32 states. Voter roll purges disproportionately remove eligible voters of color. 5.2 million citizens remain disenfranchised due to felony convictions. Gerrymandering entrenches minority rule in 28 congressional districts.",
    proposedFix:
      "National automatic voter registration at age 16 with same-day registration nationwide. Restore voting rights to all citizens regardless of criminal history. Independent redistricting commissions in all states. Make Election Day a federal holiday with paid time off.",
    economicImpact:
      "AVR states saw 94% registration increase among young voters. Reduced election administration costs of $1.2B annually through standardized systems. Increased civic participation correlates with 0.3% GDP growth from policy stability.",
    costOfInaction:
      "Without federal voting protections, restrictive state laws proliferate — 32 passed in 2025 alone — while 5.2 million citizens remain disenfranchised and gerrymandering locks minority rule into 28 congressional districts.",
    costOfInactionCitations: [
      citations.cost_inaction_voting,
      citations.brennan_voting,
      citations.policy_voting,
    ],
    safeguards: [
      "Constitutional amendment guaranteeing universal suffrage",
      "Federal election monitors with binding authority in non-compliant jurisdictions",
      "Proportional representation pilot programs in 5 states",
      "Mandatory public campaign financing with 6:1 small-dollar matching",
    ],
    citations: [
      citations.policy_voting,
      citations.brennan_voting,
      citations.hr_john_lewis,
      citations.save_act_crs,
    ],
    billReferences: [
      {
        number: "H.R. 14",
        title: "John R. Lewis Voting Rights Advancement Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/14",
        status: "Introduced — referred to Judiciary",
      },
      {
        number: "H.R. 11",
        title: "Freedom to Vote Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/11",
        status: "Introduced — AVR & redistricting reforms",
      },
    ],
    implementationTimeline: [
      {
        phase: "Federal floor",
        timeframe: "Year 1",
        description:
          "Enact AVR at federal agencies and DMVs; same-day registration in all federal elections.",
      },
      {
        phase: "Rights restoration",
        timeframe: "Year 1–2",
        description:
          "Automatic rights restoration for all citizens; independent redistricting commissions mandated.",
      },
      {
        phase: "Structural reform",
        timeframe: "Year 3–5",
        description:
          "Public campaign financing live; proportional representation pilots in 5 states; suffrage amendment ratification push.",
      },
    ],
  },
  {
    id: "FIX-ED-001",
    category: "Education",
    title: "Universal Pre-K through Public University",
    problem:
      "Childcare costs exceed $15,000/year in most states. Student debt exceeds $1.7 trillion. Title IX rollbacks weaken campus safety protections for 19 million students. School funding disparities produce 3-year achievement gaps by eighth grade.",
    proposedFix:
      "Universal tuition-free pre-K for ages 3-4. Cancel existing federal student debt and make public colleges, universities, and trade schools tuition-free. Fully fund Title I schools at 40% above current levels. Strengthen Title IX protections with trauma-informed proceedings.",
    economicImpact:
      "NBER research links universal pre-K to 13% higher college enrollment and 8% lifetime earnings increase. Student debt cancellation would boost GDP $86B annually. Title I funding closes achievement gaps within two generations.",
    costOfInaction:
      "Families keep paying $15,000+ annually for childcare while $1.6 trillion in student debt delays homeownership; Title IX rollbacks leave 19 million students with weaker campus safety protections and achievement gaps persist across generations.",
    costOfInactionCitations: [
      citations.cost_inaction_education,
      citations.policy_education,
      citations.ed_dept_titleix,
    ],
    safeguards: [
      "Education Trust Fund insulated from annual appropriations battles",
      "Faculty and student majority on university governance boards",
      "Debt cancellation limited to public and non-profit institution loans",
      "10-year review of pre-K outcomes with mandatory program adjustments",
    ],
    citations: [
      citations.policy_education,
      citations.ed_dept_titleix,
      citations.ed_restructuring,
    ],
    billReferences: [
      {
        number: "H.R. 4647",
        title: "College for All Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/4647",
        status: "Introduced — tuition-free public higher ed",
      },
      {
        number: "H.R. 2813",
        title: "Universal Child Care and Early Learning Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/2813",
        status: "Introduced — pre-K expansion",
      },
    ],
    implementationTimeline: [
      {
        phase: "Pre-K rollout",
        timeframe: "Year 1–2",
        description:
          "Federal-state partnership funds universal pre-K for ages 3–4 in highest-need districts first.",
      },
      {
        phase: "Debt cancellation",
        timeframe: "Year 2",
        description:
          "Cancel federal student debt for public and nonprofit graduates; cap future public tuition at $0.",
      },
      {
        phase: "Title I & Title IX",
        timeframe: "Year 3–5",
        description:
          "40% Title I funding increase; trauma-informed Title IX proceedings with student-faculty governance boards.",
      },
    ],
  },
];

export const safeguardItems: SafeguardItem[] = [
  {
    id: "SAFE-001",
    title: "Anti-Corruption Architecture",
    description:
      "Structural reforms to sever the revolving door between government, lobbying, and corporate interests—making corruption not just illegal but structurally difficult.",
    mechanisms: [
      "Lifetime lobbying ban for former members of Congress and senior executive branch officials",
      "Public financing of all federal elections with real-time disclosure of contributions over $200",
      "Independent Office of Public Integrity with power to refer cases directly to federal prosecutors",
      "Mandatory blind trusts for all federal judges and agency heads",
    ],
    citations: [citations.safeguard_anticorruption],
  },
  {
    id: "SAFE-002",
    title: "Executive Constraints",
    description:
      "Rebalance war powers, emergency declarations, and regulatory authority to prevent authoritarian consolidation of executive power.",
    mechanisms: [
      "War Powers Reform: 30-day congressional authorization required for military action with automatic funding cuts",
      "National emergency declarations expire after 90 days without congressional renewal",
      "Regulatory Stability Act: major rules cannot be overturned without 60-vote Senate threshold",
      "Inspector General protection from presidential removal without cause finding by bipartisan panel",
    ],
    citations: [citations.safeguard_executive, citations.crs_executive],
  },
  {
    id: "SAFE-003",
    title: "Judicial Reform",
    description:
      "Restore democratic accountability to the federal judiciary while preserving judicial independence and the rule of law.",
    mechanisms: [
      "18-year term limits for Supreme Court justices with staggered appointments every 2 years",
      "Mandatory judicial ethics code with binding enforcement for all federal judges",
      "Jurisdiction stripping for partisan gerrymandering cases to independent commissions",
      "Court expansion to 13 justices to match federal circuit court structure",
    ],
    citations: [citations.safeguard_judicial],
  },
  {
    id: "SAFE-004",
    title: "Transparency Mandates",
    description:
      "Radical transparency requirements ensuring citizens can audit government decisions, spending, and influence in real time.",
    mechanisms: [
      "Machine-readable federal spending database updated daily with recipient-level detail",
      "Mandatory publication of all lobbying contacts within 48 hours",
      "Whistleblower protection with 30% bounty on recovered fraud over $1M",
      "Live-streamed congressional committee hearings with searchable transcripts within 24 hours",
    ],
    citations: [citations.safeguard_transparency, citations.pew_trust],
  },
];

/** All shareable blueprint page IDs (policy fixes + safeguards) */
export const blueprintPageIds: string[] = [
  ...policyFixes.map((p) => p.id),
  ...safeguardItems.map((s) => s.id),
];

export function blueprintDetailPath(id: string): string {
  return `/blueprint/${encodeURIComponent(id)}`;
}

/** Deep-link path to a blueprint policy fix or safeguard page */
export function policyFixPath(linkedFixId: string): string {
  if (linkedFixId.startsWith("FIX-SAFE-")) {
    return blueprintDetailPath(linkedFixId.replace("FIX-SAFE-", "SAFE-"));
  }
  return blueprintDetailPath(linkedFixId);
}

export function getPolicyFixById(id: string): PolicyFix | undefined {
  return policyFixes.find((p) => p.id === id);
}

export function getSafeguardById(id: string): SafeguardItem | undefined {
  return safeguardItems.find((s) => s.id === id);
}

export function isBlueprintPageId(id: string): boolean {
  return blueprintPageIds.includes(id);
}

export function isBlueprintAnchorId(id: string): boolean {
  return isBlueprintPageId(id);
}
