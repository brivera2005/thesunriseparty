"use client";

import type { BillVote } from "@/lib/types";
import { partyColor } from "@/lib/data/legislation";
import { formatDateUS } from "@/lib/format-date";
import { cn } from "@/lib/utils";

function Segment({
  value,
  total,
  color,
  label,
}: {
  value: number;
  total: number;
  color: string;
  label: string;
}) {
  if (value <= 0 || total <= 0) return null;
  const pct = (value / total) * 100;
  return (
    <div
      className="h-full transition-[width] duration-500 ease-out"
      style={{ width: `${pct}%`, backgroundColor: color }}
      title={`${label}: ${value}`}
    />
  );
}

export function VoteBars({
  vote,
  className,
}: {
  vote: BillVote;
  className?: string;
}) {
  const yeaTotal = vote.yeas || 1;
  const nayTotal = vote.nays || 1;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
        <p className="font-medium text-navy">
          {vote.chamber === "house" ? "House" : "Senate"} · {vote.question}
        </p>
        <p className="tabular-nums text-muted-foreground">
          {formatDateUS(vote.date)} · Yea {vote.yeas} · Nay {vote.nays}
          {vote.present ? ` · Present ${vote.present}` : ""}
          {vote.notVoting ? ` · NV ${vote.notVoting}` : ""}
        </p>
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
          <span>Yea by party</span>
          <span className="tabular-nums">{vote.yeas}</span>
        </div>
        <div className="flex h-3 overflow-hidden rounded-full bg-muted">
          <Segment value={vote.byParty.D.yea} total={yeaTotal} color={partyColor("D")} label="D yea" />
          <Segment value={vote.byParty.R.yea} total={yeaTotal} color={partyColor("R")} label="R yea" />
          <Segment value={vote.byParty.I.yea} total={yeaTotal} color={partyColor("I")} label="I yea" />
        </div>
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
          <span>Nay by party</span>
          <span className="tabular-nums">{vote.nays}</span>
        </div>
        <div className="flex h-3 overflow-hidden rounded-full bg-muted">
          <Segment value={vote.byParty.D.nay} total={nayTotal} color={partyColor("D")} label="D nay" />
          <Segment value={vote.byParty.R.nay} total={nayTotal} color={partyColor("R")} label="R nay" />
          <Segment value={vote.byParty.I.nay} total={nayTotal} color={partyColor("I")} label="I nay" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-[10px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <span className="size-2 rounded-full" style={{ backgroundColor: partyColor("D") }} />
          Dem
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="size-2 rounded-full" style={{ backgroundColor: partyColor("R") }} />
          GOP
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="size-2 rounded-full" style={{ backgroundColor: partyColor("I") }} />
          Ind
        </span>
        {vote.rollCallUrl ? (
          <a
            href={vote.rollCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-medium text-[color:var(--section-legislation)] underline-offset-2 hover:underline"
          >
            Official roll call
            {vote.rollCallNumber != null ? ` #${vote.rollCallNumber}` : ""}
          </a>
        ) : null}
      </div>
    </div>
  );
}
