"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { TipText } from "@/components/ui/term-tip";
import { LiveRecordPulse } from "@/components/layout/live-record-pulse";
import { formatDateUS, formatRelativeUS } from "@/lib/format-date";
import {
  getRecentActivity,
  recentActivitySectionBadge,
  type RecentActivityItem,
  type RecentActivitySection,
} from "@/lib/recent-activity";
import { cn } from "@/lib/utils";

const sectionTone: Record<
  RecentActivitySection,
  { chip: string; bar: string }
> = {
  tracker: {
    chip: "bg-[color:var(--section-tracker-soft)] text-[color:var(--section-tracker)]",
    bar: "bg-[color:var(--section-tracker)]",
  },
  bills: {
    chip: "bg-[color:var(--section-legislation-soft)] text-[color:var(--section-legislation)]",
    bar: "bg-[color:var(--section-legislation)]",
  },
  distracted: {
    chip: "bg-[color:var(--section-distracted-soft)] text-[color:var(--section-distracted)]",
    bar: "bg-[color:var(--section-distracted)]",
  },
};

function ActivityRow({
  item,
  relative,
}: {
  item: RecentActivityItem;
  relative: string;
}) {
  const tone = sectionTone[item.section];
  const absolute = formatDateUS(item.date);

  return (
    <Link
      href={item.href}
      className="group flex min-w-0 items-center gap-2.5 border-b border-white/[0.06] px-3 py-2 last:border-b-0 transition-colors hover:bg-white/[0.04] sm:gap-3 sm:px-4 sm:py-2.5"
    >
      <span
        aria-hidden
        className={cn("hidden h-8 w-0.5 shrink-0 rounded-full sm:block", tone.bar)}
      />
      <time
        dateTime={item.date}
        title={absolute}
        className="w-[4.25rem] shrink-0 font-mono text-[10px] tabular-nums tracking-wide text-white/45 sm:w-[4.75rem] sm:text-[11px]"
      >
        {relative}
      </time>
      <span
        className={cn(
          "inline-flex shrink-0 items-center rounded px-1.5 py-0.5 text-[9px] font-bold tracking-[0.08em] uppercase sm:text-[10px]",
          tone.chip
        )}
      >
        {recentActivitySectionBadge[item.section]}
      </span>
      <span className="min-w-0 flex-1 truncate text-left text-[12px] leading-snug text-white/90 sm:text-[13px]">
        {item.bury ? (
          <>
            <span className="mr-1.5 font-bold tracking-wide text-[#f87171]">
              BURY:
            </span>
            <TipText tone="dark" className="text-white/95">
              {item.label}
            </TipText>
          </>
        ) : (
          <TipText tone="dark">{item.label}</TipText>
        )}
      </span>
      <ArrowUpRight
        className="size-3.5 shrink-0 text-white/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f0a020]"
        strokeWidth={1.75}
        aria-hidden
      />
    </Link>
  );
}

export function ActivityTicker({ limit = 6 }: { limit?: number }) {
  const items = getRecentActivity(limit);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (items.length === 0) return null;

  return (
    <FadeIn>
      <section
        aria-label="What just happened"
        className="activity-ticker border-b border-[#0b1f3a]/20 bg-[#0b1f3a]"
      >
        <div className="page-container py-3 sm:py-3.5">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#071526] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-3 py-2 sm:px-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f0a020] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#f0a020]" />
                </span>
                <p className="truncate text-[11px] font-bold tracking-[0.14em] text-white uppercase sm:text-xs">
                  What just happened
                </p>
                <span className="hidden items-center gap-1.5 font-mono text-[10px] tracking-wide text-white/35 sm:inline-flex">
                  OPS //
                  <LiveRecordPulse size="sm" className="bg-[#ef4444]" />
                  LIVE
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-[10px] font-medium tracking-wide text-white/40 sm:text-[11px]">
                <Link
                  href="/tracker"
                  className="transition-colors hover:text-[#f0a020]"
                >
                  Tracker
                </Link>
                <span aria-hidden className="text-white/20">
                  ·
                </span>
                <Link
                  href="/legislation"
                  className="transition-colors hover:text-[#f0a020]"
                >
                  Bills
                </Link>
                <span aria-hidden className="text-white/20">
                  ·
                </span>
                <Link
                  href="/distracted"
                  className="transition-colors hover:text-[#f0a020]"
                >
                  Distracted
                </Link>
              </div>
            </div>

            <ul className="divide-y divide-transparent">
              {items.map((item) => (
                <li key={item.id}>
                  <ActivityRow
                    item={item}
                    relative={
                      now ? formatRelativeUS(item.date, now) : formatDateUS(item.date)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
