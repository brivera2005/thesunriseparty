import { timelineEvents } from "./timeline-events";
import type { TimelineEvent } from "@/lib/types";

/** Heritage Mandate for Leadership (2025) — 30 chapters in 5 sections */
export interface P2025Chapter {
  id: string;
  number: number;
  title: string;
  section: string;
  sectionNumber: number;
  author: string;
  /** p2025Pillar values on our events that map to this chapter */
  pillars: string[];
  /** Official Project 2025 policy hub */
  heritageUrl: string;
}

const POLICY_HUB = "https://www.project2025.org/policy/";
const MANDATE_PDF =
  "https://s3.documentcloud.org/documents/25180135/2025_mandateforleadership_full-1.pdf";

export const P2025_SECTIONS = [
  "Taking the Reins of Government",
  "The Common Defense",
  "The General Welfare",
  "The Economy",
  "Independent Regulatory Agencies",
] as const;

export const p2025Chapters: P2025Chapter[] = [
  {
    id: "ch01-white-house",
    number: 1,
    title: "White House Office",
    section: "Taking the Reins of Government",
    sectionNumber: 1,
    author: "Rick Dearborn",
    pillars: ["Day One Executive Actions", "Overall Progress", "Democratic Legitimacy"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch02-eop",
    number: 2,
    title: "Executive Office of the President",
    section: "Taking the Reins of Government",
    sectionNumber: 1,
    author: "Russ Vought",
    pillars: [
      "Day One Executive Actions",
      "Agency Restructuring",
      "Legislative Rollbacks",
      "Ethics & Transparency",
      "Transparency",
    ],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch03-personnel",
    number: 3,
    title: "Central Personnel Agencies",
    section: "Taking the Reins of Government",
    sectionNumber: 1,
    author: "Donald Devine, Dennis Dean Kirk, Paul Dans",
    pillars: ["Personnel & Civil Service"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch04-defense",
    number: 4,
    title: "Department of Defense",
    section: "The Common Defense",
    sectionNumber: 2,
    author: "Christopher Miller",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch05-dhs",
    number: 5,
    title: "Department of Homeland Security",
    section: "The Common Defense",
    sectionNumber: 2,
    author: "Ken Cuccinelli",
    pillars: ["Immigration Enforcement"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch06-state",
    number: 6,
    title: "Department of State",
    section: "The Common Defense",
    sectionNumber: 2,
    author: "Kiron K. Skinner",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch07-intelligence",
    number: 7,
    title: "Intelligence Community",
    section: "The Common Defense",
    sectionNumber: 2,
    author: "Dustin J. Carmack",
    pillars: ["Intelligence & Security"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch08-media-agencies",
    number: 8,
    title: "Media Agencies (USAGM & CPB)",
    section: "The Common Defense",
    sectionNumber: 2,
    author: "Mora Namdar, Mike Gonzalez",
    pillars: ["Media & Communications"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch09-usaid",
    number: 9,
    title: "Agency for International Development",
    section: "The Common Defense",
    sectionNumber: 2,
    author: "Max Primorac",
    pillars: ["Agency Restructuring", "Health & Global Affairs"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch10-agriculture",
    number: 10,
    title: "Department of Agriculture",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Daren Bakst",
    pillars: ["Agriculture & Nutrition"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch11-education",
    number: 11,
    title: "Department of Education",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Lindsey M. Burke",
    pillars: ["Education", "Education Restructuring"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch12-energy",
    number: 12,
    title: "Department of Energy",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Bernard L. McNamee",
    pillars: ["Energy & Environment", "Regulatory Rollback"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch13-epa",
    number: 13,
    title: "Environmental Protection Agency",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Mandy M. Gunasekara",
    pillars: ["Energy & Environment", "Regulatory Rollback"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch14-hhs",
    number: 14,
    title: "Health and Human Services",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Roger Severino",
    pillars: ["Healthcare", "Health & Global Affairs"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch15-hud",
    number: 15,
    title: "Housing and Urban Development",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Benjamin S. Carson, Sr.",
    pillars: ["Housing & Communities"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch16-interior",
    number: 16,
    title: "Department of the Interior",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "William Perry Pendley",
    pillars: ["Energy & Environment"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch17-doj",
    number: 17,
    title: "Department of Justice",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Gene Hamilton",
    pillars: ["Rule of Law", "Democratic Legitimacy", "Culture & Civil Rights", "DOJ Enforcement"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch18-labor",
    number: 18,
    title: "Department of Labor",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Jonathan Berry",
    pillars: ["Labor & Economy"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch19-transportation",
    number: 19,
    title: "Department of Transportation",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Diana Furchtgott-Roth",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch20-va",
    number: 20,
    title: "Department of Veterans Affairs",
    section: "The General Welfare",
    sectionNumber: 3,
    author: "Brooks D. Tucker",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch21-commerce",
    number: 21,
    title: "Department of Commerce",
    section: "The Economy",
    sectionNumber: 4,
    author: "Thomas F. Gilman",
    pillars: ["Trade & Commerce"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch22-treasury",
    number: 22,
    title: "Department of the Treasury",
    section: "The Economy",
    sectionNumber: 4,
    author: "William L. Walton, Stephen Moore, David R. Burton",
    pillars: ["Financial Regulation"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch23-exim",
    number: 23,
    title: "Export–Import Bank",
    section: "The Economy",
    sectionNumber: 4,
    author: "Veronique de Rugy, Jennifer Hazelton",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch24-fed",
    number: 24,
    title: "Federal Reserve",
    section: "The Economy",
    sectionNumber: 4,
    author: "Paul Winfree",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch25-sba",
    number: 25,
    title: "Small Business Administration",
    section: "The Economy",
    sectionNumber: 4,
    author: "Karen Kerrigan",
    pillars: [],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch26-trade",
    number: 26,
    title: "Trade",
    section: "The Economy",
    sectionNumber: 4,
    author: "Peter Navarro, Kent Lassman",
    pillars: ["Trade & Commerce"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch27-financial",
    number: 27,
    title: "SEC & Consumer Financial Protection Bureau",
    section: "Independent Regulatory Agencies",
    sectionNumber: 5,
    author: "David R. Burton, Robert Bowes",
    pillars: ["Financial Regulation"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch28-fcc",
    number: 28,
    title: "Federal Communications Commission",
    section: "Independent Regulatory Agencies",
    sectionNumber: 5,
    author: "Brendan Carr",
    pillars: ["Media & Communications"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch29-fec",
    number: 29,
    title: "Federal Election Commission",
    section: "Independent Regulatory Agencies",
    sectionNumber: 5,
    author: "Hans A. von Spakovsky",
    pillars: ["Elections & Voting", "Election Enforcement"],
    heritageUrl: POLICY_HUB,
  },
  {
    id: "ch30-ftc",
    number: 30,
    title: "Federal Trade Commission",
    section: "Independent Regulatory Agencies",
    sectionNumber: 5,
    author: "Adam Candeub",
    pillars: ["Consumer Protection"],
    heritageUrl: POLICY_HUB,
  },
];

export const mandatePdfUrl = MANDATE_PDF;

export function getEventsForChapter(
  chapterId: string,
  events: TimelineEvent[] = timelineEvents
): TimelineEvent[] {
  const chapter = p2025Chapters.find((c) => c.id === chapterId);
  if (!chapter || chapter.pillars.length === 0) return [];
  return events.filter(
    (e) => e.p2025Pillar && chapter.pillars.includes(e.p2025Pillar)
  );
}

export function getChapterEventCounts(events: TimelineEvent[] = timelineEvents) {
  return p2025Chapters.map((chapter) => ({
    chapter,
    count: getEventsForChapter(chapter.id, events).length,
    events: getEventsForChapter(chapter.id, events),
  }));
}

export function getChaptersBySection() {
  const grouped = new Map<string, typeof p2025Chapters>();
  for (const chapter of p2025Chapters) {
    const list = grouped.get(chapter.section) ?? [];
    list.push(chapter);
    grouped.set(chapter.section, list);
  }
  return P2025_SECTIONS.map((section) => ({
    section,
    chapters: grouped.get(section) ?? [],
  }));
}

export function getMappedEventCount(events: TimelineEvent[] = timelineEvents) {
  const mapped = new Set<string>();
  for (const chapter of p2025Chapters) {
    for (const event of getEventsForChapter(chapter.id, events)) {
      mapped.add(event.Event_ID);
    }
  }
  return mapped.size;
}

/** Filter events to those mapped to a Heritage Mandate chapter (or all). */
export function filterEventsByChapter(
  events: TimelineEvent[],
  chapterId: string | "all"
): TimelineEvent[] {
  if (chapterId === "all") return events;
  return getEventsForChapter(chapterId, events);
}

export function getChapterById(chapterId: string) {
  return p2025Chapters.find((c) => c.id === chapterId);
}
