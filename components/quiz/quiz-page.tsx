"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Link2,
  RotateCcw,
  Share2,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { InfoTip } from "@/components/ui/info-tip";
import { Button, buttonVariants } from "@/components/ui/button";
import { CitationList } from "@/components/citation";
import { QuizCompass } from "@/components/quiz/quiz-compass";
import {
  QUIZ_QUESTION_COUNT,
  QUIZ_SUNRISE_ASK_COUNT,
  quizQuestions,
  type QuizQuestion,
} from "@/lib/data/quiz-questions";
import {
  decodeAnswers,
  QUIZ_SHARE_MIN_ANSWERS,
  resultsShareText,
  resultsShareUrl,
  scoreQuiz,
  type QuizAnswers,
  type QuizResult,
} from "@/lib/quiz-scoring";
import {
  createQuizSessionSeed,
  shuffleChoiceOptions,
} from "@/lib/quiz-shuffle";
import { selectPolicyIdeasForAnswers } from "@/lib/data/sunrise-policy-ideas";
import { PolicyIdeasSection } from "@/components/quiz/policy-idea-card";
import { cn } from "@/lib/utils";

type Phase = "intro" | "questions" | "results";

function OptionHelp({ help }: { help: string }) {
  return (
    <span
      className="relative z-10 shrink-0"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onPointerDown={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <InfoTip
        label={help}
        side="left"
        iconClassName="size-8 shrink-0 text-navy/50"
      />
    </span>
  );
}

function QuestionSources({ question }: { question: QuizQuestion }) {
  if (!question.sources?.length) return null;
  return (
    <div className="mt-4 rounded-xl border border-navy/10 bg-navy/[0.03] px-3.5 py-3">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
        Sources · Learn more
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Tap a citation for publisher, excerpt, and archived link.
      </p>
      <div className="mt-2">
        <CitationList sources={question.sources} />
      </div>
    </div>
  );
}

function ChoiceQuestion({
  question,
  selected,
  onSelect,
  sessionSeed,
}: {
  question: QuizQuestion;
  selected?: string;
  onSelect: (optionId: string) => void;
  sessionSeed: string;
}) {
  const options = useMemo(
    () => shuffleChoiceOptions(question.options, sessionSeed, question.id),
    [question.id, question.options, sessionSeed]
  );

  return (
    <ul className="space-y-2.5" role="radiogroup" aria-label={question.prompt}>
      {options.map((opt) => {
        const active = selected === opt.id;
        return (
          <li key={opt.id}>
            <div
              className={cn(
                "flex w-full items-stretch overflow-hidden rounded-xl border transition-colors",
                active
                  ? "border-navy bg-navy/[0.07] shadow-sm ring-1 ring-navy/20"
                  : "border-black/[0.08] bg-white hover:border-navy/30 hover:bg-black/[0.02]"
              )}
            >
              <button
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => onSelect(opt.id)}
                className="flex min-h-11 min-w-0 flex-1 cursor-pointer items-start gap-3 px-3.5 py-3.5 text-left sm:min-h-12 sm:px-4"
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-navy/35 bg-white"
                  )}
                  aria-hidden
                >
                  {active ? <Check className="size-3 stroke-[3]" /> : null}
                </span>
                <span
                  className={cn(
                    "block flex-1 text-[15px] leading-snug font-medium sm:text-base",
                    active ? "text-navy" : "text-navy/85"
                  )}
                >
                  {opt.label}
                </span>
              </button>
              <div className="flex shrink-0 items-start pr-2.5 pt-2.5 sm:pr-3 sm:pt-3">
                <OptionHelp help={opt.help} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function SliderQuestion({
  question,
  selected,
  onSelect,
}: {
  question: QuizQuestion;
  selected?: string;
  onSelect: (optionId: string) => void;
}) {
  const idx = Math.max(
    0,
    question.options.findIndex((o) => o.id === selected)
  );
  const value = selected ? idx : Math.floor(question.options.length / 2);
  const current = question.options[value];

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3 text-xs sm:text-sm">
        <div className="flex max-w-[45%] items-start gap-1">
          <span className="font-medium text-navy/80">{question.leftLabel}</span>
          {question.leftHelp ? <OptionHelp help={question.leftHelp} /> : null}
        </div>
        <div className="flex max-w-[45%] items-start justify-end gap-1 text-right">
          <span className="font-medium text-navy/80">{question.rightLabel}</span>
          {question.rightHelp ? <OptionHelp help={question.rightHelp} /> : null}
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={question.options.length - 1}
        step={1}
        value={value}
        onChange={(e) => {
          const i = Number(e.target.value);
          onSelect(question.options[i].id);
        }}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-navy/15 accent-[#e16323]"
        aria-label={question.prompt}
      />
      <div
        className={cn(
          "flex items-start gap-2 rounded-xl border border-navy/20 bg-navy/[0.04] p-3"
        )}
      >
        <p className="min-w-0 flex-1 text-[15px] leading-snug font-medium text-navy">
          {current.label}
        </p>
        <OptionHelp help={current.help} />
      </div>
    </div>
  );
}

function AlignmentBars({ result }: { result: QuizResult }) {
  return (
    <ul className="space-y-3">
      {result.alignments.map((camp) => (
        <li key={camp.id}>
          <div className="mb-1 flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-navy">{camp.label}</span>
            <span className="text-sm font-semibold tabular-nums text-navy">
              {camp.percent}%
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-navy/[0.08]">
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

function PersonAlignments({ result }: { result: QuizResult }) {
  return (
    <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
      <h3 className="text-lg font-bold text-navy">
        Who you most likely align with
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Named public figures and coalitions ranked from your answer vectors. Not an
        endorsement. Not a personality test. Use it to see which governing style your
        kitchen-table picks resemble.
      </p>
      <ul className="mt-5 space-y-3">
        {result.personAlignments.map((p) => (
          <li
            key={p.id}
            className={cn(
              "rounded-xl border p-4 transition-colors",
              p.isTop
                ? "border-navy/35 bg-navy/[0.06] ring-1 ring-navy/15"
                : "border-black/[0.08] bg-white"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {p.isTop ? (
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[#e16323] uppercase">
                    Top match
                  </p>
                ) : null}
                <p className="text-base font-bold text-navy">{p.name}</p>
                <p className="text-xs font-medium text-navy/55">{p.coalition}</p>
              </div>
              <span
                className={cn(
                  "shrink-0 text-lg font-bold tabular-nums",
                  p.isTop ? "text-[#e16323]" : "text-navy"
                )}
              >
                {p.percent}%
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-navy/80">{p.why}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/[0.08]">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  p.isTop ? "bg-[#e16323]" : "bg-navy/70"
                )}
                style={{ width: `${p.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MagaNotGopCallout() {
  return (
    <aside className="rounded-2xl border border-[#e16323]/35 bg-[#e16323]/[0.06] p-5 sm:p-6">
      <h3 className="text-base font-bold text-navy sm:text-lg">
        MAGA is not the Republican Party
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/85">
        MAGA captured the GOP brand and uses it as propaganda for low-information
        voters. Traditional conservatives (Romney, Murkowski, Kinzinger-style
        institutionalists) are a different coalition. You can hold conservative
        values on taxes, guns, or faith without lining up with MAGA loyalty politics,
        election denial, or hard-right culture-war maximalism. If you still say
        &quot;I&apos;m a Republican,&quot; check which Republican you mean.
      </p>
    </aside>
  );
}

function ShareResultsCard({
  result,
  answers,
  onRetake,
}: {
  result: QuizResult;
  answers: QuizAnswers;
  onRetake: () => void;
}) {
  const [copied, setCopied] = useState<"link" | "text" | null>(null);
  const [canNativeShare, setCanNativeShare] = useState(false);

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

  const copy = async (kind: "link" | "text") => {
    const value = kind === "link" ? shareUrl : shareBody;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 2000);
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
      // user cancelled or unsupported
    }
  };

  return (
    <section className="overflow-hidden rounded-2xl border-2 border-navy/20 bg-gradient-to-br from-navy/[0.06] via-white to-[#e16323]/[0.08] p-5 sm:p-7">
      <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/50 uppercase">
        Share card
      </p>
      <h3 className="mt-1 text-xl font-bold text-navy sm:text-2xl">
        Pass it on
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Your compass, camp %, and top person are baked into the link. No account. No
        tracking backend.
      </p>

      <div className="mt-5 rounded-xl border border-navy/15 bg-white/90 p-4 shadow-sm sm:p-5">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-[#e16323] uppercase">
          Project Sunrise Political Standing
        </p>
        <p className="mt-1 text-2xl font-bold text-navy sm:text-3xl">
          {result.quadrant}
        </p>
        <p className="mt-2 text-sm text-navy/75">
          Econ {result.economic} · Social {result.social}
        </p>
        <p className="mt-3 text-sm font-medium text-navy">
          {result.topCamps.map((c) => `${c.short} ${c.percent}%`).join(" · ")}
        </p>
        {result.topPerson ? (
          <p className="mt-1 text-sm text-navy/80">
            Closest figure:{" "}
            <span className="font-semibold text-navy">
              {result.topPerson.name} {result.topPerson.percent}%
            </span>
          </p>
        ) : null}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {result.quadrantBlurb}
        </p>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {canNativeShare ? (
          <Button
            type="button"
            size="lg"
            className="h-12 gap-2 bg-navy text-white hover:bg-navy/90 sm:col-span-2"
            onClick={nativeShare}
          >
            <Share2 className="size-4" />
            Share results
          </Button>
        ) : null}
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-12 gap-2 border-navy/25"
          onClick={() => copy("link")}
        >
          {copied === "link" ? (
            <Check className="size-4" />
          ) : (
            <Link2 className="size-4" />
          )}
          {copied === "link" ? "Link copied" : "Copy link"}
        </Button>
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-12 gap-2 border-navy/25"
          onClick={() => copy("text")}
        >
          {copied === "text" ? (
            <Check className="size-4" />
          ) : (
            <Copy className="size-4" />
          )}
          {copied === "text" ? "Text copied" : "Copy share text"}
        </Button>
        <a
          href={tweetHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 gap-2 border-navy/25 sm:col-span-2"
          )}
        >
          <ExternalLink className="size-4" />
          Post with prefilled text
        </a>
        <Button
          type="button"
          size="lg"
          variant="ghost"
          className="h-12 gap-2 sm:col-span-2"
          onClick={onRetake}
        >
          <RotateCcw className="size-4" />
          Retake quiz
        </Button>
      </div>
    </section>
  );
}

function StickyRetakeBar({ onRetake }: { onRetake: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
        <p className="min-w-0 truncate text-xs text-navy/70 sm:text-sm">
          Done? Share above, or run it again clean.
        </p>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="h-9 shrink-0 gap-1.5 border-navy/25"
          onClick={onRetake}
        >
          <RotateCcw className="size-3.5" />
          Retake
        </Button>
      </div>
    </div>
  );
}

function ResultsView({
  result,
  answers,
  onRetake,
}: {
  result: QuizResult;
  answers: QuizAnswers;
  onRetake: () => void;
}) {
  const policyIdeas = useMemo(
    () => selectPolicyIdeasForAnswers(answers, quizQuestions, 8),
    [answers]
  );

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

  useEffect(() => {
    const prev = document.title;
    const person = result.topPerson
      ? ` · ${result.topPerson.name} ${result.topPerson.percent}%`
      : "";
    document.title = `${result.quadrant}${person} | Political Standing Quiz | Project Sunrise`;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content") ?? null;
    desc?.setAttribute(
      "content",
      `${result.quadrant}. Alignment: ${result.topCamps
        .map((c) => `${c.short} ${c.percent}%`)
        .join(", ")}.${person} Take the Project Sunrise quiz.`
    );
    return () => {
      document.title = prev;
      if (desc && prevDesc != null) desc.setAttribute("content", prevDesc);
    };
  }, [result]);

  return (
    <div className="space-y-10 pb-24">
      <section className="animate-in fade-in slide-in-from-bottom-2 rounded-2xl border border-black/[0.08] bg-white p-5 duration-300 sm:p-7">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/50 uppercase">
          Your standing
        </p>
        <h2 className="mt-1 text-2xl font-bold text-navy sm:text-3xl">
          {result.quadrant}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {result.quadrantBlurb} Scores average your definitive picks across{" "}
          {result.answeredCount} questions on economic left/right and social
          liberty/authority axes.
        </p>
        <div className="mt-6">
          <QuizCompass economic={result.economic} social={result.social} />
        </div>
        <p className="mt-4 text-center text-sm text-navy/70">
          Closest camps:{" "}
          <span className="font-semibold text-navy">
            {result.topCamps.map((c) => `${c.short} ${c.percent}%`).join(" · ")}
          </span>
          {result.topPerson ? (
            <>
              {" "}
              · Closest figure:{" "}
              <span className="font-semibold text-navy">
                {result.topPerson.name} {result.topPerson.percent}%
              </span>
            </>
          ) : null}
        </p>
      </section>

      <ShareResultsCard result={result} answers={answers} onRetake={onRetake} />

      <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
        <h3 className="text-lg font-bold text-navy">Alignment</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Percent match based on your answer vectors, not a party registration form.
          MAGA here means hard-right loyalty politics, not every Republican.
        </p>
        <div className="mt-5">
          <AlignmentBars result={result} />
        </div>
      </section>

      <PersonAlignments result={result} />

      <MagaNotGopCallout />

      {result.showMagaRealityCheck ? (
        <section className="rounded-2xl border-2 border-navy/25 bg-navy/[0.03] p-5 sm:p-7">
          <h3 className="text-lg font-bold text-navy">
            Where your answers diverge from MAGA
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">
            Your answers match MAGA / hard-right positions about {result.magaPercent}% of
            the time. That is a policy comparison score, not a guess about who you
            support or how you see yourself. On the questions below, the typical
            MAGA-aligned pick differed from yours:
          </p>
          <ul className="mt-5 space-y-4">
            {result.magaCallouts.map((c) => (
              <li
                key={c.questionId}
                className="rounded-xl border border-black/[0.08] bg-white p-4"
              >
                <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
                  {c.topic}
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{c.prompt}</p>
                <p className="mt-2 text-sm text-navy/90">
                  <span className="font-semibold text-[#e16323]">Your answer:</span>{" "}
                  {c.yourLabel}
                </p>
                <p className="mt-1 text-sm text-navy/90">
                  <span className="font-semibold text-navy">
                    Typical MAGA / hard-right position:
                  </span>{" "}
                  {c.magaLabel}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {c.why}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <PolicyIdeasSection
        ideas={policyIdeas}
        title="Project Sunrise ideas matched to you"
        blurb="Novel or proven-abroad fixes tied to your answers. Flip for pros and cons; swipe or tap Next for the next idea."
      />

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

      <StickyRetakeBar onRetake={onRetake} />
    </div>
  );
}

export function QuizPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [sessionSeed, setSessionSeed] = useState(() => createQuizSessionSeed());
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const decoded = decodeAnswers(window.location.search);
    if (decoded && Object.keys(decoded).length >= QUIZ_SHARE_MIN_ANSWERS) {
      setAnswers(decoded);
      setResult(scoreQuiz(decoded));
      setPhase("results");
    }
  }, []);

  const question = quizQuestions[index];
  const selected = answers[question?.id ?? ""];
  const progress = ((index + 1) / QUIZ_QUESTION_COUNT) * 100;
  const answeredSoFar = Object.keys(answers).length;

  const selectOption = useCallback(
    (optionId: string) => {
      if (!question) return;
      setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
    },
    [question]
  );

  const goNext = () => {
    if (!selected) return;
    if (index >= QUIZ_QUESTION_COUNT - 1) {
      const next = { ...answers, [question.id]: selected };
      setAnswers(next);
      const scored = scoreQuiz(next);
      setResult(scored);
      setPhase("results");
      if (typeof window !== "undefined") {
        const url = resultsShareUrl(next);
        window.history.replaceState(null, "", url.replace(window.location.origin, ""));
      }
      return;
    }
    setIndex((i) => i + 1);
    setTransitionKey((k) => k + 1);
  };

  const goBack = () => {
    if (index <= 0) {
      setPhase("intro");
      return;
    }
    setIndex((i) => i - 1);
    setTransitionKey((k) => k + 1);
  };

  const start = () => {
    setSessionSeed(createQuizSessionSeed());
    setPhase("questions");
    setIndex(0);
    setAnswers({});
    setResult(null);
    setTransitionKey((k) => k + 1);
  };

  const retake = () => {
    setSessionSeed(createQuizSessionSeed());
    setPhase("intro");
    setIndex(0);
    setAnswers({});
    setResult(null);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/quiz");
      document.title = "Political Standing Quiz | Project Sunrise";
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Political Standing"
        title="Where do you actually stand?"
        description={`${QUIZ_QUESTION_COUNT} clear questions, including ${QUIZ_SUNRISE_ASK_COUNT} Project Sunrise asks on future-facing policy. About 5 to 7 minutes. No mushy both-sides fog. Tap ? tips and Sources when slogans invent fake opposites.`}
        tip="Most people share safety, freedom, and fairness. Campaigns sell branded traps. Answer the policy, not the team jersey. MAGA is scored as hard-right politics, not every Republican."
        compact
      />

      <section className="section-y bg-white">
        <div className="page-container max-w-2xl">
          {phase === "intro" ? (
            <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy sm:text-2xl">
                Before you start
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/85">
                Most Americans share the same basics: keep kids safe, keep the country
                free, keep work fair, keep streets livable. Campaigns sell slogan traps
                that pretend those values have only one branded team. Rejecting
                &quot;pro-life&quot; laws does not make you &quot;pro-death.&quot; Wanting
                cops who follow the rules is not &quot;defund.&quot; Legal immigration plus
                real border checks is not &quot;open borders.&quot; Background checks are not
                a &quot;gun grab.&quot; Opposing a book ban is not &quot;indoctrinating
                kids.&quot; Tap the ? tips when a label tries to invent an evil opposite.
                Open Sources for Congress.gov, GAO, CBO, KFF, Brennan, OECD-tier
                receipts. Answer the actual policy choice.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-navy/80">
                <li>
                  <span className="font-semibold text-navy">Drop the team jersey.</span>{" "}
                  Answer for yourself, not for a candidate, cable channel, or church
                  bulletin.
                </li>
                <li>
                  <span className="font-semibold text-navy">Be definitive.</span>{" "}
                  Pick the option closest to what you would actually vote for. Gray
                  mush wastes an hour and teaches nothing.
                </li>
                <li>
                  <span className="font-semibold text-navy">Finish with the future.</span>{" "}
                  The last {QUIZ_SUNRISE_ASK_COUNT} questions are Project Sunrise asks:
                  mobile voting with audits, carbon fee and dividend, ranked choice,
                  public broadband, all-payer rates, social housing, postal banking, and
                  digital ID with guardrails.
                </li>
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                {QUIZ_QUESTION_COUNT} questions · about 5 to 7 minutes · results include a
                compass, named-figure matches, camp alignment, policy idea flashcards, share
                card with Web Share, and a plain comparison to MAGA / hard-right
                positions when your answers diverge. Answer order is shuffled each
                session so position habit does not steer you.
              </p>
              <Button
                type="button"
                size="lg"
                className="mt-6 h-11 w-full gap-2 bg-navy text-white hover:bg-navy/90 sm:w-auto sm:px-8"
                onClick={start}
              >
                Start quiz
                <ArrowRight className="size-4" />
              </Button>
            </div>
          ) : null}

          {phase === "questions" && question ? (
            <div>
              <div className="mb-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-medium text-navy/60">
                  <span className="tabular-nums">
                    Question {index + 1} of {QUIZ_QUESTION_COUNT}
                    {answeredSoFar > 0 ? (
                      <span className="text-navy/40">
                        {" "}
                        · {answeredSoFar} answered
                      </span>
                    ) : null}
                  </span>
                  <span className="max-w-[55%] truncate text-right">
                    {question.sunriseAsk ? "Project Sunrise asks" : question.topic}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-navy/[0.08]">
                  <div
                    className="h-full rounded-full bg-[#e16323] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {question.sunriseAsk ? (
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-[#e16323] uppercase">
                    Future-facing · still pick a definitive option
                  </p>
                ) : null}
              </div>

              <div
                key={transitionKey}
                className="animate-in fade-in slide-in-from-right-2 rounded-2xl border border-black/[0.08] bg-white p-5 duration-200 sm:p-7"
              >
                <div className="flex items-start gap-2">
                  <h2 className="min-w-0 flex-1 text-lg font-bold leading-snug text-navy sm:text-xl">
                    {question.prompt}
                  </h2>
                  {question.help ? <OptionHelp help={question.help} /> : null}
                </div>

                <div className="mt-5">
                  {question.type === "slider" ? (
                    <SliderQuestion
                      question={question}
                      selected={selected}
                      onSelect={selectOption}
                    />
                  ) : (
                    <ChoiceQuestion
                      question={question}
                      selected={selected}
                      onSelect={selectOption}
                      sessionSeed={sessionSeed}
                    />
                  )}
                </div>

                <QuestionSources question={question} />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="gap-1.5"
                  onClick={goBack}
                >
                  <ArrowLeft className="size-3.5" />
                  Back
                </Button>
                <Button
                  type="button"
                  size="lg"
                  disabled={!selected}
                  className="h-11 gap-2 bg-navy px-6 text-white hover:bg-navy/90 disabled:opacity-40"
                  onClick={goNext}
                >
                  {index >= QUIZ_QUESTION_COUNT - 1 ? "See results" : "Next"}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          ) : null}

          {phase === "results" && result ? (
            <ResultsView result={result} answers={answers} onRetake={retake} />
          ) : null}

          {phase === "intro" ? (
            <p className="mt-6 text-center text-xs text-muted-foreground">
              Prefer talking points? Try{" "}
              <Link
                href="/rebuttal"
                className={cn(buttonVariants({ variant: "link" }), "h-auto p-0 text-xs")}
              >
                Rebuttal Desk
              </Link>
              .
            </p>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
