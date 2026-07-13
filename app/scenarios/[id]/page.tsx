import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScenarioDetailPage } from "@/components/scenarios/scenario-detail-page";
import {
  getScenarioById,
  impactScenarios,
  scenarioDetailPath,
} from "@/lib/data/scenarios";
import { SITE_URL } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return impactScenarios.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const scenario = getScenarioById(id);
  if (!scenario) {
    return { title: "Scenario not found | Project Sunrise" };
  }
  const description = `${scenario.persona.who}${scenario.persona.location ? ` in ${scenario.persona.location}` : ""}: ${scenario.bottomLine}`;
  return {
    title: `${scenario.title} | Impact Scenarios`,
    description,
    openGraph: {
      title: scenario.title,
      description,
      url: `${SITE_URL}${scenarioDetailPath(scenario.id)}`,
      siteName: "Project Sunrise",
      type: "article",
    },
  };
}

export default async function ScenarioDetailRoute({ params }: PageProps) {
  const { id } = await params;
  const scenario = getScenarioById(id);
  if (!scenario) notFound();
  return <ScenarioDetailPage scenario={scenario} />;
}
