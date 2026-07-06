import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlueprintDetailPage } from "@/components/blueprint/blueprint-detail-page";
import {
  blueprintPageIds,
  blueprintDetailPath,
  getPolicyFixById,
  getSafeguardById,
} from "@/lib/data/policies";
import { SITE_URL, sectionOg } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blueprintPageIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const policy = getPolicyFixById(id);
  const safeguard = getSafeguardById(id);

  if (!policy && !safeguard) {
    return { title: "Policy Not Found | Project Sunrise" };
  }

  const title = policy
    ? `${policy.title} | Progressive Blueprint`
    : `${safeguard!.title} | Blueprint Safeguard`;
  const description = policy
    ? `${policy.proposedFix.slice(0, 155)}…`
    : `${safeguard!.description.slice(0, 155)}…`;
  const url = `${SITE_URL}${blueprintDetailPath(id)}`;

  return {
    title: `${title} | Project Sunrise`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Project Sunrise",
      type: "article",
      images: sectionOg.blueprint.images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sectionOg.blueprint.images[0].url],
    },
  };
}

export default async function BlueprintItemPage({ params }: PageProps) {
  const { id } = await params;
  const policy = getPolicyFixById(id);
  const safeguard = getSafeguardById(id);

  if (!policy && !safeguard) notFound();

  return <BlueprintDetailPage policy={policy} safeguard={safeguard} />;
}
