"use client";

import Link from "next/link";
import { ArrowLeft, Share2, ExternalLink, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  missionPillars,
  transparencyPledge,
  antiPlutocracyStance,
  whatWeTrack,
  whatWeBuild,
} from "@/lib/data/mission-content";
import { cn } from "@/lib/utils";

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = "https://thesunriseparty.pages.dev/mission";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Project Sunrise — Our Mission",
          text: "Transparency-first tracking of Project 2025 and the progressive blueprint for when democracy wins.",
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
      <Share2 className="size-4" />
      {copied ? "Link copied!" : "Share Mission"}
    </Button>
  );
}

export function MissionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        {/* Hero */}
        <section className="mission-hero relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 mission-gradient" />
          <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Project Sunrise
            </Link>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-primary uppercase">
              Full Transparency Pledge
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Mission
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Project Sunrise is a{" "}
              <strong className="font-semibold text-foreground">
                transparency-first research platform
              </strong>{" "}
              for Americans who refuse to be propagandized. We track the
              authoritarian playbook, cross-reference independent watchdogs, and
              build the progressive counter-vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ShareButton />
              <Link
                href="/methodology"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
              >
                Research Methodology
              </Link>
              <Link
                href="/#tracker"
                className={cn(buttonVariants({ size: "sm" }), "gap-2")}
              >
                Explore the Tracker
                <ChevronDown className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="scroll-mt-16 py-16 sm:py-20" id="pillars">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-10 text-center text-3xl font-bold">Six Pillars</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {missionPillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="border-border/80 bg-card/60 backdrop-blur-sm transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <pillar.icon
                      className={cn("mb-4 size-8", pillar.accent)}
                      strokeWidth={1.5}
                    />
                    <h3 className="mb-2 font-semibold">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Pledge */}
        <section
          className="scroll-mt-16 border-y border-border bg-accent/20 py-16 sm:py-20"
          id="pledge"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-6 text-center text-3xl font-bold">
              The Sunrise Transparency Pledge
            </h2>
            <ul className="space-y-4">
              {transparencyPledge.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-12 border-l-4 border-primary/50 pl-6">
              <p className="text-base leading-relaxed italic text-muted-foreground sm:text-lg">
                &ldquo;The trillionaire class and their captured institutions want
                you confused, cynical, and checked out. Project Sunrise exists so
                you can see the agenda clearly, fight it with facts, and know
                exactly what to build when we win.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-medium text-foreground">
                — The Sunrise Transparency Pledge
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Anti-Plutocracy */}
        <section className="scroll-mt-16 py-16 sm:py-20" id="anti-plutocracy">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Badge variant="destructive" className="mb-4">
              Anti-Plutocracy
            </Badge>
            <h2 className="mb-6 text-3xl font-bold">
              {antiPlutocracyStance.title}
            </h2>
            {antiPlutocracyStance.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mb-4 text-muted-foreground leading-relaxed"
              >
                {p}
              </p>
            ))}
            <Link
              href="/accountability"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4 gap-2")}
            >
              Dark Money & Accountability
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </section>

        {/* What We Track / Build */}
        <section className="scroll-mt-16 border-t border-border bg-muted/20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div id="what-we-track">
                <h2 className="mb-6 text-2xl font-bold">What We Track</h2>
                <Accordion type="multiple" className="w-full">
                  {whatWeTrack.map((section) => (
                    <AccordionItem key={section.title} value={section.title}>
                      <AccordionTrigger className="text-base font-semibold">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div id="what-we-build">
                <h2 className="mb-6 text-2xl font-bold">What We Build</h2>
                <div className="space-y-4">
                  {whatWeBuild.map((item) => (
                    <Card key={item.title} className="border-border">
                      <CardContent className="p-5">
                        <h3 className="mb-2 font-semibold">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/#blueprint"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    View Blueprint
                  </Link>
                  <Link
                    href="/#rebuttal-desk"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    Rebuttal Desk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* External resources */}
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm text-muted-foreground">
              We cross-reference six independent Project 2025 trackers.{" "}
              <a
                href="https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
              >
                CPR Tracker
                <ExternalLink className="size-3" />
              </a>
              {" · "}
              <a
                href="https://www.project2025.observer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
              >
                project2025.observer
                <ExternalLink className="size-3" />
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
