"use client";

import { Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { BlueprintSection } from "@/components/blueprint/blueprint-section";
import { Button } from "@/components/ui/button";
import { HeroActions, heroActionClass } from "@/components/ui/hero-actions";
import { useAppStore } from "@/lib/store";

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = "https://thesunriseparty.pages.dev/blueprint";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "The Progressive Blueprint | Project Sunrise",
          text: "Evidence-based policy fixes and constitutional safeguards for when democracy wins.",
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
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className={heroActionClass}
    >
      <Share2 className="size-3" />
      {copied ? "Copied" : "Share"}
    </Button>
  );
}

export function BlueprintPage() {
  const setMode = useAppStore((s) => s.setMode);

  useEffect(() => {
    setMode("blueprint");
  }, [setMode]);

  return (
    <PageShell>
      <PageHero
        section="blueprint"
        eyebrow="The Fix"
        title="The Progressive Blueprint"
        description="How we enact change when democracy wins. Evidence, safeguards, and the gaslight exposed."
        tip="Open any pillar for evidence, timelines, and shareable pages."
        actions={
          <HeroActions>
            <ShareButton />
          </HeroActions>
        }
      />
      <BlueprintSection standalone />
    </PageShell>
  );
}
