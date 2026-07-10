"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, FileSearch, Scale } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CitationList } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  accountabilityIntro,
  citizensUnitedOverview,
  blueprintSafeguards,
  transparencyDeclassification,
  accountabilityFacts,
  accountabilityExternalLinks,
  getAccountabilitySources,
} from "@/lib/data/accountability-content";
import { blueprintDetailPath } from "@/lib/data/policies";
import { cn } from "@/lib/utils";

export function AccountabilityPage() {
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
              href="/mission"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Mission
            </Link>
            <Badge variant="outline" className="mb-3 border-primary/40 text-primary">
              Accountability
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {accountabilityIntro.title}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {accountabilityIntro.subtitle}
            </p>
            {accountabilityIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Scale className="size-6 text-primary" />
                {citizensUnitedOverview.title}
              </h2>
              {citizensUnitedOverview.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mb-4 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              <CitationList sources={getAccountabilitySources(citizensUnitedOverview.sourceIds)} />
            </div>

            <div className="rounded-xl border border-border bg-accent/20 p-6">
              <h2 className="mb-3 text-2xl font-bold">{blueprintSafeguards.title}</h2>
              <p className="mb-4 text-muted-foreground">{blueprintSafeguards.intro}</p>
              <ul className="mb-6 space-y-2">
                {blueprintSafeguards.mechanisms.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mb-4 flex flex-wrap gap-2">
                {blueprintSafeguards.blueprintLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={blueprintDetailPath(link.id)}
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <CitationList sources={getAccountabilitySources(blueprintSafeguards.sourceIds)} />
            </div>

            <div>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <FileSearch className="size-6 text-primary" />
                {transparencyDeclassification.title}
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {transparencyDeclassification.intro}
              </p>
              <div className="space-y-4">
                {transparencyDeclassification.mandates.map((mandate) => (
                  <Card key={mandate.title} className="border-border">
                    <CardContent className="p-5">
                      <h3 className="mb-2 font-semibold">{mandate.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {mandate.body}
                      </p>
                      <CitationList sources={getAccountabilitySources(mandate.sourceIds)} />
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {transparencyDeclassification.blueprintNote}
                </p>
                <Link
                  href={blueprintDetailPath(transparencyDeclassification.blueprintLinkId)}
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  Blueprint SAFE-004 - Transparency Mandates
                </Link>
                <div className="mt-4">
                  <CitationList
                    sources={getAccountabilitySources(transparencyDeclassification.sourceIds)}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">Key Facts</h2>
              <div className="space-y-4">
                {accountabilityFacts.map((fact) => (
                  <Card key={fact.title} className="border-border">
                    <CardContent className="p-5">
                      <h3 className="mb-2 font-semibold">{fact.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {fact.body}
                      </p>
                      <CitationList sources={getAccountabilitySources(fact.sourceIds)} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold">Research Tools</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {accountabilityExternalLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40 hover:bg-accent/50"
                  >
                    <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                      {link.name}
                      <ExternalLink className="size-3.5" />
                    </span>
                    <p className="mt-1.5 text-xs text-muted-foreground">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
