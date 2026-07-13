/**
 * Per-section accent colors (white canvas + colored accents only).
 * BrandLogo stays sunrise orange; section chrome varies.
 */
export type SectionId =
  | "rebuttal"
  | "history"
  | "tracker"
  | "legislation"
  | "scenarios"
  | "blueprint"
  | "mission"
  | "accountability"
  | "methodology"
  | "donate"
  | "contribute"
  | "saved"
  | "start"
  | "changelog"
  | "default";

export type SectionTheme = {
  id: SectionId;
  label: string;
  /** Hex accent for inline styles when needed */
  hex: string;
  /** Soft tint background (chips/icons) */
  soft: string;
  /** Tailwind-friendly class tokens used across UI */
  text: string;
  border: string;
  bgSoft: string;
  ring: string;
  button: string;
  navActive: string;
};

export const sectionThemes: Record<SectionId, SectionTheme> = {
  rebuttal: {
    id: "rebuttal",
    label: "Rebuttal Desk",
    hex: "#e16323",
    soft: "#fff4ec",
    text: "text-[color:var(--section-rebuttal)]",
    border: "border-[color:var(--section-rebuttal)]/35",
    bgSoft: "bg-[color:var(--section-rebuttal-soft)]",
    ring: "ring-[color:var(--section-rebuttal)]/30",
    button:
      "bg-[color:var(--section-rebuttal)] text-white hover:bg-[color:var(--section-rebuttal)]/90",
    navActive:
      "text-[color:var(--section-rebuttal)] border-[color:var(--section-rebuttal)]",
  },
  history: {
    id: "history",
    label: "Hidden History",
    hex: "#0f766e",
    soft: "#ecfdf8",
    text: "text-[color:var(--section-history)]",
    border: "border-[color:var(--section-history)]/35",
    bgSoft: "bg-[color:var(--section-history-soft)]",
    ring: "ring-[color:var(--section-history)]/30",
    button:
      "bg-[color:var(--section-history)] text-white hover:bg-[color:var(--section-history)]/90",
    navActive:
      "text-[color:var(--section-history)] border-[color:var(--section-history)]",
  },
  tracker: {
    id: "tracker",
    label: "Tracker",
    hex: "#b42318",
    soft: "#fef3f2",
    text: "text-[color:var(--section-tracker)]",
    border: "border-[color:var(--section-tracker)]/35",
    bgSoft: "bg-[color:var(--section-tracker-soft)]",
    ring: "ring-[color:var(--section-tracker)]/30",
    button:
      "bg-[color:var(--section-tracker)] text-white hover:bg-[color:var(--section-tracker)]/90",
    navActive:
      "text-[color:var(--section-tracker)] border-[color:var(--section-tracker)]",
  },
  legislation: {
    id: "legislation",
    label: "Legislation",
    hex: "#1d4ed8",
    soft: "#eff6ff",
    text: "text-[color:var(--section-legislation)]",
    border: "border-[color:var(--section-legislation)]/35",
    bgSoft: "bg-[color:var(--section-legislation-soft)]",
    ring: "ring-[color:var(--section-legislation)]/30",
    button:
      "bg-[color:var(--section-legislation)] text-white hover:bg-[color:var(--section-legislation)]/90",
    navActive:
      "text-[color:var(--section-legislation)] border-[color:var(--section-legislation)]",
  },
  scenarios: {
    id: "scenarios",
    label: "Scenarios",
    hex: "#7c3aed",
    soft: "#f5f3ff",
    text: "text-[color:var(--section-scenarios)]",
    border: "border-[color:var(--section-scenarios)]/35",
    bgSoft: "bg-[color:var(--section-scenarios-soft)]",
    ring: "ring-[color:var(--section-scenarios)]/30",
    button:
      "bg-[color:var(--section-scenarios)] text-white hover:bg-[color:var(--section-scenarios)]/90",
    navActive:
      "text-[color:var(--section-scenarios)] border-[color:var(--section-scenarios)]",
  },
  blueprint: {
    id: "blueprint",
    label: "Blueprint",
    hex: "#0284c7",
    soft: "#f0f9ff",
    text: "text-[color:var(--section-blueprint)]",
    border: "border-[color:var(--section-blueprint)]/35",
    bgSoft: "bg-[color:var(--section-blueprint-soft)]",
    ring: "ring-[color:var(--section-blueprint)]/30",
    button:
      "bg-[color:var(--section-blueprint)] text-white hover:bg-[color:var(--section-blueprint)]/90",
    navActive:
      "text-[color:var(--section-blueprint)] border-[color:var(--section-blueprint)]",
  },
  mission: {
    id: "mission",
    label: "Mission",
    hex: "#334155",
    soft: "#f1f5f9",
    text: "text-[color:var(--section-mission)]",
    border: "border-[color:var(--section-mission)]/35",
    bgSoft: "bg-[color:var(--section-mission-soft)]",
    ring: "ring-[color:var(--section-mission)]/30",
    button:
      "bg-[color:var(--section-mission)] text-white hover:bg-[color:var(--section-mission)]/90",
    navActive:
      "text-[color:var(--section-mission)] border-[color:var(--section-mission)]",
  },
  accountability: {
    id: "accountability",
    label: "Accountability",
    hex: "#475569",
    soft: "#f8fafc",
    text: "text-[color:var(--section-accountability)]",
    border: "border-[color:var(--section-accountability)]/35",
    bgSoft: "bg-[color:var(--section-accountability-soft)]",
    ring: "ring-[color:var(--section-accountability)]/30",
    button:
      "bg-[color:var(--section-accountability)] text-white hover:bg-[color:var(--section-accountability)]/90",
    navActive:
      "text-[color:var(--section-accountability)] border-[color:var(--section-accountability)]",
  },
  methodology: {
    id: "methodology",
    label: "Methodology",
    hex: "#1e293b",
    soft: "#f1f5f9",
    text: "text-[color:var(--section-methodology)]",
    border: "border-[color:var(--section-methodology)]/35",
    bgSoft: "bg-[color:var(--section-methodology-soft)]",
    ring: "ring-[color:var(--section-methodology)]/30",
    button:
      "bg-[color:var(--section-methodology)] text-white hover:bg-[color:var(--section-methodology)]/90",
    navActive:
      "text-[color:var(--section-methodology)] border-[color:var(--section-methodology)]",
  },
  donate: {
    id: "donate",
    label: "Donate",
    hex: "#15803d",
    soft: "#f0fdf4",
    text: "text-[color:var(--section-donate)]",
    border: "border-[color:var(--section-donate)]/35",
    bgSoft: "bg-[color:var(--section-donate-soft)]",
    ring: "ring-[color:var(--section-donate)]/30",
    button:
      "bg-[color:var(--section-donate)] text-white hover:bg-[color:var(--section-donate)]/90",
    navActive:
      "text-[color:var(--section-donate)] border-[color:var(--section-donate)]",
  },
  contribute: {
    id: "contribute",
    label: "Contribute",
    hex: "#0f766e",
    soft: "#f0fdfa",
    text: "text-[color:var(--section-contribute)]",
    border: "border-[color:var(--section-contribute)]/35",
    bgSoft: "bg-[color:var(--section-contribute-soft)]",
    ring: "ring-[color:var(--section-contribute)]/30",
    button:
      "bg-[color:var(--section-contribute)] text-white hover:bg-[color:var(--section-contribute)]/90",
    navActive:
      "text-[color:var(--section-contribute)] border-[color:var(--section-contribute)]",
  },
  saved: {
    id: "saved",
    label: "Saved",
    hex: "#4a5a6e",
    soft: "#f4f6f8",
    text: "text-[color:var(--section-saved)]",
    border: "border-[color:var(--section-saved)]/35",
    bgSoft: "bg-[color:var(--section-saved-soft)]",
    ring: "ring-[color:var(--section-saved)]/30",
    button:
      "bg-[color:var(--section-saved)] text-white hover:bg-[color:var(--section-saved)]/90",
    navActive:
      "text-[color:var(--section-saved)] border-[color:var(--section-saved)]",
  },
  start: {
    id: "start",
    label: "Start",
    hex: "#e16323",
    soft: "#fff4ec",
    text: "text-[color:var(--section-rebuttal)]",
    border: "border-[color:var(--section-rebuttal)]/35",
    bgSoft: "bg-[color:var(--section-rebuttal-soft)]",
    ring: "ring-[color:var(--section-rebuttal)]/30",
    button:
      "bg-[color:var(--section-rebuttal)] text-white hover:bg-[color:var(--section-rebuttal)]/90",
    navActive:
      "text-[color:var(--section-rebuttal)] border-[color:var(--section-rebuttal)]",
  },
  changelog: {
    id: "changelog",
    label: "Changelog",
    hex: "#475569",
    soft: "#f8fafc",
    text: "text-[color:var(--section-accountability)]",
    border: "border-[color:var(--section-accountability)]/35",
    bgSoft: "bg-[color:var(--section-accountability-soft)]",
    ring: "ring-[color:var(--section-accountability)]/30",
    button:
      "bg-[color:var(--section-accountability)] text-white hover:bg-[color:var(--section-accountability)]/90",
    navActive:
      "text-[color:var(--section-accountability)] border-[color:var(--section-accountability)]",
  },
  default: {
    id: "default",
    label: "Project Sunrise",
    hex: "#e16323",
    soft: "#fff4ec",
    text: "text-primary",
    border: "border-primary/35",
    bgSoft: "bg-accent",
    ring: "ring-primary/30",
    button: "bg-primary text-primary-foreground hover:bg-primary/90",
    navActive: "text-primary border-primary",
  },
};

