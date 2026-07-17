/**
 * Political Standing Quiz: 28-35 definitive questions.
 * Axes: economic (-10 left to +10 right), social (-10 libertarian to +10 authoritarian).
 * Alignments: progressive | moderate_dem | independent | moderate_gop | maga
 * Novel end questions use sunriseAsk framing (Project Sunrise asks).
 * No em dashes in user-facing copy.
 */

import type { CitationSource } from "@/lib/types";
import { quizCite } from "@/lib/data/quiz-sources";

export type QuizCampId =
  | "progressive"
  | "moderate_dem"
  | "independent"
  | "moderate_gop"
  | "maga";

export type QuizScores = {
  economic: number;
  social: number;
};

export type QuizOption = {
  id: string;
  label: string;
  help: string;
  scores: QuizScores;
  alignments: Partial<Record<QuizCampId, number>>;
  /** True when this is the typical MAGA / hard-right stance for reality-check callouts */
  magaPreferred?: boolean;
};

export type QuizQuestion = {
  id: string;
  topic: string;
  prompt: string;
  help?: string;
  type: "choice" | "slider";
  options: QuizOption[];
  /** 1-2 verified primary sources for Learn more / citation modal */
  sources?: CitationSource[];
  /** Future-facing Project Sunrise policy idea framed as a clear vote choice */
  sunriseAsk?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  leftHelp?: string;
  rightHelp?: string;
};

