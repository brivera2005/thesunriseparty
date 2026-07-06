import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:border focus:border-primary focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Skip to main content
    </Link>
  );
}
