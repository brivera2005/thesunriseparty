import type { Metadata } from "next";
import { ScenariosPage } from "@/components/scenarios/scenarios-page";
import { getScenarioStats } from "@/lib/data/scenarios";
import { sectionOg, SITE_URL } from "@/lib/metadata";

const stats = getScenarioStats();

export const metadata: Metadata = {
  title: "Impact Scenarios | Project Sunrise",
  description: `${stats.total} complex causal chains from policy choices to lived outcomes - families, workers, and elders with Tracker and Blueprint receipts.`,
  openGraph: {
    title: sectionOg.scenarios.title,
    description: sectionOg.scenarios.description,
    url: `${SITE_URL}/scenarios`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.scenarios.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.scenarios.title,
    description: sectionOg.scenarios.description,
    images: [sectionOg.scenarios.images[0].url],
  },
};

export default function Scenarios() {
  return <ScenariosPage />;
}
