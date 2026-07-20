/**
 * Display dates as American MM/DD/YYYY sitewide.
 * Keep ISO (YYYY-MM-DD) in data for sorting; format only at render time.
 */
export function formatDateUS(date: string | Date): string {
  if (date instanceof Date) {
    if (Number.isNaN(date.getTime())) return "";
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = String(date.getFullYear());
    return `${mm}/${dd}/${yyyy}`;
  }

  const raw = date.trim();
  if (!raw) return "";

  // Already MM/DD/YYYY
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(raw)) {
    const [m, d, y] = raw.split("/");
    return `${m.padStart(2, "0")}/${d.padStart(2, "0")}/${y}`;
  }

  // ISO date or datetime (YYYY-MM-DD…)
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    return `${iso[2]}/${iso[3]}/${iso[1]}`;
  }

  // YYYYMMDD (Wayback-style)
  if (/^\d{8}$/.test(raw)) {
    return `${raw.slice(4, 6)}/${raw.slice(6, 8)}/${raw.slice(0, 4)}`;
  }

  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) {
    return formatDateUS(parsed);
  }

  // Year-only or ranges (history): leave unchanged
  return raw;
}

/** Relative age for live feeds: "today", "1d ago", "2d ago", or MM/DD/YYYY when older. */
export function formatRelativeUS(
  date: string | Date,
  now: Date = new Date()
): string {
  const absolute = formatDateUS(date);
  if (!absolute || !/^\d{2}\/\d{2}\/\d{4}$/.test(absolute)) return absolute;

  const [mm, dd, yyyy] = absolute.split("/").map(Number);
  const then = new Date(yyyy, mm - 1, dd);
  if (Number.isNaN(then.getTime())) return absolute;

  const startNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startThen = new Date(then.getFullYear(), then.getMonth(), then.getDate());
  const days = Math.round(
    (startNow.getTime() - startThen.getTime()) / 86_400_000
  );

  if (days < 0) return absolute;
  if (days === 0) return "today";
  if (days === 1) return "1d ago";
  if (days < 14) return `${days}d ago`;
  return absolute;
}

/** Month headers: MM/YYYY */
export function formatMonthUS(date: string | Date): string {
  if (date instanceof Date) {
    if (Number.isNaN(date.getTime())) return "";
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return `${mm}/${date.getFullYear()}`;
  }
  const iso = date.trim().match(/^(\d{4})-(\d{2})/);
  if (iso) return `${iso[2]}/${iso[1]}`;
  const d = new Date(date.includes("T") ? date : `${date}T12:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return formatMonthUS(d);
}
