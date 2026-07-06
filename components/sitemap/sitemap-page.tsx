"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Rss,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  sitemapIntro,
  sitemapSections,
  sitemapStats,
} from "@/lib/data/sitemap-content";
import { cn } from "@/lib/utils";

export function SitemapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border">
          <div className="hero-gradient-blueprint absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
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
              Navigation Hub
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {sitemapIntro.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {sitemapIntro.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/start"
                className={cn(buttonVariants({ size: "sm" }), "gap-2")}
              >
                New here? Start the tour
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/changelog"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                v0.21.0 changelog
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-muted/20">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
            {sitemapStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <stat.icon className="mb-2 size-5 text-primary" aria-hidden />
                <p className="text-2xl font-bold tabular-nums">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {sitemapSections.map((section) => (
              <Card
                key={section.id}
                id={section.id}
                className={cn("scroll-mt-20 overflow-hidden border-2", section.accent)}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <div
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg border",
                        section.accent
                      )}
                    >
                      <section.icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{section.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link) => {
                      const isExternal =
                        link.href.startsWith("http") ||
                        link.href.endsWith(".xml") ||
                        link.href.endsWith(".json") ||
                        link.href.endsWith(".csv") ||
                        link.href.endsWith(".ics");

                      const content = (
                        <>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-medium group-hover:text-primary">
                              {link.label}
                            </span>
                            {link.count !== undefined && (
                              <Badge variant="secondary" className="tabular-nums">
                                {link.count}
                              </Badge>
                            )}
                            {link.badge && (
                              <Badge variant="outline" className="text-xs">
                                {link.badge}
                              </Badge>
                            )}
                            {isExternal && (
                              <ExternalLink className="size-3 text-muted-foreground" />
                            )}
                            {link.href === "/feed.xml" && (
                              <Rss className="size-3 text-muted-foreground" />
                            )}
                          </div>
                          {link.description && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {link.description}
                            </p>
                          )}
                        </>
                      );

                      return (
                        <li key={link.href + link.label}>
                          {isExternal ? (
                            <a
                              href={link.href}
                              className="group block rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-border hover:bg-muted/50"
                              {...(link.href.endsWith(".xml")
                                ? { type: "application/rss+xml" }
                                : {})}
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="group block rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-border hover:bg-muted/50"
                            >
                              {content}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
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
