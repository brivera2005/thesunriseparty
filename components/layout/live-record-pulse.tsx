import { cn } from "@/lib/utils";

/** Classic broadcast “ON AIR” red record light — decorative. */
export function LiveRecordPulse({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block shrink-0 rounded-full bg-[#dc2626] animate-live-record",
        size === "sm" ? "size-1.5" : "size-2",
        className
      )}
    />
  );
}
