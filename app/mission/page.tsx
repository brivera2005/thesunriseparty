import type { Metadata } from "next";
import { MissionPage } from "@/components/mission/mission-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Our Mission | Project Sunrise",
  description:
    "Full transparency pledge, anti-plutocracy stance, and what Project Sunrise tracks and builds. Evidence-based Project 2025 monitoring for democracy.",
  openGraph: {
    title: sectionOg.mission.title,
    description: sectionOg.mission.description,
    url: `${SITE_URL}/mission`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.mission.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.mission.title,
    description: sectionOg.mission.description,
    images: [sectionOg.mission.images[0].url],
  },
};

export default function Mission() {
  return <MissionPage />;
}
