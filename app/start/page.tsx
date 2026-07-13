import type { Metadata } from "next";
import { StartPage } from "@/components/start/start-page";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Start Here | Project Sunrise",
  description:
    "Seven-stop guided tour: Rebuttal Desk, History, Tracker, Legislation, Scenarios, Blueprint, then Mission.",
  openGraph: {
    title: "Start Here - Guided Tour | Project Sunrise",
    description:
      "Know the tools fast. Categories first, Mission last.",
    url: `${SITE_URL}/start`,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here | Project Sunrise",
    description: "Seven-stop tour: tools first, Mission last.",
    images: [defaultOg.images[0].url],
  },
};

export default function Start() {
  return <StartPage />;
}
