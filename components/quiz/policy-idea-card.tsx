"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import type { SunrisePolicyIdea } from "@/lib/data/sunrise-policy-ideas";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function PolicyIdeaCard({
  idea,
  className,
}: {
  idea: SunrisePolicyIdea;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5",
        className
      )}
    >
      <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
        Project Sunrise idea
      </p>
      <h4 className="mt-1 text-base font-bold leading-snug text-navy sm:text-lg">
        {idea.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-navy/85">{idea.whatItIs}</p>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-[#e16323]">Pros</dt>
          <dd className="mt-1 text-navy/80">
            <ul className="list-disc space-y-1 pl-4">
              {idea.pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Cons (honest)</dt>
          <dd className="mt-1 text-navy/80">
            <ul className="list-disc space-y-1 pl-4">
              {idea.cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Why it would be incredible</dt>
          <dd className="mt-1 leading-relaxed text-navy/80">{idea.whyIncredible}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Where it already works</dt>
          <dd className="mt-1 leading-relaxed text-muted-foreground">
            {idea.alreadyWorksWhere}
          </dd>
        </div>
      </dl>

      {idea.relatedBlueprintCategory ? (
        <p className="mt-4 text-xs text-muted-foreground">
          Related Blueprint pillar:{" "}
          <Link
            href="/blueprint"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {idea.relatedBlueprintCategory}
          </Link>
        </p>
      ) : null}
    </article>
  );
}

function PolicyIdeaFlashcard({
  idea,
  flipped,
  onToggleFlip,
}: {
  idea: SunrisePolicyIdea;
  flipped: boolean;
  onToggleFlip: () => void;
}) {
  const frontId = useId();
  const backId = useId();

  return (
    <div className="[perspective:1200px]">
      <button
        type="button"
        onClick={onToggleFlip}
        aria-pressed={flipped}
        aria-controls={`${frontId} ${backId}`}
        className={cn(
          "relative block w-full min-h-[280px] cursor-pointer rounded-xl border border-black/[0.08] bg-transparent text-left outline-none transition-[box-shadow] focus-visible:ring-3 focus-visible:ring-navy/30 sm:min-h-[300px]",
          "touch-manipulation"
        )}
      >
        <div
          className={cn(
            "relative min-h-[280px] w-full transition-transform duration-500 [transform-style:preserve-3d] sm:min-h-[300px]",
            flipped && "[transform:rotateY(180deg)]"
          )}
        >
          {/* Front: idea + why incredible */}
          <div
            id={frontId}
            aria-hidden={flipped}
            className="absolute inset-0 flex flex-col rounded-xl bg-white p-4 [backface-visibility:hidden] sm:p-5"
          >
            <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
              Project Sunrise idea
            </p>
            <h4 className="mt-1 text-base font-bold leading-snug text-navy sm:text-lg">
              {idea.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-navy/85">
              {idea.whatItIs}
            </p>
            <div className="mt-4 flex-1">
              <p className="text-xs font-semibold tracking-wide text-[#e16323] uppercase">
                Why it would be incredible
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/80">
                {idea.whyIncredible}
              </p>
            </div>
            <p className="mt-3 text-center text-[11px] font-medium text-navy/45">
              Tap to flip for pros, cons, and sources
            </p>
          </div>

          {/* Back: pros / cons / where it works */}
          <div
            id={backId}
            aria-hidden={!flipped}
            className="absolute inset-0 flex flex-col overflow-y-auto rounded-xl bg-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5"
          >
            <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
              Pros, cons, and sources
            </p>
            <h4 className="mt-1 text-sm font-bold leading-snug text-navy">
              {idea.title}
            </h4>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-[#e16323]">Pros</dt>
                <dd className="mt-1 text-navy/80">
                  <ul className="list-disc space-y-1 pl-4">
                    {idea.pros.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Cons (honest)</dt>
                <dd className="mt-1 text-navy/80">
                  <ul className="list-disc space-y-1 pl-4">
                    {idea.cons.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Where it already works</dt>
                <dd className="mt-1 leading-relaxed text-muted-foreground">
                  {idea.alreadyWorksWhere}
                </dd>
              </div>
            </dl>
            {idea.relatedBlueprintCategory ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Related Blueprint pillar:{" "}
                <Link
                  href="/blueprint"
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium text-navy underline-offset-2 hover:underline"
                >
                  {idea.relatedBlueprintCategory}
                </Link>
              </p>
            ) : null}
            <p className="mt-auto pt-3 text-center text-[11px] font-medium text-navy/45">
              Tap to flip back
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export function PolicyIdeasSection({
  ideas,
  title = "Project Sunrise policy ideas for you",
  blurb = "Novel or proven-abroad fixes matched to topics you answered. One idea at a time.",
}: {
  ideas: SunrisePolicyIdea[];
  title?: string;
  blurb?: string;
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [ideas]);

  const count = ideas.length;
  const safeIndex = count === 0 ? 0 : Math.min(index, count - 1);
  const idea = ideas[safeIndex];

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      const wrapped = ((next % count) + count) % count;
      setIndex(wrapped);
      setFlipped(false);
    },
    [count]
  );

  const goPrev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);
  const goNext = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);

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

  if (!count || !idea) return null;

  return (
    <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">{blurb}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <p
            className="text-xs font-semibold tabular-nums text-navy/60"
            aria-live="polite"
          >
            {safeIndex + 1} of {count}
          </p>
          <Link
            href="/blueprint#sunrise-ideas"
            className="inline-flex items-center gap-1 text-xs font-semibold text-navy/70 hover:text-navy"
          >
            All ideas
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      <div
        className="mt-5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <PolicyIdeaFlashcard
          key={idea.id}
          idea={idea}
          flipped={flipped}
          onToggleFlip={() => setFlipped((f) => !f)}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-11 min-w-[6.5rem] gap-1.5 border-navy/20 px-3"
          onClick={goPrev}
          aria-label="Previous idea"
        >
          <ChevronLeft className="size-4" />
          Prev
        </Button>

        <div className="flex flex-1 items-center justify-center gap-1.5 px-1">
          {ideas.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Idea ${i + 1} of ${count}`}
              aria-current={i === safeIndex ? "true" : undefined}
              onClick={() => goTo(i)}
              className={cn(
                "size-2.5 rounded-full transition-colors touch-manipulation",
                i === safeIndex ? "bg-navy" : "bg-navy/20 hover:bg-navy/40"
              )}
            />
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-11 min-w-[6.5rem] gap-1.5 border-navy/20 px-3"
          onClick={goNext}
          aria-label="Next idea"
        >
          Next
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="mt-3 flex justify-center">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 gap-1.5 text-navy/70"
          onClick={() => setFlipped((f) => !f)}
        >
          <RotateCcw className="size-3.5" />
          {flipped ? "Show idea" : "Show pros & cons"}
        </Button>
      </div>
    </section>
  );
}
