/**
 * Plain-English glossary for opaque political / legal jargon.
 * Used by TermTip / TipText for hover and tap help.
 * Keep definitions short (1-3 sentences). No em dashes.
 */

export type GlossaryTerm = {
  /** Stable id */
  id: string;
  /** Display label next to the ? */
  label: string;
  /** Match phrases (longest first when scanning). Case-insensitive. */
  aliases: string[];
  /** Short plain-English definition */
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "schedule-f",
    label: "Schedule F",
    aliases: [
      "Schedule Policy/Career",
      "Schedule Policy / Career",
      "Schedule Policy and Career",
      "Schedule F",
    ],
    definition:
      "A White House reclassification that turns career civil servants in 'policy' jobs into at-will staff. In plain English: mass firing without the usual merit-system appeals. Loyalty tests replace expertise, agencies get hollowed out, and inspectors general or career lawyers become easier to sack. Later branded Schedule Policy/Career; same purge tool.",
  },
  {
    id: "doge",
    label: "DOGE",
    aliases: ["DOGE Service", "U.S. DOGE", "DOGE"],
    definition:
      "Department of Government Efficiency: an unofficial White House cost-cutting shop with deep access to agency systems and personnel. Watch payment-system access, workforce directives, and whether temporary 'efficiency' structures outlast their legal shell.",
  },
  {
    id: "project-2025",
    label: "Project 2025",
    aliases: ["Project 2025", "P2025"],
    definition:
      "Heritage Foundation's 900+ page playbook to remake the federal government: Schedule F-style personnel, agency gutting, and social policy rollbacks. Trackers map which pieces are already being implemented.",
  },
  {
    id: "cra",
    label: "CRA",
    aliases: [
      "Congressional Review Act",
      "CRA disapproval",
      "CRA",
    ],
    definition:
      "Congressional Review Act: a fast track for Congress to kill recent agency rules with simple majorities. Used to wipe regulations without rewriting the underlying statute.",
  },
  {
    id: "chevron",
    label: "Chevron",
    aliases: ["Chevron deference", "Chevron doctrine", "Chevron"],
    definition:
      "Old rule that courts deferred to reasonable agency readings of ambiguous laws. The Supreme Court overturned it in 2024 (Loper Bright), making it easier for judges to strike agency rules and harder for agencies to regulate.",
  },
  {
    id: "redaction",
    label: "Redaction",
    aliases: ["redactions", "redaction", "redacted"],
    definition:
      "Blacked-out text in released documents. Sometimes protects privacy or national security; often used to hide names, money trails, or embarrassing facts. Ask what is missing and who controls the unredacted file.",
  },
  {
    id: "client-list",
    label: "Client list",
    aliases: [
      "client list theater",
      "client-list",
      "client list",
      "Epstein client list",
    ],
    definition:
      "Viral claim that a single master 'client list' will drop and end careers. Real Epstein files are messy court and DOJ records, not one tidy list. The theater keeps you staring at celebrities instead of transparency fights and contemporaneous policy moves.",
  },
  {
    id: "improper-payments",
    label: "Improper payments",
    aliases: ["improper-payments", "improper payments"],
    definition:
      "Federal money paid to the wrong person, in the wrong amount, or without required documentation. GAO tracks hundreds of billions a year. Not the same as 'fraud' alone; includes paperwork and eligibility errors agencies fail to fix.",
  },
  {
    id: "reconciliation",
    label: "Reconciliation",
    aliases: ["budget reconciliation", "reconciliation"],
    definition:
      "Senate fast-track for budget bills that can pass with 51 votes, skipping the 60-vote filibuster. Major tax and spending packages often ride this process.",
  },
  {
    id: "foia",
    label: "FOIA",
    aliases: ["FOIA"],
    definition:
      "Freedom of Information Act: the public's right to request federal records. Delays, over-redaction, and fee fights are how agencies slow sunlight.",
  },
  {
    id: "inspector-general",
    label: "Inspector General",
    aliases: ["inspectors general", "inspector general", "IG office", "IGs"],
    definition:
      "Independent watchdogs inside agencies who investigate waste, fraud, and abuse. Firing or sidelining IGs weakens the evidence trail on abuse of power.",
  },
  {
    id: "unitary-executive",
    label: "Unitary executive",
    aliases: ["unitary executive theory", "unitary executive"],
    definition:
      "Theory that the president should personally control the entire executive branch, including independent agencies and watchdogs. Used to justify firings, loyalty tests, and ignoring statutory independence.",
  },
];

/** Longest alias first so multi-word phrases win. */
const sortedAliases: { alias: string; term: GlossaryTerm }[] = glossaryTerms
  .flatMap((term) => term.aliases.map((alias) => ({ alias, term })))
  .sort((a, b) => b.alias.length - a.alias.length);

export function getGlossaryTerm(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.id === id);
}

export function findGlossaryTerm(query: string): GlossaryTerm | undefined {
  const q = query.trim().toLowerCase();
  if (!q) return undefined;
  return (
    glossaryTerms.find((t) => t.id === q || t.label.toLowerCase() === q) ??
    glossaryTerms.find((t) =>
      t.aliases.some((a) => a.toLowerCase() === q)
    )
  );
}

export type GlossaryMatch = {
  start: number;
  end: number;
  term: GlossaryTerm;
  matched: string;
};

/** First non-overlapping glossary matches in text (case-insensitive). */
export function findGlossaryMatches(text: string): GlossaryMatch[] {
  if (!text) return [];
  const lower = text.toLowerCase();
  const taken: boolean[] = Array(text.length).fill(false);
  const matches: GlossaryMatch[] = [];

  for (const { alias, term } of sortedAliases) {
    const needle = alias.toLowerCase();
    let from = 0;
    while (from <= lower.length - needle.length) {
      const idx = lower.indexOf(needle, from);
      if (idx === -1) break;
      const end = idx + needle.length;
      const overlaps = taken.slice(idx, end).some(Boolean);
      const leftOk = idx === 0 || !/[a-z0-9]/i.test(text[idx - 1] ?? "");
      const rightOk =
        end >= text.length || !/[a-z0-9]/i.test(text[end] ?? "");
      if (!overlaps && leftOk && rightOk) {
        for (let i = idx; i < end; i++) taken[i] = true;
        matches.push({
          start: idx,
          end,
          term,
          matched: text.slice(idx, end),
        });
      }
      from = idx + 1;
    }
  }

  return matches.sort((a, b) => a.start - b.start);
}
