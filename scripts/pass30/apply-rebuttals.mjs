/**
 * Pass 30 - Rebuttals 500 -> 550+
 * Run: node scripts/pass30/apply-rebuttals.mjs
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
const foia = ["foia_home", "FOIA.gov", "U.S. Department of Justice", "https://www.foia.gov/", "FOIA.gov publishes agency FOIA portals and compliance data.", "2025-01-01"];
const loc = ["loc_home", "Library of Congress", "Library of Congress", "https://www.loc.gov/", "Library of Congress preserves and publishes historical documents.", "2025-01-01"];
const bls_cpi = ["bls_cpi", "Consumer Price Index", "Bureau of Labor Statistics", "https://www.bls.gov/cpi/", "BLS publishes official inflation measures.", "2025-01-01"];
const bls_emp = ["bls_emp", "Employment Situation", "Bureau of Labor Statistics", "https://www.bls.gov/news.release/empsit.toc.htm", "BLS publishes the monthly employment situation report.", "2025-01-01"];
const nih = ["nih_home", "National Institutes of Health", "NIH", "https://www.nih.gov/", "NIH funds and publishes biomedical research.", "2025-01-01"];
const dol = ["dol_home", "U.S. Department of Labor", "DOL", "https://www.dol.gov/", "DOL publishes labor standards, wages, and worker protections.", "2025-01-01"];
const wh = ["wh_actions", "Presidential Actions", "The White House", "https://www.whitehouse.gov/presidential-actions/", "Official White House presidential actions archive.", "2026-07-11"];
const cbo = ["cbo_home", "Congressional Budget Office", "CBO", "https://www.cbo.gov/", "CBO provides nonpartisan budget and economic analysis to Congress.", "2025-01-01"];
const noaa = ["noaa", "NOAA Climate", "NOAA", "https://www.noaa.gov/climate", "NOAA publishes climate observations and assessments.", "2025-01-01"];
const nps = ["nps_hist", "National Park Service History", "National Park Service", "https://www.nps.gov/subjects/tellingallamericansstories/index.htm", "NPS publishes historical context for U.S. historic sites.", "2020-01-01"];
const cisa = ["cisa", "Cybersecurity and Infrastructure Security Agency", "CISA", "https://www.cisa.gov/topics/election-security", "CISA provides election infrastructure security guidance.", "2024-01-01"];
const mspb = ["mspb_home", "Merit Systems Protection Board", "MSPB", "https://www.mspb.gov/", "MSPB adjudicates federal employee appeals and merit-system principles.", "2025-01-01"];
const opm = ["opm_home", "Office of Personnel Management", "OPM", "https://www.opm.gov/", "OPM sets federal civil-service policy and publishes workforce guidance.", "2025-01-01"];
const hud = ["hud_home", "HUD", "U.S. Department of Housing and Urban Development", "https://www.hud.gov/", "HUD publishes housing and homelessness policy data.", "2025-01-01"];
const nlrb = ["nlrb_home", "National Labor Relations Board", "NLRB", "https://www.nlrb.gov/", "NLRB enforces private-sector collective bargaining rights.", "2025-01-01"];
const metals = ["metals_tariff", "Aluminum Steel Copper Tariff Proclamation", "Federal Register", "https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states", "Proclamation further adjusts aluminum, steel, and copper import tariff regimes.", "2026-06-04"];
const dpa = ["dpa_del", "DPA Delegations EO", "Federal Register", "https://www.federalregister.gov/documents/2026/03/18/2026-05382/adjusting-certain-delegations-under-the-defense-production-act", "Executive order adjusts Defense Production Act delegations across agencies.", "2026-03-18"];
const intl = ["intl_withdraw", "International Organizations Withdrawal Memo", "Federal Register", "https://www.federalregister.gov/documents/2026/01/16/2026-00976/withdrawing-the-united-states-from-international-organizations-conventions-and-treaties-that-are", "Memorandum directs withdrawal from international organizations and treaties.", "2026-01-16"];
const kickapoo = ["kickapoo_deny", "Kickapoo Permit Denial", "Federal Register", "https://www.federalregister.gov/documents/2026/01/14/2026-00697/denial-of-presidential-permit-for-the-kickapoo-traditional-tribe-of-texas", "Denial of presidential permit for the Kickapoo Traditional Tribe of Texas.", "2026-01-14"];
const game = ["americas_game", "Preserving America's Game", "Federal Register", "https://www.federalregister.gov/documents/2026/03/25/2026-05867/preserving-americas-game", "Executive order on preserving American football and related sports policy.", "2026-03-25"];
const dpa303 = ["dpa303", "DPA Section 303 Waiver", "Federal Register", "https://www.federalregister.gov/documents/2026/02/19/2026-03380/presidential-waiver-of-statutory-requirements-pursuant-to-section-303-of-the-defense-production-act", "Presidential waiver under Defense Production Act Section 303.", "2026-02-19"];
const approps = ["approps_impl", "Appropriations Implementation Proclamation", "Federal Register", "https://www.federalregister.gov/documents/2026/05/22/2026-10398/to-implement-certain-provisions-in-the-consolidated-appropriations-act-2026-and-for-other-purposes", "Proclamation implements selected Consolidated Appropriations Act 2026 provisions.", "2026-05-22"];
const critpay = ["crit_pay", "Critical Position Pay Memo", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/05/approving-critical-position-pay-authority-for-national-security-investment-workforce/", "Approves critical-position pay authority for national-security investment workforce.", "2026-05-29"];

const items = [
  r("metals-tariffs-protect-jobs", ["Economy", "Foreign Policy"],
    "More aluminum and steel tariffs mean more American factory jobs!",
    "Metals proclamations can raise input costs for builders, automakers, and manufacturers while any hiring gains concentrate in protected niches. CRS and BLS treat tariff incidence as distributional, not a nationwide hiring miracle.",
    "A tariff is a tax with a patriotism filter. Follow prices, not slogans.",
    [metals, crs, bls_emp], "medium", ["tariff-toggle-is-strength"]),
  r("dpa-delegation-is-boring", ["Democracy", "Economy"],
    "Defense Production Act paperwork is too boring to care about!",
    "DPA delegations decide which agencies can compel production, prioritize contracts, and waive requirements. Boring authorities are how industrial policy happens without a floor fight.",
    "If it can commandeer supply chains, it is not trivia.",
    [dpa, dpa303, fr], "hard"),
  r("leave-intl-orgs-sovereignty", ["Foreign Policy", "Democracy"],
    "Leaving international organizations just restores sovereignty!",
    "Exit memos can abandon cooperation on health, labor, and security without Congress rewriting the underlying commitments in public. Sovereignty theater that blinds the government is not strength.",
    "You can leave a room and still need the fire code.",
    [intl, crs, wh], "medium"),
  r("kickapoo-permit-local-issue", ["Democracy", "Culture Wars"],
    "Denying one tribal permit is a local zoning spat!",
    "Presidential permit denials for tribal projects sit at the intersection of Indigenous sovereignty, borders, and infrastructure. Calling it zoning hides the federal power move.",
    "If the White House stamps denied, it is not a HOA meeting.",
    [kickapoo, archives, fr], "medium"),
  r("football-eo-harmless", ["Culture Wars", "Education"],
    "A football executive order is harmless Americana!",
    "Preserving America's Game plus the college-sports emergency order shows culture policy federalized into athletics governance. Harmless branding is still agenda-setting with a whistle.",
    "When the presidency coaches football, look for the civil-rights tradeoffs.",
    [game, wh, fr], "easy", ["college-sports-federal-emergency"]),
  r("dpa-waiver-efficiency", ["Economy", "Democracy"],
    "DPA waivers cut red tape so America can build!",
    "Section 303 waivers suspend statutory requirements for selected priorities. Speed without disclosure is how industrial favors hide inside emergency grammar.",
    "Red tape is sometimes the part where the public gets a look.",
    [dpa303, dpa, gao], "hard"),
  r("approps-proclamation-fine", ["Democracy", "Economy"],
    "Implementing appropriations by proclamation is just administration!",
    "Spending bills are Congress's power of the purse. Selective presidential implementation can privilege favored readings while the receipt trail thins.",
    "If Congress writes the check, explain every endorsement stamp.",
    [approps, congress, fr], "medium"),
  r("critical-pay-attracts-talent", ["Democracy", "Economy"],
    "Critical pay authority just helps hire talent!",
    "Pay flexibilities can be legitimate. Paired with Schedule Policy/Career removals, they also create a two-track workforce: prized hires up, career watchdogs out.",
    "Raise pay for experts. Do not confuse that with purging the referees.",
    [critpay, opm, mspb], "medium", ["schedule-pc-not-schedule-f"]),
  r("homeownership-month-enough", ["Economy"],
    "Homeownership Month proves they care about housing!",
    "Proclamations are calendar art. Housing outcomes track mortgage-credit orders, construction deregulation, and institutional-investor rules, not ribbon-cutting months.",
    "A hashtag month is not a rent payment.",
    [hud, census, bls_cpi], "easy", ["housing-eos-fix-prices"]),
  r("pass30-counts-distraction", ["Whataboutism", "Media"],
    "240 events and 550 rebuttals are just vanity metrics!",
    "Counts are mile markers for a receipt stack you can audit against Federal Register and White House links. Vanity is refusing to read event #240 because the number offends you.",
    "If documentation is vanity, secrecy must be virtue. Cute theory.",
    [fr, wh, gao], "easy", ["milestone-counts-distraction"]),
  r("withdrawal-memos-not-law", ["Foreign Policy", "Democracy"],
    "Withdrawal memos are not treaties so chill out!",
    "Memoranda can still trigger exits, defunding, and nonparticipation that change facts on the ground. Formality is not the same as consequence.",
    "A memo that strands diplomacy is policy wearing slippers.",
    [intl, crs, foia], "hard"),
  r("metals-national-security-always", ["Economy", "Foreign Policy"],
    "Every metals tariff is national security. End of story!",
    "National-security justifications can be real or elastic. Congress and CRS still get to ask which blast furnaces and which threats match which duty rates.",
    "If everything is security, oversight is the enemy. That is the tell.",
    [metals, crs, congress], "medium"),
  r("tribal-permits-states-rights", ["Democracy", "Culture Wars"],
    "States should control tribal permits, not activists!",
    "Federally recognized tribes have a government-to-government relationship with the United States. Presidential permit fights are federal Indian law, not a states-rights cosplay.",
    "Sovereignty is not a zoning variance you revoke for vibes.",
    [kickapoo, archives, congress], "hard"),
  r("sports-eos-parents-rights", ["Culture Wars", "Education"],
    "Sports executive orders protect parents' rights!",
    "Federal sports orders can override local athletic governance while Title IX and education civil-rights capacity shrink. Parents' rights branding does not audit the statute stack.",
    "If parents needed an EO to yell at a referee, the problem is elsewhere.",
    [game, wh, aclu], "medium"),
  r("industrial-policy-for-us-only", ["Economy", "Whataboutism"],
    "Industrial policy is socialism unless our guy does it!",
    "DPA tools, tariffs, and contracting directives are industrial policy regardless of the scarf color. Debate the targets and transparency, not the existence of the toolbox.",
    "Socialism is when the out-group uses the same authorities.",
    [dpa, metals, cbo], "easy"),
  r("foia-still-works-fine", ["Democracy", "Media"],
    "FOIA still works, stop whining about backlogs!",
    "Statutory rights without timely production are parchment promises. DOJ FOIA dashboards and GAO audits exist because delay is a known failure mode.",
    "A right you wait five years to use is a suggestion.",
    [foia, gao, fr], "medium", ["foia-backlog-not-news"]),
  r("civil-service-pay-flex-only", ["Democracy"],
    "Schedule Policy/Career is just HR modernization!",
    "Excepted-service conversions change removal protections. MSPB and OPM materials still describe merit-system principles that politicized firings threaten.",
    "HR modernization that makes loyalty the KPI is a purge with benefits paperwork.",
    [opm, mspb, crs], "medium", ["civil-service-deep-state"]),
  r("tariffs-beat-inflation", ["Economy"],
    "Tariffs will crush inflation for families!",
    "Import taxes can raise prices of goods and inputs. BLS CPI does not care about campaign poetry when washing machines and lumber cost more.",
    "Taxing imports is not a coupon for groceries.",
    [bls_cpi, metals, cbo], "easy"),
  r("intl-exits-save-money", ["Foreign Policy", "Economy"],
    "Leaving organizations saves taxpayer money!",
    "Dues are visible; lost cooperation on pandemics, standards, and security is not a line item until the crisis invoice arrives. CBO-style budgeting still asks about net risk.",
    "The cheapest membership fee is the one you pay before the disaster.",
    [intl, cbo, crs], "medium"),
  r("receipts-are-partisan", ["Media", "Whataboutism"],
    "Federal Register links are partisan gotchas!",
    "The Federal Register is the government's own journal. Quoting it is not spin; refusing to read it is.",
    "If primary sources feel partisan, check which team fears sunlight.",
    [fr, archives, loc], "easy"),
  r("kickapoo-border-security", ["Immigration", "Democracy"],
    "Denying the Kickapoo permit protects the border!",
    "Border security and tribal self-determination are not automatic opposites. A permit denial still requires a public rationale beyond vibes.",
    "Security without consultation is just domination with better lighting.",
    [kickapoo, crs, aclu], "hard"),
  r("game-day-distraction", ["Culture Wars", "Media"],
    "Critics only hate the football order because they hate America!",
    "Critics track presidential bandwidth. Sports EOs arriving beside Schedule Policy/Career and tariff stacks show agenda priorities, not team jerseys.",
    "America is not a halftime show for deregulation.",
    [game, wh, opens], "easy"),
  r("waiver-authority-normal", ["Democracy"],
    "Presidents waive statutes all the time!",
    "Some waiver clauses exist by design. Habitually leaning on them for industrial favorites still deserves GAO and congressional scrutiny.",
    "Common abuse is still abuse.",
    [dpa303, gao, congress], "medium"),
  r("appropriations-are-suggestions", ["Democracy", "Economy"],
    "Appropriations text is more like guidelines!",
    "The Constitution puts the purse in Congress. Implementation proclamations that cherry-pick invite impoundment-by-another-name fights.",
    "Guidelines is what kings call statutes.",
    [approps, congress, crs], "hard"),
  r("talent-pipeline-national-security", ["Democracy", "Foreign Policy"],
    "Critical pay for national-security talent is nonnegotiable!",
    "Competing for talent matters. So does keeping career analysts who can say no. Pay up without converting the civil service into a patronage ladder.",
    "Brain gain plus loyalty tests is how you lose the brains that dissent.",
    [critpay, mspb, gao], "medium"),
  r("housing-supply-only-story", ["Economy"],
    "Only supply matters - deregulate everything!",
    "Supply constraints are real. So are credit rules, investor purchases, zoning politics, and wage stagnation. HUD and Census data support a multi-cause diagnosis.",
    "One-knob economics breaks when the machine has twelve knobs.",
    [hud, census, bls], "medium", ["housing-eos-fix-prices"]),
  r("history-lex-concord-taxes", ["Culture Wars", "Education"],
    "Lexington and Concord were only about taxes!",
    "NPS histories cover arms seizures, imperial authority, and colonial resistance. Reducing 1775 to a modern tax meme flattens the record.",
    "If your founding story fits on a bumper sticker, it is incomplete.",
    [nps, archives, loc], "easy", ["history-classroom-indoctrination"]),
  r("little-bighorn-custer-hero", ["Culture Wars"],
    "Custer was a hero ambushed by savages!",
    "NPS interpretation of Little Bighorn treats it as a battle in a larger dispossession campaign. Hero mythology erased Indigenous strategy for generations.",
    "Losing a battle does not mint a saint.",
    [nps, archives, loc], "medium"),
  r("sacco-guilty-enough", ["Crime", "Democracy"],
    "Sacco and Vanzetti were guilty, case closed!",
    "Historians still debate evidence while agreeing nativism and Red Scare politics tainted the atmosphere. Case closed is how miscarriages market themselves.",
    "If the trial needs a century of defense briefs, it was not tidy.",
    [archives, loc, ap], "hard"),
  r("hiroshima-no-debate", ["Foreign Policy", "Culture Wars"],
    "Hiroshima debate is unpatriotic!",
    "National Archives documentation of the bombings exists so citizens can weigh military claims against civilian cost. Patriotism that bans archives is cosplay.",
    "If the decision was airtight, primary sources would not scare you.",
    [archives, nps, loc], "hard"),
  r("social-security-colorblind", ["Economy", "Culture Wars"],
    "Social Security was perfectly color-blind from day one!",
    "SSA history notes occupational exclusions that left many Black, domestic, and agricultural workers outside early coverage. Design details matter.",
    "Color-blind is easy to claim when the exclusions are occupational.",
    [archives, census, crs], "medium"),
  r("shelby-fixed-outdated-map", ["Elections", "Democracy"],
    "Shelby County just updated an outdated coverage map!",
    "Striking preclearance without a replacement formula predicted and produced new voting barriers. Brennan Center and election litigators tracked the wave in real time.",
    "Updating a map by deleting the referee is not modernization.",
    [brennan, scotus, crs], "medium"),
  r("citizens-united-free-speech", ["Elections", "Democracy"],
    "Citizens United is just free speech!",
    "Unlimited independent spending amplifies treasury-sized speakers. FEC disclosures and OpenSecrets charts show the flood after 2010.",
    "A megaphone the size of a bank balance is not a town hall.",
    [fec, opens, scotus], "easy"),
  r("gitmo-still-needed", ["Foreign Policy", "Crime"],
    "Guantanamo is still needed for the worst of the worst!",
    "Indefinite detention without normal trials created a due-process crisis the U.S. still pays for in courts and credibility. Worst-of-the-worst rhetoric is not a substitute for charges.",
    "If the evidence is solid, use a courtroom. If it is not, that is the scandal.",
    [aclu, crs, archives], "hard"),
  r("maria-nobody-could-help", ["Healthcare", "Democracy"],
    "Nobody could have helped Puerto Rico after Maria!",
    "Storms are natural; response capacity, colonial status, and aid logistics are policy. Death-toll disputes were about counting, not magic.",
    "Paper towels are not a logistics plan.",
    [ap, census, crs], "medium"),
  r("bush-gore-pure-law", ["Elections", "Courts"],
    "Bush v. Gore was pure law, not politics!",
    "A 5-4 halt to recounts decided the presidency. Equal-protection reasoning limited to that case is why critics call it politics in robes.",
    "When the remedy is stop counting, bring receipts, not incense.",
    [scotus, brennan, archives], "hard"),
  r("korean-war-footnote", ["Foreign Policy"],
    "Korea was a minor police action!",
    "National Archives military records document a devastating war without a peace treaty. Footnotes do not kill millions.",
    "If it still needs troops on a parallel today, it was not minor.",
    [archives, crs, ap], "medium"),
  r("marshall-plan-charity", ["Foreign Policy", "Economy"],
    "The Marshall Plan was pure charity!",
    "State Department histories describe strategic containment and market rebuilding alongside humanitarian aims. Strategy and solidarity can coexist.",
    "Charity that rebuilds allies is still strategy. Own it.",
    [archives, crs, loc], "easy"),
  r("chicago68-hippies-started", ["Culture Wars", "Democracy"],
    "Chicago 1968 was hippies attacking police!",
    "Televised police violence against demonstrators is documented across news archives and later commissions. Clubbing protesters is not a debate tournament.",
    "If your cut of the tape starts after the baton, you are editing.",
    [ap, loc, archives], "medium"),
  r("oil-shock-arab-greed", ["Economy", "Foreign Policy"],
    "1973 was just Arab greed!",
    "Federal Reserve history essays cover embargo politics, price shocks, and U.S. energy dependence. Monocausal greed stories skip policy choices.",
    "Scapegoats are cheaper than energy policy.",
    [bls_cpi, crs, archives], "medium"),
  r("iran-hostage-no-context", ["Foreign Policy"],
    "Iran took hostages because they hate freedom!",
    "The 1953 coup and the Shah's U.S. medical haven are part of the documentary record. Hatred slogans erase causation you can read in State Department histories.",
    "Amnesia is not a foreign policy.",
    [archives, crs, ap], "hard"),
  r("sandl-bad-apples", ["Economy"],
    "The S&L crisis was only a few bad apples!",
    "Federal Reserve history ties thrift deregulation and supervision failures to a taxpayer cleanup. Apples rot faster when you remove the fridge.",
    "Bailouts are how you meet the orchard.",
    [cbo, gao, archives], "medium"),
  r("naacp-outside-agitators", ["Culture Wars", "Democracy"],
    "The NAACP was outside agitators stirring trouble!",
    "Founded after racial terror organizing, the NAACP used litigation and advocacy against Jim Crow for decades. Agitator is what segregationists called plaintiffs.",
    "If equality needs a lawyer, the calm people were the problem.",
    [archives, loc, nps], "easy"),
  r("fed-deep-state-bank", ["Economy", "Democracy"],
    "The Federal Reserve is an illegal deep-state bank!",
    "Congress wrote the Federal Reserve Act in 1913 after panics. You can demand more accountability without pretending it spawned from a volcano.",
    "Statutory agencies are not lizard people. Read the act.",
    [congress, crs, gao], "medium"),
  r("gettysburg-healed-nation", ["Culture Wars", "Education"],
    "Gettysburg and the Address healed the nation!",
    "NPS sites teach the battle and the speech as unfinished work toward equality. Reconciliation myths that skip Black freedom fights are fan service.",
    "Two minutes of poetry did not finish Reconstruction.",
    [nps, archives, loc], "easy"),
  r("appomattox-ended-race-issue", ["Culture Wars", "Democracy"],
    "Appomattox ended the race issue!",
    "Surrender ended a field army. Black Codes, terror, and the Compromise of 1877 show the citizenship fight continued.",
    "A ceasefire is not a civil rights act.",
    [nps, archives, loc], "easy"),
  r("sumner-both-sides", ["Culture Wars", "Democracy"],
    "The caning of Sumner was both sides being violent!",
    "A House member beat an antislavery senator on the Senate floor. That is not a debate club tie.",
    "If your symmetry needs a cane, it is not symmetry.",
    [archives, congress, loc], "easy"),
  r("dorr-already-democracy", ["Democracy", "Elections"],
    "America already had democracy by the 1840s!",
    "The Dorr Rebellion erupted because Rhode Island's charter still restricted the vote. Even white working men had to fight for ballots.",
    "Finished democracies do not need rebellions over who counts.",
    [archives, loc, brennan], "medium"),
  r("yorktown-alone", ["Foreign Policy", "Culture Wars"],
    "America defeated Britain alone at Yorktown!",
    "NPS Yorktown interpretation centers the Franco-American alliance. Solo-hero myths erase French ships and troops.",
    "Allies are not a plot against exceptionalism.",
    [nps, archives, loc], "easy"),
  r("election-1800-smooth", ["Elections", "Democracy"],
    "1800 proves transfers of power are always smooth!",
    "House deadlock nearly broke the system. Peaceful transfer was improvisation under pressure, not destiny.",
    "A near-miss is not a warranty.",
    [archives, congress, loc], "medium"),
  r("cra1964-ended-racism", ["Culture Wars", "Democracy"],
    "The 1964 Civil Rights Act ended racism!",
    "The Act banned legal Jim Crow in public accommodations and employment. Enforcement fights and backlash never vanished from court dockets.",
    "A statute can ban segregation and still leave discrimination to kill.",
    [archives, brennan, scotus], "easy"),
  r("pass30-infinite-room", ["Whataboutism", "Media"],
    "There cannot possibly be more verifiable actions to log!",
    "Federal Register and White House feeds keep publishing. Pass 30 added DPA waivers, metals tariffs, treaty-exit memos, and tribal permit fights because the receipt printer did not jam.",
    "Infinite room is just another way to say the record is still live.",
    [fr, wh, gao], "easy", ["pass30-counts-distraction"]),
  r("primary-sources-elitist", ["Education", "Media"],
    "Demanding primary sources is elitist!",
    "Archives, CRS, GAO, and agency dashboards are public. Elitism is telling voters to trust vibes while the PDFs sit online.",
    "Literacy is not a coastal plot.",
    [archives, loc, fr], "easy"),
  r("severity-scores-made-up", ["Media", "Whataboutism"],
    "Severity scores are made-up activism!",
    "Scores summarize documented impact across sectors with linked sources. Argue the rubric; do not pretend the underlying EO vanished.",
    "If scoring offends you, try refuting the citation instead.",
    [fr, gao, crs], "easy", ["severity-scores-are-biased"]),
  r("both-sides-same-volume", ["Whataboutism"],
    "Both sides issue the same volume of executive actions!",
    "Volume can be compared. Content still differs: Schedule Policy/Career, citizenship-verification elections orders, and treaty-exit memos are not generic stationery.",
    "Counting pages without reading them is how both-sides cosplay works.",
    [wh, fr, crs], "medium", ["both-sides-eos-same"]),
];

{
  let src = readFileSync(file, "utf8");
  if (!src.includes("metals-tariffs-protect-jobs")) {
    src = src.replace(
      /\n\];\s*\n\nconst CATEGORY_SLUG_MAP/,
      "\n" + items.join("\n") + "\n];\n\nconst CATEGORY_SLUG_MAP"
    );
    writeFileSync(file, src);
    console.log("added", items.length, "rebuttals");
  } else console.log("rebuttals already present");
}
