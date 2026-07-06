import type { SearchResultType } from "@/lib/search";

export interface PalettePin {
  id: string;
  type: SearchResultType;
  title: string;
  href: string;
  anchor?: string;
}

const RECENT_KEY = "sunrise-cmd-recent";
const PINS_KEY = "sunrise-cmd-pins";
const MAX_RECENT = 8;
const MAX_PINS = 12;

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // quota or private mode — ignore
  }
}

export function getRecentSearches(): string[] {
  return readJson<string[]>(RECENT_KEY, []);
}

export function addRecentSearch(query: string) {
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) return;
  const next = [
    trimmed,
    ...getRecentSearches().filter((q) => q.toLowerCase() !== trimmed.toLowerCase()),
  ].slice(0, MAX_RECENT);
  writeJson(RECENT_KEY, next);
}

export function clearRecentSearches() {
  writeJson(RECENT_KEY, []);
}

export function getPinnedItems(): PalettePin[] {
  return readJson<PalettePin[]>(PINS_KEY, []);
}

export function isPinned(id: string): boolean {
  return getPinnedItems().some((p) => p.id === id);
}

export function togglePin(item: PalettePin): boolean {
  const pins = getPinnedItems();
  const exists = pins.some((p) => p.id === item.id);
  if (exists) {
    writeJson(
      PINS_KEY,
      pins.filter((p) => p.id !== item.id)
    );
    return false;
  }
  writeJson(PINS_KEY, [item, ...pins].slice(0, MAX_PINS));
  return true;
}

export function removePin(id: string) {
  writeJson(
    PINS_KEY,
    getPinnedItems().filter((p) => p.id !== id)
  );
}
