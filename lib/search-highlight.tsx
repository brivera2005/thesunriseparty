import type { ReactNode } from "react";

export function highlightMatches(text: string, query: string): ReactNode {
  const q = query.toLowerCase().replace(/\s+/g, " ").trim();
  if (!q) return text;
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) {
    const words = q.split(" ").filter(Boolean);
    for (const word of words) {
      const wi = lower.indexOf(word);
      if (wi !== -1) {
        return (
          <>
            {text.slice(0, wi)}
            <mark className="rounded bg-sunrise/25 px-0.5 text-foreground">
              {text.slice(wi, wi + word.length)}
            </mark>
            {text.slice(wi + word.length)}
          </>
        );
      }
    }
    return text;
  }
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-sunrise/25 px-0.5 text-foreground">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}
