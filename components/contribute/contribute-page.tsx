"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Mail } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  contributeIntro,
  contributeSections,
  contributeMailto,
  GITHUB_ISSUES_URL,
} from "@/lib/data/contribute-content";
import { cn } from "@/lib/utils";

export function ContributePage() {
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
              Community Input
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {contributeIntro.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {contributeIntro.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={contributeMailto}
                className={cn(buttonVariants({ size: "sm" }), "gap-2")}
              >
                <Mail className="size-3.5" />
                Email a submission
              </a>
              <Link
                href="/methodology"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                Editorial standards
              </Link>
              <a
                href={GITHUB_ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
              >
                <Github className="size-3.5" />
                GitHub issues
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="space-y-8">
            {contributeSections.map((section) => (
              <Card key={section.id} id={section.id} className="scroll-mt-20 border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <section.icon
                      className="size-7 text-primary"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 48)}
                      className="mb-3 leading-relaxed text-muted-foreground"
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
                  {section.cta && (
                    <div className="mt-5">
                      {section.cta.external ? (
                        <a
                          href={section.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "gap-2"
                          )}
                        >
                          {section.cta.label}
                          <ExternalLink className="size-3.5" />
                        </a>
                      ) : section.cta.href.startsWith("mailto:") ? (
                        <a
                          href={section.cta.href}
                          className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "gap-2"
                          )}
                        >
                          <Mail className="size-3.5" />
                          {section.cta.label}
                        </a>
                      ) : (
                        <Link
                          href={section.cta.href}
                          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                        >
                          {section.cta.label}
                        </Link>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
