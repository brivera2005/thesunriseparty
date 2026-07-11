import {
  Archive,
  BarChart3,
  FileSearch,
  GitCompare,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface MethodologySection {
  id: string;
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export const methodologyIntro = {
  title: "How We Source, Verify, and Score",
  subtitle:
    "Project Sunrise is a transparency project. This page documents exactly how we research, archive, and publish - so you can audit our work the same way we audit power.",
};

/** mailto for reader-submitted corrections - transparency loop */
export const correctionsMailto =
  "mailto:corrections@thesunriseparty.org?subject=Project%20Sunrise%20correction%20request&body=Page%20URL%3A%20%0ASource%20or%20claim%20in%20question%3A%20%0AWhat%20should%20change%3A%20%0AYour%20source%20(if%20any)%3A%20";

export const methodologySections: MethodologySection[] = [
  {
    id: "sourcing",
    icon: FileSearch,
    title: "How We Source",
    paragraphs: [
      "Every tracker event begins with a verifiable government action: executive orders on whitehouse.gov, Federal Register notices, congressional bills, agency press releases, and court filings. We do not publish rumors, anonymous tips, or unsourced social media claims.",
      "Rebuttal Desk entries pair common propaganda claims with responses grounded in the same primary-source standard. When a claim requires institutional analysis - GAO audits, CRS legal memos, Brennan Center voting research - we cite the original report, not a news summary of it.",
    ],
    bullets: [
      "Executive orders and presidential actions from whitehouse.gov",
      "Federal Register rulemakings and agency guidance",
      "Congressional bills, CRS products, and GAO reports",
      "Federal court orders and DOJ press releases",
      "Cross-checks against six independent Project 2025 trackers",
    ],
  },
  {
    id: "verification",
    icon: ShieldCheck,
    title: "How We Verify",
    paragraphs: [
      "Before publication, every outbound link is checked by our validate-links script. URLs that pass are recorded in a verified registry and display a Verified badge in the citation modal. Links that fail are fixed or replaced - we do not ship broken citations.",
      "Each citation includes a Wayback Machine archive link so sources survive political scrubbing. If an agency removes a page, the archived copy remains accessible.",
    ],
    bullets: [
      "Automated HTTP validation on every lib/data URL",
      "Wayback Machine archive on every citation",
      "Source tier badges (Primary / Institutional / Fact-check)",
      "Cross-reference with CPR, project2025.observer, ACLU, Brennan Center, watch2025.org",
    ],
  },
  {
    id: "archiving",
    icon: Archive,
    title: "How We Archive",
    paragraphs: [
      "Political actors routinely delete, redirect, or rewrite official pages. Project Sunrise treats link rot as a feature of authoritarian governance, not an accident. Every citation stores both the live URL and an archive.org snapshot.",
      "JSON exports at /data/events.json and /data/rebuttals.json provide machine-readable copies of our dataset. The RSS feed at /feed.xml syndicates new tracker events for subscribers and researchers.",
    ],
  },
  {
    id: "severity",
    icon: BarChart3,
    title: "How We Score Severity",
    paragraphs: [
      "Each tracker event receives a severity score from 1 to 10 based on scope of impact, reversibility, number of people affected, and democratic legitimacy risk. Scores are editorial judgments grounded in documented harm - not engagement bait.",
      "The democracy threat gauge on the homepage combines average severity with the share of high-severity (8+) events. Sector heatmaps show which policy areas concentrate the most damage over time.",
    ],
    bullets: [
      "1-3: Administrative noise or limited scope",
      "4-6: Significant policy shift with partial reversibility",
      "7-8: Broad harm or institutional weakening",
      "9-10: Existential threats to rights, democracy, or rule of law",
    ],
  },
  {
    id: "cross-ref",
    icon: GitCompare,
    title: "Cross-Referencing External Trackers",
    paragraphs: [
      "We do not claim monopoly on truth. Every tracker event links to independent monitors - Center for Progressive Reform's executive action tracker, project2025.observer, ACLU's Project 2025 explainer, Brennan Center voting research, and watch2025.org.",
      "When external trackers document an action we have not yet logged, we add it in the next content pass. When we disagree on framing, we show both sources and let readers compare.",
    ],
  },
  {
    id: "editorial",
    icon: Scale,
    title: "Transparency & Editorial Standards",
    paragraphs: [
      "Project Sunrise has an anti-plutocracy editorial stance, stated plainly: democracy is being captured by concentrated wealth, and the Heritage Foundation's Project 2025 blueprint was written by institutions funded by billionaires who profit when agencies are gutted and voters lose faith in government.",
      "That is not both-sides theater. We document who wrote the plan, who funded it, who implemented it, and who benefits. We name executive orders, OPM guidance, and congressional votes. When we build the Blueprint, we cite CBO scores and peer-reviewed research.",
      "Propaganda thrives in vagueness; sunlight thrives in specifics. If we cannot prove a claim with a tiered primary or institutional source, we do not publish it.",
    ],
  },
  {
    id: "history-method",
    icon: Archive,
    title: "How We Source Hidden History",
    paragraphs: [
      "Hidden History entries require a textbook narrative people actually encounter and a documented counter-history grounded in National Archives, Library of Congress, National Park Service, Congress.gov, CDC, or equivalent institutional pages.",
      "Each card includes historical rebuttals - the conversational form of the same evidence - so readers can carry receipts into arguments about Lost Cause myths, labor history, coups, and civil-rights rollbacks.",
      "We do not invent archive paths. If a URL fails validation, we replace it or drop the claim. Infinite room for content does not mean infinite room for fiction.",
    ],
    bullets: [
      "Prefer .gov, Smithsonian, LOC, Archives, NPS, CRS, GAO, BLS, Census, CDC, NIH",
      "Wikipedia allowed only as a documented overview with stable article URLs already in the validated set or freshly checked",
      "No em dashes in new copy; plain punctuation only",
      "No invented Federal Register or White House paths - live pages only",
    ],
  },
  {
    id: "corrections",
    icon: ShieldCheck,
    title: "Corrections & Reader Audit",
    paragraphs: [
      "Readers can submit corrections with a page URL, the contested claim, and a better source. We treat corrections as a transparency feature, not a reputation threat.",
      "Changelog versions document content expansion passes so the public can see when counts and methodologies change. Pass numbers are not marketing - they are audit trail.",
    ],
  },
];

export const sourceTierLegend = [
  {
    tier: 1 as const,
    label: "Tier 1 - Primary",
    description: "Federal and state government sources: .gov domains, Federal Register, congress.gov, court opinions.",
    examples: "whitehouse.gov, epa.gov, federalregister.gov, supremecourt.gov",
  },
  {
    tier: 2 as const,
    label: "Tier 2 - Institutional",
    description: "Nonpartisan research bodies and civil-liberty watchdogs with documented methodology.",
    examples: "GAO, CRS, Brennan Center, ACLU, CBO",
  },
  {
    tier: 3 as const,
    label: "Tier 3 - Fact-check",
    description: "Established fact-checking organizations for claim verification and context.",
    examples: "AP, Reuters, PolitiFact, FactCheck.org",
  },
];
