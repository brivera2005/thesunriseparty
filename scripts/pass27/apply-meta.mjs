/**
 * Pass 27 - deepen Blueprint / Accountability / Changelog / Mission notes
 * Run: node scripts/pass27/apply-meta.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

// Deepen existing FIX-HC-001 and FIX-ECO-001 problem statements with sourced density
{
  const file = data("policies.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 27 deepen")) {
    // Append a comment marker and strengthen FIX-VR cost of inaction via string replace on a unique paragraph
    const oldVr = `Without federal baseline voting rights, partisan maps and ID obstacle courses can lock in minority rule even when popular majorities favor reform.`;
    // Find a unique sentence in FIX-VR if present; otherwise patch healthcare costOfInaction
    if (src.includes("costOfInaction:\n      \"Without reform, medical debt")) {
      src = src.replace(
        `costOfInaction:
      "Without reform, medical debt will keep driving roughly two-thirds of personal bankruptcies while 27 million remain uninsured and Medicare Advantage overpayments drain $83B annually from public coffers.",`,
        `costOfInaction:
      "Without reform, medical debt will keep driving roughly two-thirds of personal bankruptcies while 27 million remain uninsured and Medicare Advantage overpayments drain $83B annually from public coffers. GAO and CBO scoring show administrative fragmentation and overpayments persist without structural change. /* Pass 27 deepen */",`
      );
      // Remove the JS comment from string - bad idea. Fix properly:
    }
    writeFileSync(file, src);
  }
}

// Better approach: add accountability facts + changelog + deepen policy via careful replacements
{
  const file = data("policies.ts");
  let src = readFileSync(file, "utf8");
  // Undo any bad comment if present
  src = src.replace(" GAO and CBO scoring show administrative fragmentation and overpayments persist without structural change. /* Pass 27 deepen */", "");
  
  if (!src.includes("Pass27-HC-deepen")) {
    src = src.replace(
      "Without reform, medical debt will keep driving roughly two-thirds of personal bankruptcies while 27 million remain uninsured and Medicare Advantage overpayments drain $83B annually from public coffers.",
      "Without reform, medical debt will keep driving roughly two-thirds of personal bankruptcies while 27 million remain uninsured and Medicare Advantage overpayments drain $83B annually from public coffers. GAO healthcare audits and CBO Medicare baselines show fragmentation and overpayments persist without structural change (Pass27-HC-deepen)."
    );
  }
  if (!src.includes("Pass27-ECO-deepen")) {
    src = src.replace(
      "If labor power keeps eroding at current rates, gig workers remain misclassified without benefits, wage stagnation persists despite record profits, and the 17% union wage premium stays out of reach for 90% of workers.",
      "If labor power keeps eroding at current rates, gig workers remain misclassified without benefits, wage stagnation persists despite record profits, and the 17% union wage premium stays out of reach for 90% of workers. BLS union-membership series remains near historic lows without card-check and misclassification reform (Pass27-ECO-deepen)."
    );
  }
  if (!src.includes("Pass27-ENV-deepen")) {
    // Find environment cost of inaction - try a partial unique string
    const envMatch = src.match(/id: "FIX-ENV-001"[\s\S]*?costOfInaction:\s*"([^"]+)"/);
    if (envMatch && !envMatch[1].includes("Pass27-ENV-deepen")) {
      src = src.replace(
        envMatch[1],
        envMatch[1] + " EPA rollback stacks and NOAA climate records make delay permanently costlier (Pass27-ENV-deepen)."
      );
    }
  }
  if (!src.includes("Pass27-VR-deepen")) {
    const vrMatch = src.match(/id: "FIX-VR-001"[\s\S]*?costOfInaction:\s*"([^"]+)"/);
    if (vrMatch && !vrMatch[1].includes("Pass27-VR-deepen")) {
      src = src.replace(
        vrMatch[1],
        vrMatch[1] + " Brennan Center tracking after Shelby County shows how preclearance loss enabled rapid restrictive voting changes (Pass27-VR-deepen)."
      );
    }
  }
  if (!src.includes("Pass27-IMM-deepen")) {
    const immMatch = src.match(/id: "FIX-IMM-001"[\s\S]*?costOfInaction:\s*"([^"]+)"/);
    if (immMatch && !immMatch[1].includes("Pass27-IMM-deepen")) {
      src = src.replace(
        immMatch[1],
        immMatch[1] + " CRS backlog analyses show multi-year court delays deepen without staffing and due-process investment (Pass27-IMM-deepen)."
      );
    }
  }
  writeFileSync(file, src);
  console.log("policies deepened");
}

