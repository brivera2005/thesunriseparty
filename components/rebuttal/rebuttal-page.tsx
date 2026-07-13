"use client";

import Link from "next/link";
import { PartyPopper, Share2 } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { RebuttalDeskSection } from "@/components/rebuttal/rebuttal-desk-section";
import { Button } from "@/components/ui/button";
import { conversationHelpers, rebuttalDetailPath } from "@/lib/data/conversation-helpers";

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
    <Button variant="outline" size="sm" onClick={handleShare} className="h-9 gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share"}
    </Button>
  );
}

function MilestoneBanner({
  count,
  href,
  blurb,
}: {
  count: number;
  href: string;
  blurb: string;
}) {
  return (
    <section
      className="border-b border-border bg-white"
      aria-label={`${count} rebuttals milestone`}
    >
      <div className="page-container flex flex-col items-center gap-2.5 py-5 text-center sm:flex-row sm:justify-center sm:py-6">
        <PartyPopper className="size-7 shrink-0 text-sunrise" aria-hidden />
        <div>
          <p className="text-base font-bold tracking-tight sm:text-lg">
            {count} rebuttals ready
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {blurb}{" "}
            <Link
              href={href}
              className="font-medium text-sunrise underline-offset-4 hover:underline"
            >
              See rebuttal #{count} →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export function RebuttalPage() {
  const milestoneRebuttal750 = conversationHelpers[749];
  const milestoneRebuttal700 = conversationHelpers[699];
  const milestoneRebuttal650 = conversationHelpers[649];
  const milestoneRebuttal600 = conversationHelpers[599];
  const milestoneRebuttal550 = conversationHelpers[549];
  const milestoneRebuttal500 = conversationHelpers[499];
  const milestoneRebuttal240 = conversationHelpers[239];
  const milestoneRebuttal230 = conversationHelpers[229];
  const milestoneRebuttal220 = conversationHelpers[219];
  const n = conversationHelpers.length;

  return (
    <PageShell>
      <PageHero
        tone="sunrise"
        eyebrow="Shareable Resource"
        title="The Rebuttal Desk"
        description="A study guide for real conversations - every claim sourced, every response ready to copy."
        tip="Browse, Study, and Quiz modes share the same entries and filters on mobile and desktop."
        actions={<ShareButton />}
      />

      {n >= 750 && milestoneRebuttal750 && (
        <MilestoneBanner
          count={750}
          href={rebuttalDetailPath(milestoneRebuttal750.id)}
          blurb="Pass 34 verifiable-room milestone - Marbury through Bruen history counters, Schedule F, tariffs, DPA, housing, and elections mandates."
        />
      )}
      {n >= 700 && n < 750 && milestoneRebuttal700 && (
        <MilestoneBanner
          count={700}
          href={rebuttalDetailPath(milestoneRebuttal700.id)}
          blurb="Pass 33 milestone - expanded history and policy counters."
        />
      )}
      {n >= 650 && n < 700 && milestoneRebuttal650 && (
        <MilestoneBanner
          count={650}
          href={rebuttalDetailPath(milestoneRebuttal650.id)}
          blurb="Pass 32 milestone - expanded history and policy counters."
        />
      )}
      {n >= 600 && n < 650 && milestoneRebuttal600 && (
        <MilestoneBanner
          count={600}
          href={rebuttalDetailPath(milestoneRebuttal600.id)}
          blurb="Pass 31 milestone - expanded history and policy counters."
        />
      )}
      {n >= 550 && n < 600 && milestoneRebuttal550 && (
        <MilestoneBanner
          count={550}
          href={rebuttalDetailPath(milestoneRebuttal550.id)}
          blurb="Pass 30 milestone - expanded history and policy counters."
        />
      )}
      {n >= 500 && n < 550 && milestoneRebuttal500 && (
        <MilestoneBanner
          count={500}
          href={rebuttalDetailPath(milestoneRebuttal500.id)}
          blurb="Half-thousand milestone - sourced counters across history and policy."
        />
      )}
      {n >= 240 && n < 500 && milestoneRebuttal240 && (
        <MilestoneBanner
          count={240}
          href={rebuttalDetailPath(milestoneRebuttal240.id)}
          blurb="Expanded rebuttal desk milestone."
        />
      )}
      {n >= 230 && n < 240 && milestoneRebuttal230 && (
        <MilestoneBanner
          count={230}
          href={rebuttalDetailPath(milestoneRebuttal230.id)}
          blurb="Expanded rebuttal desk milestone."
        />
      )}
      {n >= 220 && n < 230 && milestoneRebuttal220 && (
        <MilestoneBanner
          count={220}
          href={rebuttalDetailPath(milestoneRebuttal220.id)}
          blurb="Expanded rebuttal desk milestone."
        />
      )}

      <RebuttalDeskSection standalone />
    </PageShell>
  );
}
