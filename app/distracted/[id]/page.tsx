import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DistractionDetailPage } from "@/components/distracted/distraction-detail-page";
import {
  distractionDetailPath,
  distractions,
  getDistractionById,
} from "@/lib/data/distractions";
import { SITE_URL } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return distractions.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getDistractionById(id);
  if (!entry) {
    return { title: "Distraction not found | Project Sunrise" };
  }
  const description = `${entry.distraction.slice(0, 140)}…`;
  return {
    title: `${entry.title} | Distraction Watch`,
    description,
    openGraph: {
      title: entry.title,
      description,
      url: `${SITE_URL}${distractionDetailPath(entry.id)}`,
      siteName: "Project Sunrise",
      type: "article",
    },
  };
}

export default async function DistractionDetailRoute({ params }: PageProps) {
  const { id } = await params;
  const entry = getDistractionById(id);
  if (!entry) notFound();
  return <DistractionDetailPage entry={entry} />;
}
