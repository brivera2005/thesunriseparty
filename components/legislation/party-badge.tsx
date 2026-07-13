import { cn } from "@/lib/utils";
import { partyColor, partyLabel } from "@/lib/data/legislation";
import type { PartyCode } from "@/lib/types";

export function PartyBadge({
  party,
  state,
  name,
  className,
}: {
  party: PartyCode;
  state?: string;
  name?: string;
  className?: string;
}) {
  const color = partyColor(party);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-semibold",
        className
      )}
      style={{
        borderColor: `${color}55`,
        backgroundColor: `${color}14`,
        color,
      }}
      title={partyLabel(party)}
    >
      <span
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {name ? (
        <span className="text-navy">
          {name}
          <span className="ml-1 font-mono text-[10px] opacity-80">
            ({party}{state ? `-${state}` : ""})
          </span>
        </span>
      ) : (
        <span className="font-mono">
          {party}
          {state ? `-${state}` : ""}
        </span>
      )}
    </span>
  );
}
