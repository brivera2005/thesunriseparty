"use client";

import { PageShell } from "@/components/layout/page-shell";
import { ScenarioDetail } from "@/components/scenarios/scenario-detail";
import type { ImpactScenario } from "@/lib/types";

export function ScenarioDetailPage({ scenario }: { scenario: ImpactScenario }) {
  return (
    <PageShell>
      <ScenarioDetail scenario={scenario} />
    </PageShell>
  );
}
