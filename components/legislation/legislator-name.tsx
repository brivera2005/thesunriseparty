import { Mail, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { partyColor } from "@/lib/data/legislation";
import {
  lookupLegislatorContact,
  lookupLegislatorByBioguide,
  type LegislatorContact,
} from "@/lib/data/legislator-contacts";
import type { MemberVoteCast, PartyCode } from "@/lib/types";

type LegislatorNameProps = {
  name: string;
  party: PartyCode;
  state: string;
  className?: string;
  bioguideId?: string | null;
  vote?: MemberVoteCast;
  /** compact = inline chip; stacked = name + contact; vote = chip + vote + contacts */
  variant?: "compact" | "stacked" | "vote";
};

function formatLabel(
  name: string,
  party: PartyCode,
  state: string,
  contact: LegislatorContact | null
) {
  const title =
    contact?.title ?? (contact?.chamber === "senate" ? "Sen." : "Rep.");
  return `${title} ${name} (${party}-${state})`;
}

function voteBadgeClass(vote: MemberVoteCast) {
  if (vote === "Yea") return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (vote === "Nay") return "bg-rose-50 text-rose-800 border-rose-200";
  if (vote === "Present")
    return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-muted text-muted-foreground border-border";
}

export function LegislatorName({
  name,
  party,
  state,
  className,
  bioguideId,
  vote,
  variant = "stacked",
}: LegislatorNameProps) {
  const contact =
    (bioguideId ? lookupLegislatorByBioguide(bioguideId) : null) ||
    lookupLegislatorContact(name, state, party);
  const color = partyColor(party);
  const label = formatLabel(name, party, state, contact);
  const email = contact?.email ?? null;
  const phone = contact?.phone ?? null;
  const office = contact?.office ?? null;
  const fax = contact?.fax ?? null;
  const contactHref = email
    ? `mailto:${email}`
    : contact?.contactUrl ?? contact?.website ?? null;

  const showContacts = variant !== "compact";

  return (
    <span className={cn("inline-flex flex-col gap-1", className)}>
      <span className="inline-flex flex-wrap items-center gap-1.5">
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
            {variant === "compact" || variant === "vote" ? (
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
        {vote ? (
          <span
            className={cn(
              "rounded border px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase",
              voteBadgeClass(vote)
            )}
          >
            {vote}
          </span>
        ) : null}
      </span>

      {showContacts ? (
        <span className="flex flex-col gap-0.5 pl-0.5 text-[11px]">
          {phone ? (
            <a
              href={`tel:+1${phone.replace(/\D/g, "")}`}
              className="inline-flex w-fit items-center gap-1 font-medium text-navy underline-offset-2 hover:underline"
            >
              <Phone className="size-3 shrink-0 text-muted-foreground" aria-hidden />
              {phone}
            </a>
          ) : null}
          {contactHref ? (
            <a
              href={contactHref}
              target={email ? undefined : "_blank"}
              rel={email ? undefined : "noopener noreferrer"}
              className="inline-flex w-fit items-center gap-1 font-medium text-[color:var(--section-legislation)] underline-offset-2 hover:underline"
            >
              {email ? (
                <>
                  <Mail className="size-3 shrink-0" aria-hidden />
                  {email}
                </>
              ) : (
                <>
                  <ExternalLink className="size-3 shrink-0" aria-hidden />
                  Contact form
                </>
              )}
            </a>
          ) : null}
          {variant === "stacked" && office ? (
            <span className="text-muted-foreground">{office}</span>
          ) : null}
          {variant === "stacked" && fax ? (
            <span className="text-muted-foreground">Fax {fax}</span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
