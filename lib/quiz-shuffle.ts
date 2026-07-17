/**
 * Seeded shuffle for quiz answer display order.
 * Same sessionSeed + questionId always yields the same order (stable back/forward).
 */

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Mulberry32 PRNG */
function mulberry32(seed: number) {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createQuizSessionSeed(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Fisher-Yates shuffle of a copy; original array untouched. */
export function seededShuffle<T>(items: readonly T[], seedKey: string): T[] {
  const out = [...items];
  const rand = mulberry32(hashString(seedKey));
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/** Display order for choice options. Sliders keep natural order (poles matter). */
export function shuffleChoiceOptions<T extends { id: string }>(
  options: readonly T[],
  sessionSeed: string,
  questionId: string
): T[] {
  return seededShuffle(options, `${sessionSeed}:${questionId}`);
}
