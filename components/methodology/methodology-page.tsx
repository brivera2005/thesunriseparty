"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  methodologyIntro,
  methodologySections,
  sourceTierLegend,
  correctionsMailto,
} from "@/lib/data/methodology-content";
import { cn } from "@/lib/utils";

export function MethodologyPage() {
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
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Sunrise
            </Link>
            <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Research Standards
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {methodologyIntro.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {methodologyIntro.subtitle}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="space-y-14">
            {methodologySections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-20">
                <div className="mb-4 flex items-center gap-3">
                  <section.icon
                    className="size-7 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="mb-4 leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 space-y-2 border-l-2 border-primary/30 pl-4">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="source-tiers"
          className="scroll-mt-20 border-y border-border bg-muted/20 py-12 sm:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-2 text-2xl font-bold">Source Tier Badges</h2>
            <p className="mb-8 text-muted-foreground">
              Every citation in the modal displays a tier badge so you know what
              kind of evidence you are reading.
            </p>
            <div className="space-y-4">
              {sourceTierLegend.map((item) => (
                <Card key={item.tier} className="border-border">
                  <CardContent className="p-5">
                    <Badge
                      variant="outline"
                      className={cn(
                        "mb-3",
                        item.tier === 1 &&
                          "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
                        item.tier === 2 &&
                          "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400",
                        item.tier === 3 &&
                          "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                      )}
                    >
                      {item.label}
                    </Badge>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/80">
                      Examples: {item.examples}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <div className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
              <Mail className="mx-auto mb-3 size-8 text-primary" />
              <h2 className="text-lg font-semibold">Submit a correction</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Found a broken source, factual error, or missing context? We
                publish corrections in our changelog. Send the page URL, the claim
                in question, and your source - we verify before updating.
              </p>
              <a
                href={correctionsMailto}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "mt-4 inline-flex gap-2"
                )}
              >
                <Mail className="size-3.5" />
                Email a correction
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Questions about our standards? Compare our tracker against{" "}
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
              <Link
                href="/mission"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Our Mission
              </Link>
              {" · "}
              <Link
                href="/changelog"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Changelog
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
