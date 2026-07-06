"use client";

import { useState } from "react";
import { Check, Code2, Copy } from "lucide-react";
import type { TimelineEvent } from "@/lib/types";
import { eventDetailPath } from "@/lib/data/timeline-events";
import { SITE_URL } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type EmbedMode = "link" | "iframe";

function buildLinkSnippet(event: TimelineEvent) {
  const url = `${SITE_URL}${eventDetailPath(event.Event_ID)}`;
  const label = `${event.Action_Type} — Project Sunrise`;
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function buildIframeSnippet(event: TimelineEvent) {
  const url = `${SITE_URL}${eventDetailPath(event.Event_ID)}`;
  return `<iframe src="${url}" title="Project Sunrise — ${event.Event_ID}" width="100%" height="420" style="border:1px solid #e5e7eb;border-radius:8px;" loading="lazy"></iframe>`;
}

export function EventEmbedSnippet({ event }: { event: TimelineEvent }) {
  const [mode, setMode] = useState<EmbedMode>("link");
  const [copied, setCopied] = useState(false);

  const snippet = mode === "link" ? buildLinkSnippet(event) : buildIframeSnippet(event);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-border">
      <CardContent className="p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
            <Code2 className="size-3.5" />
            Embed this event
          </p>
          <div className="flex items-center gap-1 rounded-lg border border-border p-0.5">
            <Button
              variant={mode === "link" ? "default" : "ghost"}
              size="sm"
              className="h-7 px-2.5 text-xs"
              onClick={() => setMode("link")}
            >
              Link
            </Button>
            <Button
              variant={mode === "iframe" ? "default" : "ghost"}
              size="sm"
              className="h-7 px-2.5 text-xs"
              onClick={() => setMode("iframe")}
            >
              iframe
            </Button>
          </div>
        </div>
        <p className="mb-3 text-xs text-muted-foreground">
          Copy HTML to cite this tracker entry on your blog, newsletter, or research site.
        </p>
        <pre className="mb-3 overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 text-[11px] leading-relaxed whitespace-pre-wrap break-all">
          {snippet}
        </pre>
        <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy embed code"}
        </Button>
      </CardContent>
    </Card>
  );
}
