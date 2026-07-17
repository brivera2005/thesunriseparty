/**
 * Novel / proven-abroad policy ideas for quiz results and Blueprint.
 * No em dashes in user-facing copy.
 */

export type SunrisePolicyIdea = {
  id: string;
  title: string;
  /** Quiz question `topic` strings this idea pairs with */
  quizTopics: string[];
  whatItIs: string;
  pros: string[];
  cons: string[];
  whyIncredible: string;
  alreadyWorksWhere: string;
  relatedBlueprintCategory?: string;
};

export const sunrisePolicyIdeas: SunrisePolicyIdea[] = [
  {
    id: "mobile-verified-voting",
    title: "Mobile verified voting with a paper audit trail",
    quizTopics: ["Voting rights", "Democracy / rule of law"],
    whatItIs:
      "Cast a ballot on a phone or computer after strong identity proof, then produce a voter-verifiable paper record (or risk-limiting audit trail) so the digital cast can be checked like a bank transfer with a receipt.",
    pros: [
      "Cuts wait times and travel barriers for shift workers, disabled voters, and overseas citizens",
      "Banks and tax agencies already use multi-factor auth and device risk scoring daily",
      "Auditable logs beat rumor theater about 'stolen' elections when paired with paper backups",
    ],
    cons: [
      "Phone gaps and tech distrust require fallback in-person and mail options",
      "State election vendors and certification lag behind consumer security norms",
      "Coercion risk in shared households needs same safeguards used for absentee ballots",
    ],
    whyIncredible:
      "People already authenticate million-dollar transfers on phones. Treating democracy as harder than banking is a choice, not a physics limit. Estonia-style remote voting plus U.S. paper audits would shrink fraud theater while raising turnout.",
    alreadyWorksWhere:
      "Estonia runs internet voting with digital ID; Switzerland and some Canadian localities pilot remote channels; U.S. military/overseas and several states already use tracked mail + signature verification.",
    relatedBlueprintCategory: "Voting Rights",
  },
  {
    id: "auto-registration-election-holiday",
    title: "Automatic voter registration plus Election Day as a holiday",
    quizTopics: ["Voting rights", "Democracy / rule of law"],
    whatItIs:
      "Register eligible citizens by default when they interact with DMV, Social Security, or tax systems, and make Election Day a federal holiday (or guaranteed paid time to vote) so casting a ballot is the default, not a scavenger hunt.",
    pros: [
      "Removes paperwork traps that hit renters and frequent movers hardest",
      "Holiday or paid leave treats voting like civic infrastructure, not a personal errand",
      "Pairs cleanly with same-day registration and early voting expansions",
    ],
    cons: [
      "Needs careful citizenship checks to avoid backlash and error lists",
      "Employers in 24/7 sectors still need flexible early-voting windows",
      "Holiday alone does not fix gerrymandering or ballot design",
    ],
    whyIncredible:
      "The U.S. still makes eligible people opt into the voter roll while banks auto-open accounts. Default registration plus protected voting time flips the burden onto the state, where it belongs.",
    alreadyWorksWhere:
      "Oregon, California, and other AVR states raised registration rates; many democracies treat election days as civic holidays; several U.S. states already guarantee paid leave to vote.",
    relatedBlueprintCategory: "Voting Rights",
  },
  {
    id: "all-payer-rate-setting",
    title: "All-payer rate setting and reference pricing",
    quizTopics: ["Healthcare", "Social Security / Medicare"],
    whatItIs:
      "Set or negotiate hospital and specialist prices that apply across insurers (all-payer), or use international/Medicare reference prices so the same MRI does not cost five different amounts depending on your logo.",
    pros: [
      "Attacks price variation without requiring a single overnight insurer switch",
      "Works with private insurers still in the mix (Germany/Japan style)",
      "Cuts surprise bills and employer premium spikes driven by monopoly hospitals",
    ],
    cons: [
      "Providers in high-cost markets will lobby hard and may cut elective capacity short-term",
      "Needs strong rural adjustment so thin-margin hospitals stay open",
      "Complex to phase in across 50 states and ERISA employer plans",
    ],
    whyIncredible:
      "Americans pay near-double peer-nation prices for similar outcomes. Rate setting is the boring screwdriver that makes Medicare for All or a public option cheaper and private markets less extractive.",
    alreadyWorksWhere:
      "Germany and Japan use all-payer or highly regulated fee schedules; Maryland's hospital global budget is a U.S. proof; reference pricing appears in Medicare drug negotiation pilots.",
    relatedBlueprintCategory: "Healthcare",
  },
  {
    id: "childcare-public-infrastructure",
    title: "Childcare as public infrastructure",
    quizTopics: ["Education", "Economy / taxes", "Labor / unions"],
    whatItIs:
      "Treat early care like K-12: publicly funded slots, trained staff paid living wages, and sliding fees so working parents do not face a second mortgage for daycare.",
    pros: [
      "Raises labor force participation especially for women",
      "Improves school readiness and long-run earnings",
      "Stabilizes the care workforce instead of revolving door burnout",
    ],
    cons: [
      "Upfront fiscal cost is real and visible on budgets",
      "Supply build-out takes years of facilities and training",
      "Quality standards must avoid crushing small home-based providers",
    ],
    whyIncredible:
      "Peer countries treat care as infrastructure that grows GDP. The U.S. treats it as a private luxury, then wonders why birth rates and women's careers stall.",
    alreadyWorksWhere:
      "Nordic countries and Quebec's low-fee system show large employment gains; several EU states guarantee preschool seats; U.S. Head Start proves public early education works when funded.",
    relatedBlueprintCategory: "Childcare & Care Economy",
  },
  {
    id: "congestion-pricing-free-transit",
    title: "Congestion pricing paired with free or fare-free transit expansion",
    quizTopics: ["Climate", "Housing", "Economy / taxes"],
    whatItIs:
      "Charge drivers entering the most jammed downtown cores at peak hours, then recycle revenue into frequent buses, rail, and fare cuts so the alternative is better, not just the toll.",
    pros: [
      "Cuts gridlock, pollution, and delivery delays where roads are already full",
      "Funds transit without waiting for a perfect federal earmark",
      "Can exempt low-income drivers and essential vehicles",
    ],
    cons: [
      "Politically explosive if framed as a tax without visible transit wins",
      "Suburban workers need early bus/rail upgrades before fees bite",
      "Privacy and plate-reader surveillance need strict limits",
    ],
    whyIncredible:
      "London and Singapore proved pricing works when paired with better transit. Free or cheap buses turn a stick into a mobility upgrade, not a downtown punishment.",
    alreadyWorksWhere:
      "London, Stockholm, Singapore congestion charges; NYC's zone pricing; fare-free pilots in U.S. cities and Luxembourg's national free transit model.",
    relatedBlueprintCategory: "Infrastructure & Transit",
  },
  {
    id: "ranked-choice-multi-member",
    title: "Ranked choice voting and multi-member districts",
    quizTopics: ["Democracy / rule of law", "Voting rights", "Media / free speech"],
    whatItIs:
      "Rank candidates (RCV) and elect multiple representatives per district so more than two parties (or factions) can win seats without spoiler math.",
    pros: [
      "Ends spoiler panic and expands coalition incentives",
      "Rewards candidates who appeal beyond a primary base",
      "Multi-member maps dilute extreme gerrymandering",
    ],
    cons: [
      "Ballot education takes a cycle or two",
      "Incumbents in safe seats will resist",
      "Bad software or rushed rollouts invite conspiracy claims",
    ],
    whyIncredible:
      "The two-party trap is a voting-system design choice. Ranked choice plus multi-member districts is how many democracies keep competition without requiring a third party to 'spoil' a race.",
    alreadyWorksWhere:
      "Australia (preferential voting), Ireland and many EU systems (multi-member PR), Maine and Alaska RCV statewide races, NYC local RCV.",
    relatedBlueprintCategory: "Voting Rights",
  },
  {
    id: "municipal-fiber-public-broadband",
    title: "Public-option broadband and municipal fiber",
    quizTopics: ["Corporate power", "Economy / taxes", "Education"],
    whatItIs:
      "Let cities and co-ops build open-access fiber, or offer a public broadband option, so internet is infrastructure like water instead of a cable monopoly rent machine.",
    pros: [
      "Cheaper, faster service where private duopolies underinvest",
      "Homework, telehealth, and small business stop depending on one ISP",
      "Competition disciplines prices even for private providers",
    ],
    cons: [
      "Capex is large; bad procurement can waste money",
      "State preemption laws block many cities today",
      "Needs governance so networks stay maintained after election cycles",
    ],
    whyIncredible:
      "Chattanooga and European municipal nets show fiber can be a utility. Broadband scarcity in rich zip codes is a monopoly story, not a technology story.",
    alreadyWorksWhere:
      "EPB Chattanooga, many Nordic municipal nets, South Korea and parts of the EU with open-access fiber; U.S. BEAD funds can seed public builds.",
    relatedBlueprintCategory: "Infrastructure & Transit",
  },
  {
    id: "wealth-registry-beneficial-ownership",
    title: "Wealth registry and beneficial ownership transparency",
    quizTopics: ["Wealth inequality", "Corporate power", "Economy / taxes"],
    whatItIs:
      "Require real owners behind shell companies, trusts, and high-value assets to be listed in a secure registry so taxes, sanctions, and corruption probes can follow money instead of mailbox LLCs.",
    pros: [
      "Closes anonymous real-estate and shell-company loopholes",
      "Helps IRS and FinCEN stop offshore games without new inventiveness",
      "Levels the field for small businesses that already report everything",
    ],
    cons: [
      "Privacy design must protect ordinary people from doxxing",
      "Compliance burden on small LLCs if poorly scoped",
      "Cross-border enforcement still needs treaties and staffing",
    ],
    whyIncredible:
      "You cannot tax or police what you cannot see. Europe's beneficial ownership push and U.S. Corporate Transparency Act direction show the Overton window already moved; a wealth registry finishes the job.",
    alreadyWorksWhere:
      "EU beneficial ownership registers, UK Companies House reforms, U.S. CTA / FinCEN BOI rules (implementation has been contested but the logic is settled).",
    relatedBlueprintCategory: "Anti-Corruption",
  },
  {
    id: "carbon-fee-dividend",
    title: "Carbon fee and dividend",
    quizTopics: ["Climate", "Economy / taxes"],
    whatItIs:
      "Put a rising fee on carbon at the mine/well/import border, then rebate most revenue per person so households come out ahead while dirty energy gets more expensive.",
    pros: [
      "Simple price signal across the whole economy",
      "Dividend protects low- and middle-income households",
      "Border adjustment limits offshoring emissions",
    ],
    cons: [
      "Needs predictable ramp to avoid energy-price shocks",
      "Fossil regions need job transition funds, not slogans",
      "Must coexist with standards (EVs, buildings) not replace them entirely",
    ],
    whyIncredible:
      "You get cleaner power without micromanaging every purchase. Canada and Switzerland already run fee-and-rebate models that survive politics when the check is visible.",
    alreadyWorksWhere:
      "Canada's federal carbon price with rebates; Switzerland's CO2 levy with per-capita payouts; EU ETS as a cousin market mechanism.",
    relatedBlueprintCategory: "Environment",
  },
  {
    id: "drug-price-pbm-transparency",
    title: "Drug price negotiation plus pharmacy benefit transparency",
    quizTopics: ["Healthcare", "Corporate power"],
    whatItIs:
      "Expand Medicare-style negotiation to more drugs and force pharmacy benefit managers to disclose spreads, rebates, and who pockets the middleman cut.",
    pros: [
      "Directly lowers list and net prices patients feel at the counter",
      "Ends black-box rebate games that inflate premiums",
      "Works inside today's insurer system without waiting for single payer",
    ],
    cons: [
      "Pharma will threaten R&D flight; need patent and NIH deal reform in parallel",
      "PBM vertical integration with insurers complicates enforcement",
      "Launch prices on new specialty drugs still need separate tools",
    ],
    whyIncredible:
      "Other rich countries negotiate. The U.S. mostly does not, then acts shocked at insulin sticker shock. Transparency plus negotiation is the least utopian fix with the fastest wallet impact.",
    alreadyWorksWhere:
      "Most OECD systems negotiate or reference prices; IRA Medicare negotiation is a U.S. beachhead; several states already ban spread pricing in Medicaid.",
    relatedBlueprintCategory: "Drug Pricing",
  },
  {
    id: "social-housing-zoning",
    title: "Social housing plus zoning reform",
    quizTopics: ["Housing", "Economy / taxes", "Wealth inequality"],
    whatItIs:
      "Build and permanently steward mixed-income public or nonprofit housing at scale, while legalizing denser homes near jobs and transit so supply is not choked by exclusionary zoning.",
    pros: [
      "Stabilizes rents without only relying on vouchers chasing scarcity",
      "Zoning reform unlocks private and public construction together",
      "Long-term public ownership stops speculative flipping of subsidized units",
    ],
    cons: [
      "Vienna/Singapore models need adapted U.S. finance and local politics",
      "Construction costs and NIMBY litigation slow delivery",
      "Must avoid concentrating poverty or segregating by voucher status",
    ],
    whyIncredible:
      "Housing scarcity is a policy choice. Social housing plus legal duplexes and mid-rises is how cities stay livable for teachers and nurses, not only investors.",
    alreadyWorksWhere:
      "Vienna's social housing, Singapore HDB (different politics, useful scale lessons), Tokyo zoning flexibility, U.S. social housing remnants and YIMBY zoning wins in CA/OR/MN.",
    relatedBlueprintCategory: "Housing",
  },
  {
    id: "payday-ban-postal-banking",
    title: "Payday loan ban plus postal banking",
    quizTopics: ["Wealth inequality", "Economy / taxes", "Corporate power"],
    whatItIs:
      "Ban triple-digit payday and car-title traps, and let the Postal Service (or public banks) offer basic checking, bill pay, and small-dollar credit at fair rates.",
    pros: [
      "Stops legalized debt traps in bank deserts",
      "Post offices already exist in rural and urban zip codes",
      "Small-dollar public credit undercuts usury without charity theater",
    ],
    cons: [
      "USPS needs capital and IT upgrades",
      "Credit unions and community banks need a fair partnership design",
      "Underwriting mistakes can still harm borrowers if rushed",
    ],
    whyIncredible:
      "The same country that subsidizes mega-banks leaves working people to payday stores. Postal banking is an old American idea that still fits today's deserts.",
    alreadyWorksWhere:
      "Postal banking in Japan, Switzerland, and historically the U.S.; payday caps in many states and the EU; postal giro systems across Europe.",
    relatedBlueprintCategory: "Tax Fairness",
  },
  {
    id: "national-digital-id-guardrails",
    title: "National digital ID with civil liberties guardrails",
    quizTopics: [
      "Voting rights",
      "Democracy / rule of law",
      "Healthcare",
      "Immigration",
    ],
    whatItIs:
      "Offer a voluntary, privacy-preserving digital ID for benefits, banking, and optional voting credentials, with open source, audit logs, no permanent tracking database for speech, and strong limits on police reuse.",
    pros: [
      "Ends fragmented login hell for benefits and tax systems",
      "Makes secure remote voting and benefit delivery practical",
      "Can reduce document fraud without paper-only gatekeeping",
    ],
    cons: [
      "Mission creep and surveillance risk if guardrails are weak",
      "Must remain optional with paper/in-person alternatives",
      "State vs federal authority fights are real",
    ],
    whyIncredible:
      "Estonia and India (Aadhaar lessons included) show digital ID can unlock services. Done with U.S. civil liberties rules, it becomes infrastructure for voting, healthcare, and banking instead of a dystopia slogan.",
    alreadyWorksWhere:
      "Estonia e-ID, EU digital identity wallets, Login.gov and state mDLs as partial U.S. pieces.",
    relatedBlueprintCategory: "Anti-Corruption",
  },
];

