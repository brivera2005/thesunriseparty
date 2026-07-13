import type { Metadata } from "next";
import { StartPage } from "@/components/start/start-page";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Start Here | Project Sunrise",
  description:
    "A quick walkthrough of Project Sunrise: Rebuttal Desk, History, Tracker, Legislation, Scenarios, Blueprint, and Mission.",
  openGraph: {
    title: "Start Here | Project Sunrise",
    description: "Here's what you can do. Open any tool. Skip anytime.",
    url: `${SITE_URL}/start`,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here | Project Sunrise",
    description: "Here's what you can do. Open any tool. Skip anytime.",
    images: [defaultOg.images[0].url],
  },
};

export default function Start() {
  return <StartPage />;
}
