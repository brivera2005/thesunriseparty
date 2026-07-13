"use client";

import { useState } from "react";
import { policyFixes, safeguardItems, blueprintDetailPath } from "@/lib/data/policies";
import { CitationList } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock, Scale, Eye, Ban, ExternalLink, CalendarClock, Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlueprintHashNav } from "./blueprint-hash-nav";
import { PolicyEvidencePanel } from "./policy-evidence-panel";
import { SITE_URL } from "@/lib/metadata";

const safeguardIcons: Record<string, React.ReactNode> = {
  "SAFE-001": <Ban className="size-5 text-primary" />,
  "SAFE-002": <Lock className="size-5 text-primary" />,
  "SAFE-003": <Scale className="size-5 text-primary" />,
  "SAFE-004": <Eye className="size-5 text-primary" />,
};

function PolicyCopyLink({ policyId }: { policyId: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}${blueprintDetailPath(policyId)}`;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-7 shrink-0 gap-1.5 px-2 text-xs text-muted-foreground hover:text-primary"
      aria-label={`Copy link to ${policyId}`}
    >
      {copied ? (
        <>
          <Check className="size-3.5" />
          Copied
        </>
      ) : (
        <>
          <Link2 className="size-3.5" />
          Copy link
        </>
      )}
    </Button>
  );
}

export function BlueprintSection({
  standalone = false,
  compact = false,
}: {
  standalone?: boolean;
  compact?: boolean;
}) {
  const policies = compact ? policyFixes.slice(0, 2) : policyFixes;
  const [openPolicy, setOpenPolicy] = useState(policyFixes[0].id);

  return (
    <>
      <BlueprintHashNav onOpenPolicy={setOpenPolicy} />
      <section
        id={standalone ? undefined : "blueprint"}
        className={cn("section-y scroll-mt-16", standalone && "section-y-tight")}
        aria-labelledby={standalone ? undefined : "blueprint-heading"}
      >
        <div className="page-container">
          {!standalone && (
          <div className="mb-6 sm:mb-8">
            <div className="mb-2 flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary shadow-[0_0_8px_oklch(0.70_0.17_70/40%)]" />
              <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Progressive Legislature
              </span>
            </div>
            <h2 id="blueprint-heading" className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
              The Blueprint
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Evidence-based policy proposals with economic modeling, implementation
              pathways, and built-in safeguards against reversal.
            </p>
          </div>
          )}

          <Accordion
            type="single"
            collapsible
            value={openPolicy}
            onValueChange={(v) => v && setOpenPolicy(v)}
            className="space-y-3"
          >
            {policies.map((policy) => (
              <div key={policy.id} id={policy.id} className="scroll-mt-24">
              <AccordionItem
                value={policy.id}
                className="rounded-xl border border-border bg-card px-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <div className="flex w-full flex-col items-start gap-1 pr-2 text-left">
                    <div className="flex w-full flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                          {policy.category}
                        </Badge>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {policy.id}
                        </span>
                      </div>
                      <PolicyCopyLink policyId={policy.id} />
                    </div>
                    <span className="text-base font-semibold">{policy.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-1.5 text-xs font-semibold tracking-wider text-destructive uppercase">
                          Problem
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {policy.problem}{" "}
                          <CitationList sources={policy.citations.slice(0, 2)} />
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
                          Proposed Fix
                        </h4>
                        <p className="text-sm leading-relaxed">{policy.proposedFix}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-1.5 text-xs font-semibold tracking-wider text-severity-low uppercase">
                          Economic Impact
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {policy.economicImpact}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-semibold tracking-wider text-severity-high uppercase">
                          Cost of Inaction
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {policy.costOfInaction}{" "}
                          <CitationList sources={policy.costOfInactionCitations} />
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-1.5 text-xs font-semibold tracking-wider text-sunrise uppercase">
                          Safeguards
                        </h4>
                        <ul className="space-y-1.5">
                          {policy.safeguards.map((s) => (
                            <li
                              key={s}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Shield className="mt-0.5 size-3.5 shrink-0 text-primary" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <PolicyEvidencePanel
                    fields={{
                      whyItWorks: policy.whyItWorks,
                      whyPeopleCallItExtreme: policy.whyPeopleCallItExtreme,
                      theGaslight: policy.theGaslight,
                      alreadyWorksWhere: policy.alreadyWorksWhere,
                    }}
                  />

                  {policy.billReferences && policy.billReferences.length > 0 && (
                    <div className="mt-6 border-t border-border pt-4">
                      <h4 className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Related Legislation
                      </h4>
                      <ul className="space-y-2">
                        {policy.billReferences.map((bill) => (
                          <li key={bill.number} className="text-sm">
                            <a
                              href={bill.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-2 hover:underline"
                            >
                              <ExternalLink className="size-3.5 shrink-0" />
                              {bill.number} - {bill.title}
                            </a>
                            {bill.status && (
                              <p className="mt-0.5 text-xs text-muted-foreground">
                                {bill.status}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {policy.implementationTimeline && policy.implementationTimeline.length > 0 && (
                    <div className="mt-6 border-t border-border pt-4">
                      <h4 className="mb-3 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        <CalendarClock className="size-3.5" />
                        Implementation Timeline
                      </h4>
                      <ol className="space-y-3">
                        {policy.implementationTimeline.map((phase) => (
                          <li
                            key={phase.phase}
                            className="rounded-lg border border-border bg-muted/20 px-3 py-2.5"
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <span className="text-sm font-semibold">{phase.phase}</span>
                              <Badge variant="outline" className="text-[10px]">
                                {phase.timeframe}
                              </Badge>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                              {phase.description}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground">
                      Sources: <CitationList sources={policy.citations} />
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      {!compact && (
      <section
        id="safeguards"
        className={cn(
          "section-safeguards section-y scroll-mt-16 border-t border-border",
          standalone && "section-y-tight"
        )}
      >
        <div className="page-container">
          <div className="mb-6 text-center sm:mb-8">
            <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
              Constitutional Architecture
            </Badge>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
              Irreversible Safeguards
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              Structural reforms designed to survive electoral cycles and prevent
              the rollback of democratic and economic progress.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {safeguardItems.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                className="scroll-mt-24 border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex-row items-start gap-3 space-y-0">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                    {safeguardIcons[item.id]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <PolicyCopyLink policyId={item.id} />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.mechanisms.map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  <PolicyEvidencePanel
                    fields={{
                      whyItWorks: item.whyItWorks,
                      whyPeopleCallItExtreme: item.whyPeopleCallItExtreme,
                      theGaslight: item.theGaslight,
                      alreadyWorksWhere: item.alreadyWorksWhere,
                    }}
                  />
                  <p className="mt-4 text-xs text-muted-foreground">
                    <CitationList sources={item.citations} />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
}
