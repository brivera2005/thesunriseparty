import type { Metadata } from "next";
import { DistractedPage } from "@/components/distracted/distracted-page";
import { getDistractionStats } from "@/lib/data/distractions";
import { sectionOg, SITE_URL } from "@/lib/metadata";

const stats = getDistractionStats();

export const metadata: Metadata = {
  title: "Distraction Watch | Project Sunrise",
  description: `${stats.total} MAGA distraction and cover-up patterns: shiny object vs what it buries, with sources and how to spot it.`,
  openGraph: {
    title: sectionOg.distracted.title,
    description: sectionOg.distracted.description,
    url: `${SITE_URL}/distracted`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.distracted.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.distracted.title,
    description: sectionOg.distracted.description,
    images: [sectionOg.distracted.images[0].url],
  },
};

export default function Distracted() {
  return <DistractedPage />;
}
