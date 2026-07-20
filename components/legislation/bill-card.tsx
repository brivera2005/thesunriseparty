import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { LegislationBill } from "@/lib/types";
import {
  legislationDetailPath,
  statusLabel,
  floorStatusLabel,
} from "@/lib/data/legislation";
import { LegislatorName } from "@/components/legislation/legislator-name";
import { VoteBars } from "@/components/legislation/vote-bars";
import { Badge } from "@/components/ui/badge";
import { TipText } from "@/components/ui/term-tip";
import { formatDateUS } from "@/lib/format-date";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  introduced: "border-border bg-muted text-muted-foreground",
  committee: "border-amber-300/60 bg-amber-50 text-amber-800",
  floor: "border-sky-300/60 bg-sky-50 text-sky-800",
  passed: "border-emerald-300/60 bg-emerald-50 text-emerald-800",
  failed: "border-destructive/30 bg-destructive/5 text-destructive",
  enacted: "border-primary/40 bg-accent text-primary",
  vetoed: "border-destructive/40 bg-destructive/10 text-destructive",
};

export function BillCard({ bill }: { bill: LegislationBill }) {
  const latestVote = bill.votes?.[0];

  return (
    <article
      className={cn(
        "group surface-card-interactive flex flex-col overflow-hidden border-l-4 p-0",
      )}
      style={{
        borderLeftColor:
          bill.sponsor.party === "D"
            ? "#2563eb"
            : bill.sponsor.party === "R"
              ? "#dc2626"
              : "#7c3aed",
      }}
    >
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto">
          <span className="shrink-0 font-mono text-xs font-bold tracking-wide text-navy">
            {bill.billNumber}
          </span>
          {bill.status === "floor" ? (
            <Badge
              variant="outline"
              className="shrink-0 animate-pulse border-sky-400 bg-sky-100 text-[9px] font-bold text-sky-900 uppercase"
            >
              {floorStatusLabel(bill)}
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className={cn("shrink-0 text-[10px]", statusStyles[bill.status])}
            >
              {statusLabel(bill.status)}
            </Badge>
          )}
          <Badge variant="outline" className="shrink-0 text-[10px] capitalize">
            {bill.chamber}
          </Badge>
          {bill.impactSeverity != null && (
            <span className="ml-auto shrink-0 text-xs font-bold tabular-nums text-navy">
              {bill.impactSeverity}/10
            </span>
          )}
        </div>

        <div>
          <Link
            href={legislationDetailPath(bill.id)}
            className="text-base font-semibold text-navy transition-colors group-hover:text-primary"
          >
            {bill.title}
          </Link>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            <TipText>{bill.summary}</TipText>
          </p>
        </div>

        <LegislatorName
          name={bill.sponsor.name}
          party={bill.sponsor.party}
          state={bill.sponsor.state}
        />

        <p className="text-[11px] text-muted-foreground">
          <span className="font-medium text-navy">Last action:</span>{" "}
          <TipText>{bill.lastAction}</TipText>{" "}
          <span className="tabular-nums">
            ({formatDateUS(bill.lastActionDate)})
          </span>
        </p>

        {latestVote && (
          <div className="rounded-lg border border-border bg-muted/30 p-3">
            <VoteBars vote={latestVote} />
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {bill.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-border bg-muted/20 px-4 py-2.5 sm:px-5">
        <Link
          href={legislationDetailPath(bill.id)}
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[color:var(--section-legislation)]"
        >
          Full analysis
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <a
          href={bill.congressGovUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary"
        >
          Congress.gov
          <ExternalLink className="size-3" />
        </a>
      </div>
    </article>
  );
}
