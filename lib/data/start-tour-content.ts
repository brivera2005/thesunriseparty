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
  accent: string;
}

export const startTourIntro = {
  title: "Know the tools. Fast.",
  subtitle:
    "Seven stops. What each tool does, then how to use it. Mission last.",
  skipLabel: "Skip to homepage",
};

export const tourSteps: TourStep[] = [
  {
    step: 1,
    title: "Rebuttal Desk",
    whatItIs:
      "When they say X, you say Y: copy-ready counters with primary sources.",
    whatYouDo:
      "Browse a claim, copy the response, or drill study and quiz mode.",
    icon: MessageSquareQuote,
    href: "/rebuttal",
    cta: "Open Rebuttal Desk",
    accent: "border-primary/30",
  },
  {
    step: 2,
    title: "Hidden History",
    whatItIs:
      "Textbook narrative on one side, what the archives document on the other.",
    whatYouDo:
      "Pick an era, open a moment, compare the story to the receipts.",
    icon: History,
    href: "/history",
    cta: "Open Hidden History",
    accent: "border-border",
  },
  {
    step: 3,
    title: "Tracker",
    whatItIs:
      "Project 2025 and admin actions scored by severity with primary sources.",
    whatYouDo:
      "Filter by category or severity, open an event, follow the citations.",
    icon: Activity,
    href: "/tracker",
    cta: "Open Tracker",
    accent: "border-primary/30",
  },
  {
    step: 4,
    title: "Legislation",
    whatItIs:
      "Live 119th Congress bills with sponsors, party colors, and vote tallies.",
    whatYouDo:
      "Scan active bills, check who sponsored, read progressive analysis.",
    icon: Landmark,
    href: "/legislation",
    cta: "Open Live bills",
    accent: "border-border",
  },
  {
    step: 5,
    title: "Scenarios",
    whatItIs:
      "Causal chains from policy choices to what a family actually gets.",
    whatYouDo:
      "Open a scenario, follow Gets Y vs Should Get Z, see who blocked the fix.",
    icon: GitBranch,
    href: "/scenarios",
    cta: "Open Scenarios",
    accent: "border-primary/30",
  },
  {
    step: 6,
    title: "Blueprint",
    whatItIs:
      "The progressive fix: policy pillars, timelines, and gaslight exposure.",
    whatYouDo:
      "Open a pillar, read the evidence, share the page when you need receipts.",
    icon: BookOpen,
    href: "/blueprint",
    cta: "Open Blueprint",
    accent: "border-border",
  },
  {
    step: 7,
    title: "Mission",
    whatItIs:
      "Why Project Sunrise exists and the transparency pledge that keeps us honest.",
    whatYouDo:
      "Read the pledge after you know the tools, then dig into methodology.",
    icon: Compass,
    href: "/mission",
    cta: "Read Mission",
    accent: "border-primary/30",
  },
];
