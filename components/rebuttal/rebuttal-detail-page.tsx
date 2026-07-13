"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Copy,
  Check,
  MessageSquareQuote,
  Share2,
  Swords,
  Zap,
  Link2,
} from "lucide-react";
import type { ConversationHelper } from "@/lib/types";
import { rebuttalDetailPath, conversationHelpers } from "@/lib/data/conversation-helpers";
import { SaveButton } from "@/components/ui/save-button";
import { CitationList } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/metadata";
import type { RebuttalDifficulty } from "@/lib/types";
import { PageShell } from "@/components/layout/page-shell";

const difficultyStyles: Record<RebuttalDifficulty, string> = {
  easy: "border-severity-low/40 text-severity-low",
  medium: "border-severity-moderate/40 text-severity-moderate",
  hard: "border-severity-high/40 text-severity-high",
};

function fullResponse(youSay: string, stab?: string) {
  return stab ? `${youSay}\n\n${stab}` : youSay;
}

function ShareRebuttalButton({ entry }: { entry: ConversationHelper }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}${rebuttalDetailPath(entry.id)}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Rebuttal: ${entry.theySay.slice(0, 80)} | Project Sunrise`,
          text: entry.youSay.slice(0, 200),
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
      {copied ? "Link copied" : "Share rebuttal"}
    </Button>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5 text-xs">
      {copied ? (
        <>
          <Check className="size-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          {label}
        </>
      )}
    </Button>
  );
}

export function RebuttalDetailPage({ entry }: { entry: ConversationHelper }) {
  return (
    <PageShell>

        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/rebuttal"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Rebuttal Desk
            </Link>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              {entry.category.map((cat) => (
                <Badge key={cat} variant="outline" className="border-sunrise/30 text-sunrise">
                  {cat}
                </Badge>
              ))}
              {entry.difficulty && (
                <Badge
                  variant="outline"
                  className={cn("text-[10px] uppercase", difficultyStyles[entry.difficulty])}
                >
                  {entry.difficulty}
                </Badge>
              )}
              <span className="font-mono text-[10px] text-muted-foreground">{entry.id}</span>
            </div>

            <div className="flex items-start gap-2">
              <MessageSquareQuote className="mt-1 size-5 shrink-0 text-destructive/70" />
              <h1 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                &ldquo;{entry.theySay}&rdquo;
              </h1>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <ShareRebuttalButton entry={entry} />
              <SaveButton
                type="rebuttal"
                id={entry.id}
                title={entry.theySay}
                href={rebuttalDetailPath(entry.id)}
              />
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Card className="border-border">
              <CardContent className="space-y-6 p-6">
                <div>
                  <h2 className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
                    <Swords className="size-3.5" />
                    What You Say
                  </h2>
                  <p className="text-sm leading-relaxed">{entry.youSay}</p>
                </div>

                {entry.stab && (
                  <div className="rounded-lg border border-sunrise/25 bg-sunrise/5 px-4 py-3">
                    <h2 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-sunrise uppercase">
                      <Zap className="size-3.5" />
                      The Stab
                    </h2>
                    <p className="text-sm font-medium leading-relaxed">{entry.stab}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <CopyButton
                    text={fullResponse(entry.youSay, entry.stab)}
                    label="Copy response"
                  />
                  {entry.stab && (
                    <CopyButton text={entry.stab} label="Copy stab only" />
                  )}
                </div>

                <div className="border-t border-border pt-6">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    <Link2 className="size-3.5" />
                    Sources
                  </p>
                  <CitationList sources={entry.sources} />
                </div>

                {entry.relatedClaims && entry.relatedClaims.length > 0 && (
                  <div className="border-t border-border pt-6">
                    <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Related Claims
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {entry.relatedClaims.map((relatedId) => {
                        const related = conversationHelpers.find((h) => h.id === relatedId);
                        if (!related) return null;
                        return (
                          <Link
                            key={relatedId}
                            href={rebuttalDetailPath(relatedId)}
                            className="inline-flex max-w-full rounded-md border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
                          >
                            {related.theySay.slice(0, 60)}
                            {related.theySay.length > 60 ? "…" : ""}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </PageShell>
  );
}
