"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Megaphone, ShieldAlert, Sparkles } from "lucide-react";

export type EvidenceFields = {
  whyItWorks?: string;
  whyPeopleCallItExtreme?: string;
  theGaslight?: string;
  alreadyWorksWhere?: string;
};

const SECTIONS: {
  key: keyof EvidenceFields;
  value: string;
  label: string;
  icon: React.ReactNode;
  tone: string;
}[] = [
  {
    key: "whyItWorks",
    value: "why-it-works",
    label: "Why it works",
    icon: <Sparkles className="size-3.5 shrink-0 text-primary" />,
    tone: "text-primary",
  },
  {
    key: "whyPeopleCallItExtreme",
    value: "called-extreme",
    label: "Why people call it extreme",
    icon: <Megaphone className="size-3.5 shrink-0 text-severity-high" />,
    tone: "text-severity-high",
  },
  {
    key: "theGaslight",
    value: "the-gaslight",
    label: "The gaslight",
    icon: <ShieldAlert className="size-3.5 shrink-0 text-destructive" />,
    tone: "text-destructive",
  },
  {
    key: "alreadyWorksWhere",
    value: "already-works",
    label: "Already works where",
    icon: <MapPin className="size-3.5 shrink-0 text-severity-low" />,
    tone: "text-severity-low",
  },
];

export function PolicyEvidencePanel({ fields }: { fields: EvidenceFields }) {
  const present = SECTIONS.filter((s) => Boolean(fields[s.key]?.trim()));
  if (present.length === 0) return null;

  return (
    <div className="mt-6 border-t border-border pt-4">
      <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        Evidence & framing
      </p>
      <Accordion type="multiple" defaultValue={["why-it-works"]} className="rounded-lg border border-border bg-muted/15">
        {present.map((section) => (
          <AccordionItem
            key={section.value}
            value={section.value}
            className="border-border px-3 last:border-b-0"
          >
            <AccordionTrigger className="py-3 text-xs font-semibold hover:no-underline">
              <span className={`inline-flex items-center gap-2 ${section.tone}`}>
                {section.icon}
                {section.label}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {fields[section.key]}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
