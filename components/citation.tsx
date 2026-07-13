"use client";

import { ExternalLink, Archive, ShieldCheck, AlertTriangle } from "lucide-react";
import type { CitationSource } from "@/lib/types";
import { useAppStore } from "@/lib/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  isUrlValidated,
  extractArchiveDate,
} from "@/lib/data/validated-urls";
import {
  normalizeCitationUrl,
  waybackCalendarUrl,
} from "@/lib/data/conversation-citations";
import { getSourceTier } from "@/lib/data/source-tier";
import { cn } from "@/lib/utils";
import { formatDateUS, formatMonthUS } from "@/lib/format-date";

interface CitationProps {
  source: CitationSource;
  index?: number;
  children?: React.ReactNode;
}

export function Citation({ source, index, children }: CitationProps) {
  const openCitation = useAppStore((s) => s.openCitation);

  return (
    <button
      type="button"
      onClick={() => openCitation(source)}
      className="inline-flex cursor-pointer items-baseline gap-0.5 text-xs font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
    >
      {children ?? `[${index ?? source.id}]`}
    </button>
  );
}

function safeHref(url: string | undefined | null): string | null {
  const absolute = normalizeCitationUrl(url ?? "");
  return absolute || null;
}

export function CitationModal() {
  const activeCitation = useAppStore((s) => s.activeCitation);
  const closeCitation = useAppStore((s) => s.closeCitation);

  const primaryHref = activeCitation ? safeHref(activeCitation.url) : null;
  const archiveHref = activeCitation
    ? safeHref(activeCitation.waybackUrl) ||
      (primaryHref ? waybackCalendarUrl(primaryHref) : null)
    : null;
  const verified = primaryHref ? isUrlValidated(primaryHref) : false;
  const preferArchive = Boolean(archiveHref) && (!primaryHref || !verified);
  const archiveDate = activeCitation
    ? extractArchiveDate(activeCitation.waybackUrl)
    : null;
  const sourceTier = activeCitation
    ? getSourceTier(activeCitation.url, activeCitation.publisher)
    : null;

  return (
    <Dialog open={!!activeCitation} onOpenChange={(open) => !open && closeCitation()}>
      <DialogContent
        className="max-w-lg"
        aria-describedby={activeCitation ? "citation-excerpt" : undefined}
        aria-label="Citation source details"
      >
        {activeCitation && (
          <>
            <DialogHeader>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="w-fit">
                  {activeCitation.publisher}
                </Badge>
                {sourceTier && (
                  <Badge
                    variant="outline"
                    className={cn("text-[10px]", sourceTier.className)}
                    title={sourceTier.description}
                  >
                    {sourceTier.label}
                  </Badge>
                )}
                {verified && (
                  <Badge
                    variant="outline"
                    className="gap-1 border-primary/40 bg-primary/5 text-primary"
                  >
                    <ShieldCheck className="size-3" />
                    Verified
                  </Badge>
                )}
                {!verified && primaryHref && (
                  <Badge
                    variant="outline"
                    className="gap-1 border-amber-500/40 text-amber-800"
                  >
                    <AlertTriangle className="size-3" />
                    Use archive if primary fails
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-left leading-snug">
                {activeCitation.title}
              </DialogTitle>
              <DialogDescription className="text-left">
                Published {formatDateUS(activeCitation.date)}
              </DialogDescription>
            </DialogHeader>
            <blockquote
              id="citation-excerpt"
              className="border-l-2 border-primary/30 pl-4 text-sm leading-relaxed text-muted-foreground italic"
            >
              &ldquo;{activeCitation.excerpt}&rdquo;
            </blockquote>

            <div className="space-y-3 pt-2">
              {preferArchive && archiveHref ? (
                <div className="rounded-lg border border-primary/25 bg-primary/5 p-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Archived Copy (recommended)
                  </p>
                  <a
                    href={archiveHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex h-8 items-center gap-1.5 rounded-md border border-primary/30 bg-background px-3 text-sm font-medium hover:bg-muted"
                  >
                    <Archive className="size-3.5" />
                    Open archive
                  </a>
                  <p className="mt-2 truncate text-[11px] text-muted-foreground">
                    {archiveHref}
                  </p>
                </div>
              ) : null}

              {primaryHref ? (
                <div
                  className={cn(
                    "rounded-lg border p-3",
                    preferArchive
                      ? "border-border bg-muted/30"
                      : "border-primary/25 bg-primary/5"
                  )}
                >
                  <p
                    className={cn(
                      "mb-2 text-xs font-semibold uppercase tracking-wider",
                      preferArchive ? "text-muted-foreground" : "text-primary"
                    )}
                  >
                    Primary Source
                  </p>
                  <a
                    href={primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium hover:bg-muted"
                  >
                    <ExternalLink className="size-3.5" />
                    Open original
                  </a>
                  <p className="mt-2 truncate text-[11px] text-muted-foreground">
                    {primaryHref}
                  </p>
                </div>
              ) : (
                <p className="rounded-lg border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
                  No primary URL on file
                  {archiveHref ? "; use the archived copy above." : "."}
                </p>
              )}

              {!preferArchive && archiveHref ? (
                <div className="rounded-lg border border-border bg-muted/30 p-3">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Archived Copy
                  </p>
                  <a
                    href={archiveHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium hover:bg-muted"
                  >
                    <Archive className="size-3.5" />
                    Wayback Machine
                  </a>
                  {archiveDate && (
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      Snapshot archived {archiveDate ? formatDateUS(archiveDate) : archiveDate}
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

interface CitationListProps {
  sources: CitationSource[];
}

export function CitationList({ sources }: CitationListProps) {
  return (
    <span className="inline-flex flex-wrap gap-1">
      {sources.map((source, i) => (
        <Citation key={source.id} source={source} index={i + 1} />
      ))}
    </span>
  );
}
