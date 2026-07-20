import {
  Activity,
  BookOpen,
  Compass,
  EyeOff,
  GitBranch,
  History,
  Landmark,
  MessageSquareQuote,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { SectionId } from "@/lib/section-theme";

export type WizardTone = "light" | "dark";

export interface TourStep {
  step: number;
  id: string;
  title: string;
  /** 1-2 sentences: what this is */
  whatItIs: string;
  /** One sentence: what you do there */
  whatYouDo: string;
  icon: LucideIcon;
  /** Explore this now target; null = no primary explore (Welcome uses Next) */
  href: string | null;
  cta: string;
  section: SectionId;
  /** Emphasize Blueprint as THE FIX */
  highlight?: boolean;
  /** Full-bleed sunrise gradient for this card */
  gradient: string;
  /** Text color against the gradient */
  tone: WizardTone;
}

export const startTourIntro = {
  eyebrow: "Guided tour",
  title: "New here? Start simple.",
  subtitle: "Ten short stops. Skip anytime.",
  skipLabel: "Close",
};

/**
 * Dawn → sunrise → day backgrounds.
 * Early: deep navy / orange / pink. Mid: warm orange / gold. Late: yellow → sky blue.
 */
export const tourSteps: TourStep[] = [
  {
    step: 1,
    id: "welcome",
    title: "Welcome",
    whatItIs:
      "Project Sunrise in one breath: Track the agenda. Counter the spin. Fix what breaks.",
    whatYouDo:
      "Take this short tour, then pick any section when you are ready.",
    icon: Sparkles,
    href: null,
    cta: "Explore this now",
    section: "start",
    gradient:
      "linear-gradient(165deg, #06101f 0%, #122038 38%, #3a2140 68%, #c45a28 100%)",
    tone: "light",
  },
  {
    step: 2,
    id: "tracker",
    title: "Tracker",
    whatItIs:
      "A dated timeline of Project 2025 and admin actions, scored by how serious they are, with sources.",
    whatYouDo: "Scan by date or severity, then open any event for the receipts.",
    icon: Activity,
    href: "/tracker",
    cta: "Explore this now",
    section: "tracker",
    gradient:
      "linear-gradient(165deg, #0a1528 0%, #1c2448 35%, #7a3548 62%, #e07030 100%)",
    tone: "light",
  },
  {
    step: 3,
    id: "rebuttal",
    title: "Rebuttal",
    whatItIs:
      "When they say X, you say Y: short, sourced counters you can copy into a real conversation.",
    whatYouDo: "Find the claim, copy the answer, or practice in study mode.",
    icon: MessageSquareQuote,
    href: "/rebuttal",
    cta: "Explore this now",
    section: "rebuttal",
    gradient:
      "linear-gradient(165deg, #141c38 0%, #4a2848 36%, #c85030 68%, #f08838 100%)",
    tone: "light",
  },
  {
    step: 4,
    id: "legislation",
    title: "Legislation",
    whatItIs:
      "Live bills in Congress: sponsors, party votes, and plain-English analysis.",
    whatYouDo: "Open a bill, see who is behind it, and share the page.",
    icon: Landmark,
    href: "/legislation",
    cta: "Explore this now",
    section: "legislation",
    gradient:
      "linear-gradient(165deg, #2a2040 0%, #8a3848 40%, #e87828 72%, #f0a848 100%)",
    tone: "light",
  },
  {
    step: 5,
    id: "distracted",
    title: "Distracted",
    whatItIs:
      "Shiny-object headlines versus what they are burying while you look away.",
    whatYouDo: "Flip a card: distraction on one side, the real story on the other.",
    icon: EyeOff,
    href: "/distracted",
    cta: "Explore this now",
    section: "distracted",
    gradient:
      "linear-gradient(165deg, #4a2848 0%, #c05030 42%, #f08838 74%, #f8c060 100%)",
    tone: "light",
  },
  {
    step: 6,
    id: "scenarios",
    title: "Scenarios",
    whatItIs:
      "Kitchen-table stories: a family gets Y today, should get Z, plus the best fix.",
    whatYouDo: "Pick a household, compare outcomes, and follow the Blueprint link.",
    icon: GitBranch,
    href: "/scenarios",
    cta: "Explore this now",
    section: "scenarios",
    gradient:
      "linear-gradient(165deg, #c85828 0%, #e88830 38%, #f0b040 68%, #f8d878 100%)",
    tone: "dark",
  },
  {
    step: 7,
    id: "quiz",
    title: "Quiz",
    whatItIs:
      "A short political standing quiz so you can see where you actually land, not a label someone stuck on you.",
    whatYouDo: "Answer honestly, then read your result and share if you want.",
    icon: Compass,
    href: "/quiz",
    cta: "Explore this now",
    section: "quiz",
    gradient:
      "linear-gradient(165deg, #e08830 0%, #f0b040 40%, #f8d060 70%, #fce890 100%)",
    tone: "dark",
  },
  {
    step: 8,
    id: "history",
    title: "Hidden History",
    whatItIs:
      "Textbook version versus what the archives show: moments schools soft-pedaled or skipped.",
    whatYouDo: "Pick an era, open a moment, compare the story to the receipts.",
    icon: History,
    href: "/history",
    cta: "Explore this now",
    section: "history",
    gradient:
      "linear-gradient(165deg, #f0a848 0%, #f8d070 38%, #fce898 62%, #b8d8f0 100%)",
    tone: "dark",
  },
  {
    step: 9,
    id: "blueprint",
    title: "Blueprint",
    whatItIs:
      "THE FIX: progressive policy pillars with evidence, safeguards, and a path you can argue for.",
    whatYouDo: "Open a pillar, read the receipts, and share the page.",
    icon: BookOpen,
    href: "/blueprint",
    cta: "Explore this now",
    section: "blueprint",
    highlight: true,
    gradient:
      "linear-gradient(165deg, #f8d060 0%, #e8f0a8 28%, #90c8e8 62%, #3a88c8 100%)",
    tone: "dark",
  },
  {
    step: 10,
    id: "done",
    title: "Sunrise complete",
    whatItIs:
      "You know the map. Tabs stay for power users; the tour is here whenever you need a reset.",
    whatYouDo: "Hit the homepage grid and pick a path, or reopen any section from the menu.",
    icon: Sun,
    href: "/",
    cta: "Explore the grid",
    section: "start",
    gradient:
      "linear-gradient(165deg, #c8e8f8 0%, #8ec8e8 36%, #5aa8d8 68%, #2f7eb8 100%)",
    tone: "dark",
  },
];
