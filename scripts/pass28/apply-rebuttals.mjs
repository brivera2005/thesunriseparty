/**
 * Pass 28 - Rebuttals 408 -> 450+
 * Run: node scripts/pass28/apply-rebuttals.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../../lib/data/conversation-helpers.ts");

function r(id, cats, they, you, stab, sources, difficulty, related = []) {
  const src = sources
    .map(
      ([sid, title, pub, url, excerpt, date]) => `      cite(
        ${JSON.stringify(sid)},
        ${JSON.stringify(title)},
        ${JSON.stringify(pub)},
        ${JSON.stringify(url)},
        ${JSON.stringify(excerpt)},
        ${JSON.stringify(date)}
      )`
    )
    .join(",\n");
  return `  {
    id: ${JSON.stringify(id)},
    category: [${cats.map((c) => JSON.stringify(c)).join(", ")}],
    theySay: ${JSON.stringify(they)},
    youSay: ${JSON.stringify(you)},
    stab: ${JSON.stringify(stab)},
    sources: [
${src}
    ],
    difficulty: ${JSON.stringify(difficulty)},
    relatedClaims: [${related.map((x) => JSON.stringify(x)).join(", ")}],
  },`;
}

const gao = ["gao_about", "What GAO Does", "U.S. Government Accountability Office", "https://www.gao.gov/about/what-gao-does", "GAO provides nonpartisan audits and investigations for Congress.", "2024-01-01"];
const bls = ["bls_union", "Union Members Summary", "Bureau of Labor Statistics", "https://www.bls.gov/news.release/union2.nr0.htm", "BLS publishes official union membership and earnings data.", "2025-01-01"];
const census = ["census_pov", "Poverty in the United States", "U.S. Census Bureau", "https://www.census.gov/topics/income-poverty/poverty.html", "Census Bureau publishes official poverty and income statistics.", "2025-01-01"];
const archives = ["archives_edu", "National Archives Education", "National Archives", "https://www.archives.gov/education", "Primary sources enable independent verification of historical claims.", "2020-01-01"];
const crs = ["crs_home", "Congressional Research Service Reports", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS provides nonpartisan analysis to Congress on legislation and policy.", "2025-01-01"];
const brennan = ["brennan_home", "Brennan Center for Justice", "Brennan Center for Justice", "https://www.brennancenter.org/", "Brennan Center researches voting rights, democracy, and justice reform.", "2025-01-01"];
const aclu = ["aclu_home", "American Civil Liberties Union", "ACLU", "https://www.aclu.org/", "ACLU litigates and documents civil liberties threats.", "2025-01-01"];
const fec = ["fec_data", "FEC Campaign Finance Data", "Federal Election Commission", "https://www.fec.gov/data/", "FEC publishes federal campaign finance disclosures.", "2025-01-01"];
const opens = ["opensecrets", "OpenSecrets", "OpenSecrets", "https://www.opensecrets.org/", "OpenSecrets tracks campaign finance, lobbying, and dark money.", "2025-01-01"];
const cdc = ["cdc_home", "Centers for Disease Control and Prevention", "CDC", "https://www.cdc.gov/", "CDC publishes public health data and guidance.", "2025-01-01"];
const epa = ["epa_home", "U.S. Environmental Protection Agency", "EPA", "https://www.epa.gov/", "EPA publishes environmental regulation and enforcement information.", "2025-01-01"];
const fr = ["fr_home", "Federal Register", "National Archives", "https://www.federalregister.gov/", "Official daily journal of federal rules and notices.", "2025-01-01"];
const congress = ["congress_home", "Congress.gov", "Library of Congress", "https://www.congress.gov/", "Official legislative information for the U.S. Congress.", "2025-01-01"];
const scotus = ["oyez_home", "Oyez", "Oyez", "https://www.oyez.org/", "Oyez summarizes Supreme Court cases with opinions and audio.", "2025-01-01"];
const ap = ["ap_home", "Associated Press", "Associated Press", "https://apnews.com/", "AP provides fact-based national and international reporting.", "2025-01-01"];
const reuters = ["reuters_home", "Associated Press", "Associated Press", "https://apnews.com/", "AP provides fact-based national and international reporting.", "2025-01-01"];
const foia = ["foia_home", "FOIA.gov", "U.S. Department of Justice", "https://www.foia.gov/", "FOIA.gov publishes agency FOIA portals and compliance data.", "2025-01-01"];
const loc = ["loc_home", "Library of Congress", "Library of Congress", "https://www.loc.gov/", "Library of Congress preserves and publishes historical documents.", "2025-01-01"];
const bls_cpi = ["bls_cpi", "Consumer Price Index", "Bureau of Labor Statistics", "https://www.bls.gov/cpi/", "BLS publishes official inflation measures.", "2025-01-01"];
const bjs = ["bjs_home", "Bureau of Justice Statistics", "BJS", "https://bjs.ojp.gov/", "BJS publishes criminal victimization and justice system statistics.", "2024-01-01"];
const hud = ["hud_home", "HUD", "U.S. Department of Housing and Urban Development", "https://www.hud.gov/", "HUD publishes housing and homelessness policy data.", "2025-01-01"];
const nps = ["nps_hist", "National Park Service History", "National Park Service", "https://www.nps.gov/subjects/tellingallamericansstories/index.htm", "NPS publishes historical context for U.S. historic sites.", "2020-01-01"];
const noaa = ["noaa", "NOAA Climate", "NOAA", "https://www.noaa.gov/climate", "NOAA publishes climate observations and assessments.", "2025-01-01"];
const ipcc = ["ipcc", "Intergovernmental Panel on Climate Change", "IPCC", "https://www.ipcc.ch/", "IPCC assesses the science of climate change for policymakers.", "2023-01-01"];
const cisa = ["cisa", "Cybersecurity and Infrastructure Security Agency", "CISA", "https://www.cisa.gov/topics/election-security", "CISA provides election infrastructure security guidance.", "2024-01-01"];
const bls_emp = ["bls_emp", "Employment Situation", "Bureau of Labor Statistics", "https://www.bls.gov/news.release/empsit.toc.htm", "BLS publishes the monthly employment situation report.", "2025-01-01"];
const nih = ["nih_home", "National Institutes of Health", "NIH", "https://www.nih.gov/", "NIH funds and publishes biomedical research.", "2025-01-01"];
const va = ["va_home", "U.S. Department of Veterans Affairs", "VA", "https://www.va.gov/", "VA publishes benefits, health, and exposure program information.", "2025-01-01"];
const dol = ["dol_home", "U.S. Department of Labor", "DOL", "https://www.dol.gov/", "DOL publishes labor standards, wages, and worker protections.", "2025-01-01"];
const irs = ["irs_home", "Internal Revenue Service", "IRS", "https://www.irs.gov/", "IRS administers tax law and publishes filing statistics.", "2025-01-01"];
const nlrb = ["nlrb_home", "National Labor Relations Board", "NLRB", "https://www.nlrb.gov/", "NLRB enforces private-sector collective bargaining rights.", "2025-01-01"];
const wh = ["wh_actions", "Presidential Actions", "The White House", "https://www.whitehouse.gov/presidential-actions/", "Official White House presidential actions archive.", "2026-07-11"];
const cbo = ["cbo_home", "Congressional Budget Office", "CBO", "https://www.cbo.gov/", "CBO provides nonpartisan budget and economic analysis to Congress.", "2025-01-01"];
const fec2 = fec;
const mspb = ["mspb_home", "Merit Systems Protection Board", "MSPB", "https://www.mspb.gov/", "MSPB adjudicates federal employee appeals and merit-system principles.", "2025-01-01"];
const opm = ["opm_home", "Office of Personnel Management", "OPM", "https://www.opm.gov/", "OPM sets federal civil-service policy and publishes workforce guidance.", "2025-01-01"];

const items = [
  r("freedom-to-fix-ends-epa", ["Climate", "Economy"],
    "Freedom to Fix just lets you repair your own car - why do greens hate that?",
    "The June 2026 memorandum directs EPA to expand aftermarket emissions pathways and deprioritize certain tampering enforcement. DIY repairs are not the same as weakening Clean Air Act practical controls. Read the memo, not the slogan.",
    "If it were only about wrenches, it would not need an EPA enforcement deprioritization clause.",
    [wh, epa, fr], "medium", ["epa-kills-jobs"]),
  r("emergency-powers-are-normal", ["Democracy", "Economy"],
    "Presidents use emergency powers all the time - stop freaking out!",
    "Frequency is not the same as health. CRS and congressional war-powers literature treat emergency authorities as exceptions that expand when Congress fails to constrain them. Normalizing forever emergencies is how exceptions eat the rulebook.",
    "If everything is an emergency, nothing is oversight.",
    [crs, congress, fr], "medium"),
  r("nspm-not-a-law", ["Democracy", "Foreign Policy"],
    "NSPMs are just internal memos - they are not laws!",
    "National Security Presidential Memoranda can bind agencies without the transparency of statutes or ordinary rulemaking. Internal is not the same as unimportant when the subject is security state priorities.",
    "Secret priority lists shape budgets and targeting. Call them memos if it helps you sleep.",
    [wh, crs, foia], "hard"),
  r("pardons-are-absolute-so-fine", ["Democracy", "Courts"],
    "The pardon power is absolute so any pardon is fine!",
    "The Constitution grants broad clemency, not a morality shield. Patterns of self-dealing or allied impunity are still fair game for voters, Congress, and historians even when courts cannot unwind a pardon.",
    "Absolute power is exactly when you judge the character of the person using it.",
    [archives, congress, ap], "easy", ["jan6-was-tourism"]),
  r("tariffs-on-planes-good", ["Economy", "Foreign Policy"],
    "Adjusting aircraft imports protects American aerospace jobs!",
    "Trade proclamations can shift costs across airlines, manufacturers, and passengers. CRS and BLS treat tariff and import adjustments as distributional choices, not automatic job miracles.",
    "A proclamation is not a hiring fair. Follow the price of tickets and parts.",
    [wh, crs, bls_emp], "medium"),
  r("fertilizer-emergency-real", ["Economy", "Climate"],
    "A fertilizer emergency proves the president is fighting for farmers!",
    "Emergency trade relief can help farm inputs and also expands the habit of governing by proclamation. Ask for duration, alternatives, and whether Congress was cut out - not just the ribbon-cutting photo.",
    "If every commodity spike is an emergency, Congress is a museum exhibit.",
    [wh, crs, congress], "medium"),
  r("pacific-fishing-common-sense", ["Climate", "Economy"],
    "Restoring Pacific fishing is common-sense American jobs!",
    "Ocean access proclamations trade off conservation science, treaty obligations, and commercial harvest. Common sense without stock assessments is a slogan wearing waders.",
    "Fish stocks do not care about your press release.",
    [wh, noaa, epa], "medium"),
  r("schedule-f-efficiency", ["Democracy", "Economy"],
    "Schedule Policy/Career is just efficiency!",
    "Converting policy-influencing roles to at-will status trades expertise for loyalty. GAO and MSPB frameworks exist because politicized removals destroy continuity and invite corruption.",
    "Efficiency that needs a loyalty filter is a purge with a stopwatch.",
    [gao, mspb, opm], "medium", ["schedule-f-is-accountability"]),
  r("civil-servants-deep-state", ["Democracy", "Whataboutism"],
    "Career civil servants are the deep state!",
    "Career staff implement statutes Congress passed. Calling expertise a conspiracy is how you justify firing the people who know where the bodies are buried in the budget.",
    "If competence is a coup, you are not fighting tyranny. You are fighting homework.",
    [mspb, gao, crs], "easy", ["deep-state-runs-everything"]),
  r("foia-is-weaponized", ["Democracy", "Media"],
    "FOIA is weaponized against conservatives!",
    "FOIA is a statute that applies across administrations. Backlogs and denials are documented government-wide. Transparency that only feels fair when your side wins is not transparency.",
    "If sunlight burns only your opponents, you were not standing in principle. You were standing in shade.",
    [foia, gao, congress], "medium"),
  r("dark-money-free-speech", ["Elections", "Democracy"],
    "Dark money is free speech!",
    "Speech is not the same as secret bankrolling. FEC disclosures and OpenSecrets tracking exist because voters deserve to know who is buying the megaphone.",
    "If your ideas need a mask and a shell LLC, they are not winning on merit.",
    [fec2, opens, brennan], "easy", ["citizens-united-freedom"]),
  r("voter-id-only-common-sense", ["Elections", "Democracy"],
    "Voter ID is the only election reform we need!",
    "ID rules can be designed fairly or as obstacle courses. Brennan Center research after Shelby County shows how restrictive packages stack with purged rolls and closed polling places.",
    "If fraud were the epidemic, courts would be drowning in proven cases. They are not.",
    [brennan, crs, cisa], "easy", ["voter-id-stops-fraud"]),
  r("cisa-is-censorship", ["Elections", "Media"],
    "CISA is a censorship agency!",
    "CISA's election-security role is infrastructure resilience and threat information. Conflating cybersecurity coordination with content policing is a category error that weakens election admin.",
    "Patching a county server is not editing your Facebook meme.",
    [cisa, crs, ap], "medium"),
  r("climate-not-urgent", ["Climate"],
    "Climate change is real but not urgent!",
    "NOAA observations and IPCC assessments show rising damages, extremes, and locked-in risk with delay. Not urgent usually means not urgent for people who can buy higher ground.",
    "The atmosphere does not wait for your quarterly earnings call.",
    [noaa, ipcc, epa], "easy", ["climate-always-changed"]),
  r("epa-overreach-always", ["Climate", "Economy"],
    "EPA overreach always kills jobs!",
    "Clean air and water rules have costs and benefits; EPA and academic literature document health savings that do not appear in a plant's quarterly memo. Always is not an impact analysis.",
    "Asthma ER visits are an economic cost whether your lobbyist counts them or not.",
    [epa, cdc, gao], "medium"),
  r("renewables-unreliable", ["Climate", "Economy"],
    "Renewables are too unreliable to matter!",
    "Grid planning already mixes firm, flexible, and storage resources. Unreliable is a slogan that ignores interconnection queues, transmission, and falling costs documented across energy agencies.",
    "The sun is intermittent. So is a coal plant on outage. Plan the system.",
    [epa, noaa, crs], "medium"),
  r("oil-dominance-freedom", ["Climate", "Foreign Policy"],
    "Oil dominance is energy freedom!",
    "Fossil dominance exports price shocks and climate risk. Freedom that depends on volatile global commodities is a leash with a patriotic paint job.",
    "If a foreign cartel can spike your gas price, you are not free. You are exposed.",
    [epa, crs, reuters], "medium"),

  r("medicaid-work-requirements-fair", ["Healthcare", "Economy"],
    "Medicaid work requirements just promote personal responsibility!",
    "Paperwork barriers kick eligible people off coverage even when they work irregular hours. CBO and health-services research treat churn as a feature of red tape, not a virtue.",
    "Responsibility that starts with a lost pharmacy claim is cruelty with a worksheet.",
    [cbo, cdc, crs], "medium"),
  r("aca-failed", ["Healthcare"],
    "Obamacare failed and premiums prove it!",
    "The ACA expanded coverage and banned preexisting-condition exclusions; premium fights are often about subsidy design and insurer markets. Failed usually means unfinished, not nonexistent.",
    "If it failed so hard, why is repealing preexisting-condition protections still a third rail?",
    [cbo, crs, ap], "medium", ["medicare-for-all-impossible"]),
  r("medicare-advantage-is-better", ["Healthcare"],
    "Medicare Advantage is better than traditional Medicare!",
    "Private plans can offer extras while billing the government more. GAO and MedPAC work repeatedly flag overpayments and prior-auth friction. Better for whom is the whole question.",
    "If it needs heavy marketing and network traps, ask who the product is.",
    [gao, cbo, crs], "hard"),
  r("vaccine-schedule-politics-fine", ["Healthcare", "Culture Wars"],
    "Realigning the childhood vaccine schedule is just following other countries!",
    "Peer-country cherry-picking is not the same as transparent evidence review. CDC processes exist so recommendations track data, not executive branding.",
    "Science by press office is how confidence dies.",
    [cdc, nih, wh], "medium"),
  r("cdc-deep-state-health", ["Healthcare", "Democracy"],
    "The CDC is deep-state health tyranny!",
    "Public-health agencies publish methods and surveillance data you can audit. Tyranny is a word that loses meaning when applied to outbreak tables.",
    "If a case-count dashboard is tyranny, your dictionary needs a vaccine.",
    [cdc, nih, gao], "easy"),
  r("abortion-is-settled-dobbs", ["Healthcare", "Courts"],
    "Dobbs returned abortion to the people - debate over!",
    "Dobbs returned abortion to state legislatures, not to pregnant people as moral agents. Ballot fights, travel bans, and ER refusals show the debate intensified.",
    "The people include the patient in the waiting room, not only the lobbyist in the gallery.",
    [scotus, ap, crs], "medium", ["roe-was-judicial-activism"]),
  r("crime-down-because-trump", ["Crime", "Whataboutism"],
    "Crime dropped because Trump is tough!",
    "BJS and FBI trend data move with many factors across jurisdictions and years. Single-cause victory laps ignore baseline trends and local policy mix.",
    "Correlation with a rally chant is not a causal model.",
    [bjs, ap, reuters], "medium"),
  r("immigrants-drain-welfare", ["Immigration", "Economy"],
    "Immigrants drain welfare and bankrupt states!",
    "Eligibility rules already bar many noncitizens from major federal benefits. Census and budget analyses do not support a simple bankrupt-the-treasury cartoon.",
    "If the math needed a scapegoat, it was never math.",
    [census, crs, cbo], "medium", ["immigrants-steal-jobs"]),
  r("border-only-issue", ["Immigration", "Democracy"],
    "The border is the only issue that matters!",
    "Border policy matters and so do wages, healthcare, climate, and voting rights. Single-issue tunnel vision is how you get stampeded past everything else on the agenda.",
    "A country is bigger than a fence line.",
    [crs, census, congress], "easy"),
  r("mass-deportation-easy", ["Immigration"],
    "Mass deportation is logistically easy and popular!",
    "Logistics include courts, detention capacity, employer dependency, and family separation. Easy in a speech is not easy in a democracy with due process.",
    "If it were easy, prior administrations would have finished the spreadsheet.",
    [crs, aclu, gao], "medium"),
  r("sanctuary-cities-lawless", ["Immigration", "Crime"],
    "Sanctuary cities are lawless!",
    "Local priorities about civil detainers are not nullification of criminal law. Cities still prosecute crimes; they limit becoming a federal immigration dragnet.",
    "Lawless is a word campaigns use when local democracy disagrees.",
    [aclu, crs, bjs], "medium"),
  r("teachers-indoctrinate", ["Education", "Culture Wars"],
    "Teachers are indoctrinating kids with ideology!",
    "State standards, elected boards, and parental rights already structure curricula. Indoctrination is often the label for teaching histories and identities someone wants erased.",
    "If a worksheet about Reconstruction is grooming, your fear needs a hobby.",
    [nps, loc, archives], "easy", ["crt-in-k12"]),
  r("dei-is-discrimination", ["Education", "Culture Wars"],
    "DEI is illegal discrimination!",
    "Equal opportunity programs vary widely; some are lawful inclusion efforts and some overreach. Blanket bans treat diversity paperwork as the same as Jim Crow.",
    "If your civil-rights theory starts from resentment of pronouns, you are not reading Title VII.",
    [scotus, congress, aclu], "medium"),
  r("college-is-scam", ["Education", "Economy"],
    "College is a scam - skip it!",
    "Returns vary by major and institution; Census and BLS still show average wage premia. Scam is a blunt word for a financing and sorting problem that needs reform, not nihilism.",
    "Burning the ladder is not the same as fixing the toll.",
    [census, bls_emp, cbo], "medium"),
  r("student-loans-personal-failure", ["Education", "Economy"],
    "Student debt is personal failure!",
    "Tuition growth, state disinvestment, and wage polarization shaped the debt load. Personal budgeting did not invent the price of a public university.",
    "You cannot side-hustle your way out of a policy choice.",
    [cbo, crs, census], "medium"),
  r("parents-rights-absolute", ["Education", "Culture Wars"],
    "Parents rights mean parents control everything taught!",
    "Parents have rights; so do other parents, students, and public institutions bound by civil-rights law. Absolute control by the loudest faction is not pluralism.",
    "Public school is not your group chat admin panel.",
    [congress, aclu, nps], "medium"),
  r("jan6-fedsurrection", ["Jan 6", "Democracy"],
    "Jan 6 was a fed-surrection!",
    "Court records, video, and guilty pleas document thousands of participants. A few informants do not erase a crowd that built a gallows and stormed the Capitol.",
    "If every crime you dislike is a false flag, you have left evidence for cosplay.",
    [archives, ap, congress], "easy", ["jan6-was-tourism"]),
  r("trump-always-peace", ["Foreign Policy", "Whataboutism"],
    "Trump always brings peace!",
    "Peace claims require outcomes: wars ended, alliances stabilized, civilian harm reduced. Slogans about peace while expanding force authorities are marketing.",
    "A peace brand is not a ceasefire.",
    [crs, reuters, ap], "medium"),
  r("nato-obsolete", ["Foreign Policy"],
    "NATO is obsolete!",
    "Alliances are cost-sharing machines against coercion. Obsolete usually means inconvenient for a bilateral deal-making style, not a serious reading of European security.",
    "If Putin cheers your take, check your homework.",
    [crs, reuters, congress], "medium"),
  r("israel-no-criticism", ["Foreign Policy", "Culture Wars"],
    "Any criticism of Israel is antisemitism!",
    "Antisemitism is real and rising; criticizing a government's military policy is not automatically hatred of Jews. Collapsing the two shields both bigots and bad policy from scrutiny.",
    "If a state cannot be criticized, it is not an ally in a democracy. It is a golden calf.",
    [ap, reuters, aclu], "hard"),
  r("china-only-threat", ["Foreign Policy", "Economy"],
    "China is the only threat that matters!",
    "Strategic competition with China is real; so are climate, pandemics, and domestic democratic decay. Monomania is how you miss the other fires.",
    "A serious strategy can walk and chew gum. A slogan cannot.",
    [crs, reuters, congress], "medium"),
  r("unions-obsolete-modern", ["Economy"],
    "Unions are obsolete in the modern economy!",
    "BLS still finds a union wage premium. Modern work did not abolish bargaining power problems; it relocated them to apps and contractors.",
    "Obsolete to whom - the worker or the shareholder presentation?",
    [bls, dol, nlrb], "easy", ["unions-corrupt"]),
  r("gig-workers-want-flexibility", ["Economy"],
    "Gig workers only want flexibility, not employment rights!",
    "Surveys show many want both flexibility and benefits. Misclassification fights are about who pays for risk when the app sets the price.",
    "Flexibility without a sick day is a brand name for precarity.",
    [dol, bls, crs], "medium"),
  r("corporate-tax-cuts-investment", ["Economy"],
    "Corporate tax cuts unlock investment and wages!",
    "CBO and empirical reviews show buybacks and shareholder returns often dominate. Investment and wages need demand, competition, and bargaining power - not only a lower rate.",
    "If the cut always becomes a yacht, it was not a jobs program.",
    [cbo, crs, bls], "medium", ["tax-cuts-pay-for-themselves"]),
  r("deficit-only-democrats", ["Economy", "Whataboutism"],
    "Deficits are only a Democratic problem!",
    "CBO baselines show deficits under both parties depending on tax cuts, wars, downturns, and pandemics. Selective deficit hawkishness is a tell.",
    "Math does not care about your yard sign.",
    [cbo, crs, gao], "easy"),
  r("inflation-only-spending", ["Economy"],
    "Inflation is only caused by government spending!",
    "BLS CPI tracks multiple drivers: supply shocks, housing, energy, corporate pricing power. Only spending is a monocausal story for a multicausal index.",
    "If your inflation theory has one villain, it is a campaign ad.",
    [bls_cpi, cbo, crs], "medium"),
  r("homelessness-choose-streets", ["Economy", "Crime"],
    "People choose the streets!",
    "HUD point-in-time counts and housing-cost data show scarcity and rents. Addiction and illness interact with housing; choice rhetoric erases the price of a key.",
    "Nobody chooses frostbite for the aesthetic.",
    [hud, census, ap], "easy", ["homelessness-is-drugs"]),
  r("police-funding-only-solution", ["Crime"],
    "Only more police funding solves crime!",
    "Policing is one tool beside lighting, housing, jobs, and prosecutors. BJS victimization trends do not show a single-lever utopia.",
    "A badge is not a housing voucher with a siren.",
    [bjs, hud, ap], "medium", ["police-never-wrong"]),
  r("mental-health-not-guns-again", ["Crime", "Healthcare"],
    "It is mental health, not guns!",
    "Mental health care access matters and still does not explain U.S. firearm death rates versus peer countries. CDC data keep pointing at lethality of means.",
    "Other countries have depression. They do not have our funeral schedule.",
    [cdc, bjs, nih], "easy", ["guns-only-deter"]),
  r("supreme-court-ethics-fine", ["Courts", "Democracy"],
    "Supreme Court ethics rules are already enough!",
    "A code without strong investigation and enforcement is etiquette. Public confidence surveys and gift scandals show the gap between parchment and practice.",
    "If the honor system worked, we would not be reading about the yacht.",
    [scotus, congress, ap], "medium", ["supreme-court-neutral"]),
  r("originalism-solves-all", ["Courts", "Culture Wars"],
    "Originalism solves every hard case objectively!",
    "Historians disagree, and selective history is still a choice. Originalism is a method with factions, not a vending machine that dispenses one answer.",
    "If the Founders had one mind, they would not have needed amendments.",
    [scotus, archives, loc], "hard", ["originalism-objective"]),
  r("chevron-restore-liberty", ["Courts", "Economy"],
    "Killing Chevron restored liberty from bureaucrats!",
    "Chevron deference let expert agencies fill statutory gaps Congress left. Courts still need to interpret law; the shift reallocates power toward judges and litigants with resources.",
    "Liberty for the best-lawyered party is not the same as liberty for the public.",
    [scotus, crs, fr], "hard", ["chevron-bad"]),
  r("press-is-failing-so-ignore", ["Media", "Democracy"],
    "The press failed so I only trust influencers!",
    "Newsrooms fail and still beat anonymous telegram channels on corrections culture. Influencers rarely publish methods or FOIA logs.",
    "If your news diet has no editors, you are the product and the mark.",
    [ap, reuters, foia], "easy", ["media-enemy-people"]),
  r("both-sides-violence", ["Democracy", "Whataboutism"],
    "Both sides are equally violent!",
    "Political violence is wrong from anyone; datasets and court records do not show perfect symmetry in every period. Equal blame is often a way to avoid naming the bigger threat.",
    "If your scale always reads 50-50, it is broken.",
    [bjs, ap, archives], "medium", ["both-sides-same"]),
  r("america-greatest-no-critique", ["Culture Wars", "Education"],
    "America is the greatest - stop criticizing it!",
    "Loving a country includes reading its archives. National Parks and National Archives publish hard histories because denial is not strength.",
    "A team that bans film study is not building a dynasty.",
    [archives, nps, loc], "easy", ["america-never-racist"]),
  r("history-is-over", ["Education", "Culture Wars"],
    "We already learned all the history that matters!",
    "New documents, archaeology, and scholarship keep revising understanding. Curriculum fights prove history is alive - and politically useful.",
    "If history were finished, lobbyists would not be rewriting the standards.",
    [loc, archives, nps], "easy"),
];

{
  let src = readFileSync(file, "utf8");
  if (!src.includes("freedom-to-fix-ends-epa")) {
    const block = items.join("\n");
    const marker = "\n];\n\nconst CATEGORY_SLUG_MAP";
    if (!src.includes(marker)) throw new Error("Could not find rebuttal array end marker");
    src = src.replace(marker, "\n" + block + marker);
    writeFileSync(file, src);
    console.log("added", items.length, "rebuttals");
  } else console.log("rebuttals already present");
}
