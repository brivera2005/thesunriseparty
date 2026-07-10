"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const TAGLINE = "A New Beginning. Restoring Democracy.";

type BrandLogoProps = {
  /** hero | header | footer */
  variant?: "hero" | "header" | "footer";
  className?: string;
  priority?: boolean;
  showTagline?: boolean;
};

const sizeMap = {
  hero: {
    width: 480,
    height: 262,
    className: "h-auto w-[min(100%,200px)] sm:w-[220px] md:w-[240px] lg:w-[280px]",
  },
  header: {
    width: 240,
    height: 131,
    className: "h-12 w-auto sm:h-14 md:h-16",
  },
  footer: {
    width: 200,
    height: 109,
    className: "h-auto w-[140px] sm:w-[160px]",
  },
} as const;

/**
 * Logo wrapper: mix-blend-multiply removes the off-white textured PNG background
 * on pure white (#ffffff) pages so the mark sits flush without a visible box.
 */
export function BrandLogo({
  variant = "header",
  className,
  priority = false,
  showTagline = false,
}: BrandLogoProps) {
  const { width, height, className: sizeClass } = sizeMap[variant];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 flex-col items-start bg-white",
        className
      )}
    >
      <span className="inline-block bg-white leading-none">
        <Image
          src="/logo.png"
          alt={`The Sunrise Party. ${TAGLINE}`}
          width={width}
          height={height}
          priority={priority}
          className={cn(
            "object-contain object-left mix-blend-multiply",
            sizeClass
          )}
        />
      </span>
      {showTagline && variant === "hero" && (
        <span className="mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-sm">
          {TAGLINE}
        </span>
      )}
    </span>
  );
}

export { TAGLINE as BRAND_TAGLINE };
