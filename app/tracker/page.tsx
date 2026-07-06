import type { Metadata } from "next";
import { TrackerPage } from "@/components/tracker/tracker-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Project 2025 Tracker | Project Sunrise",
  description:
    "80+ verified administrative actions with severity scoring, primary sources, timeline filters, and cross-references to independent watchdogs.",
  openGraph: {
    title: sectionOg.tracker.title,
    description: sectionOg.tracker.description,
    url: `${SITE_URL}/tracker`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.tracker.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.tracker.title,
    description: sectionOg.tracker.description,
    images: [sectionOg.tracker.images[0].url],
  },
};

export default function Tracker() {
  return <TrackerPage />;
}
