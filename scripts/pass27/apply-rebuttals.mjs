/**
 * Pass 27 - Rebuttals 358 -> 403+
 * Run: node scripts/pass27/apply-rebuttals.mjs
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
const reuters = ["reuters_home", "Reuters", "Reuters", "https://www.reuters.com/", "Reuters provides international wire reporting.", "2025-01-01"];
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
const nrcs = ["nlrb_home", "National Labor Relations Board", "NLRB", "https://www.nlrb.gov/", "NLRB enforces private-sector collective bargaining rights.", "2025-01-01"];

const items = [
  r("schedule-f-is-accountability", ["Democracy", "Economy"],
    "Schedule F just fires bad bureaucrats who sabotage the president!",
    "Schedule Policy/Career and Schedule F convert career experts into at-will staff removable without normal merit protections. GAO and MSPB frameworks exist because politicized firings destroy institutional memory and invite corruption, not because experts are sacred.",
    "If accountability meant competence, you would publish performance metrics, not loyalty oaths.",
    [gao, fr, crs], "medium", ["deep-state-runs-everything"]),
  r("doge-saves-billions", ["Economy", "Democracy"],
    "DOGE is cutting waste and saving taxpayers billions!",
    "Federal Register DOGE orders create review powers and hiring freezes; claimed savings require audited baselines. GAO already exists to score waste. Press releases are not audited savings.",
    "If the savings were real, GAO would score them. Screenshots are not audits.",
    [gao, fr, congress], "medium"),
  r("tariffs-bring-factories-home", ["Economy", "Foreign Policy"],
    "Tariffs will bring all the factories back overnight!",
    "Tariffs raise import costs and can reshore some production over years, but BLS and CRS treat them as taxes paid through U.S. prices. Overnight factory magic is campaign poetry, not trade economics.",
    "Factories need workers, power, and capital. A customs invoice is not a groundbreaking ceremony.",
    [crs, bls, reuters], "medium", ["tariffs-are-paid-by-china"]),
  r("immigrants-cause-crime-wave", ["Immigration", "Crime"],
    "Immigrants are driving a massive crime wave!",
    "BJS victimization surveys and multiple state analyses do not show immigrants as the engine of a national crime wave. Crime trends move with broader social factors. Anecdotes plus cable chyron is not epidemiology.",
    "If your crime theory needs a foreign accent, it is not a crime theory.",
    [bjs, ap, crs], "easy", ["immigrants-steal-jobs"]),
  r("asylum-is-loophole", ["Immigration"],
    "Asylum is just a loophole for illegals!",
    "Asylum is a statutory protection rooted in refugee law and international commitments. Backlogs and weak processing capacity are administrative failures, not proof that protection is fake.",
    "Calling a right a loophole is how you erase the statute without amending it.",
    [crs, aclu, congress], "medium"),
  r("birthright-citizenship-mistake", ["Immigration", "Democracy"],
    "Birthright citizenship was a mistake we can erase by EO!",
    "The 14th Amendment's citizenship clause and long Supreme Court interpretation do not vanish because an executive order wants a different politics. Constitutional text is not a press secretary memo.",
    "If an EO can rewrite the 14th Amendment, we do not have a Constitution. We have a mood ring.",
    [archives, scotus, crs], "hard"),
  r("climate-hoax-scientists", ["Climate"],
    "Climate scientists are in it for the grant money!",
    "NOAA and IPCC assessments rest on multiple independent observational records, not one lab's paycheck. Conspiracy requires explaining why oil majors' own scientists also documented warming for decades.",
    "Your uncle's Facebook post is not a peer-reviewed temperature record.",
    [noaa, ipcc, epa], "easy", ["climate-always-changes"]),
  r("ev-mandates-tyranny", ["Climate", "Economy"],
    "EV mandates are government tyranny against cars!",
    "Emissions standards and fleet rules are ordinary Clean Air Act tools. Markets already shift under fuel costs and tech change. Calling every pollution rule tyranny empties the word.",
    "Seatbelts were tyranny too, until the funeral rate dropped.",
    [epa, crs, reuters], "medium"),
  r("paris-accord-useless", ["Climate", "Foreign Policy"],
    "The Paris Agreement does nothing - leaving was smart!",
    "Paris is a framework for nationally determined contributions and transparency. Leaving reduces U.S. leverage and signals free-rider preference. Doing nothing is not a climate strategy.",
    "Walking out of the fire drill does not put out the fire.",
    [epa, noaa, ap], "medium"),
  r("covid-overblown", ["Healthcare"],
    "COVID was overblown - just a flu!",
    "CDC excess-death and hospitalization data showed a multi-year mortality shock far beyond seasonal flu baselines. Minimizing mass death is politics, not epidemiology.",
    "If it was just a flu, the cemeteries would not have needed overflow plans.",
    [cdc, nih, ap], "easy"),
  r("vaccines-more-harm", ["Healthcare"],
    "Vaccines do more harm than good!",
    "CDC and NIH track adverse events and still find benefits dwarfing risks for routine immunizations. Rare harms are monitored precisely because public health systems measure them.",
    "Anecdotes are not denominators. Public health runs on rates.",
    [cdc, nih, reuters], "medium"),
  r("medicaid-work-builds-character", ["Healthcare", "Economy"],
    "Medicaid work requirements just build character!",
    "Many Medicaid enrollees already work, caretake, or have disabilities. Work paperwork requirements mainly generate coverage loss through red tape, not character transformation.",
    "Character is not measured by how many forms you lose before chemo.",
    [crs, census, ap], "medium"),
  r("abortion-states-decide", ["Healthcare", "Democracy"],
    "Abortion should be left entirely to the states!",
    "Dobbs returned regulation to states, producing bans that override majorities in some places and force interstate travel for care. A right that ends at a state line is conditional liberty.",
    "Your ZIP code is not a moral philosophy.",
    [scotus, ap, aclu], "medium"),
  r("trans-care-is-mutilation", ["Healthcare", "Culture Wars"],
    "All gender-affirming care is mutilation!",
    "Major medical bodies distinguish adult care, adolescent protocols, and banned conversion practices. Blanket mutilation rhetoric erases clinical guidelines and parental/patient consent frameworks.",
    "If every surgery you dislike is mutilation, cancel sports medicine next.",
    [nih, cdc, ap], "hard"),
  r("crt-in-kindergarten", ["Education", "Culture Wars"],
    "They are teaching CRT in kindergarten!",
    "Critical race theory is a law-school framework. K-12 fights are usually about whether classrooms may discuss slavery, segregation, and racism using primary sources. Archives exist for a reason.",
    "If reading the Emancipation Proclamation is CRT, your complaint is with 1863.",
    [archives, loc, nps], "easy"),
  r("parents-rights-means-bans", ["Education"],
    "Parents rights means banning books and curricula!",
    "Parents already have huge sway via boards and opt-outs. Blanket bans that purge library shelves for everyone are majoritarian censorship, not parental choice.",
    "Your parental right ends where you start parenting the whole district's bookshelf.",
    [aclu, loc, ap], "medium"),
  r("teachers-unions-destroy-schools", ["Education", "Labor"],
    "Teachers unions destroyed public schools!",
    "School outcomes track segregation, poverty, and funding gaps documented by Census and education research. Blaming only unions ignores decades of unequal investment.",
    "If unions alone caused failure, wealthy union districts would look like ruins.",
    [census, bls, crs], "medium"),
  r("college-is-scam", ["Education", "Economy"],
    "College is a scam - nobody should go!",
    "BLS earnings premiums for degree holders remain large on average, while debt and underfunding are real policy failures. The scam frame collapses unequal public investment into anti-education nihilism.",
    "Fix the price of college. Do not celebrate ignorance as a vibe.",
    [bls, census, crs], "easy"),
  r("dei-is-anti-white", ["Culture Wars", "Democracy"],
    "DEI is illegal anti-white discrimination!",
    "Equal employment law already bans racial discrimination. Many DEI programs are outreach, bias training, or compliance. Treating every equity office as a racial conspiracy is culture-war expansion of SFFA beyond campuses.",
    "If fairness offends you only when the beneficiaries are not you, it was never about fairness.",
    [scotus, dol, ap], "medium"),
  r("woke-military-weak", ["Foreign Policy", "Culture Wars"],
    "A woke military cannot win wars!",
    "Readiness is about training, maintenance, recruiting, and strategy. Culture-war branding is not a force assessment. Pentagon metrics live in budgets and GAO readiness work, not memes.",
    "Empires fall from logistics and politics, not rainbow stickers on a briefing slide.",
    [gao, congress, reuters], "medium"),
  r("nato-freeloaders", ["Foreign Policy"],
    "NATO allies are freeloaders - ditch them!",
    "Alliance burden-sharing is contested, but collective defense multiplies U.S. power projection. Walking away hands adversaries a fractured Europe. Accounting debates are not abandonment arguments.",
    "You do not cancel the fire department because a neighbor owns a nicer hose.",
    [crs, reuters, ap], "medium"),
  r("foreign-aid-waste", ["Foreign Policy", "Economy"],
    "Foreign aid is a huge waste of our budget!",
    "Foreign assistance is a small slice of federal spending. Cutting it can raise refugee, conflict, and pandemic spillover costs. GAO can score waste without treating diplomacy as theft.",
    "Pennies on the federal dollar are not why your town lacks a clinic.",
    [gao, crs, congress], "easy"),
  r("israel-no-criticism", ["Foreign Policy"],
    "Any criticism of Israel is antisemitism!",
    "Antisemitism is real and must be fought. Criticism of a government's military or settlement policy is not inherently hatred of Jews, just as criticizing Egypt is not anti-Arab racism.",
    "Governments are not religions. Conflating them protects neither Jews nor Palestinians.",
    [ap, reuters, aclu], "hard"),
  r("jan6-fbi-fedsurrection", ["Jan 6", "Democracy"],
    "January 6 was an FBI fedsurrection!",
    "Thousands of hours of video, charging docs, and convictions show a real mob attacking police and Congress. Informants exist in many cases; they do not erase the breach you can watch.",
    "If it was mostly feds, your friends in the zip-tie photos need better agents.",
    [congress, archives, ap], "medium", ["jan6-tourist-visit"]),
  r("trump-won-2020", ["Elections", "Democracy"],
    "Trump actually won 2020 - it was stolen!",
    "Sixty-plus failed lawsuits, state audits, and AP reviews found no fraud at outcome-changing scale. Losing under rules you liked until you lost is not theft.",
    "If you cannot prove it in court, it is a podcast, not a presidency.",
    [ap, brennan, cisa], "easy", ["voter-fraud-everywhere"]),
  r("voter-id-common-sense", ["Elections"],
    "Voter ID is just common sense!",
    "ID rules can be crafted fairly, but many bills add narrow IDs, purge rules, and polling cuts that Brennan Center and election administrators flag as turnout barriers. Common sense is access plus security, not a obstacle course.",
    "If the goal is security, fund free IDs and more poll sites. If the goal is fewer voters, you already showed your hand.",
    [brennan, crs, cisa], "medium"),
  r("mail-ballots-fraud", ["Elections"],
    "Mail ballots are fraud machines!",
    "States have used absentee voting for decades with bipartisan acceptance for military voters. Fraud rates documented in audits remain tiny. Convenience is not conspiracy.",
    "Soldiers voting from abroad somehow became fraud only when your candidate lost.",
    [brennan, cisa, ap], "easy"),
  r("electoral-college-protects-small", ["Elections", "Democracy"],
    "The Electoral College protects small states!",
    "It weights voters unequally by design. Small-state protection can be debated; calling unequal vote power sacred democracy is branding, not civics.",
    "One person, one vote is not radical. It is the slogan you use until the math fails you.",
    [archives, congress, crs], "medium", ["popular-vote-bad"]),
  r("gerrymander-needed", ["Elections", "Democracy"],
    "Both sides gerrymander - stop complaining!",
    "Both parties have gerrymandered; that does not make extreme maps democratic. Independent commissions and court limits exist because voters should choose politicians, not the reverse.",
    "Both sides do it is a confession, not a defense.",
    [brennan, ap, congress], "easy", ["gerrymandering-both-sides"]),
  r("filibuster-saves-republic", ["Democracy"],
    "The filibuster is what saves the republic!",
    "The modern talking-point filibuster is a Senate rule, not a constitutional commandment. It blocks voting rights and climate bills while exceptions appear when majorities want tax cuts.",
    "Sacred until the tax bill, disposable after: that is not principle.",
    [congress, crs, brennan], "medium", ["filibuster-sacred"]),
  r("supreme-court-neutral", ["Courts", "Democracy"],
    "The Supreme Court is just calling balls and strikes!",
    "Courts interpret open-textured clauses with methods that change outcomes on abortion, money in politics, and agency power. Neutrality claims do not erase the political stakes of appointments.",
    "If it were only balls and strikes, confirmation hearings would be five minutes long.",
    [scotus, congress, ap], "medium"),
  r("originalism-objective", ["Courts"],
    "Originalism is the only objective method!",
    "Historians disagree about founding-era meanings, and selective originalism often ignores founding practices that are politically inconvenient. Method branding is not a time machine.",
    "If originalism were a science, originalists would not split into factions every term.",
    [scotus, archives, loc], "hard"),
  r("chevron-bad", ["Courts", "Economy"],
    "Killing Chevron deference frees America from bureaucrats!",
    "Chevron let expert agencies fill statutory gaps Congress left. Ending it shifts power to generalist judges. That is a governance choice, not automatic liberty.",
    "You did not drain the swamp. You moved it into chambers with life tenure.",
    [scotus, crs, gao], "hard"),
  r("corporations-are-people", ["Economy", "Democracy"],
    "Corporations are people - money is speech!",
    "Citizens United treated independent expenditures as protected speech. Corporate legal personhood for contracts is not the same as equal political citizenship. Voters without megaphones lose.",
    "My corporation cannot be drafted, married, or jailed. Funny kind of person.",
    [scotus, fec, opens], "medium", ["dark-money-free-speech"]),
  r("minimum-wage-kills-jobs", ["Economy"],
    "Minimum wage hikes always kill jobs!",
    "BLS and a large empirical literature find mixed, often modest employment effects depending on level and phase-in. Always kills jobs is ideology with a spreadsheet costume.",
    "If wages must stay 1990 forever, call it a museum, not a labor market.",
    [bls, dol, crs], "medium"),
  r("unions-corrupt", ["Economy", "Labor"],
    "Unions are all corrupt bosses!",
    "Unions are democratic organizations with legal duties and public LM filings. Corruption exists in every sector; BLS still shows a union wage premium. Anecdote is not the median member.",
    "You hate dues more than you hate the CEO's jet. Be honest.",
    [bls, nrcs, dol], "easy"),
  r("right-to-work-freedom", ["Economy", "Labor"],
    "Right-to-work laws protect worker freedom!",
    "Right-to-work bans fair-share fees, weakening unions that still must represent free riders. Freedom for free riders is often employer strategy dressed as liberty.",
    "If it is about freedom, why do the same bills never boost organizing rights?",
    [bls, dol, crs], "medium"),
  r("tax-cuts-pay-for-themselves", ["Economy"],
    "Tax cuts always pay for themselves!",
    "CBO and CRS score dynamic effects; they do not show large tax cuts routinely self-financing. Deficits after major cuts are a pattern, not a coincidence.",
    "If tax cuts paid for themselves, we would be drowning in surplus. We are not.",
    [crs, congress, gao], "easy"),
  r("irs-is-weapon", ["Economy", "Democracy"],
    "The IRS is a weapon against patriots!",
    "Tax administration audits high-income complexity and refundable credits. Politicized targeting is illegal and investigated when alleged. Defunding enforcement mainly helps sophisticated evasion.",
    "If your patriotism depends on nobody checking the return, it is a business model.",
    [irs, gao, congress], "medium"),
  r("homelessness-is-drugs", ["Economy", "Crime"],
    "Homelessness is just drugs and personal failure!",
    "HUD and Census data show housing cost burdens and shortages. Addiction and mental illness interact with rents. Personal failure does not build apartments.",
    "You cannot AA your way out of a 2-bedroom that costs half your paycheck.",
    [hud, census, ap], "medium", ["homeless-choose-it"]),
  r("crime-soft-on", ["Crime"],
    "Democrats are soft on crime and cities burned!",
    "BJS and FBI trend data show complex rises and falls that do not map cleanly onto one party's slogan. Soft on crime is a campaign chant that skips victimization survey nuance.",
    "If cable news is your crime dashboard, you are the product, not the analyst.",
    [bjs, ap, reuters], "medium"),
  r("police-never-wrong", ["Crime", "Culture Wars"],
    "Support the badge - police are never the problem!",
    "Most officers are not murderers; accountability for the ones who are is how you protect the profession. DOJ pattern-or-practice cases exist because some departments rot.",
    "A badge is not a halo. Treat it like power that needs oversight.",
    [bjs, aclu, ap], "easy", ["police-funding-equals-safety"]),
  r("guns-only-deter", ["Crime"],
    "More guns always mean less crime!",
    "CDC and research literature show firearms raise lethality of arguments, suicides, and accidents even where defensive uses occur. Always is not a dataset.",
    "If more guns automatically meant safety, the ER would be a spa.",
    [cdc, bjs, ap], "medium", ["mental-health-not-guns"]),
  r("media-enemy-people", ["Media", "Democracy"],
    "The media is the enemy of the people!",
    "Watchdog reporting exposes corruption; authoritarian movements always brand scrutiny as treason. Read primary documents. Enemy of the people is a purge phrase.",
    "If every critical headline is treason, you are not seeking truth. You are seeking a throne.",
    [ap, reuters, foia], "easy", ["factcheckers-biased"]),
  r("big-tech-censors-right", ["Media", "Culture Wars"],
    "Big Tech only censors conservatives!",
    "Platforms moderate across ideologies under opaque rules; conservatives also dominate parts of social media. The antidote is transparency and competition policy, not a state speech police for your side.",
    "Wanting the algorithm to favor you is not a free speech principle.",
    [aclu, congress, reuters], "medium"),
  r("whatabout-clinton-emails", ["Whataboutism", "Democracy"],
    "But her emails! Why the double standard?",
    "Email server practices were investigated. They do not cancel later classified mishandling cases, Jan 6, or current executive actions. Past scandals are not lifetime immunity cards.",
    "You cannot run a country on unfinished 2016 Facebook comments.",
    [ap, congress, archives], "easy", ["but-obama-did-this"]),
  r("both-sides-same", ["Whataboutism", "Democracy"],
    "Both parties are the same - nothing matters!",
    "Parties share donor capture problems and differ sharply on voting rights, climate, labor, and abortion. Cynicism that erases those differences is how minority agendas win without persuading you.",
    "If nothing matters, only the people who still show up matter. Guess who that helps.",
    [brennan, opens, congress], "easy"),
  r("america-never-racist", ["Culture Wars", "Education"],
    "America was never a racist country!",
    "National Archives documents slavery, Jim Crow, redlining, and exclusion acts. A country can contain democracy and white supremacy at once. Denial is not patriotism.",
    "If it was never racist, explain the separate water fountain without using the word.",
    [archives, nps, loc], "easy", ["slavery-was-everywhere"]),
  r("slavery-not-cause", ["Education", "Culture Wars"],
    "The Civil War was not about slavery!",
    "Secession declarations and Confederate leaders named slavery as central. States rights was the right to own people. Library of Congress primary texts settle this.",
    "When the documents say slavery, believe the documents.",
    [loc, archives, nps], "easy", ["civil-war-states-rights"]),
  r("reparations-impossible", ["Economy", "Culture Wars"],
    "Reparations are impossible and unfair!",
    "Feasibility is a design question: tax credits, baby bonds, targeted investment. Unfair ignores unpaid labor, redlining, and wealth gaps Census still measures. Hard is not the same as unjustified.",
    "We built the interstate system. We can build a spreadsheet.",
    [census, archives, crs], "hard"),
];

{
  let src = readFileSync(file, "utf8");
  if (!src.includes("schedule-f-is-accountability")) {
    const block = items.join("\n");
    const marker = "\n];\n\nconst CATEGORY_SLUG_MAP";
    if (!src.includes(marker)) throw new Error("Could not find rebuttal array end marker");
    src = src.replace(marker, "\n" + block + "\n];\n\nconst CATEGORY_SLUG_MAP");
    writeFileSync(file, src);
    console.log("added", items.length, "rebuttals");
  } else console.log("rebuttals already present");
}
