/**
 * Pass 38 - expand Blueprint FIX policies to 24 pillars with evidence fields.
 * Run: node scripts/pass38/generate-blueprint.mjs
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../../lib/data/policies.ts");

function assertClean(obj, path = "") {
  for (const [k, v] of Object.entries(obj)) {
    const p = path ? `${path}.${k}` : k;
    if (typeof v === "string") {
      if (v.includes("\u2014") || v.includes("\u2013")) {
        throw new Error(`Em/en dash in ${p}`);
      }
      if (/zinn/i.test(v)) throw new Error(`Zinn reference in ${p}`);
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === "string") {
          if (item.includes("\u2014") || item.includes("\u2013")) {
            throw new Error(`Em/en dash in ${p}[${i}]`);
          }
        } else if (item && typeof item === "object") assertClean(item, `${p}[${i}]`);
      });
    } else if (v && typeof v === "object") {
      assertClean(v, p);
    }
  }
}

function cite(keys) {
  return keys.map((k) => `citations.${k}`);
}

const policies = [
  {
    id: "FIX-HC-001",
    category: "Healthcare",
    title: "Medicare for All with Integrated Long-Term Care",
    problem:
      "21 million Americans lost affordable ACA coverage after subsidy expiration. Medicare Advantage overpayments drain $83B annually while 27 million remain uninsured and medical debt drives 500,000 bankruptcies per year.",
    proposedFix:
      "Establish a single-payer national health insurance program covering all residents with no premiums, deductibles, or copays. Phase out private Medicare Advantage overpayments, negotiate drug prices centrally, and integrate long-term care into the benefit package.",
    whyItWorks:
      "Single-payer systems cut billing overhead, set prices nationally, and guarantee care before illness becomes an emergency. Administrative waste and uncompensated care shrink when everyone is covered under one payer.",
    whyPeopleCallItExtreme:
      "Opponents label universal coverage socialism and claim it means a government takeover of doctors, even though the proposal pays private and nonprofit providers under public insurance rules most seniors already use.",
    theGaslight:
      "Scare ads say wait times and rationing are inevitable. Peer nations with universal coverage often have longer life expectancy and lower per-capita spending than the U.S., while Americans already ration care by ability to pay.",
    alreadyWorksWhere:
      "Canada, the United Kingdom, Taiwan, and every other OECD democracy guarantee coverage. U.S. Medicare already proves public insurance can pay private hospitals for tens of millions of people.",
    economicImpact:
      "RAND analysis projects $450B in annual savings through administrative simplification and bulk purchasing. Average household healthcare costs drop $35,000/year. 2.1 million jobs transition with 5-year retraining guarantees.",
    costOfInaction:
      "Without reform, medical debt will keep driving roughly two-thirds of personal bankruptcies while 27 million remain uninsured and Medicare Advantage overpayments drain $83B annually from public coffers. GAO healthcare audits and CBO Medicare baselines show fragmentation and overpayments persist without structural change.",
    costOfInactionCitations: ["cost_inaction_healthcare", "gao_healthcare", "cbo_medicare"],
    safeguards: [
      "Constitutional amendment protecting universal healthcare as a right",
      "Independent Payment Advisory Board with public nomination process",
      "5-year transition fund for displaced insurance industry workers",
      "Annual public audit of all pharmaceutical pricing negotiations",
    ],
    citations: ["policy_healthcare", "cbo_medicare", "aca_premium", "hr_medicare_for_all", "oecd_health"],
    billReferences: [
      {
        number: "H.R. 3421",
        title: "Medicare for All Act of 2025 (Jayapal)",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/3421",
        status: "Introduced - referred to Energy & Commerce",
      },
      {
        number: "S. 1129",
        title: "Medicare for All Act of 2025 (Sanders)",
        url: "https://www.congress.gov/bill/119th-congress/senate-bill/1129",
        status: "Introduced - referred to Finance",
      },
    ],
    implementationTimeline: [
      {
        phase: "Year 1 - Coverage expansion",
        timeframe: "Months 1-12",
        description:
          "Lower Medicare eligibility to 55, cap out-of-pocket costs, and launch public option buy-in while building claims infrastructure.",
      },
      {
        phase: "Year 2-3 - Transition",
        timeframe: "Months 13-36",
        description:
          "Phase out employer-sponsored private plans with 5-year job guarantees for displaced insurance workers; centralize drug price negotiation.",
      },
      {
        phase: "Year 4-5 - Full single payer",
        timeframe: "Months 37-60",
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
    whyItWorks:
      "A standing public option for employment raises the private wage floor, absorbs automation shocks, and builds needed care and climate capacity. Card-check and employee status restore bargaining power that lifts pay without waiting for corporate goodwill.",
    whyPeopleCallItExtreme:
      "Critics call a jobs guarantee Soviet planning and claim gig reclassification kills flexibility, ignoring that peer countries combine flexible schedules with employee benefits and that WPA-style public employment is U.S. history, not foreign dogma.",
    theGaslight:
      "Lobbyists say workers prefer independence. Misclassification lets platforms shift payroll taxes and injury risk onto workers while investors capture the upside; independence without benefits is cost-shifting, not freedom.",
    alreadyWorksWhere:
      "Nordic active labor programs and Argentina's past Jefes plan show public employment can stabilize demand. California ABS and EU platform directives already push employee or comparable status for app workers.",
    economicImpact:
      "EPI modeling shows 15 million jobs created at peak implementation. GDP growth of 1.2% annually from increased consumer spending. Union wage premium would lift median household income 16% within a decade.",
    costOfInaction:
      "If labor power keeps eroding at current rates, gig workers remain misclassified without benefits, wage stagnation persists despite record profits, and the 17% union wage premium stays out of reach for 90% of workers. BLS union-membership series remains near historic lows without card-check and misclassification reform.",
    costOfInactionCitations: ["cost_inaction_labor", "bls_wages", "brookings_labor"],
    safeguards: [
      "Jobs Guarantee Board with labor union majority representation",
      "Automatic cost-of-living adjustments tied to regional price indices",
      "Anti-retaliation protections with triple-damages for employer violations",
      "Sunset review every 10 years with mandatory congressional reauthorization",
    ],
    citations: ["policy_economy", "bls_wages", "brookings_labor", "hr_pro_act", "epi_unions"],
    billReferences: [
      {
        number: "H.R. 1274",
        title: "Protecting the Right to Organize Act (PRO Act)",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/1274",
        status: "Introduced - referred to Education & Workforce",
      },
      {
        number: "H.R. 100",
        title: "Federal Jobs Guarantee Development Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/100",
        status: "Introduced - pilot program authorization",
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
        timeframe: "Year 1-2",
        description:
          "Pass PRO Act provisions: card-check recognition, gig worker reclassification, and triple-damage penalties for union-busting.",
      },
      {
        phase: "National scale-up",
        timeframe: "Year 3-5",
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
      "Current policies lead to 2.8C warming by 2100. EPA methane rollbacks expose 280,000 well sites to unmonitored leaks. The U.S. remains the largest historical emitter while clean energy investment lags peer nations.",
    proposedFix:
      "Declare a climate emergency triggering $10T over 10 years for renewable grid modernization, building electrification, public transit expansion, and regenerative agriculture. Reinstate and strengthen methane monitoring with criminal penalties for willful violations.",
    whyItWorks:
      "Industrial-scale public investment cuts emissions faster than voluntary corporate pledges. Grid upgrades and building electrification remove the fossil lock-in that keeps households paying for dirty power.",
    whyPeopleCallItExtreme:
      "Fossil lobbyists call a climate emergency a power grab and paint clean energy as anti-worker, even though the package funds just-transition wages and community ownership stakes.",
    theGaslight:
      "They say the U.S. is already leading and that action kills jobs. Delay locks in disaster costs that dwarf transition spending, and peer economies already create more clean-energy jobs per dollar than oil extraction.",
    alreadyWorksWhere:
      "Denmark, Germany, and California show rapid renewable buildouts with labor standards. The IRA proved industrial policy works; this Act scales it to emergency tempo with methane enforcement.",
    economicImpact:
      "Data for Progress models 20 million clean energy jobs and 70% emissions reduction below 2005 levels by 2035. $2.9T in avoided climate disaster costs by 2050. Energy costs drop 40% for households through public utility ownership.",
    costOfInaction:
      "Current rollback trajectory puts the U.S. on path for 2.8C warming by 2100, with unmonitored methane leaks from 280,000 well sites and climate damages costing hundreds of billions annually in infrastructure, health, and lost productivity. EPA rollback stacks and NOAA climate records make delay permanently costlier.",
    costOfInactionCitations: ["cost_inaction_climate", "ipcc_climate", "epa_methane_rollback"],
    safeguards: [
      "Climate Impact Office with subpoena power over fossil fuel companies",
      "Just transition fund: 5 years full salary for displaced fossil fuel workers",
      "Community ownership requirements for 30% of new renewable capacity",
      "Annual emissions budget with automatic trigger for additional measures",
    ],
    citations: ["policy_environment", "ipcc_climate", "epa_rule", "epa_methane_rollback"],
    billReferences: [
      {
        number: "H.R. 7941",
        title: "Green New Deal Resolution",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/7941",
        status: "Introduced - framework resolution",
      },
      {
        number: "S. 685",
        title: "Clean Energy for America Act",
        url: "https://www.congress.gov/bill/119th-congress/senate-bill/685",
        status: "Introduced - tax credit modernization",
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
        timeframe: "Year 1-3",
        description:
          "Reinstate EPA methane rules with criminal penalties; deploy $3T for renewable grid and transit.",
      },
      {
        phase: "Emissions budget",
        timeframe: "Year 4-10",
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
    whyItWorks:
      "Automatic registration and same-day fixes remove paperwork barriers that suppress turnout. Independent commissions cut self-dealing maps that let politicians pick voters instead of the reverse.",
    whyPeopleCallItExtreme:
      "Opponents brand AVR and rights restoration as voter fraud magnets, despite vanishingly low fraud rates and the fact that Maine, Vermont, and many democracies already let citizens with felony records vote.",
    theGaslight:
      "Integrity rhetoric targets Black and young voters while ignoring that the real integrity threat is gerrymandering and underfunded election offices. Citizenship paperwork mandates add friction without solving rare impersonation fraud.",
    alreadyWorksWhere:
      "Oregon pioneered AVR; many states already use same-day registration. Independent commissions operate in California, Michigan, and Arizona. Most peer democracies treat voting as a civic default, not an obstacle course.",
    economicImpact:
      "AVR states saw 94% registration increase among young voters. Reduced election administration costs of $1.2B annually through standardized systems. Increased civic participation correlates with 0.3% GDP growth from policy stability.",
    costOfInaction:
      "Without federal voting protections, restrictive state laws proliferate - 32 passed in 2025 alone - while 5.2 million citizens remain disenfranchised and gerrymandering locks minority rule into 28 congressional districts. Brennan Center tracking after Shelby County shows how preclearance loss enabled rapid restrictive voting changes.",
    costOfInactionCitations: ["cost_inaction_voting", "brennan_voting", "policy_voting"],
    safeguards: [
      "Constitutional amendment guaranteeing universal suffrage",
      "Federal election monitors with binding authority in non-compliant jurisdictions",
      "Proportional representation pilot programs in 5 states",
      "Mandatory public campaign financing with 6:1 small-dollar matching",
    ],
    citations: ["policy_voting", "brennan_voting", "hr_john_lewis", "save_act_crs"],
    billReferences: [
      {
        number: "H.R. 14",
        title: "John R. Lewis Voting Rights Advancement Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/14",
        status: "Introduced - referred to Judiciary",
      },
      {
        number: "H.R. 11",
        title: "Freedom to Vote Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/11",
        status: "Introduced - AVR & redistricting reforms",
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
        timeframe: "Year 1-2",
        description:
          "Automatic rights restoration for all citizens; independent redistricting commissions mandated.",
      },
      {
        phase: "Structural reform",
        timeframe: "Year 3-5",
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
    whyItWorks:
      "Early education compounds lifetime earnings and reduces remediation costs. Debt-free public higher ed expands the skilled workforce without trapping graduates in decades of repayment.",
    whyPeopleCallItExtreme:
      "Critics call free college a handout and claim debt cancellation is unfair to past borrowers, ignoring that public K-12 was once branded radical and that peer nations already fund tertiary education as infrastructure.",
    theGaslight:
      "They say degrees will be worthless if free. Quality comes from funding and standards, not tuition barriers. High tuition already rations opportunity by ZIP code and parental wealth.",
    alreadyWorksWhere:
      "Germany, Norway, and many EU states offer low or no tuition. Oklahoma and other U.S. states have expanded pre-K with documented school-readiness gains. GI Bill history shows large-scale public higher-ed investment works.",
    economicImpact:
      "NBER research links universal pre-K to 13% higher college enrollment and 8% lifetime earnings increase. Student debt cancellation would boost GDP $86B annually. Title I funding closes achievement gaps within two generations.",
    costOfInaction:
      "Families keep paying $15,000+ annually for childcare while $1.6 trillion in student debt delays homeownership; Title IX rollbacks leave 19 million students with weaker campus safety protections and achievement gaps persist across generations. Department of Education restructuring and Title IX enforcement shifts reduce the civil-rights bandwidth students rely on when states roll back protections.",
    costOfInactionCitations: ["cost_inaction_education", "policy_education", "ed_dept_titleix"],
    safeguards: [
      "Education Trust Fund insulated from annual appropriations battles",
      "Faculty and student majority on university governance boards",
      "Debt cancellation limited to public and non-profit institution loans",
      "10-year review of pre-K outcomes with mandatory program adjustments",
    ],
    citations: ["policy_education", "ed_dept_titleix", "ed_restructuring", "policy_student_debt"],
    billReferences: [
      {
        number: "H.R. 4647",
        title: "College for All Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/4647",
        status: "Introduced - tuition-free public higher ed",
      },
      {
        number: "H.R. 2813",
        title: "Universal Child Care and Early Learning Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/2813",
        status: "Introduced - pre-K expansion",
      },
    ],
    implementationTimeline: [
      {
        phase: "Pre-K rollout",
        timeframe: "Year 1-2",
        description:
          "Federal-state partnership funds universal pre-K for ages 3-4 in highest-need districts first.",
      },
      {
        phase: "Debt cancellation",
        timeframe: "Year 2",
        description:
          "Cancel federal student debt for public and nonprofit graduates; cap future public tuition at $0.",
      },
      {
        phase: "Title I & Title IX",
        timeframe: "Year 3-5",
        description:
          "40% Title I funding increase; trauma-informed Title IX proceedings with student-faculty governance boards.",
      },
    ],
  },
  {
    id: "FIX-IMM-001",
    category: "Immigration",
    title: "Humane Immigration Modernization & Asylum Capacity",
    problem:
      "Multi-year immigration court backlogs, underfunded asylum officers, and enforcement-only politics leave families in limbo while employers exploit unauthorized labor. Citizenship documentation mandates and interior raids expand without parallel legal pathways or due-process capacity.",
    proposedFix:
      "Hire enough immigration judges and asylum officers to clear backlogs within five years. Create earned pathways to citizenship for long-settled workers and Dreamers. Expand legal work visas tied to labor standards. End family detention; use community case management. Restore asylum access at ports of entry with counsel for children.",
    whyItWorks:
      "Court staffing and legal pathways shrink shadow labor markets, raise wage floors, and replace chaotic raids with orderly processing. Counsel and case management improve appearance rates without cages.",
    whyPeopleCallItExtreme:
      "Nativist media calls pathways amnesty and paints asylum capacity as open borders, even though the plan pairs legalization with labor enforcement and rejects family detention as both cruel and ineffective.",
    theGaslight:
      "They claim enforcement-only is the only serious option. Decades of enforcement without visas and judges produced larger backlogs and more exploitation. Order requires capacity, not cruelty theater.",
    alreadyWorksWhere:
      "Canada and Australia run points and employer-linked systems with due process. U.S. history includes IRCA legalization and TPS programs that stabilized communities without collapsing the labor market.",
    economicImpact:
      "CRS and labor analyses show immigrants raise labor-force growth and entrepreneurship. Legalization raises tax compliance and wage floors by reducing employer leverage over unauthorized workers.",
    costOfInaction:
      "Without court staffing and legal pathways, backlogs keep growing, employers keep a shadowed labor pool, and enforcement-only strategies separate families without fixing root processing failures. CRS backlog analyses show multi-year court delays deepen without staffing and due-process investment.",
    costOfInactionCitations: ["cost_inaction_immigration", "aclu_immigration", "policy_immigration"],
    safeguards: [
      "Statutory caps on family detention with judicial review",
      "Independent immigration court under Article I, insulated from AG political control",
      "Annual public backlog dashboards with judge staffing ratios",
      "Labor-standards enforcement paired with any new work-visa expansion",
    ],
    citations: ["policy_immigration", "aclu_immigration", "cost_inaction_immigration", "dhs_deportation_ops"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Immigration and border legislation tracker",
        url: "https://www.congress.gov/",
        status: "Monitor comprehensive reform and asylum-capacity bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Emergency capacity",
        timeframe: "Year 1",
        description:
          "Double immigration judge hiring and asylum officer corps; end family detention contracts.",
      },
      {
        phase: "Legalization & visas",
        timeframe: "Year 2-3",
        description:
          "Enact earned citizenship for long-settled residents; expand worker visas with wage floors.",
      },
      {
        phase: "Structural independence",
        timeframe: "Year 4-5",
        description:
          "Move immigration courts to an independent Article I structure with counsel guarantees for children.",
      },
    ],
  },
  {
    id: "FIX-HOUS-001",
    category: "Housing",
    title: "Social Housing & Tenant Protection Compact",
    problem:
      "Rent burdens exceed 30% of income for millions of households. Zoning scarcity, investor purchases, and weak tenant protections drive homelessness while HUD fair-housing enforcement pauses leave discrimination unchecked.",
    proposedFix:
      "Federal social-housing capital for mixed-income public development. Automatic emergency rental assistance in high-cost metros. Ban algorithmic rent-fixing cartels. Strengthen Section 8 voucher funding to serve all eligible families. Restore aggressive fair-housing enforcement.",
    whyItWorks:
      "Social housing adds permanently affordable supply outside speculative cycles. Vouchers and tenant counsel stop eviction cascades that destroy credit and employment.",
    whyPeopleCallItExtreme:
      "Developers and investor lobbies call social housing Soviet and claim rent coordination bans violate free markets, while quietly using software to collude on rents.",
    theGaslight:
      "They say supply alone solves everything and tenants should just move. Zoning scarcity plus investor purchases create artificial shortages; vouchers without supply still leave people priced out.",
    alreadyWorksWhere:
      "Vienna's social housing keeps large shares of residents in publicly owned stock. Singapore's HDB and Nordic municipal housing show durable affordability. NYC right-to-counsel cut eviction filings where funded.",
    economicImpact:
      "Stable housing raises employment continuity and child educational outcomes. Construction jobs from social housing expand middle-skill employment while cutting shelter and ER costs tied to homelessness.",
    costOfInaction:
      "Without supply and assistance, rent burdens and homelessness keep rising; eviction cascades destroy credit and employment; fair-housing pauses let discrimination harden into neighborhood exclusion. HUD fair-housing pauses and high rent burdens in Census data show housing scarcity is a policy outcome, not a personal failure epidemic.",
    costOfInactionCitations: ["cost_inaction_housing", "policy_housing", "hud_fair_housing_pause"],
    safeguards: [
      "Tenant right to counsel in eviction courts receiving federal funds",
      "Anti-displacement rules for any federally subsidized redevelopment",
      "Public land disposition preference for social housing over speculative sale",
      "Annual homelessness point-in-time transparency with HUD Inspector General audits",
    ],
    citations: ["policy_housing", "cost_inaction_housing", "hud_fair_housing_pause"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Housing and voucher legislation",
        url: "https://www.congress.gov/",
        status: "Track social housing and voucher expansion bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Emergency relief",
        timeframe: "Year 1",
        description:
          "Fully fund vouchers for currently eligible waitlists; ban algorithmic rent collusion.",
      },
      {
        phase: "Build social housing",
        timeframe: "Year 2-4",
        description:
          "Federal capital grants for municipal social-housing authorities; zoning preemption for affordable density near transit.",
      },
      {
        phase: "Fair housing restoration",
        timeframe: "Year 3-5",
        description:
          "Restore disparate-impact enforcement and affirmatively furthering fair housing rules.",
      },
    ],
  },
  {
    id: "FIX-MED-001",
    category: "Media & Antitrust",
    title: "Media Pluralism & Platform Accountability Act",
    problem:
      "Media consolidation, dark-money influence campaigns, and platform monopoly power distort the information environment voters need. Fairness Doctrine repeal and weak ownership caps left local news hollowed out while propaganda scales nationally.",
    proposedFix:
      "Restore meaningful broadcast ownership caps and local-news public-interest obligations. Fund nonprofit local journalism via spectrum-fee public dividends. Require large platforms to offer interoperable data portability. Mandate real-time political ad libraries with funder identity. Strengthen FTC/DOJ antitrust capacity against communications mergers.",
    whyItWorks:
      "Structural ownership and disclosure rules diversify who speaks without government viewpoint boards. Local news funding rebuilds the reporters who catch corruption first.",
    whyPeopleCallItExtreme:
      "Platforms and conglomerates call ownership caps censorship and ad libraries a speech tax, while enjoying monopoly distribution that already decides which speech scales.",
    theGaslight:
      "They say the market produces enough news. News deserts and algorithmic amplification of paid propaganda are market failures, not proof of abundance.",
    alreadyWorksWhere:
      "BBC and Nordic public media models sustain local reporting. EU Digital Services Act-style ad transparency and competition probes show democracies can police platforms without banning opinions.",
    economicImpact:
      "Local journalism employment rebounds; advertisers gain clearer markets; reduced misinformation externalities lower democratic instability costs that markets do not price.",
    costOfInaction:
      "Without pluralism rules, news deserts expand, capture worsens, and voters face algorithmically amplified propaganda with fewer local reporters to check it. FCC ownership and broadcast rule shifts plus reduced proactive disclosure concentrate information power while local news deserts widen.",
    costOfInactionCitations: ["policy_media", "fcc_media_policy", "dark_money_transparency"],
    safeguards: [
      "First Amendment-compliant structural rules (ownership, disclosure) rather than viewpoint censorship boards",
      "Independent public-media trust insulated from annual partisan zero-outs",
      "Journalist shield protections paired with platform transparency mandates",
      "Merger review with democracy-impact analysis, not price effects alone",
    ],
    citations: ["policy_media", "fcc_broadcast_rules", "fcc_media_policy", "dark_money_transparency"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Media and antitrust legislation",
        url: "https://www.congress.gov/",
        status: "Track journalism and platform competition bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Disclosure & antitrust",
        timeframe: "Year 1",
        description:
          "Mandatory political ad libraries; aggressive merger challenges for news and platform deals.",
      },
      {
        phase: "Ownership & local news",
        timeframe: "Year 2-3",
        description: "Tighten ownership caps; launch spectrum-fee journalism endowment.",
      },
      {
        phase: "Interoperability",
        timeframe: "Year 3-5",
        description:
          "Platform data-portability and open-protocol requirements for dominant networks.",
      },
    ],
  },
  {
    id: "FIX-DIS-001",
    category: "Disability Rights",
    title: "Disability Freedom & Home Care Guarantee",
    problem:
      "Disabled Americans still face institutional bias, inaccessible transit and housing, employment discrimination, and home-care worker shortages. ADA rights exist on paper while waitlists for community services stretch years.",
    proposedFix:
      "Federal guarantee of home- and community-based services (HCBS) as a Medicaid entitlement. Fully fund IDEA special education. Enforce ADA Title II/III with private right of action preserved. Create a care-worker living-wage pipeline. End subminimum wage under 14(c) certificates.",
    whyItWorks:
      "Community care costs less over time than unnecessary institutionalization and expands labor-force participation for disabled people and family caregivers. Ending 14(c) restores equal pay under civil-rights logic.",
    whyPeopleCallItExtreme:
      "Institutions and low-wage employers call HCBS entitlements unaffordable and claim ending subminimum wage destroys sheltered workshops, ignoring Olmstead's integration mandate and successful state phase-outs.",
    theGaslight:
      "They say the ADA already fixed everything. Waitlists measured in years and inaccessible transit prove rights without funding and enforcement are paper promises.",
    alreadyWorksWhere:
      "Olmstead enforcement victories and HCBS expansions in states like Minnesota show community integration works. Many peer nations fund personal assistance as a standard disability right.",
    economicImpact:
      "Community care costs less than unnecessary institutionalization over time and expands labor-force participation for disabled people and family caregivers.",
    costOfInaction:
      "Without HCBS entitlements and ADA enforcement, institutionalization and poverty persist; Willowbrook-era warehousing returns in slower bureaucratic form. ADA enforcement capacity and community-care access shrink when agencies treat disability rights as optional paperwork instead of civil rights.",
    costOfInactionCitations: ["policy_disability", "gao_healthcare", "policy_healthcare"],
    safeguards: [
      "Olmstead enforcement unit with independent monitoring",
      "Ban new federal funds for institutions that fail community-integration benchmarks",
      "Care-worker collective bargaining recognition in federally funded programs",
      "Annual ADA compliance audits of federally assisted transit agencies",
    ],
    citations: ["policy_disability", "gao_healthcare", "policy_healthcare"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Disability and HCBS legislation",
        url: "https://www.congress.gov/",
        status: "Track HCBS access and IDEA full-funding bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "HCBS entitlement",
        timeframe: "Year 1-2",
        description:
          "Convert HCBS waivers into mandatory Medicaid benefits with federal match boost.",
      },
      {
        phase: "Wage & education",
        timeframe: "Year 2-3",
        description: "End 14(c) subminimum wages; fully fund IDEA; care-worker wage floors.",
      },
      {
        phase: "Access enforcement",
        timeframe: "Year 3-5",
        description: "Transit and housing accessibility surge grants with ADA litigation support.",
      },
    ],
  },
  {
    id: "FIX-IND-001",
    category: "Indigenous Sovereignty",
    title: "Treaty Enforcement & Tribal Sovereignty Compact",
    problem:
      "Broken treaties, trust-land constraints, underfunded IHS care, and extractive projects without free prior informed consent continue colonial patterns. Boarding-school harms and land theft remain incompletely addressed.",
    proposedFix:
      "Codify free, prior, and informed consent for federal projects affecting tribal lands and sacred sites. Fully fund Indian Health Service at parity with federal employee health benefits. Accelerate land-into-trust. Create a boarding-school truth and repatriation commission with enforcement teeth. Honor water and hunting treaty rights in federal permitting.",
    whyItWorks:
      "Consent-based permitting reduces litigation delay and respects nation-to-nation status. IHS parity closes preventable health gaps that cost more in crisis care than in primary funding.",
    whyPeopleCallItExtreme:
      "Extractive interests call FPIC a veto on development and frame treaty enforcement as special rights, ignoring that treaties are the supreme law of the land and that broken promises are the extreme status quo.",
    theGaslight:
      "They say consultation already happens. Checkbox notice after leases are drafted is not consent. Militarized responses to pipeline protests reveal whose interests get force.",
    alreadyWorksWhere:
      "Canada's UNDRIP legislation and several U.S. tribal self-governance compacts show consent and compacting models. Alaska Native corporations and Lower 48 self-determination contracts demonstrate tribal capacity when funded.",
    economicImpact:
      "Tribal self-determination raises local governance capacity and reduces crisis spending from health and public-safety underfunding. Consent-based permitting reduces litigation delay compared with imposed extraction.",
    costOfInaction:
      "Without treaty enforcement and IHS parity, health gaps and land conflicts persist; extractive permits without consent repeat Standing Rock-style militarized confrontations. Treaty obligations and consultation duties erode when lands, fishing, and energy proclamations treat Indigenous nations as afterthoughts.",
    costOfInactionCitations: ["policy_indigenous", "federal_lands_drilling", "energy_emergency_eo"],
    safeguards: [
      "Tribal consultation that requires consent, not checkbox notice",
      "Independent treaty-rights ombuds with subpoena power",
      "IHS funding formulas insulated from annual hostage-taking",
      "Sacred-site veto overlapping federal land dispositions",
    ],
    citations: ["policy_indigenous", "federal_lands_drilling", "blm_hardrock_mining"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Tribal sovereignty and IHS legislation",
        url: "https://www.congress.gov/",
        status: "Track IHS funding and consultation-reform bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Consent & trust land",
        timeframe: "Year 1-2",
        description:
          "Enact FPIC standard; streamline land-into-trust; pause conflicting extractive leases.",
      },
      {
        phase: "Health parity",
        timeframe: "Year 2-4",
        description:
          "Fund IHS to FEHB-comparable levels; expand tribal self-governance compacts.",
      },
      {
        phase: "Truth & repatriation",
        timeframe: "Year 3-5",
        description:
          "Boarding-school commission with records access; accelerate NAGPRA repatriations.",
      },
    ],
  },

  // --- NEW PILLARS (Pass 38) ---
  {
    id: "FIX-CC-001",
    category: "Childcare & Care Economy",
    title: "Universal Childcare & Paid Family Leave",
    problem:
      "Childcare routinely costs as much as rent, pushing parents - especially mothers - out of the workforce. Federal FMLA leave is unpaid and excludes millions of workers, so a new baby or a sick parent becomes a financial emergency.",
    proposedFix:
      "Cap childcare at 7% of income with sliding-scale public funding for licensed care. Create a national paid family and medical leave insurance program covering 12 weeks at progressive wage replacement. Raise care-worker wages and training standards with federal matching funds.",
    whyItWorks:
      "Affordable care raises labor-force participation and child development scores. Paid leave improves maternal and infant health and reduces job churn that employers also pay for.",
    whyPeopleCallItExtreme:
      "Opponents call public childcare nanny-state socialism and claim paid leave destroys small business, even though peer nations fund leave through social insurance and U.S. employers already lose talent to care crises.",
    theGaslight:
      "They say families should rely on relatives and that markets will supply care. Markets already failed for low- and middle-income parents; unpaid leave is a subsidy to employers, not a family value.",
    alreadyWorksWhere:
      "Quebec's low-fee childcare and Nordic paid-leave systems show durable gains in maternal employment. California, New Jersey, and other states already run paid-leave insurance that can scale nationally.",
    economicImpact:
      "Higher parental labor supply raises GDP and tax revenue. Lower turnover and fewer emergency absences cut employer costs that unpaid leave currently externalizes onto workers.",
    costOfInaction:
      "Without public childcare and paid leave, parents keep exiting jobs, wage gaps widen, and early childhood inequality compounds into lifelong opportunity gaps documented by labor and education research.",
    costOfInactionCitations: ["policy_childcare", "dol_fmla", "cost_inaction_education"],
    safeguards: [
      "Care-worker wage floors tied to regional living costs",
      "Parent and worker seats on state childcare quality boards",
      "Small-business premium assistance within leave insurance",
      "Annual public dashboards of childcare slots, waitlists, and leave uptake",
    ],
    citations: ["policy_childcare", "dol_fmla", "hr_paid_leave", "policy_education"],
    billReferences: [
      {
        number: "H.R. 2813",
        title: "Universal Child Care and Early Learning Act",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/2813",
        status: "Introduced - pre-K and care expansion",
      },
      {
        number: "Congress.gov",
        title: "Paid family leave legislation",
        url: "https://www.congress.gov/",
        status: "Track federal paid leave insurance bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Leave insurance launch",
        timeframe: "Year 1",
        description: "Stand up national paid leave insurance with progressive wage replacement.",
      },
      {
        phase: "Childcare cost caps",
        timeframe: "Year 1-3",
        description: "Federal match to cap family childcare costs at 7% of income; expand slots.",
      },
      {
        phase: "Workforce standards",
        timeframe: "Year 3-5",
        description: "Care-worker wage floors, training pipelines, and quality dashboards live nationwide.",
      },
    ],
  },
  {
    id: "FIX-GUN-001",
    category: "Gun Safety",
    title: "Universal Background Checks & Safe Storage",
    problem:
      "Firearm violence kills tens of thousands of Americans yearly. Private-sale loopholes, weak safe-storage rules, and assault-style weapons circulating without licensing leave communities absorbing preventable deaths.",
    proposedFix:
      "Require background checks for all firearm sales and transfers. Mandate safe storage and child-access prevention standards. License assault-style weapons and high-capacity magazines with renewal checks. Fund extreme-risk protection order systems in every state with due-process hearings.",
    whyItWorks:
      "Closing private-sale gaps stops prohibited purchasers from skipping the NICS system. Safe storage and extreme-risk orders reduce suicides and impulsive shootings without banning all civilian firearms.",
    whyPeopleCallItExtreme:
      "Gun lobbies call any licensing confiscation and claim background checks are a registry Trojan horse, despite polling majorities for universal checks and the fact that licensed hunting cultures coexist with safety rules abroad.",
    theGaslight:
      "They say only criminals ignore laws so rules are useless. Most crime guns move through legal gaps and straw purchases that checks and licensing close; peer countries with licensing have far lower firearm death rates.",
    alreadyWorksWhere:
      "Australia's post-Port Arthur reforms and Canada's licensing show steep drops in mass-shooting frequency. U.S. states with universal checks and extreme-risk laws already demonstrate workable due-process models.",
    economicImpact:
      "Fewer shootings cut medical, policing, and lost-productivity costs. Insurance and hospital systems face lower trauma burdens when firearm deaths and injuries fall.",
    costOfInaction:
      "Without closing loopholes, prohibited purchasers keep exploiting private sales while firearm deaths remain a leading cause of death for young Americans. CDC firearm-violence data make delay a body-count policy.",
    costOfInactionCitations: ["cost_inaction_guns", "cdc_firearms", "hr_background_checks"],
    safeguards: [
      "Due-process hearings for extreme-risk orders with counsel rights",
      "No federal gun registry of ordinary long guns; license assault-style categories only",
      "Hunting and sport exemptions with safety training requirements",
      "Annual CDC and ATF public reporting on trafficking pathways",
    ],
    citations: ["cdc_firearms", "cost_inaction_guns", "hr_background_checks"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Firearm background-check legislation",
        url: "https://www.congress.gov/",
        status: "Track universal background-check and safe-storage bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Close the gap",
        timeframe: "Year 1",
        description: "Universal background checks for all transfers; fund state extreme-risk systems.",
      },
      {
        phase: "Storage & licensing",
        timeframe: "Year 2-3",
        description: "Safe-storage mandates; assault-style licensing with renewal checks.",
      },
      {
        phase: "Trafficking enforcement",
        timeframe: "Year 3-5",
        description: "ATF capacity surge against straw purchasing with public trafficking dashboards.",
      },
    ],
  },
  {
    id: "FIX-RR-001",
    category: "Reproductive Rights",
    title: "Reproductive Freedom Restoration Act",
    problem:
      "After Dobbs, abortion bans and clinic closures drive patients across state lines, raise maternal mortality risk, and criminalize doctors. Contraception and IVF access face coordinated political attacks framed as culture war rather than healthcare.",
    proposedFix:
      "Codify a federal right to abortion care before viability and for health of the patient thereafter. Protect interstate travel for care. Guarantee contraception coverage without copays. Shield providers from hostile-state extradition. Fund Title X and rural reproductive clinics.",
    whyItWorks:
      "Legal abortion and contraception are standard reproductive healthcare that reduce maternal mortality and unwanted pregnancy. Federal floors stop ZIP-code medicine where neighboring states set opposite rules for the same body.",
    whyPeopleCallItExtreme:
      "Opponents call federal abortion rights radical abortion on demand, while state bans already impose extreme control over pregnancy including miscarriage investigations and forced travel.",
    theGaslight:
      "They say abortion is never healthcare and that contraception is widely available. Emergency obstetric care includes abortion; clinic deserts and pharmacy refusals prove access is not guaranteed.",
    alreadyWorksWhere:
      "Most OECD democracies protect abortion in law with gestational frameworks. Pre-Dobbs Roe and state constitutional amendments in Kansas and elsewhere show majority support for legal access.",
    economicImpact:
      "Reproductive autonomy raises educational attainment and lifetime earnings. Avoided maternal morbidity and interstate care costs reduce public and family medical spending.",
    costOfInaction:
      "Criminalization and clinic closures keep raising maternal deaths and forcing delayed care. Guttmacher tracking after Dobbs documents access collapse in ban states and cascading harms to obstetric workforce supply.",
    costOfInactionCitations: ["guttmacher_repro", "policy_healthcare", "gao_healthcare"],
    safeguards: [
      "Conscience exemptions limited to individual clinicians, not entire hospital systems denying emergencies",
      "Patient privacy shields against out-of-state subpoenas for legal care",
      "Rural clinic capital fund so access is not coastal-only",
      "Annual maternal mortality reporting by state with CDC methods",
    ],
    citations: ["guttmacher_repro", "policy_healthcare", "oecd_health"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Reproductive rights legislation",
        url: "https://www.congress.gov/",
        status: "Track federal abortion-rights and contraception bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Federal floor",
        timeframe: "Year 1",
        description: "Codify abortion and contraception rights; block interstate travel prosecutions.",
      },
      {
        phase: "Clinic capacity",
        timeframe: "Year 1-3",
        description: "Title X and rural clinic surge funding; provider shield statutes.",
      },
      {
        phase: "Maternal health",
        timeframe: "Year 3-5",
        description: "Maternal mortality reduction grants tied to evidence-based obstetric standards.",
      },
    ],
  },
  {
    id: "FIX-TAX-001",
    category: "Tax Fairness",
    title: "Tax Fairness & Wealth Loophole Closure",
    problem:
      "Preferential capital-gains rates, stepped-up basis, and aggressive avoidance let ultra-wealthy households pay lower effective rates than many wage earners. Underfunded IRS enforcement against high-income evasion shifts burdens onto workers.",
    proposedFix:
      "Raise top marginal rates on income over $10M. Tax capital gains as ordinary income above $1M. End stepped-up basis for estates over $5M. Close carried-interest loophole. Fund IRS enforcement focused on high-income and large-partnership audits. Millionaire surtax dedicated to Social Security and Medicaid.",
    whyItWorks:
      "Aligning capital and wage tax rates reduces gaming and funds public goods businesses also use. Targeted IRS capacity recovers revenue that already belongs under current law.",
    whyPeopleCallItExtreme:
      "Wealth lobbies call fairer rates class warfare and claim capital will flee, recycling the same arguments used against every progressive tax reform of the twentieth century.",
    theGaslight:
      "They say job creators need lower rates to invest. Investment responds to demand and productivity; preferential rates mainly capitalize existing wealth and buy political influence.",
    alreadyWorksWhere:
      "Nordic and many EU systems tax capital income more evenly with wages. U.S. mid-century top rates coexisted with high growth; recent IRS funding debates show enforcement ROI on top earners.",
    economicImpact:
      "Hundreds of billions in additional revenue over a decade from rate alignment and enforcement. Reduced inequality lowers social-insurance stress and funds infrastructure without cutting benefits.",
    costOfInaction:
      "Leaving capital-income loopholes open shifts tax burden onto wages and underfunds Social Security, Medicare, and infrastructure that businesses also use. Treasury and IRS SOI data document the effective-rate gap at the top.",
    costOfInactionCitations: ["cost_inaction_tax", "treasury_tax", "irs_soi"],
    safeguards: [
      "No tax increases on income under $400,000",
      "Public IRS audit-rate dashboards by income bracket",
      "Anti-inversion and country-by-country reporting for multinationals",
      "Independent Tax Fairness Commission reporting every Congress",
    ],
    citations: ["treasury_tax", "irs_soi", "cost_inaction_tax"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Tax fairness legislation",
        url: "https://www.congress.gov/",
        status: "Track capital-gains and carried-interest reform bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Enforcement first",
        timeframe: "Year 1",
        description: "Restore IRS high-income audit capacity; close carried interest.",
      },
      {
        phase: "Rate alignment",
        timeframe: "Year 1-2",
        description: "Tax capital gains as ordinary income above $1M; raise top brackets over $10M.",
      },
      {
        phase: "Estate basis reform",
        timeframe: "Year 2-4",
        description: "End stepped-up basis above $5M with small-business and farm continuity rules.",
      },
    ],
  },
  {
    id: "FIX-SS-001",
    category: "Social Security & Medicare",
    title: "Social Security & Medicare Solvency Compact",
    problem:
      "Trustees reports show manageable shortfalls if Congress acts early, yet privatization pitches and benefit-cut politics treat insolvency as destiny. Medicare Advantage overpayments and drug costs strain seniors while payroll caps leave billionaire earnings untaxed for Social Security.",
    proposedFix:
      "Lift the Social Security payroll cap so wages above $400,000 pay the same rate. Close Medicare Advantage overpayment formulas. Expand Medicare drug negotiation. Reject privatization and voucher schemes. Create a dedicated solvency lockbox for new progressive revenues.",
    whyItWorks:
      "Modest revenue fixes preserve defined benefits that keep elders out of poverty. Early action avoids steeper cuts later; negotiation and Advantage reforms stretch Medicare dollars.",
    whyPeopleCallItExtreme:
      "Wall Street privatization advocates call benefit guarantees unsustainable entitlements, while proposing accounts that shift market risk onto retirees who cannot wait out a crash.",
    theGaslight:
      "They say the cupboard is bare and only cuts work. Trustees math shows revenue options; the bare cupboard story is a political choice to spare high earners above the payroll cap.",
    alreadyWorksWhere:
      "Peer nations sustain public pensions with broader contribution bases. U.S. Social Security has run for decades with periodic adjustments; Medicare drug negotiation already began under IRA authorities that can expand.",
    economicImpact:
      "Stable benefits support consumer demand among retirees. Avoided poverty and delayed long-term-care costs reduce Medicaid pressure. Negotiation savings free Medicare capacity for care rather than middlemen.",
    costOfInaction:
      "Delaying revenue fixes forces steeper benefit cuts later; early modest payroll-base expansions preserve benefits without privatization gambles. SSA Trustees reports make the choice calendar explicit.",
    costOfInactionCitations: ["cost_inaction_ss", "ssa_trustees", "cbo_medicare"],
    safeguards: [
      "Statutory ban on Social Security privatization without 60% public referendum",
      "Trust-fund solvency dashboard updated with each Trustees report",
      "Medicare Advantage payment audits with clawbacks for upcoding",
      "No benefit cuts for current beneficiaries or workers within 10 years of eligibility",
    ],
    citations: ["ssa_trustees", "cost_inaction_ss", "cbo_medicare", "cbo_drug_negotiation"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Social Security and Medicare legislation",
        url: "https://www.congress.gov/",
        status: "Track payroll-cap and Medicare negotiation expansion bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Cap lift",
        timeframe: "Year 1",
        description: "Apply payroll tax above $400,000; publish solvency dashboard.",
      },
      {
        phase: "Medicare integrity",
        timeframe: "Year 1-3",
        description: "Advantage overpayment reform; expand drug negotiation classes.",
      },
      {
        phase: "Lockbox",
        timeframe: "Year 3-5",
        description: "Dedicate progressive revenues to trust funds with anti-raid rules.",
      },
    ],
  },
  {
    id: "FIX-RUR-001",
    category: "Rural Care",
    title: "Rural Hospitals & Broadband Compact",
    problem:
      "Rural hospital closures leave trauma and obstetric deserts. Broadband gaps lock farms, clinics, and students out of the modern economy while private ISPs skim profitable tracts and skip the rest.",
    proposedFix:
      "Federal rural hospital stabilization fund with obstetric and emergency minimums. Expand USDA and FCC broadband buildout with open-access requirements. Telehealth parity for rural clinics. Loan forgiveness for clinicians practicing in shortage areas.",
    whyItWorks:
      "Stabilizing hospitals keeps care within driving distance and preserves local jobs. Public broadband treats connectivity as infrastructure, not a charity add-on for leftover ZIP codes.",
    whyPeopleCallItExtreme:
      "ISPs call open-access requirements unfair competition and hospital funds bailouts, while monopoly pricing and closure waves already bail out private equity extractors at community expense.",
    theGaslight:
      "They say markets will serve rural America if regulated less. Decades of deregulation still left FCC maps full of gaps; hospitals close where margins, not need, decide.",
    alreadyWorksWhere:
      "USDA Rural Development and historic REA electrification show public infrastructure models. Cooperative broadband in parts of the Midwest and municipal networks prove non-monopoly delivery works.",
    economicImpact:
      "Kept-open hospitals and broadband raise farm productivity, remote work options, and clinic revenue. Avoided ambulance transfers and ER diversions cut public emergency costs.",
    costOfInaction:
      "Closures and digital deserts keep compounding population loss. USDA and FCC data show rural survival depends on care and connectivity that private markets alone leave unserved.",
    costOfInactionCitations: ["usda_rural", "fcc_broadband", "gao_healthcare"],
    safeguards: [
      "Open-access fiber requirements on federally funded builds",
      "Hospital funds barred from private-equity dividend extraction",
      "Community broadband co-op preference in grant scoring",
      "Annual rural obstetric access maps with GAO review",
    ],
    citations: ["usda_rural", "fcc_broadband", "gao_healthcare"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Rural health and broadband legislation",
        url: "https://www.congress.gov/",
        status: "Track rural hospital and broadband equity bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Stabilize hospitals",
        timeframe: "Year 1-2",
        description: "Emergency rural hospital fund; clinician loan forgiveness surge.",
      },
      {
        phase: "Broadband build",
        timeframe: "Year 1-4",
        description: "Open-access fiber to unserved tracts with co-op preference.",
      },
      {
        phase: "Telehealth parity",
        timeframe: "Year 2-5",
        description: "Permanent telehealth payment parity for rural clinics and pharmacies.",
      },
    ],
  },
  {
    id: "FIX-VET-001",
    category: "Veterans",
    title: "Veterans Care & Benefits Guarantee",
    problem:
      "VA underfunding, privatization experiments, and claims backlogs leave veterans waiting for care they earned. Toxic exposure, mental health, and housing insecurity remain under-served relative to need.",
    proposedFix:
      "Fully fund VA hospitals and community care only as overflow with VA quality standards. End privatization schemes that divert budget to contractors. Accelerate PACT Act toxic-exposure claims. Guarantee housing vouchers for homeless veterans. Expand VA mental health and suicide-prevention staffing.",
    whyItWorks:
      "An integrated VA system delivers specialized care at scale when funded. Overflow networks help when capacity is tight; replacing the VA with vouchers recreates the fragmented private market veterans already struggle to navigate.",
    whyPeopleCallItExtreme:
      "Privatization advocates call a strong VA government medicine and claim choice requires vouchers, while choice without capacity is a waiting list with better branding.",
    theGaslight:
      "They say the VA is broken so it must be sold off. Underfunding and contractor cream-skimming create the crises then used to justify dismantling public care.",
    alreadyWorksWhere:
      "VA care often outperforms private averages on some quality metrics when staffed. Peer nations run dedicated veteran benefits alongside universal systems; U.S. history of VA hospitals is a public success underfunded on purpose.",
    economicImpact:
      "Timely VA care reduces crisis hospitalizations and homelessness costs. Faster claims processing cuts disability poverty and raises veteran labor-force participation.",
    costOfInaction:
      "Backlogs and privatization experiments shift risk onto veterans while contractors extract margins. VA health program data show demand rising faster than funded capacity without a guarantee.",
    costOfInactionCitations: ["va_health", "gao_healthcare", "policy_healthcare"],
    safeguards: [
      "Statutory VA funding floors indexed to enrolled veterans",
      "Inspector General audits of community-care contractor quality",
      "Veteran majority on local VA advisory boards",
      "Ban on selling VA real estate without Congressional approval",
    ],
    citations: ["va_health", "gao_healthcare", "policy_healthcare"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Veterans care legislation",
        url: "https://www.congress.gov/",
        status: "Track VA funding and toxic-exposure implementation bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Capacity surge",
        timeframe: "Year 1-2",
        description: "Hire VA clinicians; clear claims backlog; freeze privatization expansions.",
      },
      {
        phase: "Toxic exposure",
        timeframe: "Year 1-3",
        description: "Full PACT Act implementation with presumptive-condition expansions as evidence warrants.",
      },
      {
        phase: "Housing & mental health",
        timeframe: "Year 2-5",
        description: "Homeless-veteran voucher guarantee; suicide-prevention staffing ratios met.",
      },
    ],
  },
  {
    id: "FIX-INF-001",
    category: "Infrastructure & Transit",
    title: "Infrastructure & Public Transit Buildout",
    problem:
      "Aging bridges, rail, water systems, and underfunded transit leave workers stuck in cars, cities choked by congestion, and rural roads crumbling. Capital plans stall while deferred maintenance multiplies repair costs.",
    proposedFix:
      "Ten-year federal capital plan for bridges, water, rail, and accessible transit. Permanent transit operating aid so agencies are not farebox-hostage. Buy America and project-labor agreements on federally funded builds. Electrify bus fleets and expand frequent service on core corridors.",
    whyItWorks:
      "Public capital spending raises productivity and safety while creating middle-skill jobs. Reliable transit expands labor markets without forcing every household to own multiple cars.",
    whyPeopleCallItExtreme:
      "Anti-tax lobbies call transit subsidies waste and paint rail as elite, ignoring that highway spending is also subsidy and that low-income riders depend on buses that austerity cuts first.",
    theGaslight:
      "They say Americans will never leave cars. Cities with frequent service prove ridership follows reliability; underfunded systems are designed to fail then cited as proof of failure.",
    alreadyWorksWhere:
      "Japan, Spain, and much of Europe run dense rail and bus networks. U.S. examples from NYC Subway to Seattle and Minneapolis rapid bus show demand when service is frequent and funded.",
    economicImpact:
      "Construction employment, reduced congestion costs, and higher property-value capture near transit corridors. Lower household transportation costs free wages for local spending.",
    costOfInaction:
      "Deferred maintenance multiplies into bridge failures, water crises, and transit death spirals. DOT transit data document capital and operating gaps that worsen without permanent federal partnership.",
    costOfInactionCitations: ["dot_transit", "policy_environment", "cost_inaction_climate"],
    safeguards: [
      "Project-labor agreements and prevailing wage on federal builds",
      "Accessibility mandates under ADA for all new federally funded stations",
      "Transparency portals for project cost overruns over 10%",
      "Operating aid formulas that reward ridership and frequency, not fare hikes alone",
    ],
    citations: ["dot_transit", "policy_environment", "fcc_broadband"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Infrastructure and transit legislation",
        url: "https://www.congress.gov/",
        status: "Track transit operating aid and capital reauthorization bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "State of good repair",
        timeframe: "Year 1-3",
        description: "Bridge, water, and rail state-of-good-repair surge with Buy America rules.",
      },
      {
        phase: "Transit operations",
        timeframe: "Year 1-5",
        description: "Permanent operating aid; frequency standards on core urban corridors.",
      },
      {
        phase: "Electrification",
        timeframe: "Year 3-10",
        description: "Bus and rail electrification with utility partnerships and workforce training.",
      },
    ],
  },
  {
    id: "FIX-CORR-001",
    category: "Anti-Corruption",
    title: "Dark Money Ban & Public Financing",
    problem:
      "Unlimited dark-money spending and revolving-door lobbying let billionaires and corporations buy influence without voters knowing who paid. STOCK Act gaps and weak disclosure leave conflicts of interest routine.",
    proposedFix:
      "Require real-time disclosure of election spending over $200. Public financing with small-dollar matching for federal races. Lifetime lobbying bans for senior officials. Ban individual stock trading by members of Congress and senior executives. Strengthen Office of Government Ethics with subpoena power.",
    whyItWorks:
      "Sunlight and public matching dilute billionaire gatekeeping so candidates can win without bundlers. Lobbying bans and trading bans remove the most obvious cash-for-access channels.",
    whyPeopleCallItExtreme:
      "Donors call disclosure harassment and public financing welfare for politicians, while spending hundreds of millions in secret to pick the politicians.",
    theGaslight:
      "They say money is speech and reform silences citizens. Disclosure does not ban speech; it ends anonymous speech by the ultra-rich. Small-dollar matching amplifies ordinary speech.",
    alreadyWorksWhere:
      "Seattle democracy vouchers and New York City matching funds show small-dollar systems work. Peer democracies restrict paid political advertising and require donor transparency far beyond U.S. dark-money practice.",
    economicImpact:
      "Reduced capture means regulations and tax rules track public interest more often, cutting the hidden tax of monopolies and bailouts written by lobbyists.",
    costOfInaction:
      "Dark money and revolving doors keep rewriting rules for donors. OpenSecrets tracking shows undisclosed spending rising each cycle while STOCK Act enforcement gaps leave official trading conflicts unresolved.",
    costOfInactionCitations: ["opensecrets_dark_money", "stock_act", "safeguard_anticorruption"],
    safeguards: [
      "Real-time FEC filing with criminal penalties for shell-donor schemes",
      "Blind trusts mandatory for covered officials' liquid assets",
      "Matching funds only for candidates who reject Super PAC coordination",
      "Inspector General audits of lobbying ban compliance",
    ],
    citations: ["opensecrets_dark_money", "stock_act", "safeguard_anticorruption", "safeguard_transparency"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Campaign finance and ethics legislation",
        url: "https://www.congress.gov/",
        status: "Track disclosure, public financing, and STOCK Act strengthening bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Disclosure now",
        timeframe: "Year 1",
        description: "Real-time disclosure over $200; congressional stock-trading ban.",
      },
      {
        phase: "Public financing",
        timeframe: "Year 2-3",
        description: "Small-dollar matching for House and Senate; presidential system update.",
      },
      {
        phase: "Revolving door",
        timeframe: "Year 3-5",
        description: "Lifetime lobbying bans for senior officials; OGE subpoena authority.",
      },
    ],
  },
  {
    id: "FIX-DRUG-001",
    category: "Drug Pricing",
    title: "Prescription Drug Price Negotiation",
    problem:
      "Americans pay peer-leading prices for insulin, cancer drugs, and specialty therapies. Limited Medicare negotiation and rebate opacity leave patients rationing doses while pharma posts record margins.",
    proposedFix:
      "Expand Medicare negotiation to all brand drugs after a short exclusivity window. Allow HHS to reference international prices for launches. Cap insulin and essential medicines. Penalize patent evergreening and pay-for-delay deals. Pass negotiated savings to commercial plans and uninsured patients.",
    whyItWorks:
      "Governments that bargain pay less for the same molecules. Negotiation plus generic competition after exclusivity preserves innovation incentives without blank-check pricing forever.",
    whyPeopleCallItExtreme:
      "Pharma ads call negotiation price controls that kill cures, recycling claims CBO analyses have repeatedly shown overstate innovation collapse.",
    theGaslight:
      "They say U.S. patients fund the world's R&D so high prices are patriotic. Much R&D is publicly funded; monopoly pricing after launch is rent extraction, not a lab coat.",
    alreadyWorksWhere:
      "Every other major OECD buyer negotiates or sets reference prices. VA and Medicaid already obtain lower prices than Medicare Part D did before limited negotiation began.",
    economicImpact:
      "Federal and household savings in the tens of billions annually. Fewer medical bankruptcies from specialty drugs; employers see lower premium growth.",
    costOfInaction:
      "Without negotiation and rebate reform, Americans keep paying peer-leading prices for insulin, cancer drugs, and specialty therapies. KFF tracking shows out-of-pocket burdens remain extreme without structural bargaining power.",
    costOfInactionCitations: ["cost_inaction_drugs", "kff_drug_costs", "cbo_drug_negotiation"],
    safeguards: [
      "Guaranteed exclusivity window before negotiation to preserve true innovation returns",
      "Public negotiation memos with redactions only for narrow trade secrets",
      "Anti-shortage stockpile authority when companies threaten supply withdrawals",
      "Annual GAO review of evergreening patent thickets",
    ],
    citations: ["kff_drug_costs", "cbo_drug_negotiation", "cost_inaction_drugs", "oecd_health"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Drug pricing legislation",
        url: "https://www.congress.gov/",
        status: "Track Medicare negotiation expansion and insulin-cap bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Expand negotiation",
        timeframe: "Year 1-2",
        description: "Widen Medicare negotiation classes; insulin and essential-drug caps.",
      },
      {
        phase: "Reference pricing",
        timeframe: "Year 2-3",
        description: "International reference bands for new launches; pass-through to commercial markets.",
      },
      {
        phase: "Patent abuse",
        timeframe: "Year 3-5",
        description: "Evergreening and pay-for-delay enforcement with FTC/DOJ capacity.",
      },
    ],
  },
  {
    id: "FIX-WAGE-001",
    category: "Labor Standards",
    title: "Living Wage & Overtime Restoration",
    problem:
      "The federal minimum wage has been stuck at $7.25 since 2009 while housing and food costs soared. Overtime thresholds leave millions of salaried workers unpaid for extra hours. Wage theft remains common in low-wage sectors.",
    proposedFix:
      "Raise the federal minimum wage to $17/hour phased over five years with regional floors and automatic indexing. Restore overtime eligibility to middle-income salaried workers. Triple damages for wage theft. Ban noncompete clauses for workers under $150,000.",
    whyItWorks:
      "Higher floors raise pay for low-wage workers with modest employment effects when phased. Overtime restoration returns time-and-a-half to workers misclassified as managers in name only.",
    whyPeopleCallItExtreme:
      "Low-wage employers call $17 a job killer and claim overtime rules punish ambition, despite EPI research and city/state increases that did not produce the mass layoffs lobbyists predicted.",
    theGaslight:
      "They say teenagers will lose jobs and robots will replace everyone. Most minimum-wage workers are adults; productivity growth already replaced workers while wages stagnated - the issue is bargaining power, not physics.",
    alreadyWorksWhere:
      "Many U.S. cities and states already exceed $15. Australia and much of Europe set higher national floors. DOL overtime rules historically covered more salaried workers before erosion.",
    economicImpact:
      "Billions in annual wage gains for low- and middle-income households recirculate as local demand. Reduced turnover cuts hiring costs for compliant employers.",
    costOfInaction:
      "Keeping $7.25 and eroded overtime locks in poverty wages despite record profits. EPI and BLS series show wage stagnation for typical workers while executive pay diverges.",
    costOfInactionCitations: ["epi_minimum_wage", "dol_overtime", "cost_inaction_labor"],
    safeguards: [
      "Regional floors so high-cost metros cannot undercut living costs",
      "Small-business technical assistance during phase-in",
      "DOL wage-and-hour staffing floors indexed to covered workers",
      "Public employer wage-theft database for repeat violators",
    ],
    citations: ["epi_minimum_wage", "dol_overtime", "bls_wages", "epi_unions"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Minimum wage and overtime legislation",
        url: "https://www.congress.gov/",
        status: "Track Raise the Wage and overtime-threshold bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Phase-in wage",
        timeframe: "Year 1-5",
        description: "Step federal minimum to $17 with indexing thereafter.",
      },
      {
        phase: "Overtime restore",
        timeframe: "Year 1-2",
        description: "Raise salary threshold so middle-income workers regain overtime.",
      },
      {
        phase: "Wage theft",
        timeframe: "Year 2-4",
        description: "Triple damages; DOL hiring surge; public violator database.",
      },
    ],
  },
  {
    id: "FIX-AT-001",
    category: "Antitrust",
    title: "Antitrust Revival & Monopoly Breakups",
    problem:
      "Concentrated tech, pharma, agribusiness, and retail power raises prices, crushes startups, and buys political influence. Decades of weak merger enforcement treated monopoly as efficient until consumers and workers paid the bill.",
    proposedFix:
      "Restore aggressive Clayton and Sherman Act enforcement. Ban mergers above bright-line market-share thresholds unless proven to benefit consumers and workers. Structural separation for dominant platforms' adjacent lines of business. Fund FTC and DOJ Antitrust hiring. Private right of action expansions for workers harmed by no-poach and wage collusion.",
    whyItWorks:
      "Competition lowers prices and widens opportunity. Breakups and bright-line merger rules prevent monopolies from becoming faits accomplis that regulators can only fine after the damage.",
    whyPeopleCallItExtreme:
      "Monopoly firms call breakups punishment for success and claim scale equals innovation, rewriting antitrust history that once routinely split concentrating giants.",
    theGaslight:
      "They say consumers love free services so monopoly is fine. Free often means paid in data, lock-in, and higher prices elsewhere in the conglomerate; workers face wage suppression in concentrated labor markets.",
    alreadyWorksWhere:
      "EU competition cases and U.S. history from Standard Oil to AT&T show structural remedies work. Recent FTC/DOJ cases against tech and pharma point the way if funded and sustained.",
    economicImpact:
      "Lower consumer prices and higher startup formation. Worker wage gains where labor-market concentration falls. Reduced political spending power from fewer mega-firms.",
    costOfInaction:
      "Without revival, mergers keep raising prices and shrinking choice across tech, pharma, and retail. FTC and DOJ capacity gaps leave monopoly conduct cheaper than compliance.",
    costOfInactionCitations: ["ftc_antitrust", "doj_antitrust", "policy_media"],
    safeguards: [
      "Worker and consumer harm tests in merger review, not price alone",
      "Cooling-off bans on revolving-door moves from FTC/DOJ to client firms",
      "Public merger-challenge memos for rejected and accepted deals",
      "Circuit-split review commission to restore coherent antitrust doctrine",
    ],
    citations: ["ftc_antitrust", "doj_antitrust", "policy_media"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Antitrust legislation",
        url: "https://www.congress.gov/",
        status: "Track merger bright-line and platform separation bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Capacity",
        timeframe: "Year 1",
        description: "Double FTC/DOJ antitrust staffing; issue bright-line merger guidelines.",
      },
      {
        phase: "Structural cases",
        timeframe: "Year 2-4",
        description: "Pursue breakups and separations in dominant platform and pharma markets.",
      },
      {
        phase: "Labor collusion",
        timeframe: "Year 2-5",
        description: "No-poach and wage-fixing enforcement with private rights of action.",
      },
    ],
  },
  {
    id: "FIX-CJ-001",
    category: "Climate Jobs",
    title: "Climate Jobs Just Transition Compact",
    problem:
      "Fossil communities face boom-bust cycles while clean-energy jobs often lack union standards and local hire. Workers are told to choose between climate action and their livelihoods because policy failed to pair both.",
    proposedFix:
      "Guarantee five years of wage and benefit replacement for displaced fossil workers plus first-hire rights on clean projects. Project-labor agreements and prevailing wage on all federally funded clean builds. Community ownership stakes in new renewable capacity. Apprenticeship pipelines through unions and community colleges.",
    whyItWorks:
      "Just transition turns climate policy into a jobs program instead of a pink-slip letter. Union standards raise quality and local multipliers so clean energy is not a race to the bottom.",
    whyPeopleCallItExtreme:
      "Fossil lobbyists call just transition a bribe and claim climate jobs are fake, while taking public subsidies for decades and leaving abandoned wells behind.",
    theGaslight:
      "They say climate policy hates coal country. Leaving workers without a bridge is the anti-worker policy; this compact exists so communities are not disposable.",
    alreadyWorksWhere:
      "Germany's coal-region transition funds and U.S. IRA labor standards show pairing climate and labor works when funded. Union apprenticeship models already train electricians and pipefitters for clean builds.",
    economicImpact:
      "Millions of high-road clean-energy jobs with local hire. Reduced opioid and out-migration crises in fossil regions when paychecks continue through transition.",
    costOfInaction:
      "Without a just transition, climate delay continues under jobs rhetoric while closures still arrive unmanaged. EPI and climate-job modeling show high-road standards determine whether clean energy rebuilds the middle class.",
    costOfInactionCitations: ["cost_inaction_climate", "policy_economy", "epi_unions"],
    safeguards: [
      "Wage replacement administered by DOL with union oversight boards",
      "Local-hire and tribal-hire preferences on federal clean projects",
      "Abandoned well cleanup jobs prioritized for displaced workers",
      "Annual public accounting of transition dollars by county",
    ],
    citations: ["policy_environment", "policy_economy", "epi_unions", "cost_inaction_climate"],
    billReferences: [
      {
        number: "H.R. 7941",
        title: "Green New Deal Resolution",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/7941",
        status: "Introduced - framework including just transition",
      },
    ],
    implementationTimeline: [
      {
        phase: "Wage bridge",
        timeframe: "Year 1",
        description: "Stand up five-year wage replacement and first-hire registries.",
      },
      {
        phase: "High-road builds",
        timeframe: "Year 1-5",
        description: "PLA and prevailing-wage mandates on all federal clean projects.",
      },
      {
        phase: "Community ownership",
        timeframe: "Year 3-10",
        description: "30% community or tribal ownership stakes on new federally aided capacity.",
      },
    ],
  },
  {
    id: "FIX-MH-001",
    category: "Mental Health",
    title: "Mental Health Parity & Community Care",
    problem:
      "Treatable mental illness goes under-covered while ER boarding and incarceration substitute for care. Parity laws exist on paper while networks ghost patients and rural areas lack clinicians.",
    proposedFix:
      "Enforce true mental-health parity with network-adequacy penalties. Fund community behavioral health centers in every county. Integrate mental health into Medicare for All transition. Divert low-level mental-health crises from jails to mobile crisis teams. Expand loan forgiveness for psychiatrists, psychologists, and peer specialists.",
    whyItWorks:
      "Community care and parity reduce suicide, homelessness, and jail bookings. Early treatment costs less than crisis incarceration and ER boarding.",
    whyPeopleCallItExtreme:
      "Opponents call community care soft on crime and claim parity mandates raise premiums, ignoring that untreated illness already drives premium and public-safety costs.",
    theGaslight:
      "They say people just need personal responsibility. NIMH prevalence data show biological and social drivers; access gaps, not character gaps, explain untreated rates.",
    alreadyWorksWhere:
      "Certified Community Behavioral Health Clinics and mobile crisis pilots in multiple states cut ER and jail use. Peer nations embed mental health in universal systems rather than carceral defaults.",
    economicImpact:
      "Lower ER and incarceration costs; higher employment among people with managed conditions. Employers see reduced absenteeism when networks actually answer the phone.",
    costOfInaction:
      "Without parity enforcement and community capacity, jails and ERs remain the de facto mental-health system. NIMH documents the cost of untreated conditions in disability, suicide risk, and lost productivity.",
    costOfInactionCitations: ["nimh_mental_health", "gao_healthcare", "policy_healthcare"],
    safeguards: [
      "Network-adequacy audits with automatic fines for ghost networks",
      "Peer specialist certification funded as a Medicaid billable service",
      "Crisis-team response standards under 30 minutes in urban areas, 60 in rural",
      "Annual public dashboards of wait times and jail diversion outcomes",
    ],
    citations: ["nimh_mental_health", "policy_healthcare", "gao_healthcare"],
    billReferences: [
      {
        number: "Congress.gov",
        title: "Mental health parity legislation",
        url: "https://www.congress.gov/",
        status: "Track parity enforcement and CCBHC expansion bills",
      },
    ],
    implementationTimeline: [
      {
        phase: "Parity teeth",
        timeframe: "Year 1",
        description: "Network-adequacy penalties; ghost-network audits begin.",
      },
      {
        phase: "Community centers",
        timeframe: "Year 1-4",
        description: "CCBHC or equivalent in every county; mobile crisis teams statewide.",
      },
      {
        phase: "Workforce",
        timeframe: "Year 2-5",
        description: "Loan forgiveness and peer specialist pipelines meet shortage-area targets.",
      },
    ],
  },
];

const safeguards = [
  {
    id: "SAFE-001",
    title: "Anti-Corruption Architecture",
    description:
      "Structural reforms to sever the revolving door between government, lobbying, and corporate interests - making corruption not just illegal but structurally difficult.",
    mechanisms: [
      "Lifetime lobbying ban for former members of Congress and senior executive branch officials",
      "Public financing of all federal elections with real-time disclosure of contributions over $200",
      "Independent Office of Public Integrity with power to refer cases directly to federal prosecutors",
      "Mandatory blind trusts for all federal judges and agency heads",
    ],
    citations: ["safeguard_anticorruption", "opensecrets_dark_money", "stock_act"],
    whyItWorks:
      "Structural bans and public financing remove the profit model of influence-peddling instead of relying on after-the-fact scandals.",
    whyPeopleCallItExtreme:
      "Lobbyists call lifetime bans un-American and disclosure harassment, because sunlight and closed revolving doors shrink their product.",
    theGaslight:
      "They say expertise requires revolving doors. Expertise can advise without selling access; blind trusts and cooling-off periods separate knowledge from cashing in.",
    alreadyWorksWhere:
      "Many democracies restrict paid lobbying by ex-ministers and require donor transparency. U.S. STOCK Act and state ethics codes are incomplete versions of the same idea.",
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
      "Emergency proclamations and NSPMs expire after 90 days unless Congress renews",
      "National-security memoranda must be logged in a public index within 14 days unless a narrow classified annex applies",
    ],
    citations: ["safeguard_executive", "crs_executive"],
    whyItWorks:
      "Sunsets and funding cutoffs force Congress back into war and emergency decisions instead of permanent one-person rule by memo.",
    whyPeopleCallItExtreme:
      "Strong-executive theorists call constraints weakness, as if the Constitution's separation of powers were optional in a crisis.",
    theGaslight:
      "They say emergencies cannot wait for Congress. Ninety days is ample for renewal votes; endless emergencies are the authoritarian pattern, not the exception.",
    alreadyWorksWhere:
      "Parliamentary democracies routinely time-limit emergency powers. U.S. War Powers Resolution and NEA frameworks already gesture at limits that SAFE-002 makes automatic and funded.",
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
    citations: ["safeguard_judicial"],
    whyItWorks:
      "Regular appointments reduce lottery-of-death court packing by mortality and restore ethics teeth the Court refused to give itself.",
    whyPeopleCallItExtreme:
      "Defenders of the status quo call term limits court packing, while lifetime seats already pack the Court through actuarial chance and strategic retirements.",
    theGaslight:
      "They say any change politicizes the Court. The Court is already political; ethics vacuums and 6-3 minority-rule outcomes are the politicization.",
    alreadyWorksWhere:
      "Constitutional courts in Europe and elsewhere use renewable or age-limited terms. U.S. circuit structure already maps to a 13-justice logic this safeguard formalizes.",
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
      "Federal Register and White House presidential-action URLs archived daily with checksum manifests",
      "Agency FOIA dashboards must publish backlog age percentiles monthly, not annual averages alone",
    ],
    citations: ["safeguard_transparency", "pew_trust", "opensecrets_dark_money"],
    whyItWorks:
      "Real-time spending and lobbying logs let journalists and voters catch capture before it hardens into irreversible policy.",
    whyPeopleCallItExtreme:
      "Officials call dashboards burdensome red tape. The expensive option is undisclosed fraud and influence that GAO and IGs find after the money is gone.",
    theGaslight:
      "They say transparency endangers security and privacy. SAFE-004 targets government spending and lobbying, not private diaries; classified annexes remain for narrow cases.",
    alreadyWorksWhere:
      "USASpending.gov and FOIA are incomplete U.S. prototypes. Nordic open-government practices and OpenSecrets aggregations show the demand these mandates would meet by default.",
  },
];

for (const p of policies) assertClean(p, p.id);
for (const s of safeguards) assertClean(s, s.id);

if (policies.length < 20) throw new Error(`Need 20+ policies, got ${policies.length}`);

function serStr(s) {
  return JSON.stringify(s);
}

function serPolicy(p) {
  const lines = [];
  lines.push(`  {`);
  lines.push(`    id: ${serStr(p.id)},`);
  lines.push(`    category: ${serStr(p.category)},`);
  lines.push(`    title: ${serStr(p.title)},`);
  lines.push(`    problem:`);
  lines.push(`      ${serStr(p.problem)},`);
  lines.push(`    proposedFix:`);
  lines.push(`      ${serStr(p.proposedFix)},`);
  lines.push(`    whyItWorks:`);
  lines.push(`      ${serStr(p.whyItWorks)},`);
  lines.push(`    whyPeopleCallItExtreme:`);
  lines.push(`      ${serStr(p.whyPeopleCallItExtreme)},`);
  lines.push(`    theGaslight:`);
  lines.push(`      ${serStr(p.theGaslight)},`);
  lines.push(`    alreadyWorksWhere:`);
  lines.push(`      ${serStr(p.alreadyWorksWhere)},`);
  lines.push(`    economicImpact:`);
  lines.push(`      ${serStr(p.economicImpact)},`);
  lines.push(`    costOfInaction:`);
  lines.push(`      ${serStr(p.costOfInaction)},`);
  lines.push(`    costOfInactionCitations: [`);
  for (const c of p.costOfInactionCitations) {
    lines.push(`      citations.${c},`);
  }
  lines.push(`    ],`);
  lines.push(`    safeguards: [`);
  for (const s of p.safeguards) lines.push(`      ${serStr(s)},`);
  lines.push(`    ],`);
  lines.push(`    citations: [`);
  for (const c of p.citations) lines.push(`      citations.${c},`);
  lines.push(`    ],`);
  if (p.billReferences?.length) {
    lines.push(`    billReferences: [`);
    for (const b of p.billReferences) {
      lines.push(`      {`);
      lines.push(`        number: ${serStr(b.number)},`);
      lines.push(`        title: ${serStr(b.title)},`);
      lines.push(`        url: ${serStr(b.url)},`);
      lines.push(`        status: ${serStr(b.status)},`);
      lines.push(`      },`);
    }
    lines.push(`    ],`);
  }
  if (p.implementationTimeline?.length) {
    lines.push(`    implementationTimeline: [`);
    for (const ph of p.implementationTimeline) {
      lines.push(`      {`);
      lines.push(`        phase: ${serStr(ph.phase)},`);
      lines.push(`        timeframe: ${serStr(ph.timeframe)},`);
      lines.push(`        description:`);
      lines.push(`          ${serStr(ph.description)},`);
      lines.push(`      },`);
    }
    lines.push(`    ],`);
  }
  lines.push(`  }`);
  return lines.join("\n");
}

function serSafeguard(s) {
  const lines = [];
  lines.push(`  {`);
  lines.push(`    id: ${serStr(s.id)},`);
  lines.push(`    title: ${serStr(s.title)},`);
  lines.push(`    description:`);
  lines.push(`      ${serStr(s.description)},`);
  lines.push(`    mechanisms: [`);
  for (const m of s.mechanisms) lines.push(`      ${serStr(m)},`);
  lines.push(`    ],`);
  lines.push(`    citations: [`);
  for (const c of s.citations) lines.push(`      citations.${c},`);
  lines.push(`    ],`);
  lines.push(`    whyItWorks:`);
  lines.push(`      ${serStr(s.whyItWorks)},`);
  lines.push(`    whyPeopleCallItExtreme:`);
  lines.push(`      ${serStr(s.whyPeopleCallItExtreme)},`);
  lines.push(`    theGaslight:`);
  lines.push(`      ${serStr(s.theGaslight)},`);
  lines.push(`    alreadyWorksWhere:`);
  lines.push(`      ${serStr(s.alreadyWorksWhere)},`);
  lines.push(`  }`);
  return lines.join("\n");
}

const out = `import type { PolicyFix, SafeguardItem } from "@/lib/types";
import { citations } from "./citations";

export const policyFixes: PolicyFix[] = [
${policies.map(serPolicy).join(",\n")}
];

export const safeguardItems: SafeguardItem[] = [
${safeguards.map(serSafeguard).join(",\n")}
];

/** All shareable blueprint page IDs (policy fixes + safeguards) */
export const blueprintPageIds: string[] = [
  ...policyFixes.map((p) => p.id),
  ...safeguardItems.map((s) => s.id),
];

export function blueprintDetailPath(id: string): string {
  return \`/blueprint/\${encodeURIComponent(id)}\`;
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
`;

writeFileSync(OUT, out);
console.log(`Wrote ${policies.length} policies and ${safeguards.length} safeguards to ${OUT}`);