const pathToSection: { prefix: string; id: SectionId }[] = [
  { prefix: "/rebuttal", id: "rebuttal" },
  { prefix: "/history", id: "history" },
  { prefix: "/tracker", id: "tracker" },
  { prefix: "/legislation", id: "legislation" },
  { prefix: "/bills", id: "legislation" },
  { prefix: "/scenarios", id: "scenarios" },
  { prefix: "/blueprint", id: "blueprint" },
  { prefix: "/mission", id: "mission" },
  { prefix: "/accountability", id: "accountability" },
  { prefix: "/methodology", id: "methodology" },
  { prefix: "/donate", id: "donate" },
  { prefix: "/contribute", id: "contribute" },
  { prefix: "/saved", id: "saved" },
  { prefix: "/start", id: "start" },
  { prefix: "/changelog", id: "changelog" },
];

export function sectionFromPath(pathname: string): SectionTheme {
  for (const { prefix, id } of pathToSection) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      return sectionThemes[id];
    }
  }
  return sectionThemes.default;
}

export function getSectionTheme(id: SectionId): SectionTheme {
  return sectionThemes[id] ?? sectionThemes.default;
}

/** Map homepage / tour hrefs to section ids */
export function sectionFromHref(href: string): SectionId {
  return sectionFromPath(href).id;
}
