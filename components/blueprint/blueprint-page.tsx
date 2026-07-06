"use client";

import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { BlueprintSection } from "@/components/blueprint/blueprint-section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share"}
    </Button>
  );
}

export function BlueprintPage() {
  const setMode = useAppStore((s) => s.setMode);

  useEffect(() => {
    setMode("blueprint");
  }, [setMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
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
                <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                  Shareable Resource
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  The Progressive Blueprint
                </h1>
                <p className="mt-3 text-muted-foreground">
                  Medicare for All, climate mobilization, voting rights, and
                  irreversible safeguards — with bill numbers and timelines.
                </p>
              </div>
              <ShareButton />
            </div>
          </div>
        </section>

        <BlueprintSection standalone />
      </main>

      <SiteFooter />
    </div>
  );
}
