"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  RotateCcw,
  Share2,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { InfoTip } from "@/components/ui/info-tip";
import { Button, buttonVariants } from "@/components/ui/button";
import { QuizCompass } from "@/components/quiz/quiz-compass";
import {
  QUIZ_QUESTION_COUNT,
  quizQuestions,
  type QuizQuestion,
} from "@/lib/data/quiz-questions";
import {
  decodeAnswers,
  resultsShareText,
  resultsShareUrl,
  scoreQuiz,
  type QuizAnswers,
  type QuizResult,
} from "@/lib/quiz-scoring";
import { cn } from "@/lib/utils";

type Phase = "intro" | "questions" | "results";

function OptionHelp({ help }: { help: string }) {
  return (
    <InfoTip label={help} side="left" iconClassName="size-8 shrink-0 text-navy/50" />
  );
}

function ChoiceQuestion({
  question,
  selected,
  onSelect,
}: {
  question: QuizQuestion;
  selected?: string;
  onSelect: (optionId: string) => void;
}) {
  return (
    <ul className="space-y-2.5">
      {question.options.map((opt) => {
        const active = selected === opt.id;
        return (
          <li key={opt.id}>
            <div
              className={cn(
                "flex items-start gap-2 rounded-xl border p-3 transition-colors sm:p-3.5",
                active
                  ? "border-navy bg-navy/[0.05] shadow-sm"
                  : "border-black/[0.08] bg-white hover:border-navy/30 hover:bg-black/[0.02]"
              )}
            >
              <button
                type="button"
                onClick={() => onSelect(opt.id)}
                className="min-w-0 flex-1 text-left"
              >
                <span
                  className={cn(
                    "block text-[15px] leading-snug font-medium sm:text-base",
                    active ? "text-navy" : "text-navy/85"
                  )}
                >
                  {opt.label}
                </span>
              </button>
              <OptionHelp help={opt.help} />
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
                "h-full rounded-full transition-all",
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

function ResultsView({
  result,
  answers,
  onRetake,
}: {
  result: QuizResult;
  answers: QuizAnswers;
  onRetake: () => void;
}) {
  const [copied, setCopied] = useState<"link" | "text" | null>(null);

  const shareUrl = useMemo(() => resultsShareUrl(answers), [answers]);
  const shareBody = useMemo(
    () => `${resultsShareText(result)} ${shareUrl}`,
    [result, shareUrl]
  );

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

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/50 uppercase">
          Your standing
        </p>
        <h2 className="mt-1 text-2xl font-bold text-navy sm:text-3xl">
          {result.quadrant}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {result.quadrantBlurb}
        </p>
        <div className="mt-6">
          <QuizCompass economic={result.economic} social={result.social} />
        </div>
        <p className="mt-4 text-center text-sm text-navy/70">
          Closest camps:{" "}
          <span className="font-semibold text-navy">
            {result.topCamps.map((c) => `${c.short} ${c.percent}%`).join(" · ")}
          </span>
        </p>
      </section>

      <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
        <h3 className="text-lg font-bold text-navy">Alignment</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Percent match based on your answer vectors, not a party registration form.
        </p>
        <div className="mt-5">
          <AlignmentBars result={result} />
        </div>
      </section>

      {result.showTrumpRealityCheck ? (
        <section className="rounded-2xl border-2 border-navy/25 bg-navy/[0.03] p-5 sm:p-7">
          <h3 className="text-lg font-bold text-navy">
            You may like the brand. Your policy answers do not match it.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/80">
            MAGA / Trump alignment scored {result.magaPercent}%. Rally slogans and
            kitchen-table choices are different things. Liking &quot;America First,&quot;
            &quot;back the blue,&quot; or &quot;secure borders&quot; does not lock you into
            every hard-line policy those brands sell. Here is where you parted ways,
            in plain English:
          </p>
          <ul className="mt-5 space-y-4">
            {result.trumpCallouts.map((c) => (
              <li
                key={c.questionId}
                className="rounded-xl border border-black/[0.08] bg-white p-4"
              >
                <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
                  {c.topic}
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{c.prompt}</p>
                <p className="mt-2 text-sm text-navy/90">
                  <span className="font-semibold text-[#e16323]">You chose:</span>{" "}
                  {c.yourLabel}
                </p>
                <p className="mt-1 text-sm text-navy/90">
                  <span className="font-semibold text-navy">Typical MAGA pick:</span>{" "}
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

      <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
        <h3 className="text-lg font-bold text-navy">Share your results</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Link encodes your answers in the URL. No account. No backend.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="gap-1.5"
            onClick={() => copy("link")}
          >
            {copied === "link" ? (
              <Check className="size-3.5" />
            ) : (
              <Copy className="size-3.5" />
            )}
            {copied === "link" ? "Copied link" : "Copy link"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="gap-1.5"
            onClick={() => copy("text")}
          >
            {copied === "text" ? (
              <Check className="size-3.5" />
            ) : (
              <Share2 className="size-3.5" />
            )}
            {copied === "text" ? "Copied text" : "Copy share text"}
          </Button>
          <Button type="button" variant="ghost" className="gap-1.5" onClick={onRetake}>
            <RotateCcw className="size-3.5" />
            Retake quiz
          </Button>
        </div>
      </section>

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
    </div>
  );
}

export function QuizPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const decoded = decodeAnswers(window.location.search);
    if (decoded && Object.keys(decoded).length >= QUIZ_QUESTION_COUNT) {
      setAnswers(decoded);
      setResult(scoreQuiz(decoded));
      setPhase("results");
    }
  }, []);

  const question = quizQuestions[index];
  const selected = answers[question?.id ?? ""];
  const progress = ((index + 1) / QUIZ_QUESTION_COUNT) * 100;

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
  };

  const goBack = () => {
    if (index <= 0) {
      setPhase("intro");
      return;
    }
    setIndex((i) => i - 1);
  };

  const start = () => {
    setPhase("questions");
    setIndex(0);
    setAnswers({});
    setResult(null);
  };

  const retake = () => {
    setPhase("intro");
    setIndex(0);
    setAnswers({});
    setResult(null);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "/quiz");
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Political Standing"
        title="Where do you actually stand?"
        description="Twenty clear questions. About three minutes. No mushy both-sides fog. Tap the ? on any answer when a slogan invents a fake opposite."
        tip="Most people share safety, freedom, and fairness. Campaigns sell branded traps. Answer the policy, not the team jersey."
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
                Answer the actual policy choice.
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
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                {QUIZ_QUESTION_COUNT} questions · about 3 minutes · results include a
                compass, camp alignment, and a Trump reality check when branding and
                your answers do not match.
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
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-navy/60">
                  <span>
                    Question {index + 1} of {QUIZ_QUESTION_COUNT}
                  </span>
                  <span>{question.topic}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-navy/[0.08]">
                  <div
                    className="h-full rounded-full bg-[#e16323] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
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
                    />
                  )}
                </div>
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
