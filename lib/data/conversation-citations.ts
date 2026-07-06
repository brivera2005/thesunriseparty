import type { CitationSource } from "@/lib/types";

/** Build a citation with a Wayback Machine archive link. */
export function cite(
  id: string,
  title: string,
  publisher: string,
  url: string,
  excerpt: string,
  date: string
): CitationSource {
  const archiveDate = date.replace(/-/g, "");
  return {
    id,
    title,
    publisher,
    url,
    waybackUrl: `https://web.archive.org/web/${archiveDate}000000/${url}`,
    excerpt,
    date,
  };
}
