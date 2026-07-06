import type { Metadata } from "next";
import { StartPage } from "@/components/start/start-page";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Start Here | Project Sunrise",
  description:
    "Four-step guided tour for new visitors — mission, tracker, rebuttal desk, and progressive blueprint.",
  openGraph: {
    title: "Start Here — Guided Tour | Project Sunrise",
    description:
      "New to Project Sunrise? Learn where to track Project 2025, find sourced rebuttals, and explore the progressive blueprint.",
    url: `${SITE_URL}/start`,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here | Project Sunrise",
    description: "Four-step guided tour for new visitors.",
    images: [defaultOg.images[0].url],
  },
};

export default function Start() {
  return <StartPage />;
}
