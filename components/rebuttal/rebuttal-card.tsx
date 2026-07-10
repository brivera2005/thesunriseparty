"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  MessageSquareQuote,
  Swords,
  Zap,
  Printer,
  Link2,
  Share2,
} from "lucide-react";
import type { ConversationHelper } from "@/lib/types";
import { conversationHelpers, rebuttalDetailPath } from "@/lib/data/conversation-helpers";
import { CitationList } from "@/components/citation";
import { SaveButton } from "@/components/ui/save-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { RebuttalDifficulty } from "@/lib/types";
import { SITE_URL } from "@/lib/metadata";

const difficultyStyles: Record<RebuttalDifficulty, string> = {
  easy: "border-severity-low/40 text-severity-low",
  medium: "border-severity-moderate/40 text-severity-moderate",
  hard: "border-severity-high/40 text-severity-high",
};

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5 text-xs no-print">
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

function fullResponse(youSay: string, stab?: string) {
  return stab ? `${youSay}\n\n${stab}` : youSay;
}

function formatSourcesForCopy(entry: ConversationHelper) {
  const header = `Rebuttal: "${entry.theySay}"\n\nResponse:\n${fullResponse(entry.youSay, entry.stab)}\n\nSources:\n`;
  const lines = entry.sources.map(
    (s, i) =>
      `${i + 1}. ${s.title} - ${s.publisher}\n   ${s.url}${s.waybackUrl ? `\n   Archive: ${s.waybackUrl}` : ""}`
  );
  return header + lines.join("\n");
}

export function RebuttalCard({ entry }: { entry: ConversationHelper }) {
  const [printing, setPrinting] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    const shareUrl = `${SITE_URL}${rebuttalDetailPath(entry.id)}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Rebuttal: ${entry.theySay.slice(0, 80)}`,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(shareUrl);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    setPrinting(true);
    requestAnimationFrame(() => {
      window.print();
      setPrinting(false);
    });
  };

  return (
    <AccordionItem
      value={entry.id}
      id={`rebuttal-${entry.id}`}
      className={cn(
        "rebuttal-card rounded-xl border border-border bg-card px-4 shadow-sm transition-shadow hover:shadow-md",
        printing && "rebuttal-card--printing"
      )}
    >
      <AccordionTrigger className="py-5 hover:no-underline no-print">
        <div className="flex flex-col items-start gap-2 text-left">
          <div className="flex flex-wrap items-center gap-2">
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
          </div>
          <div className="flex items-start gap-2">
            <MessageSquareQuote className="mt-0.5 size-4 shrink-0 text-destructive/70" />
            <span className="text-base font-medium leading-snug">
              &ldquo;{entry.theySay}&rdquo;
            </span>
          </div>
          <Link
            href={rebuttalDetailPath(entry.id)}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[10px] font-medium text-primary hover:underline"
          >
            <Share2 className="size-3" />
            {shareCopied ? "Link copied" : "Share"}
          </Link>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-6 rebuttal-card-content">
        <div className="rebuttal-print-header hidden print:block">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Project Sunrise - Rebuttal Desk
          </p>
          <h3 className="mt-2 text-lg font-bold">&ldquo;{entry.theySay}&rdquo;</h3>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
              <Swords className="size-3.5" />
              What You Say
            </h4>
            <p className="text-sm leading-relaxed">{entry.youSay}</p>
          </div>

          {entry.stab && (
            <div className="rounded-lg border border-sunrise/25 bg-sunrise/5 px-4 py-3 print:border print:bg-white">
              <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-sunrise uppercase">
                <Zap className="size-3.5" />
                The Stab
              </h4>
              <p className="text-sm font-medium leading-relaxed">{entry.stab}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 no-print">
            <CopyButton
              text={fullResponse(entry.youSay, entry.stab)}
              label="Copy response"
            />
            {entry.stab && <CopyButton text={entry.stab} label="Copy stab only" />}
            <CopyButton text={formatSourcesForCopy(entry)} label="Copy all sources" />
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="gap-1.5 text-xs"
            >
              <Share2 className="size-3.5" />
              {shareCopied ? "Link copied" : "Share page"}
            </Button>
            <SaveButton
              type="rebuttal"
              id={entry.id}
              title={entry.theySay}
              href={rebuttalDetailPath(entry.id)}
              showLabel={false}
              variant="outline"
              className="text-xs"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="gap-1.5 text-xs"
            >
              <Printer className="size-3.5" />
              Print card
            </Button>
          </div>

          <div className="border-t border-border pt-4">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              <Link2 className="size-3.5" />
              Sources
            </p>
            <ul className="hidden space-y-2 print:block">
              {entry.sources.map((source, i) => (
                <li key={source.id} className="text-xs leading-relaxed">
                  [{i + 1}] {source.title} - {source.publisher} ({source.date})
                  <br />
                  <span className="break-all text-muted-foreground">{source.url}</span>
                </li>
              ))}
            </ul>
            <div className="print:hidden">
              <CitationList sources={entry.sources} />
            </div>
          </div>

          {entry.relatedClaims && entry.relatedClaims.length > 0 && (
            <div className="border-t border-border pt-4 no-print">
              <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Related Claims
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.relatedClaims.map((relatedId) => {
                  const related = conversationHelpers.find((h) => h.id === relatedId);
                  if (!related) return null;
                  return (
                    <Button
                      key={relatedId}
                      variant="ghost"
                      size="sm"
                      className="h-auto max-w-full py-1.5 text-left text-xs whitespace-normal"
                      onClick={() => {
                        document
                          .getElementById(`rebuttal-${relatedId}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {related.theySay.slice(0, 60)}
                      {related.theySay.length > 60 ? "…" : ""}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
