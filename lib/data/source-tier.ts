export type SourceTier = 1 | 2 | 3;

export interface SourceTierInfo {
  tier: SourceTier;
  label: string;
  description: string;
  className: string;
}

const TIER_2_PUBLISHERS = [
  "government accountability office",
  "gao",
  "congressional research service",
  "crs",
  "brennan center",
  "american civil liberties union",
  "aclu",
  "congressional budget office",
  "cbo",
  "brookings",
  "economic policy institute",
  "epi",
  "kff",
  "kaiser family foundation",
  "giffords",
  "pen america",
  "heritage foundation",
  "rand corporation",
  "transparency international",
  "sunlight foundation",
  "center for progressive reform",
];

const TIER_3_DOMAINS = [
  "apnews.com",
  "ap.org",
  "reuters.com",
  "politifact.com",
  "factcheck.org",
  "snopes.com",
];

const TIER_3_PUBLISHERS = [
  "associated press",
  "reuters",
  "politifact",
  "factcheck.org",
  "factcheck",
];

const TIER_1_DOMAINS = [
  ".gov",
  "federalregister.gov",
  "congress.gov",
  "supremecourt.gov",
  "govinfo.gov",
];

function hostFromUrl(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

/** Classify citation source tier from URL and publisher label. */
export function getSourceTier(url: string, publisher: string): SourceTierInfo {
  const host = hostFromUrl(url);
  const pub = publisher.toLowerCase();

  if (
    TIER_1_DOMAINS.some((d) => host.endsWith(d.replace(/^\./, "")) || host.includes(d)) ||
    host.endsWith(".gov") ||
    pub.includes("white house") ||
    pub.includes("federal register") ||
    pub.includes("supreme court") ||
    pub.includes("u.s. senate") ||
    pub.includes("u.s. house")
  ) {
    return {
      tier: 1,
      label: "Tier 1 — Primary",
      description: "Government primary source (.gov, Federal Register, courts)",
      className:
        "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    };
  }

  if (
    TIER_3_DOMAINS.some((d) => host.includes(d)) ||
    TIER_3_PUBLISHERS.some((p) => pub.includes(p))
  ) {
    return {
      tier: 3,
      label: "Tier 3 — Fact-check",
      description: "Independent fact-checker (AP, Reuters, PolitiFact, FactCheck)",
      className: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400",
    };
  }

  if (TIER_2_PUBLISHERS.some((p) => pub.includes(p) || host.includes(p.replace(/\s/g, "")))) {
    return {
      tier: 2,
      label: "Tier 2 — Institutional",
      description: "Institutional research (GAO, CRS, Brennan, ACLU)",
      className: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400",
    };
  }

  // Default non-government research to tier 2
  return {
    tier: 2,
    label: "Tier 2 — Institutional",
    description: "Institutional research or watchdog reporting",
    className: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400",
  };
}
