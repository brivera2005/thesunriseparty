"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Link2,
  RotateCcw,
  Share2,
} from "lucide-react";
import { QuizCompass } from "@/components/quiz/quiz-compass";
import { PolicyIdeaFlashcard } from "@/components/quiz/policy-idea-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  resultsShareText,
  resultsShareUrl,
  type MagaCallout,
  type QuizAnswers,
  type QuizResult,
} from "@/lib/quiz-scoring";
import type { PersonAlignment } from "@/lib/data/quiz-figures";
import type { SunrisePolicyIdea } from "@/lib/data/sunrise-policy-ideas";
import { cn } from "@/lib/utils";

type ReviewCard =
  | { id: string; kind: "alignment" }
  | { id: string; kind: "person"; person: PersonAlignment }
  | { id: string; kind: "maga-not-gop" }
  | { id: string; kind: "divergence"; callout: MagaCallout }
  | { id: string; kind: "idea"; idea: SunrisePolicyIdea };

function AlignmentBars({ result }: { result: QuizResult }) {
  return (
    <ul className="space-y-2.5">
      {result.alignments.map((camp) => (
        <li key={camp.id}>
          <div className="mb-1 flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-navy">{camp.label}</span>
            <span className="text-sm font-semibold tabular-nums text-navy">
              {camp.percent}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-navy/[0.08]">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                camp.id === "maga" ? "bg-navy" : "bg-[#e16323]"
              )}
              style={{ width: `${camp.percent}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function FlipShell({
  flipped,
  onToggle,
  front,
  back,
  frontHint = "Tap to flip",
  backHint = "Tap to flip back",
  minHeightClass = "min-h-[300px]",
}: {
  flipped: boolean;
  onToggle: () => void;
  front: ReactNode;
  back: ReactNode;
  frontHint?: string;
  backHint?: string;
  minHeightClass?: string;
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
          "touch-manipulation",
          minHeightClass
        )}
      >
        <div
          className={cn(
            "relative w-full transition-transform duration-500 [transform-style:preserve-3d]",
            minHeightClass,
            flipped && "[transform:rotateY(180deg)]"
          )}
        >
          <div
            id={frontId}
            aria-hidden={flipped}
            className={cn(
              "absolute inset-0 flex flex-col overflow-y-auto rounded-xl bg-white p-4 [backface-visibility:hidden] sm:p-5",
              minHeightClass
            )}
          >
            {front}
            <p className="mt-auto pt-3 text-center text-[11px] font-medium text-navy/45">
              {frontHint}
            </p>
          </div>
          <div
            id={backId}
            aria-hidden={!flipped}
            className={cn(
              "absolute inset-0 flex flex-col overflow-y-auto rounded-xl bg-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5",
              minHeightClass
            )}
          >
            {back}
            <p className="mt-auto pt-3 text-center text-[11px] font-medium text-navy/45">
              {backHint}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

function AlignmentCard({
  result,
  flipped,
  onToggle,
}: {
  result: QuizResult;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <FlipShell
      flipped={flipped}
      onToggle={onToggle}
      minHeightClass="min-h-[320px]"
      frontHint="Tap for MAGA vs every Republican"
      front={
        <>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
            Alignment
          </p>
          <h3 className="mt-1 text-lg font-bold text-navy sm:text-xl">
            Your camp match
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Percent match from your answer vectors, not a party registration form.
          </p>
          <div className="mt-4">
            <AlignmentBars result={result} />
          </div>
        </>
      }
      back={
        <>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-[#e16323] uppercase">
            Important
          </p>
          <h3 className="mt-1 text-lg font-bold text-navy">
            MAGA is not every Republican
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-navy/85">
            The MAGA bar measures hard-right loyalty politics. Traditional conservatives
            who care about taxes, guns, or faith can still score low here. Brand capture
            is not the same as every Republican voter or officeholder.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy/80">
            Closest camps:{" "}
            <span className="font-semibold text-navy">
              {result.topCamps.map((c) => `${c.short} ${c.percent}%`).join(" · ")}
            </span>
          </p>
        </>
      }
    />
  );
}

function PersonCard({
  person,
  flipped,
  onToggle,
}: {
  person: PersonAlignment;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <FlipShell
      flipped={flipped}
      onToggle={onToggle}
      frontHint="Tap for more on this match"
      front={
        <>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
            Who you align with
          </p>
          {person.isTop ? (
            <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-[#e16323] uppercase">
              Top match
            </p>
          ) : null}
          <h3 className="mt-1 text-xl font-bold text-navy sm:text-2xl">
            {person.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-navy/55">{person.coalition}</p>
          <p
            className={cn(
              "mt-4 text-3xl font-bold tabular-nums",
              person.isTop ? "text-[#e16323]" : "text-navy"
            )}
          >
            {person.percent}%
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/[0.08]">
            <div
              className={cn(
                "h-full rounded-full",
                person.isTop ? "bg-[#e16323]" : "bg-navy/70"
              )}
              style={{ width: `${person.percent}%` }}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy/80">{person.why}</p>
        </>
      }
      back={
        <>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
            About this match
          </p>
          <h3 className="mt-1 text-lg font-bold text-navy">{person.name}</h3>
          <p className="mt-1 text-sm font-medium text-navy/55">{person.coalition}</p>
          <p className="mt-4 text-sm leading-relaxed text-navy/85">{person.why}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Not an endorsement. Not a personality test. Your kitchen-table picks resemble
            this governing style on the camp mix we score.
          </p>
          <p className="mt-3 text-sm font-semibold tabular-nums text-navy">
            Match score: {person.percent}%
          </p>
        </>
      }
    />
  );
}

function MagaNotGopCard() {
  return (
    <article className="flex min-h-[300px] flex-col rounded-xl border border-[#e16323]/35 bg-[#e16323]/[0.06] p-4 sm:min-h-[320px] sm:p-5">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-[#e16323] uppercase">
        Reality check
      </p>
      <h3 className="mt-1 text-lg font-bold text-navy sm:text-xl">
        MAGA is not the Republican Party
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/85">
        MAGA captured the GOP brand and uses it as propaganda for low-information voters.
        Traditional conservatives (Romney, Murkowski, Kinzinger-style institutionalists)
        are a different coalition.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-navy/85">
        You can hold conservative values on taxes, guns, or faith without lining up with
        MAGA loyalty politics, election denial, or hard-right culture-war maximalism. If
        you still say &quot;I&apos;m a Republican,&quot; check which Republican you mean.
      </p>
    </article>
  );
}

function DivergenceCard({
  callout,
  magaPercent,
  flipped,
  onToggle,
}: {
  callout: MagaCallout;
  magaPercent: number;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <FlipShell
      flipped={flipped}
      onToggle={onToggle}
      frontHint="Tap for why this gap matters"
      front={
        <>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
            Divergence · {callout.topic}
          </p>
          <h3 className="mt-1 text-base font-bold leading-snug text-navy sm:text-lg">
            {callout.prompt}
          </h3>
          <p className="mt-4 text-sm text-navy/90">
            <span className="font-semibold text-[#e16323]">Your answer:</span>{" "}
            {callout.yourLabel}
          </p>
          <p className="mt-2 text-sm text-navy/90">
            <span className="font-semibold text-navy">Typical MAGA / hard-right:</span>{" "}
            {callout.magaLabel}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Overall MAGA policy match: about {magaPercent}%
          </p>
        </>
      }
      back={
        <>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
            Why it matters · {callout.topic}
          </p>
          <h3 className="mt-1 text-base font-bold text-navy">{callout.prompt}</h3>
          <p className="mt-4 text-sm leading-relaxed text-navy/85">{callout.why}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This is a policy comparison, not a guess about who you support or how you
            label yourself.
          </p>
        </>
      }
    />
  );
}

function StandingHeader({ result }: { result: QuizResult }) {
  return (
    <header className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/50 uppercase">
            Your standing
          </p>
          <h2 className="mt-1 text-xl font-bold text-navy sm:text-2xl">
            {result.quadrant}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {result.quadrantBlurb}
          </p>
          <p className="mt-2 text-xs tabular-nums text-navy/65">
            Econ {result.economic} · Social {result.social}
            {result.topPerson
              ? ` · Closest: ${result.topPerson.name} ${result.topPerson.percent}%`
              : ""}
          </p>
        </div>
        <QuizCompass
          economic={result.economic}
          social={result.social}
          className="max-w-[160px] shrink-0 sm:max-w-[180px]"
        />
      </div>
    </header>
  );
}

function StickyShareRetakeBar({
  result,
  answers,
  onRetake,
}: {
  result: QuizResult;
  answers: QuizAnswers;
  onRetake: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [open, setOpen] = useState(false);

  const shareUrl = useMemo(() => resultsShareUrl(answers), [answers]);
  const shareBody = useMemo(
    () => `${resultsShareText(result)} ${shareUrl}`,
    [result, shareUrl]
  );
  const tweetHref = useMemo(() => {
    const text = resultsShareText(result);
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
  }, [result, shareUrl]);

  useEffect(() => {
    setCanNativeShare(
      typeof navigator !== "undefined" && typeof navigator.share === "function"
    );
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({
        title: `Project Sunrise: ${result.quadrant}`,
        text: resultsShareText(result),
        url: shareUrl,
      });
    } catch {
      // cancelled
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md">
      {open ? (
        <div className="border-b border-navy/10 px-4 py-3 sm:px-6">
          <div className="mx-auto flex max-w-2xl flex-wrap gap-2">
            {canNativeShare ? (
              <Button
                type="button"
                size="sm"
                className="h-9 gap-1.5 bg-navy text-white hover:bg-navy/90"
                onClick={nativeShare}
              >
                <Share2 className="size-3.5" />
                Share
              </Button>
            ) : null}
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-9 gap-1.5 border-navy/25"
              onClick={copyLink}
            >
              {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
              {copied ? "Copied" : "Copy link"}
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-9 gap-1.5 border-navy/25"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(shareBody);
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 2000);
                } catch {
                  // ignore
                }
              }}
            >
              <Copy className="size-3.5" />
              Copy text
            </Button>
            <a
              href={tweetHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "h-9 gap-1.5 border-navy/25"
              )}
            >
              <ExternalLink className="size-3.5" />
              Post
            </a>
          </div>
        </div>
      ) : null}
      <div className="px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-2xl items-center gap-2">
          <Button
            type="button"
            size="lg"
            className="h-11 flex-1 gap-2 bg-navy text-white hover:bg-navy/90"
            onClick={() => setOpen((v) => !v)}
          >
            <Share2 className="size-4" />
            {open ? "Hide share" : "Share"}
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="h-11 flex-1 gap-2 border-navy/25"
            onClick={onRetake}
          >
            <RotateCcw className="size-4" />
            Retake
          </Button>
        </div>
      </div>
    </div>
  );
}

function buildReviewCards(
  result: QuizResult,
  ideas: SunrisePolicyIdea[]
): ReviewCard[] {
  const cards: ReviewCard[] = [{ id: "alignment", kind: "alignment" }];

  for (const person of result.personAlignments.slice(0, 5)) {
    cards.push({ id: `person-${person.id}`, kind: "person", person });
  }

  cards.push({ id: "maga-not-gop", kind: "maga-not-gop" });

  if (result.showMagaRealityCheck) {
    for (const callout of result.magaCallouts) {
      cards.push({
        id: `div-${callout.questionId}`,
        kind: "divergence",
        callout,
      });
    }
  }

  for (const idea of ideas) {
    cards.push({ id: `idea-${idea.id}`, kind: "idea", idea });
  }

  return cards;
}

function ReviewCardFace({
  card,
  result,
  flipped,
  onToggleFlip,
}: {
  card: ReviewCard;
  result: QuizResult;
  flipped: boolean;
  onToggleFlip: () => void;
}) {
  switch (card.kind) {
    case "alignment":
      return (
        <AlignmentCard result={result} flipped={flipped} onToggle={onToggleFlip} />
      );
    case "person":
      return (
        <PersonCard person={card.person} flipped={flipped} onToggle={onToggleFlip} />
      );
    case "maga-not-gop":
      return <MagaNotGopCard />;
    case "divergence":
      return (
        <DivergenceCard
          callout={card.callout}
          magaPercent={result.magaPercent}
          flipped={flipped}
          onToggle={onToggleFlip}
        />
      );
    case "idea":
      return (
        <PolicyIdeaFlashcard
          idea={card.idea}
          flipped={flipped}
          onToggleFlip={onToggleFlip}
        />
      );
  }
}

export function ResultsReviewDeck({
  result,
  answers,
  ideas,
  onRetake,
}: {
  result: QuizResult;
  answers: QuizAnswers;
  ideas: SunrisePolicyIdea[];
  onRetake: () => void;
}) {
  const cards = useMemo(() => buildReviewCards(result, ideas), [result, ideas]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [slideKey, setSlideKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const count = cards.length;
  const safeIndex = count === 0 ? 0 : Math.min(index, count - 1);
  const card = cards[safeIndex];
  const progress = count > 0 ? ((safeIndex + 1) / count) * 100 : 0;

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
    setSlideKey((k) => k + 1);
  }, [cards]);

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

  const explore = [
    {
      href: "/rebuttal",
      title: "Rebuttal",
      blurb: "Sourced counters when slogans collide with facts.",
    },
    {
      href: "/tracker",
      title: "Tracker",
      blurb: "Admin actions scored and cited by date.",
    },
    {
      href: "/blueprint",
      title: "Blueprint",
      blurb: "The fix: policy pillars with receipts.",
    },
    {
      href: "/scenarios",
      title: "Scenarios",
      blurb: "How policy hits a real family.",
    },
  ];

  if (!card) return null;

  return (
    <div className="space-y-5 pb-28">
      <StandingHeader result={result} />

      <section className="rounded-2xl border border-black/[0.08] bg-white p-4 sm:p-6">
        <div className="mb-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <h2 className="text-lg font-bold text-navy sm:text-xl">Your review</h2>
            <p
              className="text-xs font-semibold tabular-nums text-navy/60"
              aria-live="polite"
            >
              Card {safeIndex + 1} of {count}
            </p>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-navy/[0.08]">
            <div
              className="h-full rounded-full bg-[#e16323] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Guided walkthrough. Next through alignment, people, MAGA, divergences, and
            Sunrise ideas. Swipe on mobile.
          </p>
        </div>

        <div
          key={slideKey}
          className="animate-in fade-in slide-in-from-right-2 duration-200"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <ReviewCardFace
            card={card}
            result={result}
            flipped={flipped}
            onToggleFlip={() => setFlipped((f) => !f)}
          />
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

          <div className="flex max-w-[40%] flex-1 flex-wrap items-center justify-center gap-1 px-1">
            {cards.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Card ${i + 1} of ${count}`}
                aria-current={i === safeIndex ? "true" : undefined}
                onClick={() => goTo(i)}
                className={cn(
                  "size-2 rounded-full transition-colors touch-manipulation",
                  i === safeIndex ? "bg-navy" : "bg-navy/20 hover:bg-navy/40"
                )}
              />
            ))}
          </div>

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

        {card.kind === "idea" ? (
          <div className="mt-3 flex justify-center">
            <Link
              href="/blueprint#sunrise-ideas"
              className="inline-flex items-center gap-1 text-xs font-semibold text-navy/70 hover:text-navy"
            >
              All Sunrise ideas
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        ) : null}
      </section>

      {safeIndex >= count - 1 ? (
        <section>
          <h3 className="text-lg font-bold text-navy">What to explore next</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-black/[0.08] bg-white p-3.5 transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-navy">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.blurb}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-navy/40 transition-transform group-hover:translate-x-0.5 group-hover:text-navy" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <StickyShareRetakeBar
        result={result}
        answers={answers}
        onRetake={onRetake}
      />
    </div>
  );
}
