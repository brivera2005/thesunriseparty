export type SavedItemType = "event" | "rebuttal";

export interface SavedItem {
  id: string;
  type: SavedItemType;
  title: string;
  href: string;
  savedAt: string;
}

const STORAGE_KEY = "sunrise-saved-items";
const MAX_SAVED = 50;

export const SAVED_ITEMS_CHANGED = "sunrise-saved-change";

function readSaved(): SavedItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedItem[];
  } catch {
    return [];
  }
}

function writeSaved(items: SavedItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(SAVED_ITEMS_CHANGED));
  } catch {
    // quota or private mode - ignore
  }
}

export function getSavedItems(): SavedItem[] {
  return readSaved();
}

export function isSaved(type: SavedItemType, id: string): boolean {
  return readSaved().some((item) => item.type === type && item.id === id);
}

export function toggleSaved(item: Omit<SavedItem, "savedAt">): boolean {
  const saved = readSaved();
  const exists = saved.some((s) => s.type === item.type && s.id === item.id);
  if (exists) {
    writeSaved(saved.filter((s) => !(s.type === item.type && s.id === item.id)));
    return false;
  }
  const next: SavedItem = { ...item, savedAt: new Date().toISOString() };
  writeSaved([next, ...saved].slice(0, MAX_SAVED));
  return true;
}

export function removeSaved(type: SavedItemType, id: string) {
  writeSaved(readSaved().filter((s) => !(s.type === type && s.id === id)));
}

export function clearSaved() {
  writeSaved([]);
}
