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
    width: 640,
    height: 349,
    className:
      "h-auto w-[min(100%,280px)] sm:w-[320px] md:w-[380px] lg:w-[440px]",
  },
  header: {
    width: 320,
    height: 174,
    // Keep below header padding so the mark never clips the sticky border
    className: "h-10 w-auto sm:h-11 md:h-12",
  },
  footer: {
    width: 220,
    height: 120,
    className: "h-auto w-[150px] sm:w-[170px]",
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
