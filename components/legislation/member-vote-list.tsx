"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Phone, Search } from "lucide-react";
import type { BillVote, BillVoteMember, MemberVoteCast, PartyCode } from "@/lib/types";
import { partyColor } from "@/lib/data/legislation";
import { LegislatorName } from "@/components/legislation/legislator-name";
import { cn } from "@/lib/utils";

const CAST_ORDER: MemberVoteCast[] = ["Yea", "Nay", "Present", "Not Voting"];

function partyBucket(
  members: BillVoteMember[],
  party: PartyCode,
  cast: MemberVoteCast
) {
  return members.filter((m) => m.party === party && m.vote === cast);
}

function PartySection({
  party,
  label,
  members,
  defaultOpen,
}: {
  party: PartyCode;
  label: string;
  members: BillVoteMember[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const color = partyColor(party);
  const yeas = partyBucket(members, party, "Yea").length;
  const nays = partyBucket(members, party, "Nay").length;
  const present = partyBucket(members, party, "Present").length;
  const nv = partyBucket(members, party, "Not Voting").length;

  if (!members.some((m) => m.party === party)) return null;

  return (
    <div className="rounded-lg border border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold">
          <span
            className="size-2.5 rounded-full"
            style={{ backgroundColor: color }}
            aria-hidden
          />
          <span style={{ color }}>{label}</span>
          <span className="font-normal text-muted-foreground tabular-nums">
            Yea {yeas} · Nay {nays}
            {present ? ` · Present ${present}` : ""}
            {nv ? ` · NV ${nv}` : ""}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open ? (
        <div className="space-y-3 border-t border-border px-3 py-3">
          {CAST_ORDER.map((cast) => {
            const list = partyBucket(members, party, cast);
            if (!list.length) return null;
            return (
              <div key={cast}>
                <p className="mb-1.5 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                  {cast} ({list.length})
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {list
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((m) => (
                      <li key={`${m.bioguideId || m.name}-${m.state}-${cast}`}>
                        <LegislatorName
                          name={m.name}
                          party={m.party}
                          state={m.state}
                          bioguideId={m.bioguideId}
                          vote={m.vote}
                          variant="vote"
                        />
                      </li>
                    ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function MemberVoteList({
  vote,
  className,
}: {
  vote: BillVote;
  className?: string;
}) {
  const members = vote.members ?? [];
  const [query, setQuery] = useState("");
  const [castFilter, setCastFilter] = useState<"all" | MemberVoteCast>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      if (castFilter !== "all" && m.vote !== castFilter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.state.toLowerCase().includes(q) ||
        m.party.toLowerCase().includes(q) ||
        m.vote.toLowerCase().includes(q)
      );
    });
  }, [members, query, castFilter]);

  if (!members.length) {
    return (
      <p className="text-xs text-muted-foreground">
        Member-level roll call not loaded yet. Official tallies above still
        reflect chamber results
        {vote.rollCallUrl ? (
          <>
            {" · "}
            <a
              href={vote.rollCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--section-legislation)] underline-offset-2 hover:underline"
            >
              Open official roll call
            </a>
          </>
        ) : null}
        .
      </p>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold text-navy">
          Full roll call · {members.length} members
          {vote.rollCallNumber != null ? (
            <span className="ml-1 font-mono font-normal text-muted-foreground">
              #{vote.rollCallNumber}
            </span>
          ) : null}
        </p>
        {vote.rollCallUrl ? (
          <a
            href={vote.rollCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-[color:var(--section-legislation)] underline-offset-2 hover:underline"
          >
            Official receipt
          </a>
        ) : null}
      </div>

      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground"
        >
          <Search className="size-3" />
          {filtersOpen ? "Hide search" : "Search / filter voters"}
        </button>
      </div>

      <div
        className={cn(
          "flex flex-col gap-2 sm:flex-row sm:items-center",
          !filtersOpen && "hidden sm:flex"
        )}
      >
        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, state, party…"
            className="h-9 w-full rounded-md border border-border bg-white pr-3 pl-8 text-xs text-navy outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <select
          value={castFilter}
          onChange={(e) =>
            setCastFilter(e.target.value as "all" | MemberVoteCast)
          }
          className="h-9 rounded-md border border-border bg-white px-2 text-xs text-navy"
          aria-label="Filter by vote"
        >
          <option value="all">All votes</option>
          {CAST_ORDER.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {query || castFilter !== "all" ? (
        <ul className="grid max-h-80 gap-2 overflow-y-auto sm:grid-cols-2">
          {filtered.length === 0 ? (
            <li className="text-xs text-muted-foreground">No members match.</li>
          ) : (
            filtered
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((m) => (
                <li key={`${m.bioguideId || m.name}-${m.state}-${m.vote}`}>
                  <LegislatorName
                    name={m.name}
                    party={m.party}
                    state={m.state}
                    bioguideId={m.bioguideId}
                    vote={m.vote}
                    variant="vote"
                  />
                </li>
              ))
          )}
        </ul>
      ) : (
        <div className="space-y-2">
          <PartySection
            party="D"
            label="Democrats"
            members={members}
            defaultOpen
          />
          <PartySection
            party="R"
            label="Republicans"
            members={members}
            defaultOpen
          />
          <PartySection party="I" label="Independents" members={members} />
        </div>
      )}

      <p className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
        <Phone className="size-3" aria-hidden />
        Tap a member for office phone and official contact (emails only when
        published; never invented).
      </p>
    </div>
  );
}
