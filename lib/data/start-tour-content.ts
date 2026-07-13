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
  title: "Here's what you can do.",
  subtitle: "Open any tool. Skip anytime.",
  skipLabel: "Skip to homepage",
};

export const tourSteps: TourStep[] = [
  {
    step: 1,
    title: "Rebuttal Desk",
    whatItIs:
      "Someone just lied to you. Here's the answer with sources.",
    whatYouDo:
      "Browse a claim, copy the response, or practice in Study and Quiz.",
    icon: MessageSquareQuote,
    href: "/rebuttal",
    cta: "Open Rebuttal Desk",
    accent: "border-primary/30",
  },
  {
    step: 2,
    title: "Hidden History",
    whatItIs:
      "What the textbook left out — and what the archives prove.",
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
      "What's happening now, scored by how bad it is — with receipts.",
    whatYouDo:
      "Filter by category or severity, then open any event.",
    icon: Activity,
    href: "/tracker",
    cta: "Open Tracker",
    accent: "border-primary/30",
  },
  {
    step: 4,
    title: "Legislation",
    whatItIs:
      "Live bills in Congress. Who sponsored them. How they voted.",
    whatYouDo:
      "Scan active bills and read the progressive analysis.",
    icon: Landmark,
    href: "/legislation",
    cta: "Open Live bills",
    accent: "border-border",
  },
  {
    step: 5,
    title: "Scenarios",
    whatItIs:
      "How a policy choice lands on a real family.",
    whatYouDo:
      "Follow Gets Y vs Should Get Z — and who blocked the fix.",
    icon: GitBranch,
    href: "/scenarios",
    cta: "Open Scenarios",
    accent: "border-primary/30",
  },
  {
    step: 6,
    title: "Blueprint",
    whatItIs:
      "The progressive fix — policy pillars with evidence you can share.",
    whatYouDo:
      "Open a pillar, read the receipts, share the page.",
    icon: BookOpen,
    href: "/blueprint",
    cta: "Open Blueprint",
    accent: "border-border",
  },
  {
    step: 7,
    title: "Mission",
    whatItIs:
      "Why Project Sunrise exists — and the pledge that keeps us honest.",
    whatYouDo:
      "Read the transparency pledge, then dig into methodology if you want.",
    icon: Compass,
    href: "/mission",
    cta: "Read Mission",
    accent: "border-primary/30",
  },
];