export const QUIZ_CAMPS: {
  id: QuizCampId;
  label: string;
  short: string;
}[] = [
  { id: "progressive", label: "Progressive Democrats", short: "Progressive" },
  { id: "moderate_dem", label: "Moderate Democrats", short: "Mod. Dem" },
  { id: "independent", label: "Independents", short: "Independent" },
  { id: "moderate_gop", label: "Moderate Republicans", short: "Mod. GOP" },
  { id: "maga", label: "MAGA / hard-right", short: "MAGA" },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "economy-taxes",
    topic: "Economy / taxes",
    prompt: "Who should pay more in taxes when the country needs revenue?",
    help: "Fair taxes are not 'punishing success' or a stealth plan for full socialism. Closing loopholes and asking high earners to pay a fairer share is ordinary budgeting. Almost everyone wants roads, courts, and defense funded. The fight is who pays how much, not whether government exists.",
    type: "choice",
    sources: quizCite("treasury_tax", "census_income"),
    options: [
      {
        id: "raise-top",
        label: "Raise taxes on the highest earners and large corporations",
        help: "Higher top rates, closing loopholes, corporate minimums. Not 'soak the successful.' Workers already pay payroll taxes. This asks people with the most capacity to fund systems they also use: courts, roads, markets, defense.",
        scores: { economic: -7, social: -1 },
        alignments: { progressive: 10, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "broad-base",
        label: "Keep rates similar, broaden the tax base, cut waste first",
        help: "A centrist framing: fewer special breaks, more people and firms paying something, paired with spending cuts. 'Waste' is real but rarely large enough alone to fund major programs without touching rates or benefits.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 2, moderate_dem: 6, independent: 9, moderate_gop: 6, maga: 3 },
      },
      {
        id: "cut-taxes",
        label: "Cut taxes across the board, especially business taxes",
        help: "Assumes lower taxes grow the economy enough to offset lost revenue. Evidence is mixed; large cuts often raise deficits unless spending falls sharply. 'Job creators' is political marketing, not a fiscal law.",
        scores: { economic: 8, social: 1 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 8, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "healthcare",
    topic: "Healthcare",
    prompt: "What should the federal role in healthcare be?",
    help: "Every wealthy democracy has a system that keeps people from medical bankruptcy. The U.S. pays near-peer-top prices for middling coverage. The fight is which design and how much private industry remains, not whether care is a 'free gift.' Public insurance is risk pooling, the same idea as fire departments.",
    type: "choice",
    sources: quizCite("kff_health_costs", "kff_aca"),
    options: [
      {
        id: "public-guarantee",
        label: "Guarantee coverage for everyone through public programs",
        help: "Medicare for All, public option, or similar. Not 'free everything forever.' It means insurance as a right so illness does not wipe out savings. Private care can still exist alongside.",
        scores: { economic: -8, social: -2 },
        alignments: { progressive: 10, moderate_dem: 5, independent: 3, moderate_gop: 0, maga: 0 },
      },
      {
        id: "mixed-regulate",
        label: "Keep private insurance, expand subsidies and price rules",
        help: "ACA-style: markets stay, with subsidies and rules. That is not socialism, and America was never one vote away from becoming Venezuela. Social Security, Medicare, public schools, and fire departments are popular shared systems.",
        scores: { economic: -2, social: -1 },
        alignments: { progressive: 4, moderate_dem: 9, independent: 7, moderate_gop: 3, maga: 1 },
      },
      {
        id: "market-only",
        label: "Mostly private markets; government should stay out",
        help: "Treats healthcare like a normal consumer good. In practice, people without money skip care or face debt. 'Freedom' here often means freedom from shared risk pools.",
        scores: { economic: 8, social: 2 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "abortion",
    topic: "Abortion / reproductive rights",
    prompt: "Who should decide whether abortion is legal?",
    help: "'Pro-life' vs 'pro-choice' is a slogan trap. Rejecting forced-birth laws does not mean celebrating death or hating babies. Most abortions already happen early; late-term cases are rare medical crises, not a casual third-trimester free-for-all. After Dobbs, ZIP code decides rights. The real dispute is who holds legal power over a pregnancy.",
    type: "choice",
    sources: quizCite("guttmacher_abortion", "scotus_dobbs"),
    options: [
      {
        id: "person-decides",
        label: "The pregnant person, with doctors; keep it legal nationally",
        help: "Keeps the decision with the patient and doctor. Does not require celebrating abortion. Means the government does not force birth. Late-term cases are rare and almost always severe medical crises, not casual late choice.",
        scores: { economic: -1, social: -8 },
        alignments: { progressive: 10, moderate_dem: 8, independent: 5, moderate_gop: 1, maga: 0 },
      },
      {
        id: "state-limits",
        label: "States set limits; allow early access, restrict later",
        help: "A compromise many moderates prefer. Still makes ZIP code decide rights. After Roe ended, some states banned nearly all abortions; others protected access. Shared values (healthy kids, fewer crises) do not settle who holds the legal power.",
        scores: { economic: 0, social: 1 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 6, maga: 3 },
      },
      {
        id: "ban-most",
        label: "Ban most abortions; exceptions only for extreme cases",
        help: "Uses 'protect life' language while removing legal choice. Exceptions for rape, incest, or life of the mother are often narrow and hard to use when a clock is ticking. This is the core MAGA / post-Dobbs conservative stance.",
        scores: { economic: 1, social: 9 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 2, moderate_gop: 7, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "immigration",
    topic: "Immigration",
    prompt: "How should the U.S. handle immigration and the border?",
    help: "'Open borders' has never been U.S. policy. Stop buying that propaganda. Every administration has run ports of entry, visas, asylum courts, and deportations. DHS publishes the numbers. The real fight is how to fund and staff enforcement, clear asylum backlogs, and keep legal pathways working. Security, legality, and humanity can coexist.",
    type: "choice",
    sources: quizCite("dhs_immigration", "congress_gov"),
    options: [
      {
        id: "path-expand",
        label: "Expand legal pathways and due process; fix asylum backlogs",
        help: "More visas, faster courts, work permits while cases pending. That is not open borders. Open borders would mean no inspection at all, and that has never been the law. This is orderly entry so people are processed instead of funneled into chaos.",
        scores: { economic: -3, social: -6 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "balance",
        label: "Pair stronger enforcement with a path for long-term residents",
        help: "Classic bipartisan package: more agents and tech, plus legal status for long-term residents who have been working here. Neither pure base loves it. That stall is politics, not proof that 'open borders' was ever on the table.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 8, independent: 9, moderate_gop: 5, maga: 1 },
      },
      {
        id: "mass-deport",
        label: "Mass deportations and hard stops; prioritize deterrence",
        help: "Frames immigration as invasion. The country already inspects, detains, and deports. Deterrence-first policies often cost more, clog lawful asylum, and still leave labor shortages. The debate is how hard and how fair, not whether a border exists.",
        scores: { economic: 4, social: 8 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 2, moderate_gop: 6, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "guns",
    topic: "Guns",
    prompt: "What gun laws should the country have?",
    help: "'Gun grabber' vs '2A absolute' is a slogan trap. Nobody serious is confiscating every hunting rifle tomorrow. Background checks and red-flag laws are rules, not a raid on your safe. CDC and Pew data show the scale of U.S. gun deaths. Hunters, veterans, and parents can want both self-defense rights and fewer mass shootings.",
    type: "choice",
    sources: quizCite("cdc_firearms", "pew_guns"),
    options: [
      {
        id: "strong-rules",
        label: "Universal background checks, assault-weapon limits, red-flag laws",
        help: "Keeps most hunting and home-defense guns legal while tightening the deadliest categories and closing sale loopholes. Ads frame every rule as a total grab. That extreme has never been the live bill on the floor.",
        scores: { economic: -1, social: -5 },
        alignments: { progressive: 9, moderate_dem: 8, independent: 5, moderate_gop: 1, maga: 0 },
      },
      {
        id: "narrow-rules",
        label: "Background checks for new sales; leave most current rules alone",
        help: "Incremental. Polls well across parties, including many gun owners. Does less on private transfers and high-capacity weapons.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 6, independent: 8, moderate_gop: 5, maga: 2 },
      },
      {
        id: "loosen",
        label: "Fewer federal limits; more carry rights, less regulation",
        help: "'Shall issue' and national permit reciprocity. Treats gun deaths as mostly crime or mental health only. Access and lethality of firearms also matter in the data.",
        scores: { economic: 2, social: 6 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 8, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "climate",
    topic: "Climate",
    prompt: "How should the U.S. respond to climate change?",
    help: "Climate science is not a team sport. NASA and IPCC evidence show human-caused warming is measured fact. Disagreement can be about pace and tools. Denial that warming is real is a political product, not a scientific debate. Delay compounds insurance losses, crop risk, and security costs.",
    type: "choice",
    sources: quizCite("nasa_climate", "ipcc_climate"),
    options: [
      {
        id: "rapid-transition",
        label: "Rapid clean-energy transition with strong federal standards",
        help: "Carbon limits, clean power rules, public investment. Costs are front-loaded; delay costs compound. 'Green New Deal' branding is often used to scare people away from ordinary industrial policy.",
        scores: { economic: -6, social: -3 },
        alignments: { progressive: 10, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "all-of-above",
        label: "Mix of markets, nuclear, and gradual cuts; avoid shocks",
        help: "Pragmatic middle: price signals, R&D, nuclear, some regulation. Can work if targets are real. 'All of the above' sometimes becomes a slogan for delaying fossil phase-down.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 2, moderate_dem: 6, independent: 9, moderate_gop: 6, maga: 2 },
      },
      {
        id: "drill-priority",
        label: "Prioritize fossil production and roll back climate rules",
        help: "Treats climate policy as elite overreach. 'Energy dominance' marketing often ignores insurance losses, crop risk, and military assessments that treat climate as a threat multiplier.",
        scores: { economic: 7, social: 4 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 2, moderate_gop: 6, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "democracy",
    topic: "Democracy / rule of law",
    prompt: "If a president loses an election, what should happen?",
    help: "This is not about liking Democrats or Republicans. Peaceful transfer of power is the baseline of a republic. DOJ and election researchers treat fraud as rare and prosecutable case by case. Denying certified results without courtroom proof is how democracies break.",
    type: "choice",
    sources: quizCite("doj_election", "mit_election"),
    options: [
      {
        id: "accept-results",
        label: "Accept certified results; courts handle real disputes",
        help: "You can hate an outcome and still accept it. Lawsuits with evidence are fine. Pressure campaigns to overturn electors, fake electors, or 'stop the steal' without proof are not.",
        scores: { economic: 0, social: -7 },
        alignments: { progressive: 9, moderate_dem: 9, independent: 8, moderate_gop: 5, maga: 0 },
      },
      {
        id: "investigate-then",
        label: "Investigate claims thoroughly, then certify when done",
        help: "Sounds careful. In practice, endless 'investigation' after audits already finished can be a stall tactic. Time-limited, evidence-based reviews are legitimate; open-ended denial is not.",
        scores: { economic: 0, social: 2 },
        alignments: { progressive: 2, moderate_dem: 4, independent: 6, moderate_gop: 7, maga: 4 },
      },
      {
        id: "resist-steal",
        label: "Leaders should fight hard if they believe the vote was stolen",
        help: "This is the post-2020 MAGA posture: treat loss as theft, mobilize to block certification. Believing a conspiracy without courtroom proof does not create a right to overturn electors. That is authoritarian politics wearing patriotic clothes.",
        scores: { economic: 1, social: 9 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 3, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "labor",
    topic: "Labor / unions",
    prompt: "What should policy toward unions be?",
    help: "Unions are how workers bargain as a group. BLS data show a wage premium for union members and historically low private-sector density. Corporate messaging paints unions as corrupt by default; some unions have real problems, and so do many corporations.",
    type: "choice",
    sources: quizCite("bls_unions"),
    options: [
      {
        id: "strengthen",
        label: "Make it easier to form unions and bargain collectively",
        help: "Card check, faster elections, penalties for illegal firings. Raises wages and workplace power. Not a government takeover of business; it is private sector bargaining with clearer rules.",
        scores: { economic: -7, social: -2 },
        alignments: { progressive: 10, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 1 },
      },
      {
        id: "status-quo",
        label: "Keep current labor law; fix abuses case by case",
        help: "Neutral-sounding. Current law already tilts toward delay favoring employers in many sectors. 'Case by case' can mean little change.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 6, maga: 4 },
      },
      {
        id: "weaken",
        label: "Limit union power; right-to-work and freer employers",
        help: "'Right-to-work' means workers can skip dues while still covered by the contract. It weakens unions financially. Framed as freedom; in practice it shifts power to owners.",
        scores: { economic: 7, social: 3 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 8, maga: 8 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "education",
    topic: "Education",
    prompt: "Where should public education money go?",
    help: "'Woke' vs 'anti-woke' is a culture-war brand fight. No national curriculum is turning every classroom into a re-education camp overnight. Parents want good schools and a say in what kids learn. Opposing book bans is not 'indoctrinating kids.' The real fight is public dollars, private vouchers, and how far curriculum wars go.",
    type: "choice",
    sources: quizCite("nces_education"),
    options: [
      {
        id: "public-invest",
        label: "Invest in public schools; keep church-state lines clear",
        help: "Fund teachers, buildings, special ed. Opposes diverting taxes to private/religious schools at scale. Wanting honest history and fewer banned books is not a plot against parents. 'Parental rights' is sometimes a real ask, and sometimes a slogan used to scrub curriculum.",
        scores: { economic: -5, social: -4 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 4, moderate_gop: 2, maga: 0 },
      },
      {
        id: "choice-mix",
        label: "Public schools plus limited, accountable choice programs",
        help: "Charters or vouchers with testing and anti-discrimination rules. Mixed evidence on outcomes. Can help some families and drain others' districts.",
        scores: { economic: 2, social: 1 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 4 },
      },
      {
        id: "vouchers-culture",
        label: "Broad vouchers; parents control curriculum culture wars",
        help: "Moves public money to private schools and elevates fights over race, gender, and history. Marketed as freedom; often pairs with book bans and weaker oversight of private recipients.",
        scores: { economic: 6, social: 7 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 2, moderate_gop: 6, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "foreign-policy",
    topic: "Foreign policy",
    prompt: "How should the U.S. use military power abroad?",
    help: "'America First' vs 'globalist' is a branding fight. Supporting alliances and trade is not hating America. NATO is a treaty commitment, not a secret cabal. Veterans and workers can want strong partnerships without forever wars. The real choices are alliances, deterrence, diplomacy, and when force is justified.",
    type: "choice",
    sources: quizCite("nato_collective"),
    options: [
      {
        id: "alliances-diplomacy",
        label: "Strong alliances, diplomacy first, force as last resort",
        help: "NATO-style partnerships, aid, sanctions, and careful use of force. Not pacifism. Not 'forever wars' by default. Caring about allies is not selling out the country.",
        scores: { economic: -2, social: -3 },
        alignments: { progressive: 7, moderate_dem: 9, independent: 6, moderate_gop: 4, maga: 1 },
      },
      {
        id: "america-first-mix",
        label: "Narrower commitments; allies pay more; avoid new wars",
        help: "Burden-sharing and skepticism of nation-building. Can be prudent. Can also abandon partners and invite aggression if done as theater.",
        scores: { economic: 2, social: 2 },
        alignments: { progressive: 2, moderate_dem: 3, independent: 8, moderate_gop: 7, maga: 6 },
      },
      {
        id: "unilateral-force",
        label: "Unilateral tough talk and force when the president wants it",
        help: "Personalist foreign policy: tariffs as weapons, threats as strategy, loyalty over institutions. 'Peace through strength' can mean restraint or impulsive escalation depending on the leader.",
        scores: { economic: 3, social: 7 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 2, moderate_gop: 5, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "lgbtq",
    topic: "LGBTQ rights",
    prompt: "What civil rights should LGBTQ people have?",
    help: "Equal rights under law is not 'forcing ideology on kids' or 'woke indoctrination.' Churchgoers can keep their doctrine while the state and employers do not discriminate. Federal civil rights enforcement already covers many of these questions. The fight is civil rights and medical access, not whether parents love their children.",
    type: "choice",
    sources: quizCite("doj_civil_rights"),
    options: [
      {
        id: "full-equality",
        label: "Full equality: marriage, work, housing, healthcare nondiscrimination",
        help: "Same legal rights as everyone else. Does not require anyone's church to change doctrine. It stops the state and employers from discriminating.",
        scores: { economic: -1, social: -8 },
        alignments: { progressive: 10, moderate_dem: 8, independent: 5, moderate_gop: 2, maga: 0 },
      },
      {
        id: "live-and-let",
        label: "Live and let live privately; limit school and sports rules",
        help: "Tolerates adults, draws lines on youth sports and curriculum. Some lines are about fairness; some are culture-war wedge issues sold as the only way to 'protect kids.'",
        scores: { economic: 0, social: 1 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 6, maga: 3 },
      },
      {
        id: "roll-back",
        label: "Roll back recent LGBTQ protections; emphasize traditional norms",
        help: "Treats LGBTQ visibility as a threat. Often pairs with defining sex narrowly in law to erase protections. 'Protecting women and children' is the slogan; the policy is reducing rights.",
        scores: { economic: 1, social: 9 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 5, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "criminal-justice",
    topic: "Criminal justice",
    prompt: "How should the justice system balance safety and fairness?",
    help: "'Back the blue' vs 'defund' is a slogan trap. Cities never abolished police overnight, and wanting accountability is not a plot to leave streets empty. Mental health and prevention funding are public safety tools. Most people want safe streets and fair process. The fight is how you get both, not which team jersey you wear.",
    type: "choice",
    sources: quizCite("nimh_mh"),
    options: [
      {
        id: "reform-safety",
        label: "Reform sentencing and policing; fund prevention and mental health",
        help: "End cash-bail traps, reduce mandatory minimums for nonviolent crimes, add accountability for misconduct, and still investigate violent crime. Respect for good officers is not a blank check when someone abuses the badge.",
        scores: { economic: -3, social: -6 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "balanced-cj",
        label: "Fund police well; keep reforms that cut wrongful harm",
        help: "Hire and train officers, keep body cams and oversight, target violent crime. Middle path many mayors take. Not abolition, not 'anything goes.' That fake either/or is the slogan trap.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 7, independent: 9, moderate_gop: 6, maga: 3 },
      },
      {
        id: "tough-on-crime",
        label: "Longer sentences, fewer constraints on police, harsher deterrence",
        help: "Classic tough-on-crime. Can cut some crime short-term; also fills prisons, hits communities unevenly, and does little on root causes. 'Back the blue' language often blocks accountability along with support.",
        scores: { economic: 2, social: 8 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 7, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "wealth",
    topic: "Wealth inequality",
    prompt: "Is extreme wealth concentration a problem government should fix?",
    type: "slider",
    leftLabel: "Yes: tax and regulate concentrated wealth",
    rightLabel: "No: markets should decide winners",
    leftHelp:
      "Means wealth taxes, antitrust, or higher capital gains rates. Not 'everyone must be equal' and not hatred of hard work. It treats monopoly power and dynastic wealth as threats to democracy and opportunity.",
    rightHelp:
      "Means leave billionaires and mega-firms alone unless they break narrow laws. 'Merit' framing ignores inheritance, monopoly rents, and political influence money buys.",
    help: "Asking the ultra-rich to pay more is not 'punishing success.' Census and Treasury data show concentration at the top. Inequality shapes who owns media, funds campaigns, and sets wages.",
    sources: quizCite("census_income", "treasury_tax"),
    options: [
      {
        id: "wealth-0",
        label: "Strongly: tax and break up concentrated power",
        help: "Aggressive antitrust and wealth taxation.",
        scores: { economic: -9, social: -2 },
        alignments: { progressive: 10, moderate_dem: 5, independent: 2, moderate_gop: 0, maga: 0 },
      },
      {
        id: "wealth-1",
        label: "Mostly yes: higher taxes on the very rich",
        help: "Raise top rates and close loopholes without full wealth tax.",
        scores: { economic: -5, social: -1 },
        alignments: { progressive: 7, moderate_dem: 8, independent: 5, moderate_gop: 1, maga: 0 },
      },
      {
        id: "wealth-2",
        label: "Mixed: some rules, mostly growth",
        help: "Light antitrust, prefer growth over redistribution.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 9, moderate_gop: 6, maga: 3 },
      },
      {
        id: "wealth-3",
        label: "Mostly no: leave wealth alone",
        help: "Cut capital taxes; celebrate large fortunes.",
        scores: { economic: 6, social: 1 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 8, maga: 7 },
      },
      {
        id: "wealth-4",
        label: "Strongly no: celebrate billionaires; cut their taxes",
        help: "Maximum deference to capital. Core of donor-class conservatism and much MAGA economic messaging.",
        scores: { economic: 9, social: 2 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 6, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "ss-medicare",
    topic: "Social Security / Medicare",
    prompt: "What should happen to Social Security and Medicare?",
    help: "Social Security and Medicare are earned insurance most families rely on, not 'socialism' or handouts. Trustees reports show manageable fixes if Congress raises revenue. The smear pretends popular programs are a Venezuela plot that never matched U.S. reality. Privatization pitches often sound like modernization while shifting market risk onto retirees.",
    type: "choice",
    sources: quizCite("ssa_trustees", "kff_medicare"),
    options: [
      {
        id: "protect-expand",
        label: "Protect benefits; raise revenue from high earners if needed",
        help: "Lift the payroll tax cap, keep benefit levels. Older Americans across parties rely on these programs. Veterans, churchgoers, and independents all cash the checks. 'Entitlement reform' is often code for cuts.",
        scores: { economic: -6, social: -2 },
        alignments: { progressive: 9, moderate_dem: 8, independent: 6, moderate_gop: 3, maga: 2 },
      },
      {
        id: "tweak",
        label: "Modest tweaks: age, means-testing, or growth slowdowns",
        help: "Technocratic middle. Can stabilize math; can also quietly cut real benefits over time.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 4 },
      },
      {
        id: "privatize-cut",
        label: "Shift toward private accounts or deep benefit cuts",
        help: "Puts retirement on stock markets. Winners do fine in bull markets; crashes hit the vulnerable. Long a conservative goal; often sold as 'choice.'",
        scores: { economic: 8, social: 3 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 2, moderate_gop: 7, maga: 8 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "voting",
    topic: "Voting rights",
    prompt: "How easy should it be to vote?",
    help: "Election security matters. So does access. MIT Election Lab and Brennan Center research find fraud rates extremely low. Laws sold only as 'integrity' sometimes add hurdles that hit renters, students, and minority voters hardest while fixing rare fraud.",
    type: "choice",
    sources: quizCite("brennan_voting", "mit_election"),
    options: [
      {
        id: "expand-access",
        label: "Expand access: mail, early voting, automatic registration",
        help: "More ways to cast a legal ballot. Fraud rates in U.S. elections are extremely low. Access expansions are not the same as ignoring ID rules where they already exist.",
        scores: { economic: -1, social: -7 },
        alignments: { progressive: 10, moderate_dem: 8, independent: 5, moderate_gop: 1, maga: 0 },
      },
      {
        id: "balanced-vote",
        label: "Convenient voting with standard ID and audits",
        help: "Early voting plus ID that is free and easy to get, plus paper trails. Broadly popular when ID is not a trap.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 6, independent: 9, moderate_gop: 6, maga: 2 },
      },
      {
        id: "restrict-vote",
        label: "Tighten rules even if fewer people vote; prioritize 'integrity'",
        help: "Fewer drop boxes, shorter windows, aggressive purges. Marketed as stopping fraud that is rare. After 2020, this became a MAGA priority tied to stolen-election myths.",
        scores: { economic: 1, social: 8 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 2, moderate_gop: 6, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "church-state",
    topic: "Church and state",
    prompt: "How should government treat religion?",
    help: "'Religious freedom' vs 'anti-religion' is a false binary. Separating church and state is not banning faith or closing churches. That extreme was never the American settlement. Churchgoers keep the right to worship. The First Amendment also blocks one faith from writing civil law for everyone else.",
    type: "choice",
    sources: quizCite("congress_gov"),
    options: [
      {
        id: "strict-separation",
        label: "Strict separation: no official religion in public policy",
        help: "Schools and agencies stay secular; people keep private faith. Protects minorities, nonbelievers, and believers who do not want the state picking a church. Secular government is not hostility to religion.",
        scores: { economic: 0, social: -7 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 6, moderate_gop: 2, maga: 0 },
      },
      {
        id: "accommodate",
        label: "Accommodate faith in public life without establishing a church",
        help: "Chaplaincies, holiday displays with care, conscience exemptions that do not gut civil rights. A common American middle for many churchgoing independents.",
        scores: { economic: 0, social: 1 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 3 },
      },
      {
        id: "christian-nation",
        label: "Government should favor traditional Christian values in law",
        help: "Christian nationalist posture: use the state to enforce one moral code. Marketed as 'returning to God.' Conflicts with plural democracy and the First Amendment's no-establishment rule.",
        scores: { economic: 1, social: 9 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 5, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "corporate",
    topic: "Corporate power",
    prompt: "When big companies dominate markets, what should government do?",
    type: "slider",
    leftLabel: "Break up and regulate monopolies",
    rightLabel: "Leave corporations alone",
    leftHelp:
      "Antitrust, consumer protection, and limits on mergers. 'Free market' requires competition; monopoly is its opposite.",
    rightHelp:
      "Assume big firms won fairly and regulation mostly hurts innovation. Ignores how giants lobby to rewrite the rules in their favor.",
    help: "Corporate power is economic and political. FTC and DOJ antitrust cases exist because monopoly is not the same as free enterprise. Lobbying is not the same as free speech by ordinary people.",
    sources: quizCite("ftc_antitrust", "doj_antitrust"),
    options: [
      {
        id: "corp-0",
        label: "Aggressive antitrust and consumer rules",
        help: "Break up dominant platforms and banks when needed.",
        scores: { economic: -8, social: -2 },
        alignments: { progressive: 10, moderate_dem: 6, independent: 4, moderate_gop: 1, maga: 1 },
      },
      {
        id: "corp-1",
        label: "Stronger merger review and privacy rules",
        help: "Block bad mergers; regulate data and fees.",
        scores: { economic: -4, social: -1 },
        alignments: { progressive: 7, moderate_dem: 8, independent: 6, moderate_gop: 2, maga: 2 },
      },
      {
        id: "corp-2",
        label: "Case-by-case; prefer light touch",
        help: "Occasional fines, mostly status quo.",
        scores: { economic: 2, social: 0 },
        alignments: { progressive: 2, moderate_dem: 4, independent: 8, moderate_gop: 6, maga: 4 },
      },
      {
        id: "corp-3",
        label: "Mostly deregulate; trust big business",
        help: "Cut rules; celebrate national champions.",
        scores: { economic: 6, social: 2 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 8, maga: 6 },
      },
      {
        id: "corp-4",
        label: "Champion friendly tycoons; punish 'woke' firms only",
        help: "Selective: attack companies for culture reasons while protecting loyal donors. That is patronage, not free enterprise.",
        scores: { economic: 5, social: 7 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 4, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "military",
    topic: "Military spending",
    prompt: "Should the U.S. keep growing the defense budget?",
    help: "A strong military and blank-check spending are different. Waste, contractor markup, and forever-war inertia are real; so are deterrence needs. CBO and Congress score these tradeoffs every year. Patriotism is not measured by the size of a contractor invoice.",
    type: "choice",
    sources: quizCite("cbo_home", "nato_collective"),
    options: [
      {
        id: "cut-waste-diplomacy",
        label: "Audit waste, fund diplomacy, keep core readiness",
        help: "Not disarmament. Shift some dollars from bloated procurement to State Department and domestic needs while maintaining alliances.",
        scores: { economic: -4, social: -3 },
        alignments: { progressive: 8, moderate_dem: 6, independent: 5, moderate_gop: 2, maga: 1 },
      },
      {
        id: "steady-defense",
        label: "Steady increases tied to threats and audits",
        help: "Match peers and risks, demand cleaner books. Moderate consensus in many years.",
        scores: { economic: 2, social: 1 },
        alignments: { progressive: 2, moderate_dem: 6, independent: 8, moderate_gop: 7, maga: 5 },
      },
      {
        id: "max-defense",
        label: "Maximize spending; treat any cut as weakness",
        help: "Equates budget size with patriotism. Contractors love it. Does not automatically mean smarter strategy.",
        scores: { economic: 5, social: 6 },
        alignments: { progressive: 0, moderate_dem: 2, independent: 3, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "housing",
    topic: "Housing",
    prompt: "Why is housing so expensive, and what should government do?",
    help: "Supply, zoning, speculation, and wages all matter. HUD and market reports show rent burden and underbuilding. Blaming only 'greedy renters' or only 'greedy landlords' is incomplete. Scarcity is often a policy choice written into zoning codes.",
    type: "choice",
    sources: quizCite("hud_housing", "huduser"),
    options: [
      {
        id: "build-protect",
        label: "Build more housing and protect tenants from predatory practices",
        help: "Upzone near transit, fund affordable units, limit extreme rent gouging and no-cause eviction where needed. Not a Soviet housing bureau.",
        scores: { economic: -5, social: -3 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 5, moderate_gop: 2, maga: 0 },
      },
      {
        id: "supply-only",
        label: "Mostly deregulate zoning so private builders add supply",
        help: "YIMBY-leaning: more units lower prices over time. Skips tenant protections some markets still need.",
        scores: { economic: 3, social: -1 },
        alignments: { progressive: 3, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 3 },
      },
      {
        id: "market-hands-off",
        label: "Hands off: prices are the market working",
        help: "Treats homelessness and rent burden as personal failure. Ignores zoning scarcity and investor concentration that politics created.",
        scores: { economic: 7, social: 3 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 7, maga: 8 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "media-speech",
    topic: "Media / free speech",
    prompt: "How should we handle free speech, platforms, and 'fake news'?",
    help: "The First Amendment blocks government censorship of speech. Private platforms already moderate. 'Free speech' is sometimes used to demand amplification of lies, and 'misinformation' is sometimes used to dodge accountability for elites. Both can be abused. A republic needs speech rights and shared facts.",
    type: "choice",
    sources: quizCite("congress_gov"),
    options: [
      {
        id: "truth-norms",
        label: "Protect speech; platforms may label lies; fund public media literacy",
        help: "No government Ministry of Truth. Still allows private moderation, transparency rules, and education. Distinguishes speech rights from a right to go viral without pushback.",
        scores: { economic: -1, social: -5 },
        alignments: { progressive: 8, moderate_dem: 8, independent: 6, moderate_gop: 2, maga: 0 },
      },
      {
        id: "neutral-platforms",
        label: "Push platforms toward viewpoint neutrality; limit government pressure",
        help: "Worries about jawboning (government leaning on companies). Valid rule-of-law concern. Hard to enforce without new law; easy to weaponize as a grievance.",
        scores: { economic: 1, social: 1 },
        alignments: { progressive: 2, moderate_dem: 4, independent: 8, moderate_gop: 7, maga: 5 },
      },
      {
        id: "punish-critics",
        label: "Punish 'enemy' media and protect friendly outlets",
        help: "Hard-right MAGA posture: sue, threaten licenses, call press the enemy. That is not free speech absolutism. It is using state and legal power to chill critics.",
        scores: { economic: 2, social: 8 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 3, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "childcare",
    topic: "Education",
    prompt: "How should the country treat childcare for working families?",
    help: "Childcare costs rival rent in many cities. Treating care as a private luxury while expecting full-time work is a policy choice. Peer countries fund slots and staff wages; the U.S. mostly leaves families to a patchwork market.",
    type: "choice",
    sources: quizCite("childcare_gov", "acf_occ"),
    options: [
      {
        id: "care-public",
        label: "Fund childcare like public infrastructure with sliding fees",
        help: "Public slots, living wages for caregivers, sliding fees. Raises labor force participation and school readiness. Not a nanny state; it is how other rich countries treat care.",
        scores: { economic: -7, social: -3 },
        alignments: { progressive: 10, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "care-tax-credit",
        label: "Expand tax credits and private market slots; light regulation",
        help: "Helps some families buy care without building public supply. Can leave deserts and low wages for caregivers intact.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 3, moderate_dem: 7, independent: 8, moderate_gop: 6, maga: 3 },
      },
      {
        id: "care-family",
        label: "Keep it private; families and churches should handle care",
        help: "Frames public childcare as government overreach. Leaves working parents, especially women, with impossible math when wages do not cover care.",
        scores: { economic: 6, social: 5 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "student-debt",
    topic: "Education",
    prompt: "What should happen with student loan debt and college costs?",
    help: "College costs rose for decades while wages for typical workers did not. Existing forgiveness pathways already exist in statute. The fight is how much public higher ed should cost going forward, not whether adults should 'learn responsibility' by drowning in interest.",
    type: "choice",
    sources: quizCite("studentaid", "cbo_home"),
    options: [
      {
        id: "debt-relief-public",
        label: "Broad relief plus free or cheap public college going forward",
        help: "Cancel chunks of debt and reprice public tuition. Treats higher ed like infrastructure. Opponents call it unfair to people who already paid; supporters note interest and price inflation were policy-made.",
        scores: { economic: -8, social: -3 },
        alignments: { progressive: 10, moderate_dem: 6, independent: 3, moderate_gop: 0, maga: 0 },
      },
      {
        id: "debt-targeted",
        label: "Targeted relief, better repayment, and cost controls at colleges",
        help: "Help the most burdened borrowers, fix IDR programs, push schools on price. Middle path that avoids full free college.",
        scores: { economic: -2, social: -1 },
        alignments: { progressive: 4, moderate_dem: 8, independent: 8, moderate_gop: 4, maga: 2 },
      },
      {
        id: "debt-no-bailout",
        label: "No bailouts; borrowers should repay what they signed",
        help: "Frames all relief as unfair redistribution. Ignores how federal loan design and college pricing pushed people into debt traps sold as opportunity.",
        scores: { economic: 7, social: 3 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 8, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "trade-tariffs",
    topic: "Economy / taxes",
    prompt: "How should the U.S. use tariffs and trade policy?",
    help: "Tariffs are taxes on imports paid largely by domestic buyers and firms. They can protect strategic industries or become a loyalty theater that raises prices. Workers need industrial strategy; they also need groceries and parts that do not spike overnight.",
    type: "choice",
    sources: quizCite("treasury_tax", "cbo_home"),
    options: [
      {
        id: "trade-targeted",
        label: "Targeted tariffs plus industrial policy for key sectors",
        help: "Use tariffs surgically with chip, clean energy, and critical mineral strategy. Not a wall around every product. Pairs with worker and community transition funds.",
        scores: { economic: -3, social: -1 },
        alignments: { progressive: 7, moderate_dem: 8, independent: 5, moderate_gop: 3, maga: 2 },
      },
      {
        id: "trade-open",
        label: "Mostly open trade with allies; fix dumping case by case",
        help: "Classic market openness with WTO-style remedies. Risks ignoring China-scale industrial policy if enforcement is weak.",
        scores: { economic: 3, social: -1 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 2 },
      },
      {
        id: "trade-blanket",
        label: "Broad tariffs as a default tool; prioritize confrontation",
        help: "Treats tariffs as the main economic weapon. Can spike consumer prices and invite retaliation while claiming to 'bring jobs home' without a rebuild plan.",
        scores: { economic: 4, social: 6 },
        alignments: { progressive: 1, moderate_dem: 1, independent: 3, moderate_gop: 5, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "tech-ai",
    topic: "Corporate power",
    prompt: "How should government regulate AI and big tech platforms?",
    help: "AI and platforms already shape jobs, news, and privacy. NIST and antitrust agencies treat safety and competition as governance problems. 'Innovation' is not a blank check to skip liability, and 'ban everything' is not a serious industrial strategy.",
    type: "choice",
    sources: quizCite("nist_ai", "ftc_antitrust"),
    options: [
      {
        id: "ai-rules",
        label: "Strong safety, transparency, and antitrust rules on AI and platforms",
        help: "Audit requirements, liability for harms, merger limits, and worker protections. Lets innovation continue inside guardrails instead of praying the market self-polices.",
        scores: { economic: -5, social: -2 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 5, moderate_gop: 2, maga: 1 },
      },
      {
        id: "ai-light",
        label: "Light-touch rules; focus on fraud and child safety only",
        help: "Narrow consumer protection without broad model mandates. Faster for industry; weaker on systemic risk and monopoly.",
        scores: { economic: 2, social: 0 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 4 },
      },
      {
        id: "ai-hands-off",
        label: "Hands off; punish 'woke' AI bias only",
        help: "Selective culture-war regulation: attack content moderation you dislike while protecting friendly platforms. Not a coherent safety or competition policy.",
        scores: { economic: 5, social: 7 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 2, moderate_gop: 4, maga: 10 },
        magaPreferred: true,
      },
    ],
  },

  // --- Project Sunrise asks (novel / future-facing) ---
  {
    id: "sunrise-mobile-voting",
    topic: "Voting rights",
    prompt: "Project Sunrise asks: should the U.S. offer mobile or online voting with a paper audit trail?",
    help: "Banks already move money with multi-factor auth. Estonia runs remote voting with digital ID and audit logs. Paper or risk-limiting audits keep a checkable trail. This is not 'hackable chaos by default'; it is treating democracy with the same seriousness as a wire transfer, with in-person and mail fallbacks.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("estonia_egov", "brennan_avr"),
    options: [
      {
        id: "mv-yes-audit",
        label: "Yes: secure remote voting plus voter-verifiable paper audits",
        help: "Digital cast with strong ID, then a paper or cryptographic audit trail. Cuts wait times for shift workers and disabled voters. Requires fallback channels and coercion safeguards like absentee ballots already use.",
        scores: { economic: -2, social: -6 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 5, moderate_gop: 2, maga: 0 },
      },
      {
        id: "mv-pilot",
        label: "Pilot carefully for overseas and disabled voters first",
        help: "Expand from military/overseas and accessibility programs before general rollout. Cautious middle that still rejects 'phones can never vote' fatalism.",
        scores: { economic: 0, social: -2 },
        alignments: { progressive: 5, moderate_dem: 8, independent: 8, moderate_gop: 5, maga: 2 },
      },
      {
        id: "mv-no",
        label: "No: keep voting in person or mail only",
        help: "Treats digital channels as inherently illegitimate. Can be sincere risk aversion or a way to freeze turnout patterns. Ignores that mail and machines already use tech with audits.",
        scores: { economic: 1, social: 6 },
        alignments: { progressive: 1, moderate_dem: 2, independent: 4, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-carbon-dividend",
    topic: "Climate",
    prompt: "Project Sunrise asks: should the U.S. put a rising fee on carbon and rebate most of it to households?",
    help: "A carbon fee at the mine, well, or border makes dirty energy more expensive. A per-person dividend means most middle-class households can come out ahead. Canada and other peers already run versions of fee-and-rebate. It is a price signal, not a ban on cars.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("rff_carbon", "epa_climate"),
    options: [
      {
        id: "cfd-yes",
        label: "Yes: carbon fee and dividend with a border adjustment",
        help: "Rising fee, household rebate, border carbon adjustment so imports face the same price. Simple across the economy. Needs job transition funds for fossil regions.",
        scores: { economic: -5, social: -3 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 5, moderate_gop: 2, maga: 0 },
      },
      {
        id: "cfd-mix",
        label: "Prefer standards and clean investment; maybe a modest price later",
        help: "IRA-style industrial policy first. Open to a carbon price if politics allow. Can work; can also stall the price forever.",
        scores: { economic: -1, social: -1 },
        alignments: { progressive: 4, moderate_dem: 8, independent: 8, moderate_gop: 4, maga: 1 },
      },
      {
        id: "cfd-no",
        label: "No: carbon pricing is a tax that kills jobs",
        help: "Frames any pollution price as elite punishment. Ignores dividends that return money and the job losses from climate damages and insurance shocks.",
        scores: { economic: 7, social: 4 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 2, moderate_gop: 6, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-rcv",
    topic: "Democracy / rule of law",
    prompt: "Project Sunrise asks: should more U.S. elections use ranked choice voting?",
    help: "Ranked choice lets you rank candidates so spoilers hurt less and winners need broader coalitions. Maine, Alaska, and many cities already use it. NCSL and FairVote document the mechanics. It is ballot design, not a secret plot to erase your party.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("ncsl_rcv", "fairvote"),
    options: [
      {
        id: "rcv-yes",
        label: "Yes: expand ranked choice for federal and statewide races",
        help: "Rank candidates; redistribute until someone clears a threshold. Reduces spoiler panic and rewards coalition-building. Needs voter education and solid software.",
        scores: { economic: -1, social: -5 },
        alignments: { progressive: 8, moderate_dem: 7, independent: 7, moderate_gop: 3, maga: 1 },
      },
      {
        id: "rcv-local",
        label: "Allow states and cities to choose; do not mandate nationally",
        help: "Federalism middle. Lets laboratories of democracy run RCV without a national requirement.",
        scores: { economic: 0, social: -1 },
        alignments: { progressive: 4, moderate_dem: 6, independent: 9, moderate_gop: 6, maga: 3 },
      },
      {
        id: "rcv-no",
        label: "No: stick to plurality winners; RCV is confusing theater",
        help: "Defends first-past-the-post. Sometimes sincere; sometimes protects safe seats that benefit from spoiler math and primary extremism.",
        scores: { economic: 1, social: 5 },
        alignments: { progressive: 1, moderate_dem: 2, independent: 3, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-broadband",
    topic: "Corporate power",
    prompt: "Project Sunrise asks: should cities and co-ops be free to build public-option broadband?",
    help: "FCC maps still show rural and low-income gaps. Chattanooga and Nordic municipal nets treat fiber like water. State preemption laws often block cities from competing with cable monopolies. Public broadband is infrastructure, not 'socialism of the internet.'",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("fcc_broadband"),
    options: [
      {
        id: "bb-public",
        label: "Yes: municipal fiber and a public broadband option",
        help: "Let cities and co-ops build open-access fiber. Competition disciplines private prices. Needs good procurement so capex is not wasted.",
        scores: { economic: -6, social: -2 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 5, moderate_gop: 2, maga: 1 },
      },
      {
        id: "bb-subsidy",
        label: "Subsidize private builds; keep cities out of the ISP business",
        help: "BEAD-style grants to private ISPs without a public option. Can close gaps; can also pad monopolies.",
        scores: { economic: 2, social: 0 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 4 },
      },
      {
        id: "bb-market",
        label: "Leave broadband to private markets; kill public projects",
        help: "Treats municipal fiber as unfair competition. Leaves bank deserts of the internet intact where duopolies underinvest.",
        scores: { economic: 7, social: 3 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-all-payer",
    topic: "Healthcare",
    prompt: "Project Sunrise asks: should hospitals face all-payer rate setting so the same MRI does not cost five prices?",
    help: "U.S. hospital prices vary wildly by insurer logo. Maryland's Health Services Cost Review Commission already sets hospital rates across payers. KFF tracks how U.S. prices dwarf peers. Rate setting attacks the chargemaster without requiring an overnight insurer switch.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("md_hscrc", "kff_health_costs"),
    options: [
      {
        id: "ap-yes",
        label: "Yes: all-payer rates or strong reference pricing nationwide",
        help: "Same negotiated or regulated price across insurers for hospital services. Cuts surprise bills and monopoly hospital markups. Needs rural adjustments.",
        scores: { economic: -7, social: -2 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "ap-state",
        label: "Let states experiment; expand what works",
        help: "Maryland-style labs first. Federal floor later if evidence holds. Slower, politically easier.",
        scores: { economic: -2, social: -1 },
        alignments: { progressive: 5, moderate_dem: 8, independent: 8, moderate_gop: 4, maga: 2 },
      },
      {
        id: "ap-no",
        label: "No: prices should be whatever markets negotiate",
        help: "Defends opaque chargemasters and insurer-by-insurer chaos. 'Market' here often means monopoly hospitals vs confused patients.",
        scores: { economic: 7, social: 2 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 3, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-social-housing",
    topic: "Housing",
    prompt: "Project Sunrise asks: should the U.S. build social housing at scale while legalizing denser homes near jobs?",
    help: "Vienna-style social housing and zoning reform are complementary: public or nonprofit stewardship plus legal duplexes and mid-rises. Urban Institute and HUD research show scarcity is engineered. This is not 'everyone in a Soviet block'; it is teachers and nurses able to live near work.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("urban_housing", "hud_housing"),
    options: [
      {
        id: "sh-yes",
        label: "Yes: social housing plus zoning reform near transit",
        help: "Build permanently affordable public/nonprofit units and legalize denser private supply. Stabilizes rents without only chasing scarcity with vouchers.",
        scores: { economic: -7, social: -3 },
        alignments: { progressive: 10, moderate_dem: 6, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "sh-yimby",
        label: "Mostly zoning reform and private supply; limited public builds",
        help: "YIMBY-first. Faster politically in some cities; weaker on permanent affordability without public stewardship.",
        scores: { economic: 1, social: -2 },
        alignments: { progressive: 4, moderate_dem: 7, independent: 8, moderate_gop: 5, maga: 2 },
      },
      {
        id: "sh-no",
        label: "No: housing is a private market; cut 'handouts'",
        help: "Treats rent burden as personal failure. Ignores zoning scarcity and investor concentration that politics created.",
        scores: { economic: 7, social: 4 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 2, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-postal-banking",
    topic: "Wealth inequality",
    prompt: "Project Sunrise asks: should the Postal Service offer basic banking and should payday traps be banned?",
    help: "FDIC and Fed surveys show millions of unbanked or underbanked households. Post offices already sit in bank deserts. Postal banking is an old American idea. Pairing it with payday caps stops legalized debt traps without pretending charity will fix usury.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("fdic_household", "fed_shed", "gao_postal"),
    options: [
      {
        id: "pb-yes",
        label: "Yes: postal banking plus a national payday interest cap",
        help: "Basic checking, bill pay, and small-dollar credit at post offices; ban triple-digit payday products. Uses existing retail footprint.",
        scores: { economic: -7, social: -2 },
        alignments: { progressive: 10, moderate_dem: 6, independent: 4, moderate_gop: 1, maga: 1 },
      },
      {
        id: "pb-credit-unions",
        label: "Expand credit unions and CDFIs; keep USPS out of banking",
        help: "Strengthen community lenders without a postal bank. Helps some deserts; does not match USPS geographic coverage.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 7, independent: 8, moderate_gop: 6, maga: 3 },
      },
      {
        id: "pb-no",
        label: "No: leave banking to private banks and payday markets",
        help: "Frames public banking as socialism and payday as 'choice.' Leaves fee extraction intact where banks will not locate.",
        scores: { economic: 7, social: 3 },
        alignments: { progressive: 0, moderate_dem: 1, independent: 2, moderate_gop: 7, maga: 9 },
        magaPreferred: true,
      },
    ],
  },
  {
    id: "sunrise-digital-id",
    topic: "Democracy / rule of law",
    prompt: "Project Sunrise asks: should the U.S. offer a voluntary digital ID with strict civil-liberties guardrails?",
    help: "Estonia-style digital ID unlocks benefits, banking, and optional voting credentials. Guardrails matter: open standards, audit logs, no speech-tracking database, optional paper alternatives. Done wrong it is surveillance. Done right it is infrastructure for a modern republic.",
    type: "choice",
    sunriseAsk: true,
    sources: quizCite("estonia_egov", "nist_ai"),
    options: [
      {
        id: "did-yes",
        label: "Yes: voluntary digital ID with privacy and audit mandates",
        help: "Opt-in credential for benefits and optional election use, with open source audits and bans on speech surveillance reuse. Paper fallbacks required.",
        scores: { economic: -2, social: -4 },
        alignments: { progressive: 7, moderate_dem: 7, independent: 6, moderate_gop: 3, maga: 1 },
      },
      {
        id: "did-state",
        label: "State mobile licenses only; no national digital ID",
        help: "Keep identity at the state mDL / Login.gov level. Avoids federal database fears; keeps fragmentation.",
        scores: { economic: 1, social: 0 },
        alignments: { progressive: 3, moderate_dem: 5, independent: 8, moderate_gop: 7, maga: 4 },
      },
      {
        id: "did-no",
        label: "No: digital ID is a surveillance trap",
        help: "Rejects digital credentials altogether. Can protect against mission creep; also freezes accessibility and remote service upgrades.",
        scores: { economic: 2, social: 5 },
        alignments: { progressive: 2, moderate_dem: 2, independent: 4, moderate_gop: 6, maga: 8 },
        magaPreferred: true,
      },
    ],
  },
];

export const QUIZ_QUESTION_COUNT = quizQuestions.length;

export const QUIZ_SUNRISE_ASK_COUNT = quizQuestions.filter((q) => q.sunriseAsk).length;
