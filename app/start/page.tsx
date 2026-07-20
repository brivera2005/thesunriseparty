import type { Metadata } from "next";
import { StartPage } from "@/components/start/start-page";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Start Here | Project Sunrise",
  description:
    "A short guided tour of Project Sunrise: Tracker, Rebuttal, Legislation, Distracted, Scenarios, Quiz, Hidden History, and Blueprint.",
  openGraph: {
    title: "Start Here | Project Sunrise",
    description: "New here? Ten plain-English stops. Skip anytime.",
    url: `${SITE_URL}/start`,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here | Project Sunrise",
    description: "New here? Ten plain-English stops. Skip anytime.",
    images: [defaultOg.images[0].url],
  },
};

export default function Start() {
  return <StartPage />;
}
