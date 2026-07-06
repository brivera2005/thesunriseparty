import { Suspense } from "react";
import type { Metadata } from "next";
import { RebuttalPage } from "@/components/rebuttal/rebuttal-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Rebuttal Desk | Project Sunrise",
  description:
    "95+ sourced talking points for countering MAGA claims — economy, immigration, democracy, and culture wars debunked with primary sources.",
  openGraph: {
    title: sectionOg.rebuttal.title,
    description: sectionOg.rebuttal.description,
    url: `${SITE_URL}/rebuttal`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.rebuttal.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.rebuttal.title,
    description: sectionOg.rebuttal.description,
    images: [sectionOg.rebuttal.images[0].url],
  },
};

export default function Rebuttal() {
  return (
    <Suspense>
      <RebuttalPage />
    </Suspense>
  );
}
