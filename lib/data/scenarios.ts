import type { ImpactScenario, ScenarioActor } from "@/lib/types";
import { citations } from "./citations";
import { cite } from "./conversation-citations";

/** Topic chips shown on /scenarios */
export const scenarioTopics = [
  "All",
  "Healthcare",
  "Housing",
  "Childcare",
  "Education",
  "Economy",
  "Labor",
  "Democracy",
  "Climate",
  "Immigration",
  "Veterans",
  "LGBTQ",
  "Rural",
  "Elders",
] as const;

export type ScenarioTopicFilter = (typeof scenarioTopics)[number];

export function scenarioDetailPath(id: string): string {
  return `/scenarios/${encodeURIComponent(id)}`;
}

export function getScenarioById(id: string): ImpactScenario | undefined {
  return impactScenarios.find((s) => s.id === id);
}

export function getScenariosByTopic(topic: ScenarioTopicFilter): ImpactScenario[] {
  if (topic === "All") return impactScenarios;
  return impactScenarios.filter((s) => s.topics.includes(topic));
}

export function getScenarioTopics(scenario: ImpactScenario): string[] {
  return scenario.topics;
}

export function actorColorClass(actor: ScenarioActor): string {
  const key = String(actor).toLowerCase();
  if (key.includes("trump") || key.includes("admin") || key.includes("dhs") || key.includes("ice")) {
    return "border-destructive/40 bg-destructive/10 text-destructive";
  }
  if (key.includes("congress") || key.includes("senate") || key.includes("house")) {
    return "border-navy/30 bg-navy/5 text-navy";
  }
  if (key.includes("court")) {
    return "border-amber-500/40 bg-amber-500/10 text-amber-800";
  }
  if (key.includes("corporation") || key.includes("pharma") || key.includes("landlord") || key.includes("employer")) {
    return "border-violet-500/40 bg-violet-500/10 text-violet-700";
  }
  if (key.includes("state")) {
    return "border-sky-500/40 bg-sky-500/10 text-sky-800";
  }
  if (key.includes("propaganda") || key.includes("media")) {
    return "border-sunrise/50 bg-sunrise/10 text-sunrise";
  }
  return "border-border bg-muted/40 text-muted-foreground";
}

export function actorDotClass(actor: ScenarioActor): string {
  const key = String(actor).toLowerCase();
  if (key.includes("trump") || key.includes("admin") || key.includes("dhs") || key.includes("ice")) {
    return "bg-destructive";
  }
  if (key.includes("congress") || key.includes("senate") || key.includes("house")) {
    return "bg-navy";
  }
  if (key.includes("court")) return "bg-amber-500";
  if (key.includes("corporation") || key.includes("pharma") || key.includes("landlord") || key.includes("employer")) {
    return "bg-violet-500";
  }
  if (key.includes("state")) return "bg-sky-500";
  if (key.includes("propaganda") || key.includes("media")) return "bg-sunrise";
  return "bg-muted-foreground";
}

const cpi = cite(
  "bls_cpi",
  "Consumer Price Index",
  "Bureau of Labor Statistics",
  "https://www.bls.gov/cpi/",
  "BLS CPI tracks food-at-home and shelter inflation that households feel at grocery stores and on rent day.",
  "2025-01-01"
);

const censusHousing = cite(
  "census_housing",
  "Housing Topics",
  "U.S. Census Bureau",
  "https://www.census.gov/topics/housing.html",
  "Census housing data document cost burdens, vacancy, and tenure gaps that shape eviction risk.",
  "2025-01-01"
);

const femaDecls = cite(
  "fema_decls",
  "Disaster Declarations",
  "Federal Emergency Management Agency",
  "https://www.fema.gov/disaster/declarations",
  "FEMA disaster declarations list counties hit by hurricanes, floods, and wildfires that need federal recovery capacity.",
  "2025-01-01"
);

const kffUninsured = cite(
  "kff_uninsured_facts",
  "Key Facts about the Uninsured Population",
  "Kaiser Family Foundation",
  "https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/",
  "KFF shows millions remain uninsured or underinsured, with medical debt concentrated among working families.",
  "2025-01-01"
);

const acluLgbtq = cite(
  "aclu_lgbtq_attacks",
  "Legislative Attacks on LGBTQ Rights",
  "American Civil Liberties Union",
  "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
  "ACLU tracks hundreds of state bills restricting LGBTQ healthcare, schools, and public life.",
  "2025-01-01"
);

const poverty = cite(
  "census_poverty",
  "Income and Poverty",
  "U.S. Census Bureau",
  "https://www.census.gov/topics/income-poverty/poverty.html",
  "Official poverty measures show how wages, transfers, and medical costs determine who can afford basics.",
  "2025-01-01"
);

/**
 * Complex Impact Scenarios: lived outcomes with multi-step causal chains.
 * Prefer Tracker / Blueprint links and Tier-1 institutional sources.
 */
