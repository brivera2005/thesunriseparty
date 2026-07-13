"use client";

import { Banknote, EyeOff, Megaphone, ShieldAlert } from "lucide-react";

export type OppositionFields = {
  whyTheyFight?: string;
  whatTheyHide?: string;
  theGaslight?: string;
  whyTheyOppose?: string;
};

const SECTIONS: {
  key: keyof OppositionFields;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "whyTheyFight",
    label: "Why they fight it",
    icon: <Megaphone className="size-4 shrink-0" aria-hidden />,
  },
  {
    key: "whatTheyHide",
    label: "What they're hiding",
    icon: <EyeOff className="size-4 shrink-0" aria-hidden />,
  },
  {
    key: "theGaslight",
    label: "The gaslight",
    icon: <ShieldAlert className="size-4 shrink-0" aria-hidden />,
  },
  {
    key: "whyTheyOppose",
    label: "The real reason",
    icon: <Banknote className="size-4 shrink-0" aria-hidden />,
  },
];

/**
 * Prominent sky-accented opposition framing for Blueprint policies.
 * Always expanded (not buried in an accordion).
 */
export function OppositionFramingPanel({ fields }: { fields: OppositionFields }) {
  const present = SECTIONS.filter((s) => Boolean(fields[s.key]?.trim()));
  if (present.length === 0) return null;

  return (
    <div
      className="mt-6 rounded-xl border-2 border-sky-400/60 bg-sky-50/80 p-4 shadow-sm sm:p-5"
      style={{ borderColor: "color-mix(in oklab, var(--section-blueprint) 55%, transparent)" }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className="size-2.5 rounded-full"
          style={{ backgroundColor: "var(--section-blueprint)" }}
          aria-hidden
        />
        <p
          className="text-xs font-bold tracking-[0.18em] uppercase"
          style={{ color: "var(--section-blueprint)" }}
        >
          Opposition framing
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {present.map((section) => (
          <div
            key={section.key}
            className="rounded-lg border border-sky-200/80 bg-white/90 px-3 py-3"
          >
            <p
              className="mb-1.5 inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase"
              style={{ color: "var(--section-blueprint)" }}
            >
              {section.icon}
              {section.label}
            </p>
            <p className="text-sm leading-relaxed text-foreground/90">
              {fields[section.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
