"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Ban,
  CalendarClock,
  ExternalLink,
  Eye,
  Lock,
  Scale,
  Share2,
  Shield,
} from "lucide-react";
import type { PolicyFix, SafeguardItem } from "@/lib/types";
import { blueprintDetailPath, policyFixes } from "@/lib/data/policies";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CitationList } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/metadata";

const safeguardIcons: Record<string, React.ReactNode> = {
  "SAFE-001": <Ban className="size-5 text-primary" />,
  "SAFE-002": <Lock className="size-5 text-primary" />,
  "SAFE-003": <Scale className="size-5 text-primary" />,
  "SAFE-004": <Eye className="size-5 text-primary" />,
};

function ShareBlueprintButton({ id, title }: { id: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}${blueprintDetailPath(id)}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${title} | Project Sunrise`,
          text: "Evidence-based progressive policy with safeguards - Project Sunrise Blueprint",
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
      {copied ? "Link copied" : "Share policy"}
    </Button>
  );
}

function PolicyFixDetail({ policy }: { policy: PolicyFix }) {
  return (
    <Card className="border-border">
      <CardContent className="space-y-6 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-xs font-semibold tracking-wider text-destructive uppercase">
                Problem
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {policy.problem}{" "}
                <CitationList sources={policy.citations.slice(0, 2)} />
              </p>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
                Proposed Fix
              </p>
              <p className="text-sm leading-relaxed">{policy.proposedFix}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-xs font-semibold tracking-wider text-severity-low uppercase">
                Economic Impact
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {policy.economicImpact}
              </p>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-semibold tracking-wider text-severity-high uppercase">
                Cost of Inaction
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {policy.costOfInaction}{" "}
                <CitationList sources={policy.costOfInactionCitations} />
              </p>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-semibold tracking-wider text-sunrise uppercase">
                Safeguards
              </p>
              <ul className="space-y-1.5">
                {policy.safeguards.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Shield className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {policy.billReferences && policy.billReferences.length > 0 && (
          <div className="border-t border-border pt-6">
            <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Related Legislation
            </p>
            <ul className="space-y-2">
              {policy.billReferences.map((bill) => (
                <li key={bill.number} className="text-sm">
                  <a
                    href={bill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-2 hover:underline"
                  >
                    <ExternalLink className="size-3.5 shrink-0" />
                    {bill.number} - {bill.title}
                  </a>
                  {bill.status && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{bill.status}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {policy.implementationTimeline && policy.implementationTimeline.length > 0 && (
          <div className="border-t border-border pt-6">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              <CalendarClock className="size-3.5" />
              Implementation Timeline
            </p>
            <ol className="space-y-3">
              {policy.implementationTimeline.map((phase) => (
                <li
                  key={phase.phase}
                  className="rounded-lg border border-border bg-muted/20 px-3 py-2.5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold">{phase.phase}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {phase.timeframe}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            Sources: <CitationList sources={policy.citations} />
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function SafeguardDetail({ safeguard }: { safeguard: SafeguardItem }) {
  return (
    <Card className="border-border">
      <CardHeader className="flex-row items-start gap-3 space-y-0">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent">
          {safeguardIcons[safeguard.id]}
        </div>
        <div>
          <CardTitle className="text-base">{safeguard.title}</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{safeguard.description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {safeguard.mechanisms.map((m) => (
            <li
              key={m}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          <CitationList sources={safeguard.citations} />
        </p>
      </CardContent>
    </Card>
  );
}

export function BlueprintDetailPage({
  policy,
  safeguard,
}: {
  policy?: PolicyFix;
  safeguard?: SafeguardItem;
}) {
  const item = policy ?? safeguard;
  if (!item) return null;

  const isPolicy = Boolean(policy);
  const title = isPolicy ? policy!.title : safeguard!.title;
  const id = item.id;
  const categoryLabel = isPolicy ? policy!.category : "Irreversible Safeguard";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/blueprint"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Blueprint
            </Link>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge className="bg-primary text-primary-foreground">{categoryLabel}</Badge>
              {!isPolicy && (
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Safeguard
                </Badge>
              )}
              <span className="font-mono text-[10px] text-muted-foreground">{id}</span>
            </div>

            <h1 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              <ShareBlueprintButton id={id} title={title} />
              <Link
                href="/blueprint"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
              >
                View all policies
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {policy && <PolicyFixDetail policy={policy} />}
            {safeguard && <SafeguardDetail safeguard={safeguard} />}

            {isPolicy && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Other Policy Fixes
                </p>
                <div className="flex flex-wrap gap-2">
                  {policyFixes
                    .filter((p) => p.id !== id)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        href={blueprintDetailPath(p.id)}
                        className="inline-flex max-w-full rounded-md border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
                      >
                        {p.title.slice(0, 50)}
                        {p.title.length > 50 ? "…" : ""}
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
