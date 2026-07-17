/**
 * Named public figures / coalitions for quiz "who you align with" results.
 * Weights map to QuizCampId vectors. No em dashes. Avoid Trump-by-name labels.
 */

import type { QuizCampId } from "@/lib/data/quiz-questions";

export type QuizFigure = {
  id: string;
  name: string;
  coalition: string;
  /** One plain sentence: why this match makes sense */
  why: string;
  /** Camp mix this figure represents (should roughly sum toward 10+ on primary) */
  weights: Partial<Record<QuizCampId, number>>;
};

export const quizFigures: QuizFigure[] = [
  {
    id: "aoc",
    name: "Alexandria Ocasio-Cortez",
    coalition: "Progressive Democrats",
    why: "Pushes bold public goods, labor power, and climate urgency without soft-pedaling corporate concentration.",
    weights: { progressive: 10, moderate_dem: 3, independent: 1 },
  },
  {
    id: "bernie",
    name: "Bernie Sanders",
    coalition: "Progressive Democrats",
    why: "Centers Medicare for All, worker power, and taxing concentrated wealth as ordinary democratic socialism.",
    weights: { progressive: 10, moderate_dem: 2, independent: 2 },
  },
  {
    id: "warren",
    name: "Elizabeth Warren",
    coalition: "Progressive Democrats",
    why: "Pairs consumer protection and antitrust with detailed policy scaffolding, not vibes alone.",
    weights: { progressive: 9, moderate_dem: 4, independent: 2 },
  },
  {
    id: "whitmer",
    name: "Gretchen Whitmer",
    coalition: "Mainstream Democrats",
    why: "Governing Democrat: reproductive rights, infrastructure, and pragmatic majority politics over purity fights.",
    weights: { progressive: 4, moderate_dem: 10, independent: 4 },
  },
  {
    id: "warnock",
    name: "Raphael Warnock",
    coalition: "Mainstream Democrats",
    why: "Faith-rooted coalition builder on voting rights, care economy, and broad-tent Democratic priorities.",
    weights: { progressive: 5, moderate_dem: 9, independent: 4 },
  },
  {
    id: "buttigieg",
    name: "Pete Buttigieg",
    coalition: "Mainstream Democrats",
    why: "Institutionalist Democrat: competent delivery, NATO-friendly foreign policy, incremental economic reform.",
    weights: { progressive: 3, moderate_dem: 10, independent: 5, moderate_gop: 1 },
  },
  {
    id: "kinzinger",
    name: "Adam Kinzinger",
    coalition: "Anti-MAGA conservatives",
    why: "Conservative on many pocketbook issues who rejected election denial and authoritarian loyalty tests.",
    weights: { independent: 6, moderate_gop: 8, moderate_dem: 3, maga: 0 },
  },
  {
    id: "cheney",
    name: "Liz Cheney",
    coalition: "Anti-MAGA conservatives",
    why: "National-security Republican who put constitutional transfer of power above party brand capture.",
    weights: { independent: 5, moderate_gop: 9, moderate_dem: 2, maga: 0 },
  },
  {
    id: "romney",
    name: "Mitt Romney",
    coalition: "Traditional conservatives",
    why: "Chamber-of-commerce conservatism: markets, NATO, institutional norms, not conspiracy politics.",
    weights: { moderate_gop: 10, independent: 5, moderate_dem: 2, maga: 1 },
  },
  {
    id: "murkowski",
    name: "Lisa Murkowski",
    coalition: "Traditional conservatives",
    why: "Institution-first Republican: abortion exceptions, bipartisan deals, allergy to purity purges.",
    weights: { moderate_gop: 9, independent: 6, moderate_dem: 3, maga: 1 },
  },
  {
    id: "collins",
    name: "Susan Collins",
    coalition: "Traditional conservatives",
    why: "Swing-state institutional Republican: incrementalism, confirmations fights, brand as 'moderate GOP.'",
    weights: { moderate_gop: 8, independent: 7, moderate_dem: 3, maga: 2 },
  },
  {
    id: "vance",
    name: "JD Vance",
    coalition: "MAGA leadership",
    why: "Nationalist hard-right agenda: culture war first, loyalty politics, and MAGA economic messaging.",
    weights: { maga: 10, moderate_gop: 3, independent: 1 },
  },
  {
    id: "freedom-caucus",
    name: "House Freedom Caucus wing",
    coalition: "MAGA-aligned officials",
    why: "Hard-right House bloc: maximal cuts, culture-war riders, and governing by shutdown threat.",
    weights: { maga: 10, moderate_gop: 2 },
  },
  {
    id: "maga-movement",
    name: "MAGA movement officials",
    coalition: "MAGA / hard-right",
    why: "Election-denial adjacent coalition that treats party brand as a loyalty cult, not classical conservatism.",
    weights: { maga: 10, moderate_gop: 1 },
  },
];

export type PersonAlignment = {
  id: string;
  name: string;
  coalition: string;
  why: string;
  percent: number;
  isTop: boolean;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Score figures against the user's camp % vector (0-100 per camp).
 * Cosine-ish weighted overlap normalized to 0-100.
 */
export function scorePersonAlignments(
  campPercents: Record<QuizCampId, number>
): PersonAlignment[] {
  const scored = quizFigures.map((fig) => {
    let dot = 0;
    let wSum = 0;
    for (const [camp, w] of Object.entries(fig.weights) as [
      QuizCampId,
      number,
    ][]) {
      const user = campPercents[camp] ?? 0;
      dot += w * user;
      wSum += w;
    }
    const percent = wSum > 0 ? Math.round(dot / wSum) : 0;
    return {
      id: fig.id,
      name: fig.name,
      coalition: fig.coalition,
      why: fig.why,
      percent: clamp(percent, 0, 100),
      isTop: false,
    };
  });

  scored.sort((a, b) => {
    if (b.percent !== a.percent) return b.percent - a.percent;
    return a.name.localeCompare(b.name);
  });

  if (scored[0]) scored[0].isTop = true;
  return scored;
}