{
  const file = data("accountability-content.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 27 accountability")) {
    const facts = `
  // Pass 27 accountability
  {
    title: "GAO improper payments dwarf campaign talking points",
    body: "GAO's improper-payments portfolio documents tens of billions in annual payment errors across major programs. Schedule Policy/Career removals that thin career oversight staff raise the risk those errors grow while political messaging claims efficiency.",
    sourceIds: ["gao_improper_payments", "schedule_policy_career_eo_2026", "safeguard_transparency"],
  },
  {
    title: "Fintech deregulation without consumer cops",
    body: "White House E.O.s 14405 and 14406 push fintech-friendly regulatory integration while CFPB and FTC enforcement capacity is paused or narrowed. Innovation without cops on the beat is a gift to predators in the payment stack.",
    sourceIds: ["fintech_eo_2026", "financial_integrity_eo_2026", "cfpb_enforcement_pause"],
  },
  {
    title: "Federal Register is the receipt book",
    body: "Every durable executive restructuring eventually hits the Federal Register. Project Sunrise treats FR publications and White House presidential-action pages as primary evidence - not influencer summaries - because the official journal is where agencies must publish.",
    sourceIds: ["doge_fr_eo", "wh_eo_index_2026", "safeguard_transparency"],
  },
  {
    title: "OpenSecrets and FEC still understate dark money",
    body: "Even with FEC filings and OpenSecrets aggregation, 501(c)(4) anonymity means the public ledger is incomplete by design. SAFE-004's real-time disclosure over $200 closes the gap Citizens United never required to stay dark.",
    sourceIds: ["dark_money_transparency", "fec_campaign_data", "safeguard_transparency"],
  },
  {
    title: "Vaccine-schedule politicization is a public-health capture risk",
    body: "E.O. 14407's peer-country vaccine realignment inserts political framing into CDC scientific recommendation processes. Public health legitimacy depends on transparent evidence reviews, not executive branding exercises.",
    sourceIds: ["vaccine_realign_eo_2026", "cdc_grant_pause"],
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
  if (!src.includes("0.27.0")) {
    const entry = `  {
    version: "0.27.0",
    date: "2026-07-11",
    title: "Pass 27 - Aggressive verifiable expansion",
    highlights: [
      "Hidden History expanded to 150+ dual-timeline entries (Pueblo Revolt through SFFA, Selma, Agent Orange, Muslim ban, and more)",
      "Rebuttal Desk expanded to 400+ sourced counters spanning Schedule F, DOGE, climate, elections, labor, and courts",
      "Project 2025 Tracker expanded to 180+ verified actions including fintech E.O.s 14405/14406, cryptographic/quantum orders, and regenerative agriculture",
      "Blueprint cost-of-inaction text deepened with GAO, BLS, Brennan, CRS, EPA, and NOAA sourcing markers",
      "Accountability page adds GAO improper-payments, fintech deregulation, Federal Register receipts, and vaccine-schedule capture facts",
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

// methodology / mission light deepen if files exist
for (const name of ["methodology-content.ts", "mission-content.ts"]) {
  const file = data(name);
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 27")) {
    // Append a short note into a known string if present
    if (name.includes("methodology") && src.includes("primary sources")) {
      src = src.replace(
        /primary sources/,
        "primary sources (Pass 27: prefer Federal Register, National Archives, Congress.gov, GAO, BLS, CDC, Brennan, ACLU, AP/Reuters)"
      );
      writeFileSync(file, src);
      console.log("patched", name);
    } else if (name.includes("mission")) {
      // skip if no safe unique replace
      console.log("skip mission auto-patch");
    }
  }
}
