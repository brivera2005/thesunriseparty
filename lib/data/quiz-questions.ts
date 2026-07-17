/**
 * Political Standing Quiz: ~20 concise questions.
 * Axes: economic (-10 left to +10 right), social (-10 libertarian to +10 authoritarian).
 * Alignments: progressive | moderate_dem | independent | moderate_gop | maga
 * No em dashes in user-facing copy.
 */

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
  /** True when this is the typical MAGA / Trump-aligned stance for reality-check callouts */
  magaPreferred?: boolean;
};

export type QuizQuestion = {
  id: string;
  topic: string;
  prompt: string;
  help?: string;
  type: "choice" | "slider";
  options: QuizOption[];
  /** Slider only: labels for poles (options still hold scores) */
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
  { id: "maga", label: "MAGA / Trump", short: "MAGA" },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "economy-taxes",
    topic: "Economy / taxes",
    prompt: "Who should pay more in taxes when the country needs revenue?",
    help: "This is about who bears the cost of public services, not about whether taxes exist at all.",
    type: "choice",
    options: [
      {
        id: "raise-top",
        label: "Raise taxes on the highest earners and large corporations",
        help: "Means higher top rates, closing loopholes, and corporate minimums. It does not mean 'punishing success.' It means asking people with the most capacity to fund shared systems they also use (courts, roads, markets, defense).",
        scores: { economic: -7, social: -1 },
        alignments: { progressive: 10, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "broad-base",
        label: "Keep rates similar, broaden the tax base, cut waste first",
        help: "A centrist framing: fewer special breaks, more people and firms paying something, paired with spending cuts. 'Waste' is real but rarely large enough alone to fund major programs.",
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
    help: "Every wealthy democracy has a system that keeps people from medical bankruptcy. The fight is over which design and how much private industry remains.",
    type: "choice",
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
        help: "ACA-style: markets stay, but with mandates, subsidies, and regulation. Admits markets alone leave gaps. Not 'socialism,' and not a free-for-all either.",
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
    help: "'Pro-life' framing does not mean opponents are 'pro-death.' Almost everyone values life. The policy fight is over bodily autonomy, fetal viability rules, and whether the state can force a pregnancy to continue.",
    type: "choice",
    options: [
      {
        id: "person-decides",
        label: "The pregnant person, with doctors; keep it legal nationally",
        help: "Treats abortion as healthcare. Does not require celebrating abortion. Means the government does not compel birth. Late-term procedures are rare and almost always about severe medical crises.",
        scores: { economic: -1, social: -8 },
        alignments: { progressive: 10, moderate_dem: 8, independent: 5, moderate_gop: 1, maga: 0 },
      },
      {
        id: "state-limits",
        label: "States set limits; allow early access, restrict later",
        help: "A compromise many moderates prefer. Still forces geography to decide rights. After Roe ended, some states banned nearly all abortions; others protected access.",
        scores: { economic: 0, social: 1 },
        alignments: { progressive: 2, moderate_dem: 5, independent: 8, moderate_gop: 6, maga: 3 },
      },
      {
        id: "ban-most",
        label: "Ban most abortions; exceptions only for extreme cases",
        help: "Uses 'protect life' language while removing the woman's legal choice. Exceptions (rape, incest, life of the mother) are often narrow and hard to use in practice. This is the core MAGA / post-Dobbs conservative stance.",
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
    help: "Border security and humane process are not opposites. Rhetoric that treats all migrants as invaders is political theater; so is pretending enforcement never matters.",
    type: "choice",
    options: [
      {
        id: "path-expand",
        label: "Expand legal pathways and due process; fix asylum backlogs",
        help: "More visas, faster courts, work permits while cases pending. Not 'open borders.' Open borders would mean no inspection. This means orderly entry so people are not funneled into chaos.",
        scores: { economic: -3, social: -6 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "balance",
        label: "Pair stronger enforcement with a path for long-term residents",
        help: "Classic bipartisan package: more agents and tech, plus legal status for people who have been here working for years. Neither side's pure base loves it, which is why it stalls.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 8, independent: 9, moderate_gop: 5, maga: 1 },
      },
      {
        id: "mass-deport",
        label: "Mass deportations and hard stops; prioritize deterrence",
        help: "Frames immigration as invasion. Deterrence-first policies (family separation, camps, blanket bans) often cost more, slow asylum lawfully, and still leave labor shortages. 'Law and order' language here is used to sell maximal removal.",
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
    help: "The Second Amendment exists. So do mass shootings. The question is which rules reduce harm without pretending either 'ban all guns' or 'no rules ever' is the only option.",
    type: "choice",
    options: [
      {
        id: "strong-rules",
        label: "Universal background checks, assault-weapon limits, red-flag laws",
        help: "Keeps most hunting and home defense guns legal while tightening the deadliest categories and closing sale loopholes. Not a total confiscation plan, despite how ads often frame it.",
        scores: { economic: -1, social: -5 },
        alignments: { progressive: 9, moderate_dem: 8, independent: 5, moderate_gop: 1, maga: 0 },
      },
      {
        id: "narrow-rules",
        label: "Background checks for new sales; leave most current rules alone",
        help: "Incremental. Polls well across parties. Does less on existing private transfers and high-capacity weapons.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 6, independent: 8, moderate_gop: 5, maga: 2 },
      },
      {
        id: "loosen",
        label: "Fewer federal limits; more carry rights, less regulation",
        help: "'Shall issue' and national permit reciprocity. Treats gun deaths as mostly a crime or mental-health problem only. Evidence shows access and lethality of firearms also matter.",
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
    help: "Climate science is not a team sport. Disagreement can be about pace and tools. Denial that human-caused warming is real is a political product, not a scientific debate.",
    type: "choice",
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
    help: "This is not about liking Democrats or Republicans. Peaceful transfer of power is the baseline of a republic. Denying certified results without evidence is how democracies break.",
    type: "choice",
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
        help: "This is the 2020 Trump posture: treat loss as theft, mobilize to block certification. Believing a conspiracy without courtroom proof does not create a right to overturn electors. That is authoritarian politics wearing patriotic clothes.",
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
    help: "Unions are how workers bargain as a group. Corporate messaging paints them as corrupt by default; some unions have real problems, and so do many corporations.",
    type: "choice",
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
    help: "Parents want good schools. The fight is whether public dollars follow kids into private systems, and what curriculum fights are really about.",
    type: "choice",
    options: [
      {
        id: "public-invest",
        label: "Invest in public schools; keep church-state lines clear",
        help: "Fund teachers, buildings, special ed. Opposes diverting taxes to private/religious schools at scale. 'Parental rights' is often used to ban books and scrub history, not just to know what's taught.",
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
    help: "Isolationism and endless war are both brands. The real choices are alliances, deterrence, diplomacy, and when force is justified.",
    type: "choice",
    options: [
      {
        id: "alliances-diplomacy",
        label: "Strong alliances, diplomacy first, force as last resort",
        help: "NATO-style partnerships, aid, sanctions, and careful use of force. Not pacifism. Not 'forever wars' by default either.",
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
    help: "Equal protection under law is not 'forcing ideology on kids.' Bans on gender-affirming care and classroom mentions are policy choices marketed as parental protection.",
    type: "choice",
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
        help: "Tolerates adults, draws lines on youth sports and curriculum. Some lines are about fairness; some are culture-war wedge issues.",
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
    help: "'Defund the police' was a slogan that scared voters. So was 'law and order' as cover for unequal enforcement. Most people want safe streets and fair process.",
    type: "choice",
    options: [
      {
        id: "reform-safety",
        label: "Reform sentencing and policing; fund prevention and mental health",
        help: "End cash-bail traps, reduce mandatory minimums for nonviolent crimes, add accountability for misconduct, and still investigate violent crime. Not abolition of police.",
        scores: { economic: -3, social: -6 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 4, moderate_gop: 1, maga: 0 },
      },
      {
        id: "balanced-cj",
        label: "Fund police well; keep reforms that cut wrongful harm",
        help: "Hire and train officers, keep body cams and oversight, target violent crime. Middle path many mayors take.",
        scores: { economic: 0, social: 0 },
        alignments: { progressive: 3, moderate_dem: 7, independent: 9, moderate_gop: 6, maga: 3 },
      },
      {
        id: "tough-on-crime",
        label: "Longer sentences, fewer constraints on police, harsher deterrence",
        help: "Classic tough-on-crime. Can reduce some crime short-term; also fills prisons, hits communities unevenly, and does little on root causes. 'Back the blue' language often blocks accountability.",
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
      "Means wealth taxes, antitrust, or higher capital gains rates. Not 'everyone must be equal.' It treats monopoly power and dynastic wealth as threats to democracy and opportunity.",
    rightHelp:
      "Means leave billionaires and mega-firms alone unless they break narrow laws. 'Merit' framing ignores inheritance, monopoly rents, and political influence money buys.",
    help: "Inequality is not only envy. It shapes who owns media, funds campaigns, and sets wages.",
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
    help: "These are earned social insurance programs, not 'handouts.' Privatization pitches often sound like modernization while shifting market risk onto retirees.",
    type: "choice",
    options: [
      {
        id: "protect-expand",
        label: "Protect benefits; raise revenue from high earners if needed",
        help: "Lift the payroll tax cap, keep benefit levels. Older Americans across parties rely on these programs. 'Entitlement reform' is often code for cuts.",
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
    help: "Election security matters. So does access. Laws sold only as 'integrity' sometimes add hurdles that hit renters, students, and minority voters hardest while fixing rare fraud.",
    type: "choice",
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
    help: "Religious freedom means you can worship (or not) without the state picking a church. It does not mean one faith gets to write civil law for everyone.",
    type: "choice",
    options: [
      {
        id: "strict-separation",
        label: "Strict separation: no official religion in public policy",
        help: "Schools and agencies stay secular; people keep private faith. Protects minorities and nonbelievers. Not hostility to religion.",
        scores: { economic: 0, social: -7 },
        alignments: { progressive: 9, moderate_dem: 7, independent: 6, moderate_gop: 2, maga: 0 },
      },
      {
        id: "accommodate",
        label: "Accommodate faith in public life without establishing a church",
        help: "Chaplaincies, holiday displays with care, conscience exemptions that do not gut civil rights. A common American middle.",
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
    help: "Corporate power is economic and political. Lobbying is not the same as free speech by ordinary people.",
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
    help: "A strong military and blank-check spending are different. Waste, contractor markup, and forever-war inertia are real; so are deterrence needs.",
    type: "choice",
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
    help: "Supply, zoning, speculation, and wages all matter. Blaming only 'greedy renters' or only 'greedy landlords' is incomplete.",
    type: "choice",
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
    help: "The First Amendment blocks government censorship of speech. Private platforms already moderate. 'Free speech' is sometimes used to demand amplification of lies, and 'misinformation' is sometimes used to dodge accountability for elites. Both can be abused.",
    type: "choice",
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
        help: "Trump-era posture: sue, threaten licenses, call press the enemy. That is not free speech absolutism. It is using state and legal power to chill critics.",
        scores: { economic: 2, social: 8 },
        alignments: { progressive: 0, moderate_dem: 0, independent: 1, moderate_gop: 3, maga: 10 },
        magaPreferred: true,
      },
    ],
  },
];

export const QUIZ_QUESTION_COUNT = quizQuestions.length;
