import Link from "next/link";
import { ExternalLink, FileText, Heart, Rss } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { trackerSources } from "@/lib/data/tracker-sources";

const sitePages = [
  { href: "/", label: "Home" },
  { href: "/tracker", label: "Project 2025 Tracker" },
  { href: "/rebuttal", label: "Rebuttal Desk" },
  { href: "/quiz", label: "Political Standing Quiz" },
  { href: "/distracted", label: "Distraction Watch" },
  { href: "/legislation", label: "Legislation" },
  { href: "/history", label: "Hidden History" },
  { href: "/scenarios", label: "Impact Scenarios" },
  { href: "/blueprint", label: "Progressive Blueprint" },
  { href: "/mission", label: "About (Mission)" },
  { href: "/accountability", label: "Accountability" },
  { href: "/methodology", label: "Methodology" },
  { href: "/start", label: "Tour" },
  { href: "/donate", label: "Donate" },
  { href: "/contribute", label: "Contribute" },
  { href: "/sitemap", label: "Site Map" },
  { href: "/events", label: "Events Hub" },
  { href: "/rebuttal?study=1", label: "Study Mode" },
  { href: "/rebuttal?quiz=1", label: "Quiz Mode" },
  { href: "/saved", label: "My Saved" },
  { href: "/changelog", label: "Changelog" },
] as const;

export function SiteFooter() {
  const heritage = trackerSources.find((s) => s.id === "heritage");

  return (
    <footer className="border-t border-border bg-white">
      <div className="page-container py-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-3 inline-block" aria-label="Project Sunrise home">
              <BrandLogo variant="footer" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Track the agenda. Counter the lies. Build the fix. Every claim
              sourced. Every link archived.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Site Map
            </h4>
            <ul className="space-y-2 text-sm">
              {sitePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/feed.xml"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                  type="application/rss+xml"
                >
                  <Rss className="size-3.5" />
                  Tracker RSS Feed
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              External Trackers
            </h4>
            <ul className="space-y-2 text-sm">
              {trackerSources.map((source) => (
                <li key={source.id}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="size-3 shrink-0" />
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Transparency Pledge
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                Primary sources linked on every claim
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="mt-0.5 size-4 shrink-0 text-primary" />
                Wayback Machine archives for all citations
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 size-4 shrink-0 text-primary" />
                Cross-referenced with independent trackers
              </li>
            </ul>
            {heritage && (
              <a
                href={heritage.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <ExternalLink className="size-3.5" />
                Heritage Project 2025 source document
              </a>
            )}
            <Link
              href="/methodology"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              <FileText className="size-3.5" />
              Research methodology
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Project Sunrise. Democracy dies in darkness. We bring the receipts.</p>
          <p className="text-xs">thesunriseparty.pages.dev</p>
        </div>
      </div>
    </footer>
  );
}