/** Topics the user answered, in quiz order, for stable idea ranking. */
export function topicsFromAnswers(
  answers: Record<string, string>,
  questions: { id: string; topic: string }[]
): string[] {
  const topics: string[] = [];
  const seen = new Set<string>();
  for (const q of questions) {
    if (!answers[q.id]) continue;
    if (seen.has(q.topic)) continue;
    seen.add(q.topic);
    topics.push(q.topic);
  }
  return topics;
}

/**
 * Pick 3-5 novel ideas weighted toward topics the user answered.
 * Stable order for a given answer set.
 */
export function selectPolicyIdeasForAnswers(
  answers: Record<string, string>,
  questions: { id: string; topic: string }[],
  limit = 4
): SunrisePolicyIdea[] {
  const topics = new Set(topicsFromAnswers(answers, questions));
  if (topics.size === 0) {
    return sunrisePolicyIdeas.slice(0, limit);
  }

  const scored = sunrisePolicyIdeas.map((idea, index) => {
    const hits = idea.quizTopics.filter((t) => topics.has(t)).length;
    return { idea, hits, index };
  });

  scored.sort((a, b) => {
    if (b.hits !== a.hits) return b.hits - a.hits;
    return a.index - b.index;
  });

  const withHits = scored.filter((s) => s.hits > 0).map((s) => s.idea);
  if (withHits.length >= 3) {
    return withHits.slice(0, Math.min(limit, 5));
  }

  const filler = scored
    .filter((s) => s.hits === 0)
    .map((s) => s.idea)
    .slice(0, Math.max(0, 3 - withHits.length));
  return [...withHits, ...filler].slice(0, Math.min(limit, 5));
}
