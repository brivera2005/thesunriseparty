import type { TrackerSource } from "@/lib/types";

/** Verified external Project 2025 trackers — cross-reference fallbacks. */
export const trackerSources: TrackerSource[] = [
  {
    id: "observer",
    name: "project2025.observer",
    url: "https://www.project2025.observer/",
    description:
      "Community-driven tracker mapping 300+ Heritage objectives to real-world implementation with agency breakdowns and progress charts.",
    publisher: "Community / RusticGorilla",
    type: "community",
  },
  {
    id: "heritage",
    name: "Project 2025 (Heritage Foundation)",
    url: "https://www.project2025.org/",
    description:
      "The source document — the 922-page Mandate for Leadership and policy playbook authored by the Heritage Foundation and allied groups.",
    publisher: "Heritage Foundation",
    type: "source-document",
  },
  {
    id: "cpr",
    name: "CPR Executive Action Tracker",
    url: "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
    description:
      "Center for Progressive Reform and Governing for Impact monitor regulatory and administrative actions across 20 federal agencies.",
    publisher: "Center for Progressive Reform",
    type: "watchdog",
  },
  {
    id: "watch2025",
    name: "watch2025.org",
    url: "https://watch2025.org/",
    description:
      "Open democracy watchdog tracking implementation status of Project 2025 initiatives with community-maintained data.",
    publisher: "watch2025.org",
    type: "community",
  },
  {
    id: "aclu",
    name: "ACLU — Project 2025 Explained",
    url: "https://www.aclu.org/project-2025-explained",
    description:
      "Legal analysis of civil liberties threats posed by Project 2025 proposals, with litigation updates and rights guidance.",
    publisher: "American Civil Liberties Union",
    type: "legal",
  },
  {
    id: "brennan",
    name: "Brennan Center — Voting Laws",
    url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review",
    description:
      "Research on democratic backsliding, voting restrictions, and institutional capture — tracking state-level threats to free and fair elections.",
    publisher: "Brennan Center for Justice",
    type: "watchdog",
  },
];

export const observerBase = "https://www.project2025.observer";
export const cprTrackerBase =
  "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/";
