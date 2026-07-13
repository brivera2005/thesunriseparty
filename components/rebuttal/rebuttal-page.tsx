"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { RebuttalDeskSection } from "@/components/rebuttal/rebuttal-desk-section";
import { Button } from "@/components/ui/button";

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

export function RebuttalPage() {
  return (
    <PageShell>
      <PageHero
        section="rebuttal"
        eyebrow="Conversation Ready"
        title="The Rebuttal Desk"
        description="When they say X, you say Y. Copy-ready, every claim sourced."
        tip="Browse, Study, and Quiz use the same entries and filters."
        actions={<ShareButton />}
      />

      <RebuttalDeskSection standalone />
    </PageShell>
  );
}
