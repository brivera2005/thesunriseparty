/**
 * Pass 28 - deepen Blueprint / Accountability / Changelog
 * Run: node scripts/pass28/apply-meta.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

{
  const file = data("policies.ts");
  let src = readFileSync(file, "utf8");

  const deepen = (id, marker, suffix) => {
    if (src.includes(marker)) return;
    const re = new RegExp(`id: "${id}"[\\s\\S]*?costOfInaction:\\s*"([^"]+)"`);
    const m = src.match(re);
    if (m && !m[1].includes(marker)) {
      src = src.replace(m[1], m[1] + " " + suffix + ` (${marker}).`);
    }
  };

  deepen(
    "FIX-ED-001",
    "Pass28-ED-deepen",
    "Department of Education restructuring and Title IX enforcement shifts reduce the civil-rights bandwidth students rely on when states roll back protections"
  );
  deepen(
    "FIX-HOUS-001",
    "Pass28-HOUS-deepen",
    "HUD fair-housing pauses and high rent burdens in Census data show housing scarcity is a policy outcome, not a personal failure epidemic"
  );
  deepen(
    "FIX-MED-001",
    "Pass28-MED-deepen",
    "FCC ownership and broadcast rule shifts plus reduced proactive disclosure concentrate information power while local news deserts widen"
  );
  deepen(
    "FIX-DIS-001",
    "Pass28-DIS-deepen",
    "ADA enforcement capacity and community-care access shrink when agencies treat disability rights as optional paperwork instead of civil rights"
  );
  deepen(
    "FIX-IND-001",
    "Pass28-IND-deepen",
    "Treaty obligations and consultation duties erode when lands, fishing, and energy proclamations treat Indigenous nations as afterthoughts"
  );

  // Add safeguard mechanisms to SAFE-002 and SAFE-004
  if (!src.includes("Pass28-SAFE002")) {
    src = src.replace(
      `"Inspector General protection from presidential removal without cause finding by bipartisan panel",
    ],
    citations: [citations.safeguard_executive, citations.crs_executive],`,
      `"Inspector General protection from presidential removal without cause finding by bipartisan panel",
      "Emergency proclamations and NSPMs expire after 90 days unless Congress renews (Pass28-SAFE002)",
      "National-security memoranda must be logged in a public index within 14 days unless a narrow classified annex applies (Pass28-SAFE002)",
    ],
    citations: [citations.safeguard_executive, citations.crs_executive],`
    );
  }
  if (!src.includes("Pass28-SAFE004")) {
    src = src.replace(
      `"Live-streamed congressional committee hearings with searchable transcripts within 24 hours",
    ],
    citations: [citations.safeguard_transparency, citations.pew_trust],`,
      `"Live-streamed congressional committee hearings with searchable transcripts within 24 hours",
      "Federal Register and White House presidential-action URLs archived daily with checksum manifests (Pass28-SAFE004)",
      "Agency FOIA dashboards must publish backlog age percentiles monthly, not annual averages alone (Pass28-SAFE004)",
    ],
    citations: [citations.safeguard_transparency, citations.pew_trust],`
    );
  }

  writeFileSync(file, src);
  console.log("policies/safeguards deepened");
}

{
  const file = data("accountability-content.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 28 accountability")) {
    const facts = `
  // Pass 28 accountability
  {
    title: "Freedom-to-Fix is an EPA enforcement posture shift",
    body: "The June 29, 2026 presidential memorandum directs EPA guidance on aftermarket emissions repairs and deprioritization of certain tampering cases. DIY branding does not erase the Clean Air Act implications. Track the guidance text, not the slogan.",
    sourceIds: ["freedom_to_fix_memo_2026", "epa_vehicle_emissions_rollback", "safeguard_transparency"],
  },
  {
    title: "NSPM cascade concentrates security policy off-stage",
    body: "NSPM-11 and NSPM-12 add to a mid-2026 stack of national-security presidential memoranda. These instruments can bind agencies with less public process than statutes or ordinary rules. Sunshine is the safeguard.",
    sourceIds: ["nspm_11_2026", "nspm_12_2026", "safeguard_executive"],
  },
  {
    title: "Trade-by-proclamation is still policy",
    body: "Aircraft-parts and phosphate-fertilizer proclamations show industrial and farm policy moving through emergency and import authorities. Congress can reclaim the tariff and emergency lanes or keep rubber-stamping the receipt book.",
    sourceIds: ["aircraft_imports_proclamation_2026", "phosphate_fertilizer_proclamation_2026", "trade_policy_eo"],
  },
  {
    title: "Clemency patterns are accountability data",
    body: "Individual pardons are constitutional. Patterns of allied clemency alongside Jan. 6 and corruption cases are still fair game for public judgment. Absolute power is exactly when character metrics matter.",
    sourceIds: ["buyer_pardon_2026", "jan6_pardons_eo", "safeguard_anticorruption"],
  },
  {
    title: "200+ tracker events are a receipt stack",
    body: "Project Sunrise Pass 28 crosses 200 verified tracker actions. Volume is not vibes: each entry ties to White House, Federal Register, GAO, CRS, or other primary receipts so readers can audit the chain.",
    sourceIds: ["wh_eo_index_2026", "fr_home_2026", "safeguard_transparency"],
  },
`;
    src = src.replace(
      /\n\];\s*\n\nexport const accountabilityExternalLinks/,
      "\n" + facts + "\n];\n\nexport const accountabilityExternalLinks"
    );
    writeFileSync(file, src);
    console.log("accountability facts added");
  } else console.log("accountability already patched");
}

{
  const file = data("changelog.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("0.28.0")) {
    const entry = `  {
    version: "0.28.0",
    date: "2026-07-11",
    title: "Pass 28 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 180+ dual-timeline entries (Pequot War through Scopes, 14th Amendment, Memphis/New Orleans massacres, and more)",
      "Rebuttal Desk expanded to 450+ sourced counters spanning Freedom-to-Fix, NSPMs, Schedule Policy/Career, climate, courts, and labor",
      "Project 2025 Tracker crossed 200+ verified actions including Freedom-to-Fix EPA memo, trade proclamations, NSPM-11/12, and Pacific fishing",
      "Blueprint safeguards deepened (SAFE-002 emergency/NSPM sunsets; SAFE-004 FR archival and FOIA backlog metrics) plus FIX cost-of-inaction sourcing",
      "Accountability page adds Freedom-to-Fix, NSPM cascade, trade-by-proclamation, and clemency-pattern facts",
    ],
  },
`;
    src = src.replace(
      "export const changelog: ChangelogEntry[] = [\n",
      "export const changelog: ChangelogEntry[] = [\n" + entry
    );
    writeFileSync(file, src);
    console.log("changelog patched");
  } else console.log("changelog already patched");
}
