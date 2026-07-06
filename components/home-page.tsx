"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { HomeHub } from "@/components/home-hub";
import { MissionSection } from "@/components/mission/mission-section";
import { TrackerSection } from "@/components/tracker/tracker-section";
import { BlueprintSection } from "@/components/blueprint/blueprint-section";

const RebuttalDeskSection = dynamic(
  () =>
    import("@/components/rebuttal/rebuttal-desk-section").then(
      (m) => m.RebuttalDeskSection
    ),
  { ssr: false, loading: () => <div className="min-h-[400px]" aria-hidden /> }
);

function SectionViewAll({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8 flex justify-center border-t border-border pt-8">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        {label}
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <HomeHub />

        <MissionSection compact />
        <SectionViewAll href="/mission" label="View full mission" />

        <TrackerSection compact />
        <SectionViewAll href="/tracker" label="View full tracker" />

        <BlueprintSection compact />
        <SectionViewAll href="/blueprint" label="View full blueprint" />

        <RebuttalDeskSection compact limit={5} />
        <SectionViewAll href="/rebuttal" label="View all rebuttals" />
      </main>

      <SiteFooter />
    </div>
  );
}
