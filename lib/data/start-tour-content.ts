import {
  Activity,
  BookOpen,
  Compass,
  MessageSquareQuote,
  type LucideIcon,
} from "lucide-react";

export interface TourStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  href: string;
  cta: string;
  highlights: string[];
  accent: string;
}

export const startTourIntro = {
  title: "Start Here",
  subtitle:
    "New to Project Sunrise? This four-step tour shows where to track authoritarian policy, arm yourself for conversations, and explore the progressive counter-vision.",
  skipLabel: "Skip to homepage",
};

export const tourSteps: TourStep[] = [
  {
    step: 1,
    title: "Know the Mission",
    subtitle: "Why receipts matter",
    description:
      "Project Sunrise exists because democracy dies in darkness. We track Project 2025 and related executive actions with primary sources - not cable news narratives. Every claim links to filings, court opinions, and archived citations.",
    icon: Compass,
    href: "/mission",
    cta: "Read our mission",
    highlights: [
      "Transparency pledge - no plutocrat funding",
      "Anti-propaganda stance with Wayback archives",
      "Cross-referenced with independent watchdogs",
    ],
    accent: "from-primary/15 to-primary/5 border-primary/30",
  },
  {
    step: 2,
    title: "Track the Agenda",
    subtitle: "120 verified events",
    description:
      "The Project 2025 Tracker logs executive actions with severity scores (1-10), impacted sectors, and links to the Heritage playbook chapters they implement. Filter by category, export CSV, or subscribe via RSS.",
    icon: Activity,
    href: "/tracker",
    cta: "Open the tracker",
    highlights: [
      "Democracy threat level gauge",
      "Per-event detail pages with related clusters",
      "Compare vs. CPR and project2025.observer",
    ],
    accent: "from-destructive/15 to-destructive/5 border-destructive/30",
  },
  {
    step: 3,
    title: "Arm the Conversation",
    subtitle: "230 sourced rebuttals",
    description:
      "The Rebuttal Desk gives you copy-ready counters for MAGA talking points - economy, immigration, democracy, culture wars. Use study mode to memorize, quiz mode to test yourself, and heart icons to bookmark favorites.",
    icon: MessageSquareQuote,
    href: "/rebuttal",
    cta: "Browse rebuttals",
    highlights: [
      "They say / You say / Stab format",
      "Difficulty tags: easy, medium, hard",
      "Every response backed by primary sources",
    ],
    accent: "from-sunrise/15 to-sunrise/5 border-sunrise/30",
  },
  {
    step: 4,
    title: "Build the Future",
    subtitle: "Progressive Blueprint",
    description:
      "When democracy wins, we need a plan - not vibes. The Blueprint pairs Medicare for All, voting rights, climate mobilization, and labor protections with bill numbers, economic modeling, and irreversible safeguards against rollback.",
    icon: BookOpen,
    href: "/blueprint",
    cta: "Explore the blueprint",
    highlights: [
      "Shareable policy pages with OG previews",
      "Cost-of-inaction data on every fix",
      "SAFE safeguards against elite capture",
    ],
    accent: "from-primary/15 to-sunrise/5 border-primary/30",
  },
];
