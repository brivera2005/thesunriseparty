/**
 * Re-export of curated + auto Distraction Watch entries.
 * Canonical merge: lib/data/distractions.ts (imports distracted-auto.ts).
 * Live site is curated-first; auto stubs stay empty unless explicitly enabled.
 */
export {
  distractions as distractedEntries,
  getDistractionById as getDistractedById,
} from "./distractions";
