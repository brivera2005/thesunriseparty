import {
  QUIZ_CAMPS,
  quizQuestions,
  type QuizCampId,
  type QuizOption,
  type QuizQuestion,
} from "@/lib/data/quiz-questions";
import {
  scorePersonAlignments,
  type PersonAlignment,
} from "@/lib/data/quiz-figures";

export type QuizAnswers = Record<string, string>;

export type CampAlignment = {
  id: QuizCampId;
  label: string;
  short: string;
  percent: number;
};

export type MagaCallout = {
  questionId: string;
  topic: string;
  prompt: string;
  yourLabel: string;
  magaLabel: string;
  why: string;
};

export type { PersonAlignment };

export type QuizResult = {
  economic: number;
  social: number;
  quadrant: string;
  quadrantBlurb: string;
  alignments: CampAlignment[];
  topCamps: CampAlignment[];
  personAlignments: PersonAlignment[];
  topPerson: PersonAlignment | null;
  magaPercent: number;
  showMagaRealityCheck: boolean;
  magaCallouts: MagaCallout[];
  answeredCount: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Per-axis average of the most extreme option on each answered question.
 * Raw option scores are typically ±1..9, so a plain mean never reaches the
 * compass edges at ±10. We use these bounds to stretch consistent answer
 * patterns onto the full plot.
 */
export function attainableAxisBounds(questions: QuizQuestion[]): {
  economicMin: number;
  economicMax: number;
  socialMin: number;
  socialMax: number;
} {
  let economicMin = 0;
  let economicMax = 0;
  let socialMin = 0;
  let socialMax = 0;
  const n = Math.max(questions.length, 1);
  for (const q of questions) {
    const econ = q.options.map((o) => o.scores.economic);
    const soc = q.options.map((o) => o.scores.social);
    economicMin += Math.min(...econ);
    economicMax += Math.max(...econ);
    socialMin += Math.min(...soc);
    socialMax += Math.max(...soc);
  }
  return {
    economicMin: economicMin / n,
    economicMax: economicMax / n,
    socialMin: socialMin / n,
    socialMax: socialMax / n,
  };
}

/** Map a raw average onto -10..10 using the quiz's attainable min/max. Zero stays zero. */
export function scaleAxisToCompass(
  rawAvg: number,
  minAttainable: number,
  maxAttainable: number
): number {
  if (rawAvg >= 0) {
    const denom = Math.max(maxAttainable, 1e-9);
    return clamp((rawAvg / denom) * 10, -10, 10);
  }
  const denom = Math.max(Math.abs(minAttainable), 1e-9);
  return clamp((rawAvg / denom) * 10, -10, 10);
}

function findOption(q: QuizQuestion, optionId: string): QuizOption | undefined {
  return q.options.find((o) => o.id === optionId);
}

function magaPreferredOption(q: QuizQuestion): QuizOption | undefined {
  return (
    q.options.find((o) => o.magaPreferred) ??
    [...q.options].sort(
      (a, b) => (b.alignments.maga ?? 0) - (a.alignments.maga ?? 0)
    )[0]
  );
}

export function quadrantFor(
  economic: number,
  social: number
): { quadrant: string; blurb: string } {
  const econSide =
    economic < -1.5 ? "left" : economic > 1.5 ? "right" : "center";
  const socSide =
    social < -1.5 ? "libertarian" : social > 1.5 ? "authoritarian" : "center";

  if (econSide === "left" && socSide === "libertarian") {
    return {
      quadrant: "Libertarian Left",
      blurb:
        "You favor shared economic security and wide personal freedom. Progressive on pocketbook and social liberty.",
    };
  }
  if (econSide === "right" && socSide === "libertarian") {
    return {
      quadrant: "Libertarian Right",
      blurb:
        "You favor markets and low taxes, with skepticism of social control. Classic small-government posture.",
    };
  }
  if (econSide === "left" && socSide === "authoritarian") {
    return {
      quadrant: "Authoritarian Left",
      blurb:
        "You favor economic leveling with stronger social rules. Less common in U.S. party brands, but a real compass corner.",
    };
  }
  if (econSide === "right" && socSide === "authoritarian") {
    return {
      quadrant: "Authoritarian Right",
      blurb:
        "You favor markets plus stronger social and cultural enforcement. Closest to hard-right / MAGA space when extreme.",
    };
  }
  if (econSide === "center" && socSide === "libertarian") {
    return {
      quadrant: "Social Libertarian",
      blurb:
        "Economically mixed, socially hands-off. Live-and-let-live with flexible fiscal views.",
    };
  }
  if (econSide === "center" && socSide === "authoritarian") {
    return {
      quadrant: "Social Authoritarian",
      blurb:
        "Economically mixed, socially strict. Order and tradition matter more than left/right tax fights.",
    };
  }
  if (econSide === "left" && socSide === "center") {
    return {
      quadrant: "Economic Progressive",
      blurb:
        "Left on taxes and public goods, middle on social control. New Deal style more than culture warrior.",
    };
  }
  if (econSide === "right" && socSide === "center") {
    return {
      quadrant: "Economic Conservative",
      blurb:
        "Right on markets and taxes, middle on social questions. Chamber-of-commerce conservatism.",
    };
  }
  return {
    quadrant: "Political Center",
    blurb:
      "Your answers sit near the middle on both axes. That can mean pragmatism, or different left/right pulls that cancel out.",
  };
}

export function scoreQuiz(answers: QuizAnswers): QuizResult {
  let economicSum = 0;
  let socialSum = 0;
  let answered = 0;
  const answeredQuestions: QuizQuestion[] = [];

  const campSums: Record<QuizCampId, number> = {
    progressive: 0,
    moderate_dem: 0,
    independent: 0,
    moderate_gop: 0,
    maga: 0,
  };
  const campMax: Record<QuizCampId, number> = {
    progressive: 0,
    moderate_dem: 0,
    independent: 0,
    moderate_gop: 0,
    maga: 0,
  };

  const magaCallouts: MagaCallout[] = [];

  for (const q of quizQuestions) {
    const optionId = answers[q.id];
    if (!optionId) continue;
    const opt = findOption(q, optionId);
    if (!opt) continue;

    answered += 1;
    answeredQuestions.push(q);
    economicSum += opt.scores.economic;
    socialSum += opt.scores.social;

    for (const camp of QUIZ_CAMPS) {
      const w = opt.alignments[camp.id] ?? 0;
      campSums[camp.id] += w;
      const maxForQ = Math.max(
        ...q.options.map((o) => o.alignments[camp.id] ?? 0),
        0
      );
      campMax[camp.id] += maxForQ;
    }

    const magaOpt = magaPreferredOption(q);
    if (magaOpt && magaOpt.id !== opt.id) {
      const yourMaga = opt.alignments.maga ?? 0;
      const preferredMaga = magaOpt.alignments.maga ?? 0;
      if (preferredMaga - yourMaga >= 5) {
        magaCallouts.push({
          questionId: q.id,
          topic: q.topic,
          prompt: q.prompt,
          yourLabel: opt.label,
          magaLabel: magaOpt.label,
          why: `${opt.help} Typical MAGA / hard-right position: "${magaOpt.label}"`,
        });
      }
    }
  }

  const n = Math.max(answered, 1);
  const bounds = attainableAxisBounds(answeredQuestions);
  const economic = scaleAxisToCompass(
    economicSum / n,
    bounds.economicMin,
    bounds.economicMax
  );
  const social = scaleAxisToCompass(
    socialSum / n,
    bounds.socialMin,
    bounds.socialMax
  );
  const { quadrant, blurb } = quadrantFor(economic, social);

  const alignments: CampAlignment[] = QUIZ_CAMPS.map((camp) => {
    const max = campMax[camp.id] || 1;
    const percent = Math.round((campSums[camp.id] / max) * 100);
    return {
      id: camp.id,
      label: camp.label,
      short: camp.short,
      percent: clamp(percent, 0, 100),
    };
  }).sort((a, b) => b.percent - a.percent);

  const magaPercent = alignments.find((a) => a.id === "maga")?.percent ?? 0;
  const topCamps = alignments.slice(0, 3);

  const campPercentMap = Object.fromEntries(
    alignments.map((a) => [a.id, a.percent])
  ) as Record<QuizCampId, number>;
  const personAlignments = scorePersonAlignments(campPercentMap).slice(0, 8);
  const topPerson = personAlignments[0] ?? null;

  const showMagaRealityCheck = magaPercent < 55 && magaCallouts.length >= 3;

  return {
    economic: Math.round(economic * 10) / 10,
    social: Math.round(social * 10) / 10,
    quadrant,
    quadrantBlurb: blurb,
    alignments,
    topCamps,
    personAlignments,
    topPerson,
    magaPercent,
    showMagaRealityCheck,
    magaCallouts: magaCallouts.slice(0, 6),
    answeredCount: answered,
  };
}

export function encodeResultsCompact(answers: QuizAnswers): string {
  const tokens: string[] = [];
  quizQuestions.forEach((q, qi) => {
    const oid = answers[q.id];
    if (!oid) return;
    const oi = q.options.findIndex((o) => o.id === oid);
    if (oi < 0) return;
    tokens.push(`${qi}:${oi}`);
  });
  return `a=${tokens.join(",")}`;
}

export function decodeAnswers(search: string): QuizAnswers | null {
  const raw = search.startsWith("?") ? search.slice(1) : search.replace(/^#/, "");
  if (!raw) return null;

  const answers: QuizAnswers = {};
  const params = new URLSearchParams(raw);
  const compact = params.get("a");

  if (compact) {
    for (const token of compact.split(",")) {
      const [qiStr, oiStr] = token.split(":");
      const qi = Number(qiStr);
      const oi = Number(oiStr);
      const q = quizQuestions[qi];
      if (!q || Number.isNaN(oi) || !q.options[oi]) continue;
      answers[q.id] = q.options[oi].id;
    }
    return Object.keys(answers).length ? answers : null;
  }

  for (const q of quizQuestions) {
    const v = params.get(q.id);
    if (v == null) continue;
    const oi = Number(v);
    if (!Number.isNaN(oi) && q.options[oi]) {
      answers[q.id] = q.options[oi].id;
    } else if (q.options.some((o) => o.id === v)) {
      answers[q.id] = v;
    }
  }

  return Object.keys(answers).length ? answers : null;
}

export function resultsShareUrl(answers: QuizAnswers, origin?: string): string {
  const base =
    origin ??
    (typeof window !== "undefined"
      ? window.location.origin
      : "https://thesunriseparty.pages.dev");
  return `${base}/quiz?${encodeResultsCompact(answers)}`;
}

export function resultsShareText(result: QuizResult): string {
  const top = result.topCamps
    .map((c) => `${c.short} ${c.percent}%`)
    .join(" · ");
  const person = result.topPerson
    ? ` Top person: ${result.topPerson.name} ${result.topPerson.percent}%.`
    : "";
  return `My Project Sunrise Political Standing: ${result.quadrant} (econ ${result.economic}, social ${result.social}). Alignment: ${top}.${person} Take the quiz:`;
}

/** Minimum answers needed to restore a shared results link after the bank grows. */
export const QUIZ_SHARE_MIN_ANSWERS = 12;