export const impactScenarios: ImpactScenario[] = [
  {
    id: "SCN-INSULIN-001",
    title: "The Ramirez family cannot afford insulin",
    persona: {
      who: "Working parents of a Type 1 diabetic teen",
      location: "Phoenix, Arizona",
      situation:
        "Maria works retail. Luis drives for a warehouse. Their son Diego needs daily insulin. Their marketplace plan lost enhanced subsidies.",
    },
    getsY:
      "Rationing doses, crowdfunding, and ER visits when sugar crashes. Out-of-pocket insulin still spikes between refills.",
    shouldGetZ:
      "Negotiated insulin at near-cost, automatic coverage under Medicare for All / national drug negotiation, and no medical bankruptcy threat (Blueprint FIX-DRUG-001 and FIX-HC-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Corporations",
          action: "Insulin list prices and rebate games stay far above manufacturing cost.",
          effect: "Families pay peer-leading U.S. prices even when the molecule is a century old.",
          linkedFixId: "FIX-DRUG-001",
          sources: [citations.kff_drug_costs, citations.cost_inaction_drugs],
        },
        {
          actor: "Congress",
          action: "Drug-price negotiation stays narrow; broader Medicare negotiation bills stall.",
          effect: "Most commercial insulin stays outside the strongest federal bargaining tools.",
          linkedFixId: "FIX-DRUG-001",
          sources: [citations.cbo_drug_negotiation, citations.hr_medicare_for_all],
        },
        {
          actor: "Trump admin",
          action: "Enhanced ACA premium tax credits expire; marketplace premiums jump.",
          effect: "The Ramirez plan deductible rises and pharmacy benefits get thinner.",
          linkedEventId: "EVT-2025-1108-021",
          linkedFixId: "FIX-HC-001",
          sources: [citations.aca_premium, kffUninsured],
        },
        {
          actor: "State gov",
          action: "Medicaid work-requirement waivers add churn for low-wage workers who miss paperwork.",
          effect: "Coverage gaps appear exactly when refill day hits.",
          linkedEventId: "EVT-2025-0528-077",
          sources: [citations.cms_medicaid_work_rules, citations.gao_healthcare],
        },
        {
          actor: "Propaganda",
          action: "Ads claim drug negotiation kills innovation and that insulin already is fixed.",
          effect: "Voters shrug while receipts show rationing and ER debt.",
          sources: [citations.cost_inaction_drugs, citations.kff_drug_costs],
        },
        {
          actor: "Budget priorities",
          action: "Federal capacity shifts toward enforcement and tax cuts for capital income, not pharmacy access.",
          effect: "Money that could buy insulin security buys detention beds and rebate theater instead.",
          linkedFixId: "FIX-TAX-001",
          sources: [citations.cost_inaction_tax, citations.ice_expansion_eo],
        },
      ],
    },
    bottomLine:
      "Diego does not lack science. He lacks bargaining power, stable coverage, and a Congress that puts pharmacy prices above pharma talking points.",
    topics: ["Healthcare", "Economy", "Elders"],
    severity: 9,
  },
  {
    id: "SCN-ER-DEBT-002",
    title: "Aisha lands in the ER with a $14,000 bill",
    persona: {
      who: "Gig worker, mid-30s",
      location: "Atlanta, Georgia",
      situation:
        "Aisha delayed a clinic visit after her marketplace premium doubled. Chest pain sent her to the ER. She has no savings.",
    },
    getsY: "Collections calls, damaged credit, and skipped follow-up care.",
    shouldGetZ:
      "Universal coverage with no deductible surprise bills, plus primary care before the ER (FIX-HC-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Enhanced ACA subsidies expire for millions of enrollees.",
          effect: "Aisha drops to a catastrophic plan she cannot use until disaster.",
          linkedEventId: "EVT-2025-1108-021",
          linkedFixId: "FIX-HC-001",
          sources: [citations.aca_premium, kffUninsured],
        },
        {
          actor: "State gov",
          action: "Medicaid work-requirement demonstrations raise administrative churn.",
          effect: "People lose coverage for paperwork, not income.",
          linkedEventId: "EVT-2025-0128-039",
          sources: [citations.gao_healthcare, citations.cms_medicaid_work_rules],
        },
        {
          actor: "Corporations",
          action: "Hospital chargemaster prices and facility fees hit the uninsured hardest.",
          effect: "One night becomes five figures before any negotiation.",
          sources: [citations.cost_inaction_healthcare, citations.oecd_health],
        },
        {
          actor: "Congress",
          action: "Medicare for All and surprise-billing expansions stall behind filibuster math.",
          effect: "The default remains private fragmentation.",
          linkedFixId: "FIX-HC-001",
          sources: [citations.hr_medicare_for_all, citations.policy_healthcare],
        },
        {
          actor: "Propaganda",
          action: "Talking points blame personal responsibility for medical debt.",
          effect: "Structural price and coverage failures get reframed as character.",
          sources: [citations.cost_inaction_healthcare, kffUninsured],
        },
      ],
    },
    bottomLine:
      "Aisha did not choose a $14,000 bill. She chose between rent and a premium the subsidy cliff made impossible.",
    topics: ["Healthcare", "Economy"],
    severity: 8,
  },
  {
    id: "SCN-RENT-003",
    title: "The Nguyens face eviction after a 28% rent hike",
    persona: {
      who: "Two-income family with one child",
      location: "Houston, Texas",
      situation:
        "Their corporate landlord raised rent after a refinance. Fair-housing enforcement is quieter. They have nowhere to go.",
    },
    getsY: "Court summons, storage unit living, and school disruption for their kid.",
    shouldGetZ:
      "Social housing supply, tenant protections, and fair-housing enforcement with teeth (FIX-HOUS-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Corporations",
          action: "Institutional landlords treat rent as a yield product, not a home.",
          effect: "Lease renewals track investor targets, not neighborhood wages.",
          linkedFixId: "FIX-HOUS-001",
          sources: [citations.policy_housing, citations.cost_inaction_housing, censusHousing],
        },
        {
          actor: "Trump admin",
          action: "HUD pauses affirmatively furthering fair housing and redirects enforcement.",
          effect: "Discrimination and predatory practices face fewer federal eyes.",
          linkedEventId: "EVT-2025-0310-052",
          linkedFixId: "FIX-HOUS-001",
          sources: [citations.hud_fair_housing_pause, citations.dei_termination_eo],
        },
        {
          actor: "Trump admin",
          action: "Housing EO stack emphasizes barriers and credit optics over tenant power.",
          effect: "Policy theater outruns eviction prevention.",
          linkedFixId: "FIX-HOUS-001",
          sources: [citations.housing_barriers_eo_2026, citations.wall_street_homebuyers_eo_2026],
        },
        {
          actor: "Congress",
          action: "National tenant protections and voucher expansions stall.",
          effect: "Local courts remain the landlord's venue of first resort.",
          sources: [citations.hr_housing_voucher, citations.cost_inaction_housing],
        },
        {
          actor: "Propaganda",
          action: "Stories blame tenants for not budgeting better.",
          effect: "Corporate rent extraction disappears from the plot.",
          sources: [citations.cost_inaction_housing, censusHousing],
        },
      ],
    },
    bottomLine:
      "The Nguyens work full time. The shortage is rights and housing supply, not effort.",
    topics: ["Housing", "Economy"],
    severity: 8,
  },
  {
    id: "SCN-CHILDCARE-004",
    title: "Jamila quits her job because childcare costs more than her paycheck",
    persona: {
      who: "Single mother, nurse aide",
      location: "Columbus, Ohio",
      situation:
        "Center care for a toddler quotes $1,600/month. Jamila's take-home is $2,100. Grandma cannot cover every shift.",
    },
    getsY: "Career exit, lost benefits, and long-term wage scarring.",
    shouldGetZ:
      "Universal childcare and paid family leave so work and caregiving can coexist (FIX-CC-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Congress",
          action: "Universal childcare and paid leave bills never clear both chambers.",
          effect: "Care stays a private market luxury.",
          linkedFixId: "FIX-CC-001",
          sources: [citations.policy_childcare, citations.hr_paid_leave, citations.dol_fmla],
        },
        {
          actor: "Corporations",
          action: "Employers treat childcare as a worker problem, not a labor-market input.",
          effect: "Women exit; managers call it a lifestyle choice.",
          sources: [citations.policy_childcare, citations.bls_wages],
        },
        {
          actor: "Trump admin",
          action: "Labor and family-support capacity shrinks while culture-war priorities expand.",
          effect: "Federal attention leaves care infrastructure.",
          sources: [citations.probationary_terminations, citations.dol_fmla],
        },
        {
          actor: "Propaganda",
          action: "Framing paints public childcare as radical social engineering.",
          effect: "Peer-nation normal becomes unspeakable.",
          linkedFixId: "FIX-CC-001",
          sources: [citations.policy_childcare, citations.oecd_health],
        },
        {
          actor: "Budget priorities",
          action: "Tax expenditures for capital outcompete care investments.",
          effect: "The ledger prefers stock buybacks to toddler slots.",
          linkedFixId: "FIX-TAX-001",
          sources: [citations.cost_inaction_tax, citations.treasury_tax],
        },
      ],
    },
    bottomLine:
      "Jamila is not lazy. Childcare math made employment irrational.",
    topics: ["Childcare", "Economy", "Labor"],
    severity: 8,
  },
  {
    id: "SCN-STUDENT-005",
    title: "Marcus cannot get his student-loan payment fixed",
    persona: {
      who: "Public-school teacher, age 29",
      location: "Charlotte, North Carolina",
      situation:
        "Marcus qualifies for income-driven repayment and PSLF tracking. Servicer tickets sit for months after Federal Student Aid staffing cuts.",
    },
    getsY: "Wrong payment amounts, credit anxiety, and delayed forgiveness progress.",
    shouldGetZ:
      "College for All / debt relief architecture plus a staffed Federal Student Aid office (FIX-ED-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Federal Student Aid workforce cuts and Education Department restructuring.",
          effect: "Borrower assistance queues explode.",
          linkedEventId: "EVT-2025-0405-065",
          linkedFixId: "FIX-ED-001",
          sources: [citations.student_aid_workforce_cuts, citations.ed_restructuring],
        },
        {
          actor: "Corporations",
          action: "Loan servicers optimize call deflection over accurate IDR counting.",
          effect: "Teachers become unpaid QA for private contractors.",
          sources: [citations.policy_student_debt, citations.cost_inaction_education],
        },
        {
          actor: "Congress",
          action: "College for All and broad cancellation frameworks stall.",
          effect: "Debt remains the default higher-ed finance model.",
          linkedFixId: "FIX-ED-001",
          sources: [citations.policy_education, citations.policy_student_debt],
        },
        {
          actor: "Propaganda",
          action: "Narratives mock borrowers as irresponsible degree collectors.",
          effect: "Public workers carrying public missions get sneered at for public debt.",
          sources: [citations.cost_inaction_education, citations.policy_student_debt],
        },
        {
          actor: "Budget priorities",
          action: "Austerity hits student-aid staffing while enforcement budgets grow.",
          effect: "The state can find agents faster than counselors.",
          sources: [citations.probationary_terminations, citations.ice_expansion_eo],
        },
      ],
    },
    bottomLine:
      "Marcus teaches other people's kids. The system cannot staff the office that manages his loan.",
    topics: ["Education", "Economy"],
    severity: 7,
  },
  {
    id: "SCN-GROCERIES-006",
    title: "The Patels watch grocery totals rise while wages stall",
    persona: {
      who: "Convenience-store clerks, dual income",
      location: "Chicago suburbs, Illinois",
      situation:
        "Tariff rounds raise import costs. Food-at-home CPI climbs. Their hours did not.",
    },
    getsY: "Trade-downs to cheaper calories, skipped fresh produce, and credit-card float.",
    shouldGetZ:
      "Trade policy that does not tax working-class carts, living wages, and antitrust against food monopolies (FIX-WAGE-001, FIX-AT-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Reciprocal and metals tariffs raise import costs across consumer goods.",
          effect: "Shelf prices absorb duties households never voted on line by line.",
          linkedEventId: "EVT-2025-0402-049",
          sources: [citations.reciprocal_tariffs_eo, citations.trade_policy_eo, cpi],
        },
        {
          actor: "Corporations",
          action: "Concentrated food processors and retailers pass through costs and protect margins.",
          effect: "Tariff shocks become permanent price floors.",
          linkedFixId: "FIX-AT-001",
          sources: [citations.ftc_antitrust, citations.doj_antitrust],
        },
        {
          actor: "Trump admin",
          action: "Overtime expansion halted for salaried workers.",
          effect: "Paychecks do not keep pace with the cart.",
          linkedEventId: "EVT-2025-0305-053",
          linkedFixId: "FIX-WAGE-001",
          sources: [citations.dol_overtime_rollback, citations.epi_minimum_wage],
        },
        {
          actor: "Propaganda",
          action: "Blame immigrants or prior presidents for prices while tariffs are sold as strength.",
          effect: "Voters argue about the wrong culprit at the checkout.",
          sources: [citations.reciprocal_tariffs_eo, cpi],
        },
        {
          actor: "Congress",
          action: "Living-wage and antitrust revival bills stall.",
          effect: "Neither wage floor nor competition policy rescues the cart.",
          linkedFixId: "FIX-WAGE-001",
          sources: [citations.epi_minimum_wage, citations.ftc_antitrust],
        },
      ],
    },
    bottomLine:
      "The Patels did not start a trade war. They just buy milk.",
    topics: ["Economy", "Labor"],
    severity: 7,
  },
  {
    id: "SCN-UNION-007",
    title: "Warehouse workers win a vote and still wait for a first contract",
    persona: {
      who: "Amazon-adjacent logistics crew",
      location: "Southern California",
      situation:
        "Workers organize after injuries. NLRB guidance protecting elections is rolled back. Bargaining stalls.",
    },
    getsY: "Retaliation fear, stalled raises, and safety issues that stay memos.",
    shouldGetZ:
      "PRO Act card-check / first-contract rules and a worker-protecting NLRB (FIX-ECO-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "NLRB leadership rescinds pro-worker organizing guidance.",
          effect: "Employers regain delay tactics that kill momentum.",
          linkedEventId: "EVT-2025-0205-014",
          linkedFixId: "FIX-ECO-001",
          sources: [citations.nlrb_rollback, citations.epi_unions],
        },
        {
          actor: "Corporations",
          action: "Captive-audience meetings and stall bargaining become standard playbooks.",
          effect: "A win on paper becomes years without a contract.",
          sources: [citations.bls_wages, citations.epi_unions],
        },
        {
          actor: "Congress",
          action: "PRO Act fails to overcome Senate blockade.",
          effect: "Federal law still favors delay over democracy at work.",
          linkedFixId: "FIX-ECO-001",
          sources: [citations.hr_pro_act, citations.policy_economy],
        },
        {
          actor: "Propaganda",
          action: "Unions are framed as corrupt relics instead of wage institutions.",
          effect: "Public support softens while the wage premium is real.",
          sources: [citations.bls_wages, citations.epi_unions],
        },
        {
          actor: "Courts",
          action: "Employer-friendly injunction strategies slow remedies.",
          effect: "Justice arrives after the organizing committee burns out.",
          sources: [citations.nlrb_rollback, citations.brookings_labor],
        },
      ],
    },
    bottomLine:
      "They did everything the civics pamphlet said. Power still sits with the delay clock.",
    topics: ["Labor", "Economy"],
    severity: 8,
  },
  {
    id: "SCN-VOTING-008",
    title: "Elena cannot register without a birth certificate she does not have",
    persona: {
      who: "Elderly U.S. citizen, naturalized decades ago",
      location: "Rural Georgia",
      situation:
        "SAVE Act-style documentary proof rules and state purge bills collide with a lifetime of lost paperwork.",
    },
    getsY: "Provisional ballot chaos, missed deadlines, and silenced midterm voice.",
    shouldGetZ:
      "Automatic registration and restored Voting Rights Act preclearance (FIX-VR-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Congress",
          action: "SAVE Act and proof-of-citizenship bills advance while John Lewis Act stalls.",
          effect: "Barriers scale; protections do not.",
          linkedEventId: "EVT-2025-0103-033",
          linkedFixId: "FIX-VR-001",
          sources: [citations.save_act_2025, citations.hr_john_lewis, citations.brennan_voting],
        },
        {
          actor: "State gov",
          action: "Dozens of restrictive voting laws limit mail, drop boxes, and early windows.",
          effect: "Eligible citizens face a gauntlet designed as integrity theater.",
          linkedEventId: "EVT-2026-0115-023",
          sources: [citations.brennan_voting, citations.cost_inaction_voting],
        },
        {
          actor: "Trump admin",
          action: "DOJ deprioritizes voting-rights enforcement.",
          effect: "Discriminatory maps and practices face fewer federal challenges.",
          linkedEventId: "EVT-2025-0210-050",
          sources: [citations.doj_civil_rights_shift, citations.brennan_voting],
        },
        {
          actor: "Propaganda",
          action: "Noncitizen voting myths flood media despite vanishingly rare cases.",
          effect: "Fraud panic justifies paperwork walls.",
          sources: [citations.brennan_voting, citations.save_act_crs],
        },
        {
          actor: "Budget priorities",
          action: "Election-security partnership staffing is cut.",
          effect: "Less help for states, more suspicion for voters.",
          sources: [citations.cisa_election_security_pause, citations.cisa_workforce_cuts],
        },
      ],
    },
    bottomLine:
      "Elena is a citizen. The paperwork cult is the policy.",
    topics: ["Democracy"],
    severity: 9,
  },
  {
    id: "SCN-FEMA-009",
    title: "After the hurricane, the Robinsons wait weeks for help",
    persona: {
      who: "Coastal family with flooded first floor",
      location: "Louisiana Gulf Coast",
      situation:
        "Storm surge ruins the house. FEMA staffing was cut ahead of season. Insurance gaps leave them camping upstairs.",
    },
    getsY: "Delayed inspections, mold, and kids out of school.",
    shouldGetZ:
      "Climate mobilization, fully staffed disaster response, and just-transition jobs (FIX-ENV-001, FIX-CJ-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "FEMA preparedness staffing cuts ahead of hurricane season.",
          effect: "Fewer people to process the surge of claims.",
          linkedEventId: "EVT-2025-0325-062",
          linkedFixId: "FIX-ENV-001",
          sources: [citations.fema_staffing_cuts, femaDecls],
        },
        {
          actor: "Trump admin",
          action: "Paris Agreement withdrawal and climate research freezes.",
          effect: "Prevention funding shrinks while disasters intensify.",
          sources: [citations.paris_withdrawal, citations.noaa_research_freeze, citations.ipcc_climate],
        },
        {
          actor: "Congress",
          action: "Climate emergency mobilization never becomes law at scale.",
          effect: "Recovery stays reactive and underbuilt.",
          linkedFixId: "FIX-ENV-001",
          sources: [citations.policy_environment, citations.cost_inaction_climate],
        },
        {
          actor: "Corporations",
          action: "Insurers retreat from high-risk zip codes.",
          effect: "Families absorb climate risk the market rejects.",
          sources: [citations.cost_inaction_climate, femaDecls],
        },
        {
          actor: "Propaganda",
          action: "Disaster victims are framed as unlucky weather stories, not policy outcomes.",
          effect: "Staffing cuts escape blame.",
          sources: [citations.fema_staffing_cuts, citations.ipcc_climate],
        },
      ],
    },
    bottomLine:
      "The storm was weather. The wait was a budget choice.",
    topics: ["Climate", "Housing", "Rural"],
    severity: 9,
  },
  {
    id: "SCN-MIXED-STATUS-010",
    title: "A mixed-status family keeps a go-bag by the door",
    persona: {
      who: "U.S.-citizen kids, undocumented mother, DACA-eligible older sibling",
      location: "Los Angeles, California",
      situation:
        "ICE expansion and interior enforcement surge. School pickup becomes a risk calculation.",
    },
    getsY: "Chronic fear, missed wages, and kids with trauma symptoms.",
    shouldGetZ:
      "Humane immigration modernization, asylum capacity, and an end to mass-deportation theater (FIX-IMM-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "ICE detention expansion and end of catch-and-release directives.",
          effect: "Enforcement infrastructure scales for family separation risk.",
          linkedEventId: "EVT-2025-0120-008",
          linkedFixId: "FIX-IMM-001",
          sources: [citations.ice_expansion_eo, citations.aclu_immigration],
        },
        {
          actor: "Trump admin",
          action: "Interior enforcement and National Guard coordination expand.",
          effect: "Raids reach workplaces and neighborhoods, not just the border line.",
          linkedEventId: "EVT-2025-0301-030",
          sources: [citations.dhs_deportation_ops, citations.ice_expansion_eo],
        },
        {
          actor: "Congress",
          action: "Comprehensive reform and pathway bills stall for decades.",
          effect: "Temporary status and fear remain the bipartisan default.",
          linkedFixId: "FIX-IMM-001",
          sources: [citations.policy_immigration, citations.cost_inaction_immigration],
        },
        {
          actor: "Propaganda",
          action: "Immigrant crime myths drown out labor and family facts.",
          effect: "Cruelty polls as strength.",
          sources: [citations.aclu_immigration, citations.cost_inaction_immigration],
        },
        {
          actor: "Budget priorities",
          action: "Detention beds get funded faster than immigration courts or counsel.",
          effect: "Due process becomes a bottleneck by design.",
          sources: [citations.ice_expansion_eo, citations.aclu_immigration],
        },
      ],
    },
    bottomLine:
      "Citizen children should not practice goodbye drills because Congress cannot pass a path.",
    topics: ["Immigration", "Democracy"],
    severity: 10,
  },
  {
    id: "SCN-RURAL-HOSP-011",
    title: "The county hospital closes its maternity ward",
    persona: {
      who: "Pregnant teacher in a farm town",
      location: "Western Kansas",
      situation:
        "Medicaid margins collapse. Obstetric services shut. Closest labor unit is 90 minutes away.",
    },
    getsY: "Ambulance births, higher complications, and families leaving town.",
    shouldGetZ:
      "Rural hospital and broadband compact with stable Medicaid financing (FIX-RUR-001).",
    whyNotZ: {
      steps: [
        {
          actor: "State gov",
          action: "Medicaid work requirements and premiums raise uninsured rates in rural counties.",
          effect: "Hospitals lose the payer mix that kept labor wards open.",
          linkedEventId: "EVT-2025-0720-088",
          linkedFixId: "FIX-RUR-001",
          sources: [citations.cms_medicaid_work_rules, citations.usda_rural],
        },
        {
          actor: "Trump admin",
          action: "ACA subsidy cliff and public-health grant pauses shrink coverage and prevention.",
          effect: "Volume drops; fixed costs stay.",
          linkedEventId: "EVT-2025-1108-021",
          sources: [citations.aca_premium, citations.cdc_grant_pause],
        },
        {
          actor: "Congress",
          action: "Rural hospital stabilization never matches the closure wave.",
          effect: "Maternity deserts spread.",
          linkedFixId: "FIX-RUR-001",
          sources: [citations.usda_rural, citations.fcc_broadband],
        },
        {
          actor: "Corporations",
          action: "Private equity strips remaining profitable lines.",
          effect: "Communities inherit the losses.",
          sources: [citations.cost_inaction_healthcare, citations.usda_rural],
        },
        {
          actor: "Propaganda",
          action: "Closures are called inevitable market outcomes.",
          effect: "Policy choices hide behind geography.",
          sources: [citations.usda_rural, citations.policy_healthcare],
        },
      ],
    },
    bottomLine:
      "Distance is not destiny. Reimbursement and coverage choices are.",
    topics: ["Rural", "Healthcare"],
    severity: 9,
  },
  {
    id: "SCN-VET-012",
    title: "A combat veteran waits months for a specialty appointment",
    persona: {
      who: "Army veteran with TBI and knee injury",
      location: "Tampa, Florida",
      situation:
        "VA privatization accelerates while claims backlog persists. Community care means new paperwork and denied authorizations.",
    },
    getsY: "Pain, missed work, and distrust of the system he served under.",
    shouldGetZ:
      "Fully staffed VA care and benefits guarantee without fraud-prone outsourcing (FIX-VET-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "VA accelerates community-care privatization despite GAO overpayment risks.",
          effect: "Oversight thins while veterans navigate contractor mazes.",
          linkedEventId: "EVT-2025-0615-081",
          linkedFixId: "FIX-VET-001",
          sources: [citations.va_community_care_audit, citations.va_health],
        },
        {
          actor: "Trump admin",
          action: "VA DEI office cuts and probationary terminations hit support staff.",
          effect: "Fewer people process claims and schedule care.",
          sources: [citations.probationary_terminations, citations.va_health],
        },
        {
          actor: "Congress",
          action: "Funding rhetoric outruns staffing and backlog elimination.",
          effect: "Press releases travel faster than appointments.",
          linkedFixId: "FIX-VET-001",
          sources: [citations.va_health, citations.gao_healthcare],
        },
        {
          actor: "Propaganda",
          action: "Choice branding sells privatization as patriotism.",
          effect: "Fraud risk and fragmentation get rebranded as freedom.",
          sources: [citations.va_community_care_audit, citations.va_health],
        },
        {
          actor: "Corporations",
          action: "Community-care vendors bill aggressively with weak audit trails.",
          effect: "Public dollars leak; veterans still wait.",
          sources: [citations.va_community_care_audit, citations.gao_improper_payments],
        },
      ],
    },
    bottomLine:
      "Service was not optional. Timely care should not be either.",
    topics: ["Veterans", "Healthcare"],
    severity: 8,
  },
  {
    id: "SCN-LGBTQ-013",
    title: "Taylor loses gender-affirming care mid-treatment",
    persona: {
      who: "Trans young adult on Medicaid",
      location: "Texas",
      situation:
        "State bans stack with federal gender-ideology orders and TRICARE/military rollbacks that set a national chill.",
    },
    getsY: "Interrupted care, mental-health crisis risk, and clinic closures.",
    shouldGetZ:
      "Federal civil-rights protection for LGBTQ healthcare access and an end to political medicine (civil-rights + FIX-MH-001 framing).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Executive order recognizes only two sexes and strips gender-identity protections.",
          effect: "Agencies rewrite program rules that clinics rely on.",
          linkedEventId: "EVT-2025-0120-035",
          sources: [citations.gender_ideology_eo, citations.dei_termination_eo],
        },
        {
          actor: "State gov",
          action: "Hundreds of bills attack LGBTQ healthcare and schools.",
          effect: "Providers exit; patients travel or go without.",
          sources: [acluLgbtq, citations.guttmacher_repro],
        },
        {
          actor: "Trump admin",
          action: "Pentagon restricts gender-affirming care for service members.",
          effect: "Federal health systems model exclusion.",
          linkedEventId: "EVT-2025-0525-076",
          sources: [citations.pentagon_trans_care_rollback, citations.defense_dei_rollback],
        },
        {
          actor: "Propaganda",
          action: "Grooming and sports panic drown clinical guidelines.",
          effect: "Evidence-based care is recoded as ideology.",
          sources: [acluLgbtq, citations.nimh_mental_health],
        },
        {
          actor: "Congress",
          action: "National nondiscrimination healthcare guarantees stall.",
          effect: "Zip code decides whether medicine is legal.",
          sources: [acluLgbtq, citations.ed_dept_titleix],
        },
      ],
    },
    bottomLine:
      "Taylor's chart did not change. The politics around it did.",
    topics: ["LGBTQ", "Healthcare", "Civil Rights"],
    severity: 9,
  },
  {
    id: "SCN-TEACHER-014",
    title: "Ms. Alvarez works a second job to stay in the classroom",
    persona: {
      who: "Public middle-school teacher",
      location: "Las Vegas, Nevada",
      situation:
        "Real wages lag housing. Education Department capacity shrinks. Student supports vanish while culture-war mandates grow.",
    },
    getsY: "Burnout, larger classes, and exits to private tutoring.",
    shouldGetZ:
      "Fully funded public education, living wages, and College for All pathways (FIX-ED-001, FIX-WAGE-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Education Department restructuring and Title IX culture-war prioritization.",
          effect: "Federal energy leaves learning supports for political sports fights.",
          linkedEventId: "EVT-2025-0630-084",
          linkedFixId: "FIX-ED-001",
          sources: [citations.ed_restructuring, citations.ed_title_ix_sports_rule],
        },
        {
          actor: "State gov",
          action: "Curriculum gag bills and voucher diversions drain public classrooms.",
          effect: "Teachers buy supplies and lose prep time to compliance.",
          sources: [citations.policy_education, citations.cost_inaction_education],
        },
        {
          actor: "Congress",
          action: "National teacher pay and facilities investments stall.",
          effect: "Local property taxes remain destiny.",
          linkedFixId: "FIX-ED-001",
          sources: [citations.policy_education, poverty],
        },
        {
          actor: "Propaganda",
          action: "Teachers are cast as enemies in culture-war media.",
          effect: "Respect collapses; recruitment collapses with it.",
          sources: [citations.cost_inaction_education, citations.ed_dept_titleix],
        },
        {
          actor: "Budget priorities",
          action: "Tax cuts for capital outcompete classroom operating budgets.",
          effect: "Second jobs become the benefits package.",
          linkedFixId: "FIX-TAX-001",
          sources: [citations.cost_inaction_tax, citations.treasury_tax],
        },
      ],
    },
    bottomLine:
      "If the job requires a side hustle, the public is freeloading on teachers.",
    topics: ["Education", "Labor", "Economy"],
    severity: 7,
  },
  {
    id: "SCN-NURSING-HOME-015",
    title: "Rosa's mother sits on a Medicaid nursing-home waitlist",
    persona: {
      who: "Adult daughter caregiver",
      location: "Milwaukee, Wisconsin",
      situation:
        "Mom needs skilled nursing. Home-care waivers are capped. Rosa leaves work to provide unpaid care.",
    },
    getsY: "Impoverishment spend-down, caregiver burnout, and delayed placement.",
    shouldGetZ:
      "Medicare for All with integrated long-term care and disability home-care guarantees (FIX-HC-001, FIX-DIS-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Congress",
          action: "Long-term care remains means-tested and underfunded.",
          effect: "Families must spend down into poverty to qualify.",
          linkedFixId: "FIX-HC-001",
          sources: [citations.policy_healthcare, citations.cbo_medicare],
        },
        {
          actor: "State gov",
          action: "HCBS waiver slots and Medicaid rules ration home care.",
          effect: "Institutional placement becomes the path of least resistance.",
          linkedFixId: "FIX-DIS-001",
          sources: [citations.policy_disability, citations.cms_medicaid_work_rules],
        },
        {
          actor: "Corporations",
          action: "For-profit nursing chains extract while staffing ratios suffer.",
          effect: "Quality declines where need is highest.",
          sources: [citations.cost_inaction_healthcare, citations.oecd_health],
        },
        {
          actor: "Propaganda",
          action: "Aging is framed as a private family duty, never a social insurance gap.",
          effect: "Daughters become the unfunded safety net.",
          sources: [citations.policy_disability, citations.dol_fmla],
        },
        {
          actor: "Trump admin",
          action: "Medicaid churn policies increase coverage instability for elders and caregivers.",
          effect: "Paperwork crises interrupt care continuity.",
          linkedEventId: "EVT-2025-0528-077",
          sources: [citations.cms_medicaid_work_rules, citations.gao_healthcare],
        },
      ],
    },
    bottomLine:
      "Rosa is not a care plan. She is what happens when the country refuses one.",
    topics: ["Elders", "Healthcare", "Disability"],
    severity: 8,
  },
  {
    id: "SCN-OVERTIME-016",
    title: "Derek works 50 hours and still gets a flat salary",
    persona: {
      who: "Assistant store manager",
      location: "Orlando, Florida",
      situation:
        "Overtime expansion is halted. Derek's salary sits just above the old threshold. Nights and weekends are free labor.",
    },
    getsY: "Stolen evenings, skipped kids' games, and no time-and-a-half.",
    shouldGetZ:
      "Restored overtime thresholds and a living wage floor (FIX-WAGE-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Labor Department halts Biden-era overtime expansion.",
          effect: "Millions stay exempt from time-and-a-half.",
          linkedEventId: "EVT-2025-0305-053",
          linkedFixId: "FIX-WAGE-001",
          sources: [citations.dol_overtime_rollback, citations.dol_overtime],
        },
        {
          actor: "Corporations",
          action: "Title inflation turns hourly work into salary without power.",
          effect: "Manager becomes a euphemism for unpaid overtime.",
          sources: [citations.epi_minimum_wage, citations.bls_wages],
        },
        {
          actor: "Congress",
          action: "Statutory overtime and wage bills stall.",
          effect: "Rulemaking swings become the whole ballgame.",
          linkedFixId: "FIX-WAGE-001",
          sources: [citations.epi_minimum_wage, citations.dol_overtime],
        },
        {
          actor: "Propaganda",
          action: "Overtime rules are sold as job killers.",
          effect: "Workers internalize gratitude for exploitation.",
          sources: [citations.epi_minimum_wage, citations.cost_inaction_labor],
        },
      ],
    },
    bottomLine:
      "If the store needs 50 hours, it can pay for 50 hours.",
    topics: ["Labor", "Economy"],
    severity: 7,
  },
  {
    id: "SCN-SNAP-017",
    title: "Andre loses SNAP in a high-unemployment county",
    persona: {
      who: "Laid-off factory worker",
      location: "Youngstown area, Ohio",
      situation:
        "Expanded SNAP work requirements and shortened waivers hit while local jobs are scarce.",
    },
    getsY: "Empty fridge weeks and ER visits for conditions food insecurity worsens.",
    shouldGetZ:
      "Nutrition assistance tied to reality, plus a jobs guarantee (FIX-ECO-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "USDA expands SNAP work requirements and shortens time-limit waivers.",
          effect: "Hunger policy becomes a paperwork trap.",
          linkedEventId: "EVT-2025-0515-074",
          sources: [citations.snap_work_requirements, citations.heritage_mandate],
        },
        {
          actor: "Propaganda",
          action: "Welfare-queen myths recycle across decades.",
          effect: "Voters cheer cuts that hit their neighbors first.",
          sources: [citations.snap_work_requirements, poverty],
        },
        {
          actor: "Congress",
          action: "Jobs-guarantee and anti-hunger expansions fail.",
          effect: "Punishment substitutes for employment policy.",
          linkedFixId: "FIX-ECO-001",
          sources: [citations.policy_economy, poverty],
        },
        {
          actor: "Corporations",
          action: "Plant closures extract value and leave counties without demand.",
          effect: "Work requirements meet a missing labor market.",
          sources: [citations.bls_employment_sit, citations.cost_inaction_labor],
        },
        {
          actor: "Budget priorities",
          action: "Tax cuts and enforcement outrank food security.",
          effect: "The ledger chooses scarcity for the already scarce.",
          sources: [citations.cost_inaction_tax, citations.snap_work_requirements],
        },
      ],
    },
    bottomLine:
      "You cannot work-requirement a job that left town.",
    topics: ["Economy", "Healthcare", "Rural"],
    severity: 8,
  },
  {
    id: "SCN-FAIR-HOUSING-018",
    title: "The Carters get steered away from a white neighborhood",
    persona: {
      who: "Black couple seeking a starter home",
      location: "St. Louis metro, Missouri",
      situation:
        "A realtor shows them a different zip code. HUD fair-housing investigations are paused.",
    },
    getsY: "Higher prices, worse schools, and quieter wealth building.",
    shouldGetZ:
      "Aggressive Fair Housing Act enforcement and social housing that breaks segregation (FIX-HOUS-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "HUD pauses fair-housing investigations and AFFH implementation.",
          effect: "Steering and appraisal bias face fewer federal challenges.",
          linkedEventId: "EVT-2025-0415-067",
          linkedFixId: "FIX-HOUS-001",
          sources: [citations.hud_fair_housing_pause, citations.dei_termination_eo],
        },
        {
          actor: "Corporations",
          action: "Brokerage incentives and appraisal models reproduce red lines.",
          effect: "Discrimination looks like market preference.",
          sources: [citations.policy_housing, censusHousing],
        },
        {
          actor: "Propaganda",
          action: "DEI panic reframes civil-rights enforcement as bias against whites.",
          effect: "Equal housing access becomes a culture-war casualty.",
          sources: [citations.dei_termination_eo, citations.brennan_voting],
        },
        {
          actor: "Congress",
          action: "Housing voucher and anti-discrimination funding lags need.",
          effect: "Local patterns harden.",
          sources: [citations.hr_housing_voucher, citations.cost_inaction_housing],
        },
      ],
    },
    bottomLine:
      "The Carters were shopping for a house. The market was shopping for a racial order.",
    topics: ["Housing", "Democracy"],
    severity: 8,
  },
  {
    id: "SCN-REPRO-019",
    title: "Priya drives six hours for abortion care after a miscarriage complication",
    persona: {
      who: "Software engineer, married",
      location: "Oklahoma",
      situation:
        "State bans and federal culture-war pressure leave her OB practice refusing gray-area care.",
    },
    getsY: "Delayed care, infection risk, and medical trauma.",
    shouldGetZ:
      "Reproductive Freedom Restoration and nationwide access (FIX-RR-001).",
    whyNotZ: {
      steps: [
        {
          actor: "State gov",
          action: "Near-total bans and threat statutes chill clinicians.",
          effect: "Even miscarriage management becomes a legal gamble.",
          linkedFixId: "FIX-RR-001",
          sources: [citations.guttmacher_repro, citations.cdc_firearms],
        },
        {
          actor: "Courts",
          action: "Dobbs returns abortion to state laboratories of cruelty.",
          effect: "Zip code replaces medical standard of care.",
          sources: [citations.guttmacher_repro, citations.policy_healthcare],
        },
        {
          actor: "Congress",
          action: "Federal statutory right to reproductive care fails to pass.",
          effect: "Patchwork remains the national reality.",
          linkedFixId: "FIX-RR-001",
          sources: [citations.guttmacher_repro, citations.hr_medicare_for_all],
        },
        {
          actor: "Propaganda",
          action: "Women's health emergencies are reframed as elective ideology.",
          effect: "Empathy for bleeding patients becomes partisan.",
          sources: [citations.guttmacher_repro, citations.cdc_firearms],
        },
        {
          actor: "Trump admin",
          action: "Federal agencies amplify gender and reproductive culture-war priorities.",
          effect: "Chilling effects travel beyond red-state borders.",
          sources: [citations.gender_ideology_eo, citations.guttmacher_repro],
        },
      ],
    },
    bottomLine:
      "Priya needed medicine. She got a map.",
    topics: ["Healthcare", "Democracy"],
    severity: 10,
  },
  {
    id: "SCN-DISABILITY-020",
    title: "Chris ages out of school supports with no home-care hours",
    persona: {
      who: "Young adult with developmental disability and aging parents",
      location: "Portland, Oregon",
      situation:
        "HCBS waitlists stretch years. Institutional placement is the only funded path.",
    },
    getsY: "Family crisis, institutionalization risk, and lost independence.",
    shouldGetZ:
      "Disability Freedom and home-care guarantee (FIX-DIS-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Congress",
          action: "Home- and community-based services stay optional and underfunded.",
          effect: "Olmstead promises collide with budget rationing.",
          linkedFixId: "FIX-DIS-001",
          sources: [citations.policy_disability, citations.nimh_mental_health],
        },
        {
          actor: "State gov",
          action: "Waiver caps create multi-year queues.",
          effect: "Parents become unpaid lifelong staff.",
          sources: [citations.policy_disability, citations.cms_medicaid_work_rules],
        },
        {
          actor: "Budget priorities",
          action: "Institutional spending outcompetes community supports.",
          effect: "The expensive wrong option wins.",
          sources: [citations.policy_disability, citations.cost_inaction_healthcare],
        },
        {
          actor: "Propaganda",
          action: "Disability care is framed as special interest, not civil rights.",
          effect: "Voters never see the waitlist math.",
          sources: [citations.policy_disability, poverty],
        },
      ],
    },
    bottomLine:
      "Independence is a funding decision wearing a clinical mask.",
    topics: ["Healthcare", "Elders"],
    severity: 8,
  },
  {
    id: "SCN-TRANSIT-021",
    title: "Keisha loses a job offer because the bus does not run after 8",
    persona: {
      who: "Retail worker without a car",
      location: "Birmingham, Alabama",
      situation:
        "Night shift pays more. Last bus leaves before close. Rideshares eat the raise.",
    },
    getsY: "Stuck in lower-pay daytime work and longer poverty spells.",
    shouldGetZ:
      "Infrastructure and public transit buildout that matches shift work (FIX-INF-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Congress",
          action: "Transit capital and operating funds lag sprawl and need.",
          effect: "Agencies cut evening service first.",
          linkedFixId: "FIX-INF-001",
          sources: [citations.dot_transit, citations.fcc_broadband],
        },
        {
          actor: "State gov",
          action: "Highway-first budgets starve buses.",
          effect: "Car ownership becomes a job requirement.",
          sources: [citations.dot_transit, poverty],
        },
        {
          actor: "Propaganda",
          action: "Transit riders are stereotyped instead of treated as workforce infrastructure.",
          effect: "Voters underinvest in the network that moves labor.",
          sources: [citations.dot_transit, citations.bls_employment_sit],
        },
        {
          actor: "Corporations",
          action: "Employers demand flexible hours without flexible transit.",
          effect: "Workers absorb the logistics failure.",
          sources: [citations.dot_transit, citations.epi_minimum_wage],
        },
      ],
    },
    bottomLine:
      "The job existed. The bus schedule canceled it.",
    topics: ["Economy", "Rural"],
    severity: 6,
  },
  {
    id: "SCN-DARK-MONEY-022",
    title: "A school-board race is drowned in anonymous ads",
    persona: {
      who: "Parent volunteer candidate",
      location: "Suburban Michigan",
      situation:
        "Dark-money PACs carpet-bomb the district with grooming smears. Small-dollar door-knocking cannot match.",
    },
    getsY: "Toxic local politics and policy captured by national culture war.",
    shouldGetZ:
      "Dark money bans and public financing (FIX-CORR-001, SAFE transparency).",
    whyNotZ: {
      steps: [
        {
          actor: "Courts",
          action: "Citizens United and progeny unlock unlimited independent spending.",
          effect: "Anonymous money floods even school boards.",
          linkedFixId: "FIX-CORR-001",
          sources: [citations.citizens_united_scotus, citations.opensecrets_dark_money],
        },
        {
          actor: "Congress",
          action: "Disclosure and public-finance bills stall.",
          effect: "Voters cannot follow the money.",
          linkedFixId: "FIX-CORR-001",
          sources: [citations.fec_campaign_data, citations.safeguard_transparency],
        },
        {
          actor: "Propaganda",
          action: "National talk-radio frames local curricula as existential war.",
          effect: "Neighbor turns on neighbor with out-of-state scripts.",
          sources: [citations.opensecrets_dark_money, citations.brennan_voting],
        },
        {
          actor: "Corporations",
          action: "Trade associations fund the flood while staying off the mailer.",
          effect: "Accountability dissolves into LLCs.",
          sources: [citations.opensecrets_dark_money, citations.irs_dark_money_rule],
        },
      ],
    },
    bottomLine:
      "Local democracy cannot survive national secrecy.",
    topics: ["Democracy", "Education"],
    severity: 7,
  },
  {
    id: "SCN-CLIMATE-JOBS-023",
    title: "A coal mechanic wants a clean-energy job that does not exist yet",
    persona: {
      who: "Displaced energy worker",
      location: "West Virginia",
      situation:
        "IRA funding pauses and climate retreat leave transition promises hollow. He has skills and a mortgage.",
    },
    getsY: "Underemployment, out-migration pressure, and political resentment.",
    shouldGetZ:
      "Climate jobs just-transition compact with wage floors (FIX-CJ-001, FIX-ENV-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "IRA funding pauses and Paris withdrawal.",
          effect: "Clean-build pipelines stall in the regions that need them most.",
          sources: [citations.ira_funding_pause, citations.paris_withdrawal],
        },
        {
          actor: "Congress",
          action: "Just-transition wage and placement guarantees never lock in.",
          effect: "Workers hear slogans without contracts.",
          linkedFixId: "FIX-CJ-001",
          sources: [citations.policy_environment, citations.cost_inaction_climate],
        },
        {
          actor: "Corporations",
          action: "Fossil employers extract final profits without funding the next career.",
          effect: "Communities inherit stranded workers.",
          sources: [citations.cost_inaction_climate, citations.bls_employment_sit],
        },
        {
          actor: "Propaganda",
          action: "Climate policy is sold as coastal elitism.",
          effect: "The people who need the jobs are told to hate the jobs.",
          sources: [citations.ipcc_climate, citations.cost_inaction_climate],
        },
      ],
    },
    bottomLine:
      "Transition without a paycheck is abandonment with branding.",
    topics: ["Climate", "Labor", "Rural"],
    severity: 8,
  },
  {
    id: "SCN-MENTAL-HEALTH-024",
    title: "Sofia's insurer calls her depression therapy not medically necessary",
    persona: {
      who: "College student on a parent plan",
      location: "Denver, Colorado",
      situation:
        "Parity rules exist on paper. Networks ghost her. CDC and public-health capacity pauses reduce community options.",
    },
    getsY: "Crisis ER visits instead of weekly therapy.",
    shouldGetZ:
      "Mental health parity with community care capacity (FIX-MH-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Corporations",
          action: "Insurers narrow networks and deny ongoing therapy.",
          effect: "Parity becomes a slogan at the claim desk.",
          linkedFixId: "FIX-MH-001",
          sources: [citations.nimh_mental_health, citations.cost_inaction_healthcare],
        },
        {
          actor: "Trump admin",
          action: "Public-health grant pauses shrink community clinics.",
          effect: "Safety-net therapy slots disappear.",
          sources: [citations.cdc_grant_pause, citations.nimh_mental_health],
        },
        {
          actor: "Congress",
          action: "Enforcement funding for parity lags.",
          effect: "Rules without cops.",
          linkedFixId: "FIX-MH-001",
          sources: [citations.nimh_mental_health, citations.policy_healthcare],
        },
        {
          actor: "Propaganda",
          action: "Mental illness is moralized or mocked until a crisis hits headlines.",
          effect: "Prevention never wins the news cycle.",
          sources: [citations.nimh_mental_health, citations.mental_illness_eo_2026],
        },
      ],
    },
    bottomLine:
      "Sofia did not fail treatment. Coverage failed Sofia.",
    topics: ["Healthcare"],
    severity: 7,
  },
  {
    id: "SCN-TAX-SCHOOLS-025",
    title: "District 4 cancels the art teacher to patch the budget hole",
    persona: {
      who: "Elementary PTA president",
      location: "Rural Pennsylvania",
      situation:
        "Property-tax base is thin. Federal tax expenditures for wealth outrun Title I reality.",
    },
    getsY: "Larger classes, lost arts, and a longer bus ride after consolidation talk.",
    shouldGetZ:
      "Tax fairness funding public goods and education investment (FIX-TAX-001, FIX-ED-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Congress",
          action: "Wealth and capital loopholes stay open.",
          effect: "School budgets compete with billionaire tax preferences.",
          linkedFixId: "FIX-TAX-001",
          sources: [citations.treasury_tax, citations.cost_inaction_tax, citations.irs_soi],
        },
        {
          actor: "State gov",
          action: "Aid formulas lock in inequality across districts.",
          effect: "Zip code becomes curriculum.",
          sources: [citations.policy_education, poverty],
        },
        {
          actor: "Propaganda",
          action: "Any tax on capital is branded as punishment of success.",
          effect: "Art class becomes the sacrifice.",
          sources: [citations.cost_inaction_tax, citations.treasury_tax],
        },
        {
          actor: "Budget priorities",
          action: "Enforcement and corporate subsidies outrank school operating aid.",
          effect: "Kids inherit the residual.",
          sources: [citations.cost_inaction_tax, citations.ice_expansion_eo],
        },
      ],
    },
    bottomLine:
      "We did not run out of money. We ran out of willingness to tax the people with it.",
    topics: ["Education", "Economy", "Rural"],
    severity: 7,
  },
  {
    id: "SCN-SS-SCARE-026",
    title: "Helen believes Social Security will vanish before she retires",
    persona: {
      who: "62-year-old bookkeeper",
      location: "Tucson, Arizona",
      situation:
        "Trustees report shows a manageable shortfall. Cable panels sell privatization panic. SSA staffing cuts slow her questions.",
    },
    getsY: "Anxiety-driven early claiming and a permanently smaller benefit.",
    shouldGetZ:
      "Solvency compact that expands revenue without cutting benefits (FIX-SS-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Propaganda",
          action: "Going broke narratives ignore the trustees' policy choices.",
          effect: "Workers accept cuts as fate.",
          linkedFixId: "FIX-SS-001",
          sources: [citations.ssa_trustees, citations.cost_inaction_ss],
        },
        {
          actor: "Congress",
          action: "Payroll-base expansion stalls while scare talk thrives.",
          effect: "The easy fix is treated as radioactive.",
          linkedFixId: "FIX-SS-001",
          sources: [citations.ssa_trustees, citations.cost_inaction_ss],
        },
        {
          actor: "Trump admin",
          action: "SSA workforce cuts degrade customer service.",
          effect: "Confusion becomes the user experience.",
          sources: [citations.ssa_workforce_cuts, citations.probationary_terminations],
        },
        {
          actor: "Corporations",
          action: "Wall Street products wait in the wings as privatization solutions.",
          effect: "Fees replace guaranteed insurance.",
          sources: [citations.cost_inaction_ss, citations.ssa_trustees],
        },
      ],
    },
    bottomLine:
      "Social Security is not magic. It is math Congress refuses to finish.",
    topics: ["Elders", "Economy"],
    severity: 7,
  },
  {
    id: "SCN-BROADBAND-027",
    title: "A high-school junior uploads homework from the grocery parking lot",
    persona: {
      who: "Rural student and farm family",
      location: "Eastern Montana",
      situation:
        "No affordable fiber. Satellite is capped. Telehealth and job apps fail at home.",
    },
    getsY: "Homework gaps, missed telehealth, and fewer remote-work options for parents.",
    shouldGetZ:
      "Rural broadband as infrastructure with public options (FIX-RUR-001, FIX-INF-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Corporations",
          action: "ISPs skip low-density census blocks.",
          effect: "Markets declare rural kids unprofitable.",
          linkedFixId: "FIX-RUR-001",
          sources: [citations.fcc_broadband, citations.usda_rural],
        },
        {
          actor: "Congress",
          action: "Buildout funds face delay, clawback, and capture risks.",
          effect: "Maps look covered while kitchens stay dark.",
          sources: [citations.fcc_broadband, citations.usda_rural],
        },
        {
          actor: "Propaganda",
          action: "Public broadband is painted as socialism.",
          effect: "Co-ops that already work get blocked.",
          sources: [citations.fcc_broadband, citations.policy_environment],
        },
        {
          actor: "Budget priorities",
          action: "Spectrum and tax policy favor incumbents over universal service.",
          effect: "Parking-lot Wi-Fi becomes education policy.",
          sources: [citations.fcc_broadband, citations.cost_inaction_tax],
        },
      ],
    },
    bottomLine:
      "Connectivity is not a luxury add-on. It is the modern school bus.",
    topics: ["Rural", "Education", "Economy"],
    severity: 6,
  },
  {
    id: "SCN-MONOPOLY-028",
    title: "One meatpacker and three grocers set the town's food prices",
    persona: {
      who: "Ranch family and town shoppers",
      location: "Nebraska",
      situation:
        "Cattle prices stay weak for producers while retail beef climbs. FTC enforcement pauses.",
    },
    getsY: "Squeeze on both ends of the supply chain.",
    shouldGetZ:
      "Antitrust revival and monopoly breakups (FIX-AT-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Corporations",
          action: "Consolidation leaves a handful of buyers and sellers.",
          effect: "Farmers and families lose bargaining power together.",
          linkedFixId: "FIX-AT-001",
          sources: [citations.ftc_antitrust, citations.doj_antitrust],
        },
        {
          actor: "Trump admin",
          action: "FTC consumer-protection and enforcement capacity is cut.",
          effect: "Watchdogs sleep through mergers.",
          sources: [citations.ftc_enforcement_pause, citations.ftc_consumer_protection_cuts],
        },
        {
          actor: "Congress",
          action: "Stronger antitrust statutes and breakup authorities stall.",
          effect: "Sherman Act nostalgia without modern tools.",
          linkedFixId: "FIX-AT-001",
          sources: [citations.ftc_antitrust, citations.doj_antitrust],
        },
        {
          actor: "Propaganda",
          action: "Inflation is blamed only on wages or immigrants.",
          effect: "Market power escapes the story.",
          sources: [cpi, citations.ftc_antitrust],
        },
      ],
    },
    bottomLine:
      "If prices rise when cattle do not, look for a middleman with a fortress.",
    topics: ["Economy", "Rural"],
    severity: 7,
  },
  {
    id: "SCN-ICE-RAID-029",
    title: "A meatpacking shift vanishes after an ICE raid",
    persona: {
      who: "Immigrant line workers and U.S.-citizen coworkers",
      location: "Iowa",
      situation:
        "Worksites become enforcement stages. Citizen kids wait at school. Production pauses, then wages get a race-to-bottom reset.",
    },
    getsY: "Trauma, lost wages, and a chilled workforce that cannot organize.",
    shouldGetZ:
      "Labor standards enforcement against employers, not spectacle raids (FIX-IMM-001, FIX-ECO-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "ICE detention and interior enforcement expand.",
          effect: "Workplaces become theaters of fear.",
          linkedEventId: "EVT-2025-0614-020",
          linkedFixId: "FIX-IMM-001",
          sources: [citations.ice_expansion_eo, citations.aclu_immigration],
        },
        {
          actor: "Corporations",
          action: "Employers underpay and overwork until enforcement risk appears.",
          effect: "Workers pay for management's labor model.",
          sources: [citations.epi_unions, citations.bls_wages],
        },
        {
          actor: "Propaganda",
          action: "Raids are sold as protecting American jobs.",
          effect: "Citizen coworkers learn fear is the new HR policy.",
          sources: [citations.aclu_immigration, citations.cost_inaction_immigration],
        },
        {
          actor: "Congress",
          action: "Employer sanctions theater without legalization or labor power.",
          effect: "The underground stays underground.",
          linkedFixId: "FIX-IMM-001",
          sources: [citations.policy_immigration, citations.hr_pro_act],
        },
      ],
    },
    bottomLine:
      "A raid is not a labor standard. It is a press conference with zip ties.",
    topics: ["Immigration", "Labor"],
    severity: 9,
  },
  {
    id: "SCN-TITLEIX-030",
    title: "A queer student loses club funding after Title IX politics hit campus",
    persona: {
      who: "Public university sophomore",
      location: "Florida",
      situation:
        "Federal gender orders and sports rules chill administrators. Student orgs lose space overnight.",
    },
    getsY: "Isolation, higher dropout risk, and silenced peer support.",
    shouldGetZ:
      "Civil-rights consistent Title IX enforcement that protects students, not culture-war scoreboards.",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Gender ideology EO and Title IX sports exclusions advance.",
          effect: "Campuses preemptively erase inclusive supports.",
          linkedEventId: "EVT-2025-0630-084",
          sources: [citations.ed_title_ix_sports_rule, citations.gender_ideology_eo],
        },
        {
          actor: "State gov",
          action: "Copycat campus speech and DEI bans.",
          effect: "Student life becomes a compliance minefield.",
          sources: [acluLgbtq, citations.ed_dept_titleix],
        },
        {
          actor: "Propaganda",
          action: "Sports panic becomes the wedge for broader erasure.",
          effect: "A tiny athlete debate rewrites an entire campus climate.",
          sources: [acluLgbtq, citations.college_sports_eo_2026],
        },
        {
          actor: "Congress",
          action: "Clear statutory LGBTQ student protections stall.",
          effect: "Agencies and governors fill the vacuum.",
          sources: [acluLgbtq, citations.ed_dept_titleix],
        },
      ],
    },
    bottomLine:
      "Belonging should not depend on which party holds OCR.",
    topics: ["LGBTQ", "Education"],
    severity: 7,
  },
  {
    id: "SCN-MA-BILLS-031",
    title: "Grandpa's Medicare Advantage denies the rehab his surgeon ordered",
    persona: {
      who: "Retired machinist and his daughter",
      location: "Pittsburgh, Pennsylvania",
      situation:
        "After hip surgery, prior auth loops delay skilled nursing. Traditional Medicare would have been simpler.",
    },
    getsY: "Readmission risk and family caregiving overload.",
    shouldGetZ:
      "Medicare for All / traditional Medicare strength and an end to Advantage overpayments (FIX-HC-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Corporations",
          action: "Advantage plans profit from denial and delay tactics.",
          effect: "Clinically indicated rehab becomes a customer-service maze.",
          linkedFixId: "FIX-HC-001",
          sources: [citations.cbo_medicare, citations.cost_inaction_healthcare],
        },
        {
          actor: "Congress",
          action: "Overpayment reform and prior-auth limits stall.",
          effect: "Public dollars subsidize private gatekeeping.",
          sources: [citations.cbo_medicare, citations.hr_medicare_for_all],
        },
        {
          actor: "Propaganda",
          action: "Choice branding hides narrower networks.",
          effect: "Seniors enroll in a product they cannot fight when sick.",
          sources: [citations.cbo_medicare, citations.oecd_health],
        },
        {
          actor: "Trump admin",
          action: "Broader coverage expansions freeze while privatization narratives grow.",
          effect: "The path of least resistance is more managed care, not more care.",
          sources: [citations.aca_premium, citations.cbo_medicare],
        },
      ],
    },
    bottomLine:
      "If a TV ad can enroll you faster than a nurse can approve rehab, the incentives are the disease.",
    topics: ["Elders", "Healthcare"],
    severity: 8,
  },
  {
    id: "SCN-HEAT-032",
    title: "Farmworkers pick in 105° heat with no federal heat standard enforced",
    persona: {
      who: "Seasonal agricultural crew",
      location: "Central Valley, California",
      situation:
        "Climate heat records fall. OSHA capacity and labor protections weaken. Piece rates punish water breaks.",
    },
    getsY: "Heat illness, ER trips, and silent deaths in the fields.",
    shouldGetZ:
      "Climate mobilization plus enforceable heat standards and labor power (FIX-ENV-001, FIX-ECO-001).",
    whyNotZ: {
      steps: [
        {
          actor: "Trump admin",
          action: "Climate retreat and OSHA delays on worker protections.",
          effect: "Heat becomes an accepted workplace hazard.",
          sources: [citations.osha_silica_delay, citations.paris_withdrawal, citations.ipcc_climate],
        },
        {
          actor: "Corporations",
          action: "Growers and contractors treat breaks as theft from yield.",
          effect: "Bodies become the cooling system.",
          sources: [citations.epi_unions, citations.bls_wages],
        },
        {
          actor: "Congress",
          action: "National heat-standard legislation stalls.",
          effect: "Patchwork state rules leave interstate crews exposed.",
          linkedFixId: "FIX-ENV-001",
          sources: [citations.ipcc_climate, citations.cost_inaction_climate],
        },
        {
          actor: "Immigration",
          action: "Status fear blocks complaints.",
          effect: "The most exposed workers are the least able to report.",
          sources: [citations.aclu_immigration, citations.ice_expansion_eo],
        },
        {
          actor: "Propaganda",
          action: "Heat deaths are weatherized, not politicized.",
          effect: "No villain, no hearing, no standard.",
          sources: [citations.ipcc_climate, citations.fema_staffing_cuts],
        },
      ],
    },
    bottomLine:
      "The forecast is public. The lack of a heat rule is a choice.",
    topics: ["Climate", "Labor", "Immigration"],
    severity: 9,
  },
];

export function getScenarioStats() {
  return {
    total: impactScenarios.length,
    avgSeverity: Number(
      (
        impactScenarios.reduce((sum, s) => sum + s.severity, 0) /
        Math.max(impactScenarios.length, 1)
      ).toFixed(1)
    ),
    highSeverity: impactScenarios.filter((s) => s.severity >= 8).length,
    topics: scenarioTopics.filter((t) => t !== "All"),
  };
}
