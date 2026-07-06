/** Curated side-by-side comparison of major Project 2025 trackers */

export interface TrackerComparisonRow {
  feature: string;
  observer: string;
  cpr: string;
  watch2025: string;
  sunrise?: string;
}

export const trackerComparisonRows: TrackerComparisonRow[] = [
  {
    feature: "Primary focus",
    observer: "300+ Heritage playbook objectives mapped to implementation status",
    cpr: "Executive orders & regulatory rollbacks across 20 federal agencies",
    watch2025: "Democracy-threat initiatives with community-maintained status flags",
    sunrise: "Verified actions with severity scoring + progressive policy links",
  },
  {
    feature: "Data model",
    observer: "Objective-level progress charts by agency and policy area",
    cpr: "Agency-by-agency executive action log with legal citations",
    watch2025: "Initiative cards with proposed / in-progress / completed states",
    sunrise: "Timeline events with primary sources, sectors, and blueprint fixes",
  },
  {
    feature: "Executive orders",
    observer: "Tracks EO implementation against Mandate chapters",
    cpr: "Deep coverage — EO text, Federal Register links, litigation notes",
    watch2025: "High-level EO status with crowd-sourced updates",
    sunrise: "EOs logged with whitehouse.gov + Federal Register citations",
  },
  {
    feature: "Regulatory actions",
    observer: "Rulemaking and agency guidance mapped to objectives",
    cpr: "Strong — CPR specializes in regulatory rollback monitoring",
    watch2025: "Moderate — highlights major rule changes",
    sunrise: "Cross-referenced to CPR and observer on each event",
  },
  {
    feature: "Agency breakdown",
    observer: "Per-agency dashboards and completion percentages",
    cpr: "20-agency filter with dedicated landing pages",
    watch2025: "Topic tags; less granular agency view",
    sunrise: "Impacted sectors + external tracker deep links per event",
  },
  {
    feature: "Civil liberties / litigation",
    observer: "Limited — implementation focus, not legal analysis",
    cpr: "Court challenges noted on select regulatory actions",
    watch2025: "Democracy-risk framing; some litigation references",
    sunrise: "Links to ACLU, Brennan Center, and court filings where relevant",
  },
  {
    feature: "Community input",
    observer: "GitHub-sourced contributions; RusticGorilla community",
    cpr: "Professional researchers; less open contribution",
    watch2025: "Open contribution model with public data",
    sunrise: "Aggregates all three — we don't compete, we cross-reference",
  },
  {
    feature: "Severity / urgency",
    observer: "Progress % only — no harm scoring",
    cpr: "Agency impact labels; no unified severity scale",
    watch2025: "Status flags without numeric severity",
    sunrise: "1–10 severity score with aggregate charts and filters",
  },
  {
    feature: "Policy alternatives",
    observer: "None — monitoring only",
    cpr: "Occasional reform recommendations in reports",
    watch2025: "None — watchdog only",
    sunrise: "Every high-severity event links to a progressive blueprint fix",
  },
  {
    feature: "Best for",
    observer: "Seeing which Heritage objectives are being checked off",
    cpr: "Regulatory lawyers, policy staff, and agency watchers",
    watch2025: "Quick community pulse on democracy threats",
    sunrise: "One shareable page with filters, sources, and what to build next",
  },
];

export const trackerComparisonSources = [
  {
    name: "project2025.observer",
    url: "https://www.project2025.observer/",
  },
  {
    name: "CPR Executive Action Tracker",
    url: "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
  },
  {
    name: "watch2025.org",
    url: "https://watch2025.org/",
  },
];
