import {
  Shield,
  Eye,
  Scale,
  FileSearch,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface MissionPillar {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

export const missionPillars: MissionPillar[] = [
  {
    icon: FileSearch,
    title: "Evidence-Based Tracking",
    description:
      "We document the authoritarian agenda - Project 2025 and beyond - with primary sources from federal registers, executive orders, and congressional records. No vibes. Receipts.",
    accent: "text-destructive",
  },
  {
    icon: Sparkles,
    title: "The Blueprint",
    description:
      "When democracy wins, we need a plan. The Blueprint is our progressive legislative vision - healthcare, climate, voting rights, and institutional safeguards built to last.",
    accent: "text-primary",
  },
  {
    icon: Eye,
    title: "Information Transparency",
    description:
      "Every claim is sourced, archived, and verifiable. We link to Wayback Machine copies. We cross-reference independent trackers. If we can't prove it, we don't publish it.",
    accent: "text-sunrise",
  },
  {
    icon: Users,
    title: "Democracy for the People",
    description:
      "Government should answer to voters - not billionaire donors, dark-money networks, or captured institutions. We track who benefits from every policy action.",
    accent: "text-primary",
  },
  {
    icon: Shield,
    title: "Anti-Propaganda Stance",
    description:
      "We don't parrot billionaire media narratives. We show you the documents, the votes, and the money. Think for yourself - we'll hand you the evidence.",
    accent: "text-destructive",
  },
  {
    icon: Scale,
    title: "Elite Accountability",
    description:
      "Dark money, declassification demands, and Epstein-file transparency aren't conspiracy theories - they're democratic accountability. Power hides; sunlight exposes.",
    accent: "text-sunrise",
  },
];

export const transparencyPledge = [
  "Primary sources linked on every claim - federal registers, executive orders, CRS reports, and court filings.",
  "Wayback Machine archives for every citation so links survive political scrubbing.",
  "Cross-referenced with six independent Project 2025 trackers - we aggregate, we don't monopolize truth.",
  "Severity scoring and Blueprint fixes so you see harm levels and what to build instead.",
  "Rebuttal Desk entries sourced the same way - no unsourced talking points, ever.",
  "Hidden History dual timeline with textbook vs documented reality, each entry carrying National Archives, LOC, NPS, or equivalent citations.",
  "Automated link validation before deploy - broken receipts do not ship.",
  "Open JSON/CSV exports and RSS so researchers can audit and remix the dataset without asking permission.",
];

export const antiPlutocracyStance = {
  title: "Anti-Plutocracy, Not Both-Sides Theater",
  paragraphs: [
    "Project Sunrise exists because democracy is being captured by concentrated wealth. The Heritage Foundation's 922-page Project 2025 blueprint was written by think tanks funded by billionaires who profit when agencies are gutted, regulations vanish, and voters lose faith in government.",
    "We don't pretend both parties are equally responsible for every crisis. We document who wrote the plan, who funded it, who implemented it, and who benefits. That is not partisan rage - it is forensic accounting.",
    "When we track Schedule F firings, ACA premium hikes, or voting restrictions, we name the executive orders, the OPM guidance, and the congressional votes. When we build the Blueprint, we cite CBO scores and peer-reviewed research. Propaganda thrives in vagueness; sunlight thrives in specifics.",
  ],
};

export const whatWeTrack = [
  {
    title: "Project 2025 Implementation",
    items: [
      "Day One executive orders and rescissions",
      "Schedule F civil service reclassification",
      "Agency dismantling (USAID, Education, CFPB)",
      "Immigration enforcement expansion",
      "Environmental and climate rollbacks",
      "Voting rights restrictions at state and federal level",
    ],
  },
  {
    title: "Democratic Legitimacy Indicators",
    items: [
      "Public trust in government (Pew, Gallup)",
      "Dark money flows (OpenSecrets, FEC)",
      "Judicial capture and immunity expansions",
      "Media consolidation and broadcast policy",
      "Elite accountability and declassification",
    ],
  },
];

export const whatWeBuild = [
  {
    title: "The Blueprint",
    description:
      "Progressive policy fixes linked to tracker events - healthcare, climate, voting rights, labor, immigration, housing, media antitrust, disability rights, Indigenous sovereignty, and irreversible institutional safeguards.",
  },
  {
    title: "Rebuttal Desk",
    description:
      "Sourced responses to the propaganda cycle - from 'both sides' whataboutism to election denial, immigration fear-mongering, and economic myths.",
  },
  {
    title: "Independent Cross-References",
    description:
      "Every tracker event links to external monitors (CPR, project2025.observer, ACLU, Brennan Center, watch2025.org) so you can verify our work against theirs.",
  },
  {
    title: "Hidden History",
    description:
      "A dual timeline that puts textbook myths beside documented reality - labor wars, coups, Jim Crow, LGBTQ erasure, disability rights, environmental injustice, and voting rights rollbacks - with primary sources on every card.",
  },
  {
    title: "Accountability Ledger",
    description:
      "Dark money, FOIA, FEC deadlocks, and revolving-door capture documented with OpenSecrets-style public data and Blueprint safeguards that would sever the pipes.",
  },
];
