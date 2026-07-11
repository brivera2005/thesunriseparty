/**
 * Pass 30 - changelog, package version, milestone banners
 * Run: node scripts/pass30/apply-meta.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

{
  const file = data("changelog.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("0.30.0")) {
    const entry = `  {
    version: "0.30.0",
    date: "2026-07-11",
    title: "Pass 30 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 240+ dual-timeline entries (Lexington through Shelby deep cuts, Little Bighorn, Sacco and Vanzetti, Hiroshima, and more)",
      "Rebuttal Desk crossed 550 sourced counters spanning metals tariffs, DPA waivers, international-organization exits, Kickapoo permit denial, and sports federalization",
      "Project 2025 Tracker crossed 240 verified actions including DPA Section 303 waivers, aluminum-steel-copper tariffs, treaty-exit memos, and Preserving America's Game",
      "New Federal Register and White House citations for industrial-policy, Indigenous permitting, appropriations implementation, and critical-pay memoranda",
      "Homepage and rebuttal milestone banners updated for 240-event and 550-rebuttal markers; link validation and Cloudflare Pages deploy for v0.30",
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

{
  const pkgPath = join(ROOT, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  if (pkg.version !== "0.30.0") {
    pkg.version = "0.30.0";
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
    console.log("package.json -> 0.30.0");
  } else console.log("package.json already 0.30.0");
}

{
  const file = join(ROOT, "components/home-hub.tsx");
  let src = readFileSync(file, "utf8");
  if (!src.includes("240 actions tracked")) {
    const banner240 = `
      {timelineEvents.length >= 240 && (
        <section
          className="border-b border-border bg-gradient-to-r from-primary/10 via-sunrise/10 to-destructive/10"
          aria-label="240 events milestone"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
            <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
            <div>
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                240 actions tracked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pass 30 verifiable-room milestone - DPA waivers, metals tariffs,
                treaty-exit memos, and Indigenous permit fights now documented.{" "}
                <Link
                  href="/tracker/EVT-2026-0711-240"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  See event #240 →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

`;
    src = src.replace(
      "      {timelineEvents.length >= 125 && (",
      banner240 + "      {timelineEvents.length >= 125 && timelineEvents.length < 240 && ("
    );
    writeFileSync(file, src);
    console.log("home-hub 240 banner patched");
  } else console.log("home-hub already patched");
}

{
  const file = join(ROOT, "components/rebuttal/rebuttal-page.tsx");
  let src = readFileSync(file, "utf8");
  if (!src.includes("550 rebuttals milestone")) {
    src = src.replace(
      `  const milestoneRebuttal240 = conversationHelpers[239];
  const milestoneRebuttal230 = conversationHelpers[229];
  const milestoneRebuttal220 = conversationHelpers[219];`,
      `  const milestoneRebuttal550 = conversationHelpers[549];
  const milestoneRebuttal500 = conversationHelpers[499];
  const milestoneRebuttal240 = conversationHelpers[239];
  const milestoneRebuttal230 = conversationHelpers[229];
  const milestoneRebuttal220 = conversationHelpers[219];`
    );

    const banners = `
        {conversationHelpers.length >= 550 && milestoneRebuttal550 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="550 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  550 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pass 30 verifiable-room milestone - metals tariffs, DPA waivers,
                  treaty exits, and sports federalization counters.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal550.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #550 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {conversationHelpers.length >= 500 && conversationHelpers.length < 550 && milestoneRebuttal500 && (
          <section
            className="border-b border-border bg-gradient-to-r from-sunrise/10 via-primary/10 to-sunrise/10"
            aria-label="500 rebuttals milestone"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
              <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
              <div>
                <p className="text-lg font-bold tracking-tight sm:text-xl">
                  500 rebuttals ready
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A sourced milestone - every talking point backed by primary
                  sources and copy-ready responses.{" "}
                  <Link
                    href={rebuttalDetailPath(milestoneRebuttal500.id)}
                    className="font-medium text-sunrise underline-offset-4 hover:underline"
                  >
                    See rebuttal #500 →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

`;
    src = src.replace(
      "        {conversationHelpers.length >= 240 && milestoneRebuttal240 && (",
      banners + "        {conversationHelpers.length >= 240 && conversationHelpers.length < 500 && milestoneRebuttal240 && ("
    );
    writeFileSync(file, src);
    console.log("rebuttal-page banners patched");
  } else console.log("rebuttal-page already patched");
}

{
  const file = data("sitemap-content.ts");
  let src = readFileSync(file, "utf8");
  if (src.includes("Pass 26 rebuttals")) {
    src = src.replace(
      'label: "Latest milestone - Pass 26 rebuttals"',
      'label: "Latest milestone - Pass 30 rebuttals"'
    );
    src = src.replace(
      'href: "/rebuttal/history-is-patriotism-only"',
      'href: "/rebuttal/pass30-infinite-room"'
    );
    writeFileSync(file, src);
    console.log("sitemap-content milestone link patched");
  } else console.log("sitemap-content already patched or pattern missing");
}

{
  const file = data("accountability-content.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 30 accountability")) {
    const facts = `
  // Pass 30 accountability
  {
    title: "Metals tariffs are industrial policy by proclamation",
    body: "The June 2026 aluminum, steel, and copper tariff-regime proclamation stacks with reciprocal tariffs and aircraft-parts actions. Duty rates are distributional choices with receipts in the Federal Register.",
    sourceIds: ["metals_tariff_proclamation_2026", "reciprocal_tariffs_eo", "aircraft_imports_proclamation_2026"],
  },
  {
    title: "International-organization exits are still foreign policy",
    body: "The January 2026 withdrawal memorandum directs exits from organizations and treaties framed as contrary to U.S. interests. Formality is not consequence: nonparticipation changes facts on the ground.",
    sourceIds: ["intl_orgs_withdrawal_memo_2026", "who_withdrawal", "paris_withdrawal"],
  },
  {
    title: "DPA waivers deserve sunlight",
    body: "Section 303 waivers and DPA delegation adjustments steer industrial priorities. Speed without disclosure is how favors hide inside emergency grammar.",
    sourceIds: ["dpa_303_waiver_2026", "dpa_delegations_eo_2026", "safeguard_executive"],
  },
  {
    title: "Tribal permit denials are federal Indian law",
    body: "Denying a presidential permit for the Kickapoo Traditional Tribe of Texas is not a HOA spat. Track the rationale beside Pacific fishing and lands rollbacks.",
    sourceIds: ["kickapoo_permit_denial_2026", "pacific_fishing_proclamation_2026", "federal_lands_restrictions_eo_2026"],
  },
  {
    title: "240+ tracker events remain a receipt stack",
    body: "Project Sunrise Pass 30 crosses 240 verified tracker actions. Volume is auditability: each entry ties to White House, Federal Register, GAO, CRS, or other primary receipts.",
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
