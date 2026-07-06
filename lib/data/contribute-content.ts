import {
  FilePlus,
  GitPullRequest,
  Mail,
  MessageSquareQuote,
  Pencil,
  type LucideIcon,
} from "lucide-react";
import { correctionsMailto } from "./methodology-content";

export const contributeIntro = {
  title: "Contribute to Project Sunrise",
  subtitle:
    "This platform grows through reader submissions, corrections, and sourced rebuttals. Here's how to help — and what we need from you before we publish.",
};

export const GITHUB_ISSUES_URL = "https://github.com/brivera2005/thesunriseparty/issues";

export const contributeMailto =
  "mailto:hello@thesunriseparty.org?subject=Project%20Sunrise%20contribution&body=Type%20of%20submission%20(event%20%2F%20correction%20%2F%20rebuttal)%3A%20%0A%0ADetails%3A%20";

export interface ContributeSection {
  id: string;
  icon: LucideIcon;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  cta?: { label: string; href: string; external?: boolean };
}

export const contributeSections: ContributeSection[] = [
  {
    id: "events",
    icon: FilePlus,
    title: "Submit a Tracker Event",
    paragraphs: [
      "We track verifiable government actions — executive orders, agency rules, court decisions, and congressional moves tied to Project 2025 implementation. Every event needs a primary source, not a news summary alone.",
      "Open a GitHub issue for structured tracker submissions, or email us if you prefer.",
    ],
    bullets: [
      "Link to the official action (whitehouse.gov, Federal Register, congress.gov, or court docket)",
      "Date the action took effect or was announced",
      "One-sentence description of democratic impact",
      "Suggested severity (1–10) with reasoning",
      "Cross-reference to an independent tracker if available",
    ],
    cta: {
      label: "Open a GitHub issue",
      href: GITHUB_ISSUES_URL,
      external: true,
    },
  },
  {
    id: "corrections",
    icon: Pencil,
    title: "Request a Correction",
    paragraphs: [
      "Found a broken link, wrong date, or misattributed source? We fix errors publicly and log significant corrections in the changelog. Include the page URL, the claim in question, and your counter-source.",
    ],
    bullets: [
      "Page URL on thesunriseparty.pages.dev",
      "Exact text or citation that needs updating",
      "Your proposed correction with a primary source link",
    ],
    cta: {
      label: "Email corrections",
      href: correctionsMailto,
    },
  },
  {
    id: "rebuttals",
    icon: MessageSquareQuote,
    title: "Suggest a Rebuttal",
    paragraphs: [
      "The Rebuttal Desk covers common MAGA talking points with copy-ready responses. Submissions should include the claim ('they say'), a sourced response ('you say'), and at least two primary or institutional sources.",
    ],
    bullets: [
      "The exact claim you hear in conversations",
      "A concise, fact-based response (not a rant)",
      "Difficulty tag: easy, medium, or hard",
      "Category fit (economy, immigration, democracy, etc.)",
      "Sources: CRS, GAO, CBO, agency data, court opinions — not partisan blogs",
    ],
    cta: {
      label: "Email a rebuttal idea",
      href: contributeMailto,
    },
  },
  {
    id: "standards",
    icon: GitPullRequest,
    title: "Editorial Standards",
    paragraphs: [
      "We don't publish unsourced claims, anonymous tips, or content designed to harass individuals. Submissions are reviewed against our methodology — sourcing tiers, Wayback archiving, and severity scoring rubric — before going live.",
      "Read the full research standards before submitting. If your source wouldn't survive a citation modal click-through, we won't publish it.",
    ],
    cta: {
      label: "Read methodology",
      href: "/methodology",
    },
  },
];
