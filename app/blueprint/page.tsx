import type { Metadata } from "next";
import { BlueprintPage } from "@/components/blueprint/blueprint-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "The Progressive Blueprint | Project Sunrise",
  description:
    "Medicare for All, PRO Act, climate mobilization, voting rights — evidence-based policy with bill numbers, implementation timelines, and constitutional safeguards.",
  openGraph: {
    title: sectionOg.blueprint.title,
    description: sectionOg.blueprint.description,
    url: `${SITE_URL}/blueprint`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.blueprint.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.blueprint.title,
    description: sectionOg.blueprint.description,
    images: [sectionOg.blueprint.images[0].url],
  },
};

export default function Blueprint() {
  return <BlueprintPage />;
}
