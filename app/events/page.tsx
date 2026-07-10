import type { Metadata } from "next";
import { EventsPage } from "@/components/tracker/events-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Agenda Events Calendar | Project Sunrise",
  description:
    "Calendar view of verified Project 2025 administrative actions - browse by date, severity, and category with primary sources.",
  openGraph: {
    title: "Agenda Events Calendar | Project Sunrise",
    description:
      "Browse Project 2025 tracker events on an interactive calendar with severity scoring and source links.",
    url: `${SITE_URL}/events`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.tracker.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenda Events Calendar | Project Sunrise",
    description:
      "Calendar view of verified Project 2025 administrative actions with primary sources.",
    images: [sectionOg.tracker.images[0].url],
  },
};

export default function Events() {
  return <EventsPage />;
}
