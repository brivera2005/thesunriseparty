"use client";

import { AlertTriangle, ExternalLink } from "lucide-react";
import {
  scheduleFAgencies,
  scheduleFOverview,
} from "@/lib/data/schedule-f-agencies";
import { CitationList } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TermTip } from "@/components/ui/term-tip";
import { cn } from "@/lib/utils";

const statusStyles = {
  implementing: "border-destructive/40 text-destructive bg-destructive/5",
  identified: "border-severity-moderate/40 text-severity-moderate bg-severity-moderate/5",
  litigation: "border-severity-high/40 text-severity-high bg-severity-high/5",
};

export function ScheduleFDeepDive() {
  return (
    <Card className="mb-8 border-destructive/20 bg-card/80">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" />
          <div>
            <h3 className="inline-flex flex-wrap items-center gap-1 text-lg font-bold">
              Schedule F Deep Dive
              <TermTip term="schedule-f" />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {scheduleFOverview.summary}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <a
            href={scheduleFOverview.opmGuidanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 px-3 text-xs font-medium text-primary hover:bg-primary/10"
          >
            <ExternalLink className="size-3.5" />
            OPM Federal Register Guidance (Jan 29, 2025)
          </a>
          <a
            href={scheduleFOverview.eoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-background px-3 text-xs font-medium hover:bg-muted"
          >
            <ExternalLink className="size-3.5" />
            Schedule F Executive Order
          </a>
          <a
            href="https://www.congress.gov/crs-product/R47394"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-background px-3 text-xs font-medium hover:bg-muted"
          >
            <ExternalLink className="size-3.5" />
            CRS Legal Analysis (R47394)
          </a>
        </div>

        <Accordion type="multiple" className="w-full">
          {scheduleFAgencies.map((agency) => (
            <AccordionItem key={agency.id} value={agency.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-1 flex-wrap items-center gap-2 pr-4 text-left">
                  <span className="font-semibold">{agency.abbreviation}</span>
                  <span className="text-sm text-muted-foreground">
                    {agency.name}
                  </span>
                  <Badge
                    variant="outline"
                    className={cn("text-[10px] capitalize", statusStyles[agency.status])}
                  >
                    {agency.status}
                  </Badge>
                  <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                    {agency.estimatedRoles}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  {agency.impact}
                </p>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sources
                </p>
                <CitationList sources={agency.sources} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
