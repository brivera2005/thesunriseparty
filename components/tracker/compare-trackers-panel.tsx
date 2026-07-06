import { ExternalLink, GitCompareArrows } from "lucide-react";
import {
  trackerComparisonRows,
  trackerComparisonSources,
} from "@/lib/data/tracker-comparison";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CompareTrackersPanel() {
  return (
    <Card className="mb-8 border-border bg-card/80">
      <CardContent className="p-6">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
          <GitCompareArrows className="size-4 text-primary" />
          Compare Trackers
        </h3>
        <p className="mb-4 text-xs text-muted-foreground">
          How project2025.observer, CPR, and watch2025.org cover the same
          threat — and where Project Sunrise adds severity scoring and policy
          alternatives.
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {trackerComparisonSources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] font-medium text-primary hover:bg-accent/50"
            >
              {source.name}
              <ExternalLink className="size-3" />
            </a>
          ))}
        </div>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider">
                  project2025.observer
                </th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider">
                  CPR Tracker
                </th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider">
                  watch2025.org
                </th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Project Sunrise
                </th>
              </tr>
            </thead>
            <tbody>
              {trackerComparisonRows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border/60 last:border-0"
                >
                  <th
                    scope="row"
                    className="px-3 py-3 align-top text-xs font-semibold text-foreground"
                  >
                    {row.feature}
                  </th>
                  <td className="px-3 py-3 align-top text-xs leading-relaxed text-muted-foreground">
                    {row.observer}
                  </td>
                  <td className="px-3 py-3 align-top text-xs leading-relaxed text-muted-foreground">
                    {row.cpr}
                  </td>
                  <td className="px-3 py-3 align-top text-xs leading-relaxed text-muted-foreground">
                    {row.watch2025}
                  </td>
                  <td className="px-3 py-3 align-top text-xs leading-relaxed">
                    {row.sunrise}
                    <Badge
                      variant="outline"
                      className="ml-1.5 border-primary/30 text-[9px] text-primary"
                    >
                      unique
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
