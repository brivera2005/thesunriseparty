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

/** Intrinsic size of public/logo.png (1024×341). */
const LOGO_W = 1024;
const LOGO_H = 341;

const sizeMap = {
  hero: {
    width: LOGO_W,
    height: LOGO_H,
    className:
      "h-auto w-[min(100%,300px)] sm:w-[380px] md:w-[460px] lg:w-[520px]",
  },
  // Compact for single-row header with inline nav (~100-140px)
  header: {
    width: LOGO_W,
    height: LOGO_H,
    className: "h-auto w-[100px] sm:w-[120px] md:w-[130px] lg:w-[140px]",
  },
  footer: {
    width: LOGO_W,
    height: LOGO_H,
    className: "h-auto w-[160px] sm:w-[200px] md:w-[220px]",
  },
} as const;

/**
 * Brand mark: PROJECT SUNRISE horizontal logo (sun icon + wordmark + tagline).
 * White PNG background matches site chrome; no mix-blend needed.
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
      className={cn("inline-flex shrink-0 flex-col items-start", className)}
    >
      <span className="inline-block leading-none">
        <Image
          src="/logo.png"
          alt={`Project Sunrise. ${TAGLINE}`}
          width={width}
          height={height}
          priority={priority}
          className={cn("object-contain object-left", sizeClass)}
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
