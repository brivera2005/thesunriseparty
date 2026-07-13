import type { CitationSource } from "@/lib/types";

/** Normalize to absolute https URL; reject empty/relative values. */
export function normalizeCitationUrl(url: string): string {
  const trimmed = (url ?? "").trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("http://")) return `https://${trimmed.slice(7)}`;
  if (trimmed.startsWith("//")) return `https:${trimmed}`;
  return "";
}

/**
 * Prefer Wayback calendar / latest-snapshot entry points over fabricated
 * timestamps. Fake YYYYMMDD000000 stamps often 404 for recent White House
 * pages that have not been crawled yet.
 */
export function waybackCalendarUrl(url: string): string {
  const absolute = normalizeCitationUrl(url);
  if (!absolute) return "";
  return `https://web.archive.org/web/*/${absolute}`;
}

/** Build a citation with a durable Wayback Machine archive link. */
export function cite(
  id: string,
  title: string,
  publisher: string,
  url: string,
  excerpt: string,
  date: string
): CitationSource {
  const absolute = normalizeCitationUrl(url);
  return {
    id,
    title,
    publisher,
    url: absolute,
    waybackUrl: waybackCalendarUrl(absolute),
    excerpt,
    date,
  };
}
