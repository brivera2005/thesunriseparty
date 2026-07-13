"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Scale,
  Share2,
  Sparkles,
} from "lucide-react";
import type { LegislationBill } from "@/lib/types";
import {
  partyColor,
  statusLabel,
} from "@/lib/data/legislation";
import { PartyBadge } from "@/components/legislation/party-badge";
import { VoteBars } from "@/components/legislation/vote-bars";
import { CitationList } from "@/components/citation";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/metadata";

function ShareBillButton({ bill }: { bill: LegislationBill }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}/legislation/${bill.id}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${bill.billNumber}: ${bill.title} | Project Sunrise`,
          text: bill.summary.slice(0, 180),
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share bill"}
    </Button>
  );
}

export function BillDetailPage({ bill }: { bill: LegislationBill }) {
  const accent = partyColor(bill.sponsor.party);

  return (
    <PageShell>
      <section className="border-b border-border bg-white">
        <div className="page-container max-w-3xl py-8 sm:py-12">
          <Link
            href="/legislation"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "mb-6 gap-2 text-muted-foreground"
            )}
          >
            <ArrowLeft className="size-3.5" />
            Back to Legislation
          </Link>

          <div
            className="mb-6 rounded-xl border border-border border-l-4 bg-muted/20 p-4 sm:p-5"
            style={{ borderLeftColor: accent }}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm font-bold text-navy">
                {bill.billNumber}
              </span>
              <Badge variant="outline">{statusLabel(bill.status)}</Badge>
              <Badge variant="outline" className="capitalize">
                {bill.chamber}
              </Badge>
              {bill.impactSeverity != null && (
                <Badge variant="secondary">Impact {bill.impactSeverity}/10</Badge>
              )}
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {bill.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <PartyBadge
                party={bill.sponsor.party}
                state={bill.sponsor.state}
                name={bill.sponsor.name}
              />
              {bill.cosponsorsSummary && (
                <span className="text-xs text-muted-foreground">
                  Cosponsors ·{" "}
                  <span style={{ color: partyColor("D") }}>
                    D {bill.cosponsorsSummary.D}
                  </span>
                  {" · "}
                  <span style={{ color: partyColor("R") }}>
                    R {bill.cosponsorsSummary.R}
                  </span>
                  {" · "}
                  <span style={{ color: partyColor("I") }}>
                    I {bill.cosponsorsSummary.I}
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <ShareBillButton bill={bill} />
            <a
              href={bill.congressGovUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
            >
              <ExternalLink className="size-3.5" />
              Congress.gov
            </a>
          </div>

          <dl className="mb-8 grid gap-3 rounded-xl border border-border p-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                Last action
              </dt>
              <dd className="mt-1 text-navy">{bill.lastAction}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                Action date
              </dt>
              <dd className="mt-1 tabular-nums text-navy">{bill.lastActionDate}</dd>
            </div>
          </dl>

          <div className="space-y-8">
            <section>
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase">
                <Scale className="size-4 text-primary" />
                What it does
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                {bill.summary}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-navy uppercase">
                Why it matters
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                {bill.whyItMatters}
              </p>
            </section>

            <section className="rounded-xl border border-primary/20 bg-accent/40 p-4 sm:p-5">
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
                <Sparkles className="size-4" />
                Progressive take
              </h2>
              <p className="text-sm leading-relaxed text-navy sm:text-[0.95rem]">
                {bill.progressiveTake}
              </p>
            </section>

            {bill.votes && bill.votes.length > 0 && (
              <section>
                <h2 className="mb-4 text-sm font-semibold tracking-wide text-navy uppercase">
                  Roll-call receipts
                </h2>
                <div className="space-y-4">
                  {bill.votes.map((vote, i) => (
                    <div
                      key={`${vote.chamber}-${vote.date}-${i}`}
                      className="rounded-xl border border-border p-4"
                    >
                      <VoteBars vote={vote} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-navy uppercase">
                Topics
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {bill.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-sm font-semibold tracking-wide text-navy uppercase">
                Sources
              </h2>
              <CitationList sources={bill.sources} />
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
