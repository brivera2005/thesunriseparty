import type { PolicyOppositionFraming } from "@/lib/types";

/**
 * Pass 44b: opposition framing for every FIX policy.
 * whyTheyFight  = why they do not want it (surface fight)
 * whatTheyHide  = what the opposition conceals
 * gaslightMove  = how they frame reform as extreme or impossible
 * whyTheyOppose = the BIG reason (money, power, donors, liability)
 */
export const policyOppositionById: Record<string, PolicyOppositionFraming> = {
  "FIX-HC-001": {
    whyTheyFight:
      "They fight universal coverage because it ends the private-insurance skim on premiums, denials, and Medicare Advantage overpayments. Every covered patient who never hits a deductible is revenue they lose.",
    whatTheyHide:
      "The U.S. already spends nearly twice the OECD average per person on health and still leaves tens of millions uninsured or underinsured (OECD Health Statistics; KFF). Administrative waste and Advantage overpayments are a feature for shareholders, not a bug.",
    gaslightMove:
      "Scare ads call Medicare-for-All a doctor takeover and invent wait-time horror stories. Americans already wait or skip care because of cost. Peer universal systems show lower per-capita spend and longer life expectancy than the U.S.",
    whyTheyOppose:
      "Private insurers, hospital chains, and PBMs extract hundreds of billions from the status quo. OpenSecrets ranks health insurers and pharma among the largest federal lobbying spenders every cycle. Follow the money: public insurance kills their business model.",
  },
  "FIX-ECO-001": {
    whyTheyFight:
      "They fight a jobs guarantee and card-check because a real exit option for workers raises wages and shrinks the surplus labor pool low-road employers rely on.",
    whatTheyHide:
      "Corporate profits and CEO pay surged while real wages for typical workers stagnated for decades (EPI productivity-pay gap). Gig 'flexibility' often means the company keeps the flexibility and the worker keeps the risk.",
    gaslightMove:
      "Critics call public employment Soviet and claim reclassification kills apps. California ABS and EU platform rules already move toward employee status without deleting the internet. Independence without benefits is cost-shifting, not liberty.",
    whyTheyOppose:
      "Platform monopolies and misclassification shops profit when workers stay non-union and afraid to quit. EPI documents the union wage premium they refuse to pay. Power over labor is the product.",
  },
  "FIX-ENV-001": {
    whyTheyFight:
      "They fight climate mobilization because every year of delay protects drilling leases, pipelines, and stranded-asset values on fossil balance sheets.",
    whatTheyHide:
      "Climate damages, disaster aid, insurance retreat, and fossil-pollution health costs are socialized onto taxpayers while profits stay private (NOAA billion-dollar disasters; EPA social-cost work). Clean energy jobs already outpace coal in multiple states.",
    gaslightMove:
      "They frame emergency mobilization as lifestyle tyranny and claim the science is unsettled. IPCC assessments are settled on human causation. The fight is over who pays for the transition.",
    whyTheyOppose:
      "Oil, gas, coal, and petrochemical donors fund the parties and think tanks that block action. OpenSecrets energy-sector contributions and lobbying totals are the receipt. Delay is the business plan.",
  },
  "FIX-VR-001": {
    whyTheyFight:
      "They fight automatic registration and voting-rights restoration because higher turnout among younger, poorer, and minority voters threatens maps drawn for minority rule.",
    whatTheyHide:
      "Nonpartisan research (Brennan Center; MIT Election Data + Science Lab) finds voter fraud vanishingly rare while ID laws, purges, and polling-place cuts impose real costs on eligible citizens.",
    gaslightMove:
      "They scream 'election integrity' to justify barriers after courts and audits repeatedly find tiny fraud rates. The gaslight turns access into theft so suppression looks like patriotism.",
    whyTheyOppose:
      "Restrictive rules and dark-money map-drawing protect incumbent power. Fewer eligible voters casting ballots is a feature for factions that lose competitive electorates. Control of who votes is control of who governs.",
  },
  "FIX-ED-001": {
    whyTheyFight:
      "They fight free public pathways from pre-K through university because scarcity of seats and degrees is a market they monetize.",
    whatTheyHide:
      "Countries with free or near-free public university still have thriving private sectors and stronger mobility on several OECD education metrics. U.S. student debt exceeds $1.7T (Federal Reserve / Education Department) after decades of state disinvestment.",
    gaslightMove:
      "They call public college communism and claim degrees become worthless if tuition falls. Scarcity of credentials is not quality. Quality comes from standards and funding, not from bankrupting 22-year-olds.",
    whyTheyOppose:
      "For-profit colleges, student-loan servicers, and private pre-K chains monetize scarcity. Debt itself is a revenue stream and a discipline tool that keeps graduates desperate for any job.",
  },
  "FIX-IMM-001": {
    whyTheyFight:
      "They fight humane processing and pathways because border chaos is a campaign product and a labor-discipline tool.",
    whatTheyHide:
      "CBO and multiple labor studies find immigration raises long-run GDP and fills care, agriculture, and construction demand. Asylum backlogs are underfunding and understaffing problems, not proof that capacity is impossible.",
    gaslightMove:
      "They equate asylum capacity with open borders and invent crime waves that do not match victimization data for immigrant communities. Cruelty is sold as seriousness while legal channels stay deliberately clogged.",
    whyTheyOppose:
      "Detention contractors, industries that prefer a fearful workforce, and political machines that fundraise on panic all profit from chaos over capacity. Orderly process shrinks the spectacle and the contracts.",
  },
  "FIX-HOUS-001": {
    whyTheyFight:
      "They fight social housing and strong tenant protections because scarcity rents are the business model for large landlords and REITs.",
    whatTheyHide:
      "Decades of underbuilding and exclusionary zoning, not 'too much housing aid,' drive shortages (HUD; housing-supply research). Working households pay half their income in rent while investment units sit empty.",
    gaslightMove:
      "They call social housing Venezuela and claim rent rules destroy supply. Vienna, Singapore, and U.S. public-housing plus voucher hybrids show public supply can coexist with private building when speculation is constrained.",
    whyTheyOppose:
      "Institutional landlords and speculative capital capture shortage premiums. Zoning capture by incumbent homeowners locks in exclusionary values. Housing as an asset class beats housing as a home until policy breaks that trade.",
  },
  "FIX-MED-001": {
    whyTheyFight:
      "They fight ownership caps and platform accountability because concentration is how they sell influence and ad monopoly power.",
    whatTheyHide:
      "Local news collapse and platform concentration correlate with lower civic knowledge and higher misinformation spread (Pew Research; FCC local-journalism dockets). 'Free speech' is invoked to defend algorithmic amplification for profit.",
    gaslightMove:
      "They reframe antitrust and disclosure as censorship. Size and opacity are the product. Sunlight on ownership and ranking incentives is treated as tyranny so monopolies stay unexamined.",
    whyTheyOppose:
      "Conglomerate owners and dominant platforms monetize engagement and political leverage. Follow FCC ownership debates and OpenSecrets tech/media lobbying. Pluralism rules cut the product they sell.",
  },
  "FIX-DIS-001": {
    whyTheyFight:
      "They fight home- and community-based care guarantees because institutional beds and insurer denials are easier to bill than autonomy.",
    whatTheyHide:
      "Olmstead and CMS data show community care is often cheaper per person and preferred by disabled people, yet waitlists stretch years because states underfund HCBS relative to institutions.",
    gaslightMove:
      "They claim home care is unaffordable fantasy while paying more for segregation. 'Budget realism' hides a preference for controllable institutions over disabled people's civil rights.",
    whyTheyOppose:
      "Institutional providers and insurers profit from warehousing people instead of funding HCBS. Independence shifts dollars and power toward disabled people. That is exactly what they resist.",
  },
  "FIX-IND-001": {
    whyTheyFight:
      "They fight treaty enforcement because honoring Native sovereignty blocks cheap access to land, water, and minerals.",
    whatTheyHide:
      "GAO and IHS reports document chronic underfunding of treaty health and infrastructure obligations while resource leases proceed. Legal sovereignty already exists on paper. The fight is whether the U.S. honors its own contracts.",
    gaslightMove:
      "They paint enforcement as special privileges rather than contract compliance. Native nations are framed as obstacles to 'development' so theft of jurisdiction sounds like growth.",
    whyTheyOppose:
      "Extractive industries and agencies that treat treaties as optional lose balance-sheet access when sovereignty is real. Broken treaties are a resource strategy, not an accident.",
  },
  "FIX-CC-001": {
    whyTheyFight:
      "They fight public childcare and paid leave because unpaid family labor is a hidden subsidy to employers.",
    whatTheyHide:
      "Treasury and labor research show childcare constraints suppress participation and lifetime earnings, especially for mothers. Peer nations fund leave through social insurance without collapsing small business.",
    gaslightMove:
      "They call it a nanny state and invent small-business doom. Markets already failed on price and supply for middle-income parents. Relatives are not a national childcare system.",
    whyTheyOppose:
      "Employers externalize care costs onto families. Public care and leave raise women's labor supply and pressure wages. Low-wage care models also resist wage floors. Cheap care labor and unpaid leave are the rake-off.",
  },
  "FIX-GUN-001": {
    whyTheyFight:
      "They fight universal checks, licensing, and safe storage because friction slows sales and weakens the fear cycle that drives volume.",
    whatTheyHide:
      "CDC and peer-reviewed injury research show U.S. firearm death rates dwarf other rich democracies. Repeated national polls show majority support for universal background checks. Lobby intensity outruns public preference.",
    gaslightMove:
      "Any safety rule is labeled confiscation. Hunters and sport shooters in peer countries live with licensing while U.S. communities absorb mass-casualty events treated as weather.",
    whyTheyOppose:
      "Firearms manufacturers and the NRA-aligned lobbying complex sell fear and volume. OpenSecrets gun-rights PAC and industry spending are the receipt. Liability and regulation threaten the product pipeline.",
  },
  "FIX-RR-001": {
    whyTheyFight:
      "They fight restored abortion access because forced birth is a tool of social and economic control, not a health policy.",
    whatTheyHide:
      "Maternal mortality is higher in the U.S. than in peer democracies (CDC; Commonwealth Fund). Abortion bans correlate with delayed miscarriage care and criminalization of pregnancy outcomes.",
    gaslightMove:
      "They call restoration of Roe-era access 'extremism' after stripping a 50-year right. Late-term caricatures hide that most abortions occur early and that bans reach miscarriage management.",
    whyTheyOppose:
      "Controlling reproduction disciplines workers, voters, and women's independence. Clinics and culture-war fundraising engines profit from the ban regime. Power over bodies is the prize.",
  },
  "FIX-TAX-001": {
    whyTheyFight:
      "They fight loophole closure because stepped-up basis, carried interest, and offshore shelters are how dynastic wealth skips wage-worker tax rates.",
    whatTheyHide:
      "IRS and Treasury analyses show the very richest underreport at higher rates when audit capacity is cut. Effective rates on wealth and capital gains often undercut rates paid by teachers and nurses (CBO; documented audit disparities).",
    gaslightMove:
      "They scream 'class warfare' at arithmetic. Asking capital to pay closer to wage-worker rates is framed as punishment so the loophole architecture stays invisible.",
    whyTheyOppose:
      "Billionaires, private-equity partners, and multinational tax departments design the rules. OpenSecrets tax and finance lobbying is the defense budget for inequality. The BIG reason is keeping the effective rate near zero on fortunes.",
  },
  "FIX-SS-001": {
    whyTheyFight:
      "They fight raising the payroll cap and blocking benefit cuts because a solvent social-insurance model does not generate Wall Street AUM fees.",
    whatTheyHide:
      "CBO and SSA Trustees show the shortfall is manageable by lifting the earnings cap and modest revenue fixes. Scare talk of 'going broke' softens the ground for cuts, not honest solvency math.",
    gaslightMove:
      "They tell young workers the system is a Ponzi scheme so privatization looks like rescue. Social Security is pay-as-you-go insurance with a trust-fund buffer, not a brokerage account.",
    whyTheyOppose:
      "Financial firms want carve-outs and privatization fees. Cutting benefits or diverting contributions creates a new product pipeline. Follow financial-sector lobbying on entitlement 'reform.'",
  },
  "FIX-RUR-001": {
    whyTheyFight:
      "They fight rural hospital and broadband obligations because thin-margin communities are where chains and telecoms prefer to exit.",
    whatTheyHide:
      "CMS and GAO track rural hospital closures and maternity deserts while broadband maps still show vast unserved areas despite subsidy programs captured by incumbents.",
    gaslightMove:
      "They claim rural aid is waste and that towns should 'adapt.' Distance to an ER is treated as personal failure so corporate retreat looks like efficiency.",
    whyTheyOppose:
      "Hospital chains close unprofitable ERs; private equity strips facilities; telecoms delay fiber where returns are thin. Public service mandates force presence where the spreadsheet says leave.",
  },
  "FIX-VET-001": {
    whyTheyFight:
      "They fight fully funded VA care and faster claims because privatization vendors and denial cultures cut costs by making veterans fight for benefits.",
    whatTheyHide:
      "VA Inspector General and CBO comparisons repeatedly show VA care competitive on quality and cost for many services. Wait-time scandals are used to push outsourcing rather than hire clinicians.",
    gaslightMove:
      "Support-the-troops rhetoric coexists with benefit cliffs and claims backlogs. Outrage at VA failures is channeled into for-profit alternatives instead of capacity.",
    whyTheyOppose:
      "Outsourcing profits and budget hawks who prefer thin VA staffing resist a true care guarantee. A working public system is a threat to the privatization narrative.",
  },
  "FIX-INF-001": {
    whyTheyFight:
      "They fight transit and rail buildout because car-dependent sprawl protects asphalt contractors, auto sales, and oil demand.",
    whatTheyHide:
      "DOT and APTA data show transit access raises job reach for low-income workers. Congestion and crash costs dwarf farebox politics. Decades of road bias were subsidies, not neutral markets.",
    gaslightMove:
      "They call trains socialist and buses crime magnets while ignoring the public cost of free roads and parking mandates. Transit is framed as charity so car monopoly stays common sense.",
    whyTheyOppose:
      "Highway contractors, auto and oil interests, and sprawl developers prefer asphalt over mobility that reduces car dependency. Public transit shifts power toward riders and cities.",
  },
  "FIX-CORR-001": {
    whyTheyFight:
      "They fight dark-money bans and public financing because access is the product lobbyists sell.",
    whatTheyHide:
      "After Citizens United, outside spending exploded while voters often cannot see true donors in time to act (OpenSecrets; Brennan Center). Shell-LLC speech is speech for wealth, not for the public.",
    gaslightMove:
      "Any limit is labeled censorship of speech. Money is speech only if you accept that billionaires get megaphones and nurses get whispers.",
    whyTheyOppose:
      "Dark-money nonprofits, Super PACs, and lobbyists monetize opacity. Public financing and real-time disclosure cut the product. OpenSecrets and FEC data make the dependency obvious.",
  },
  "FIX-DRUG-001": {
    whyTheyFight:
      "They fight Medicare negotiation and reference pricing because U.S. patients are the global price-takers funding monopoly margins.",
    whatTheyHide:
      "Americans pay far higher list prices than peer countries for the same molecules (KFF; GAO; HHS ASPE international comparisons). R&D is real, but monopoly pricing after public NIH science is not the same as innovation.",
    gaslightMove:
      "They claim negotiation kills the next cure. Other rich nations negotiate and still produce drugs. The threat is to margins, not to molecules.",
    whyTheyOppose:
      "Pharma list prices, patent evergreening, and PBM spread pricing generate outsized rents. OpenSecrets ranks pharma among top lobbying industries every year. Negotiation is a direct hit to that rake-off.",
  },
  "FIX-WAGE-001": {
    whyTheyFight:
      "They fight a living wage and overtime restoration because poverty pay and stolen hours are how low-road employers pad margins.",
    whatTheyHide:
      "EPI shows the federal minimum wage's real value collapsed while productivity rose. Overtime salary thresholds were frozen so 'managers' work 50-hour weeks without time-and-a-half.",
    gaslightMove:
      "They swear jobs will vanish at every proposed raise, then hire through the last increase. Automation and monopoly power get blamed on the wage floor to protect cheap labor models.",
    whyTheyOppose:
      "Retail, food, and care employers lobby against wage floors (Chamber / NFIB pattern). The BIG reason is keeping a workforce that cannot quit. Labor cheapness is the strategy.",
  },
  "FIX-AT-001": {
    whyTheyFight:
      "They fight breakups and bright-line merger rules because empire strategy (buy rivals, lock in users, raise fees) only works at monopoly scale.",
    whatTheyHide:
      "Concentration correlates with higher prices and weaker wage bargaining in multiple Census and economic studies. A generation of rubber-stamp mergers ignored labor and innovation harms.",
    gaslightMove:
      "They call antitrust Luddite and claim size equals efficiency. Efficiency that arrives by buying rivals and locking in users is power, not productivity.",
    whyTheyOppose:
      "Dominant platforms, hospital systems, agribusiness, and airlines extract monopoly rents. FTC/DOJ cases and the lobbying against them are the map. Monopoly profit is the BIG reason.",
  },
  "FIX-CJ-001": {
    whyTheyFight:
      "They fight a just transition with wage guarantees because fossil districts lose patronage when climate jobs scale on purpose.",
    whatTheyHide:
      "DOE and BLS clean-energy employment already rival or exceed fossil employment in many states. Transition funds and union standards are cheaper than perpetual disaster aid and pollution externalities.",
    gaslightMove:
      "They pit miners against the planet and call job guarantees bribes. Capital already automated and offshored fossil jobs while blaming climate policy for every layoff.",
    whyTheyOppose:
      "Fossil incumbents fear stranded assets and lost political machines. A funded transition removes the hostage narrative they use to block decarbonization. Follow energy PACs and delay lobbying.",
  },
  "FIX-MH-001": {
    whyTheyFight:
      "They fight real parity and community clinic capacity because denial rates, facility roll-ups, and carceral warehousing are cheaper than care.",
    whatTheyHide:
      "SAMHSA and KFF document massive unmet need and parity violations years after the Parity Act. ER boarding and jail as de facto psych wards are policy failure sold as personal moral failure.",
    gaslightMove:
      "They treat mental health as an individual grit problem and call community clinics soft-on-crime. Care is framed as indulgence so denial rates and waitlists stay invisible.",
    whyTheyOppose:
      "Insurers deny parity in practice; private equity rolled up behavioral health for facility fees; carceral systems warehouse people. Real care cuts those profit and control models.",
  },
};
