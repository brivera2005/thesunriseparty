/**
 * Pass 26 - add 5 blueprint policies + deepen meta pages
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

const policyCitations = `
  // Pass 26 policy citations
  policy_immigration: {
    id: "policy_immigration",
    title: "Immigration Policy",
    publisher: "Congressional Research Service",
    url: "https://crsreports.congress.gov/",
    waybackUrl: wayback("https://crsreports.congress.gov/"),
    excerpt: "CRS publishes nonpartisan immigration law and border policy analyses for Congress.",
    date: "2025-01-01",
  },
  policy_housing: {
    id: "policy_housing",
    title: "Housing and Urban Development",
    publisher: "U.S. Department of Housing and Urban Development",
    url: "https://www.hud.gov/",
    waybackUrl: wayback("https://www.hud.gov/"),
    excerpt: "HUD publishes housing affordability, homelessness, and fair housing program data.",
    date: "2025-01-01",
  },
  policy_media: {
    id: "policy_media",
    title: "Federal Communications Commission",
    publisher: "FCC",
    url: "https://www.fcc.gov/",
    waybackUrl: wayback("https://www.fcc.gov/"),
    excerpt: "FCC regulates broadcast ownership, spectrum, and communications competition rules.",
    date: "2025-01-01",
  },
  policy_disability: {
    id: "policy_disability",
    title: "Americans with Disabilities Act",
    publisher: "National Archives",
    url: "https://www.archives.gov/milestone-documents/americans-with-disabilities-act",
    waybackUrl: wayback("https://www.archives.gov/milestone-documents/americans-with-disabilities-act"),
    excerpt: "The ADA establishes civil rights protections against disability discrimination.",
    date: "1990-07-26",
  },
  policy_indigenous: {
    id: "policy_indigenous",
    title: "Bureau of Indian Affairs",
    publisher: "U.S. Department of the Interior",
    url: "https://www.bia.gov/",
    waybackUrl: wayback("https://www.bia.gov/"),
    excerpt: "BIA administers programs related to tribal governments, trust land, and federal Indian policy.",
    date: "2025-01-01",
  },
  cost_inaction_housing: {
    id: "cost_inaction_housing",
    title: "Housing Affordability",
    publisher: "U.S. Census Bureau",
    url: "https://www.census.gov/topics/housing.html",
    waybackUrl: wayback("https://www.census.gov/topics/housing.html"),
    excerpt: "Census housing data document cost burdens and tenure gaps that worsen without supply and assistance reforms.",
    date: "2025-01-01",
  },
  cost_inaction_immigration: {
    id: "cost_inaction_immigration",
    title: "Immigration Courts and Backlogs",
    publisher: "Congressional Research Service",
    url: "https://crsreports.congress.gov/",
    waybackUrl: wayback("https://crsreports.congress.gov/"),
    excerpt: "CRS documents multi-year immigration court backlogs that grow without staffing and legal-process reform.",
    date: "2025-01-01",
  },
  hr_housing_voucher: {
    id: "hr_housing_voucher",
    title: "Search housing legislation",
    publisher: "Congress.gov",
    url: "https://www.congress.gov/",
    waybackUrl: wayback("https://www.congress.gov/"),
    excerpt: "Congress.gov indexes federal housing assistance and voucher expansion bills.",
    date: "2025-01-01",
  },
`;

const newPolicies = `
  {
    id: "FIX-IMM-001",
    category: "Immigration",
    title: "Humane Immigration Modernization & Asylum Capacity",
    problem:
      "Multi-year immigration court backlogs, underfunded asylum officers, and enforcement-only politics leave families in limbo while employers exploit unauthorized labor. Citizenship documentation mandates and interior raids expand without parallel legal pathways or due-process capacity.",
    proposedFix:
      "Hire enough immigration judges and asylum officers to clear backlogs within five years. Create earned pathways to citizenship for long-settled workers and Dreamers. Expand legal work visas tied to labor standards. End family detention; use community case management. Restore asylum access at ports of entry with counsel for children.",
    economicImpact:
      "CRS and labor analyses show immigrants raise labor-force growth and entrepreneurship. Legalization raises tax compliance and wage floors by reducing employer leverage over unauthorized workers.",
    costOfInaction:
      "Without court staffing and legal pathways, backlogs keep growing, employers keep a shadowed labor pool, and enforcement-only strategies separate families without fixing root processing failures.",
    costOfInactionCitations: [
      citations.cost_inaction_immigration,
      citations.aclu_immigration,
      citations.policy_immigration,
    ],
    safeguards: [
      "Statutory caps on family detention with judicial review",
      "Independent immigration court under Article I, insulated from AG political control",
      "Annual public backlog dashboards with judge staffing ratios",
      "Labor-standards enforcement paired with any new work-visa expansion",
    ],
    citations: [
      citations.policy_immigration,
      citations.aclu_immigration,
      citations.cost_inaction_immigration,
      citations.dhs_deportation_ops,
    ],
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
        description: "Double immigration judge hiring and asylum officer corps; end family detention contracts.",
      },
      {
        phase: "Legalization & visas",
        timeframe: "Year 2-3",
        description: "Enact earned citizenship for long-settled residents; expand worker visas with wage floors.",
      },
      {
        phase: "Structural independence",
        timeframe: "Year 4-5",
        description: "Move immigration courts to an independent Article I structure with counsel guarantees for children.",
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
    economicImpact:
      "Stable housing raises employment continuity and child educational outcomes. Construction jobs from social housing expand middle-skill employment while cutting shelter and ER costs tied to homelessness.",
    costOfInaction:
      "Without supply and assistance, rent burdens and homelessness keep rising; eviction cascades destroy credit and employment; fair-housing pauses let discrimination harden into neighborhood exclusion.",
    costOfInactionCitations: [
      citations.cost_inaction_housing,
      citations.policy_housing,
      citations.hud_fair_housing_pause,
    ],
    safeguards: [
      "Tenant right to counsel in eviction courts receiving federal funds",
      "Anti-displacement rules for any federally subsidized redevelopment",
      "Public land disposition preference for social housing over speculative sale",
      "Annual homelessness point-in-time transparency with HUD Inspector General audits",
    ],
    citations: [
      citations.policy_housing,
      citations.cost_inaction_housing,
      citations.hud_fair_housing_pause,
    ],
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
        description: "Fully fund vouchers for currently eligible waitlists; ban algorithmic rent collusion.",
      },
      {
        phase: "Build social housing",
        timeframe: "Year 2-4",
        description: "Federal capital grants for municipal social-housing authorities; zoning preemption for affordable density near transit.",
      },
      {
        phase: "Fair housing restoration",
        timeframe: "Year 3-5",
        description: "Restore disparate-impact enforcement and affirmatively furthering fair housing rules.",
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
    economicImpact:
      "Local journalism employment rebounds; advertisers gain clearer markets; reduced misinformation externalities lower democratic instability costs that markets do not price.",
    costOfInaction:
      "Without pluralism rules, news deserts expand, capture worsens, and voters face algorithmically amplified propaganda with fewer local reporters to check it.",
    costOfInactionCitations: [
      citations.policy_media,
      citations.fcc_media_policy,
      citations.dark_money_transparency,
    ],
    safeguards: [
      "First Amendment-compliant structural rules (ownership, disclosure) rather than viewpoint censorship boards",
      "Independent public-media trust insulated from annual partisan zero-outs",
      "Journalist shield protections paired with platform transparency mandates",
      "Merger review with democracy-impact analysis, not price effects alone",
    ],
    citations: [
      citations.policy_media,
      citations.fcc_broadcast_rules,
      citations.fcc_media_policy,
      citations.dark_money_transparency,
    ],
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
        description: "Mandatory political ad libraries; aggressive merger challenges for news and platform deals.",
      },
      {
        phase: "Ownership & local news",
        timeframe: "Year 2-3",
        description: "Tighten ownership caps; launch spectrum-fee journalism endowment.",
      },
      {
        phase: "Interoperability",
        timeframe: "Year 3-5",
        description: "Platform data-portability and open-protocol requirements for dominant networks.",
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
    economicImpact:
      "Community care costs less than unnecessary institutionalization over time and expands labor-force participation for disabled people and family caregivers.",
    costOfInaction:
      "Without HCBS entitlements and ADA enforcement, institutionalization and poverty persist; Willowbrook-era warehousing returns in slower bureaucratic form.",
    costOfInactionCitations: [
      citations.policy_disability,
      citations.gao_healthcare,
      citations.policy_healthcare,
    ],
    safeguards: [
      "Olmstead enforcement unit with independent monitoring",
      "Ban new federal funds for institutions that fail community-integration benchmarks",
      "Care-worker collective bargaining recognition in federally funded programs",
      "Annual ADA compliance audits of federally assisted transit agencies",
    ],
    citations: [
      citations.policy_disability,
      citations.gao_healthcare,
      citations.policy_healthcare,
    ],
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
        description: "Convert HCBS waivers into mandatory Medicaid benefits with federal match boost.",
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
    economicImpact:
      "Tribal self-determination raises local governance capacity and reduces crisis spending from health and public-safety underfunding. Consent-based permitting reduces litigation delay compared with imposed extraction.",
    costOfInaction:
      "Without treaty enforcement and IHS parity, health gaps and land conflicts persist; extractive permits without consent repeat Standing Rock-style militarized confrontations.",
    costOfInactionCitations: [
      citations.policy_indigenous,
      citations.federal_lands_drilling,
      citations.energy_emergency_eo,
    ],
    safeguards: [
      "Tribal consultation that requires consent, not checkbox notice",
      "Independent treaty-rights ombuds with subpoena power",
      "IHS funding formulas insulated from annual hostage-taking",
      "Sacred-site veto overlapping federal land dispositions",
    ],
    citations: [
      citations.policy_indigenous,
      citations.federal_lands_drilling,
      citations.blm_hardrock_mining,
    ],
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
        description: "Enact FPIC standard; streamline land-into-trust; pause conflicting extractive leases.",
      },
      {
        phase: "Health parity",
        timeframe: "Year 2-4",
        description: "Fund IHS to FEHB-comparable levels; expand tribal self-governance compacts.",
      },
      {
        phase: "Truth & repatriation",
        timeframe: "Year 3-5",
        description: "Boarding-school commission with records access; accelerate NAGPRA repatriations.",
      },
    ],
  },
`;

// Add citations
{
  const file = data("citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 26 policy citations")) {
    // tracker script may have already closed; insert before final };
    if (src.includes("Pass 26 tracker citations")) {
      src = src.replace(/\n};\s*$/, ",\n" + policyCitations + "\n};\n");
    } else {
      src = src.replace(/\n};\s*$/, ",\n" + policyCitations + "\n};\n");
    }
    writeFileSync(file, src);
    console.log("policy citations added");
  } else console.log("policy citations exist");
}

// Add policies before closing of policyFixes array
{
  const file = data("policies.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("FIX-IMM-001")) {
    src = src.replace(/\n\];\s*\n\nexport const safeguardItems/, "\n" + newPolicies + "\n];\n\nexport const safeguardItems");
    writeFileSync(file, src);
    console.log("policies added");
  } else console.log("policies exist");
}

console.log("blueprint phase done");
