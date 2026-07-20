/**
 * Re-export of curated + auto Distraction Watch entries.
 * Canonical merge: lib/data/distractions.ts (imports distracted-auto.ts).
 */
export {
  distractions as distractedEntries,
  getDistractionById as getDistractedById,
} from "./distractions";
