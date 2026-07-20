"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Link2,
} from "lucide-react";
import type { DistractionEntry } from "@/lib/types";
import { distractionDetailPath } from "@/lib/data/distractions";
import { formatDateUS } from "@/lib/format-date";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CitationList } from "@/components/citation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function severityClass(score: number) {
  if (score >= 9) return "text-severity-critical";
  if (score >= 7) return "text-severity-high";
  if (score >= 5) return "text-severity-moderate";
  return "text-severity-low";
}

function FlipShell({
  flipped,
  onToggle,
  front,
  back,
}: {
  flipped: boolean;
  onToggle: () => void;
  front: ReactNode;
  back: ReactNode;
}) {
  const frontId = useId();
  const backId = useId();

  return (
    <div className="[perspective:1200px]">
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={flipped}
        aria-controls={`${frontId} ${backId}`}
        className={cn(
          "relative block w-full cursor-pointer rounded-xl border border-black/[0.08] bg-transparent text-left outline-none transition-[box-shadow] focus-visible:ring-3 focus-visible:ring-navy/30",
          "touch-manipulation min-h-[280px] sm:min-h-[300px]"
        )}
      >
        <div
          className={cn(
            "relative w-full min-h-[280px] transition-transform duration-500 [transform-style:preserve-3d] sm:min-h-[300px]",
            flipped && "[transform:rotateY(180deg)]"
          )}
        >
          <div
            id={frontId}
            aria-hidden={flipped}
            className="absolute inset-0 flex min-h-[280px] flex-col overflow-y-auto rounded-xl bg-white p-4 [backface-visibility:hidden] sm:min-h-[300px] sm:p-5"
          >
            {front}
            <p className="mt-auto pt-3 text-center text-[11px] font-medium text-navy/45">
              Tap for Why
            </p>
          </div>
          <div
            id={backId}
            aria-hidden={!flipped}
            className="absolute inset-0 flex min-h-[280px] flex-col overflow-y-auto rounded-xl bg-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:min-h-[300px] sm:p-5"
          >
            {back}
            <p className="mt-auto pt-3 text-center text-[11px] font-medium text-navy/45">
              Tap to flip back
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

function CitationsLink({ entry }: { entry: DistractionEntry }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-8 gap-1.5 px-2 text-xs text-navy/60 hover:text-navy"
          onClick={(e) => e.stopPropagation()}
        >
          <Link2 className="size-3.5" />
          Citations
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-left text-base">Citations</DialogTitle>
          <DialogDescription className="text-left text-sm">
            {entry.title}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 text-sm">
          <CitationList sources={entry.sources} />
          <ul className="mt-3 space-y-1.5 text-muted-foreground">
            {entry.sources.map((s, i) => (
              <li key={s.id}>
                [{i + 1}] {s.title}
                {s.publisher ? ` · ${s.publisher}` : ""}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CardFace({
  entry,
  flipped,
  onToggle,
}: {
  entry: DistractionEntry;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <FlipShell
      flipped={flipped}
      onToggle={onToggle}
      front={
        <>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "text-xs font-bold tabular-nums",
                severityClass(entry.severity)
              )}
            >
              {entry.severity}/10
            </span>
            <span className="text-[11px] text-muted-foreground">
              {formatDateUS(entry.date)}
            </span>
            {entry.categories.slice(0, 2).map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="text-[10px] font-medium"
              >
                {cat}
              </Badge>
            ))}
          </div>
          <h3 className="text-lg font-bold leading-snug text-navy sm:text-xl">
            {entry.title}
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
                Distraction
              </dt>
              <dd className="mt-1 leading-snug text-navy/90">
                {entry.distraction}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.14em] text-[#e16323]/uppercase">
                Covering up
              </dt>
              <dd className="mt-1 leading-snug text-navy/90">
                {entry.coveringUp}
              </dd>
            </div>
          </dl>
        </>
      }
      back={
        <>
          <p className="text-[10px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
            Why
          </p>
          <h3 className="mt-1 line-clamp-2 text-base font-bold text-navy">
            {entry.title}
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-snug text-navy/90">
            <li>
              <span className="font-semibold text-navy">Motive. </span>
              {entry.whyTheyDoIt}
            </li>
            <li>
              <span className="font-semibold text-navy">Why it sticks. </span>
              {entry.whyPeopleBelieveIt}
            </li>
            <li>
              <span className="font-semibold text-navy">Tell. </span>
              {entry.howToSpotIt}
            </li>
          </ul>
        </>
      }
    />
  );
}

type DistractionDeckProps = {
  entries: DistractionEntry[];
};

export function DistractionDeck({ entries }: DistractionDeckProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [slideKey, setSlideKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const count = entries.length;
  const safeIndex = count === 0 ? 0 : Math.min(index, count - 1);
  const entry = entries[safeIndex];
  const progress = count > 0 ? ((safeIndex + 1) / count) * 100 : 0;

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
    setSlideKey((k) => k + 1);
  }, [entries]);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      const clamped = Math.max(0, Math.min(count - 1, next));
      setIndex(clamped);
      setFlipped(false);
      setSlideKey((k) => k + 1);
    },
    [count]
  );

  const goPrev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);
  const goNext = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === " " || e.key === "Enter") {
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  if (!entry) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        No distractions match these filters.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <p
          className="text-xs font-semibold tabular-nums text-navy/60"
          aria-live="polite"
        >
          Card {safeIndex + 1} of {count}
        </p>
        <p className="text-[11px] text-muted-foreground">
          Swipe or use arrows · Space flips
        </p>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-navy/[0.08]">
        <div
          className="h-full rounded-full bg-[#e16323] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        key={slideKey}
        className="animate-in fade-in slide-in-from-right-2 duration-200"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <CardFace
          entry={entry}
          flipped={flipped}
          onToggle={() => setFlipped((f) => !f)}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <CitationsLink entry={entry} />
        <Link
          href={distractionDetailPath(entry.id)}
          className="inline-flex h-8 items-center gap-1 text-xs font-semibold text-navy/60 hover:text-navy"
        >
          Open
          <ExternalLink className="size-3.5" />
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-12 min-w-[6.5rem] gap-1.5 border-navy/20 px-4"
          onClick={goPrev}
          disabled={safeIndex <= 0}
          aria-label="Previous card"
        >
          <ChevronLeft className="size-4" />
          Prev
        </Button>

        <Button
          type="button"
          variant={flipped ? "outline" : "secondary"}
          size="lg"
          className="h-12 px-4"
          onClick={() => setFlipped((f) => !f)}
        >
          {flipped ? "Front" : "Why"}
        </Button>

        <Button
          type="button"
          size="lg"
          className="h-12 min-w-[6.5rem] gap-1.5 bg-navy px-4 text-white hover:bg-navy/90 disabled:opacity-40"
          onClick={goNext}
          disabled={safeIndex >= count - 1}
          aria-label="Next card"
        >
          Next
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
