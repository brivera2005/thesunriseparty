import type { Metadata } from "next";
import { LegislationPage } from "@/components/legislation/legislation-page";
import { getLegislationStats, legislationMeta } from "@/lib/data/legislation";
import { sectionOg, SITE_URL } from "@/lib/metadata";

const stats = getLegislationStats();

export const metadata: Metadata = {
  title: "Live Legislation Tracker | Project Sunrise",
  description: `Track ${stats.total} active ${legislationMeta.congressLabel} bills with party-colored sponsors, roll-call tallies, and progressive analysis grounded in primary sources.`,
  openGraph: {
    title: sectionOg.legislation.title,
    description: sectionOg.legislation.description,
    url: `${SITE_URL}/legislation`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.legislation.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.legislation.title,
    description: sectionOg.legislation.description,
    images: [sectionOg.legislation.images[0].url],
  },
};

export default function Legislation() {
  return <LegislationPage />;
}
