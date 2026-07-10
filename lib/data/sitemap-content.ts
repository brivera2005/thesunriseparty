import {
  Activity,
  BookOpen,
  Compass,
  FileText,
  Heart,
  History,
  LayoutGrid,
  Map,
  MessageSquareQuote,
  Rss,
  Scale,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { timelineEvents, getTrackerStats } from "./timeline-events";
import {
  conversationHelpers,
  rebuttalCategories,
  rebuttalCategoryPath,
} from "./conversation-helpers";
import { hiddenHistoryEntries, getHistoryStats } from "./hidden-history";
import { policyFixes, safeguardItems } from "./policies";
import { validatedUrls } from "./validated-urls";
import { trackerSources } from "./tracker-sources";

export interface SitemapLink {
  href: string;
  label: string;
  description?: string;
  count?: number;
  badge?: string;
}

export interface SitemapSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  links: SitemapLink[];
}

const trackerStats = getTrackerStats();
const historyStats = getHistoryStats();
const rebuttalCats = rebuttalCategories.filter((c) => c !== "All");

export const sitemapIntro = {
  title: "Site Map",
  subtitle:
    "Every section of Project Sunrise - with live counts, quick links, and tools for tracking, learning, and building.",
};

export const sitemapSections: SitemapSection[] = [
  {
    id: "start",
    title: "New Here?",
    description: "Onboarding and orientation for first-time visitors.",
    icon: Sparkles,
    accent: "text-sunrise border-sunrise/30 bg-sunrise/5",
    links: [
      {
        href: "/start",
        label: "Start Here - Guided Tour",
        description: "Four-step walkthrough of mission, tracker, rebuttals, and blueprint.",
        badge: "New",
      },
      {
        href: "/mission",
        label: "Our Mission",
        description: "Transparency pledge and why Project Sunrise exists.",
      },
      {
        href: "/donate",
        label: "Donate",
        description: "Support hosting, research, and transparency tools.",
        badge: "New",
      },
      {
        href: "/methodology",
        label: "Research Methodology",
        description: "How we source, score, and verify every claim.",
      },
    ],
  },
  {
    id: "tracker",
    title: "Project 2025 Tracker",
    description: "Verified executive actions with severity scores and primary sources.",
    icon: Activity,
    accent: "text-destructive border-destructive/30 bg-destructive/5",
    links: [
      {
        href: "/tracker",
        label: "Full Tracker",
        count: timelineEvents.length,
        description: `${trackerStats.highSeverity} high-severity events · avg severity ${trackerStats.avgSeverity}`,
      },
      {
        href: "/events",
        label: "Events Hub",
        description: "P2025 chapter map and upcoming threats panel.",
      },
      {
        href: "/tracker/EVT-2025-1225-125",
        label: "Latest milestone - Event #125",
        badge: "Milestone",
      },
      {
        href: "/data/events.json",
        label: "JSON export",
        description: "Machine-readable event data.",
      },
      {
        href: "/data/events.csv",
        label: "CSV export",
        description: "Spreadsheet-friendly download.",
      },
      {
        href: "/feed.xml",
        label: "RSS feed",
        description: "Subscribe to new tracker events.",
      },
    ],
  },
  {
    id: "rebuttal",
    title: "Rebuttal Desk",
    description: "Sourced counters for real conversations - copy, study, and quiz modes.",
    icon: MessageSquareQuote,
    accent: "text-sunrise border-sunrise/30 bg-sunrise/5",
    links: [
      {
        href: "/rebuttal",
        label: "All Rebuttals",
        count: conversationHelpers.length,
        description: `${rebuttalCats.length} categories · easy / medium / hard tags`,
      },
      {
        href: "/rebuttal?study=1",
        label: "Study Mode",
        description: "Flashcard-style practice for talking points.",
      },
      {
        href: "/rebuttal?quiz=1",
        label: "Quiz Mode",
        description: "Multiple choice - pick the best counter.",
      },
      {
        href: "/rebuttal/infra-pass-distraction",
        label: "Latest milestone - Rebuttal #240",
        badge: "Milestone",
      },
      ...rebuttalCats.map((cat) => ({
        href: rebuttalCategoryPath(cat),
        label: cat,
        count: conversationHelpers.filter((r) => r.category.includes(cat)).length,
      })),
    ],
  },
  {
    id: "history",
    title: "Hidden History",
    description: "Dual timeline - textbook narratives vs. sourced American history.",
    icon: History,
    accent: "text-amber-700 border-amber-300/50 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/30",
    links: [
      {
        href: "/history",
        label: "Dual Timeline",
        count: hiddenHistoryEntries.length,
        description: `${historyStats.rebuttals} historical rebuttals · ${historyStats.eras} eras`,
        badge: "New",
      },
      {
        href: "/history/rebuttals",
        label: "Historical Rebuttals",
        count: historyStats.rebuttals,
        description: "What they said then - plain-language counters.",
      },
      {
        href: "/history?event=HH-1861-CIVIL-WAR",
        label: "Featured: Civil War causes",
        description: "States' rights myth vs. secession documents.",
      },
    ],
  },
  {
    id: "blueprint",
    title: "Progressive Blueprint",
    description: "Evidence-based policy fixes with bill numbers and safeguards.",
    icon: BookOpen,
    accent: "text-primary border-primary/30 bg-primary/5",
    links: [
      {
        href: "/blueprint",
        label: "Blueprint overview",
        count: policyFixes.length + safeguardItems.length,
        description: `${policyFixes.length} policy fixes · ${safeguardItems.length} irreversible safeguards`,
      },
      ...policyFixes.map((p) => ({
        href: `/blueprint/${p.id}`,
        label: p.title,
        badge: p.category,
      })),
      ...safeguardItems.map((s) => ({
        href: `/blueprint/${s.id}`,
        label: s.title,
        badge: "Safeguard",
      })),
    ],
  },
  {
    id: "accountability",
    title: "Accountability & Transparency",
    description: "Dark money, FOIA, declassification, and elite capture.",
    icon: Scale,
    accent: "text-primary border-primary/30 bg-primary/5",
    links: [
      {
        href: "/accountability",
        label: "Dark Money & Accountability",
        description: "Citizens United, lobbying, Epstein files mandate.",
      },
      {
        href: "/contribute",
        label: "Contribute",
        description: "Submit events, corrections, and rebuttals.",
      },
      {
        href: "/saved",
        label: "My Saved",
        description: "Bookmarked events and rebuttals (local only).",
      },
    ],
  },
  {
    id: "meta",
    title: "Platform & Meta",
    description: "Changelog, exports, and site infrastructure.",
    icon: LayoutGrid,
    accent: "text-muted-foreground border-border bg-muted/30",
    links: [
      {
        href: "/changelog",
        label: "Changelog",
        description: "Pass-by-pass build history - v0.21.0 milestone.",
        badge: "v0.21.0",
      },
      {
        href: "/data/rebuttals.json",
        label: "Rebuttals JSON export",
      },
      {
        href: "/feed.ics",
        label: "Calendar feed (iCal)",
      },
      {
        href: "/sitemap.xml",
        label: "XML sitemap",
        description: "For search engines.",
      },
    ],
  },
];

export const sitemapStats = [
  { label: "Tracker events", value: timelineEvents.length, icon: Activity },
  { label: "Rebuttals", value: conversationHelpers.length, icon: MessageSquareQuote },
  { label: "Policy items", value: policyFixes.length + safeguardItems.length, icon: BookOpen },
  { label: "Links verified", value: validatedUrls.size, icon: ShieldCheck },
  { label: "External trackers", value: trackerSources.length, icon: Map },
  { label: "Rebuttal categories", value: rebuttalCats.length, icon: FileText },
] as const;
