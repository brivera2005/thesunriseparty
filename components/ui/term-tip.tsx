"use client";

import { Fragment, type ReactNode } from "react";
import { InfoTip } from "@/components/ui/info-tip";
import {
  findGlossaryMatches,
  findGlossaryTerm,
  getGlossaryTerm,
  type GlossaryTerm,
} from "@/lib/data/glossary";
import { cn } from "@/lib/utils";

type TermTipProps = {
  /** Glossary id or exact label/alias */
  term: string;
  className?: string;
  iconClassName?: string;
  side?: "top" | "bottom" | "left" | "right";
};

/** Compact ? help for a known glossary term. */
export function TermTip({
  term,
  className,
  iconClassName,
  side = "top",
}: TermTipProps) {
  const entry =
    getGlossaryTerm(term) ?? findGlossaryTerm(term);
  if (!entry) return null;

  return (
    <InfoTip
      label={entry.definition}
      side={side}
      className={cn("align-middle", className)}
      iconClassName={cn(
        "size-5 text-navy/40 hover:bg-navy/[0.06] hover:text-navy",
        iconClassName
      )}
    />
  );
}

type TipTextProps = {
  children: string;
  className?: string;
  /** Extra class on matched jargon spans */
  termClassName?: string;
};

/**
 * Renders plain text and inserts hover/tap ? tips after glossary matches.
 * Safe for titles, bury lines, and tracker descriptions.
 */
export function TipText({
  children,
  className,
  termClassName,
}: TipTextProps) {
  const text = children ?? "";
  const matches = findGlossaryMatches(text);

  if (matches.length === 0) {
    return <span className={className}>{text}</span>;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((m, i) => {
    if (m.start > cursor) {
      nodes.push(
        <Fragment key={`t-${i}-pre`}>{text.slice(cursor, m.start)}</Fragment>
      );
    }
    nodes.push(
      <span
        key={`t-${i}-term`}
        className={cn("inline whitespace-normal", termClassName)}
      >
        {m.matched}
        <TermTip
          term={m.term.id}
          className="ml-0.5 translate-y-[-1px]"
          iconClassName="size-4"
        />
      </span>
    );
    cursor = m.end;
  });

  if (cursor < text.length) {
    nodes.push(<Fragment key="t-tail">{text.slice(cursor)}</Fragment>);
  }

  return <span className={className}>{nodes}</span>;
}

export function glossaryDefinition(term: GlossaryTerm | string): string {
  if (typeof term === "string") {
    return (
      getGlossaryTerm(term)?.definition ??
      findGlossaryTerm(term)?.definition ??
      ""
    );
  }
  return term.definition;
}
