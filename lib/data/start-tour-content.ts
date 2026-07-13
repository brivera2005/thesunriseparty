import {
  Activity,
  BookOpen,
  Compass,
  GitBranch,
  History,
  Landmark,
  MessageSquareQuote,
  type LucideIcon,
} from "lucide-react";
import type { SectionId } from "@/lib/section-theme";

export interface TourStep {
  step: number;
  title: string;
  /** One sentence: what this tool is */
  whatItIs: string;
  /** One sentence: what you do there */
  whatYouDo: string;
  icon: LucideIcon;
  href: string;
  cta: string;
  section: SectionId;
}

export const startTourIntro = {
  title: "Here's what you can do.",
  subtitle: "Open any tool. Skip anytime.",
  skipLabel: "Skip to homepage",
};

export const tourSteps: TourStep[] = [
  {
    step: 1,
    title: "Project 2025 Tracker",
    whatItIs:
      "What's happening now, scored by how bad it is, with receipts.",
    whatYouDo: "Filter by category or severity, then open any event.",
    icon: Activity,
    href: "/tracker",
    cta: "Open Tracker",
    section: "tracker",
  },
  {
    step: 2,
    title: "Rebuttal Desk",
    whatItIs: "Someone just lied to you. Here's the answer with sources.",
    whatYouDo:
      "Browse a claim, copy the response, or practice in Study and Quiz.",
    icon: MessageSquareQuote,
    href: "/rebuttal",
    cta: "Open Rebuttal Desk",
    section: "rebuttal",
  },
  {
    step: 3,
    title: "Legislation",
    whatItIs:
      "Live bills in Congress. Who sponsored them. How they voted.",
    whatYouDo: "Scan active bills and read the progressive analysis.",
    icon: Landmark,
    href: "/legislation",
    cta: "Open Legislation",
    section: "legislation",
  },
  {
    step: 4,
    title: "Hidden History",
    whatItIs:
      "What the textbook left out, and what the archives prove.",
    whatYouDo:
      "Pick an era, open a moment, compare the story to the receipts.",
    icon: History,
    href: "/history",
    cta: "Open Hidden History",
    section: "history",
  },
  {
    step: 5,
    title: "Scenarios",
    whatItIs: "How a policy choice lands on a real family.",
    whatYouDo:
      "Follow Gets Y vs Should Get Z, and who blocked the fix.",
    icon: GitBranch,
    href: "/scenarios",
    cta: "Open Scenarios",
    section: "scenarios",
  },
  {
    step: 6,
    title: "Blueprint",
    whatItIs:
      "The progressive fix: policy pillars with evidence you can share.",
    whatYouDo: "Open a pillar, read the receipts, share the page.",
    icon: BookOpen,
    href: "/blueprint",
    cta: "Open Blueprint",
    section: "blueprint",
  },
  {
    step: 7,
    title: "About",
    whatItIs:
      "Mission, accountability, and methodology - why we exist and how we verify.",
    whatYouDo:
      "Read the transparency pledge, then dig into accountability or methodology.",
    icon: Compass,
    href: "/mission",
    cta: "Read About",
    section: "mission",
  },
];
