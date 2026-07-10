/** Shared Open Graph / site metadata constants */
export const SITE_URL = "https://thesunriseparty.pages.dev";

export const defaultOg = {
  siteName: "Project Sunrise",
  type: "website" as const,
  images: [
    {
      url: `${SITE_URL}/og/sunrise-default.svg`,
      width: 1200,
      height: 630,
      alt: "Project Sunrise — Democracy Needs Receipts",
    },
  ],
};

export const sectionOg = {
  tracker: {
    title: "Project 2025 Tracker | Project Sunrise",
    description:
      "110+ verified administrative actions with severity scoring, primary sources, and cross-references to independent watchdogs.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-tracker.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Project 2025 Tracker",
      },
    ],
  },
  blueprint: {
    title: "The Progressive Blueprint | Project Sunrise",
    description:
      "Medicare for All, PRO Act, climate mobilization, voting rights — evidence-based policy with bill numbers and implementation timelines.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-blueprint.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Progressive Blueprint",
      },
    ],
  },
  rebuttal: {
    title: "Rebuttal Desk | Project Sunrise",
    description:
      "210+ sourced talking points for real conversations — economy, immigration, democracy, and culture-war claims debunked with receipts.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-rebuttal.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Rebuttal Desk",
      },
    ],
  },
  mission: {
    title: "Our Mission | Project Sunrise",
    description:
      "Transparency pledge, anti-plutocracy stance, and what Project Sunrise tracks and builds for democracy.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-mission.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Our Mission",
      },
    ],
  },
  contribute: {
    title: "Contribute | Project Sunrise",
    description:
      "Submit tracker events, corrections, and sourced rebuttals. Editorial standards and community contribution guide.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-contribute.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Contribute",
      },
    ],
  },
  saved: {
    title: "My Saved | Project Sunrise",
    description:
      "Bookmarked tracker events and rebuttals — saved locally in your browser.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-saved.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — My Saved",
      },
    ],
  },
  accountability: {
    title: "Dark Money & Accountability | Project Sunrise",
    description:
      "Citizens United, dark money, lobbying, and Blueprint safeguards against elite capture — sourced overview.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-accountability.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Accountability",
      },
    ],
  },
  methodology: {
    title: "Research Methodology | Project Sunrise",
    description:
      "How Project Sunrise sources, scores, and verifies tracker events and rebuttals.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-methodology.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Methodology",
      },
    ],
  },
  history: {
    title: "Hidden History | Project Sunrise",
    description:
      "Interactive dual timeline — textbook narratives vs. sourced American history with historical rebuttals for every era.",
    images: [
      {
        url: `${SITE_URL}/og/sunrise-default.svg`,
        width: 1200,
        height: 630,
        alt: "Project Sunrise — Hidden History",
      },
    ],
  },
};
