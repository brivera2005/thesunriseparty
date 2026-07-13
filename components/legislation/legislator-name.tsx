import { Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { partyColor } from "@/lib/data/legislation";
import {
  lookupLegislatorContact,
  type LegislatorContact,
} from "@/lib/data/legislator-contacts";
import type { PartyCode } from "@/lib/types";

type LegislatorNameProps = {
  name: string;
  party: PartyCode;
  state: string;
  className?: string;
  /** compact = inline chip; stacked = name + contact under */
  variant?: "compact" | "stacked";
};

function formatLabel(
  name: string,
  party: PartyCode,
  state: string,
  contact: LegislatorContact | null
) {
  const title = contact?.title ?? (contact?.chamber === "senate" ? "Sen." : "Rep.");
  return `${title} ${name} (${party}-${state})`;
}

export function LegislatorName({
  name,
  party,
  state,
  className,
  variant = "stacked",
}: LegislatorNameProps) {
  const contact = lookupLegislatorContact(name, state, party);
  const color = partyColor(party);
  const label = formatLabel(name, party, state, contact);
  const email = contact?.email ?? null;
  const contactHref = email
    ? `mailto:${email}`
    : contact?.contactUrl ?? contact?.website ?? null;

  return (
    <span className={cn("inline-flex flex-col gap-1", className)}>
      <span
        className="inline-flex w-fit items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-semibold"
        style={{
          borderColor: `${color}55`,
          backgroundColor: `${color}14`,
          color,
        }}
      >
        <span
          className="size-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden
        />
        <span className="text-navy">
          {variant === "compact" ? (
            <>
              {name}
              <span className="ml-1 font-mono text-[10px] opacity-80">
                ({party}-{state})
              </span>
            </>
          ) : (
            label
          )}
        </span>
      </span>
      {contactHref ? (
        <a
          href={contactHref}
          target={email ? undefined : "_blank"}
          rel={email ? undefined : "noopener noreferrer"}
          className="inline-flex w-fit items-center gap-1 text-[11px] font-medium text-[color:var(--section-legislation)] underline-offset-2 hover:underline"
        >
          {email ? (
            <>
              <Mail className="size-3" aria-hidden />
              {email}
            </>
          ) : (
            <>
              <ExternalLink className="size-3" aria-hidden />
              Contact
            </>
          )}
        </a>
      ) : null}
    </span>
  );
}
