"use client";

import Link from "next/link";
import { ArrowLeft, PartyPopper, Share2 } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { RebuttalDeskSection } from "@/components/rebuttal/rebuttal-desk-section";
import { Button, buttonVariants } from "@/components/ui/button";
import { conversationHelpers, rebuttalDetailPath } from "@/lib/data/conversation-helpers";
import { cn } from "@/lib/utils";

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = "https://thesunriseparty.pages.dev/rebuttal";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Rebuttal Desk | Project Sunrise",
          text: "Sourced talking points for countering MAGA claims.",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share"}
    </Button>
  );
}

export function RebuttalPage() {
  const milestoneRebuttal600 = conversationHelpers[599];
  const milestoneRebuttal550 = conversationHelpers[549];
  const milestoneRebuttal500 = conversationHelpers[499];
  const milestoneRebuttal240 = conversationHelpers[239];
  const milestoneRebuttal230 = conversationHelpers[229];
  const milestoneRebuttal220 = conversationHelpers[219];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-sunrise/5 to-background">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Sunrise
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-sunrise uppercase">
                  Shareable Resource
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  The Rebuttal Desk
                </h1>
                <p className="mt-3 text-muted-foreground">
                  A standalone study guide for real conversations - every claim
                  sourced, every response ready to copy.
                </p>
              </div>
              <ShareButton />
            </div>
          </div>
        </section>


        {conversationHelpers.length >= 600 && milestoneRebuttal600 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="600 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  600 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pass 31 verifiable-room milestone - Schedule F, metals tariffs,
                  DPA waivers, housing stacks, and history deep-cut counters.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal600.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #600 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 550 && conversationHelpers.length < 600 && milestoneRebuttal550 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="550 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  550 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pass 30 verifiable-room milestone - metals tariffs, DPA waivers,
                  treaty exits, and sports federalization counters.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal550.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #550 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 500 && conversationHelpers.length < 550 && milestoneRebuttal500 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="500 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  500 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A sourced milestone - every talking point backed by primary
                  sources and copy-ready responses.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal500.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #500 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 240 && conversationHelpers.length < 500 && milestoneRebuttal240 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="240 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  240 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pass 21 infrastructure milestone - README, deploy docs, and platform
                  counters.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal240.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #240 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 230 && conversationHelpers.length < 240 && milestoneRebuttal230 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="230 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  230 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pass 20 round-number milestone - including onboarding and platform
                  counters.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal230.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #230 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 220 && conversationHelpers.length < 230 && milestoneRebuttal220 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="220 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  220 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A sourced milestone - including transparency and accountability
                  counters tied to SAFE-004.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal220.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #220 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 210 && conversationHelpers.length < 220 && conversationHelpers[209] && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="210 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  210 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A sourced milestone - every talking point backed by primary
                  sources and copy-ready responses.{" "}
                  <Link
                    href={rebuttalDetailPath(conversationHelpers[209].id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #210 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 200 && conversationHelpers.length < 210 && conversationHelpers[199] && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="200 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  200 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A sourced milestone - every talking point backed by primary
                  sources and copy-ready responses.{" "}
                  <Link
                    href={rebuttalDetailPath(conversationHelpers[199].id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #200 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        <RebuttalDeskSection standalone />
      </main>

      <SiteFooter />
    </div>
  );
}
