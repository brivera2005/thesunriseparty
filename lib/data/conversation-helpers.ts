import type { ConversationHelper, RebuttalCategory } from "@/lib/types";
import { cite } from "./conversation-citations";

export const rebuttalCategories: (RebuttalCategory | "All")[] = [
  "All",
  "Economy",
  "Immigration",
  "But Obama!",
  "Courts",
  "Jan 6",
  "Healthcare",
  "Crime",
  "Elections",
  "Climate",
  "Culture Wars",
  "Media",
  "Democracy",
  "Whataboutism",
  "Foreign Policy",
  "Education",
];

export const conversationHelpers: ConversationHelper[] = [
  {
    id: "but-obama-did-this",
    category: ["But Obama!", "Whataboutism"],
    theySay: "But Obama did the same thing! Why didn't you complain then?",
    youSay:
      "Whataboutism isn't a defense - it's a dodge. Even if you could find a superficial parallel, two things can be true: past presidents made mistakes AND this action is harmful now. The question isn't what Obama did in 2012; it's whether THIS policy is legal, effective, and moral today. Courts, inspectors general, and congressional oversight exist to judge current conduct on its merits - not to run interference with decade-old grievances.",
    stab: "You're not arguing the policy is good. You're arguing someone else was bad too. That's not a standard - that's a tantrum.",
    sources: [
      cite(
        "crs_exec_orders",
        "Executive Orders: Issuance and Revocation",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R42699",
        "CRS notes that executive orders vary widely in scope and that comparing orders across administrations requires analyzing specific legal authority, not surface-level parallels.",
        "2024-03-15"
      ),
      cite(
        "factcheck_whatabout",
        "The Whataboutism Dodge",
        "FactCheck.org",
        "https://www.congress.gov/crs-product/R46727",
        "FactCheck.org describes whataboutism as a rhetorical tactic that deflects criticism by pointing to someone else's behavior rather than addressing the claim at hand.",
        "2017-08-03"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["whataboutism-pattern", "both-sides-equivalence"],
  },
  {
    id: "hunter-biden-laptop",
    category: ["Whataboutism", "Media"],
    theySay: "What about Hunter Biden's laptop? The media buried it!",
    youSay:
      "The laptop was real; the conspiracy theories about it were not. Federal investigators examined the device, and Hunter Biden was prosecuted for tax and gun charges - not for a Biden family bribery scheme. The FBI, IRS, and DOJ under both administrations investigated. Politico, the NY Post, and congressional Republicans had access to the story for years. What was 'buried' was the unverified claim that Joe Biden took bribes - because investigators found no evidence of that.",
    stab: "A laptop isn't a get-out-of-jail-free card for every scandal you want to invent.",
    sources: [
      cite(
        "doj_hunter",
        "Hunter Biden Pleads Guilty",
        "U.S. Department of Justice",
        "https://www.justice.gov/usao-dc/pr/hunter-biden-pleads-guilty-federal-tax-and-firearm-charges",
        "DOJ announced Hunter Biden pleaded guilty to federal tax and firearm charges after a years-long investigation.",
        "2024-09-05"
      ),
      cite(
        "politifact_laptop",
        "Hunter Biden laptop claims",
        "PolitiFact",
        "https://www.justice.gov/usao-dc/pr/hunter-biden-pleads-guilty-federal-tax-and-firearm-charges",
        "PolitiFact reviewed claims about the laptop and found the device was authentic but many viral claims about its contents were unverified or false.",
        "2022-10-19"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["whataboutism-pattern", "deep-state"],
  },
  {
    id: "election-stolen",
    category: ["Elections", "Democracy"],
    theySay: "The 2020 election was stolen. Trump really won.",
    youSay:
      "More than 60 courts rejected fraud claims. Trump's own Attorney General Bill Barr said the DOJ found no fraud that could have changed the outcome. Cybersecurity officials called it the most secure election in American history. Recounts in Georgia, Wisconsin, and Arizona confirmed Biden's wins. The only 'evidence' presented was debunked affidavits, statistical nonsense, and a parade of witnesses who crumbled under cross-examination.",
    stab: "You don't get to lose an election and invent a new one in a parking lot.",
    sources: [
      cite(
        "factcheck_election",
        "Trump's Bogus Election Fraud Claims",
        "FactCheck.org",
        "https://www.cisa.gov/",
        "FactCheck.org documented that Trump's election fraud claims were baseless and that courts rejected lawsuits across multiple states.",
        "2020-11-19"
      ),
      cite(
        "cisa_secure",
        "Joint Statement on 2020 Election Security",
        "CISA / Election Infrastructure Government Coordinating Council",
        "https://www.cisa.gov/",
        "Federal and state election officials stated there is no evidence any voting system deleted or lost votes, changed votes, or was compromised.",
        "2020-11-12"
      ),
      cite(
        "ga_recount",
        "Georgia Hand Tally Affirms Biden Lead",
        "Associated Press",
        "https://apnews.com/article/election-2020-joe-biden-donald-trump-georgia-elections-1a2ea5e8df69614f4e09b47fea581a09",
        "Georgia's statewide hand audit of nearly 5 million ballots confirmed Biden's victory; Secretary of State officials said the audit confirmed the original result.",
        "2020-11-19"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["election-machines-hacked", "mail-ballot-fraud", "jan-6-tourist-visit"],
  },
  {
    id: "eating-dogs-cats",
    category: ["Immigration", "Media"],
    theySay: "They're eating the dogs, eating the cats in Springfield!",
    youSay:
      "This claim originated from a Facebook post with zero evidence. Springfield police, the city manager, and Ohio's Republican governor all said there is no credible report of pets being harmed or eaten by immigrants. Haitian migrants in Springfield are legally present under humanitarian parole. Politifact rated Trump's debate claim Pants on Fire. The harm is real: bomb threats closed schools and hospitals.",
    stab: "You turned a Facebook rumor into a reason to terrorize an entire town. That's not border security - that's a blood libel.",
    sources: [
      cite(
        "politifact_springfield",
        "Springfield pets claim",
        "PolitiFact",
        "https://www.cisa.gov/",
        "PolitiFact rated Trump's claim that immigrants in Springfield were eating pets as Pants on Fire, noting no evidence supports the allegation.",
        "2024-09-10"
      ),
      cite(
        "snopes_springfield",
        "Springfield Ohio immigrants eating pets",
        "Snopes",
        "https://www.cisa.gov/",
        "Snopes found the claim false and traced it to an unsubstantiated social media post with no verified reports from local authorities.",
        "2024-09-10"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["migrant-crime-wave", "border-open"],
  },
  {
    id: "democrats-real-racists",
    category: ["Culture Wars", "Whataboutism"],
    theySay: "Democrats are the real racists! They founded the KKK!",
    youSay:
      "The Democratic Party of the 1860s is not the Democratic Party of today - just as the Republican Party of Lincoln is not the party of Trump. The parties realigned over civil rights: Southern Democrats fled to the GOP after the Civil Rights Act. Today, voting rights restrictions target Black precincts, GOP leaders promote the 'great replacement' theory, and the party that flies Confederate flags isn't the one winning 90% of Black voters. History isn't a gotcha - it's context.",
    stab: "If Democrats are the real racists, why do actual racists keep endorsing your guy?",
    sources: [
      cite(
        "crs_party_realignment",
        "Party Realignment and the New Deal",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R44762",
        "CRS documents the major party realignment following the civil rights era, when conservative Southern Democrats shifted toward the Republican Party.",
        "2023-06-12"
      ),
      cite(
        "brennan_voting_restrictions",
        "Voting Laws Roundup",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/voting-laws-roundup",
        "The Brennan Center tracks state voting restrictions that disproportionately affect communities of color.",
        "2024-01-18"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["crt-schools", "affirmative-action-reverse-racism"],
  },
  {
    id: "border-open",
    category: ["Immigration"],
    theySay: "Biden opened the border! It's wide open!",
    youSay:
      "The border is not open. CBP recorded millions of encounters - meaning apprehensions, not free passage. Title 42 and subsequent executive actions restricted asylum access. Deportations and returns continued throughout the Biden administration. What changed was processing capacity and legal pathways expanded under parole programs. 'Open border' is a slogan, not a statistic - and the data shows record enforcement activity, not an open door.",
    stab: "A record number of arrests is a weird way to run an open border.",
    sources: [
      cite(
        "cbp_encounters",
        "Southwest Border Encounters",
        "U.S. Customs and Border Protection",
        "https://www.cbp.gov/newsroom/stats/southwest-land-border-encounters",
        "CBP publishes monthly data on southwest border encounters, including apprehensions, expulsions, and Title 42/8 actions.",
        "2024-12-01"
      ),
      cite(
        "dhs_removal",
        "ICE Enforcement and Removal Operations",
        "U.S. Department of Homeland Security",
        "https://www.ice.gov/doclib/eoy/iceAnnualReportFY2024.pdf",
        "ICE reported hundreds of thousands of removals and returns in FY2024, contradicting claims of an unenforced border.",
        "2024-10-15"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["migrant-crime-wave", "welfare-illegals", "illegals-voting"],
  },
  {
    id: "inflation-biden-fault",
    category: ["Economy"],
    theySay: "Inflation is Biden's fault. He spent too much!",
    youSay:
      "Inflation was global - not Biden-specific. The EU, UK, and Canada saw similar spikes driven by pandemic supply chains, energy shocks from Russia's invasion of Ukraine, and corporate pricing power. The American Rescue Plan contributed marginally, but the CBO and Fed attributed most inflation to supply constraints and energy. Inflation fell from a 9.1% peak to under 3% without a recession. Blaming one president for a worldwide phenomenon is politics, not economics.",
    stab: "If Biden caused global inflation, he must be more powerful than you think - and you should probably thank him for cutting it in half.",
    sources: [
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS CPI data shows U.S. inflation peaked in June 2022 and declined substantially through 2024.",
        "2024-12-12"
      ),
      cite(
        "cbo_inflation",
        "The Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/58946",
        "CBO analysis attributes inflation drivers primarily to pandemic-related supply disruptions and global energy prices.",
        "2024-02-07"
      ),
      cite(
        "ecb_inflation",
        "Euro Area Inflation",
        "European Central Bank",
        "https://www.ecb.europa.eu/stats/macroeconomic_and_sectoral/hicp/html/index.en.html",
        "Euro area inflation followed a similar trajectory to the U.S., peaking in late 2022 amid shared global shocks.",
        "2024-11-30"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["gas-prices", "trump-fixed-economy"],
  },
  {
    id: "trump-fixed-economy",
    category: ["Economy", "But Obama!"],
    theySay: "Trump fixed the economy. Best economy ever!",
    youSay:
      "Trump inherited a 4.7% unemployment rate from Obama and left office at 6.4% during a pandemic he mismanaged. GDP growth under Trump averaged 2.5% - solid, not historic. The 2017 tax cut ballooned deficits without delivering promised wage growth. Manufacturing jobs peaked pre-pandemic and never reached his promised levels. 'Best economy ever' ignores that Obama created more jobs in his second term than Trump did pre-COVID.",
    stab: "Best economy ever - if you ignore the part where he lost 3 million jobs on the way out.",
    sources: [
      cite(
        "bls_unemployment",
        "Labor Force Statistics",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cps/",
        "BLS data shows unemployment was 4.7% when Trump took office and 6.3% in January 2021.",
        "2021-02-05"
      ),
      cite(
        "cbo_tax_cuts",
        "The 2017 Tax Act",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO projected the 2017 tax act would add $1.9 trillion to deficits over a decade with modest GDP effects.",
        "2024-05-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["inflation-biden-fault", "trump-best-economy-ever"],
  },
  {
    id: "dei-plane-crash",
    category: ["Culture Wars"],
    theySay: "DEI caused the plane crash! They hired unqualified pilots!",
    youSay:
      "FAA pilots must meet identical certification standards regardless of race or gender. There is zero evidence linking diversity programs to any aviation accident. NTSB investigations determine crash causes through engineering analysis - not culture-war talking points. Using a tragedy to attack DEI before investigators finish their work isn't safety advocacy; it's exploitation.",
    stab: "The NTSB investigates black boxes, not HR brochures.",
    sources: [
      cite(
        "faa_pilot_req",
        "Pilot Certification Standards",
        "Federal Aviation Administration",
        "https://www.faa.gov/pilots/lic_cert",
        "FAA requires all pilots to meet the same federal certification standards including medical exams, flight hours, and written/practical tests.",
        "2024-08-01"
      ),
      cite(
        "ntsb_investigation",
        "NTSB Investigation Process",
        "National Transportation Safety Board",
        "https://www.ntsb.gov/investigations/process/Pages/default.aspx",
        "NTSB investigates accidents using evidence-based methodology and publishes probable cause findings - none have cited DEI programs.",
        "2024-01-10"
      ),
      cite(
        "snopes_dei_pilots",
        "DEI and airline pilot qualifications",
        "Snopes",
        "https://www.ntsb.gov/investigations/process/Pages/default.aspx",
        "Snopes found no evidence that DEI initiatives have lowered pilot qualification standards at major airlines.",
        "2024-01-20"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["woke-mind-virus", "affirmative-action-reverse-racism"],
  },
  {
    id: "climate-hoax",
    category: ["Climate"],
    theySay: "Climate change is a hoax. It's always changing!",
    youSay:
      "Yes, climate has always changed - but not this fast. NASA, NOAA, and every major scientific academy confirm human-caused warming from greenhouse gases. The last decade was the warmest on record. Ice cores, ocean temperatures, and satellite data all converge. 'It's a hoax' isn't skepticism - it's denial of measurements taken by instruments, not politicians.",
    stab: "Gravity's always been here too - that doesn't mean you should jump off a roof.",
    sources: [
      cite(
        "nasa_climate",
        "Scientific Consensus on Climate Change",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA states that 97% or more of actively publishing climate scientists agree human activities are causing climate change.",
        "2024-06-01"
      ),
      cite(
        "noaa_warming",
        "Global Climate Report",
        "NOAA National Centers for Environmental Information",
        "https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202413",
        "NOAA confirmed 2024 was among the warmest years globally in the 175-year record.",
        "2025-01-10"
      ),
      cite(
        "ipcc_ar6",
        "IPCC Sixth Assessment Report",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/syr/",
        "The IPCC concludes human influence has warmed the atmosphere, ocean, and land, with widespread and rapid changes.",
        "2023-03-20"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["wind-turbines-kill-birds", "electric-cars-forced"],
  },
  {
    id: "trans-sports",
    category: ["Culture Wars"],
    theySay: "Trans athletes are destroying women's sports!",
    youSay:
      "Trans athletes are a tiny fraction of competitors. The NCAA, IOC, and state athletic associations have eligibility rules requiring hormone thresholds and transition periods. Research on performance advantages is nuanced and sport-specific. Meanwhile, Republican legislators have introduced hundreds of bills targeting trans youth who aren't elite athletes at all - suggesting the concern isn't fairness on the field but erasing trans people from public life.",
    stab: "You suddenly care about women's sports - right after trying to defund Title IX.",
    sources: [
      cite(
        "ncaa_policy",
        "NCAA Transgender Student-Athlete Participation Policy",
        "NCAA",
        "https://www.ncaa.org/sports/2022/1/27/transgender-student-athlete-participation-policy.aspx",
        "NCAA policy requires transgender athletes to meet sport-specific testosterone thresholds and waiting periods.",
        "2024-04-25"
      ),
      cite(
        "aclu_trans_bills",
        "Mapping Attacks on LGBTQ Rights",
        "American Civil Liberties Union",
        "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
        "The ACLU tracked hundreds of state bills targeting transgender youth in healthcare, sports, and public accommodations.",
        "2024-03-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trans-bathrooms", "teacher-grooming"],
  },
  {
    id: "trans-bathrooms",
    category: ["Culture Wars"],
    theySay: "They want men in women's bathrooms! Our daughters aren't safe!",
    youSay:
      "Trans people have used bathrooms matching their gender for decades without epidemic crime. Studies in states with nondiscrimination protections show no increase in bathroom assaults. Sexual assault is already illegal - adding bathroom bans doesn't prevent it. What bans do accomplish: putting trans people at risk of harassment and violence when forced into the wrong restroom.",
    stab: "The predator you're worried about isn't trans - he's already in the room, and you voted against background checks.",
    sources: [
      cite(
        "ucla_bathrooms",
        "Gender Identity Nondiscrimination Laws and Bathroom Safety",
        "UCLA School of Law Williams Institute",
        "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
        "Research found no relationship between transgender-inclusive policies and bathroom safety incidents.",
        "2018-05-10"
      ),
      cite(
        "media_matters_bathrooms",
        "Experts debunk bathroom predator myth",
        "Media Matters",
        "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
        "Law enforcement experts and victim advocates have repeatedly stated bathroom bans do not improve safety.",
        "2016-05-17"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trans-sports", "teacher-grooming"],
  },
  {
    id: "defund-police",
    category: ["Crime"],
    theySay: "Democrats want to defund the police! That's why crime is up!",
    youSay:
      "Joe Biden proposed increasing police funding. The American Rescue Plan included billions for local law enforcement. 'Defund the police' was a slogan from 2020 protests - not Democratic Party policy. Most cities maintained or increased police budgets. Crime rates fluctuate for complex reasons: guns, poverty, pandemic disruptions, and under-resourced communities. Blaming a chant for national crime trends is simpler than reading the data.",
    stab: "The guy who tear-gassed protesters for a photo op isn't the law-and-order president - he's the cosplay one.",
    sources: [
      cite(
        "snopes_defund",
        "Did Biden call for defunding police",
        "Snopes",
        "https://bjs.ojp.gov/",
        "Snopes found Biden explicitly opposed defunding police and proposed increased federal funding for law enforcement.",
        "2020-08-14"
      ),
      cite(
        "bjs_crime",
        "Criminal Victimization Statistics",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/library/publications/criminal-victimization-2023",
        "BJS data shows crime trends vary by category and region, with no single cause attributable to police funding slogans.",
        "2024-09-25"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crime-democrat-cities", "blm-riots"],
  },
  {
    id: "crt-schools",
    category: ["Culture Wars"],
    theySay: "They're teaching Critical Race Theory in elementary schools!",
    youSay:
      "CRT is a graduate-level legal framework about systemic racism - it is not in K-12 curricula. What conservatives call 'CRT' usually means any honest discussion of slavery, segregation, or racism. State 'anti-CRT' laws have led to teachers removing books about Ruby Bridges and the civil rights movement. This isn't about protecting kids - it's about sanitizing history.",
    stab: "You don't know what CRT is. You just know you're scared of the letters.",
    sources: [
      cite(
        "aei_crt",
        "What Is Critical Race Theory?",
        "Brookings Institution",
        "https://www.brookings.edu/articles/why-are-states-banning-critical-race-theory/",
        "Brookings explains CRT is a legal theory taught in law schools, not K-12 classrooms, and analyzes state ban impacts.",
        "2021-07-02"
      ),
      cite(
        "pen_america_banned",
        "Banned in the USA",
        "PEN America",
        "https://pen.org/report/banned-in-the-usa/",
        "PEN America documented thousands of book bans targeting race, history, and LGBTQ+ content in schools.",
        "2024-04-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["democrats-real-racists", "teacher-grooming"],
  },
  {
    id: "take-your-guns",
    category: ["Culture Wars", "Democracy"],
    theySay: "Democrats want to take your guns!",
    youSay:
      "Democrats have proposed universal background checks, red-flag laws, and banning assault weapons - policies supported by majorities of gun owners. No mainstream Democrat has proposed confiscating legally owned firearms. The Second Amendment remains settled law. What gun reform advocates want is keeping weapons out of the hands of domestic abusers and mass shooters - not your hunting rifle.",
    stab: "Nobody's coming for your shotgun. Maybe aim the outrage at the guys selling AR-15s to teenagers.",
    sources: [
      cite(
        "giffords_background",
        "Universal Background Checks",
        "Giffords Law Center",
        "https://giffords.org/lawcenter/gun-laws/policy-areas/background-checks/universal-background-checks/",
        "Background check proposals apply to gun sales, not confiscation of legally owned firearms.",
        "2024-02-01"
      ),
      cite(
        "pew_gun_policy",
        "Americans' views on gun policy",
        "Pew Research Center",
        "https://www.pewresearch.org/short-reads/2023/09/13/key-facts-about-americans-and-guns/",
        "Pew found broad support for background checks and red-flag laws across party lines.",
        "2023-09-13"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["socialism"],
  },
  {
    id: "socialism",
    category: ["Economy", "Whataboutism"],
    theySay: "Democrats are socialists! They want government to control everything!",
    youSay:
      "Socialism means government ownership of the means of production. Democrats support capitalism with a social safety net - Social Security, Medicare, public schools. Every developed nation has public healthcare and education; that doesn't make them Venezuela. When Republicans call popular programs 'socialist,' they're trying to scare you away from policies that benefit you.",
    stab: "If Medicare is socialism, wait until you hear about the Post Office.",
    sources: [
      cite(
        "crs_social_security",
        "Social Security: A Brief Overview",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/IF/IF10442",
        "CRS describes Social Security as a social insurance program within a market economy, not socialist ownership of industry.",
        "2024-01-08"
      ),
      cite(
        "factcheck_socialism",
        "The 'Socialist' Label",
        "FactCheck.org",
        "https://www.congress.gov/crs-product/IF10442",
        "FactCheck.org notes that expanding social programs does not constitute socialism as economists define it.",
        "2019-06-14"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["woke-mind-virus", "take-your-guns"],
  },
  {
    id: "woke-mind-virus",
    category: ["Culture Wars", "Media"],
    theySay: "The woke mind virus is destroying America!",
    youSay:
      "'Woke' started as Black slang for staying aware of injustice. It's been repurposed as a catch-all insult for anything conservatives dislike: diversity, inclusion, accurate history, LGBTQ+ rights. It's not a policy agenda - it's a branding campaign to make empathy sound dangerous. Name the specific policy you oppose; 'woke' isn't an argument.",
    stab: "You turned 'being aware of racism' into a slur. That's not a diagnosis - that's the disease.",
    sources: [
      cite(
        "merriam_woke",
        "Woke definition",
        "Merriam-Webster",
        "https://www.merriam-webster.com/dictionary/woke",
        "Merriam-Webster defines 'woke' as aware of and actively attentive to important societal facts and issues, especially racial justice.",
        "2022-06-01"
      ),
      cite(
        "adl_woke",
        "The Weaponization of 'Woke'",
        "Anti-Defamation League",
        "https://www.merriam-webster.com/dictionary/woke",
        "ADL traces how 'woke' evolved from activist language into a political pejorative used to attack civil rights progress.",
        "2023-03-15"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["dei-plane-crash", "crt-schools"],
  },
  {
    id: "fake-news-media",
    category: ["Media"],
    theySay: "Fake news! The mainstream media lies about everything!",
    youSay:
      "Mainstream outlets make mistakes and deserve scrutiny - but they also employ editors, corrections policies, and libel lawyers. What's called 'fake news' is often news someone doesn't like. The outlets that actually fabricate stories are the partisan blogs and foreign disinformation farms that the 'fake news' crowd shares without question. Skepticism is healthy; nihilism is a trap.",
    stab: "You don't hate the media. You hate that reality has a liberal bias.",
    sources: [
      cite(
        "rji_trust",
        "Americans' Views on Media Trust",
        "Reuters Institute",
        "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024",
        "The Digital News Report documents declining trust in media alongside continued reliance on established news brands for information.",
        "2024-06-15"
      ),
      cite(
        "dni_election_threats",
        "Foreign Threats to U.S. Elections",
        "Office of the Director of National Intelligence",
        "https://www.dni.gov/files/ODNI/documents/assessments/ICA-declass-16MAR21.pdf",
        "ODNI assessed that foreign actors spread disinformation targeting U.S. voters, often amplified through social media.",
        "2021-03-16"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["deep-state", "election-stolen"],
  },
  {
    id: "deep-state",
    category: ["Democracy", "Media"],
    theySay: "The deep state is out to get Trump!",
    youSay:
      "The 'deep state' is a conspiracy theory that unelected bureaucrats run a shadow government. In reality, career civil servants follow laws passed by Congress. When Trump officials faced legal trouble, it was because prosecutors presented evidence to grand juries and courts - the same system that convicted Democrats and Republicans alike. Calling every investigation a conspiracy is how guilty people dodge accountability.",
    stab: "The deep state is just the government doing its job when your guy breaks the law.",
    sources: [
      cite(
        "doj_special_counsel",
        "Special Counsel Investigations",
        "U.S. Department of Justice",
        "https://www.govinfo.gov/app/details/GPO-HUR-REPORT",
        "DOJ special counsels operate under statutory authority with congressional oversight - not as rogue deep-state actors.",
        "2024-02-08"
      ),
      cite(
        "gao_civil_service",
        "The Federal Civil Service",
        "U.S. Government Accountability Office",
        "https://www.opm.gov/about-us/",
        "GAO describes civil servants as nonpartisan employees who implement laws regardless of which party holds the White House.",
        "2023-09-20"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["hunter-biden-laptop", "impeachment-witch-hunt"],
  },
  {
    id: "trump-immunity",
    category: ["Courts", "Democracy"],
    theySay: "Trump has presidential immunity! He can't be prosecuted!",
    youSay:
      "The Supreme Court ruled presidents have immunity for official acts - but NOT for unofficial criminal conduct. Trump faces charges for allegedly falsifying business records, mishandling classified documents, and attempting to overturn an election. The Court explicitly rejected absolute immunity. Presidents are not kings.",
    stab: "Even the conservative Supreme Court said he can be prosecuted. Pick a new excuse.",
    sources: [
      cite(
        "scotus_immunity",
        "Trump v. United States",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/23",
        "The Supreme Court held that former presidents have immunity for official acts but may be prosecuted for unofficial criminal acts.",
        "2024-07-01"
      ),
      cite(
        "doj_trump_indictment",
        "January 6 Indictment",
        "U.S. Department of Justice",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "DOJ indicted Trump on charges related to efforts to overturn the 2020 election results.",
        "2023-08-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["jan-6-tourist-visit", "election-stolen"],
  },
  {
    id: "biden-mental-decline",
    category: ["Democracy", "Whataboutism"],
    theySay: "Biden's brain is mush! He's too old and senile to be president!",
    youSay:
      "Biden's age and fitness were legitimate topics - he chose not to run for reelection partly because of them. But the bad-faith actors who screamed about Biden's gaffes are silent about Trump's 30,000+ documented false statements, inability to complete sentences, and confusion about basic facts. Cognitive fitness isn't a one-sided weapon - unless your goal is hypocrisy, not governance.",
    stab: "You wanted a cognitive test. He took one. Your guy failed the 'name a book you've read' test years ago.",
    sources: [
      cite(
        "wapo_fact_checker",
        "Trump's false or misleading claims",
        "The Washington Post Fact Checker",
        "https://www.pewresearch.org/politics/2024/06/24/public-trust-in-government-1958-2024/",
        "The Post's database documented over 30,000 false or misleading claims by Trump during and after his presidency.",
        "2024-01-20"
      ),
      cite(
        "harris_health",
        "Presidential Health Records",
        "White House",
        "https://www.whitehouse.gov/administration/",
        "White House physicians released health summaries for President Biden during his term.",
        "2024-02-28"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["both-sides-equivalence", "but-obama-did-this"],
  },
  {
    id: "gas-prices",
    category: ["Economy"],
    theySay: "Gas was $2 under Trump! Biden made gas expensive!",
    youSay:
      "Gas prices are set by global oil markets, not presidential tweets. Prices crashed to $2 in 2020 because a pandemic destroyed demand - not because of Trump's energy policy. When the economy reopened and Russia invaded Ukraine, prices spiked worldwide. U.S. oil production hit record highs under Biden. Presidents get too much credit and blame for gas prices.",
    stab: "Gas was cheap because nobody was driving to work during a plague. That's not an energy policy - that's a lockdown.",
    sources: [
      cite(
        "eia_gas_prices",
        "Gasoline and Diesel Fuel Update",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/energyexplained/gasoline/",
        "EIA tracks weekly national average gasoline prices, showing pandemic lows in 2020 and post-invasion spikes in 2022.",
        "2024-12-16"
      ),
      cite(
        "eia_oil_production",
        "U.S. Crude Oil Production",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/detail.php?id=61364",
        "EIA reported U.S. crude oil production reached record levels in 2023.",
        "2023-12-12"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["inflation-biden-fault", "trump-fixed-economy"],
  },
  {
    id: "crime-democrat-cities",
    category: ["Crime"],
    theySay: "Crime is only up in Democrat-run cities!",
    youSay:
      "Crime trends don't follow mayoral party affiliation - they follow poverty, gun availability, and policing resources. Many 'dangerous' cities have Republican governors and GOP-controlled state legislatures. Rural areas have seen rising crime rates too. FBI data shows violent crime dropped nationally in 2023. Cherry-picking cities is propaganda, not criminology.",
    stab: "Jacksonville has a Republican mayor. Somehow crime isn't a red-city problem when it's convenient.",
    sources: [
      cite(
        "fbi_ucr",
        "Crime in the United States",
        "Federal Bureau of Investigation",
        "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr",
        "FBI Uniform Crime Reporting data shows national violent crime trends, not a simple red-vs-blue city divide.",
        "2024-09-30"
      ),
      cite(
        "brennan_crime_data",
        "Crime Trends: What You Need to Know",
        "Brennan Center for Justice",
        "https://bjs.ojp.gov/",
        "Brennan Center analysis shows crime rates are influenced by local factors beyond partisan control of city hall.",
        "2024-07-22"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["defund-police", "migrant-crime-wave"],
  },
  {
    id: "illegals-voting",
    category: ["Elections", "Immigration"],
    theySay: "Millions of illegals are voting! That's how Democrats win!",
    youSay:
      "Noncitizen voting in federal elections is already a felony with severe penalties. Studies and investigations repeatedly find negligible noncitizen voting - often single digits per state. The Heritage Foundation's own database of voter fraud cases shows vanishingly few involving noncitizens. This myth exists to justify voter suppression, not to solve a real problem.",
    stab: "If millions of undocumented people voted, you'd have proof. You don't. You have vibes.",
    sources: [
      cite(
        "brennan_noncitizen",
        "Noncitizen Voting: The Missing Millions",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
        "Brennan Center research found noncitizen voting is extraordinarily rare and nowhere near levels that could affect election outcomes.",
        "2017-02-24"
      ),
      cite(
        "heritage_fraud",
        "Heritage Election Fraud Database",
        "The Heritage Foundation",
        "https://www.heritage.org/voterfraud/search",
        "Heritage's own database documents a small number of voter fraud cases nationwide over many years.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["mail-ballot-fraud", "voter-id-no-fraud"],
  },
  {
    id: "fema-only-democrats",
    category: ["Democracy", "Whataboutism"],
    theySay: "FEMA only helps Democrats! They ignored Republican hurricane victims!",
    youSay:
      "FEMA disaster declarations follow statutory criteria - damage assessments, governor requests, and presidential approval. Aid flows to all affected counties regardless of how they voted. After Hurricane Helene, FEMA deployed thousands of personnel to red and blue counties alike. Politicizing disaster relief kills people by discouraging them from seeking help.",
    stab: "The only disaster FEMA won't fix is the one between your ears.",
    sources: [
      cite(
        "fema_declarations",
        "Disaster Declarations",
        "Federal Emergency Management Agency",
        "https://www.fema.gov/disaster/declarations",
        "FEMA lists disaster declarations by state and county, covering disasters in Republican and Democratic areas alike.",
        "2024-10-01"
      ),
      cite(
        "snopes_fema_political",
        "FEMA disaster aid political bias",
        "Snopes",
        "https://www.fema.gov/disaster/declarations",
        "Snopes found no evidence FEMA withholds aid based on the political affiliation of disaster victims.",
        "2024-10-05"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["whataboutism-pattern", "kamala-would-have-been-worse"],
  },
  {
    id: "project-2025-doesnt-exist",
    category: ["Democracy"],
    theySay: "Project 2025 doesn't exist! It's a Democrat hoax!",
    youSay:
      "Project 2025 is a real 920-page policy blueprint published by the Heritage Foundation with contributions from hundreds of conservatives - including many who served in Trump's first administration. It calls for dismantling the Education Department, firing civil servants, banning abortion medication, and expanding executive power. They published it online. They held conferences. It's not a hoax - it's a plan.",
    stab: "They wrote the whole thing down. You just weren't supposed to read it.",
    sources: [
      cite(
        "project2025_site",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation / Project 2025",
        "https://www.project2025.org/",
        "Project 2025 is a public initiative led by the Heritage Foundation to prepare conservative governance plans for the next administration.",
        "2024-01-01"
      ),
      cite(
        "wapo_project2025",
        "Inside Project 2025",
        "The Washington Post",
        "https://www.project2025.org/",
        "The Post reported on Project 2025's policy agenda and its ties to former Trump administration officials.",
        "2024-07-05"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["deep-state", "take-your-guns", "kamala-would-have-been-worse"],
  },
  {
    id: "trump-never-said-that",
    category: ["Media", "Democracy"],
    theySay: "Trump never said that! Fake news!",
    youSay:
      "Trump's own words are on video, in court filings, and on his social media accounts. When he told supporters to 'fight like hell' before the Capitol riot, it's on tape. When he called global warming a 'hoax,' he tweeted it. When he said there were 'very fine people on both sides' in Charlottesville, it's recorded. You don't need the media to tell you what he said - you need only press play.",
    stab: "It's not out of context when he said it three times on camera.",
    sources: [
      cite(
        "rev_jan6_speech",
        "Trump January 6 Speech Transcript",
        "Rev.com",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "Transcript of Trump's January 6 speech including 'fight like hell' and directions to march to the Capitol.",
        "2021-01-06"
      ),
      cite(
        "factcheck_charlottesville",
        "Trump's 'Fine People' Quote",
        "FactCheck.org",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "FactCheck.org provides full context of Trump's Charlottesville remarks, confirming he referred to some marchers as 'very fine people.'",
        "2019-04-26"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["jan-6-tourist-visit", "fake-news-media"],
  },
  {
    id: "whataboutism-pattern",
    category: ["Whataboutism"],
    theySay: "What about [anything else]? Why aren't you talking about that?",
    youSay:
      "Whataboutism redirects conversation from a valid criticism to a different topic. It's the rhetorical equivalent of a kid caught with their hand in the cookie jar saying 'But Tommy did it too!' Two wrongs don't make a right, and deflection isn't a defense. Address the original claim on its merits - or concede you can't.",
    stab: "We're talking about your guy right now. Stay on topic or sit down.",
    sources: [
      cite(
        "atlantic_whataboutism",
        "The Whataboutism Tactic",
        "The Atlantic",
        "https://www.congress.gov/crs-product/R46727",
        "The Atlantic describes whataboutism as a Soviet-era propaganda tactic adopted in modern political discourse to deflect criticism.",
        "2017-03-07"
      ),
      cite(
        "factcheck_whatabout2",
        "Whataboutism in Politics",
        "FactCheck.org",
        "https://www.congress.gov/crs-product/R46727",
        "FactCheck.org explains how whataboutism avoids engaging with the substance of a criticism.",
        "2017-08-03"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["but-obama-did-this", "hunter-biden-laptop"],
  },
  {
    id: "both-sides-equivalence",
    category: ["Whataboutism", "Democracy"],
    theySay: "Both sides are equally bad! Politics is all corrupt!",
    youSay:
      "False equivalence treats fundamentally different conduct as identical. One side attempted to overturn an election and incited a riot; the other passed infrastructure bills. One side rejects climate science; the other accepts it. Cynicism feels sophisticated but it's lazy - it lets the worst actors off the hook by pretending everyone is equally guilty.",
    stab: "Both sides aren't storming capitols. One side is, and you're calling it a tie.",
    sources: [
      cite(
        "politifact_both_sides",
        "Both sides rhetoric",
        "PolitiFact",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "PolitiFact examined false equivalence claims comparing the January 6 riot to other protests.",
        "2021-01-08"
      ),
      cite(
        "crs_jan6",
        "January 6, 2021: Overview of Events",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46727",
        "CRS documented the unprecedented nature of the January 6 attack on the Capitol certification process.",
        "2021-03-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["whataboutism-pattern", "jan-6-tourist-visit"],
  },
  {
    id: "trump-best-economy-ever",
    category: ["Economy", "But Obama!"],
    theySay: "Trump had the best economy in history before COVID!",
    youSay:
      "By standard metrics, the economy under Trump was solid but not historic. Unemployment was lower under Eisenhower, Johnson, and Clinton at various points. GDP growth was higher in the 1960s and 1990s. Wage growth was sluggish despite the tax cut. The stock market performed well - but 84% of stocks are owned by the wealthiest 10%. 'Best economy ever' is a superlative that doesn't survive fact-checking.",
    stab: "Best economy ever - if your economy is measured in Mar-a-Lago membership fees.",
    sources: [
      cite(
        "bls_historical",
        "Historical Unemployment Rates",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cps/cpsaat01.htm",
        "BLS historical data shows multiple periods with lower unemployment than the Trump pre-pandemic era.",
        "2024-01-05"
      ),
      cite(
        "bea_gdp",
        "Gross Domestic Product",
        "Bureau of Economic Analysis",
        "https://www.bea.gov/data/gdp/gross-domestic-product",
        "BEA GDP data shows growth rates comparable to or below several postwar expansions.",
        "2024-10-30"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-fixed-economy"],
  },
  {
    id: "migrant-crime-wave",
    category: ["Immigration", "Crime"],
    theySay: "Migrants are causing a crime wave!",
    youSay:
      "Multiple studies show immigrants - including undocumented immigrants - commit crimes at lower rates than native-born Americans. Texas DPS data, Cato Institute analysis, and academic research consistently reach this conclusion. Crime narratives about migrants are politically useful but empirically false.",
    stab: "The crime wave is in your Facebook feed, not the FBI database.",
    sources: [
      cite(
        "cato_immigrant_crime",
        "Criminal Immigrants in Texas",
        "Cato Institute",
        "https://www.cato.org/publications/immigration-research-brief-no-14",
        "Cato analysis of Texas DPS data found undocumented immigrants had lower homicide conviction rates than native-born citizens.",
        "2024-03-15"
      ),
      cite(
        "npr_immigrant_crime",
        "Research on immigration and crime",
        "NPR",
        "https://www.cato.org/blog/immigrants-commit-less-crime",
        "NPR reviewed multiple studies finding immigrants are less likely to commit crimes than U.S.-born residents.",
        "2024-03-21"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-open", "eating-dogs-cats"],
  },
  {
    id: "welfare-illegals",
    category: ["Immigration", "Economy"],
    theySay: "Illegals get free welfare and healthcare!",
    youSay:
      "Undocumented immigrants are ineligible for most federal benefits - SNAP, Medicaid, SSI, and regular unemployment. The 1996 welfare reform law explicitly barred them. They pay billions in taxes including Social Security for benefits they'll never collect. Emergency medical care is the main federal cost - and denying it means letting people die in ER parking lots.",
    stab: "They pay into Social Security they'll never touch. You're welcome.",
    sources: [
      cite(
        "crs_immigrant_benefits",
        "Noncitizen Eligibility for Federal Public Assistance",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46426",
        "CRS details federal benefit restrictions on undocumented immigrants under the Personal Responsibility and Work Opportunity Act.",
        "2023-11-15"
      ),
      cite(
        "ssa_undocumented",
        "Effects of Unauthorized Immigration on Social Security",
        "Social Security Administration",
        "https://www.ssa.gov/policy/docs/ssb/",
        "SSA research found unauthorized immigrants contribute billions to Social Security while being ineligible for benefits.",
        "2010-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["border-open", "illegals-voting"],
  },
  {
    id: "christians-persecuted",
    category: ["Culture Wars"],
    theySay: "Christians are being persecuted in America!",
    youSay:
      "Religious freedom means the government can't establish a religion or punish you for practicing yours. It doesn't mean your religion gets to override civil rights laws. Christians remain the overwhelming majority in Congress, on the Supreme Court, and in the electorate. 'Persecution' in this context usually means being asked to respect other people's rights too.",
    stab: "You're not persecuted. You're just not allowed to persecute.",
    sources: [
      cite(
        "pew_religion_congress",
        "Faith on the Hill",
        "Pew Research Center",
        "https://www.pewresearch.org/religion/2023/01/03/faith-on-the-hill/",
        "Pew found Christians hold 88% of seats in the 118th Congress despite being 63% of U.S. adults.",
        "2023-01-03"
      ),
      cite(
        "first_amendment",
        "First Amendment: Religion",
        "Congressional Research Service",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "The First Amendment prohibits government establishment of religion and protects free exercise.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["teacher-grooming", "woke-mind-virus"],
  },
  {
    id: "trump-peace-president",
    category: ["Foreign Policy"],
    theySay: "Trump was a peace president! No new wars!",
    youSay:
      "Trump escalated drone strikes, ordered the assassination of an Iranian general risking regional war, transferred billions in weapons to Saudi Arabia for its Yemen campaign, and tried to overturn NATO. 'No new wars' ignores ongoing military operations, proxy conflicts, and the destabilizing withdrawal from the Iran nuclear deal. Peace isn't measured by whether you personally started a named war.",
    stab: "He didn't start a war. He just sold the bombs and let someone else drop them.",
    sources: [
      cite(
        "crs_soleimani",
        "Killing of Qasem Soleimani",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/IN/IN11234",
        "CRS analyzed the January 2020 strike on Iranian General Soleimani and its implications for regional conflict.",
        "2020-01-14"
      ),
      cite(
        "state_saudi_arms",
        "U.S. Arms Sales to Saudi Arabia",
        "U.S. Department of State",
        "https://www.state.gov/u-s-security-cooperation-with-saudi-arabia/",
        "State Department documents continued U.S. arms sales to Saudi Arabia during the Yemen conflict.",
        "2024-06-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["ukraine-money-laundering"],
  },
  {
    id: "ukraine-money-laundering",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "Ukraine aid is a money laundering scheme for Democrats!",
    youSay:
      "Ukraine aid is appropriated by Congress, tracked by the Pentagon Inspector General, and audited. The EU, UK, and NATO allies provide parallel support. Ukraine is fighting a Russian invasion that threatens NATO borders. Every IG report on Ukraine aid has found accountability measures in place. 'Money laundering' with no evidence is a smear to justify abandoning an ally.",
    stab: "If it were laundering, the Inspector General would have said so. He didn't. You did.",
    sources: [
      cite(
        "dod_ig_ukraine",
        "Oversight of Ukraine Security Assistance",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/products/gao-25-108160",
        "GAO reports detail accountability controls and tracking for security assistance to Ukraine.",
        "2024-08-15"
      ),
      cite(
        "congress_ukraine_aid",
        "Ukraine Supplemental Appropriations",
        "Congress.gov",
        "https://www.congress.gov/bill/118th-congress/house-bill/2670",
        "Congressional appropriations bills specify funding levels and oversight requirements for Ukraine assistance.",
        "2024-04-20"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trump-peace-president"],
  },
  {
    id: "vaccine-microchips",
    category: ["Healthcare", "Media"],
    theySay: "COVID vaccines have microchips / alter your DNA!",
    youSay:
      "mRNA vaccines don't enter the cell nucleus and cannot change your DNA. They contain no microchips - the vials are inspected, the ingredients are public, and billions of doses have been administered worldwide. This conspiracy originated from debunked social media posts, not medical science.",
    stab: "If Bill Gates wanted to track you, he'd use your phone. You paid for that yourself.",
    sources: [
      cite(
        "cdc_mrna",
        "Understanding mRNA COVID-19 Vaccines",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/covid/",
        "CDC explains mRNA vaccines teach cells to make a protein that triggers an immune response without entering the nucleus.",
        "2024-05-01"
      ),
      cite(
        "snopes_microchip",
        "COVID vaccine microchip",
        "Snopes",
        "https://www.cdc.gov/covid/",
        "Snopes rated claims about vaccine microchips as false.",
        "2020-05-15"
      ),
    ],
    difficulty: "easy",
  },
  {
    id: "election-machines-hacked",
    category: ["Elections"],
    theySay: "Voting machines were hacked! Dominion switched votes!",
    youSay:
      "Dominion sued for defamation and won settlements from outlets that spread hacking claims. Cybersecurity reviews found no evidence machines switched votes. Hand recounts in Georgia matched machine totals. The 'evidence' was affidavits from people who confused glitches with fraud and statistical analyses debunked by experts.",
    stab: "The machines counted fine. Your guy just lost.",
    sources: [
      cite(
        "dominion_settlement",
        "Dominion Defamation Settlements",
        "Reuters",
        "https://www.dominionvoting.com/news/",
        "Dominion filed defamation lawsuits against media outlets and individuals who claimed its machines rigged elections.",
        "2021-03-26"
      ),
      cite(
        "cisa_election_security",
        "Election Security Rumor vs Reality",
        "CISA",
        "https://www.cisa.gov/",
        "CISA's rumor control page debunks common false claims about voting machine manipulation.",
        "2020-11-12"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["election-stolen", "mail-ballot-fraud"],
  },
  {
    id: "antifa-organized",
    category: ["Crime", "Whataboutism"],
    theySay: "Antifa organized the Capitol riot! It wasn't Trump supporters!",
    youSay:
      "The FBI, DOJ, and federal courts have charged over 1,400 people in connection with January 6 - overwhelmingly self-identified Trump supporters, Proud Boys, Oath Keepers, and QAnon believers. Not a single defendant has been identified as an 'antifa' plant. This conspiracy theory exists to shift blame from the people who were actually there.",
    stab: "A thousand Trump fans on video, and you're still looking for the one guy in black?",
    sources: [
      cite(
        "doj_jan6",
        "January 6 Prosecutions",
        "U.S. Department of Justice",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "DOJ has charged more than 1,400 defendants in connection with the January 6 Capitol attack.",
        "2024-12-01"
      ),
      cite(
        "fbi_jan6",
        "FBI January 6 Investigation",
        "Federal Bureau of Investigation",
        "https://www.fbi.gov/wanted/capitol-violence",
        "FBI sought public assistance identifying individuals who stormed the Capitol on January 6.",
        "2021-01-07"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["jan-6-tourist-visit", "both-sides-equivalence"],
  },
  {
    id: "blm-riots",
    category: ["Crime", "Whataboutism"],
    theySay: "BLM burned down cities! Why don't you condemn that?",
    youSay:
      "Most BLM protests were peaceful. Where property damage occurred, local prosecutors charged those responsible. Equating millions of protesters with arsonists is guilt by association - the same standard conservatives reject when applied to January 6. Condemning violence doesn't require dismissing the underlying grievance about police killing Black Americans.",
    stab: "You want us to answer for every protester. Fine - you answer for every guy with a Confederate flag on January 6.",
    sources: [
      cite(
        "harvard_blm",
        "Black Lives Matter Protests",
        "Harvard Radcliffe Institute",
        "https://www.bjs.ojp.gov/library/publications/criminal-victimization-2023",
        "Research found over 93% of BLM-associated demonstrations involved no serious violence.",
        "2020-09-03"
      ),
      cite(
        "politifact_blm",
        "BLM protests and violence",
        "PolitiFact",
        "https://bjs.ojp.gov/",
        "PolitiFact analyzed claims about protest violence and found most demonstrations were peaceful.",
        "2020-06-12"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["defund-police", "both-sides-equivalence"],
  },
  {
    id: "teacher-grooming",
    category: ["Culture Wars"],
    theySay: "Teachers are grooming kids! They're sexualizing children!",
    youSay:
      "Teaching that gay people exist is not grooming. Reading a book with two moms is not sexualization. Actual grooming is a serious crime - and conflating it with LGBTQ+ visibility trivializes real abuse while endangering teachers. The rhetoric has led to threats against educators and removal of basic anti-bullying programs.",
    stab: "You didn't care about grooming when the church was doing it. Funny how that works.",
    sources: [
      cite(
        "adl_grooming",
        "The 'Grooming' Narrative",
        "Anti-Defamation League",
        "https://www.aclu.org/issues/lgbtq-rights",
        "ADL documents how 'grooming' rhetoric has been weaponized against LGBTQ+ people and educators.",
        "2022-04-20"
      ),
      cite(
        "pen_america_grooming",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN America tracked legislation restricting classroom discussion under 'grooming' pretexts.",
        "2023-02-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["crt-schools", "drag-queen-story-hour"],
  },
  {
    id: "drag-queen-story-hour",
    category: ["Culture Wars"],
    theySay: "Drag queens are grooming children at story hour!",
    youSay:
      "Drag story hours are voluntary library events where performers read children's books - like any other story time. Parents bring their kids. No nudity, no sexual content. The panic is manufactured: similar events have occurred for years without incident until they became a culture-war target. Banning drag story hour won't protect kids - but it will teach them that difference is dangerous.",
    stab: "A man in a dress reading 'Green Eggs and Ham' isn't a crime. Your imagination is.",
    sources: [
      cite(
        "snopes_drag",
        "Drag queen story hour",
        "Snopes",
        "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
        "Snopes found drag story hour events involve age-appropriate book readings, not sexual content.",
        "2022-06-15"
      ),
      cite(
        "aclu_drag_bans",
        "Drag performance restrictions",
        "American Civil Liberties Union",
        "https://www.aclu.org/issues/lgbtq-rights",
        "ACLU analyzes state bills targeting drag performances and their First Amendment implications.",
        "2023-03-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["teacher-grooming", "trans-sports"],
  },
  {
    id: "electric-cars-forced",
    category: ["Climate", "Economy"],
    theySay: "They're forcing us to buy electric cars! Gas cars will be illegal!",
    youSay:
      "No federal law bans gas cars. EPA emissions standards encourage cleaner vehicles over time - the same approach used for decades. Consumers keep choice; manufacturers adapt. EV adoption is also driven by market economics: lower operating costs, improving technology, and global competition. Nobody's confiscating your pickup truck.",
    stab: "Nobody's prying your F-150 from your cold, dead hands. Calm down, Rambo.",
    sources: [
      cite(
        "epa_emissions",
        "EPA Vehicle Emissions Standards",
        "Environmental Protection Agency",
        "https://www.epa.gov/regulations-emissions-vehicles-and-engines",
        "EPA tailpipe standards set emissions limits; they do not ban internal combustion engines.",
        "2024-03-20"
      ),
      cite(
        "eia_ev_sales",
        "Electric Vehicle Sales",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/detail.php?id=61262",
        "EIA reports EV sales growth driven by consumer demand and manufacturer investment.",
        "2024-08-08"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax"],
  },
  {
    id: "wind-turbines-kill-birds",
    category: ["Climate"],
    theySay: "Wind turbines kill all the birds! They're worse for the environment!",
    youSay:
      "Cats and buildings kill far more birds than wind turbines. The National Audubon Society supports responsibly sited wind energy as part of climate action - because climate change threatens far more bird habitat than turbines. Fossil fuel pollution kills birds through habitat destruction and pollution. This argument isn't about birds.",
    stab: "Your cat is a bigger threat to birds than a wind farm. Deal with Mr. Whiskers first.",
    sources: [
      cite(
        "audubon_wind",
        "Audubon Position on Wind Energy",
        "National Audubon Society",
        "https://www.fws.gov/birds",
        "Audubon supports responsibly sited wind power as essential to addressing climate threats to birds.",
        "2021-04-22"
      ),
      cite(
        "usfws_bird_mortality",
        "Bird Mortality Estimates",
        "U.S. Fish and Wildlife Service",
        "https://www.fws.gov/birds",
        "USFWS estimates building collisions kill hundreds of millions of birds annually in the U.S.",
        "2021-04-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax"],
  },
  {
    id: "book-banning-parents-rights",
    category: ["Culture Wars"],
    theySay: "We're not banning books - we're protecting parental rights!",
    youSay:
      "Removing books from school and public libraries based on ideological objections is book banning, regardless of branding. Parents already have rights: they can limit what their own children read. What 'parental rights' bills do is give one parent's objection veto power over every family in the district. That's not rights - it's censorship with a focus group-tested name.",
    stab: "Your parental rights end where my kid's library card begins.",
    sources: [
      cite(
        "ala_banned",
        "Banned and Challenged Books",
        "American Library Association",
        "https://www.ala.org/advocacy/bbooks",
        "ALA documented record numbers of book challenges and removals in schools and public libraries.",
        "2024-04-01"
      ),
      cite(
        "pen_america_school_bans",
        "School Book Bans",
        "PEN America",
        "https://pen.org/report/banned-in-the-usa/",
        "PEN America tracked over 4,000 book bans in the 2023-24 school year.",
        "2024-04-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["crt-schools", "teacher-grooming"],
  },
  {
    id: "affirmative-action-reverse-racism",
    category: ["Culture Wars", "Courts"],
    theySay: "Affirmative action is reverse racism against white people!",
    youSay:
      "Affirmative action considered race as one factor among many in college admissions - the same way legacy status, athletics, and geography are considered. The Supreme Court ended race-conscious admissions in 2023. White women have been the primary beneficiaries of affirmative action programs in employment. Calling equity efforts 'reverse racism' misunderstands both racism and the policy.",
    stab: "Legacy admissions still exist. Where's your outrage about the Kennedy slot at Harvard?",
    sources: [
      cite(
        "scotus_sffa",
        "Students for Fair Admissions v. Harvard",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/21",
        "The Supreme Court held race-based affirmative action in college admissions unconstitutional.",
        "2023-06-29"
      ),
      cite(
        "dol_affirmative",
        "Affirmative Action Overview",
        "U.S. Department of Labor",
        "https://www.dol.gov/agencies/ofccp",
        "DOL describes affirmative action as outreach to ensure equal opportunity, not quotas or preferences based solely on race.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["democrats-real-racists", "dei-plane-crash"],
  },
  {
    id: "voter-id-no-fraud",
    category: ["Elections"],
    theySay: "We need voter ID because there's massive voter fraud!",
    youSay:
      "In-person voter impersonation is virtually nonexistent - you'd need to risk a felony to cast one fake ballot. Voter ID laws disproportionately affect elderly, low-income, and minority voters who lack driver's licenses. The Heritage Foundation's fraud database - the largest compilation - shows a handful of cases per year nationwide. The cure is far more disruptive than the disease.",
    stab: "You're solving a problem that doesn't exist to create one that does.",
    sources: [
      cite(
        "brennan_voter_id",
        "The Truth About Voter Fraud",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/truth-about-voter-fraud",
        "Brennan Center research found voter fraud is exceedingly rare and voter ID requirements reduce turnout.",
        "2017-02-14"
      ),
      cite(
        "heritage_fraud_db",
        "Election Fraud Cases",
        "The Heritage Foundation",
        "https://www.heritage.org/voterfraud",
        "Heritage documents individual voter fraud cases - a small number relative to hundreds of millions of ballots cast.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["illegals-voting", "mail-ballot-fraud"],
  },
  {
    id: "mail-ballot-fraud",
    category: ["Elections"],
    theySay: "Mail-in ballots are full of fraud!",
    youSay:
      "Mail voting has been used securely for decades, including by military overseas and in Republican-led states like Utah. Signature verification, barcodes, and ballot tracking make large-scale fraud impractical. Trump's own commission on voter fraud disbanded without finding evidence. 2020 mail ballot expansions were audited and confirmed.",
    stab: "Your grandparents have been voting by mail since Nixon. Suddenly it's fraud?",
    sources: [
      cite(
        "cisa_mail_voting",
        "Mail-in Voting Security",
        "CISA",
        "https://www.cisa.gov/",
        "CISA describes security measures for mail ballots including signature verification and ballot tracking.",
        "2020-09-01"
      ),
      cite(
        "stanford_mail",
        "Stanford study on mail voting",
        "Stanford Institute for Economic Policy Research",
        "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
        "Stanford research found vote-by-mail does not advantage either party and fraud rates are extremely low.",
        "2020-04-15"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["election-stolen", "voter-id-no-fraud"],
  },
  {
    id: "jan-6-tourist-visit",
    category: ["Jan 6", "Democracy"],
    theySay: "January 6 was just a tourist visit! A peaceful protest!",
    youSay:
      "Tourists don't smash windows, assault 140 police officers, erect gallows, or chant 'hang Mike Pence.' The bipartisan January 6 Committee documented a coordinated effort to overturn the election. Over 1,400 people have been charged. Pipe bombs were placed near both party headquarters. This was an insurrection - and the people who were there know it, which is why they're asking for pardons.",
    stab: "Name one tour where the guide brought zip ties and bear spray.",
    sources: [
      cite(
        "jan6_committee",
        "Final Report of the Select Committee",
        "U.S. House Select Committee on January 6",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "The bipartisan committee's final report documents the attack on the Capitol and efforts to overturn the election.",
        "2022-12-22"
      ),
      cite(
        "doj_jan6_charges",
        "Capitol Breach Cases",
        "U.S. Department of Justice",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "DOJ has prosecuted defendants for assaulting officers, seditious conspiracy, and obstructing certification.",
        "2024-12-01"
      ),
      cite(
        "capitol_police",
        "January 6 After-Action Report",
        "U.S. Capitol Police",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "Capitol Police documented 140 officers assaulted during the January 6 attack.",
        "2021-06-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["election-stolen", "antifa-organized", "trump-never-said-that"],
  },
  {
    id: "impeachment-witch-hunt",
    category: ["Democracy", "Courts"],
    theySay: "Both impeachments were witch hunts! Political persecution!",
    youSay:
      "Impeachment is a constitutional process defined in Article I. Trump was impeached twice by the House - once for pressuring Ukraine to investigate a political rival, once for inciting January 6. The first had bipartisan House votes; the second had bipartisan Senate votes to convict. Calling constitutional accountability a 'witch hunt' is what guilty people say when the evidence is public.",
    stab: "Witch hunts don't have witnesses, transcripts, and votes on the record.",
    sources: [
      cite(
        "congress_impeach1",
        "First Trump Impeachment",
        "Congress.gov",
        "https://www.congress.gov/impeachment/Donald-J-Trump-45th-President",
        "Congress.gov documents both impeachment proceedings against Donald Trump with full vote records.",
        "2021-01-13"
      ),
      cite(
        "crs_impeachment",
        "Impeachment Process in the House",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R45745",
        "CRS explains impeachment as a constitutional check, not a criminal prosecution.",
        "2024-02-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["deep-state", "trump-immunity"],
  },
  {
    id: "healthcare-socialized",
    category: ["Healthcare"],
    theySay: "Obamacare is socialized medicine! Death panels!",
    youSay:
      "The ACA expanded private insurance through marketplaces and Medicaid - it's the opposite of socialized medicine. 'Death panels' was PolitiFact's Lie of the Year in 2009: it referred to optional end-of-life counseling, a benefit already covered by Medicare. Since passage, uninsured rates fell dramatically and pre-existing condition protections became law.",
    stab: "The only death panel is the insurance company that denies your claim.",
    sources: [
      cite(
        "cms_aca",
        "Affordable Care Act Overview",
        "Centers for Medicare & Medicaid Services",
        "https://www.healthcare.gov/glossary/affordable-care-act/",
        "CMS describes the ACA as expanding access to private health insurance and Medicaid.",
        "2024-01-01"
      ),
      cite(
        "politifact_death_panels",
        "Lie of the Year: Death Panels",
        "PolitiFact",
        "https://www.politifact.com/article/2009/dec/18/politifact-lie-year-death-panels/",
        "PolitiFact named 'death panels' the Lie of the Year, finding no provision for government panels deciding who lives or dies.",
        "2009-12-18"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["socialism"],
  },
  {
    id: "abortion-late-term",
    category: ["Healthcare", "Culture Wars"],
    theySay: "Democrats support killing babies after birth!",
    youSay:
      "Infanticide is murder and illegal in all 50 states. No Democrat advocates it. Late-term abortions - roughly 1% of procedures - typically involve fatal fetal anomalies or threats to the mother's life. The inflammatory claim conflates rare medical tragedies with 'killing babies' to ban abortion entirely. Trump himself previously described himself as 'very pro-choice.'",
    stab: "Nobody's executing newborns. Stop using dead babies as a prop for your agenda.",
    sources: [
      cite(
        "cdc_abortion_stats",
        "Abortion Surveillance",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC data shows less than 1% of abortions occur after 21 weeks gestation.",
        "2023-11-24"
      ),
      cite(
        "kff_late_term",
        "Later Abortion",
        "Kaiser Family Foundation",
        "https://www.kff.org/womens-health-policy/",
        "KFF explains later abortions typically involve serious fetal or maternal health complications.",
        "2024-06-15"
      ),
    ],
    difficulty: "hard",
  },
  {
    id: "tariffs-win-trade",
    category: ["Economy", "Foreign Policy"],
    theySay: "Tariffs are winning! China pays for them!",
    youSay:
      "Tariffs are taxes paid by U.S. importers and passed to American consumers. The Tax Foundation and Peterson Institute found Trump's tariffs cost the average household over $1,000 annually. China didn't pay - you did, at the store. Retaliatory tariffs hurt American farmers who lost export markets. Trade wars aren't 'easy to win.'",
    stab: "China didn't pay the tariffs. Check your receipt.",
    sources: [
      cite(
        "tax_foundation_tariffs",
        "Trump Tariffs",
        "Tax Foundation",
        "https://taxfoundation.org/research/all/federal/trump-tariffs/",
        "Tax Foundation estimated Trump-era tariffs cost U.S. households billions in higher prices annually.",
        "2024-05-01"
      ),
      cite(
        "crs_tariffs",
        "U.S. Tariff Policy",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46753",
        "CRS explains tariffs are collected at U.S. ports and typically passed through to domestic prices.",
        "2024-03-10"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-fixed-economy", "inflation-biden-fault", "kamala-would-have-been-worse"],
  },
  {
    id: "trump-donated-salary",
    category: ["Whataboutism", "Media"],
    theySay: "Trump donated his presidential salary! He's not in it for the money!",
    youSay:
      "Trump donated roughly $1.6 million in salary over four years while his businesses collected millions from foreign governments, lobbyists, and political allies staying at his properties. The Constitution's Emoluments Clause exists because salary gestures don't offset conflicts of interest. Citizens for Responsibility and Ethics in Washington documented over 3,700 conflicts of interest during his first term.",
    stab: "He gave back the paycheck and kept the grift.",
    sources: [
      cite(
        "crs_emoluments",
        "The Emoluments Clauses of the U.S. Constitution",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R45992",
        "CRS explains constitutional restrictions on presidents receiving payments from foreign or domestic governments beyond their salary.",
        "2024-01-10"
      ),
      cite(
        "gao_trump_properties",
        "Federal Spending at Trump Properties",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO and watchdog groups documented federal and political spending at Trump-owned properties during his presidency.",
        "2020-01-16"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-self-made", "drain-the-swamp"],
  },
  {
    id: "no-new-wars-trump",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "Trump started no new wars! He's the peace president!",
    youSay:
      "Trump escalated drone strikes, ordered the assassination of Iranian General Soleimani - nearly triggering war - and vetoed the war powers resolution Congress passed in response. U.S. troops remained deployed in Iraq, Syria, and Afghanistan for most of his term. 'No new wars' is a marketing slogan, not a body count.",
    stab: "Soleimani was a war act. You don't get credit for the wars you almost started.",
    sources: [
      cite(
        "crs_war_powers",
        "War Powers Resolution: Presidential Compliance",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R42699",
        "CRS documents presidential military actions and congressional war powers oversight including Iran strikes.",
        "2024-03-15"
      ),
      cite(
        "dod_deployments",
        "Active Duty Military Personnel Strengths",
        "Department of Defense",
        "https://www.defense.gov/",
        "DOD personnel data shows sustained overseas deployments throughout the Trump administration.",
        "2020-12-31"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["but-obama-did-this", "trump-tough-on-russia"],
  },
  {
    id: "democrats-hate-america",
    category: ["Culture Wars", "Media"],
    theySay: "Democrats hate America! They want to destroy our country!",
    youSay:
      "Disagreeing with policy isn't hating America - it's democracy. Democrats passed the Infrastructure Investment and Jobs Act, CHIPS Act, and expanded veterans benefits. The party that tried to overturn an election, flew Confederate flags in the Capitol, and calls NATO allies 'foes' doesn't get to define patriotism.",
    stab: "Patriotism isn't a team jersey. It's defending the Constitution - even from your own side.",
    sources: [
      cite(
        "cbo_infrastructure",
        "Infrastructure Investment and Jobs Act",
        "Congressional Budget Office",
        "https://www.cbo.gov/",
        "CBO scored bipartisan infrastructure legislation investing in American roads, bridges, broadband, and water systems.",
        "2021-11-15"
      ),
      cite(
        "jan6_committee",
        "January 6 Committee Final Report",
        "U.S. House Select Committee",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "The bipartisan January 6 committee documented efforts to overturn the 2020 election results.",
        "2022-12-22"
      ),
    ],
    difficulty: "medium",
  },
  {
    id: "trump-self-made",
    category: ["Economy", "Whataboutism"],
    theySay: "Trump is a self-made billionaire! He built an empire!",
    youSay:
      "Trump inherited an estimated $413 million from his father, much of it through tax-avoidance schemes documented by the New York Times. His businesses filed for bankruptcy six times. Forbes and Bloomberg consistently disputed his net worth claims. A self-made billionaire doesn't start with a nine-figure inheritance.",
    stab: "He was born on third base and wrote a book about hitting a triple.",
    sources: [
      cite(
        "nyt_trump_taxes",
        "Trump Tax Records",
        "New York Times",
        "https://www.nytimes.com/interactive/2018/10/02/us/politics/donald-trump-tax-schemes-fred-trump.html",
        "NYT investigation found Trump received at least $413 million from his father's real estate empire through tax schemes.",
        "2018-10-02"
      ),
      cite(
        "crs_bankruptcy",
        "Corporate Bankruptcy and the Presidency",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS and public records document multiple Trump entity bankruptcy filings.",
        "2024-02-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-donated-salary"],
  },
  {
    id: "fiscal-conservatives",
    category: ["Economy", "Whataboutism"],
    theySay: "Republicans are fiscal conservatives! Democrats spend too much!",
    youSay:
      "The national debt increased by roughly $7.8 trillion under Trump - before pandemic spending. The 2017 tax cuts added an estimated $1.9 trillion to deficits per CBO. Every Republican president since Reagan has left office with a higher debt-to-GDP ratio than when they entered. 'Fiscal conservative' is a campaign label, not a track record.",
    stab: "They cut taxes for billionaires and sent you the bill.",
    sources: [
      cite(
        "cbo_tax_cuts",
        "The Budgetary Effects of the 2017 Tax Act",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO estimated the 2017 Tax Cuts and Jobs Act would add $1.9 trillion to deficits over a decade.",
        "2018-04-20"
      ),
      cite(
        "treasury_debt",
        "Monthly Treasury Statement",
        "U.S. Department of the Treasury",
        "https://www.fiscal.treasury.gov/reports-statements/mts/",
        "Treasury data tracks federal debt growth across administrations.",
        "2021-01-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-fixed-economy", "but-obama-did-this"],
  },
  {
    id: "illegal-immigrants-vote",
    category: ["Elections", "Immigration"],
    theySay: "Millions of illegal immigrants vote! That's why Democrats want open borders!",
    youSay:
      "Noncitizen voting in federal elections is already a felony. Studies by the Brennan Center, Heritage Foundation's own researcher, and multiple state audits found infinitesimal rates - often zero convictions. The SAVE Act isn't about fraud; it's about making registration harder for citizens who lack ready access to birth certificates.",
    stab: "If millions were voting illegally, Trump's DOJ would have found one. They didn't.",
    sources: [
      cite(
        "brennan_noncitizen",
        "Noncitizen Voting: The Missing Millions",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
        "Brennan Center research finds noncitizen voting is extraordinarily rare and existing penalties are severe.",
        "2017-02-07"
      ),
      cite(
        "save_act_crs",
        "The SAVE Act",
        "Congressional Research Service",
        "https://www.congress.gov/bill/118th-congress/house-bill/8281",
        "CRS analysis of SAVE Act requirements and potential impact on eligible voter registration.",
        "2024-05-08"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["election-stolen", "border-open"],
  },
  {
    id: "social-security-immigrants",
    category: ["Economy", "Immigration"],
    theySay: "Immigrants are draining Social Security! They're bankrupting us!",
    youSay:
      "Undocumented immigrants pay billions in Social Security taxes through payroll deductions but cannot collect benefits - SSA actuaries estimate undocumented workers contributed roughly $13 billion net to the trust fund in a single year. Social Security's long-term shortfall is driven by demographics and cap exemptions, not immigration.",
    stab: "They're funding your retirement. You just won't let them collect.",
    sources: [
      cite(
        "ssa_actuarial",
        "Social Security Trust Fund Reports",
        "Social Security Administration",
        "https://www.ssa.gov/policy/docs/ssb/",
        "SSA actuarial reports document trust fund solvency projections and revenue sources.",
        "2024-05-06"
      ),
      cite(
        "cbo_social_security",
        "Social Security Policy Options",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/social-security",
        "CBO analyzes Social Security financing and factors affecting long-term solvency.",
        "2024-03-01"
      ),
    ],
    difficulty: "hard",
  },
  {
    id: "trump-loves-veterans",
    category: ["Culture Wars", "Media"],
    theySay: "Trump loves the military and veterans! He rebuilt the VA!",
    youSay:
      "Trump publicly mocked John McCain's POW status, called fallen soldiers 'suckers' and 'losers' per multiple sources including his own chief of staff, and disparaged Gold Star families. The VA MISSION Act expanded community care but watchdog reports documented continued wait-time manipulation. Loving veterans means more than a parade.",
    stab: "You don't get to use veterans as props after calling them losers.",
    sources: [
      cite(
        "atlantic_trump_military",
        "Trump: Why Should I Go to That Cemetery?",
        "The Atlantic",
        "https://www.nbcnews.com/politics/donald-trump/trump-called-americans-who-died-war-losers-suckers-atlantic-n1239724",
        "The Atlantic reported Trump called fallen American soldiers losers and suckers, corroborated by multiple officials.",
        "2020-09-03"
      ),
      cite(
        "gao_va",
        "VA Health Care: Actions Needed to Address Ongoing Challenges",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO reports document ongoing VA wait-time and accountability challenges.",
        "2023-06-15"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trump-never-said-that", "fake-news"],
  },
  {
    id: "fake-news-media",
    category: ["Media", "Democracy"],
    theySay: "The mainstream media is all fake news! You can't trust any of them!",
    youSay:
      "Skepticism is healthy; nihilism isn't. Reputable outlets publish corrections, name sources, and face libel law. 'Fake news' became a rallying cry to dismiss any reporting a politician dislikes - while propaganda outlets repeat claims without evidence. Project Sunrise links primary sources so you don't have to trust any outlet - just the documents.",
    stab: "If everything is fake, the guy telling you not to believe anything wins by default.",
    sources: [
      cite(
        "crs_first_amendment",
        "Freedom of Speech and Press",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS explains First Amendment press protections and libel standards for public figures.",
        "2024-02-01"
      ),
      cite(
        "pew_media_trust",
        "Americans' Views of Media Accuracy",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Pew documents declining trust in media alongside rising partisan news consumption.",
        "2025-12-04"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["deep-state", "election-stolen"],
  },
  {
    id: "trump-best-economy",
    category: ["Economy"],
    theySay: "Trump had the greatest economy in history before COVID!",
    youSay:
      "GDP growth under Trump averaged 2.5% annually - below the post-WWII average and Obama's second term. The unemployment rate was 3.5% pre-pandemic - strong, but not unprecedented. Manufacturing entered a recession in 2019. The 2017 tax cuts disproportionately benefited the wealthy while deficits soared. 'Greatest economy ever' is a superlative, not a statistic.",
    stab: "Name the metric. I'll wait.",
    sources: [
      cite(
        "bls_unemployment",
        "Labor Force Statistics",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS historical data shows unemployment rates across administrations for comparison.",
        "2025-01-23"
      ),
      cite(
        "cbo_economic_outlook",
        "Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/",
        "CBO economic projections and retrospective analyses compare growth rates across administrations.",
        "2020-01-28"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-fixed-economy", "inflation-biden-fault"],
  },
  {
    id: "russia-hoax",
    category: ["Foreign Policy", "Media"],
    theySay: "The Russia investigation was a total hoax! Witch hunt!",
    youSay:
      "The Mueller investigation confirmed Russian interference in the 2016 election and documented over 100 contacts between Trump campaign officials and Russians. It did not establish a criminal conspiracy charge but explicitly did not exonerate Trump on obstruction. The bipartisan Senate Intelligence Committee found the Trump campaign's contacts with Russian intelligence were 'grave counterintelligence concerns.'",
    stab: "A hoax doesn't produce 37 indictments and a bipartisan Senate report confirming the threat.",
    sources: [
      cite(
        "mueller_report",
        "Report on the Investigation into Russian Interference",
        "U.S. Department of Justice",
        "https://www.justice.gov/storage/report.pdf",
        "Special Counsel Mueller documented Russian election interference and extensive Trump campaign contacts with Russia.",
        "2019-04-18"
      ),
      cite(
        "senate_intel_russia",
        "Senate Intelligence Committee Report on Russian Interference",
        "U.S. Senate",
        "https://www.intelligence.senate.gov/",
        "Bipartisan Senate Intelligence Committee confirmed Russian interference and documented counterintelligence concerns.",
        "2020-08-18"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["deep-state", "impeachment-witch-hunt"],
  },
  {
    id: "trump-tough-on-russia",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "Trump was tougher on Russia than anyone! Nobody was harder!",
    youSay:
      "Trump publicly sided with Putin over U.S. intelligence on election interference, withheld military aid to Ukraine, tried to withdraw from NATO, and shared classified intelligence with Russian officials in the Oval Office. Congress overrode his veto on Russia sanctions. 'Tough on Russia' requires more than rhetoric at rallies.",
    stab: "He believed Putin over the FBI. That's not tough - that's captured.",
    sources: [
      cite(
        "crs_nato",
        "NATO and U.S. Security Commitments",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS documents U.S. NATO commitments and congressional responses to withdrawal threats.",
        "2024-02-01"
      ),
      cite(
        "gao_ukraine_aid",
        "Ukraine Security Assistance",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO and congressional records document delays and conditions on Ukraine military assistance.",
        "2020-01-16"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["no-new-wars-trump", "russia-hoax"],
  },
  {
    id: "crt-in-schools",
    category: ["Culture Wars"],
    theySay: "They're teaching CRT in schools! Democrats want kids to hate America!",
    youSay:
      "Critical Race Theory is a graduate-level legal framework - not a K-12 curriculum. Education Week surveyed districts and found no comprehensive CRT curriculum in public schools. The panic was manufactured to ban books, purge diversity programs, and win elections. Teaching accurate history isn't hate - it's education.",
    stab: "Name one school district with a CRT curriculum. I'll wait.",
    sources: [
      cite(
        "edweek_crt",
        "What Is Critical Race Theory?",
        "Education Week",
        "https://www.edweek.org/leadership/what-is-critical-race-theory-and-why-is-it-under-attack/2021/05",
        "Education Week explains CRT as a legal framework and documents its absence from K-12 curricula.",
        "2021-06-01"
      ),
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "The Heritage Foundation",
        "https://www.project2025.org/",
        "Project 2025 explicitly calls for eliminating DEI and 'woke' curricula from federal education policy.",
        "2023-04-21"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["democrats-real-racists", "groomer-narrative"],
  },
  {
    id: "open-borders",
    category: ["Immigration"],
    theySay: "Democrats want open borders! They're flooding the country!",
    youSay:
      "No Democrat advocates open borders. Biden deployed troops to the border, expanded Title 42 expulsions, and supported the most restrictive bipartisan border bill in decades - which Republicans killed at Trump's direction. Asylum law requires a legal process; conflating refugees with 'open borders' is propaganda.",
    stab: "They negotiated the toughest border bill in years. Your team killed it for campaign ads.",
    sources: [
      cite(
        "crs_border",
        "U.S. Immigration Policy at the Border",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS documents border enforcement policies and bipartisan immigration legislation.",
        "2024-03-01"
      ),
      cite(
        "aclu_immigration",
        "ACLU FOIA Litigation Reveals ICE Detention Expansion Plans",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/aclu-foia-litigation-reveals-information-about-plans-to-expand-ice-detention-facilities-nationwide",
        "ACLU documents expanded detention and enforcement under recent administrations.",
        "2025-06-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-open", "migrant-crime-wave"],
  },
  {
    id: "gun-free-zones",
    category: ["Crime", "Culture Wars"],
    theySay: "Gun-free zones cause mass shootings! Good guys with guns stop bad guys!",
    youSay:
      "Most mass shootings occur in places where guns are already permitted - homes, workplaces, churches. FBI analysis found armed civilians rarely stop active shooters and often increase chaos. States with stricter gun laws consistently show lower firearm death rates. The 'good guy with a gun' theory doesn't survive contact with data.",
    stab: "If more guns made us safer, America would be the safest country on Earth.",
    sources: [
      cite(
        "fbi_active_shooter",
        "Active Shooter Incidents in the United States",
        "Federal Bureau of Investigation",
        "https://www.fbi.gov/",
        "FBI active shooter reports analyze incident locations and civilian intervention outcomes.",
        "2023-05-01"
      ),
      cite(
        "cdc_gun_deaths",
        "Fast Facts: Firearm Violence Prevention",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC data tracks firearm mortality rates by state and demographic factors.",
        "2023-11-24"
      ),
    ],
    difficulty: "hard",
  },
  {
    id: "patriotism-support-trump",
    category: ["Culture Wars", "Democracy"],
    theySay: "Real patriots support Trump! If you oppose him, you hate America!",
    youSay:
      "Patriotism is loyalty to constitutional principles - not loyalty to a person. Opposing a politician who tried to overturn an election, incited a mob against the Capitol, and faces 34 felony convictions isn't anti-American. It's the minimum standard of democratic citizenship. The Founders feared cults of personality for a reason.",
    stab: "The Constitution doesn't have a Trump clause.",
    sources: [
      cite(
        "jan6_report",
        "January 6 Committee Final Report",
        "U.S. House Select Committee",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "The January 6 committee documented efforts to overturn the 2020 election and incitement of the Capitol attack.",
        "2022-12-22"
      ),
      cite(
        "crs_impeachment",
        "Impeachment Process in the House",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R45745",
        "CRS explains impeachment as constitutional accountability for presidential misconduct.",
        "2024-02-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["democrats-hate-america", "jan-6-tourist-visit"],
  },
  {
    id: "peace-middle-east",
    category: ["Foreign Policy"],
    theySay: "Trump brought peace to the Middle East with the Abraham Accords!",
    youSay:
      "The Abraham Accords normalized relations between Israel and several Arab states - a genuine diplomatic achievement. But they did not address Palestinian statehood, and violence escalated dramatically afterward. Brokering deals between allies isn't the same as resolving the core conflict. Peace requires more than signing ceremonies.",
    stab: "Peace accords that skip the Palestinians aren't peace - they're a photo op.",
    sources: [
      cite(
        "state_abraham",
        "Abraham Accords",
        "U.S. Department of State",
        "https://www.state.gov/",
        "State Department documents the Abraham Accords normalization agreements.",
        "2020-09-15"
      ),
      cite(
        "crs_middle_east",
        "Israel and the Palestinians",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS analyzes ongoing Israeli-Palestinian conflict dynamics and diplomatic initiatives.",
        "2024-03-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["no-new-wars-trump"],
  },
  {
    id: "drain-the-swamp",
    category: ["Democracy", "Whataboutism"],
    theySay: "Trump was draining the swamp! He fought the establishment!",
    youSay:
      "Trump appointed more former lobbyists to his cabinet than any modern president. His administration saw unprecedented turnover - 85% of senior positions turned over. He pardoned political allies convicted of corruption. Goldman Sachs alumni ran the Treasury. 'Drain the swamp' became 'flood it with donors.'",
    stab: "He didn't drain the swamp. He stocked it with his own alligators.",
    sources: [
      cite(
        "opensecrets_lobbyists",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets tracks lobbyist appointments and revolving-door patterns in presidential administrations.",
        "2014-05-14"
      ),
      cite(
        "crs_appointments",
        "Presidential Appointments and Senate Confirmation",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS documents presidential appointment processes and turnover patterns.",
        "2024-02-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-donated-salary", "deep-state"],
  },
  {
    id: "america-first-fair",
    category: ["Foreign Policy", "Economy"],
    theySay: "America First means putting Americans first! Fair trade, not globalism!",
    youSay:
      "America First tariffs raised costs on American consumers and farmers who lost export markets to retaliation. Withdrawing from the Paris Agreement and WHO weakened U.S. global leadership without replacing it. 'America First' in practice meant America isolated - allies distrusted us, adversaries tested us, and working families paid higher prices.",
    stab: "America First shouldn't mean America alone - and alone is what we got.",
    sources: [
      cite(
        "crs_tariffs",
        "U.S. Tariff Policy",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46753",
        "CRS explains tariffs are collected at U.S. ports and typically passed through to domestic prices.",
        "2024-03-10"
      ),
      cite(
        "who_withdrawal",
        "Withdrawing the United States from the World Health Organization",
        "Federal Register",
        "https://www.federalregister.gov/documents/2025/01/29/2025-01957/withdrawing-the-united-states-from-the-world-health-organization",
        "Federal Register documents U.S. WHO withdrawal and its implications for global health coordination.",
        "2025-01-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["tariffs-win-trade", "no-new-wars-trump"],
  },
  {
    id: "doge-saving-money",
    category: ["Economy", "Democracy"],
    theySay: "DOGE is saving taxpayers billions! Elon is cutting waste!",
    youSay:
      "DOGE is an unelected advisory body with access to federal payment systems - not a congressional appropriations process. GAO and agency IGs are the lawful watchdogs; bypassing them destroys institutional oversight. Announced 'savings' rarely survive independent audit, while probationary firings and program halts degrade services Americans rely on.",
    stab: "You don't get to fire the accountants and call it savings.",
    sources: [
      cite(
        "doge_eo",
        "DOGE Executive Order",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/2025/01/establishing-and-implementing-the-presidents-department-of-government-efficiency/",
        "Executive order establishing DOGE with access to agency systems and payment data.",
        "2025-01-20"
      ),
      cite(
        "gao_schedule_f",
        "Schedule F CRS Analysis",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R47394",
        "CRS documents lawful civil service protections and congressional role in federal workforce policy.",
        "2025-01-15"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["deep-state", "drain-the-swamp"],
  },
  {
    id: "sanctuary-cities",
    category: ["Immigration", "Crime"],
    theySay: "Sanctuary cities protect criminals! Democrats want lawless cities!",
    youSay:
      "Sanctuary policies limit local police from holding people for ICE without a judicial warrant - they don't block deportation of convicted criminals. Courts have upheld this separation because federal immigration enforcement is a federal responsibility. Conflating community trust policies with 'protecting criminals' is a scare tactic; crime rates aren't higher in sanctuary jurisdictions per multiple studies.",
    stab: "The Constitution still requires a warrant. Even in Texas.",
    sources: [
      cite(
        "crs_sanctuary",
        "Sanctuary Jurisdictions",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R44795",
        "CRS explains sanctuary policies and the legal limits on local-federal immigration cooperation.",
        "2024-02-01"
      ),
      cite(
        "aclu_immigration",
        "ICE Detention Expansion",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/aclu-foia-litigation-reveals-information-about-plans-to-expand-ice-detention-facilities-nationwide",
        "ACLU documents federal immigration enforcement expansion and detention infrastructure.",
        "2025-06-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-open", "migrant-crime-wave"],
  },
  {
    id: "minimum-wage-kills-jobs",
    category: ["Economy"],
    theySay: "Raising the minimum wage kills jobs! Small businesses can't afford it!",
    youSay:
      "Meta-analyses of state-level minimum wage increases show negligible employment effects while reducing poverty. When workers earn more, they spend more locally - boosting demand. The federal minimum hasn't kept pace with productivity since 1968. Businesses that rely on poverty wages aren't viable without taxpayer subsidies like Medicaid and SNAP.",
    stab: "If your business model requires poverty wages, the problem isn't the minimum wage.",
    sources: [
      cite(
        "bls_wages",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS data shows wage premiums and stagnation trends for low-wage workers.",
        "2025-01-23"
      ),
      cite(
        "epi_minimum_wage",
        "Minimum Wage Research",
        "Economic Policy Institute",
        "https://www.epi.org/publication/creating-jobs-and-economic-security/",
        "EPI research on wage floors, job creation, and consumer demand effects.",
        "2018-03-22"
      ),
    ],
    difficulty: "medium",
  },
  {
    id: "electoral-college-fair",
    category: ["Elections", "Democracy"],
    theySay: "The Electoral College protects small states! It's genius!",
    youSay:
      "The Electoral College means a voter in Wyoming has roughly 3.5× the power of a voter in California. Two of the last six presidents lost the popular vote. 'Protecting small states' is code for minority rule - candidates ignore safe states and campaign only in a handful of swing districts. Democracy means the most votes win.",
    stab: "Genius for winning while losing. Terrible for democracy.",
    sources: [
      cite(
        "crs_electoral_college",
        "The Electoral College",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R43823",
        "CRS explains Electoral College mechanics and popular-vote divergence outcomes.",
        "2024-01-10"
      ),
      cite(
        "brennan_voting",
        "State Voting Laws Roundup",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review",
        "Brennan Center tracks voting access and democratic participation trends.",
        "2025-12-18"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["election-stolen", "voter-id-no-fraud"],
  },
  {
    id: "renewable-unreliable",
    category: ["Climate", "Economy"],
    theySay: "Solar and wind are unreliable! We need coal and gas forever!",
    youSay:
      "Grid-scale battery storage and regional interconnection solve intermittency - Texas blackouts were caused by gas plant failures, not wind. Levelized cost of solar and wind is now below coal and gas in most markets. Every IPCC pathway to 1.5°C requires rapid renewable deployment; 'reliability' arguments are fossil-fuel delay tactics.",
    stab: "The grid failed because gas froze. Not because the sun set.",
    sources: [
      cite(
        "ipcc_climate",
        "IPCC AR6 Synthesis Report",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/sixth-assessment-report-cycle/",
        "IPCC pathways require rapid renewable deployment to limit warming.",
        "2023-03-20"
      ),
      cite(
        "epa_rule",
        "EPA Methane Rule",
        "Environmental Protection Agency",
        "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations/epas-final-rule-reduce-methane-and-other",
        "EPA documents methane emissions from fossil fuel operations and regulatory standards.",
        "2024-03-08"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["climate-hoax", "wind-turbines-kill-birds"],
  },
  {
    id: "cancel-culture-victim",
    category: ["Culture Wars", "Media"],
    theySay: "Conservatives are the real victims of cancel culture!",
    youSay:
      "The First Amendment protects you from government censorship - not from private citizens criticizing your views. Conservatives hold major media platforms, control the Supreme Court, and dominate talk radio. 'Cancel culture' became a shield for consequences: when billionaires face criticism for policy positions, they call it persecution.",
    stab: "Free speech doesn't mean freedom from criticism.",
    sources: [
      cite(
        "crs_first_amendment",
        "Freedom of Speech and Press",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS explains First Amendment limits on government censorship versus private speech.",
        "2024-02-01"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Pew tracks institutional trust and media consumption patterns.",
        "2025-12-04"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["woke-mind-virus", "fake-news-media"],
  },
  {
    id: "student-loan-unfair",
    category: ["Economy", "Culture Wars"],
    theySay: "Student loan forgiveness is unfair to people who paid their loans!",
    youSay:
      "We forgive PPP loans, farm bailouts, and corporate tax breaks without this outrage. Student debt cancellation is economic stimulus - borrowers who aren't crushed by payments buy homes and start businesses. The alternative is a generation locked out of wealth-building because tuition tripled while wages stagnated.",
    stab: "Nobody complained when we forgave billionaires' PPP loans.",
    sources: [
      cite(
        "policy_education",
        "Student Debt Research",
        "National Bureau of Economic Research",
        "https://www.nber.org/papers/w28756",
        "NBER links education access to lifetime earnings and economic mobility.",
        "2021-04-01"
      ),
      cite(
        "cbo_social_security",
        "CBO Budget Analysis",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/social-security",
        "CBO analyzes fiscal impacts of debt relief and economic stimulus policies.",
        "2024-03-01"
      ),
    ],
    difficulty: "medium",
  },
  {
    id: "supreme-court-legitimate",
    category: ["Courts", "Democracy"],
    theySay: "The Supreme Court is legitimate! Democrats just hate losing!",
    youSay:
      "Three justices were appointed by a president who lost the popular vote; one seat was denied hearings for 293 days, another rushed through in 38. Justices Thomas and Alito accepted undisclosed luxury travel from billionaires with cases before the Court. Legitimacy requires accountability - 18-year term limits and binding ethics codes are reforms, not revenge.",
    stab: "Legitimacy isn't a lifetime appointment to do whatever you want.",
    sources: [
      cite(
        "safeguard_judicial",
        "Supreme Court Term Limits",
        "Fix the Court",
        "https://fixthecourt.com/fix/term-limits/",
        "Fix the Court proposes 18-year term limits to restore democratic balance.",
        "2025-02-06"
      ),
      cite(
        "crs_appointments",
        "Presidential Appointments",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS documents Senate confirmation timelines and appointment controversies.",
        "2024-02-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trump-immunity", "deep-state"],
  },
  {
    id: "unions-corrupt",
    category: ["Economy"],
    theySay: "Unions are corrupt! They protect lazy workers!",
    youSay:
      "Union members earn 16% more than nonunion workers with the same education. Unions reduce wage inequality and improve workplace safety - that's why corporations spend billions on union-busting. The PRO Act would restore organizing rights gutted by decades of anti-labor policy. Calling unions corrupt is what bosses say when workers demand a seat at the table.",
    stab: "If unions were useless, CEOs wouldn't spend billions crushing them.",
    sources: [
      cite(
        "bls_wages",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS reports union wage premium and membership trends.",
        "2025-01-23"
      ),
      cite(
        "hr_pro_act",
        "PRO Act",
        "Congress.gov",
        "https://www.congress.gov/bill/119th-congress/house-bill/1274",
        "PRO Act expands collective bargaining rights and penalties for union-busting.",
        "2025-02-10"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["socialism", "minimum-wage-kills-jobs"],
  },
  {
    id: "nobel-peace-trump",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "Trump deserves the Nobel Peace Prize! He ended wars!",
    youSay:
      "The Abraham Accords were real diplomacy - but they didn't resolve core conflicts, and violence escalated afterward. Trump escalated drone strikes, ordered the Soleimani assassination, and blocked Congress's war powers resolution. Nobel Prizes aren't participation trophies for photo ops with dictators.",
    stab: "You don't get a peace prize for almost starting a war with Iran.",
    sources: [
      cite(
        "state_abraham",
        "Abraham Accords",
        "U.S. Department of State",
        "https://www.state.gov/",
        "State Department documents normalization agreements between Israel and Arab states.",
        "2020-09-15"
      ),
      cite(
        "crs_middle_east",
        "Israel and the Palestinians",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS analyzes regional conflict dynamics beyond normalization agreements.",
        "2024-03-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["peace-middle-east", "no-new-wars-trump"],
  },
  {
    id: "estate-tax-theft",
    category: ["Economy", "Whataboutism"],
    theySay: "The estate tax is double taxation! It's stealing family farms!",
    youSay:
      "The estate tax applies to fortunes above $13.6 million per person - less than 0.1% of estates pay any tax. Family farms have had special exemptions for decades; the 'family farm' argument is a lobbying myth. Wealth passed down without labor is the closest thing to aristocracy American tax law allows.",
    stab: "Less than 0.1% of estates pay it. Your uncle's truck isn't the target.",
    sources: [
      cite(
        "cbo_estate_tax",
        "Estate and Gift Taxes",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/taxes/estate-and-gift-taxes",
        "CBO analyzes estate tax incidence and revenue effects.",
        "2024-04-01"
      ),
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets documents billionaire influence on tax policy advocacy.",
        "2014-05-14"
      ),
    ],
    difficulty: "hard",
  },
  {
    id: "biden-border-record",
    category: ["Immigration", "But Obama!"],
    theySay: "Biden let in 10 million illegals! Worst border crisis ever!",
    youSay:
      "Border encounters rose globally post-pandemic - driven by violence, climate displacement, and economic collapse in origin countries. Biden deployed troops, expanded Title 42 expulsions, and negotiated the toughest bipartisan border bill in decades - which Republicans killed at Trump's direction. Asylum seekers aren't 'illegal' until a hearing determines their status.",
    stab: "Republicans killed their own border bill. Then blamed Biden for the border.",
    sources: [
      cite(
        "crs_border",
        "U.S. Immigration Policy",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS analyzes border enforcement, asylum law, and legislative proposals.",
        "2024-03-01"
      ),
      cite(
        "aclu_immigration",
        "ICE Detention Expansion",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/aclu-foia-litigation-reveals-information-about-plans-to-expand-ice-detention-facilities-nationwide",
        "ACLU documents detention expansion under recent administrations.",
        "2025-06-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-open", "open-borders"],
  },
  {
    id: "inflation-biden-spending",
    category: ["Economy", "But Obama!"],
    theySay: "Biden's spending caused inflation! The Inflation Reduction Act made it worse!",
    youSay:
      "Global inflation peaked in 2022 across 40+ countries - driven by pandemic supply chains, the Ukraine war, and corporate profit margins. The IRA invests in domestic manufacturing and caps insulin - it doesn't print money for consumption. Fed rate hikes did the heavy lifting on inflation; blaming one president ignores global economics.",
    stab: "Inflation hit Europe harder. Did Biden run France too?",
    sources: [
      cite(
        "cbo_inflation",
        "CBO Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/economy",
        "CBO analyzes inflation drivers including supply shocks and monetary policy.",
        "2024-02-01"
      ),
      cite(
        "crs_tariffs",
        "U.S. Tariff Policy",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46753",
        "CRS explains how tariffs and trade policy affect consumer prices.",
        "2024-03-10"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["inflation-biden-fault", "but-obama-did-this"],
  },
  {
    id: "nuclear-only-clean",
    category: ["Climate", "Economy"],
    theySay: "Nuclear is the only clean energy! Greens hate science!",
    youSay:
      "Nuclear has a role - but new plants take 10-15 years and cost billions per reactor. Solar and wind deploy in months at lower levelized cost. Climate timelines require deploying every tool now: renewables for speed, nuclear where already operating, storage for reliability. Opposing reckless timelines isn't opposing science.",
    stab: "We needed clean energy yesterday. Nuclear can't build fast enough alone.",
    sources: [
      cite(
        "ipcc_climate",
        "IPCC AR6 Pathways",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/sixth-assessment-report-cycle/",
        "IPCC models multiple technology mixes including renewables and nuclear.",
        "2023-03-20"
      ),
      cite(
        "policy_environment",
        "Green New Deal Analysis",
        "Data for Progress",
        "https://www.dataforprogress.org/green-new-deal-report",
        "Data for Progress models rapid renewable deployment timelines and job creation.",
        "2019-02-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["climate-hoax", "renewable-unreliable"],
  },
  {
    id: "social-security-bankrupt",
    category: ["Economy", "Whataboutism"],
    theySay: "Social Security is going bankrupt! Democrats stole the trust fund!",
    youSay:
      "Social Security can pay full benefits through 2033 without changes, and roughly 79% after that - bankruptcy is a political choice, not math. The trust fund was designed as an accounting mechanism; Congress can restore solvency by raising the payroll tax cap so billionaires pay on all earnings, not just the first $176,100.",
    stab: "You want to cut grandma's check instead of taxing income above $176K. Say that.",
    sources: [
      cite(
        "cbo_social_security",
        "Social Security Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/social-security",
        "CBO projects Social Security trust fund depletion dates and benefit payment scenarios under current law.",
        "2024-06-01"
      ),
      cite(
        "ssa_trust_fund",
        "Social Security Trust Funds",
        "Social Security Administration",
        "https://www.ssa.gov/policy/docs/ssb/",
        "SSA explains how the Old-Age and Survivors Insurance trust fund operates and is financed.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["fiscal-conservatives", "welfare-illegals"],
  },
  {
    id: "school-choice-vouchers",
    category: ["Culture Wars", "Economy"],
    theySay: "School choice saves kids! Democrats trap poor kids in failing public schools!",
    youSay:
      "Voucher programs divert public dollars to private schools with no accountability, weaker civil rights protections, and mixed academic results. Finland and Massachusetts improved outcomes by investing in teachers and equity - not defunding neighborhood schools. 'Choice' without transportation, disability services, or oversight is a subsidy for families who already had options.",
    stab: "You call it choice. Teachers call it defunding the school down the street.",
    sources: [
      cite(
        "crs_education",
        "Elementary and Secondary Education",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R44795",
        "CRS analyzes federal education funding, voucher proposals, and accountability requirements.",
        "2024-02-01"
      ),
      cite(
        "pen_book_bans",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN America documents state censorship laws affecting public school curricula and libraries.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
  },
  {
    id: "obamacare-job-killer",
    category: ["Healthcare", "Economy"],
    theySay: "Obamacare killed jobs and destroyed healthcare! Repeal it!",
    youSay:
      "Since the ACA passed, the U.S. added millions of jobs and the uninsured rate hit historic lows. Pre-existing condition protections cover 135 million Americans. Premium subsidies expanded under Biden cut marketplace costs for millions. 'Repeal and replace' never produced a plan because gutting the ACA throws 20+ million off coverage without lowering costs.",
    stab: "You want to bring back denials for pre-existing conditions. Own it.",
    sources: [
      cite(
        "kff_aca",
        "ACA Marketplace Premiums",
        "Kaiser Family Foundation",
        "https://www.kff.org/affordable-care-act/aca-marketplace-premium-payments-would-more-than-double-on-average-next-year-if-enhanced-premium-tax-credits-expire/",
        "KFF analyzes ACA enrollment, premium subsidies, and coverage impacts.",
        "2024-08-01"
      ),
      cite(
        "healthcare_gov",
        "Affordable Care Act",
        "HealthCare.gov",
        "https://www.healthcare.gov/glossary/affordable-care-act/",
        "Official ACA glossary describing core consumer protections including pre-existing conditions.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["healthcare-socialized"],
  },
  {
    id: "china-climate-hypocrisy",
    category: ["Climate", "Foreign Policy"],
    theySay: "Why should we cut emissions when China pollutes more? Climate is a hoax anyway!",
    youSay:
      "China builds more renewables than the rest of the world combined - because clean energy is an economic race, not a charity project. The U.S. remains the largest historical emitter per capita. IPCC science is unanimous: every ton matters. Hiding behind China is an excuse to protect fossil-fuel donors, not a climate strategy.",
    stab: "China is building solar farms. You're building excuses.",
    sources: [
      cite(
        "ipcc_ar6",
        "IPCC Sixth Assessment",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/syr/",
        "IPCC synthesis report documents global warming trends and required emission reductions.",
        "2023-03-20"
      ),
      cite(
        "noaa_climate",
        "Global Climate Report",
        "NOAA National Centers for Environmental Information",
        "https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202413",
        "NOAA tracks record global temperatures and climate indicators.",
        "2024-12-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["climate-hoax", "renewable-unreliable"],
  },
  {
    id: "birthright-citizenship-myth",
    category: ["Immigration", "Democracy"],
    theySay: "Birthright citizenship is anchor baby fraud! End it by executive order!",
    youSay:
      "The 14th Amendment grants citizenship to all persons born in the United States - full stop. Trump-era and 2025 executive orders attempting to end birthright citizenship were blocked by federal courts as unconstitutional. No serious legal scholar argues a president can amend the Constitution with a pen.",
    stab: "You need an amendment, not an executive order. Read the 14th.",
    sources: [
      cite(
        "aclu_birthright",
        "Federal Court Blocks Birthright Order",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order",
        "ACLU documents federal court injunctions against birthright citizenship executive orders.",
        "2025-01-23"
      ),
      cite(
        "crs_citizenship",
        "Birthright Citizenship",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/IN/IN11234",
        "CRS analyzes constitutional and statutory basis for birthright citizenship under the 14th Amendment.",
        "2024-01-15"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-open", "illegals-voting"],
  },
  {
    id: "fbi-jan6-setup",
    category: ["Jan 6", "Media"],
    theySay: "January 6 was an FBI setup! Ray Epps was a fed!",
    youSay:
      "The bipartisan Senate Jan. 6 report, DOJ indictments, and hundreds of guilty pleas from rioters themselves establish what happened: Trump summoned a crowd, told them to fight, and they stormed the Capitol. Ray Epps was interviewed and cleared - conspiracy theories about 'fed provocateurs' distract from the president's own words on tape.",
    stab: "Your guys pleaded guilty. That's not a setup - that's confessions.",
    sources: [
      cite(
        "j6_report",
        "January 6 After-Action Report",
        "U.S. Government Publishing Office",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "Official after-action report documents security failures and timeline of the Capitol attack.",
        "2021-06-08"
      ),
      cite(
        "doj_j6",
        "Capitol Breach Cases",
        "U.S. Department of Justice",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "DOJ maintains public records of January 6 prosecutions and convictions.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["jan-6-tourist-visit", "antifa-organized"],
  },
  {
    id: "corporate-tax-cut-jobs",
    category: ["Economy", "Whataboutism"],
    theySay: "Cut corporate taxes and jobs explode! Democrats hate business!",
    youSay:
      "The 2017 Trump tax cuts slashed the corporate rate from 35% to 21% - corporations bought back stock and executive pay surged while real wage growth lagged. CBO found the cuts added $1.9 trillion to deficits. Trickle-down isn't a theory - it's a 40-year experiment with a control group called the middle class.",
    stab: "They got a tax cut. You got the bill.",
    sources: [
      cite(
        "cbo_tax_cuts",
        "Budgetary Effects of the 2017 Tax Act",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO scored revenue and deficit impacts of the Tax Cuts and Jobs Act.",
        "2018-04-01"
      ),
      cite(
        "bea_gdp",
        "Gross Domestic Product",
        "Bureau of Economic Analysis",
        "https://www.bea.gov/data/gdp/gross-domestic-product",
        "BEA publishes official GDP and income growth data by sector.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trump-best-economy-ever", "fiscal-conservatives"],
  },
  {
    id: "plastic-straws-distraction",
    category: ["Climate", "Culture Wars"],
    theySay: "Liberals ban straws while China dumps plastic! Climate hypocrites!",
    youSay:
      "No one thinks straw bans solve climate change - they're municipal waste policies, not federal climate strategy. Real climate policy means methane rules, grid decarbonization, and holding fossil companies accountable for decades of deception. Straw-manning environmentalism avoids debating the policies that actually cut emissions.",
    stab: "You mocked straws to avoid debating methane rules. Cute.",
    sources: [
      cite(
        "epa_methane",
        "Oil and Gas Methane Rules",
        "Environmental Protection Agency",
        "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations",
        "EPA documents methane emission standards for oil and gas operations.",
        "2024-03-01"
      ),
      cite(
        "nasa_consensus",
        "Scientific Consensus on Climate",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA summarizes overwhelming scientific agreement on human-caused climate change.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax", "china-climate-hypocrisy"],
  },
  {
    id: "medicare-wait-times",
    category: ["Healthcare", "Whataboutism"],
    theySay: "Medicare for All means year-long waits and death panels!",
    youSay:
      "Americans already wait - for insurance approval, for ambulances they can't afford, and for bankruptcy after a hospital bill. Countries with universal coverage have shorter wait times for primary care than uninsured Americans have for any care. 'Death panels' was PolitiFact's Lie of the Year - a fabricated scare tactic to block the ACA.",
    stab: "Death panels were a lie in 2009. You're still running it in 2026.",
    sources: [
      cite(
        "politifact_death_panels",
        "Lie of the Year: Death Panels",
        "PolitiFact",
        "https://www.politifact.com/article/2009/dec/18/politifact-lie-year-death-panels/",
        "PolitiFact named 'death panels' the 2009 Lie of the Year for ACA misinformation.",
        "2009-12-18"
      ),
      cite(
        "kff_health",
        "Women's Health Policy",
        "Kaiser Family Foundation",
        "https://www.kff.org/womens-health-policy/",
        "KFF publishes comparative health system data on access, costs, and outcomes.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["healthcare-socialized", "abortion-late-term"],
  },
  {
    id: "church-state-pretense",
    category: ["Democracy", "Culture Wars"],
    theySay: "America is a Christian nation! Keep prayer in schools!",
    youSay:
      "The First Amendment prohibits government establishment of religion - the Founders fled state churches. Pew data shows growing religious diversity; public schools cannot impose one faith on every child. Private prayer has always been protected; government-led prayer excludes non-Christian students by design.",
    stab: "The First Amendment protects your church from the government too. Read it.",
    sources: [
      cite(
        "congress_first_amendment",
        "First Amendment",
        "Congress.gov",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "Official annotated text of the First Amendment establishment and free exercise clauses.",
        "2024-01-01"
      ),
      cite(
        "pew_religion",
        "Faith on the Hill",
        "Pew Research Center",
        "https://www.pewresearch.org/religion/2023/01/03/faith-on-the-hill/",
        "Pew documents religious composition of Congress and changing U.S. religious landscape.",
        "2023-01-03"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["christians-persecuted", "crt-schools"],
  },
  {
    id: "billionaires-earned-it",
    category: ["Economy", "Whataboutism"],
    theySay: "Billionaires earned every penny! Stop punishing success!",
    youSay:
      "Many of America's richest inherited wealth or built monopolies with taxpayer subsidies, regulatory capture, and union-busting. BLS data shows union workers earn significantly more than nonunion workers - the game is rigged before the first dollar is made. Progressive tax policy isn't punishment; it's asking people who benefited most from public infrastructure to fund the society that made their wealth possible.",
    stab: "Nobody becomes a billionaire alone. They just want you to think they did.",
    sources: [
      cite(
        "bls_union_wages",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "Union workers earned median weekly earnings of $1,263 compared to $1,090 for nonunion workers.",
        "2025-01-23"
      ),
      cite(
        "opensecrets_dark_money",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "Political nonprofits can spend unlimited sums without disclosing donors, enabling plutocratic policy capture.",
        "2014-05-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-self-made", "fiscal-conservatives"],
  },
  {
    id: "filibuster-founding-fathers",
    category: ["Democracy"],
    theySay: "The filibuster protects minority rights! The Founders wanted it!",
    youSay:
      "The filibuster is not in the Constitution - it's a Senate rule that has been weaponized to block voting rights, healthcare, and climate legislation supported by majorities. CRS documents how the modern filibuster evolved through procedural changes, not founding design. When one senator can kill bills passed by the House and supported by the public, that's minority rule - not minority rights.",
    stab: "The Founders wrote the Constitution. They didn't write a 60-vote veto for cable news.",
    sources: [
      cite(
        "crs_filibuster",
        "The Senate 'Filibuster' and Cloture",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R44621",
        "CRS explains the filibuster as a Senate procedural practice, not a constitutional requirement.",
        "2024-06-01"
      ),
      cite(
        "brennan_voting_rights",
        "State Voting Laws Roundup",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review",
        "Brennan Center documents restrictive voting laws enacted while federal voting rights legislation stalled.",
        "2025-12-18"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["electoral-college-fair", "supreme-court-legitimate"],
  },
  {
    id: "stock-market-president",
    category: ["Economy", "Media"],
    theySay: "Look at the stock market! The president is doing great!",
    youSay:
      "The stock market measures corporate profits, not family finances. Most Americans don't own enough equities for market highs to offset grocery inflation, rent, or medical debt. Wage growth and unemployment tell you more about kitchen-table economics than the S&P 500 - and those metrics often diverge sharply from Wall Street rallies driven by buybacks and tax cuts.",
    stab: "Your 401(k) isn't paying the electric bill. Neither is his.",
    sources: [
      cite(
        "bls_wages_econ",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes wage and employment data used to assess labor market conditions for working households.",
        "2025-01-23"
      ),
      cite(
        "cbo_deficit",
        "Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/61172",
        "CBO analyzes federal deficits and economic conditions independent of stock market performance.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["trump-fixed-economy", "trump-best-economy-ever"],
  },
  {
    id: "immigrants-steal-jobs",
    category: ["Immigration", "Economy"],
    theySay: "Immigrants are stealing our jobs!",
    youSay:
      "Immigrants fill labor shortages, start businesses at higher rates than native-born Americans, and pay billions in taxes including Social Security for benefits they may never collect. Economic consensus finds immigration grows the overall economy rather than reducing native employment - scapegoating immigrants distracts from policy choices like union-busting and offshoring that actually suppress wages.",
    stab: "They didn't take your job. Your boss shipped it overseas and blamed the gardener.",
    sources: [
      cite(
        "cbo_immigration",
        "The Economic Effects of Immigration",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/57057",
        "CBO finds immigration increases total economic output and federal tax revenues over time.",
        "2020-01-01"
      ),
      cite(
        "aclu_ice_detention",
        "ACLU on ICE Detention Expansion",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/aclu-foia-litigation-reveals-information-about-plans-to-expand-ice-detention-facilities-nationwide",
        "ACLU documents ICE detention expansion plans tied to enforcement-first immigration policy.",
        "2025-06-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-open", "migrant-crime-wave", "welfare-illegals"],
  },
  {
    id: "trickle-down-works",
    category: ["Economy"],
    theySay: "Trickle-down economics works! Cut taxes and everyone wins!",
    youSay:
      "Four decades of tax cuts for the wealthy coincided with stagnating middle-class wages and soaring inequality. CBO analysis shows top-bracket cuts disproportionately benefit the richest households while increasing deficits that Republicans then use to justify cutting Social Security and Medicare. Money trickles up - always has.",
    stab: "We've been trickled on for forty years. It's not rain.",
    sources: [
      cite(
        "cbo_tax_distribution",
        "The Distribution of Household Income",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/58768",
        "CBO documents rising income inequality and the disproportionate benefit of tax cuts to top earners.",
        "2022-01-01"
      ),
      cite(
        "epi_wages",
        "Creating Jobs and Economic Security",
        "Economic Policy Institute",
        "https://www.epi.org/publication/creating-jobs-and-economic-security/",
        "EPI research links wage stagnation to policy choices favoring capital over labor.",
        "2018-03-22"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["corporate-tax-cut-jobs", "fiscal-conservatives", "socialism"],
  },
  {
    id: "judicial-activism-conservative",
    category: ["Courts", "Democracy"],
    theySay: "Only liberal judges are activists! Conservative justices just follow the law!",
    youSay:
      "The current Supreme Court overturned Roe v. Wade, expanded presidential immunity, and blocked student debt relief - none of which appear in constitutional text. 'Originalism' has become a branding exercise for outcomes popular with donors. When the court consistently delivers wins for one party's agenda, that's activism - regardless of the footnotes.",
    stab: "They call it originalism when they win. They call it activism when you do.",
    sources: [
      cite(
        "scotus_immunity",
        "Trump v. United States",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/23",
        "The Supreme Court held that presidents have presumptive immunity from criminal prosecution for official acts.",
        "2024-07-01"
      ),
      cite(
        "fix_court_terms",
        "Supreme Court Term Limits",
        "Fix the Court",
        "https://fixthecourt.com/fix/term-limits/",
        "Fix the Court advocates term limits citing declining public confidence in judicial impartiality.",
        "2025-02-06"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["supreme-court-legitimate", "trump-immunity"],
  },
  {
    id: "overtime-pay-destroy-jobs",
    category: ["Economy"],
    theySay: "Raising overtime pay will destroy small businesses and kill jobs!",
    youSay:
      "When workers earn more, they spend more - boosting local economies. DOL's overtime rule restored protections for millions of salaried workers earning less than $58,656 who were classified as 'managers' to avoid overtime. CBO and BLS data show wage floors don't cause mass layoffs; they reduce turnover and poverty. Every time labor rights expand, the same scare story runs - and the economy keeps growing.",
    stab: "They said the same thing about the weekend. Your boss survived.",
    sources: [
      cite(
        "dol_overtime",
        "Overtime Final Rule",
        "U.S. Department of Labor",
        "https://www.dol.gov/agencies/whd/overtime",
        "DOL restored overtime eligibility for salaried workers below the updated salary threshold.",
        "2024-04-23"
      ),
      cite(
        "bls_employment",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes employment and wage data used to assess labor market impacts of pay rules.",
        "2025-01-23"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["minimum-wage-kills-jobs", "trickle-down-works"],
  },
  {
    id: "media-literacy-indoctrination",
    category: ["Education", "Culture Wars"],
    theySay: "Media literacy classes are liberal indoctrination!",
    youSay:
      "Media literacy teaches students to evaluate sources, spot manipulation, and distinguish fact from opinion - skills every parent should want. The same people calling it 'indoctrination' cheered when schools removed science and history books. Teaching kids to question viral claims isn't partisan; it's the minimum defense against propaganda in an election year.",
    stab: "They don't fear indoctrination. They fear kids who can fact-check them.",
    sources: [
      cite(
        "congress_first_amendment_ed",
        "First Amendment",
        "Congress.gov",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "The First Amendment protects free expression and inquiry - the foundation of media literacy education.",
        "2024-01-01"
      ),
      cite(
        "cisa_election_security",
        "Election Security",
        "Cybersecurity and Infrastructure Security Agency",
        "https://www.cisa.gov/",
        "CISA documents election misinformation threats that media literacy helps counter.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crt-schools", "fake-news-media"],
  },
  {
    id: "immigrants-drain-healthcare",
    category: ["Immigration", "Healthcare"],
    theySay: "Immigrants are flooding emergency rooms and bankrupting hospitals!",
    youSay:
      "Undocumented immigrants are largely excluded from federal health programs and pay billions in taxes without receiving benefits. CBO finds immigration grows the economy and tax base over time. Emergency room use reflects lack of primary care access - the fix is coverage, not scapegoating. Hospital closures track Medicaid expansion fights and rural underfunding, not immigration.",
    stab: "They pay into the system. You just don't want them in the waiting room.",
    sources: [
      cite(
        "cbo_immigration_health",
        "The Economic Effects of Immigration",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/57057",
        "CBO finds immigration increases economic output and federal revenues.",
        "2020-01-01"
      ),
      cite(
        "kff_immigrant_health",
        "Health Coverage and Care of Undocumented Immigrants",
        "Kaiser Family Foundation",
        "https://www.kff.org/racial-equity-and-health-policy/",
        "KFF documents limited federal health coverage for undocumented immigrants.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["welfare-illegals", "border-open"],
  },
  {
    id: "birth-control-iud-forced",
    category: ["Healthcare", "Culture Wars"],
    theySay: "Democrats want to force IUDs on teenage girls!",
    youSay:
      "No bill mandates birth control for minors - that's fabricated outrage to distract from actual abortion bans with no exceptions. Contraception access reduces teen pregnancy rates, which hit record lows before Dobbs. When conservatives block sex education and contraception while banning abortion, the cruelty is the point.",
    stab: "Nobody's forcing an IUD. They're forcing you to give birth.",
    sources: [
      cite(
        "cdc_teen_pregnancy",
        "Reproductive Health Data and Statistics",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC publishes teen pregnancy and reproductive health data showing long-term declines with expanded access to care.",
        "2024-01-01"
      ),
      cite(
        "kff_abortion",
        "Abortion in the United States",
        "Kaiser Family Foundation",
        "https://www.kff.org/womens-health-policy/",
        "KFF tracks state abortion restrictions and access after Dobbs v. Jackson.",
        "2024-06-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["abortion-late-term", "healthcare-socialized"],
  },
  {
    id: "tariffs-lower-prices",
    category: ["Economy", "Foreign Policy"],
    theySay: "Tariffs will lower prices and bring manufacturing home!",
    youSay:
      "Tariffs are taxes on imports - and importers pass costs to consumers. CRS and Tax Foundation analyses of Trump-era tariffs found billions in higher prices for American households and retaliatory hits on U.S. farmers. Manufacturing didn't flood back; supply chains shifted to Vietnam and Mexico while you paid more at the store.",
    stab: "Tariffs don't lower prices. They lower your bank balance.",
    sources: [
      cite(
        "crs_tariffs_prices",
        "U.S. Tariff Policy",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS explains tariffs are collected at U.S. ports and typically passed through to domestic prices.",
        "2024-01-01"
      ),
      cite(
        "cbo_trade",
        "Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/61172",
        "CBO analyzes trade policy effects on consumer prices and economic growth.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["tariffs-win-trade", "america-first-fair"],
  },
  {
    id: "schedule-f-necessary",
    category: ["Democracy", "Economy"],
    theySay: "Schedule F is just fixing a bloated bureaucracy!",
    youSay:
      "Schedule F reclassifies tens of thousands of career civil servants as at-will political appointees - stripping merit protections so they can be fired for disloyalty, not performance. GAO warned this undermines institutional knowledge and invites corruption. It's not efficiency; it's purging experts who might say no to illegal orders.",
    stab: "They don't want a lean government. They want an obedient one.",
    sources: [
      cite(
        "gao_schedule_f_rebut",
        "Schedule F and the Civil Service",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO examines civil service reforms and their impact on government capacity and accountability.",
        "2025-01-01"
      ),
      cite(
        "crs_schedule_f",
        "Schedule F Executive Order",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS analyzes Schedule F reclassification of federal policy positions.",
        "2025-01-20"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["deep-state", "doge-saving-money", "kamala-would-have-been-worse"],
  },
  {
    id: "disaster-aid-politics",
    category: ["Democracy", "Climate"],
    theySay: "FEMA only helps blue states! Red states get ignored!",
    youSay:
      "FEMA disaster declarations follow statutory criteria - not Twitter polls. After Hurricane Helene, fact-checkers documented equal federal response regardless of state politics. What does vary: whether governors accept federal climate science, invest in resilience, and stop blocking aid votes in Congress. Disaster relief shouldn't be a loyalty test - but that's what happens when you elect arsonists to the fire department.",
    stab: "The aid isn't political. The denial is.",
    sources: [
      cite(
        "fema_disasters",
        "Disaster Declarations",
        "Federal Emergency Management Agency",
        "https://www.fema.gov/",
        "FEMA coordinates federal disaster response under statutory declaration criteria.",
        "2025-01-01"
      ),
      cite(
        "noaa_climate_costs",
        "Billion-Dollar Weather and Climate Disasters",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/billions/",
        "NOAA tracks rising frequency and cost of billion-dollar weather disasters in the U.S.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["fema-only-democrats", "climate-hoax"],
  },
  {
    id: "public-schools-failing",
    category: ["Education", "Culture Wars"],
    theySay: "Public schools are failing! We need to abolish the Department of Education!",
    youSay:
      "American students in well-funded districts compete globally; the failure is funding inequality, not public education itself. The Ed Department administers Title I for low-income schools, IDEA for students with disabilities, and Pell Grants for college - cutting it punishes the kids who need help most. 'School choice' vouchers drain public funds into unaccountable private schools with no performance requirements.",
    stab: "They don't want to fix public schools. They want to stop paying for yours.",
    sources: [
      cite(
        "ed_title_i",
        "Title I, Part A Program",
        "U.S. Department of Education (archived)",
        "https://web.archive.org/web/20240415000000/https://www.ed.gov/",
        "The Department of Education administers Title I funding for schools serving low-income students.",
        "2025-01-01"
      ),
      cite(
        "ed_restructuring_rebut",
        "Department of Education Restructuring",
        "U.S. Department of Education (archived)",
        "https://web.archive.org/web/20240415000000/https://www.ed.gov/",
        "Ed Department restructuring proposals would eliminate programs serving millions of students.",
        "2025-03-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["school-choice-vouchers", "crt-schools"],
  },
  {
    id: "presidential-power-normal",
    category: ["Democracy", "Courts"],
    theySay: "Every president expands power! This is normal!",
    youSay:
      "No prior president claimed criminal immunity for official acts, ordered birthright citizenship revoked by executive order, or deployed the military against domestic protesters as a campaign strategy. CRS and SCOTUS opinions document unprecedented expansions of unitary executive theory. Normalizing it guarantees the next authoritarian starts where this one left off.",
    stab: "It wasn't normal when Obama did less. Don't pretend it is now.",
    sources: [
      cite(
        "scotus_immunity_rebut",
        "Trump v. United States",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/23",
        "The Supreme Court held presidents have presumptive immunity from criminal prosecution for official acts.",
        "2024-07-01"
      ),
      cite(
        "crs_war_powers",
        "War Powers Resolution: Presidential Compliance",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R42699",
        "CRS tracks executive use of military force and congressional war powers.",
        "2024-03-15"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["but-obama-did-this", "trump-immunity"],
  },
  {
    id: "p2025-just-suggestions",
    category: ["Democracy", "Media"],
    theySay: "Project 2025 is just a wish list! It's not actually happening!",
    youSay:
      "Heritage Foundation published the 920-page Mandate for Leadership and staffed the transition. CPR's tracker documents over half of the domestic administrative agenda initiated within the first year. Schedule F, USAID dismantling, DEI termination, and birthright citizenship orders aren't suggestions - they're executive actions with Federal Register citations.",
    stab: "It's a wish list the same way a blueprint is a doodle.",
    sources: [
      cite(
        "heritage_mandate_rebut",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation / Project 2025",
        "https://www.project2025.org/policy/",
        "Project 2025 published a 920-page policy manual and staffed the presidential transition with its authors.",
        "2023-04-21"
      ),
      cite(
        "cpr_progress_rebut",
        "Project 2025 Executive Action Tracker",
        "Center for Progressive Reform",
        "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
        "CPR documents over half of Project 2025's domestic administrative policy agenda initiated or completed within the first year.",
        "2026-02-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["project-2025-doesnt-exist", "deep-state", "kamala-would-have-been-worse"],
  },
  {
    id: "unelected-billionaires",
    category: ["Democracy", "Economy"],
    theySay: "Elon isn't running the government! DOGE is just finding waste!",
    youSay:
      "DOGE is an unelected advisory body with access to Treasury payment systems - not a congressional appropriations process. GAO and agency inspectors general are the lawful watchdogs. Bypassing them to fire probationary workers and halt grants isn't auditing; it's dismantling oversight without a single vote in Congress.",
    stab: "You didn't elect Elon. You elected a president who outsourced the government.",
    sources: [
      cite(
        "gao_oversight_rebut",
        "Government Auditing Standards",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO is the independent agency Congress created to audit federal spending and operations.",
        "2025-01-01"
      ),
      cite(
        "treasury_doge_rebut",
        "Treasury Press Releases",
        "U.S. Department of the Treasury",
        "https://home.treasury.gov/news/press-releases",
        "Treasury granted DOGE-aligned reviewers access to federal payment systems.",
        "2025-02-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["doge-saving-money", "deep-state"],
  },
  {
    id: "courts-will-fix-it",
    category: ["Courts", "Democracy"],
    theySay: "The courts will stop all of this! Just wait for the lawsuits!",
    youSay:
      "Courts have blocked some orders - birthright citizenship, parts of Schedule F - but litigation takes years while harm is immediate. Workers are fired today. Grants are frozen today. A Supreme Court that granted presidents criminal immunity isn't a reliable backstop. Democracy can't survive on lawsuit roulette.",
    stab: "You don't put out a fire by filing paperwork.",
    sources: [
      cite(
        "aclu_birthright_rebut",
        "Federal Court Blocks Birthright Citizenship Order",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order",
        "Federal courts blocked the birthright citizenship executive order, but implementation fights continue.",
        "2025-01-23"
      ),
      cite(
        "scotus_immunity_courts",
        "Trump v. United States",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/23",
        "The Supreme Court held presidents have presumptive immunity from criminal prosecution for official acts.",
        "2024-07-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-immunity", "project-2025-doesnt-exist"],
  },
  {
    id: "immigrants-free-benefits",
    category: ["Immigration", "Economy"],
    theySay: "Illegals get free housing, healthcare, and welfare!",
    youSay:
      "Undocumented immigrants are ineligible for most federal benefits - including Medicaid, SNAP, and SSI - by law. The CBO confirms noncitizens use fewer benefits per capita than native-born citizens. The claim exists to justify cruelty, not to fix a budget line that doesn't exist.",
    stab: "They're not taking your benefits. They're doing jobs you won't.",
    sources: [
      cite(
        "cbo_immigrant_benefits",
        "Immigrants and the Economy",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/57057",
        "CBO analyzes immigrant contributions to the economy and federal budget.",
        "2024-01-01"
      ),
      cite(
        "cato_immigrant_crime_rebut",
        "Immigrants Commit Less Crime",
        "Cato Institute",
        "https://www.cato.org/blog/immigrants-commit-less-crime",
        "Research consistently finds immigrants commit crimes at lower rates than native-born citizens.",
        "2024-03-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["welfare-illegals", "border-open"],
  },
  {
    id: "natural-climate-cycles",
    category: ["Climate"],
    theySay: "The climate has always changed! It's natural cycles, not humans!",
    youSay:
      "Natural cycles don't explain the current rate of warming. NASA and NOAA document that atmospheric CO₂ is higher than at any point in 800,000 years of ice core data. The IPCC concludes with very high confidence that human activities are the dominant cause of observed warming since the mid-20th century.",
    stab: "Volcanoes didn't invent SUVs.",
    sources: [
      cite(
        "nasa_climate_consensus",
        "Scientific Consensus: Earth's Climate Is Warming",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA documents overwhelming scientific consensus that human activities are driving current climate change.",
        "2024-01-01"
      ),
      cite(
        "ipcc_ar6_rebut",
        "AR6 Synthesis Report: Climate Change 2023",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/sixth-assessment-report-cycle/",
        "IPCC concludes human influence has warmed the atmosphere, ocean, and land.",
        "2023-03-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["climate-hoax", "renewable-unreliable"],
  },
  {
    id: "trump-won-popular-vote",
    category: ["Elections", "Democracy"],
    theySay: "Trump won the popular vote in 2024! He has a mandate!",
    youSay:
      "Official state canvasses and the Federal Register electoral vote certification confirm the winner of the 2024 presidential election. Claims of a secret popular-vote landslide contradict certified results published by every state. A mandate requires accepting arithmetic, not retweeting screenshots.",
    stab: "The scoreboard is public. You're arguing with the ref.",
    sources: [
      cite(
        "fec_election_results",
        "Federal Election Commission",
        "U.S. Federal Election Commission",
        "https://www.fec.gov/",
        "FEC publishes official federal election results and campaign finance data.",
        "2024-11-01"
      ),
      cite(
        "ap_election_call",
        "AP Election Results",
        "Associated Press",
        "https://apnews.com/article/election-2020-joe-biden-donald-trump-georgia-elections-1a2ea5e8df69614f4e09b47fea581a09",
        "AP and state election officials certify vote totals through canvassing and recount procedures.",
        "2024-11-06"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["election-stolen", "electoral-college-fair"],
  },
  {
    id: "democrats-shutdown-blame",
    category: ["Democracy", "Economy"],
    theySay: "Democrats caused the government shutdown!",
    youSay:
      "Government shutdowns occur when Congress fails to pass appropriations - often because one party demands unrelated policy riders. CRS documents that shutdowns freeze federal pay, delay benefits, and cost billions in lost productivity. Blame games don't pay TSA workers or process veterans' claims.",
    stab: "Shutdown theater hurts workers, not politicians.",
    sources: [
      cite(
        "crs_shutdown",
        "Government Shutdowns: Overview and Issues",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R41748",
        "CRS explains causes and costs of federal government shutdowns.",
        "2024-01-01"
      ),
      cite(
        "cbo_shutdown_cost",
        "Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/61172",
        "CBO analyzes economic impacts of federal budget disruptions.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["fiscal-conservatives", "both-sides-equivalence"],
  },
  {
    id: "kids-trans-surgery-schools",
    category: ["Culture Wars", "Healthcare"],
    theySay: "They're doing gender surgery on kids in schools!",
    youSay:
      "Gender-affirming surgery for minors is rare, requires parental consent, and isn't performed in schools. Major medical associations support age-appropriate care protocols developed by pediatric specialists. The panic is manufactured - PEN America documents hundreds of educational gag orders targeting books and curricula, not operating rooms.",
    stab: "No school has a surgery wing. Stop falling for rage bait.",
    sources: [
      cite(
        "pen_gag_orders",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN America tracks state laws restricting classroom discussion and curriculum.",
        "2024-01-01"
      ),
      cite(
        "cdc_youth_health",
        "Adolescent and School Health",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC publishes data on adolescent health and evidence-based care guidelines.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trans-sports", "teacher-grooming"],
  },
  {
    id: "republic-is-not-democracy",
    category: ["Democracy", "Elections"],
    theySay: "We're a republic, not a democracy! The Founders hated democracy!",
    youSay:
      "A republic is a form of government where officials are elected - not appointed by kings. The Founders feared mob rule but designed representative democracy with expanding suffrage. Calling America a 'republic not a democracy' is a talking point to justify minority rule, gerrymandering, and the Electoral College overriding popular will.",
    stab: "You vote for representatives. That's democracy.",
    sources: [
      cite(
        "constitution_amendments",
        "Constitution of the United States",
        "National Constitution Center",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "The Constitution establishes a representative government with elected officials and expanding voting rights through amendments.",
        "2024-01-01"
      ),
      cite(
        "brennan_voting_rights",
        "Voting Laws Roundup",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/voting-laws-roundup",
        "Brennan Center tracks state laws expanding and restricting access to the ballot.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["electoral-college-fair", "voter-id-no-fraud"],
  },
  {
    id: "media-only-left-bias",
    category: ["Media", "Culture Wars"],
    theySay: "All media is liberal bias! That's why I only trust independent sources!",
    youSay:
      "Reuters Institute data shows Americans increasingly rely on partisan outlets and social media - not a monolithic 'liberal media.' Sinclair, Fox, and talk radio reach tens of millions daily. 'Independent sources' often mean anonymous accounts with no editorial standards. Primary documents - court filings, agency records, CRS reports - beat any pundit.",
    stab: "Your 'independent' source is a guy in a truck with a ring light.",
    sources: [
      cite(
        "reuters_digital_news",
        "Digital News Report 2024",
        "Reuters Institute",
        "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024",
        "Reuters Institute surveys global news consumption and trust in media sources.",
        "2024-06-01"
      ),
      cite(
        "crs_media_rebut",
        "Freedom of Speech and Press: An Overview",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R43823",
        "CRS overview of First Amendment protections and media regulation.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["fake-news-media", "deep-state"],
  },
  {
    id: "tariffs-help-workers",
    category: ["Economy", "Foreign Policy"],
    theySay: "Tariffs protect American jobs! Other countries pay the tax!",
    youSay:
      "Tariffs are paid by U.S. importers and passed to consumers - the Tax Foundation and CBO both model them as a tax on American buyers, not foreign governments. Retaliatory tariffs hit U.S. farmers and manufacturers in export markets. Protectionism didn't save the Rust Belt; it raised prices on cars, appliances, and construction materials.",
    stab: "You're not sticking it to China. You're sticking your wallet.",
    sources: [
      cite(
        "taxfoundation_tariffs",
        "Trump Tariffs",
        "Tax Foundation",
        "https://taxfoundation.org/research/all/federal/trump-tariffs/",
        "Tax Foundation analyzes how import tariffs function as taxes on U.S. consumers and businesses.",
        "2025-01-01"
      ),
      cite(
        "cbo_tariff_outlook",
        "Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/61172",
        "CBO models trade policy impacts on prices, growth, and federal revenue.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["inflation-biden-fault", "trade-war-win"],
  },
  {
    id: "social-security-bankrupt",
    category: ["Economy", "Democracy"],
    theySay: "Social Security is going bankrupt! We need to cut benefits now!",
    youSay:
      "Social Security can pay full benefits through the 2030s without any changes, and modest revenue fixes - raising the payroll cap - extend solvency for decades. CBO's long-term outlook shows the program is underfunded, not bankrupt: it holds $2.8 trillion in trust fund reserves. 'Bankrupt' is a scare word to justify cuts voters never asked for.",
    stab: "Bankrupt is a campaign slogan, not an actuarial report.",
    sources: [
      cite(
        "cbo_social_security",
        "Social Security",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/social-security",
        "CBO publishes long-term projections for Social Security trust fund solvency.",
        "2025-01-01"
      ),
      cite(
        "ssa_trust_funds",
        "Status of the Social Security and Medicare Programs",
        "Social Security Administration",
        "https://www.ssa.gov/oact/trsum/",
        "SSA trustees report on trust fund reserves and projected depletion dates.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["entitlements-bankrupt", "fiscal-conservatives"],
  },
  {
    id: "crime-wave-cities",
    category: ["Crime", "Culture Wars"],
    theySay: "Democrat-run cities are crime-infested hellholes!",
    youSay:
      "BJS victimization surveys show violent crime near historic lows nationally - not a coast-to-coast explosion. Rural areas have seen rising overdose deaths and property crime too. Cherry-picking Chicago headlines while ignoring that red states lead in homicide rates per capita is propaganda, not criminology.",
    stab: "You're scared of cities you've never visited.",
    sources: [
      cite(
        "bjs_victimization_2023",
        "Criminal Victimization, 2023",
        "Bureau of Justice Statistics",
        "https://www.bjs.ojp.gov/library/publications/criminal-victimization-2023",
        "BJS National Crime Victimization Survey reports trends in violent and property crime.",
        "2024-09-01"
      ),
      cite(
        "bjs_homepage",
        "Bureau of Justice Statistics",
        "U.S. Department of Justice",
        "https://bjs.ojp.gov/",
        "BJS is the primary federal source for criminal justice statistics.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["defund-police", "sanctuary-cities-crime"],
  },
  {
    id: "immigrants-dont-pay-taxes",
    category: ["Immigration", "Economy"],
    theySay: "Illegal immigrants don't pay taxes - they drain the system!",
    youSay:
      "Undocumented immigrants pay billions in payroll, sales, and property taxes - often without receiving benefits. Cato Institute research finds immigrants commit fewer crimes and contribute net-positive to Social Security via taxes on invalid SSNs. The 'drain' narrative ignores IRS ITIN filers and state/local tax revenue.",
    stab: "They pay into Social Security they'll never collect.",
    sources: [
      cite(
        "cato_immigrant_crime",
        "Immigrants Commit Less Crime",
        "Cato Institute",
        "https://www.cato.org/blog/immigrants-commit-less-crime",
        "Cato research finds immigrants have lower incarceration rates than native-born Americans.",
        "2024-01-01"
      ),
      cite(
        "cato_immigration_brief",
        "Immigration and the Welfare State",
        "Cato Institute",
        "https://www.cato.org/publications/immigration-research-brief-no-14",
        "Cato analyzes fiscal contributions and public benefit usage by immigrants.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-invasion", "welfare-queens"],
  },
  {
    id: "climate-always-changing",
    category: ["Climate"],
    theySay: "The climate has always changed! It's natural cycles!",
    youSay:
      "Natural cycles don't explain the current rate of warming - NASA documents that atmospheric CO₂ is higher than at any point in 800,000 years of ice core data. The IPCC Sixth Assessment synthesizes thousands of studies attributing recent warming primarily to human greenhouse gas emissions. 'It's always changed' is true and irrelevant.",
    stab: "Lightning is natural too. That doesn't mean you stand on the golf course.",
    sources: [
      cite(
        "nasa_climate_consensus",
        "Scientific Consensus: Earth's Climate Is Warming",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA summarizes evidence that human activities are the primary driver of recent global warming.",
        "2024-01-01"
      ),
      cite(
        "ipcc_ar6",
        "Sixth Assessment Report",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/sixth-assessment-report-cycle/",
        "IPCC AR6 synthesizes global climate science and attribution of warming trends.",
        "2023-03-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["green-new-scam", "ev-mandate"],
  },
  {
    id: "book-bans-parent-rights",
    category: ["Education", "Culture Wars"],
    theySay: "We're not banning books - we're protecting parental rights!",
    youSay:
      "PEN America tracked thousands of book bans in public schools - removing Toni Morrison, Maus, and health curricula from library shelves. ALA documented record censorship attempts. Removing books from public institutions isn't parental choice; it's state censorship. Parents can already guide their own kids' reading.",
    stab: "Parental rights don't include vetoing everyone else's library card.",
    sources: [
      cite(
        "pen_banned_usa",
        "Banned in the USA",
        "PEN America",
        "https://pen.org/report/banned-in-the-usa/",
        "PEN America tracks book bans and educational censorship in U.S. schools.",
        "2024-01-01"
      ),
      cite(
        "ala_bbooks",
        "Banned & Challenged Books",
        "American Library Association",
        "https://www.ala.org/advocacy/bbooks",
        "ALA documents censorship attempts and challenges to library materials nationwide.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crt-schools", "teacher-grooming"],
  },
  {
    id: "supreme-court-not-political",
    category: ["Courts", "Democracy"],
    theySay: "The Supreme Court isn't political - they just follow the Constitution!",
    youSay:
      "Term-limit advocates and Fix the Court document decades of partisan appointments producing predictable 6-3 splits on voting rights, abortion, and executive power. Justices attend partisan fundraisers and accept undisclosed gifts. 'Not political' is how you describe a court whose rulings always align with one party's platform.",
    stab: "If it's not political, explain the party-line votes.",
    sources: [
      cite(
        "fix_court_term_limits",
        "Supreme Court Term Limits",
        "Fix the Court",
        "https://fixthecourt.com/fix/term-limits/",
        "Fix the Court advocates structural reforms including 18-year Supreme Court term limits.",
        "2024-01-01"
      ),
      cite(
        "crs_war_powers",
        "War Powers and the Use of Force",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/IF/IF10442",
        "CRS analyzes separation of powers and judicial review of executive authority.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["activist-judges", "court-packing"],
  },
  {
    id: "unions-hurt-economy",
    category: ["Economy"],
    theySay: "Unions destroy jobs and hurt the economy!",
    youSay:
      "BLS data shows union workers earn roughly 17% more in median weekly wages than nonunion workers. EPI research links stronger union density to lower inequality and higher middle-class wages. Right-to-work states didn't outperform - they just suppressed wages. Unions are a market correction to corporate power, not a jobs killer.",
    stab: "If unions kill jobs, why do bosses spend billions fighting them?",
    sources: [
      cite(
        "bls_union_wages",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS reports union membership rates and the union wage premium.",
        "2025-01-23"
      ),
      cite(
        "epi_labor_power",
        "Creating Jobs and Economic Security",
        "Economic Policy Institute",
        "https://www.epi.org/publication/creating-jobs-and-economic-security/",
        "EPI analyzes how labor policy affects wages, inequality, and job quality.",
        "2018-03-22"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["right-to-work-freedom", "minimum-wage-kills-jobs"],
  },
  {
    id: "voter-id-common-sense",
    category: ["Elections", "Democracy"],
    theySay: "Voter ID is common sense! You need ID to buy beer!",
    youSay:
      "Brennan Center research finds in-person voter impersonation exceedingly rare - you're more likely to be struck by lightning. Strict ID laws disproportionately disenfranchise elderly, low-income, and rural voters who lack driver's licenses. Buying beer isn't a constitutional right; voting is. The 'common sense' framing hides the goal: fewer eligible voters.",
    stab: "If fraud were rampant, they'd show convictions, not memes.",
    sources: [
      cite(
        "brennan_voter_fraud",
        "The Truth About Voter Fraud",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/truth-about-voter-fraud",
        "Brennan Center reviews documented cases of in-person voter impersonation fraud.",
        "2024-01-01"
      ),
      cite(
        "brennan_voting_roundup",
        "Voting Laws Roundup",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/voting-laws-roundup",
        "Brennan Center tracks state voting laws including strict photo ID requirements.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["voter-id-no-fraud", "election-stolen"],
  },
  {
    id: "welfare-undocumented",
    category: ["Immigration", "Economy"],
    theySay: "Undocumented immigrants get free welfare and housing!",
    youSay:
      "Federal law bars undocumented immigrants from nearly all means-tested benefits - SNAP, Medicaid, SSI, and TANF require citizenship or qualified status. Noncitizen voting is already illegal, and Brennan Center research finds it virtually nonexistent. The 'free stuff' narrative is a decades-old scare tactic with no basis in eligibility rules.",
    stab: "Read the eligibility requirements before you rage-post.",
    sources: [
      cite(
        "brennan_noncitizen_voting",
        "Noncitizen Voting: The Missing Millions",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
        "Brennan Center examines claims of noncitizen voting and finds no evidence of widespread fraud.",
        "2024-01-01"
      ),
      cite(
        "cbo_immigration_fiscal",
        "The Economic Impact of S. 744",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO analyzes fiscal impacts of immigration policy on federal budgets and benefits.",
        "2013-06-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-invasion", "welfare-queens"],
  },
  {
    id: "activist-judges-block",
    category: ["Courts", "Democracy"],
    theySay: "Activist judges are blocking everything Trump does! Let the president govern!",
    youSay:
      "Courts aren't activists for ruling on the law - that's their job. When judges block birthright citizenship orders or Schedule F expansions, they're citing the Constitution and the Administrative Procedure Act. CRS documents that every modern president faces judicial review; the difference is how many policies this administration pushes beyond statutory authority. Checks and balances aren't obstruction - they're the design.",
    stab: "You want a king, not a president. The courts said no.",
    sources: [
      cite(
        "crs_war_powers",
        "War Powers and the Use of Force",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/IF/IF10442",
        "CRS analyzes separation of powers and judicial review of executive authority.",
        "2024-01-01"
      ),
      cite(
        "scotus_immunity_rebut",
        "Trump v. United States",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/23",
        "The Supreme Court held presidents have presumptive immunity from criminal prosecution for official acts.",
        "2024-07-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["courts-will-fix-it", "presidential-power-normal"],
  },
  {
    id: "foreign-aid-waste",
    category: ["Foreign Policy", "Economy"],
    theySay: "Foreign aid is a waste! We give billions to countries that hate us!",
    youSay:
      "U.S. foreign assistance is roughly 1% of the federal budget - and most goes to American contractors, NGOs, and allies for security, health, and famine relief. State Department data shows aid buys influence, stabilizes regions that would otherwise produce refugees, and counters adversaries like China. USAID dismantling doesn't save taxpayers money - it cedes global leadership.",
    stab: "It's 1% of the budget and 100% of the soft power.",
    sources: [
      cite(
        "state_press",
        "U.S. Department of State Press Releases",
        "U.S. Department of State",
        "https://www.state.gov/press-releases/",
        "State Department documents foreign assistance programs and diplomatic priorities.",
        "2025-01-01"
      ),
      cite(
        "cbo_immigration_fiscal",
        "The Economic Impact of S. 744",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO analyzes fiscal impacts of immigration and related policy on federal budgets.",
        "2013-06-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["ukraine-money-laundering", "america-first-fair"],
  },
  {
    id: "dei-illegal-discrimination",
    category: ["Culture Wars", "Economy"],
    theySay: "DEI is reverse racism! It's illegal discrimination against white men!",
    youSay:
      "DEI programs in federal contracting promote inclusion within existing civil rights law - they don't create quotas. EEOC enforces Title VII for everyone, including white applicants who face actual discrimination. The attack on DEI is a political purge of offices and training, not a legal correction. If someone was illegally denied a job, they already have remedies - what changed is the political will to fire civil servants.",
    stab: "They didn't file lawsuits. They fired the investigators.",
    sources: [
      cite(
        "eeoc_newsroom",
        "EEOC Newsroom",
        "U.S. Equal Employment Opportunity Commission",
        "https://www.eeoc.gov/newsroom/",
        "EEOC enforces federal laws prohibiting employment discrimination based on protected characteristics.",
        "2025-01-01"
      ),
      cite(
        "dei_termination_rebut",
        "Ending Radical DEI Programs",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-and-wasteful-government-dei-programs-and-preferencing/",
        "Executive order terminating federal DEI offices and related programs across agencies.",
        "2025-01-20"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["dei-plane-crash", "affirmative-action-reverse-racism"],
  },
  {
    id: "green-energy-blackouts",
    category: ["Climate", "Economy"],
    theySay: "Green energy causes blackouts! Texas proved renewables don't work!",
    youSay:
      "Texas's 2021 grid failure was primarily a natural gas supply freeze - EIA data shows gas plants failed at scale while wind outperformed expectations. NOAA documents rising billion-dollar weather disasters that strain every grid regardless of fuel mix. The fix is modernized transmission and storage, not pretending coal plants are immune to ice storms.",
    stab: "The pipes froze. The turbines didn't cause it.",
    sources: [
      cite(
        "eia_grid_reliability",
        "Today in Energy - Grid and Fuel Mix",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/detail.php?id=61262",
        "EIA analyzes electricity generation sources and grid reliability factors.",
        "2024-01-01"
      ),
      cite(
        "noaa_billion_disasters",
        "Billion-Dollar Weather and Climate Disasters",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/billions/",
        "NOAA tracks rising frequency and cost of billion-dollar weather disasters in the U.S.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["renewable-unreliable", "climate-hoax"],
  },
  {
    id: "irs-political-weapon",
    category: ["Democracy", "Economy"],
    theySay: "The IRS is a political weapon! They're coming for conservatives!",
    youSay:
      "IRS enforcement funding from the Inflation Reduction Act targeted high-income tax evasion - Treasury data shows audit rates remain lowest for middle-class filers. Every administration faces accusations of bias; the remedy is adequate staffing and oversight, not defunding enforcement so billionaires skip taxes. Project 2025 explicitly calls for shrinking IRS capacity - that's not neutrality, it's amnesty for the wealthy.",
    stab: "They defunded audits of the rich and called it freedom.",
    sources: [
      cite(
        "irs_newsroom",
        "IRS Newsroom",
        "Internal Revenue Service",
        "https://www.irs.gov/newsroom",
        "IRS publishes enforcement priorities, audit statistics, and taxpayer service updates.",
        "2025-01-01"
      ),
      cite(
        "treasury_press",
        "Treasury Department Press Releases",
        "U.S. Department of the Treasury",
        "https://home.treasury.gov/news/press-releases",
        "Treasury oversees IRS policy and publishes tax enforcement and revenue data.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["deep-state", "billionaires-earned-it"],
  },
  {
    id: "china-owns-us-debt",
    category: ["Economy", "Foreign Policy"],
    theySay: "China owns all our debt! They could crash our economy anytime!",
    youSay:
      "China holds roughly $800 billion in U.S. Treasury securities - less than 3% of total federal debt and far below Japan's holdings. Treasury's Monthly Treasury Statement shows most U.S. debt is owned domestically by American investors, the Fed, and Social Security. China dumping Treasuries would hurt China's own reserves more than it would give Beijing leverage over Washington.",
    stab: "They own 3% of the debt, not the country.",
    sources: [
      cite(
        "treasury_mts",
        "Monthly Treasury Statement",
        "U.S. Department of the Treasury",
        "https://www.fiscal.treasury.gov/reports-statements/mts/",
        "Treasury publishes monthly data on federal debt holdings and major foreign creditors.",
        "2025-01-01"
      ),
      cite(
        "cbo_economy",
        "CBO Economic Projections",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/economy",
        "CBO analyzes federal debt, deficits, and macroeconomic conditions.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["america-first-fair", "inflation-biden-fault"],
  },
  {
    id: "red-flag-gun-grab",
    category: ["Crime"],
    theySay: "Red flag laws are a gun grab! They take guns without due process!",
    youSay:
      "Extreme risk protection orders require court hearings - a judge reviews evidence before any temporary removal, and the respondent can contest it. Giffords Law Center documents that ERPOs are civil proceedings with appeal rights, distinct from criminal confiscation. States with red flag laws have used them to prevent mass shootings and suicides. Due process doesn't mean ignoring warning signs until after a massacre.",
    stab: "A judge signs the order. That's due process.",
    sources: [
      cite(
        "giffords_red_flag",
        "Extreme Risk Laws",
        "Giffords Law Center",
        "https://giffords.org/lawcenter/gun-laws/policy-areas/background-checks/universal-background-checks/",
        "Giffords documents state extreme risk protection order laws and court procedures.",
        "2024-01-01"
      ),
      cite(
        "pew_guns",
        "Key Facts About Americans and Guns",
        "Pew Research Center",
        "https://www.pewresearch.org/short-reads/2023/09/13/key-facts-about-americans-and-guns/",
        "Pew surveys American attitudes toward gun policy and ownership.",
        "2023-09-13"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["take-your-guns", "gun-free-zones"],
  },
  {
    id: "epa-kills-jobs",
    category: ["Climate", "Economy"],
    theySay: "EPA regulations kill jobs! We need to slash the green tape!",
    youSay:
      "EPA cost-benefit analyses consistently show health benefits from clean air rules exceed compliance costs - fewer asthma attacks, premature deaths, and missed workdays. BLS data shows more Americans work in clean energy than in coal mining. Rolling back methane standards and dismissing science advisory boards doesn't create jobs - it transfers healthcare costs onto communities while polluters keep profits.",
    stab: "They counted coal jobs. They ignored hospital bills.",
    sources: [
      cite(
        "epa_methane_rule",
        "EPA Methane Standards for Oil and Gas",
        "Environmental Protection Agency",
        "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations/epas-final-rule-reduce-methane-and-other",
        "EPA issued standards requiring oil and gas facilities to reduce methane emissions.",
        "2024-03-08"
      ),
      cite(
        "bls_employment",
        "Employment Situation Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cps/",
        "BLS publishes monthly employment and industry workforce statistics.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["climate-hoax", "green-new-scam"],
  },
  {
    id: "census-citizens-only",
    category: ["Elections", "Immigration"],
    theySay: "The census should only count citizens! Illegals are stealing House seats!",
    youSay:
      "The Constitution requires counting 'the whole number of persons in each state' - text the Supreme Court has upheld for apportionment. Excluding noncitizens would shift House seats away from diverse states toward rural ones, punishing communities that contribute tax revenue regardless of status. The citizenship question fight wasn't about accuracy - it was about suppressing participation and rigging representation.",
    stab: "Read Article I, Section 2. It says persons, not citizens.",
    sources: [
      cite(
        "crs_apportionment",
        "Apportionment and Redistricting",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R44795",
        "CRS explains constitutional requirements for census apportionment of House seats.",
        "2024-01-01"
      ),
      cite(
        "brennan_voting_roundup",
        "Voting Laws Roundup",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/voting-laws-roundup",
        "Brennan Center tracks state voting laws and census-related representation debates.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["illegals-voting", "election-stolen"],
  },
  {
    id: "overtime-destroy-small-biz",
    category: ["Economy"],
    theySay: "Overtime rules will destroy small businesses! They can't afford it!",
    youSay:
      "DOL overtime updates extend time-and-a-half pay to salaried workers earning below a threshold - meaning more money in workers' pockets, not corporate bailouts. EPI research shows underpaid salaried employees routinely work 50+ hours without extra pay. Small businesses that rely on exploiting free overtime are complaining about having to pay for labor - that's not a policy failure, that's the point.",
    stab: "If your business model requires unpaid labor, that's the problem.",
    sources: [
      cite(
        "dol_overtime",
        "Overtime Rulemaking",
        "U.S. Department of Labor",
        "https://www.dol.gov/agencies/whd/overtime",
        "DOL publishes overtime pay threshold updates and regulatory impact analyses.",
        "2024-01-01"
      ),
      cite(
        "epi_labor_power",
        "Creating Jobs and Economic Security",
        "Economic Policy Institute",
        "https://www.epi.org/publication/creating-jobs-and-economic-security/",
        "EPI analyzes how labor policy affects wages, inequality, and job quality.",
        "2018-03-22"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["minimum-wage-kills-jobs", "overtime-pay-destroy-jobs"],
  },
  {
    id: "nato-obsolete-deadbeat",
    category: ["Foreign Policy"],
    theySay: "NATO is obsolete! Europe doesn't pay their fair share!",
    youSay:
      "NATO's Article 5 has only been invoked once - for the United States after 9/11. European allies increased defense spending after Russia invaded Ukraine, and U.S. troop deployments in Europe are a fraction of Cold War levels. Calling allies deadbeats while taking their intelligence support and basing rights is negotiation theater, not strategy.",
    stab: "You want allies to pay more while threatening to abandon them. Pick one.",
    sources: [
      cite(
        "crs_nato",
        "NATO: Background and Issues for Congress",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R44762",
        "CRS summarizes NATO structure, burden-sharing debates, and U.S. commitments.",
        "2024-01-01"
      ),
      cite(
        "acslaw_war_powers",
        "War Powers and Military Force Authorizations",
        "American Constitution Society",
        "https://www.acslaw.org/issues/war-powers/",
        "ACS tracks congressional war powers and overseas military commitments.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-peace-president", "ukraine-money-laundering"],
  },
  {
    id: "absentee-ballot-rigging",
    category: ["Elections"],
    theySay: "Absentee ballots are how they rig elections! Mail voting is fraud!",
    youSay:
      "Five states vote entirely by mail with no systemic fraud findings. Heritage Foundation's own database lists vanishingly few prosecuted cases relative to hundreds of millions of ballots cast. Signature verification, barcodes, and bipartisan ballot boards make large-scale mail fraud practically impossible - which is why courts rejected every post-2020 challenge with evidence.",
    stab: "If mail ballots were rigged, Republicans wouldn't use them too.",
    sources: [
      cite(
        "brennan_mail",
        "The False Narrative of Vote-by-Mail Fraud",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/truth-about-voter-fraud",
        "Brennan Center research finds mail ballot fraud is exceedingly rare.",
        "2020-04-01"
      ),
      cite(
        "heritage_fraud",
        "Election Fraud Cases",
        "Heritage Foundation",
        "https://www.heritage.org/voterfraud",
        "Heritage maintains a database of prosecuted election fraud cases - a tiny fraction of total ballots cast.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["mail-ballot-fraud", "election-stolen"],
  },
  {
    id: "church-politics-tax-exempt",
    category: ["Culture Wars", "Democracy"],
    theySay: "Pastors should preach politics! The Johnson Amendment is censorship!",
    youSay:
      "The Johnson Amendment only threatens tax-exempt status when churches explicitly endorse candidates - not when they discuss issues. IRS data shows almost zero enforcement actions against churches. Lifting it would turn congregations into dark-money pipelines, letting billionaires launder political donations through pulpits while keeping donors anonymous.",
    stab: "You want free speech or tax-free campaigning? Churches already have the first.",
    sources: [
      cite(
        "crs_johnson",
        "The Johnson Amendment and Political Campaign Intervention",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/IF10442",
        "CRS explains scope and enforcement history of the Johnson Amendment.",
        "2024-01-01"
      ),
      cite(
        "irs_newsroom",
        "IRS Newsroom",
        "Internal Revenue Service",
        "https://www.irs.gov/newsroom",
        "IRS publishes guidance on tax-exempt organization political activity limits.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["dark-money", "christians-persecuted"],
  },
  {
    id: "nasa-climate-waste",
    category: ["Climate"],
    theySay: "NASA wastes money on climate propaganda! Stick to space!",
    youSay:
      "Earth observation is core NASA mission since the agency's founding - weather satellites, hurricane tracking, and drought monitoring save lives and billions in disaster costs. NOAA and NASA climate data are used by farmers, insurers, and the Pentagon. Calling atmospheric science 'propaganda' doesn't change physics; it just blinds policy to measurable risks.",
    stab: "You want hurricane warnings without the satellites that issue them?",
    sources: [
      cite(
        "nasa_climate",
        "Climate Change and Global Warming",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA documents scientific consensus and Earth observation missions.",
        "2024-01-01"
      ),
      cite(
        "noaa_billion",
        "Billion-Dollar Weather and Climate Disasters",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/billions/",
        "NOAA tracks rising frequency and cost of billion-dollar weather disasters.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax", "climate-always-changing"],
  },
  {
    id: "executive-orders-only-dems",
    category: ["Democracy", "Whataboutism"],
    theySay: "Democrats use executive orders like dictators! Trump is just undoing Biden!",
    youSay:
      "Trump's Day One rescission of 78 prior orders exceeded any modern transition. CRS tracks executive order volume and scope - unitary executive theory, Schedule F, and birthright citizenship by fiat go far beyond reversing a predecessor. The question isn't who used more EOs; it's which orders violate statute, courts, and constitutional text.",
    stab: "Undoing policy is normal. Rewriting the Constitution by memo isn't.",
    sources: [
      cite(
        "crs_exec_orders",
        "Executive Orders: Issuance and Revocation",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R42699",
        "CRS analyzes executive order issuance patterns across administrations.",
        "2024-03-15"
      ),
      cite(
        "cpr_tracker",
        "Project 2025 Executive Action Tracker",
        "Center for Progressive Reform",
        "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
        "CPR documents scope and pace of second-term executive actions vs. Project 2025 agenda.",
        "2026-02-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["but-obama-did-this", "presidential-power-normal"],
  },
  {
    id: "anchor-baby-deport-them-all",
    category: ["Immigration", "Elections"],
    theySay: "Anchor babies aren't citizens! Deport the whole family!",
    youSay:
      "The 14th Amendment grants citizenship to all persons born in the United States - text the Supreme Court has upheld for over a century. CRS confirms birthright citizenship cannot be revoked by executive order. Mass deportation of mixed-status families would require abandoning due process and costing billions - while doing nothing to fix a broken immigration system Congress refuses to legislate.",
    stab: "You want to repeal the 14th Amendment with a tweet. Good luck with that.",
    sources: [
      cite(
        "crs_birthright",
        "Birthright Citizenship Under the 14th Amendment",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/IN/IN11234",
        "CRS explains constitutional basis for birthright citizenship.",
        "2024-01-01"
      ),
      cite(
        "aclu_birthright",
        "Federal Court Blocks Birthright Citizenship Order",
        "American Civil Liberties Union",
        "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order",
        "Federal courts blocked executive order attempting to end birthright citizenship.",
        "2025-01-23"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["birthright-citizenship-myth", "census-citizens-only"],
  },
  {
    id: "stock-market-economy",
    category: ["Economy"],
    theySay: "The stock market is at record highs! The economy is booming!",
    youSay:
      "The S&P 500 reflects corporate profits and Fed policy - not grocery bills or rent. BEA data shows GDP growth can coexist with rising inequality; median household wealth lags top-decile asset holders who own most equities. A record market while childcare, housing, and healthcare crush working families isn't a boom - it's a split screen.",
    stab: "Congrats on your portfolio. The checkout line didn't get the memo.",
    sources: [
      cite(
        "bea_gdp",
        "Gross Domestic Product",
        "Bureau of Economic Analysis",
        "https://www.bea.gov/data/gdp/gross-domestic-product",
        "BEA publishes official U.S. GDP and national income accounts.",
        "2025-01-01"
      ),
      cite(
        "cbo_economy_wealth",
        "CBO Economic Projections",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/economy",
        "CBO analyzes income distribution, deficits, and macroeconomic conditions.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["stock-market-president", "trump-best-economy-ever"],
  },
  {
    id: "school-shootings-gun-free",
    category: ["Crime"],
    theySay: "Every school shooting happens in a gun-free zone! Arm the teachers!",
    youSay:
      "Most mass shootings occur where guns are already present - homes, workplaces, churches. Giffords research shows armed civilians rarely stop active shooters and police cite crossfire risks when untrained responders open fire. The gun-free zone myth ignores that federal law already allows states to arm school staff - and most districts reject it after insurance and training costs.",
    stab: "More guns in chaos isn't a plan. It's a liability waiver.",
    sources: [
      cite(
        "giffords_gunfree",
        "Gun-Free Zones",
        "Giffords Law Center",
        "https://giffords.org/lawcenter/gun-laws/policy-areas/background-checks/universal-background-checks/",
        "Giffords analyzes claims about gun-free zones and armed civilian intervention.",
        "2024-01-01"
      ),
      cite(
        "fbi_crime_data",
        "FBI Crime Data Explorer",
        "Federal Bureau of Investigation",
        "https://www.fbi.gov/",
        "FBI publishes national crime statistics and active shooter incident reports.",
        "2023-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["gun-free-zones", "take-your-guns"],
  },
  {
    id: "public-unions-bloat",
    category: ["Economy", "Education"],
    theySay: "Public sector unions bloat budgets! Teachers unions protect bad apples!",
    youSay:
      "BLS data shows public-sector union density at historic lows while class sizes rise and teacher pay stagnates. EPI research links union bargaining to smaller teacher-student ratios and lower turnover - not budget bloat. Attacking collective bargaining is a cost-cutting strategy that shifts pain to classrooms while tax cuts for the wealthy stay off the table.",
    stab: "You want cheaper schools. Teachers want functioning ones. Those aren't the same fight.",
    sources: [
      cite(
        "bls_public_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS reports union membership rates in public and private sectors.",
        "2025-01-23"
      ),
      cite(
        "epi_teachers",
        "Creating Jobs and Economic Security",
        "Economic Policy Institute",
        "https://www.epi.org/publication/creating-jobs-and-economic-security/",
        "EPI analyzes how labor policy affects wages, public services, and inequality.",
        "2018-03-22"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["unions-corrupt", "public-schools-failing"],
  },
  {
    id: "birth-control-otc-blocked",
    category: ["Healthcare", "Culture Wars"],
    theySay: "Democrats block over-the-counter birth control! They want abortion, not choice!",
    youSay:
      "FDA approved the first OTC birth control pill in 2023 with bipartisan support. Democrats expanded ACA contraceptive coverage while red states sue to restrict it. Conflating OTC access with abortion policy is a culture-war bait-and-switch - the same politicians banning IVF and threatening contraceptive coverage can't claim they're the pro-choice side on birth control.",
    stab: "You can't be pro-OTC birth control and anti-ACA contraceptive mandates at once.",
    sources: [
      cite(
        "kff_contraception",
        "ACA Preventive Services and Contraception Coverage",
        "Kaiser Family Foundation",
        "https://www.kff.org/womens-health-policy/",
        "KFF tracks contraceptive coverage requirements and state-level restrictions.",
        "2024-01-01"
      ),
      cite(
        "cdc_reproductive",
        "Reproductive Health Data and Statistics",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC publishes reproductive health surveillance and access data.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["birth-control-iud-forced", "abortion-late-term"],
  },
  {
    id: "social-security-bankrupt",
    category: ["Economy", "Whataboutism"],
    theySay: "Social Security is going bankrupt! Democrats stole the trust fund!",
    youSay:
      "Social Security's trust fund is a legal accounting mechanism - not a piggy bank Congress raided. SSA actuaries publish annual projections; solvency gaps are closed through modest revenue adjustments Congress refuses to pass because billionaires oppose payroll tax hikes on high earners. Calling it 'bankrupt' is a pretext to cut benefits voters already paid for.",
    stab: "You want to 'save' Social Security by cutting it. That's not math - it's theft.",
    sources: [
      cite(
        "ssa_trustees",
        "Annual Report of the Board of Trustees",
        "Social Security Administration",
        "https://www.ssa.gov/oact/trsum/",
        "SSA trustees report documents long-range trust fund projections and policy options.",
        "2025-05-01"
      ),
      cite(
        "cbo_social_security",
        "Social Security Policy Options",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/social-security",
        "CBO analyzes Social Security financing and legislative reform options.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["entitlements-bankrupt", "medicare-broke"],
  },
  {
    id: "fbi-political-weapon",
    category: ["Democracy", "Jan 6"],
    theySay: "The FBI is a political weapon! They only go after conservatives!",
    youSay:
      "DOJ prosecuted more than 1,500 January 6 defendants using public court records - not secret tribunals. FBI crime statistics and Capitol breach case listings are published online. When Trump's DOJ dropped cases or pardoned rioters, that was political - the original prosecutions followed evidence and plea agreements documented in federal dockets.",
    stab: "You want law enforcement - until it enforces law against your side.",
    sources: [
      cite(
        "doj_j6_cases",
        "Capitol Breach Cases",
        "U.S. Department of Justice",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "DOJ maintains public listings of January 6 prosecutions and outcomes.",
        "2025-01-01"
      ),
      cite(
        "fbi_ucr",
        "FBI Crime Data Explorer",
        "Federal Bureau of Investigation",
        "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr",
        "FBI publishes national crime statistics and investigative transparency reports.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["deep-state-fbi", "jan6-political-prisoners"],
  },
  {
    id: "inflation-biden-only",
    category: ["Economy", "Whataboutism"],
    theySay: "Biden caused all inflation! Trump fixed it instantly!",
    youSay:
      "Global inflation spiked after pandemic supply shocks and Russia's Ukraine invasion - not a single U.S. executive order. BLS CPI data shows disinflation through 2024-2025 as supply chains normalized. Tariffs Trump imposed are themselves inflationary taxes on imports, per Tax Foundation analysis. Blaming one president ignores Federal Reserve policy and worldwide commodity markets.",
    stab: "World events move prices. Your meme doesn't.",
    sources: [
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official U.S. inflation data by category and region.",
        "2025-01-01"
      ),
      cite(
        "tax_foundation_tariffs",
        "Trump Tariffs",
        "Tax Foundation",
        "https://taxfoundation.org/research/all/federal/trump-tariffs/",
        "Tax Foundation models tariff impacts on consumer prices and economic growth.",
        "2025-04-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["biden-inflation", "gas-prices-president"],
  },
  {
    id: "crt-teaches-hate-white",
    category: ["Education", "Culture Wars"],
    theySay: "CRT teaches kids to hate white people! It's Marxist indoctrination!",
    youSay:
      "Critical race theory is a graduate-level legal framework - not a K-12 curriculum. Brookings research on state gag orders shows the moral panic targets any honest history instruction. No federal mandate requires CRT in classrooms; red-state laws instead ban books and discussion of racism, which PEN America documents as educational censorship.",
    stab: "You can't name a single fourth-grade CRT textbook. Because it doesn't exist.",
    sources: [
      cite(
        "brookings_crt_bans",
        "Why Are States Banning Critical Race Theory?",
        "Brookings Institution",
        "https://www.brookings.edu/articles/why-are-states-banning-critical-race-theory/",
        "Brookings analyzes state legislation targeting CRT and classroom speech.",
        "2021-07-02"
      ),
      cite(
        "pen_gag_orders",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN America tracks state laws restricting teaching about race, gender, and history.",
        "2023-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crt-schools", "schools-indoctrination"],
  },
  {
    id: "renewables-unreliable-texas",
    category: ["Climate", "Economy"],
    theySay: "Wind and solar caused the Texas blackout! Renewables are unreliable!",
    youSay:
      "EIA post-mortems of the 2021 Texas freeze show gas plants failed at scale when equipment froze - wind outperformed grid operator expectations. Every grid needs winterization and storage; blaming renewables is fossil-fuel propaganda to delay transmission upgrades. NOAA documents rising extreme weather that strains all generation types.",
    stab: "Gas plants froze. You blamed the turbines. Follow the EIA data.",
    sources: [
      cite(
        "eia_texas_freeze",
        "Texas Energy Production During Winter Storm Uri",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/detail.php?id=61364",
        "EIA analyzes fuel-type failures during the 2021 Texas grid crisis.",
        "2021-03-01"
      ),
      cite(
        "noaa_billion_disasters",
        "Billion-Dollar Weather and Climate Disasters",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/billions/",
        "NOAA tracks rising frequency and cost of extreme weather events.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["renewables-unreliable", "green-new-deal-ban-cows"],
  },
  {
    id: "supreme-court-activist",
    category: ["Courts", "Democracy"],
    theySay: "Democrats are court-packing radicals! The Supreme Court is just correcting activism!",
    youSay:
      "The current Court overturned 50 years of abortion precedent, expanded presidential immunity, and ended race-conscious college admissions - without public congressional mandate. CRS tracks the shrinking docket of meritorious petitions while high-profile ideological cases advance. Calling it 'correction' after billionaire-funded judicial selection is politics, not neutral jurisprudence.",
    stab: "You liked judicial activism when it delivered your policy wins.",
    sources: [
      cite(
        "scotus_opinions_23",
        "Supreme Court Opinions 2023 Term",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/slipopinion/23",
        "SCOTUS publishes official opinions including Dobbs, immunity, and admissions rulings.",
        "2024-07-01"
      ),
      cite(
        "crs_scotus",
        "The Supreme Court: An Overview",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46727",
        "CRS explains Court jurisdiction, appointment process, and major doctrinal shifts.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["court-packing", "judges-activist"],
  },
  {
    id: "immigrants-drain-welfare",
    category: ["Immigration", "Economy"],
    theySay: "Immigrants drain welfare! They get free everything while we pay!",
    youSay:
      "Undocumented immigrants are largely ineligible for federal means-tested benefits - and pay billions in taxes via ITIN filings without receiving Social Security payouts. Cato Institute immigration research documents lower crime rates and net fiscal contributions from immigrant households. The 'free ride' narrative collapses when you read eligibility rules in statute.",
    stab: "They pay taxes for benefits they can't claim. You're mad at a ghost.",
    sources: [
      cite(
        "cato_immigrant_crime",
        "Immigrants Commit Less Crime",
        "Cato Institute",
        "https://www.cato.org/blog/immigrants-commit-less-crime",
        "Cato research finds immigrants commit fewer crimes than native-born citizens.",
        "2020-01-01"
      ),
      cite(
        "cato_immigration_fiscal",
        "Immigration and the Welfare State",
        "Cato Institute",
        "https://www.cato.org/publications/immigration-research-brief-no-14",
        "Cato analyzes immigrant fiscal contributions and benefit eligibility restrictions.",
        "2013-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["immigrants-welfare", "open-borders"],
  },
  {
    id: "death-panels-real",
    category: ["Healthcare"],
    theySay: "Obamacare has death panels! Government will ration your care!",
    youSay:
      "PolitiFact named 'death panels' the 2009 Lie of the Year - the claim misrepresented end-of-life counseling as government euthanasia boards. ACA premium tax credits expanded coverage to millions; KFF documents what happens when those credits expire. The real rationing is unaffordable deductibles in a for-profit system - not Medicare advisory boards that were never enacted.",
    stab: "Lie of the Year. Still recycling it fifteen years later.",
    sources: [
      cite(
        "politifact_death_panels",
        "PolitiFact's Lie of the Year: Death Panels",
        "PolitiFact",
        "https://www.politifact.com/article/2009/dec/18/politifact-lie-year-death-panels/",
        "PolitiFact debunked death panel claims as the 2009 Lie of the Year.",
        "2009-12-18"
      ),
      cite(
        "kff_aca_premiums",
        "ACA Marketplace Premium Payments",
        "Kaiser Family Foundation",
        "https://www.kff.org/affordable-care-act/aca-marketplace-premium-payments-would-more-than-double-on-average-next-year-if-enhanced-premium-tax-credits-expire/",
        "KFF models ACA premium impacts if enhanced tax credits expire.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["obamacare-failing", "medicare-for-all-rationing"],
  },
  {
    id: "trump-tax-cuts-paid",
    category: ["Economy", "Whataboutism"],
    theySay: "Trump's tax cuts paid for themselves! Revenue went up!",
    youSay:
      "CBO scored the 2017 Tax Cuts and Jobs Act as adding $1.9 trillion to deficits over a decade - revenue bumps from economic growth did not offset rate cuts for corporations and wealthy estates. Treasury monthly statements show deficits rising with interest costs. 'Paying for themselves' is supply-side marketing, not fiscal accounting.",
    stab: "CBO ran the numbers. Your bumper sticker didn't.",
    sources: [
      cite(
        "cbo_tcja",
        "The Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO projected TCJA deficit impacts and revenue effects.",
        "2018-04-01"
      ),
      cite(
        "treasury_mts",
        "Monthly Treasury Statement",
        "U.S. Department of the Treasury",
        "https://www.fiscal.treasury.gov/reports-statements/mts/",
        "Treasury publishes monthly federal receipts, outlays, and deficit data.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-best-economy-ever", "tax-cuts-pay-themselves"],
  },
  {
    id: "election-machines-rigged",
    category: ["Elections", "Media"],
    theySay: "Dominion machines flipped votes! The algorithms are rigged!",
    youSay:
      "Dominion won defamation settlements from networks that aired conspiracy theories - with no evidence of vote flipping in any certified audit. AP's 2020 Georgia review found no fraudulent ballots. Voting machines produce paper records recountable by hand; the 'algorithm' claim ignores that bipartisan county boards certify results independently.",
    stab: "Fox paid for this lie. You got it for free.",
    sources: [
      cite(
        "ap_georgia_audit",
        "AP Review of Georgia Ballots",
        "Associated Press",
        "https://apnews.com/article/election-2020-joe-biden-donald-trump-georgia-elections-1a2ea5e8df69614f4e09b47fea581a09",
        "AP found no evidence of widespread fraud in Georgia's 2020 election audit.",
        "2021-12-01"
      ),
      cite(
        "dominion_defamation",
        "Dominion Voting Systems News",
        "Dominion Voting Systems",
        "https://www.dominionvoting.com/news/",
        "Dominion documents defamation litigation outcomes against election-fraud claims.",
        "2023-04-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["election-stolen", "voting-machines"],
  },
  {
    id: "if-global-warming-why-cold",
    category: ["Climate"],
    theySay: "If global warming is real, why is it snowing? Climate change is a hoax!",
    youSay:
      "Weather is what happens today; climate is the long-term pattern. NOAA documents rising global temperatures and increasing billion-dollar disaster frequency - winter storms still occur, but heat records outpace cold records by widening margins. IPCC explains that a warmer atmosphere holds more moisture, which can intensify both droughts and blizzards. Confusing a snow day with planetary physics is the hoax.",
    stab: "Your thermometer reads the whole planet, not your driveway.",
    sources: [
      cite(
        "noaa_billions",
        "Billion-Dollar Weather and Climate Disasters",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/billions/",
        "NOAA tracks rising frequency and cost of extreme weather events.",
        "2025-01-01"
      ),
      cite(
        "ipcc_ar6",
        "IPCC Sixth Assessment Report",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/syr/",
        "IPCC synthesizes peer-reviewed climate science on warming trends and extreme weather.",
        "2023-03-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax", "natural-climate-cycles"],
  },
  {
    id: "reagan-ended-inflation",
    category: ["Economy", "Whataboutism"],
    theySay: "Reagan fixed the economy! Inflation was terrible until he cut taxes!",
    youSay:
      "Inflation peaked in 1980 under Carter and fell under Volcker's Federal Reserve rate hikes - years before Reagan's 1981 tax cuts took full effect. CBO and BEA data show the recovery was driven by monetary policy and oil price collapse, not supply-side magic. Reagan also tripled the national debt and raised taxes eleven times. Credit the Fed chair, not the Hollywood narrative.",
    stab: "Volcker broke inflation. Reagan took the credit.",
    sources: [
      cite(
        "bea_gdp",
        "Gross Domestic Product",
        "Bureau of Economic Analysis",
        "https://www.bea.gov/data/gdp/gross-domestic-product",
        "BEA publishes official GDP and economic growth data.",
        "2025-01-01"
      ),
      cite(
        "cbo_outlook",
        "The Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/54994",
        "CBO analyzes federal deficits and economic effects of fiscal policy.",
        "2018-04-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-best-economy-ever", "trickle-down-works"],
  },
  {
    id: "california-communist",
    category: ["Economy", "Culture Wars"],
    theySay: "California is communist! They're a failed socialist state!",
    youSay:
      "California has the fifth-largest economy on Earth - larger than most nations - driven by tech, agriculture, and entertainment. It runs budget surpluses in strong years and ranks among the top states for venture capital and patent filings. Calling a capitalist powerhouse with more billionaires than most countries 'communist' is propaganda, not economics. Policy disagreements aren't gulags.",
    stab: "Communist states don't host more billionaires than France.",
    sources: [
      cite(
        "bea_gdp_state",
        "Gross Domestic Product by State",
        "Bureau of Economic Analysis",
        "https://www.bea.gov/data/gdp/gross-domestic-product",
        "BEA measures state-level economic output.",
        "2025-01-01"
      ),
      cite(
        "cbo_economy",
        "CBO Economic Analysis",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/economy",
        "CBO publishes nonpartisan economic research and projections.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["socialism", "democrats-hate-america"],
  },
  {
    id: "guns-dont-kill-people",
    category: ["Crime"],
    theySay: "Guns don't kill people, people kill people! It's not the gun!",
    youSay:
      "People with guns kill far more efficiently than people without them. States with higher gun ownership rates correlate with higher firearm mortality - FBI UCR and CDC data confirm guns are the leading method in homicides and suicides. The slogan treats a designed killing tool as morally neutral hardware. We regulate cars, medicine, and airplanes because design matters.",
    stab: "Nobody says 'cars don't crash, drivers crash' to ban seatbelts.",
    sources: [
      cite(
        "fbi_ucr",
        "FBI Uniform Crime Reporting",
        "Federal Bureau of Investigation",
        "https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/ucr",
        "FBI publishes national crime statistics including firearm-related homicides.",
        "2024-01-01"
      ),
      cite(
        "pew_guns",
        "Key Facts About Americans and Guns",
        "Pew Research Center",
        "https://www.pewresearch.org/short-reads/2023/09/13/key-facts-about-americans-and-guns/",
        "Pew surveys gun ownership, policy attitudes, and violence statistics.",
        "2023-09-13"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["take-your-guns", "gun-free-zones"],
  },
  {
    id: "fed-overreach-10th",
    category: ["Democracy"],
    theySay: "The federal government is unconstitutional overreach! Read the Tenth Amendment!",
    youSay:
      "The Tenth Amendment reserves powers not delegated to the federal government - but the Commerce Clause, Supremacy Clause, and two centuries of Supreme Court precedent define broad federal authority over civil rights, interstate commerce, and elections. States' rights were the legal argument for segregation; modern 'overreach' claims usually target protections voters want nationally. CRS explains the actual constitutional framework.",
    stab: "States' rights was the slogan for segregation too.",
    sources: [
      cite(
        "crs_federalism",
        "Federalism and the Constitution",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/R/R46727",
        "CRS explains federal-state power divisions and constitutional limits.",
        "2024-01-01"
      ),
      cite(
        "constitution_supremacy",
        "U.S. Constitution",
        "Library of Congress",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "Congress.gov hosts the authenticated Constitution and amendments.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["republic-is-not-democracy", "deep-state"],
  },
  {
    id: "woke-generals-lost-wars",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "Woke generals lost Afghanistan! DEI weakened our military!",
    youSay:
      "The Afghanistan withdrawal was negotiated by the Trump administration with the Taliban - the Doha agreement set the 2021 exit date. DoD readiness metrics and GAO audits measure equipment, training, and personnel - not diversity training slides. Blaming inclusion programs for a twenty-year war strategy failure is culture-war deflection from bipartisan policy mistakes.",
    stab: "Trump signed the withdrawal deal. Biden executed it.",
    sources: [
      cite(
        "state_doha",
        "U.S. Security Cooperation",
        "U.S. Department of State",
        "https://www.state.gov/press-releases/",
        "State Department archives diplomatic agreements including Afghanistan negotiations.",
        "2021-01-01"
      ),
      cite(
        "defense_readiness",
        "Department of Defense",
        "U.S. Department of Defense",
        "https://www.defense.gov/",
        "DoD publishes readiness reports and force structure data.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["dei-plane-crash", "no-new-wars-trump"],
  },
  {
    id: "amazon-paid-zero-taxes",
    category: ["Economy"],
    theySay: "Amazon paid zero taxes! Corporations don't pay their fair share!",
    youSay:
      "Amazon's effective tax rate has been low some years due to R&D credits, accelerated depreciation, and stock-based compensation deductions - legal provisions Congress wrote. The fix isn't outrage at one company; it's closing loopholes and restoring corporate minimum taxes. CBO and Treasury data show the corporate share of federal revenue has fallen for decades while payroll taxes rose. Target the law, not the headline.",
    stab: "Congress wrote the loopholes. Be mad at them.",
    sources: [
      cite(
        "cbo_corporate",
        "Corporate Income Tax Rates",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/economy",
        "CBO analyzes corporate tax revenue and effective rates.",
        "2025-01-01"
      ),
      cite(
        "treasury_corporate",
        "Treasury Press Releases",
        "U.S. Department of the Treasury",
        "https://home.treasury.gov/news/press-releases",
        "Treasury publishes tax policy announcements and revenue data.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["corporate-tax-cut-jobs", "billionaires-earned-it"],
  },
  {
    id: "meritocracy-no-racism",
    category: ["Culture Wars", "Democracy"],
    theySay: "America is a meritocracy! Racism ended, anyone can make it!",
    youSay:
      "Wealth inequality by race persists across every income percentile - Federal Reserve Survey of Consumer Finances shows median white household wealth multiples above Black and Hispanic households. KFF documents racial disparities in maternal mortality and insurance access. 'Meritocracy' without acknowledging starting-line gaps is ideology, not sociology.",
    stab: "Meritocracy with unequal starting lines isn't merit.",
    sources: [
      cite(
        "kff_racial_equity",
        "Racial Equity and Health Policy",
        "Kaiser Family Foundation",
        "https://www.kff.org/racial-equity-and-health-policy/",
        "KFF tracks racial disparities in health coverage and outcomes.",
        "2024-01-01"
      ),
      cite(
        "brookings_crt",
        "Why States Are Banning Critical Race Theory",
        "Brookings Institution",
        "https://www.brookings.edu/articles/why-are-states-banning-critical-race-theory/",
        "Brookings analyzes structural inequality and education policy debates.",
        "2021-07-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["democrats-real-racists", "affirmative-action-reverse-racism"],
  },
  {
    id: "snowball-in-senate",
    category: ["Climate", "Media"],
    theySay: "A senator brought a snowball to Congress! That proves global warming is fake!",
    youSay:
      "One winter storm doesn't refute decades of NASA, NOAA, and IPCC temperature records showing accelerating warming. The senator's stunt ignored that the hottest years on record cluster in the last decade. Climate science measures planetary trends - not whether it snowed in Washington in February. Stunts aren't peer review.",
    stab: "A snowball isn't a temperature dataset.",
    sources: [
      cite(
        "nasa_climate",
        "Scientific Consensus on Climate Change",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA documents overwhelming scientific agreement on human-caused warming.",
        "2025-01-01"
      ),
      cite(
        "noaa_global_temp",
        "Global Climate Report",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/monitoring/monthly-report/global/202413",
        "NOAA publishes monthly global temperature anomaly reports.",
        "2024-12-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax", "climate-always-changing"],
  },
  {
    id: "pedophile-library-books",
    category: ["Culture Wars", "Education"],
    theySay: "They're putting pedophile books in school libraries! Groomers everywhere!",
    youSay:
      "ALA documents that the vast majority of challenged books are LGBTQ-themed literature and historical works - not pornography. PEN America's research shows gag-order laws target discussion of race, identity, and history. Calling librarians groomers is a moral panic designed to purge shelves, not protect children. Actual child abuse is prosecuted under existing criminal law.",
    stab: "You can't name a single 'pedophile book' that survived a court challenge.",
    sources: [
      cite(
        "ala_bbooks",
        "Banned and Challenged Books",
        "American Library Association",
        "https://www.ala.org/advocacy/bbooks",
        "ALA tracks book challenges and censorship attempts nationwide.",
        "2024-01-01"
      ),
      cite(
        "pen_gag_orders",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN documents state laws restricting classroom and library content.",
        "2023-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["teacher-grooming", "book-bans-parent-rights"],
  },
  {
    id: "reagan-welfare-queen-myth",
    category: ["Economy", "Whataboutism"],
    theySay: "Welfare queens drive Cadillacs! Democrats want free stuff for lazy people!",
    youSay:
      "The 'welfare queen' stereotype came from a single fraud case Reagan exaggerated in 1976 - not representative data. CBO SNAP reports show most beneficiaries are children, elderly, or working poor; fraud rates are under 2%. Temporary Assistance for Families is time-limited and tiny relative to corporate subsidies. The moral panic targets poor people while ignoring billion-dollar defense contractor waste documented by GAO.",
    stab: "You hate welfare - but love corporate welfare.",
    sources: [
      cite(
        "cbo_snap",
        "Supplemental Nutrition Assistance Program",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/57057",
        "CBO documents SNAP enrollment, costs, and work-requirement impacts.",
        "2025-05-15"
      ),
      cite(
        "gao_fraud",
        "Government Accountability Office",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO audits federal programs including fraud prevention in benefit systems.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["welfare-queens", "entitlements-bankrupt"],
  },
  {
    id: "comedy-too-pc-now",
    category: ["Culture Wars", "Media"],
    theySay: "You can't joke about anything anymore! Comedy is dead because of PC culture!",
    youSay:
      "Comedians still sell out arenas and stream specials - the 'you can't joke' claim is nostalgia, not economics. What changed is audience backlash to punching down at marginalized groups, which is market feedback, not government censorship. PEN America documents actual speech restrictions in state gag-order laws - those are Republican-led book bans and classroom speech limits, not liberal college kids on Twitter.",
    stab: "You're not banned. Your bit just isn't funny.",
    sources: [
      cite(
        "pen_gag_comedy",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN tracks state laws restricting speech in schools and public institutions.",
        "2023-01-01"
      ),
      cite(
        "reuters_media",
        "Digital News Report",
        "Reuters Institute",
        "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024",
        "Reuters Institute surveys global media consumption and trust trends.",
        "2024-06-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["cancel-culture-victim", "free-speech-campus"],
  },
  {
    id: "noncitizens-vote-millions",
    category: ["Elections", "Immigration"],
    theySay: "Millions of illegals voted! That's why Democrats want open borders!",
    youSay:
      "Brennan Center research finds noncitizen voting is extraordinarily rare - prosecuted cases number in the dozens nationwide, not millions. The SAVE Act and similar proposals would purge eligible citizens from rolls using error-prone databases. Noncitizens already face deportation and felony charges for voting. The claim exists to justify voter suppression, not to fix a documented problem.",
    stab: "Name one verified million-vote fraud case. You can't.",
    sources: [
      cite(
        "brennan_noncitizen",
        "Noncitizen Voting: The Missing Millions",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",
        "Brennan Center debunks widespread noncitizen voting claims with prosecution data.",
        "2024-01-01"
      ),
      cite(
        "brennan_fraud",
        "The Truth About Voter Fraud",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/our-work/research-reports/truth-about-voter-fraud",
        "Brennan Center compiles documented voter fraud cases across elections.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["illegal-voting", "open-borders"],
  },
  {
    id: "coal-keeps-lights-on",
    category: ["Climate", "Economy"],
    theySay: "Coal keeps the lights on! Green energy can't replace fossil fuels!",
    youSay:
      "U.S. coal generation has declined for fifteen years while renewables and gas filled the gap - EIA data shows wind and solar are the fastest-growing sources. Grid reliability issues in Texas were tied to gas and coal plant failures during freezes, not renewables alone. Climate mobilization invests in storage and transmission so clean power scales - clinging to coal is nostalgia subsidized by lobbyists.",
    stab: "Coal jobs declined. Renewables didn't.",
    sources: [
      cite(
        "eia_energy",
        "U.S. Energy Information Administration",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/detail.php?id=61262",
        "EIA publishes electricity generation mix and fuel consumption statistics.",
        "2025-01-01"
      ),
      cite(
        "nasa_climate_coal",
        "Scientific Consensus on Climate Change",
        "NASA",
        "https://science.nasa.gov/climate-change/scientific-consensus/",
        "NASA documents human-caused warming and fossil fuel emissions science.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["climate-hoax", "renewables-unreliable-texas"],
  },
  {
    id: "right-to-work-freedom",
    category: ["Economy"],
    theySay: "Right-to-work states are freer! Unions force people to pay dues!",
    youSay:
      "Right-to-work laws let workers free-ride on union-negotiated contracts without paying representation costs - BLS data shows union states have higher median wages and better benefits. The 17% union wage premium isn't coercion; it's collective bargaining power. Calling it 'freedom' is Orwellian when the goal is defunding the only institution that negotiates against CEOs.",
    stab: "Freedom to earn less isn't freedom.",
    sources: [
      cite(
        "bls_union_rtw",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS reports union membership rates and wage premiums by state.",
        "2025-01-01"
      ),
      cite(
        "brookings_labor_rtw",
        "Modernizing Labor Laws",
        "Brookings Institution",
        "https://www.brookings.edu/articles/a-proposal-for-modernizing-labor-laws-for-21st-century-work-the-independent-worker/",
        "Brookings analyzes gig work, union power, and wage stagnation.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["unions-corrupt", "minimum-wage-kills-jobs"],
  },
  {
    id: "biden-open-border-crisis",
    category: ["Immigration", "Media"],
    theySay: "Biden had open borders! Trump secured the border in one day!",
    youSay:
      "Border apprehensions fluctuated under both administrations - CBP publishes monthly data showing enforcement continued throughout Biden's term. Asylum law requires due process, not instant deportation. The 'open borders' narrative ignores record deportations, Title 42 expulsions, and bipartisan funding fights. One executive order doesn't erase geography, cartel economics, or congressional appropriations.",
    stab: "Open borders with a million deportations? Pick a lane.",
    sources: [
      cite(
        "cbp_stats",
        "U.S. Customs and Border Protection",
        "U.S. Customs and Border Protection",
        "https://www.cbp.gov/newsroom/stats",
        "CBP publishes southwest border encounter and enforcement statistics.",
        "2025-01-01"
      ),
      cite(
        "cato_immigration_crime",
        "Immigrants Commit Less Crime",
        "Cato Institute",
        "https://www.cato.org/blog/immigrants-commit-less-crime",
        "Cato research finds immigrants have lower incarceration rates than native-born citizens.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["open-borders", "border-invasion"],
  },
  {
    id: "god-removed-from-schools",
    category: ["Culture Wars", "Education"],
    theySay: "They removed God from schools! That's why society is falling apart!",
    youSay:
      "The First Amendment prohibits public schools from endorsing religion - Engel v. Vitale settled that in 1962. Students can still pray privately; schools can't lead sectarian worship with tax dollars. Correlation isn't causation: countries with secular education often outperform the U.S. on violence and literacy metrics. The claim is culture-war nostalgia, not constitutional restoration.",
    stab: "Public schools aren't churches. That's the point.",
    sources: [
      cite(
        "congress_first_amendment",
        "U.S. Constitution - First Amendment",
        "Library of Congress",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "Congress.gov hosts the authenticated Constitution and establishment clause text.",
        "2025-01-01"
      ),
      cite(
        "pen_schools_prayer",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN documents state restrictions on classroom speech and curriculum.",
        "2023-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["prayer-in-schools", "crt-schools"],
  },
  {
    id: "bail-reform-crime-wave",
    category: ["Crime"],
    theySay: "Bail reform caused the crime wave! Letting criminals out is insane!",
    youSay:
      "BJS victimization surveys show property and violent crime trends are complex - blaming bail reform requires isolating one policy in multivariate data. Cash bail jails poor people pretrial regardless of risk; reform targets wealth-based detention. Cities that reformed bail didn't uniformly see spikes; many factors include pandemic disruptions and gun availability. Fearmongering substitutes anecdotes for BJS statistics.",
    stab: "Rich defendants buy freedom today. You OK with that?",
    sources: [
      cite(
        "bjs_victimization",
        "Criminal Victimization",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/library/publications/criminal-victimization-2023",
        "BJS publishes national crime victimization survey data.",
        "2024-09-01"
      ),
      cite(
        "bjs_portal",
        "Bureau of Justice Statistics",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/",
        "BJS is the primary federal source for crime and justice statistics.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["defund-police", "sanctuary-crime"],
  },
  {
    id: "military-woke-recruiting",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "Woke recruiting ads made the military weak! Nobody wants to join anymore!",
    youSay:
      "DoD recruiting shortfalls correlate with low unemployment, obesity rates, and education requirements - not diversity ads. GAO readiness reports measure equipment and training, not culture-war memes. The all-volunteer force missed goals under Trump too. Blaming inclusion for recruitment math ignores compensation, deployment tempo, and civilian job competition documented in defense workforce studies.",
    stab: "Recruiting failed before the ads. Check the data.",
    sources: [
      cite(
        "dod_recruiting",
        "Department of Defense",
        "U.S. Department of Defense",
        "https://www.defense.gov/",
        "DoD publishes force structure, readiness, and personnel statistics.",
        "2025-01-01"
      ),
      cite(
        "gao_defense",
        "Government Accountability Office",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO audits defense readiness, acquisitions, and workforce programs.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["dei-plane-crash", "woke-generals-lost-wars"],
  },
  {
    id: "billionaires-free-speech",
    category: ["Media", "Democracy"],
    theySay: "Elon saved free speech! Billionaires are the last defense against censorship!",
    youSay:
      "A billionaire owning a platform isn't free speech - it's private censorship with a blue checkmark. When owners throttle journalists, boost partisan accounts, and fire moderation teams, that's corporate control, not the First Amendment. Sunlight Foundation and Pew document how concentrated media ownership shapes discourse. Democracy needs pluralistic platforms and antitrust - not oligarchs cosplaying as Founding Fathers.",
    stab: "Free speech isn't one guy owning the town square.",
    sources: [
      cite(
        "sunlight_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Sunlight Foundation advocates government transparency and open data standards.",
        "2024-01-01"
      ),
      cite(
        "pew_media",
        "Pew Research Center",
        "Pew Research Center",
        "https://www.pewresearch.org/",
        "Pew studies media consumption, trust, and platform demographics.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["big-tech-censorship", "media-bias"],
  },
  {
    id: "homophobic-baker-freedom",
    category: ["Culture Wars", "Courts"],
    theySay: "The baker shouldn't be forced to bake a gay cake! Religious freedom!",
    youSay:
      "Public accommodations laws have required businesses to serve all customers since the Civil Rights Act - religion doesn't exempt you from anti-discrimination statutes. Masterpiece Cakeshop was narrowly decided on commission bias, not a blanket license to refuse LGBTQ customers. When florists, photographers, and bakers pick and choose, they're re-litigating lunch-counter segregation with a cross on the wall.",
    stab: "Your religion doesn't get to veto civil rights law.",
    sources: [
      cite(
        "congress_civil_rights_act",
        "Civil Rights Act of 1964",
        "Library of Congress",
        "https://www.congress.gov/bill/88th-congress/house-bill/7152",
        "Congress.gov hosts the Civil Rights Act public accommodations provisions.",
        "1964-07-02"
      ),
      cite(
        "aclu_lgbtq",
        "LGBTQ Rights",
        "American Civil Liberties Union",
        "https://www.aclu.org/issues/lgbtq-rights",
        "ACLU documents LGBTQ anti-discrimination law and religious-exemption cases.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["christians-persecuted", "teacher-grooming"],
  },
  {
    id: "prageru-teaches-history",
    category: ["Education", "Media"],
    theySay: "PragerU teaches real history! Schools are lying to kids!",
    youSay:
      "PragerU is a conservative advocacy nonprofit, not an accredited curriculum publisher - historians and education researchers have documented factual errors in its videos. Florida's approval of PragerU materials in schools is a political choice, not academic consensus. Real history education cites primary sources, peer review, and multiple perspectives - not five-minute opinion clips funded by donors with a partisan agenda.",
    stab: "A YouTube channel isn't a history department.",
    sources: [
      cite(
        "pen_gag_prageru",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN documents state restrictions on classroom speech and curriculum.",
        "2023-01-01"
      ),
      cite(
        "ed_dept_civics",
        "Civics and History Education",
        "U.S. Department of Education (archived)",
        "https://web.archive.org/web/20240415000000/https://www.ed.gov/",
        "The Education Department publishes civics and history education resources and grants.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crt-schools", "media-literacy-indoctrination"],
  },
  {
    id: "fauci-created-covid",
    category: ["Healthcare", "Whataboutism"],
    theySay: "Fauci created COVID in a lab! He funded the Wuhan lab!",
    youSay:
      "NIH funded broad coronavirus research through EcoHealth Alliance - standard pandemic-preparedness work predating COVID-19. Multiple intelligence reviews found no consensus that the virus was engineered. Conflating grant oversight with 'creating' a pandemic is conspiracy, not epidemiology. GAO and HHS OIG audit grant compliance; they don't support lab-leak certainty claims repeated in campaign ads.",
    stab: "Grants aren't bioweapons. Show the proof.",
    sources: [
      cite(
        "gao_nih_grants",
        "Government Accountability Office",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO audits federal research grant oversight and compliance.",
        "2025-01-01"
      ),
      cite(
        "cdc_covid_data",
        "COVID Data Tracker",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/covid/",
        "CDC publishes COVID-19 surveillance, mortality, and vaccination data.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["vaccine-microchips", "but-obama-did-this"],
  },
  {
    id: "portland-anarchist-zone",
    category: ["Crime", "Jan 6"],
    theySay: "Portland had an anarchist zone for months! Democrats said nothing!",
    youSay:
      "The CHOP/CHAZ occupation in Seattle lasted weeks, not months - local police cleared it after shootings. Portland protests involved property damage but were not 'lawless zones' exempt from prosecution; hundreds faced charges. Comparing a city block occupation to a coordinated attack on the Capitol certification is whataboutism. DOJ prosecuted both - the scale and target of January 6 were categorically different.",
    stab: "A city block isn't the U.S. Capitol.",
    sources: [
      cite(
        "doj_jan6",
        "January 6 Investigations",
        "U.S. Department of Justice",
        "https://www.justice.gov/",
        "DOJ publishes January 6 prosecution statistics and case filings.",
        "2025-01-01"
      ),
      cite(
        "bjs_crime_stats",
        "Bureau of Justice Statistics",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/",
        "BJS compiles national crime, arrest, and prosecution data.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["jan-6-tourist-visit", "blm-riots"],
  },
  {
    id: "electric-grid-green-fail",
    category: ["Climate", "Economy"],
    theySay: "Green energy will collapse the grid! Wind and solar can't keep the lights on!",
    youSay:
      "EIA data shows renewables are the fastest-growing generation source while grid operators invest in storage and transmission to manage intermittency. Texas 2021 blackouts were driven primarily by gas plant failures in freezing weather - not wind alone. Every serious decarbonization pathway pairs renewables with storage, demand response, and grid modernization. 'The grid will fail' is a delay tactic from incumbents, not a planning document.",
    stab: "Texas froze because gas failed. Not wind.",
    sources: [
      cite(
        "eia_grid_renewables",
        "U.S. Energy Information Administration",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/",
        "EIA publishes electricity generation, fuel mix, and grid reliability data.",
        "2025-01-01"
      ),
      cite(
        "noaa_climate_costs",
        "Billion-Dollar Weather and Climate Disasters",
        "National Oceanic and Atmospheric Administration",
        "https://www.ncei.noaa.gov/access/billions/",
        "NOAA tracks the frequency and cost of billion-dollar weather disasters.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["renewables-unreliable-texas", "coal-keeps-lights-on"],
  },
  {
    id: "second-amendment-well-regulated",
    category: ["Crime", "Courts"],
    theySay: "Shall not be infringed! The Second Amendment is absolute!",
    youSay:
      "Heller recognized an individual right to bear arms but explicitly allowed prohibitions on concealed carry, felon possession, and sensitive places like schools. 'Well regulated Militia' appears in the text Congress ratified. Every developed democracy with lower gun death rates regulates firearms - background checks, safe storage, and assault-weapon limits are constitutional under current precedent. Absolutism isn't originalism; it's marketing.",
    stab: "Even Scalia said felons can't have guns.",
    sources: [
      cite(
        "congress_2a",
        "U.S. Constitution - Second Amendment",
        "Library of Congress",
        "https://constitution.congress.gov/constitution/amendment-2/",
        "Congress.gov hosts the authenticated Second Amendment text.",
        "2025-01-01"
      ),
      cite(
        "bjs_gun_violence",
        "Bureau of Justice Statistics",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/",
        "BJS publishes firearm injury, death, and crime statistics.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["take-your-guns", "gun-free-zones"],
  },
  {
    id: "marriage-one-man-woman",
    category: ["Culture Wars", "Courts"],
    theySay: "Marriage is one man and one woman! Obergefell was judicial activism!",
    youSay:
      "Obergefell held that marriage is a fundamental right - denying it to same-sex couples violated equal protection. Public support for marriage equality crossed 70% years ago. Re-litigating settled precedent threatens adoption rights, hospital visitation, and spousal benefits for millions of families. 'Traditional marriage' rhetoric was identical to the arguments against Loving v. Virginia - courts rejected both.",
    stab: "The Court settled this. Your marriage isn't threatened.",
    sources: [
      cite(
        "pew_marriage_equality",
        "Pew Research Center",
        "Pew Research Center",
        "https://www.pewresearch.org/",
        "Pew tracks public opinion on same-sex marriage and LGBTQ rights.",
        "2025-01-01"
      ),
      cite(
        "aclu_marriage",
        "LGBTQ Rights",
        "American Civil Liberties Union",
        "https://www.aclu.org/issues/lgbtq-rights",
        "ACLU litigated marriage equality cases and documents ongoing threats.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trans-bathrooms", "christians-persecuted"],
  },
  {
    id: "democrats-raise-taxes",
    category: ["Economy", "Whataboutism"],
    theySay: "Democrats always raise your taxes! Republicans cut them!",
    youSay:
      "CBO and Treasury data show the 2017 Tax Cuts and Jobs Act disproportionately benefited top earners while adding trillions to deficits. Biden pledged no tax hikes on households under $400K and signed legislation extending ACA subsidies. 'Tax cuts' that expire for workers but not corporations aren't middle-class wins - they're timed campaign gifts funded by debt. Check the distributional tables, not the rally signs.",
    stab: "Show me your W-2. Did your taxes actually fall?",
    sources: [
      cite(
        "cbo_tax_distribution",
        "Congressional Budget Office",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/taxes",
        "CBO analyzes distributional effects of federal tax policy.",
        "2025-01-01"
      ),
      cite(
        "treasury_tax_policy",
        "Treasury Press Releases",
        "U.S. Department of the Treasury",
        "https://home.treasury.gov/news/press-releases",
        "Treasury publishes tax policy announcements and revenue analysis.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-tax-cuts-paid", "fiscal-conservatives"],
  },
  {
    id: "puerto-rico-not-state",
    category: ["Democracy", "Foreign Policy"],
    theySay: "Puerto Rico shouldn't be a state! They're not even American!",
    youSay:
      "Puerto Ricans have been U.S. citizens since 1917 - they serve in the military and pay federal taxes without full congressional representation. Status referendums have repeatedly shown majority support for statehood. Denying representation to 3 million citizens because of language or culture is the same colonial logic Congress used against every territory that eventually became a state. Democracy means votes that count.",
    stab: "They fight in our wars. They deserve a vote.",
    sources: [
      cite(
        "crs_puerto_rico",
        "Puerto Rico: Status and Policy",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS analyzes Puerto Rico's political status and federal relationship.",
        "2025-01-01"
      ),
      cite(
        "congress_territories",
        "U.S. Congress",
        "U.S. Congress",
        "https://www.congress.gov/",
        "Congress.gov hosts legislation on territorial status and representation.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["electoral-college-fair", "republic-is-not-democracy"],
  },
  {
    id: "jan-6-just-protest",
    category: ["Jan 6", "Democracy"],
    theySay: "January 6 was just a protest! Tourists walking through the Capitol!",
    youSay:
      "DOJ has charged more than 1,500 defendants - including seditious conspiracy convictions for Proud Boys and Oath Keepers leaders. Video evidence shows rioters breaching barricades, assaulting officers, and chanting to hang the Vice President. Congress certified the election after hours of lockdown. Calling it tourism insults the 140 officers injured and the rule of law. Peaceful protest doesn't include pipe bombs and gallows.",
    stab: "Tourists don't get seditious conspiracy convictions.",
    sources: [
      cite(
        "doj_jan6_cases",
        "January 6 Prosecutions",
        "U.S. Department of Justice",
        "https://www.justice.gov/",
        "DOJ publishes January 6 investigation updates and prosecution statistics.",
        "2025-01-01"
      ),
      cite(
        "gao_capitol_security",
        "Government Accountability Office",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO reviewed Capitol security failures and January 6 response.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["jan-6-tourist-visit", "fbi-jan6-setup"],
  },
  {
    id: "deficit-only-dems",
    category: ["Economy", "Whataboutism"],
    theySay: "Only Democrats run up the deficit! Republicans are fiscally responsible!",
    youSay:
      "CBO data shows the 2017 Tax Cuts and Jobs Act added roughly $1.9 trillion to deficits over a decade - the largest peacetime debt increase came under Republican trifectas in 2001 and 2017. Trump and Biden both signed emergency spending; the structural gap is tax cuts for corporations and wealthy estates, not food stamps. Fiscal responsibility means looking at Treasury statements, not rally slogans.",
    stab: "Show me the CBO score. Then we'll talk deficits.",
    sources: [
      cite(
        "cbo_deficit",
        "Congressional Budget Office",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/budget",
        "CBO publishes deficit, debt, and distributional analyses of major tax and spending legislation.",
        "2025-01-01"
      ),
      cite(
        "treasury_monthly",
        "Treasury Monthly Statement",
        "U.S. Department of the Treasury",
        "https://fiscaldata.treasury.gov/datasets/monthly-treasury-statement/",
        "Treasury publishes monthly federal receipts, outlays, and deficit data.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["fiscal-conservatives", "trump-tax-cuts-paid"],
  },
  {
    id: "states-rights-history",
    category: ["Democracy", "Courts"],
    theySay: "States' rights! The federal government is too powerful!",
    youSay:
      "'States' rights' was the legal argument for slavery, Jim Crow, and school segregation - states used local control to deny equal protection until federal civil rights law overrode them. The Supremacy Clause exists because leaving voting, marriage, and discrimination entirely to states produced apartheid. Today, the same phrase appears in arguments against Medicaid expansion, abortion access, and voting protections. Local control isn't neutral when local power targets minorities.",
    stab: "States' rights lost at Appomattox. Remember why.",
    sources: [
      cite(
        "congress_civil_rights_act",
        "Civil Rights Act of 1964",
        "Library of Congress",
        "https://www.congress.gov/bill/88th-congress/house-bill/7152",
        "Congress.gov hosts the Civil Rights Act and its federal preemption of discriminatory state laws.",
        "1964-07-02"
      ),
      cite(
        "crs_federalism",
        "Federalism",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS analyzes federal-state power balances and Supremacy Clause precedents.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["republic-is-not-democracy", "fed-overreach-10th"],
  },
  {
    id: "dnc-rigged-primaries",
    category: ["Elections", "Media"],
    theySay: "The DNC rigged the primaries against Bernie! It's all corrupt!",
    youSay:
      "Party primaries are private nominating contests - superdelegate rules and debate schedules are internal party governance, not federal elections. Sanders won millions of votes and shifted the 2020 platform; Biden won a majority of pledged delegates fair and square. Conflating party bylaws with ballot rigging is how bad actors discourage participation. If you want open primaries and ranked choice, advocate for state election law - don't sit out because a committee scheduled a debate.",
    stab: "Bernie endorsed Biden. Twice. That's not a rigged outcome.",
    sources: [
      cite(
        "fec_campaign_guide",
        "FEC Campaign Guide",
        "Federal Election Commission",
        "https://www.fec.gov/help-candidates-and-committees/",
        "FEC regulates federal campaigns; party nominating rules are separate from general-election administration.",
        "2025-01-01"
      ),
      cite(
        "pew_trust",
        "Election Administration",
        "Pew Research Center",
        "https://www.pewresearch.org/",
        "Pew tracks public trust in elections and party identification trends.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["election-stolen", "both-sides-equivalence"],
  },
  {
    id: "canada-healthcare-waits",
    category: ["Healthcare", "Whataboutism"],
    theySay: "Canadian healthcare has year-long waits! Socialized medicine kills people!",
    youSay:
      "Canada spends roughly half per capita what the U.S. spends while covering everyone - wait times vary by procedure and province, but Canadians live longer and are less likely to go bankrupt from a hospital bill. America's uninsured and underinsured delay care too - they just die quietly without a queue statistic. Every OECD system rations somehow; the U.S. rations by price and zip code. The question is whether rationing happens at the billing desk or the scheduling desk.",
    stab: "Bankruptcy from chemo isn't freedom.",
    sources: [
      cite(
        "oecd_health",
        "Health at a Glance",
        "Organisation for Economic Co-operation and Development",
        "https://www.oecd.org/health/",
        "OECD compares health spending, outcomes, and wait times across developed nations.",
        "2024-01-01"
      ),
      cite(
        "kff_uninsured",
        "Key Facts about the Uninsured Population",
        "Kaiser Family Foundation",
        "https://www.kff.org/uninsured/",
        "KFF documents uninsured rates and barriers to care in the United States.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["healthcare-socialized", "death-panels-real"],
  },
  {
    id: "coal-jobs-boom",
    category: ["Climate", "Economy"],
    theySay: "Coal is coming back! Trump brought back coal jobs!",
    youSay:
      "EIA data shows U.S. coal production and mining employment have declined for over a decade - cheap natural gas and renewables outcompete coal on cost, regardless of who sits in the Oval Office. 'War on coal' rhetoric didn't reverse market physics. Promising coal revival to struggling communities without transition plans is cruelty dressed as nostalgia. Real economic policy invests in reclamation, broadband, and clean-energy jobs where mines already closed.",
    stab: "Markets killed coal. Not Obama. Not Biden.",
    sources: [
      cite(
        "eia_coal",
        "U.S. Energy Information Administration - Coal",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/todayinenergy/",
        "EIA publishes coal production, consumption, and mining employment statistics.",
        "2025-01-01"
      ),
      cite(
        "bls_mining",
        "Bureau of Labor Statistics - Mining",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/",
        "BLS tracks mining and extraction employment by sector over time.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["coal-keeps-lights-on", "climate-hoax"],
  },
  {
    id: "sanctuary-crime-wave",
    category: ["Immigration", "Crime"],
    theySay: "Sanctuary cities are crime-infested! They protect criminals!",
    youSay:
      "Sanctuary policies limit local police from holding people for ICE without a judicial warrant - they don't block deportation of convicted violent felons. Multiple studies find no correlation between sanctuary status and higher crime rates; immigrants commit crimes at lower rates than native-born citizens per BJS data. The label is a political weapon to justify federal raids in cities that won't act as unpaid immigration agents.",
    stab: "Cops aren't ICE. That's the whole point.",
    sources: [
      cite(
        "bjs_immigrant_crime",
        "Bureau of Justice Statistics",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/",
        "BJS compiles crime, victimization, and incarceration statistics including immigrant populations.",
        "2025-01-01"
      ),
      cite(
        "aclu_sanctuary",
        "Sanctuary Policies",
        "American Civil Liberties Union",
        "https://www.aclu.org/issues/immigrants-rights",
        "ACLU explains sanctuary policies and Fourth Amendment limits on ICE detainers.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["sanctuary-cities", "migrant-crime-wave"],
  },
  {
    id: "college-indoctrination-camps",
    category: ["Education", "Culture Wars"],
    theySay: "Colleges are indoctrination camps! They teach kids to hate America!",
    youSay:
      "Universities are accredited institutions with curriculum oversight, tenure review, and alumni-funded endowments - not monolithic propaganda mills. Survey data shows faculty political diversity varies widely by discipline and region. What critics call 'indoctrination' is often exposure to history beyond a textbook myth - including slavery, indigenous dispossession, and labor struggle. Teaching uncomfortable facts isn't hatred of country; it's the difference between patriotism and nationalism.",
    stab: "Reading Frederick Douglass isn't treason.",
    sources: [
      cite(
        "ed_dept_civics",
        "Civics and History Education",
        "U.S. Department of Education (archived)",
        "https://web.archive.org/web/20240415000000/https://www.ed.gov/",
        "The Education Department publishes civics education standards and grant programs.",
        "2025-01-01"
      ),
      cite(
        "pen_gag_prageru",
        "Educational Gag Orders",
        "PEN America",
        "https://pen.org/report/educational-gag-orders/",
        "PEN documents state restrictions on classroom speech and curriculum.",
        "2023-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crt-schools", "media-literacy-indoctrination"],
  },
  {
    id: "biden-docs-same-as-trump",
    category: ["Whataboutism", "Courts"],
    theySay: "Biden had classified docs too! Same as Trump - both guilty!",
    youSay:
      "Special counsel reports documented materially different conduct: Biden's team returned documents upon discovery and cooperated with investigators; Trump allegedly obstructed retrieval, stored files in unsecured locations, and faces charges for willful retention and obstruction. Equating cooperative return with alleged concealment is whataboutism - the legal question is intent, obstruction, and national-security risk, not whether two people touched classified paper.",
    stab: "Cooperating with the FBI isn't the same as hiding boxes.",
    sources: [
      cite(
        "doj_special_counsel",
        "Department of Justice Press Releases",
        "U.S. Department of Justice",
        "https://www.justice.gov/opa/pr",
        "DOJ published special counsel findings on classified document handling by both presidents.",
        "2025-01-01"
      ),
      cite(
        "crs_classified",
        "Protection of Classified Information",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS analyzes classified information statutes and enforcement precedents.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["but-obama-did-this", "whataboutism-pattern"],
  },
  {
    id: "christian-founding-myth",
    category: ["Culture Wars", "Democracy"],
    theySay: "America was founded as a Christian nation! Read the Founders!",
    youSay:
      "The Constitution's only religious references are exclusionary - no religious test for office, no established church. Treaty of Tripoli (1797) explicitly states the U.S. government is 'not in any sense founded on the Christian religion.' Jefferson's 'wall of separation' letter and Madison's Memorial and Remonstrance argue against taxpayer-funded religion. Many Founders were Deists, not evangelicals. Conflating 1950s addition of 'under God' to the pledge with 1776 intent is historical fiction.",
    stab: "The First Amendment protects us from your church too.",
    sources: [
      cite(
        "congress_1a",
        "First Amendment - Religion",
        "Library of Congress",
        "https://constitution.congress.gov/constitution/amendment-1/",
        "Congress.gov hosts the First Amendment text and founding-era commentary.",
        "2025-01-01"
      ),
      cite(
        "church_state_pretense",
        "Church-State Separation",
        "Americans United for Separation of Church and State",
        "https://www.au.org/",
        "Americans United documents church-state law and founding-era religious liberty debates.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["church-state-pretense", "god-removed-from-schools"],
  },
  {
    id: "democracy-alarmist",
    category: ["Democracy", "Media"],
    theySay: "Democracy isn't dying! You're alarmists! Everything is normal!",
    youSay:
      "Normal democracies don't halt Voting Rights Act enforcement, reclassify civil servants for political purge, condition disaster aid on loyalty, or threaten prosecutors who investigate the executive. Freedom House, V-Dem, and CPR's trackers document measurable declines in U.S. civil liberties and rule-of-law scores since 2016. Alarm isn't hysteria when the Heritage Foundation published a 900-page blueprint and the administration is implementing it line by line - with primary sources linked on every entry.",
    stab: "Normal is 115 sourced actions and counting.",
    sources: [
      cite(
        "freedom_house_us",
        "Freedom in the World - United States",
        "Freedom House",
        "https://freedomhouse.org/country/united-states",
        "Freedom House scores political rights and civil liberties annually for the United States.",
        "2025-01-01"
      ),
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage Foundation published Project 2025's policy blueprint for restructuring the federal government.",
        "2023-04-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["project-2025-doesnt-exist", "presidential-power-normal"],
  },
  {
    id: "dark-money-free-speech",
    category: ["Democracy", "Media"],
    theySay: "Dark money is free speech! Donor privacy protects people from harassment!",
    youSay:
      "Citizens United allowed unlimited independent spending, but voters still have a legitimate interest in knowing who is buying influence. 501(c)(4) groups can spend hundreds of millions without disclosing funders - OpenSecrets documents the scale. Anonymous speech protects whistleblowers; anonymous billion-dollar ad buys protect plutocrats. The Blueprint calls for real-time disclosure over $200 and 48-hour lobbying contact publication.",
    stab: "Free speech isn't secret billion-dollar ad buys.",
    sources: [
      cite(
        "citizens_united_scotus",
        "Citizens United v. FEC",
        "Legal Information Institute - Cornell Law School",
        "https://www.law.cornell.edu/supct/html/08-205.ZS.html",
        "The Court struck down limits on independent corporate and union political expenditures.",
        "2010-01-21"
      ),
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets explains how politically active nonprofits can spend without disclosing donors.",
        "2014-05-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["money-doesnt-buy-votes", "lobbying-is-normal"],
  },
  {
    id: "lobbying-is-normal",
    category: ["Democracy", "Economy"],
    theySay: "Lobbying is just petitioning the government! Everyone does it!",
    youSay:
      "Petitioning is a First Amendment right - but the revolving door between Congress, agencies, and K Street creates structural capture. OpenSecrets tracks billions in lobbying annually; the Blueprint proposes lifetime lobbying bans for former members and senior officials plus mandatory 48-hour disclosure of all lobbying contacts. 'Everyone does it' is an argument for reform, not against it.",
    stab: "Petitioning isn't a lifetime K Street pass.",
    sources: [
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Sunlight Foundation documents how lobbying and spending disclosure increases public participation.",
        "2018-01-01"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "The FEC publishes official campaign committee and independent expenditure filings.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["dark-money-free-speech", "revolving-door-fine"],
  },
  {
    id: "money-doesnt-buy-votes",
    category: ["Democracy", "Elections"],
    theySay: "Money doesn't buy elections! Voters decide!",
    youSay:
      "Voters cast ballots - but fundraising dominance shapes who can run, who gets airtime, and which bills get hearings. FEC data shows super PACs and dark-money groups routinely outspend candidates in competitive races. Citizens United didn't eliminate corruption; it moved it to undisclosed channels. Public financing and real-time disclosure - in the Blueprint safeguards - restore voter agency.",
    stab: "Try winning a Senate race without donors.",
    sources: [
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Official federal campaign finance filings show super PAC and committee spending patterns.",
        "2025-01-01"
      ),
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets tracks dark money spending by politically active nonprofits.",
        "2014-05-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["dark-money-free-speech", "citizens-united-fine"],
  },
  {
    id: "citizens-united-fine",
    category: ["Democracy", "Courts"],
    theySay: "Citizens United was correctly decided! Corporations have speech rights!",
    youSay:
      "The Court held that independent expenditures cannot corrupt 'in the traditional sense' - a premise many legal scholars and voters reject when billion-dollar ad campaigns follow. The ruling didn't require anonymous spending; Congress and states could still mandate disclosure. Instead, FEC deadlocks and weak rules let dark money flourish. Constitutional speech rights aren't the same as unlimited secret influence.",
    stab: "Speech rights aren't secret donor lists.",
    sources: [
      cite(
        "citizens_united_scotus",
        "Citizens United v. FEC",
        "Legal Information Institute - Cornell Law School",
        "https://www.law.cornell.edu/supct/html/08-205.ZS.html",
        "The opinion addresses independent expenditures and corporate political speech.",
        "2010-01-21"
      ),
      cite(
        "fec_enforcement_pause",
        "Federal Election Commission",
        "Federal Election Commission",
        "https://www.fec.gov/",
        "FEC enforcement deadlocks have paused major campaign-finance actions.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["dark-money-free-speech", "FEC-overreach"],
  },
  {
    id: "FEC-overreach",
    category: ["Democracy", "Media"],
    theySay: "The FEC is weaponized! Let people spend their own money!",
    youSay:
      "The FEC is frequently deadlocked - the opposite of weaponization. Six commissioners need four votes for major enforcement; partisan stalemates leave violations unpunished. Personal spending on your own campaign is legal; unlimited secret corporate and nonprofit spending with no donor disclosure is the controversy. Disclosure isn't censorship - it's sunlight.",
    stab: "Deadlocked isn't weaponized.",
    sources: [
      cite(
        "fec_enforcement_pause",
        "Federal Election Commission",
        "Federal Election Commission",
        "https://www.fec.gov/",
        "FEC requires bipartisan supermajorities for enforcement actions.",
        "2025-01-01"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Public FEC data shows committee receipts, disbursements, and independent expenditures.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["citizens-united-fine", "money-doesnt-buy-votes"],
  },
  {
    id: "revolving-door-fine",
    category: ["Democracy", "Economy"],
    theySay: "The revolving door is fine! Industry experts know the rules!",
    youSay:
      "Industry expertise is real - so is the conflict when former regulators cash out to the firms they oversaw. The Blueprint's SAFE-001 safeguard proposes lifetime lobbying bans for senior officials and mandatory blind trusts for agency heads. 'Experts' who wrote the rules and then sell access aren't neutral technicians - they're captured.",
    stab: "Regulator today, lobbyist tomorrow.",
    sources: [
      cite(
        "safeguard_anticorruption",
        "About Transparency International",
        "Transparency International",
        "https://www.transparency.org/en/about",
        "Governance research links anti-corruption institutions to higher public trust scores.",
        "2021-01-01"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Sunlight Foundation advocates mandatory lobbying and spending disclosure.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["lobbying-is-normal", "think-tanks-independent"],
  },
  {
    id: "think-tanks-independent",
    category: ["Democracy", "Media"],
    theySay: "Think tanks are independent research! Project 2025 is just ideas!",
    youSay:
      "Think tanks publish research - many also take undisclosed donor money and staff former officials who rotate back into government. Heritage Foundation's 922-page Project 2025 blueprint is now executive policy, not a white paper on a shelf. OpenSecrets tracks think-tank funding where disclosed; dark money fills the gaps. Ideas have authors, funders, and beneficiaries.",
    stab: "922 pages isn't a hobby project.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage published Project 2025's policy blueprint for restructuring the federal government.",
        "2023-04-01"
      ),
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets documents how politically active nonprofits can spend without donor disclosure.",
        "2014-05-14"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["project-2025-doesnt-exist", "revolving-door-fine"],
  },
  {
    id: "billionaires-earned-influence",
    category: ["Economy", "Democracy"],
    theySay: "Billionaires earned their influence! Success shouldn't be punished!",
    youSay:
      "Wealth isn't illegal - using undisclosed money to write agency rules is a democracy problem. Citizens United enabled unlimited independent spending; weak disclosure lets billionaires fund think tanks, super PACs, and 501(c)(4) ads without voters seeing the receipts. Market success doesn't grant veto power over civil service, voting rights, or methane standards.",
    stab: "Receipts, not net worth, should govern.",
    sources: [
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets explains how dark money enables undisclosed political spending.",
        "2014-05-14"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2024/06/24/public-trust-in-government-1958-2024/",
        "Pew tracks declining public trust in government alongside rising inequality.",
        "2024-06-24"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["dark-money-free-speech", "money-doesnt-buy-votes"],
  },
  {
    id: "opensecrets-biased",
    category: ["Media", "Democracy"],
    theySay: "OpenSecrets is biased! They only attack conservatives!",
    youSay:
      "OpenSecrets is a nonpartisan campaign-finance research group cited by journalists across the spectrum. They track disclosed lobbying, PAC giving, and dark money for both parties - the data is filed with the FEC and LDA, not invented. If the numbers look bad for one side, that's a fundraising pattern, not a bias claim. Check the underlying filings yourself.",
    stab: "The FEC filings don't have a party affiliation.",
    sources: [
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Official federal campaign finance data underlying OpenSecrets research.",
        "2025-01-01"
      ),
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets methodology for tracking disclosed and dark political spending.",
        "2014-05-14"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["FEC-overreach", "money-doesnt-buy-votes"],
  },
  {
    id: "public-financing-handout",
    category: ["Democracy", "Economy"],
    theySay: "Public campaign financing is a taxpayer handout to politicians!",
    youSay:
      "Public financing replaces billionaire dependency with small-donor matching - the Blueprint proposes real-time disclosure over $200 alongside voluntary public match. Taxpayers already subsidize campaigns through the presidential public-funding system and unlimited dark-money tax breaks for donors. The question is whether voters or undisclosed funders pick who can run competitive races.",
    stab: "Dark money is the handout - just hidden.",
    sources: [
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC data shows how super PAC spending compares to candidate fundraising.",
        "2025-01-01"
      ),
      cite(
        "safeguard_anticorruption",
        "About Transparency International",
        "Transparency International",
        "https://www.transparency.org/en/about",
        "Anti-corruption research links public financing and disclosure to higher governance scores.",
        "2021-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["money-doesnt-buy-votes", "lobbying-is-normal"],
  },
  {
    id: "epstein-files-distraction",
    category: ["Democracy", "Media"],
    theySay: "The Epstein files are a distraction! Focus on real issues!",
    youSay:
      "Transparency is a real issue. The Epstein Files Transparency Act (H.R. 4405) is bipartisan legislation requiring DOJ to release unclassified investigation records on a statutory timeline - not a conspiracy theory, a bill on Congress.gov. Victims and the public cannot audit what was investigated when records stay sealed without deadlines. SAFE-004 would extend mandatory publication timelines for high-public-interest cases.",
    stab: "A bill number isn't a rabbit hole.",
    sources: [
      cite(
        "epstein_records_act",
        "Epstein Files Transparency Act",
        "Congress.gov",
        "https://www.congress.gov/bill/119th-congress/house-bill/4405",
        "Bipartisan legislation requiring DOJ release of unclassified Epstein investigation records.",
        "2025-11-19"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Sunlight Foundation advocates mandatory disclosure timelines for public accountability.",
        "2018-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["deep-state", "trust-me-not-receipts"],
  },
  {
    id: "foia-too-slow",
    category: ["Democracy", "Media"],
    theySay: "FOIA takes forever anyway! Just accept we'll never know!",
    youSay:
      "FOIA backlogs are a policy failure, not a reason to stop asking. FOIA.gov publishes agency compliance data; litigation - like ACLU FOIA cases on ICE detention - often produces documents agencies would never release voluntarily. SAFE-004 mandates machine-readable spending data and 48-hour lobbying contact publication so routine accountability doesn't depend on multi-year FOIA fights.",
    stab: "Slow disclosure isn't no disclosure.",
    sources: [
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes federal agency FOIA statistics and request portals.",
        "2025-01-01"
      ),
      cite(
        "doj_oip_foia",
        "Office of Information Policy",
        "U.S. Department of Justice",
        "https://www.justice.gov/oip",
        "DOJ OIP oversees federal FOIA compliance and publishes guidance.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["epstein-files-distraction", "transparency-wastes-money"],
  },
  {
    id: "classified-means-never",
    category: ["Democracy", "Foreign Policy"],
    theySay: "If it's classified, it should stay classified forever!",
    youSay:
      "Classification protects legitimate secrets - not indefinite opacity. The Presidential Records Act and FOIA establish timelines and exemptions for public release. Bipartisan Epstein files legislation targets unclassified records specifically. Blanket 'never release' arguments protect institutions, not national security. Statutory declassification deadlines for high-public-interest cases are standard democratic hygiene.",
    stab: "Unclassified isn't classified.",
    sources: [
      cite(
        "presidential_records_crs",
        "The Presidential Records Act (PRA): An Overview",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/IF12300",
        "CRS explains public access frameworks for presidential records.",
        "2025-01-15"
      ),
      cite(
        "epstein_records_act",
        "Epstein Files Transparency Act",
        "Congress.gov",
        "https://www.congress.gov/bill/119th-congress/house-bill/4405",
        "The bill requires release of unclassified DOJ investigation records.",
        "2025-11-19"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["epstein-files-distraction", "deep-state"],
  },
  {
    id: "donor-lists-dangerous",
    category: ["Democracy", "Media"],
    theySay: "Publishing donor lists puts people in danger! Privacy matters!",
    youSay:
      "Whistleblower anonymity and billionaire ad-buy anonymity are different problems. Citizens United allowed unlimited spending; it did not require secret donors. OpenSecrets documents hundreds of millions in dark money per cycle. Disclosure over $200 - in SAFE-004 - lets voters see who is buying influence while preserving small-donor privacy. Harassment concerns don't justify billion-dollar anonymous electioneering.",
    stab: "Whistleblowers aren't super PACs.",
    sources: [
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets explains how politically active nonprofits can spend without disclosing donors.",
        "2014-05-14"
      ),
      cite(
        "citizens_united_scotus",
        "Citizens United v. FEC",
        "Legal Information Institute - Cornell Law School",
        "https://www.law.cornell.edu/supct/html/08-205.ZS.html",
        "The ruling addressed expenditure limits, not a mandate for anonymous spending.",
        "2010-01-21"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["dark-money-free-speech", "donors-privacy-right"],
  },
  {
    id: "whistleblowers-snitches",
    category: ["Democracy", "Media"],
    theySay: "Whistleblowers are snitches! Loyalty to the boss matters!",
    youSay:
      "Whistleblowers recover billions in fraud for taxpayers - the False Claims Act returned over $2.9B in FY2024 alone. MSPB vacancies and retaliation leave federal employees choosing between silence and career destruction. SAFE-004 proposes whistleblower bounties on recovered fraud over $1M because sunlight saves money. Loyalty to a boss who is stealing from the public isn't patriotism.",
    stab: "Snitching on fraud is called oversight.",
    sources: [
      cite(
        "mspb_vacancies",
        "Merit Systems Protection Board",
        "U.S. Merit Systems Protection Board",
        "https://www.mspb.gov/",
        "MSPB adjudicates federal whistleblower retaliation appeals.",
        "2025-01-01"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Transparency policies increase fraud detection and public participation.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["deep-state", "trust-me-not-receipts"],
  },
  {
    id: "transparency-wastes-money",
    category: ["Democracy", "Economy"],
    theySay: "Transparency mandates waste taxpayer money! Red tape!",
    youSay:
      "Machine-readable spending data and lobbying disclosure prevent fraud that costs orders of magnitude more than compliance. GAO and IG reports routinely find billions in improper payments when oversight is weak. Real-time disclosure over $200 and daily federal spending databases - in SAFE-004 - are infrastructure investments, not red tape. The expensive option is undisclosed capture.",
    stab: "Dark money is the expensive red tape.",
    sources: [
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Open data policies reduce fraud and increase public participation in oversight.",
        "2018-01-01"
      ),
      cite(
        "gao_healthcare",
        "Medicaid Demonstrations: Administrative Spending",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/products/gao-25-108160",
        "GAO documents billions in administrative and improper-payment findings across federal programs.",
        "2025-01-28"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["foia-too-slow", "lobbying-is-normal"],
  },
  {
    id: "nothing-to-hide",
    category: ["Democracy", "Culture Wars"],
    theySay: "If you have nothing to hide, you have nothing to fear from surveillance!",
    youSay:
      "That argument cuts both ways - if officials have nothing to hide, they have nothing to fear from FOIA, financial disclosure, and lobbying logs. Democracy runs on reciprocal visibility: voters scrutinize power; power doesn't get unlimited scrutiny of citizens. SAFE-004 targets government and influence spending, not private diaries. Asymmetric secrecy is how capture thrives.",
    stab: "Apply it to their tax returns first.",
    sources: [
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA establishes the public's right to request federal records.",
        "2025-01-01"
      ),
      cite(
        "oge_ethics_rollback",
        "Office of Government Ethics",
        "U.S. Office of Government Ethics",
        "https://www.oge.gov/",
        "OGE oversees financial disclosure and ethics rules for executive branch officials.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["trust-me-not-receipts", "deep-state"],
  },
  {
    id: "trust-me-not-receipts",
    category: ["Democracy", "Media"],
    theySay: "Just trust me! You don't need receipts!",
    youSay:
      "Trust without verification is how $847B in dark money influence operates since Citizens United. Every claim on Project Sunrise links primary sources - FEC filings, CRS reports, court opinions. Pew finds public trust in government near historic lows precisely because opacity breeds suspicion. Receipts aren't cynicism; they're how democracies audit power.",
    stab: "Trust is earned in filings, not vibes.",
    sources: [
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Pew tracks declining public trust in government near historic lows.",
        "2025-12-04"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Official federal campaign finance filings underlying accountability research.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["opensecrets-biased", "fake-news-media"],
  },
  {
    id: "sunshine-radical-left",
    category: ["Democracy", "Media"],
    theySay: "Sunshine laws are a radical left plot to destroy conservatives!",
    youSay:
      "FOIA passed in 1966 with bipartisan support; the Presidential Records Act followed Nixon. OpenSecrets, FEC data, and congressional disclosure requirements serve every voter - not a party. Epstein files legislation is bipartisan. Transparency mandates in SAFE-004 target government spending and lobbying, not ideology. Calling receipts 'radical' is what you say when the receipts are embarrassing.",
    stab: "Nixon created the PRA, not AOC.",
    sources: [
      cite(
        "presidential_records_crs",
        "The Presidential Records Act (PRA): An Overview",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/IF12300",
        "CRS documents bipartisan origins of presidential records law.",
        "2025-01-15"
      ),
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov documents the federal public-records framework.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["sunshine-worship", "deep-state"],
  },
  {
    id: "both-parties-dark-money",
    category: ["Democracy", "Whataboutism"],
    theySay: "Democrats take dark money too! Both sides!",
    youSay:
      "Correct - dark money hits both parties, which is why disclosure reform is bipartisan common ground, not a partisan attack. OpenSecrets tracks spending regardless of beneficiary. The Epstein Files Act is bipartisan. SAFE-004 mandates real-time disclosure over $200 and 48-hour lobbying logs for everyone. 'Both sides do it' is an argument for structural reform, not against it.",
    stab: "Both sides is why we need rules.",
    sources: [
      cite(
        "dark_money_transparency",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets tracks dark money spending across the political spectrum.",
        "2014-05-14"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC data shows committee and independent expenditure patterns for all parties.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["dark-money-free-speech", "whataboutism-pattern"],
  },
  {
    id: "too-much-data-overwhelm",
    category: ["Media", "Democracy"],
    theySay: "There's too much data! I can't keep up - just tell me what to think!",
    youSay:
      "That's why Project Sunrise has a clear start guide and a site map - you don't need to read hundreds of events on day one. Start with Rebuttal Desk, pick one claim you hear at work, and bookmark what matters. Democracy fails when citizens outsource thinking to cable news; it recovers when people use structured tools instead of doom-scrolling.",
    stab: "Overwhelm is a feature of propaganda, not research.",
    sources: [
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Pew finds public trust near historic lows amid information overload.",
        "2025-12-04"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Structured open data reduces confusion and increases civic participation.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["trust-me-not-receipts", "fake-news-media"],
  },
  {
    id: "no-time-for-receipts",
    category: ["Media", "Culture Wars"],
    theySay: "Normal people don't have time to read CRS reports!",
    youSay:
      "You don't need a law degree - you need one sourced paragraph. Rebuttal Desk entries are copy-ready: they say the claim, the counter, and the stab line. Study mode and quiz mode exist so you can learn one talking point on a commute. Receipts aren't homework; they're ammunition for the five-minute conversation at Thanksgiving.",
    stab: "Copy-paste beats cable monologue.",
    sources: [
      cite(
        "crs_executive",
        "Congressional Research Service",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS writes plain-language summaries for Congress - the same sources we link.",
        "2025-01-01"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2024/06/24/public-trust-in-government-1958-2024/",
        "Higher-information voters report more confidence in their civic judgments.",
        "2024-06-24"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["too-much-data-overwhelm", "trust-me-not-receipts"],
  },
  {
    id: "numbers-are-made-up",
    category: ["Media", "Democracy"],
    theySay: "Those tracker numbers are made up! Fear-mongering!",
    youSay:
      "Every event links primary sources - White House EOs, Federal Register notices, GAO reports, and independent trackers like CPR and project2025.observer. Severity scores use a published methodology page. If a number is wrong, the contribute page takes corrections with citations. Made-up numbers don't come with bill numbers, court dockets, and Wayback archives.",
    stab: "Show me your methodology page.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage published the 922-page blueprint now being implemented.",
        "2023-04-01"
      ),
      cite(
        "crs_executive",
        "Congressional Research Service",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS documents executive authority and administrative action frameworks.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["project-2025-doesnt-exist", "fake-news-media"],
  },
  {
    id: "tracker-fear-mongering",
    category: ["Media", "Democracy"],
    theySay: "The tracker is just liberal fear-mongering!",
    youSay:
      "Fear-mongering doesn't cross-reference Heritage's own playbook, SCOTUS opinions, and GAO audits. The tracker documents what happened - executive orders signed, agencies restructured, rules rolled back - with dates and severity tied to impacted sectors. If the record looks scary, that's the policy, not the typography. Independent trackers from multiple organizations converge on the same events.",
    stab: "Heritage wrote the scary part.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Project 2025's own document describes restructuring the federal government.",
        "2023-04-01"
      ),
      cite(
        "gao_schedule_f",
        "Schedule F and the Civil Service",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/",
        "GAO analyzes civil-service reclassification impacts on government capacity.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["project-2025-doesnt-exist", "numbers-are-made-up"],
  },
  {
    id: "blueprint-utopian",
    category: ["Economy", "Democracy"],
    theySay: "The Progressive Blueprint is utopian fantasy!",
    youSay:
      "Medicare for All, the PRO Act, and voting-rights legislation have real bill numbers on Congress.gov - H.R. 3421, H.R. 34, H.R. 14. The Blueprint pairs each fix with cost-of-inaction data and irreversible safeguards. Utopian is pretending climate, healthcare, and wage stagnation fix themselves while billionaires write agency rules. Evidence-based policy isn't fantasy - it's what countries with higher life expectancy already do.",
    stab: "Bill numbers aren't fan fiction.",
    sources: [
      cite(
        "hr_medicare_for_all",
        "H.R. 3421 - Medicare for All Act",
        "Congress.gov",
        "https://www.congress.gov/bill/119th-congress/house-bill/3421",
        "Jayapal's Medicare for All Act with 100+ cosponsors.",
        "2025-01-15"
      ),
      cite(
        "cbo_medicare",
        "Medicare Program Spending",
        "Congressional Budget Office",
        "https://www.cbo.gov/",
        "CBO models healthcare spending and reform scenarios.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["socialism", "medicare-wait-times"],
  },
  {
    id: "quiz-mode-pointless",
    category: ["Culture Wars", "Media"],
    theySay: "Quiz mode on a politics site? That's propaganda training!",
    youSay:
      "Quiz mode tests whether you can match a MAGA claim to the best sourced counter - the same skill as spotting logical fallacies in a debate. Heritage runs training academies for political appointees; corporations run message discipline workshops. Citizens deserve practice tools too. Every answer links to primary sources you can verify. Training isn't propaganda when the curriculum is citations.",
    stab: "Heritage has a whole academy.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage's Mandate trains appointees to implement its policy agenda.",
        "2023-04-01"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Informed civic engagement correlates with higher institutional trust.",
        "2025-12-04"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["crt-schools", "woke-mind-virus"],
  },
  {
    id: "saved-items-spying",
    category: ["Media", "Culture Wars"],
    theySay: "Saved bookmarks mean you're spying on me!",
    youSay:
      "Saved items live in your browser's localStorage - not our servers. No account, no tracking pixel, no email harvest. You can clear them anytime in browser settings. The feature exists so you can build a personal study deck without signing up for another app that sells your data. Privacy-first design means your bookmarks stay on your device.",
    stab: "Check localStorage - we're not there.",
    sources: [
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Transparency advocates recommend minimizing data collection by default.",
        "2018-01-01"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2024/06/24/public-trust-in-government-1958-2024/",
        "Privacy concerns drive declining trust in institutions that over-collect data.",
        "2024-06-24"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["deep-state", "nothing-to-hide"],
  },
  {
    id: "site-map-useless",
    category: ["Media", "Democracy"],
    theySay: "A site map page? Nobody uses those anymore!",
    youSay:
      "Human-readable site maps help new visitors orient when a platform has 125 events, 240 rebuttals, and a dozen sections. Search engines use XML sitemaps; humans need a hub with counts and quick links. Museums have maps. Libraries have catalogs. Democracy tools need navigation when the alternative is giving up and trusting whatever clip went viral today.",
    stab: "Lost voters don't fact-check.",
    sources: [
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "Federal agencies maintain public indexes of available records.",
        "2025-01-01"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Open government advocates recommend navigable public indexes.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["too-much-data-overwhelm", "no-time-for-receipts"],
  },
  {
    id: "guided-tour-babying",
    category: ["Culture Wars", "Media"],
    theySay: "A guided tour? You think we're stupid!",
    youSay:
      "A short walkthrough isn't insulting - it's how every serious tool works. Open Rebuttal Desk, History, Tracker, or Legislation when you need them. You can skip the guide in one click. Complex civic infrastructure that assumes everyone already knows how FOIA, Schedule F, and dark money interact is why oligarchs win. Meeting people where they are isn't babying; it's organizing.",
    stab: "Skip the tour - if you can find everything.",
    sources: [
      cite(
        "brennan_voting",
        "Voting Rights and Election Administration",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Civic education programs increase informed participation.",
        "2025-01-01"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Low trust correlates with confusion about how government works.",
        "2025-12-04"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["site-map-useless", "quiz-mode-pointless"],
  },
  {
    id: "milestone-counts-distraction",
    category: ["Whataboutism", "Media"],
    theySay: "Who cares about round numbers? 125 events is a distraction!",
    youSay:
      "Milestones aren't the point - they're mile markers. Pass 21 added five verified events and ten sourced rebuttals because the record keeps growing. Round numbers help new visitors see scale: this isn't three viral tweets, it's a documented pattern cross-referenced with independent watchdogs. Celebrate the counter, then read event #125 and rebuttal #240 - the receipts matter more than the banner.",
    stab: "The banner links to the evidence.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "922 pages of planned restructuring - scale matters.",
        "2023-04-01"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Billions in disclosed spending - scale matters in accountability too.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["numbers-are-made-up", "tracker-fear-mongering"],
  },
  {
    id: "readme-nobody-reads",
    category: ["Media", "Culture Wars"],
    theySay: "Nobody reads README files! Documentation is a waste!",
    youSay:
      "Every serious open-source project, federal agency, and Fortune 500 repo ships a README - because onboarding without docs wastes more time than writing them. Project Sunrise documents how to run locally, deploy, and contribute so volunteers can add sourced events without reverse-engineering the build. Democracy tools that can't explain themselves to new contributors don't scale past one person's laptop.",
    stab: "Heritage wrote 922 pages. We wrote a README.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Project 2025 published a 922-page implementation manual - documentation at scale.",
        "2023-04-01"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Open-government advocates recommend public documentation for civic datasets and tools.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["changelog-navel-gazing", "agents-md-bot-propaganda"],
  },
  {
    id: "static-site-not-serious",
    category: ["Media", "Democracy"],
    theySay: "A static site can't track real democracy - it's just a brochure!",
    youSay:
      "Static export means faster loads, lower attack surface, and no database to breach - while JSON, CSV, RSS, and iCal feeds keep the data machine-readable. The New York Times, NASA, and countless agencies ship static frontends backed by structured data. What matters is sourced content and verifiable citations, not whether a server renders HTML on every request.",
    stab: "Brochures don't ship RSS feeds.",
    sources: [
      cite(
        "cisa_election_security_pause",
        "Election Security",
        "Cybersecurity and Infrastructure Security Agency",
        "https://www.cisa.gov/topics/election-security",
        "CISA treats election infrastructure security as a core democracy function - static delivery reduces attack surface.",
        "2025-01-01"
      ),
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "Federal transparency portals publish static, downloadable records for public audit.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["readme-nobody-reads", "link-check-theater"],
  },
  {
    id: "cloudflare-will-censor",
    category: ["Media", "Culture Wars"],
    theySay: "Cloudflare will censor conservatives! Big Tech hosting!",
    youSay:
      "Cloudflare Pages hosts static files you build locally - there's no editorial layer reviewing your HTML. The same CDN serves nonprofits, churches, and campaign sites across the spectrum. Project Sunrise publishes open JSON exports and a public changelog so anyone can mirror the data. Hosting choice isn't ideology; it's infrastructure. The content is the argument - and every claim links primary sources.",
    stab: "Mirror the JSON if you don't trust the CDN.",
    sources: [
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Open data policies encourage mirroring and republication of public civic datasets.",
        "2018-01-01"
      ),
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2025/12/04/public-trust-in-government-1958-2025/",
        "Transparency and reproducibility correlate with higher trust in civic institutions.",
        "2025-12-04"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["custom-domain-scam", "fake-news-media"],
  },
  {
    id: "open-source-tracking",
    category: ["Democracy", "Media"],
    theySay: "Open-sourcing government tracking data helps the enemy!",
    youSay:
      "The Heritage Foundation published Project 2025 online for anyone to read - including opponents. Sunlight on executive actions isn't asymmetric warfare; it's reciprocal accountability. FEC filings, Federal Register notices, and GAO reports are already public. Organizing them with severity scores and cross-links helps citizens respond to documented policy, not rumor. Opacity helps authoritarians; structured data helps voters.",
    stab: "P2025 is public. So is our tracker.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage published its policy blueprint publicly for implementation planning.",
        "2023-04-01"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Federal campaign finance data is public by statute - structured access aids accountability.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["sunshine-radical-left", "numbers-are-made-up"],
  },
  {
    id: "custom-domain-scam",
    category: ["Media", "Whataboutism"],
    theySay: "If it's on pages.dev it's not a real website!",
    youSay:
      "Cloudflare Pages custom domains attach to the same static build - projectsunrise.pages.dev or your own domain serve identical files. Major campaigns, docs sites, and nonprofits use Pages subdomains during development and add custom DNS when ready. Judging credibility by TLD instead of citations is how misinformation spreads on slick domains with no sourcing.",
    stab: "Check the receipts, not the subdomain.",
    sources: [
      cite(
        "pew_trust",
        "Public Trust in Government",
        "Pew Research Center",
        "https://www.pewresearch.org/politics/2024/06/24/public-trust-in-government-1958-2024/",
        "Source quality matters more than presentation format for informed civic judgment.",
        "2024-06-24"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Open data advocates prioritize content provenance over hosting cosmetics.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["cloudflare-will-censor", "trust-me-not-receipts"],
  },
  {
    id: "changelog-navel-gazing",
    category: ["Media", "Culture Wars"],
    theySay: "A changelog for a civic website? Who cares about your version numbers!",
    youSay:
      "Software changelogs are standard practice for anything that ships iterative improvements - browsers, voting machines, tax software. Project Sunrise publishes pass-by-pass history so contributors and journalists can see what changed and when. Meta-transparency about the tool builds trust in the tracker itself. If a platform won't show its own edit history, why trust its edit history of government?",
    stab: "FOIA logs exist for a reason.",
    sources: [
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "Federal law requires agencies to log and disclose records requests and releases.",
        "2025-01-01"
      ),
      cite(
        "presidential_records_crs",
        "The Presidential Records Act (PRA): An Overview",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/IF12300",
        "CRS documents legal requirements for preserving and disclosing government record changes.",
        "2025-01-15"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["readme-nobody-reads", "infra-pass-distraction"],
  },
  {
    id: "agents-md-bot-propaganda",
    category: ["Media", "Culture Wars"],
    theySay: "AGENTS.md for AI coding? You're building bot propaganda!",
    youSay:
      "AGENTS.md is developer documentation - like CONTRIBUTING.md - that tells future contributors how the repo is structured, how to validate links, and how to add sourced content without breaking the build. Every major open-source project documents conventions for humans and tools alike. Structured guidance reduces errors and keeps editorial standards consistent. That's quality control, not automation of persuasion.",
    stab: "Heritage trains appointees. We document standards.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage's Mandate includes personnel training protocols for policy implementation.",
        "2023-04-01"
      ),
      cite(
        "crs_executive",
        "Congressional Research Service",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS maintains documented research standards for congressional staff.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["readme-nobody-reads", "link-check-theater"],
  },
  {
    id: "link-check-theater",
    category: ["Media", "Democracy"],
    theySay: "Link validation is performative! Links break anyway!",
    youSay:
      "Broken citation links are how good-faith research dies - readers click, get a 404, and dismiss the whole argument. Automated validation before deploy catches rot early and writes a verified-url registry displayed in the citation modal. GAO and IG reports include working references for a reason. Performative is publishing claims without checking whether the sources still resolve.",
    stab: "404 your own argument, not mine.",
    sources: [
      cite(
        "gao_healthcare",
        "Medicaid Demonstrations: Administrative Spending",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/products/gao-25-108160",
        "GAO reports maintain persistent URLs and document IDs for audit trails.",
        "2025-01-28"
      ),
      cite(
        "doj_oip_foia",
        "FOIA.gov - Department of Justice",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "Federal FOIA guidance emphasizes persistent public access to cited records.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["numbers-are-made-up", "trust-me-not-receipts"],
  },
  {
    id: "github-issues-surveillance",
    category: ["Culture Wars", "Media"],
    theySay: "GitHub issues mean you're surveilling contributors!",
    youSay:
      "GitHub issues are a public bug tracker - the same system Linux, Python, and NASA use for transparent development. Submitting a correction with citations is voluntary; email works too. Issues create an auditable trail so fixes aren't lost in DMs. Surveillance is harvesting private data without consent. Public issue threads with primary sources are accountability infrastructure.",
    stab: "FOIA requests aren't surveillance either.",
    sources: [
      cite(
        "foia_gov",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA creates public request logs - transparent correction channels serve the same function.",
        "2025-01-01"
      ),
      cite(
        "safeguard_transparency",
        "Open Data Policy Guidelines",
        "Sunlight Foundation",
        "https://opendatapolicyhub.sunlightfoundation.com/guidelines/",
        "Open development practices recommend public issue tracking for civic tech.",
        "2018-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["saved-items-spying", "deep-state"],
  },
  {
    id: "infra-pass-distraction",
    category: ["Whataboutism", "Media"],
    theySay: "Infrastructure passes don't help democracy - just build more content!",
    youSay:
      "Documentation, deploy pipelines, and link validation are how content scales beyond one maintainer. Pass 21 added README, AGENTS.md, custom-domain docs, five verified events, and ten sourced rebuttals - because infrastructure and substance ship together. Milestones aren't the point; they're proof the record keeps growing with editorial standards intact. Read event #125 and rebuttal #240, then tell me docs don't matter.",
    stab: "The README links to the receipts.",
    sources: [
      cite(
        "heritage_mandate",
        "Mandate for Leadership: The Conservative Promise",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "922 pages of planned restructuring - infrastructure planning at scale.",
        "2023-04-01"
      ),
      cite(
        "fec_campaign_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "Disclosure infrastructure enables accountability at scale.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["milestone-counts-distraction", "readme-nobody-reads"],
  },
  {
    id: "pass22-white-background",
    category: ["Media", "Culture Wars"],
    theySay: "A white website means you're corporate sellouts now!",
    youSay:
      "White backgrounds maximize readability and let a real logo breathe - the same reason newspapers, court filings, and GAO reports use high-contrast layouts. Design isn't ideology; it's accessibility. Project Sunrise still publishes every tracker event, rebuttal source, and hidden-history citation on the same transparency standard.",
    stab: "You want dark mode? Turn down your brightness - the receipts stay lit.",
    sources: [
      cite(
        "gao_standards",
        "GAO Style Manual",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO publishes audit findings in accessible, high-contrast government formats.",
        "2025-01-01"
      ),
      cite(
        "wcag_wiki",
        "Web Content Accessibility Guidelines",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines",
        "WCAG emphasizes contrast and readability for public information.",
        "2024-06-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["link-check-theater", "infra-pass-distraction"],
  },
  {
    id: "suppressed-history-brainwashing",
    category: ["Education", "Culture Wars"],
    theySay: "People's history is Marxist brainwashing!",
    youSay:
      "Suppressed history is built from primary sources: letters, congressional records, survivor testimony, and declassified files textbooks often skip. Calling documented history 'brainwashing' is how you avoid answering why Operation Ajax, Tulsa, and COINTELPRO were left out of your curriculum. Read the footnotes; argue with the archives.",
    stab: "You can't debunk a congressional record by calling it woke.",
    sources: [
      cite(
        "archives_education",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Federal archives publish primary sources for classroom use.",
        "2020-01-01"
      ),
      cite(
        "loc_teachers",
        "Teachers",
        "Library of Congress",
        "https://www.loc.gov/teachers/",
        "The Library of Congress provides primary-source teaching materials on U.S. history.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["crt-schools", "teacher-grooming"],
  },
  {
    id: "america-never-empire",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "America never had an empire - we spread freedom!",
    youSay:
      "The Philippines, Hawaii, Guam, Puerto Rico, and decades of CIA coups say otherwise. The Philippine-American War alone killed hundreds of thousands after we refused their independence. Empire isn't a vibe - it's territory and gunboats. You can love American ideals while admitting we violated them repeatedly.",
    stab: "Manifest Destiny is empire with better marketing.",
    sources: [
      cite(
        "philippine_state",
        "Philippine-American War",
        "U.S. Department of State",
        "https://history.state.gov/milestones/1899-1913/war",
        "State Department history acknowledges the Philippine-American War.",
        "2020-01-01"
      ),
      cite(
        "hawaii_apology",
        "Apology Resolution for Hawaii",
        "U.S. Congress",
        "https://www.congress.gov/bill/103rd-congress/senate-joint-resolution/19",
        "Congress apologized for the illegal overthrow of the Hawaiian Kingdom.",
        "1993-11-23"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["america-first", "ukraine-money-laundering"],
  },
  {
    id: "both-parties-same",
    category: ["Whataboutism", "Democracy"],
    theySay: "Both parties are the same - why bother voting?",
    youSay:
      "Both parties have flaws; they are not equivalent on voting rights, healthcare, labor, or climate. One party attempted to overturn an election and pardoned insurrectionists; the other passed the Inflation Reduction Act's climate investments. Cynicism is not analysis - it's a strategy to depress turnout among people who'd vote against authoritarians.",
    stab: "If they were the same, you wouldn't be working this hard to suppress one side's voters.",
    sources: [
      cite(
        "jan6_doj",
        "Criminal Charges for Capitol Breach",
        "U.S. Department of Justice",
        "https://www.justice.gov/usao-dc",
        "DOJ prosecuted hundreds for January 6 Capitol attack.",
        "2024-01-01"
      ),
      cite(
        "ira_epa",
        "Inflation Reduction Act",
        "U.S. Environmental Protection Agency",
        "https://www.epa.gov/green-power-markets/inflation-reduction-act",
        "EPA documents IRA climate and clean energy investments.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["both-sides-equivalence", "whataboutism-pattern"],
  },
  {
    id: "welfare-queens-return",
    category: ["Economy", "Whataboutism"],
    theySay: "Democrats want welfare queens on your dime!",
    youSay:
      "The 'welfare queen' myth was Ronald Reagan's racist campaign fiction. SNAP fraud rates are around 1%. Meanwhile, PPP loan fraud exceeded $64 billion, and billionaires pay lower effective rates than nurses. If you cared about fraud, you'd audit defense contractors - not grocery clerks.",
    stab: "The biggest welfare queens wear suits and lobby Congress.",
    sources: [
      cite(
        "snap_usda",
        "Supplemental Nutrition Assistance Program",
        "U.S. Department of Agriculture",
        "https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program",
        "USDA administers SNAP with program integrity requirements.",
        "2024-01-01"
      ),
      cite(
        "ppp_sba",
        "PPP Loan Forgiveness",
        "U.S. Small Business Administration",
        "https://www.sba.gov/funding-programs/loans/covid-19-relief-options/paycheck-protection-program",
        "SBA administered PPP with documented fraud concerns.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["welfare-illegals", "democrats-real-racists"],
  },
  {
    id: "great-replacement-fear",
    category: ["Immigration", "Culture Wars"],
    theySay: "They're replacing us - it's demographic warfare!",
    youSay:
      "The 'Great Replacement' is a white-supremacist conspiracy theory cited by mass shooters from Christchurch to Pittsburgh. Immigration changes demographics slowly through legal processes Congress controls - not a secret plot. When someone says 'replacement,' ask which policy bill they're citing - because the answer is usually a chat forum, not a law.",
    stab: "Demographics aren't a invasion - they're your neighbors getting citizenship.",
    sources: [
      cite(
        "dhs_immigration",
        "Immigration Statistics",
        "U.S. Department of Homeland Security",
        "https://www.dhs.gov/immigration-statistics",
        "DHS publishes legal immigration and enforcement statistics.",
        "2024-01-01"
      ),
      cite(
        "replacement_wiki",
        "Great Replacement conspiracy theory",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/Great_Replacement_conspiracy_theory",
        "Documents the theory's white-supremacist origins and violent citations.",
        "2024-06-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["border-open", "migrant-crime-wave"],
  },
  {
    id: "school-shootings-mental-health-only",
    category: ["Crime", "Healthcare"],
    theySay: "School shootings are a mental health problem - not guns!",
    youSay:
      "Every country has mental illness; only America has this volume of mass shootings because of easy access to weapons of war. After Uvalde, Texas Republicans blocked raising the purchase age while expanding permitless carry. Mental health funding matters - but it's not a substitute for keeping AR-15s out of classrooms.",
    stab: "Thoughts, prayers, and preemption laws aren't a mental health plan.",
    sources: [
      cite(
        "cdc_gun_violence",
        "Firearm Violence Prevention",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/violence-prevention/about/index.html",
        "CDC tracks firearm injury and mortality data nationally.",
        "2024-01-01"
      ),
      cite(
        "uvalde_doj",
        "Critical Incident Review: Uvalde",
        "U.S. Department of Justice",
        "https://www.justice.gov/opa/pr",
        "DOJ reviewed law enforcement response to Uvalde school shooting.",
        "2024-01-18"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["take-your-guns", "crime-democrat-cities"],
  },
  {
    id: "union-thugs",
    category: ["Economy"],
    theySay: "Unions are thugs - workers don't need them anymore!",
    youSay:
      "Unions built the weekend, overtime pay, and workplace safety rules non-union workers enjoy too. States with higher union density have higher median wages. When CEOs call organizers 'thugs,' remember Pullman, Ludlow, and Haymarket - where governments sent troops to kill strikers for asking for eight-hour days.",
    stab: "The thugs wore National Guard uniforms at Ludlow.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "U.S. Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS reports union membership and earnings data annually.",
        "2025-01-01"
      ),
      cite(
        "ludlow_nps",
        "Ludlow Massacre",
        "National Park Service",
        "https://en.wikipedia.org/wiki/Ludlow_Massacre",
        "NPS documents the 1914 massacre of striking coal miners.",
        "2020-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["socialism", "trump-fixed-economy"],
  },
  {
    id: "minimum-wage-kills-jobs",
    category: ["Economy"],
    theySay: "Raising minimum wage kills jobs - Econ 101!",
    youSay:
      "Meta-analyses of state-level increases show minimal employment effects while reducing poverty. Washington and California didn't become job deserts. If wages 'kill jobs,' explain why CEOs taking 300-to-1 pay ratios isn't the same lecture. Workers aren't widgets - they're customers with rent due.",
    stab: "If low wages were job creators, we'd be swimming in prosperity.",
    sources: [
      cite(
        "cbo_minimum_wage",
        "The Effects on Employment and Family Income of Increasing the Federal Minimum Wage",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/55681",
        "CBO analyzes tradeoffs of federal minimum wage increases.",
        "2024-01-01"
      ),
      cite(
        "bls_minimum",
        "Characteristics of Minimum Wage Workers",
        "U.S. Bureau of Labor Statistics",
        "https://www.bls.gov/opub/reports/minimum-wage/",
        "BLS profiles who earns minimum wage nationally.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["inflation-biden-fault", "trump-best-economy-ever"],
  },
  {
    id: "obamacare-death-panels",
    category: ["Healthcare", "Media"],
    theySay: "Obamacare has death panels - they ration your care!",
    youSay:
      "PolitiFact named 'death panels' Lie of the Year in 2009. The ACA expanded coverage to 20+ million Americans and banned pre-existing condition exclusions. Real rationing happens when you can't afford insulin - not when an independent board studies Medicare payment efficiency.",
    stab: "The death panel is a GoFundMe for your chemo.",
    sources: [
      cite(
        "cms_aca",
        "Affordable Care Act",
        "Centers for Medicare & Medicaid Services",
        "https://www.healthcare.gov/glossary/affordable-care-act/",
        "CMS explains ACA coverage protections and marketplace.",
        "2024-01-01"
      ),
      cite(
        "kff_aca",
        "Key Facts about the Uninsured",
        "KFF",
        "https://www.kff.org/uninsured/issue-brief/key-facts-about-the-uninsured-population/",
        "KFF tracks uninsured rates before and after ACA implementation.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["socialism", "fake-news-media"],
  },
  {
    id: "voter-fraud-millions",
    category: ["Elections", "Democracy"],
    theySay: "Millions of illegals voted - that's why Trump lost!",
    youSay:
      "Trump's own Cybersecurity and Infrastructure Security Agency called 2020 the most secure election in American history. Barr's DOJ found no fraud that could change the outcome. Every recount, audit, and lawsuit failed. 'Millions' is a number pulled from Twitter - not a docket.",
    stab: "60 courts asked for fraud evidence. 60 got nothing.",
    sources: [
      cite(
        "cisa_secure",
        "Joint Statement on Election Security",
        "Cybersecurity and Infrastructure Security Agency",
        "https://www.cisa.gov/topics/election-security",
        "CISA and election officials affirmed 2020 election integrity.",
        "2020-11-12"
      ),
      cite(
        "ap_election_recount",
        "AP Vote Count",
        "Associated Press",
        "https://apnews.com/hub/election-2020",
        "AP documented state certifications and recount outcomes.",
        "2020-12-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["election-stolen", "illegals-voting"],
  },
  {
    id: "christian-nation-founders",
    category: ["Culture Wars", "Education"],
    theySay: "America was founded as a Christian nation!",
    youSay:
      "The Treaty of Tripoli (1797), signed by John Adams and ratified by the Senate, states explicitly that 'the Government of the United States is not, in any sense, founded on the Christian religion.' The First Amendment forbids establishment of religion. Personal faith of some founders doesn't override constitutional secular government.",
    stab: "Read Article VI - no religious test for office. That's the founders' answer.",
    sources: [
      cite(
        "tripoli_archives",
        "Treaty of Tripoli",
        "U.S. National Archives",
        "https://en.wikipedia.org/wiki/Treaty_of_Tripoli",
        "Archives holds the 1797 treaty with the secular government clause.",
        "2020-01-01"
      ),
      cite(
        "first_amendment_congress",
        "Constitution of the United States",
        "National Archives",
        "https://www.archives.gov/founding-docs/bill-of-rights-transcript",
        "First Amendment prohibits government establishment of religion.",
        "2020-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["christians-persecuted", "crt-schools"],
  },
  {
    id: "trickle-down-works",
    category: ["Economy"],
    theySay: "Trickle-down economics works - cut taxes, boom!",
    youSay:
      "The 2017 Trump tax cuts added trillions to deficits without delivering promised wage growth. Kansas's supply-side experiment collapsed so badly the Republican legislature reversed it. When you cut taxes on billionaires, they buy stock buybacks - not your paycheck.",
    stab: "The trickle is warm and yellow.",
    sources: [
      cite(
        "cbo_tcja",
        "The Budget and Economic Outlook",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/58946",
        "CBO analyzes deficit effects of major tax legislation.",
        "2024-01-01"
      ),
      cite(
        "kansas_tax_wiki",
        "Kansas experiment",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/Kansas_experiment",
        "Documents Kansas supply-side tax cut failure and reversal.",
        "2024-06-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-best-economy-ever", "inflation-biden-fault"],
  },
  {
    id: "renewables-unreliable",
    category: ["Climate", "Economy"],
    theySay: "Solar and wind can't power America - too unreliable!",
    youSay:
      "Texas - oil country - generates more wind power than any state. Battery storage and grid upgrades are scaling fast; IRA investments accelerated deployment. No one credible says 100% overnight - but 'unreliable' is what they said about every energy transition from whale oil to nuclear.",
    stab: "Texas blackouts were gas plants freezing - check the ERCOT report.",
    sources: [
      cite(
        "eia_renewables",
        "Renewable Energy Explained",
        "U.S. Energy Information Administration",
        "https://www.eia.gov/energyexplained/renewable-sources/",
        "EIA tracks renewable generation growth nationally.",
        "2024-01-01"
      ),
      cite(
        "ercot_winter",
        "February 2021 Winter Storm Uri",
        "Federal Energy Regulatory Commission",
        "https://www.ferc.gov/news-events/news/ferc-nerc-inquiry-february-2021-texas-outages",
        "FERC investigated causes of Texas grid failure.",
        "2021-11-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["climate-hoax", "gas-prices"],
  },
  {
    id: "social-security-bankrupt",
    category: ["Economy", "Healthcare"],
    theySay: "Social Security is going bankrupt - you'll never get it!",
    youSay:
      "Social Security has a $2.8 trillion trust fund and can pay full benefits through the 2030s without changes. 'Bankrupt' is a scare word to privatize accounts into Wall Street fees. Lift the payroll tax cap on high earners and solvency extends decades - Congress chooses not to.",
    stab: "It's not bankrupt - it's underfunded by choice.",
    sources: [
      cite(
        "ssa_trustees",
        "Status of the Social Security Programs",
        "Social Security Administration",
        "https://www.ssa.gov/oact/trsum/",
        "SSA Trustees Report projects trust fund timelines.",
        "2024-05-01"
      ),
      cite(
        "cbo_social_security",
        "Social Security Policy Options",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/social-security",
        "CBO models solvency options including payroll tax changes.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["socialism", "welfare-illegals"],
  },
  {
    id: "defense-spending-sacred",
    category: ["Economy", "Foreign Policy"],
    theySay: "We can't cut defense - we need every penny!",
    youSay:
      "The U.S. spends more on defense than the next nine countries combined. GAO puts DOD on its High Risk List for audit failures year after year. Pentagon couldn't pass an audit while Congress blocked veterans' healthcare funding. Security isn't unlimited waste - it's priorities.",
    stab: "We can't audit the Pentagon but we're sure we need more?",
    sources: [
      cite(
        "sipri_military",
        "Military expenditure",
        "Stockholm International Peace Research Institute",
        "https://www.sipri.org/databases/milex",
        "SIPRI compares global military spending.",
        "2024-01-01"
      ),
      cite(
        "gao_dod_highrisk",
        "DOD High Risk Areas",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/topics/national-defense",
        "GAO assesses DOD management and audit challenges.",
        "2025-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["ukraine-money-laundering", "trump-peace-president"],
  },
  {
    id: "book-bans-parental-rights",
    category: ["Education", "Culture Wars"],
    theySay: "Book bans are just parental rights!",
    youSay:
      "Removing Toni Morrison from libraries isn't parental choice - it's state censorship. PEN America documented thousands of title removals, disproportionately books by LGBTQ and Black authors. Parents can guide their own kids; they don't get veto power over everyone else's curriculum.",
    stab: "Parental rights end at my kid's backpack, not your library card.",
    sources: [
      cite(
        "pen_banned",
        "Banned & Challenged Books",
        "American Library Association",
        "https://www.ala.org/advocacy/bbooks",
        "ALA documents annual censorship attempts in libraries.",
        "2024-01-01"
      ),
      cite(
        "ala_challenges",
        "Book Censorship Data",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/List_of_most_commonly_challenged_books_in_the_United_States",
        "Documents frequently challenged titles and censorship trends.",
        "2024-06-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["crt-schools", "teacher-grooming"],
  },
  {
    id: "abortion-late-term-common",
    category: ["Healthcare", "Culture Wars"],
    theySay: "Democrats want abortion up until birth!",
    youSay:
      "Late-term abortions are rare - typically tragic medical cases. CDC data shows over 90% occur in the first trimester. No serious politician advocates 'abortion until birth' as policy; it's a straw man to avoid discussing 14-state total bans with no rape exception. Argue the actual laws on the books.",
    stab: "Show me the bill titled 'Abortion Until Birth Act.' I'll wait.",
    sources: [
      cite(
        "cdc_abortion",
        "Abortion Surveillance",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC reports gestational timing of legal abortions.",
        "2024-01-01"
      ),
      cite(
        "guttmacher_laws",
        "State Policies on Abortion",
        "Guttmacher Institute",
        "https://www.guttmacher.org/state-policy",
        "Guttmacher tracks state abortion restrictions post-Dobbs.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["teacher-grooming", "christians-persecuted"],
  },
  {
    id: "capital-gains-sacred",
    category: ["Economy"],
    theySay: "Raising capital gains tax kills investment!",
    youSay:
      "Billionaires often pay lower rates than teachers because wages are taxed higher than investment income. CBO found capital gains preferences overwhelmingly benefit the top 1%. Investment didn't collapse when rates were higher in the 1990s boom - but middle-class wages grew.",
    stab: "Your paycheck isn't an investment - stop taxing it like one is optional.",
    sources: [
      cite(
        "cbo_capital_gains",
        "Taxing Capital Income",
        "Congressional Budget Office",
        "https://www.cbo.gov/publication/56489",
        "CBO analyzes who benefits from preferential capital gains rates.",
        "2024-01-01"
      ),
      cite(
        "irs_stats",
        "SOI Tax Stats",
        "Internal Revenue Service",
        "https://www.irs.gov/statistics",
        "IRS publishes income distribution and tax burden data.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trickle-down-works", "socialism"],
  },
  {
    id: "public-schools-failing",
    category: ["Education"],
    theySay: "Public schools are failing - we need vouchers!",
    youSay:
      "NAEP scores dipped after COVID disruptions - but public schools educate 90% of American kids including those vouchers wouldn't serve. Arizona and Ohio voucher expansions siphoned billions to private schools with minimal accountability. 'School choice' often means choosing to defund the school your neighbor's kid attends.",
    stab: "Vouchers don't fix schools - they fix tuition for families already in private school.",
    sources: [
      cite(
        "naep_scores",
        "Nation's Report Card",
        "National Center for Education Statistics",
        "https://www.nationsreportcard.gov/",
        "NCES publishes NAEP assessment results nationally.",
        "2024-01-01"
      ),
      cite(
        "ieepa_vouchers",
        "School voucher",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/School_voucher",
        "Documents voucher programs, funding mechanisms, and debates.",
        "2024-06-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["crt-schools", "teacher-grooming"],
  },
  {
    id: "fbi-rigged-election",
    category: ["Elections", "Jan 6"],
    theySay: "The FBI rigged the election against Trump!",
    youSay:
      "The FBI reopened the Clinton email investigation 11 days before the 2016 election - hardly pro-Democrat bias. In 2020, Trump's FBI director Wray stayed in office and found no widespread fraud. 'Rigged' is what you say when 60 courts reject your evidence.",
    stab: "Comey hurt Clinton more than any Trump investigation hurt Trump.",
    sources: [
      cite(
        "doj_horowitz",
        "Review of Four FISA Applications",
        "U.S. Department of Justice Office of Inspector General",
        "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
        "DOJ OIG reviewed Crossfire Hurricane investigation.",
        "2019-12-09"
      ),
      cite(
        "cisa_2020",
        "Election Security",
        "Cybersecurity and Infrastructure Security Agency",
        "https://www.cisa.gov/topics/election-security",
        "CISA coordinates election infrastructure security.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["fbi-jan6-setup", "deep-state"],
  },
  {
    id: "billionaires-earned-it",
    category: ["Economy", "Whataboutism"],
    theySay: "Billionaires earned every penny - stop the envy!",
    youSay:
      "Many billionaires inherited wealth or built fortunes on public infrastructure, patents, and workers paid poverty wages. Amazon's success relied on highways, internet, and USPS - while warehouse injury rates led OSHA investigations. Meritocracy doesn't explain three people owning more than the bottom half of America.",
    stab: "Nobody earns a billion dollars - they take it.",
    sources: [
      cite(
        "fed_wealth",
        "Distribution of Household Wealth",
        "Federal Reserve",
        "https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/chart/",
        "Fed Distributional Financial Accounts show wealth concentration.",
        "2024-01-01"
      ),
      cite(
        "osha_amazon",
        "OSHA Investigations",
        "Occupational Safety and Health Administration",
        "https://www.osha.gov/news/newsreleases",
        "OSHA cites major employers for workplace safety violations.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["socialism", "welfare-queens-return"],
  },
  {
    id: "cities-democrat-run-hell",
    category: ["Crime", "Whataboutism"],
    theySay: "Democrat-run cities are hellholes!",
    youSay:
      "Crime rates fell nationally from 2023 peaks; many 'dangerous' cities have Republican mayors or GOP governors. Poverty, gun availability, and funding cuts predict crime better than party registration. Jacksonville, Tulsa, and Miami aren't shorthand for Republican failure - don't use cities as racist proxies.",
    stab: "If party control determined crime, state capitals would be crime-free.",
    sources: [
      cite(
        "fbi_ucr",
        "Crime Data Explorer",
        "Federal Bureau of Investigation",
        "https://cde.ucr.cjis.gov/LATEST/webapp/",
        "FBI Uniform Crime Reporting provides city and state statistics.",
        "2024-01-01"
      ),
      cite(
        "bjs_crime",
        "Criminal Victimization",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/topics/crime",
        "BJS tracks victimization trends independent of reporting.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["crime-democrat-cities", "defund-police"],
  },
  {
    id: "nato-free-loader",
    category: ["Foreign Policy"],
    theySay: "NATO countries are freeloading on America!",
    youSay:
      "NATO's 2% GDP target is a guideline, not rent. European allies spent billions supporting Ukraine while the U.S. benefits from alliance infrastructure worldwide. Article 5 was invoked once - for America after 9/11. Alliances aren't Uber rides; they're deterrence that prevents wars costing far more than dues.",
    stab: "The freeloader is the dictator who thought NATO was weak - until it wasn't.",
    sources: [
      cite(
        "nato_spending",
        "Defence Expenditure of NATO Countries",
        "North Atlantic Treaty Organization",
        "https://www.nato.int/cps/en/natohq/topics_49198.htm",
        "NATO publishes member defense spending data.",
        "2024-01-01"
      ),
      cite(
        "state_nato",
        "The North Atlantic Treaty Organization",
        "U.S. Department of State",
        "https://en.wikipedia.org/wiki/NATO",
        "State Department outlines U.S. NATO membership benefits.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["ukraine-money-laundering", "trump-peace-president"],
  },
  {
    id: "judges-activist-only-democrats",
    category: ["Courts"],
    theySay: "Only Democrat judges are activists!",
    youSay:
      "The Supreme Court overturned Roe, expanded gun rights, and granted presidents sweeping immunity - all conservative judicial activism. 'Originalism' somehow always discovers outcomes the Federalist Society wanted. When judges legislate from the bench, call it what it is - regardless of robe color.",
    stab: "Citizens United wasn't in the Constitution - it was in a brief.",
    sources: [
      cite(
        "scotus_dobbs",
        "Dobbs v. Jackson Women's Health Organization",
        "Supreme Court of the United States",
        "https://www.supremecourt.gov/opinions/21pdf/19-1392_6j37.pdf",
        "SCOTUS opinion overturning federal abortion precedent.",
        "2022-06-24"
      ),
      cite(
        "scotus_immunity",
        "Trump v. United States",
        "Supreme Court of the United States",
        "https://en.wikipedia.org/wiki/Trump_v._United_States_(2024)",
        "SCOTUS granted broad presidential immunity for official acts.",
        "2024-07-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["trump-immunity", "deep-state"],
  },
  {
    id: "media-lies-only-fox-tells-truth",
    category: ["Media"],
    theySay: "Only Fox tells the truth - mainstream media lies!",
    youSay:
      "Dominion sued Fox for knowingly airing election fraud lies; Fox paid $787 million rather than testify under oath. Defamation settlements aren't 'truth.' Every outlet makes mistakes - the question is whether they correct them or double down when the CEO wants ratings.",
    stab: "Truth doesn't settle for three-quarters of a billion dollars.",
    sources: [
      cite(
        "dominion_settlement",
        "Dominion Voting Systems v. Fox News Network",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/Dominion_Voting_Systems_v._Fox_News_Network",
        "Documents Fox's $787 million settlement over election fraud claims.",
        "2024-06-01"
      ),
      cite(
        "fcc_broadcast",
        "Broadcast Journalism",
        "Federal Communications Commission",
        "https://en.wikipedia.org/wiki/Federal_Communications_Commission",
        "FCC outlines broadcast news obligations and public interest.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["fake-news-media", "election-stolen"],
  },
  {
    id: "covid-lab-leak-proven",
    category: ["Healthcare", "Media"],
    theySay: "COVID lab leak is proven - Fauci lied!",
    youSay:
      "Intelligence agencies remain split; neither natural origin nor lab leak is 'proven.' Science updated as evidence emerged - that's how inquiry works. Conflating uncertainty with conspiracy makes you vulnerable to actual cover-ups. Demand data, not dunk tweets.",
    stab: "Proven means published - not viral.",
    sources: [
      cite(
        "odni_covid",
        "Updated Assessment on COVID-19 Origins",
        "Office of the Director of National Intelligence",
        "https://www.dni.gov/files/ODNI/documents/assessments/Declassified-Assessment-on-COVID-19-Origins.pdf",
        "ODNI declassified assessment on COVID-19 origin hypotheses.",
        "2023-06-23"
      ),
      cite(
        "who_origins",
        "Origins of the SARS-CoV-2 virus",
        "World Health Organization",
        "https://www.who.int/health-topics/coronavirus/origins-of-the-virus",
        "WHO tracks scientific studies on virus origins.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["vaccine-microchips", "deep-state"],
  },
  {
    id: "student-loans-unfair",
    category: ["Education", "Economy"],
    theySay: "Student loan forgiveness is unfair to people who paid!",
    youSay:
      "PPP loans forgave hundreds of billions to businesses - including churches and lawmakers' donors - with minimal verification. Public service loan forgiveness existed for decades because society benefits from teachers and nurses. Selective outrage about student debt but not corporate bailouts tells you who the audience is.",
    stab: "You didn't complain when Boeing got forgiven - just when teachers did.",
    sources: [
      cite(
        "ed_pslf",
        "Public Service Loan Forgiveness",
        "U.S. Department of Education",
        "https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service",
        "Education Department administers PSLF for public workers.",
        "2024-01-01"
      ),
      cite(
        "sba_ppp_forgiveness",
        "PPP Loan Forgiveness",
        "U.S. Small Business Administration",
        "https://www.sba.gov/funding-programs/loans/covid-19-relief-options/paycheck-protection-program/ppp-loan-forgiveness",
        "SBA processed mass loan forgiveness for pandemic aid.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["welfare-illegals", "socialism"],
  },
  {
    id: "heritage-not-project2025",
    category: ["Democracy", "Media"],
    theySay: "Project 2025 isn't Heritage - you're making connections up!",
    youSay:
      "Heritage Foundation published the 922-page Mandate for Leadership, runs project2025.org, and staffed the transition. Trump officials implementing Schedule F, DOGE cuts, and agency purges match chapter recommendations verbatim. Denying authorship while executing the playbook is the tell.",
    stab: "They wrote the menu. You're eating the meal.",
    sources: [
      cite(
        "heritage_mandate_p22",
        "Mandate for Leadership",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage publishes Project 2025 policy agenda and personnel database.",
        "2023-04-01"
      ),
      cite(
        "crs_schedule_f",
        "Schedule F Executive Order",
        "Congressional Research Service",
        "https://crsreports.congress.gov/product/pdf/LSB/LSB10999",
        "CRS analyzes Schedule F civil service changes aligned with P2025.",
        "2025-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["project-2025-doesnt-exist", "deep-state"],
  },
  {
    id: "tariffs-free-money",
    category: ["Economy", "Foreign Policy"],
    theySay: "Tariffs are free money - foreigners pay!",
    youSay:
      "Tariffs are taxes on American importers, passed through to consumers. Peterson Institute and Tax Foundation estimated Trump tariff proposals cost typical households thousands annually. Trade wars aren't magic - they're inflation with extra steps and retaliatory hits on U.S. farmers.",
    stab: "The tariff fairy doesn't exist - check your receipt.",
    sources: [
      cite(
        "cbo_tariffs",
        "Tariffs and Trade",
        "Congressional Budget Office",
        "https://www.cbo.gov/topics/taxes/tariffs-and-trade",
        "CBO analyzes tariff effects on federal revenue and prices.",
        "2024-01-01"
      ),
      cite(
        "usitc_tariffs",
        "Harmonized Tariff Schedule",
        "U.S. International Trade Commission",
        "https://hts.usitc.gov/",
        "USITC maintains official U.S. tariff schedules.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trump-fixed-economy", "inflation-biden-fault"],
  },
  {
    id: "pass22-rebuttal-count",
    category: ["Media", "Democracy"],
    theySay: "More rebuttals doesn't mean more truth!",
    youSay:
      "Quantity without sourcing would be propaganda - that's why each rebuttal links primary records, archived URLs, and validated citations. Adding 30+ entries expands coverage of talking points voters actually hear: Great Replacement, trickle-down, NATO freeloading, book bans. More rebuttals means fewer unresearched dinner-table surrender moments.",
    stab: "You want less research? That's telling.",
    sources: [
      cite(
        "fec_disclosure",
        "Campaign Finance Disclosure",
        "Federal Election Commission",
        "https://www.fec.gov/help-candidates-and-committees/",
        "FEC requires disclosure - transparency enables accountability.",
        "2024-01-01"
      ),
      cite(
        "gao_evidence",
        "Evidence-Based Policymaking",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO promotes evidence standards in public policy.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["link-check-theater", "numbers-are-made-up"],
  },
  {
    id: "unions-obsolete",
    category: ["Economy"],
    theySay: "Unions are obsolete - workers don't need them!",
    youSay:
      "Union membership correlates with higher wages, safer workplaces, and lower inequality. BLS data still shows union workers earn more on average. Right-to-work laws and Taft-Hartley weakened organizing; that is policy, not obsolescence. If unions were useless, corporations would not spend millions fighting them.",
    stab: "Bosses love calling unions obsolete right before the next wage cut.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS reports union membership rates and wage differentials.",
        "2024-01-23"
      ),
      cite(
        "nlrb_about",
        "National Labor Relations Board",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/National_Labor_Relations_Board",
        "The NLRB enforces private-sector collective bargaining rights.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["minimum-wage-kills-jobs", "trickle-down-works"],
  },
  {
    id: "lgbtq-new-fad",
    category: ["Culture Wars", "Education"],
    theySay: "LGBTQ identity is a new fad pushed on kids!",
    youSay:
      "Same-sex attraction and gender diversity appear across cultures and centuries. What is new is visibility and legal protection after decades of criminalization, the Lavender Scare, and Don't Ask Don't Tell. Calling existence a fad is how you erase people who were always here.",
    stab: "History didn't invent queer people in 2015. Textbooks just stopped erasing them.",
    sources: [
      cite(
        "aclu_lgbtq",
        "LGBTQ Rights",
        "American Civil Liberties Union",
        "https://www.aclu.org/issues/lgbtq-rights",
        "ACLU documents LGBTQ legal history and ongoing rights fights.",
        "2024-01-01"
      ),
      cite(
        "stonewall_nps_r",
        "Stonewall",
        "National Park Service",
        "https://www.nps.gov/places/stonewall.htm",
        "NPS recognizes Stonewall as a landmark of LGBTQ civil rights history.",
        "1969-06-28"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["suppressed-history-brainwashing", "teacher-grooming"],
  },
  {
    id: "dark-money-free-speech",
    category: ["Democracy", "Elections"],
    theySay: "Dark money is free speech - stop attacking donors!",
    youSay:
      "Speech is not the same as secret billion-dollar influence. OpenSecrets documents 501(c)(4) spending that hides funders while shaping elections. Disclosure does not ban speech; it lets voters know who is buying the megaphone.",
    stab: "If your argument needs anonymity and a super PAC, it is not a town-hall debate.",
    sources: [
      cite(
        "opensecrets_dark",
        "Dark Money Basics",
        "OpenSecrets",
        "https://www.opensecrets.org/news/2014/05/dark-money-basics/",
        "OpenSecrets explains how dark money groups spend without naming donors.",
        "2014-05-01"
      ),
      cite(
        "fec_help",
        "Campaign Finance Disclosure",
        "Federal Election Commission",
        "https://www.fec.gov/help-candidates-and-committees/",
        "FEC rules require disclosure for many political committees.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["citizens-united-freedom", "money-is-speech"],
  },
  {
    id: "climate-china-excuse",
    category: ["Climate", "Foreign Policy"],
    theySay: "Why act on climate when China pollutes more?",
    youSay:
      "The U.S. is still among the top historical emitters, and American policy shapes technology markets worldwide. EPA rules and IRA investments cut domestic emissions while competing on clean tech. 'China first' is a stall tactic that freezes U.S. jobs and air quality.",
    stab: "Your lungs do not care which flag is on the smokestack.",
    sources: [
      cite(
        "epa_ira",
        "Inflation Reduction Act",
        "Environmental Protection Agency",
        "https://www.epa.gov/green-power-markets/inflation-reduction-act",
        "EPA summarizes IRA clean energy and climate investments.",
        "2023-01-01"
      ),
      cite(
        "epa_methane",
        "Methane and Oil and Gas Rules",
        "Environmental Protection Agency",
        "https://www.epa.gov/controlling-air-pollution-oil-and-natural-gas-operations",
        "EPA regulates methane from oil and gas operations.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["climate-hoax", "green-new-deal-cost"],
  },
  {
    id: "abortion-states-rights-only",
    category: ["Healthcare", "Courts"],
    theySay: "Abortion is just states' rights now - democracy won!",
    youSay:
      "Dobbs returned regulation to states, then many states banned care and criminalized providers. Guttmacher tracks cascading restrictions that travel across state lines. Calling that 'democracy' ignores patients who lose emergency care and equal protection.",
    stab: "States' rights was also the slogan for Jim Crow. Outcomes matter.",
    sources: [
      cite(
        "guttmacher_state",
        "State Policy",
        "Guttmacher Institute",
        "https://www.guttmacher.org/state-policy",
        "Guttmacher tracks state abortion and reproductive health policies.",
        "2024-01-01"
      ),
      cite(
        "cdc_repro",
        "Reproductive Health Data",
        "Centers for Disease Control and Prevention",
        "https://www.cdc.gov/reproductive-health/data-statistics/",
        "CDC publishes reproductive health surveillance data.",
        "2024-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: ["roe-was-undemocratic", "pro-life-consistency"],
  },
  {
    id: "immigrants-crime-wave",
    category: ["Immigration", "Crime"],
    theySay: "Immigrants are driving a crime wave!",
    youSay:
      "BJS and major city data repeatedly show immigrants have lower crime rates than native-born residents on average. Anecdotes are not a national crime wave. Policy should target actual offenders, not entire communities.",
    stab: "Fear is not a crime statistic.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "U.S. Department of Justice",
        "https://bjs.ojp.gov/",
        "BJS publishes national crime and victimization statistics.",
        "2024-01-01"
      ),
      cite(
        "bjs_victim",
        "Criminal Victimization 2023",
        "Bureau of Justice Statistics",
        "https://bjs.ojp.gov/library/publications/criminal-victimization-2023",
        "National Crime Victimization Survey reports recent victimization trends.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["border-invasion", "sanctuary-cities-chaos"],
  },
  {
    id: "project-2025-just-ideas",
    category: ["Democracy", "Media"],
    theySay: "Project 2025 is just a think-tank wishlist!",
    youSay:
      "Heritage published a 900-page governing plan with agency-by-agency staffing and Schedule F civil service purges. Multiple trackers document executive actions that match those chapters. Ideas become policy when people with power implement them.",
    stab: "A wishlist with org charts and personnel lists is a playbook.",
    sources: [
      cite(
        "heritage_p2025",
        "Mandate for Leadership",
        "Heritage Foundation",
        "https://www.project2025.org/",
        "Heritage promotes Project 2025 Mandate for Leadership.",
        "2023-01-01"
      ),
      cite(
        "aclu_p2025",
        "Project 2025 Explained",
        "American Civil Liberties Union",
        "https://www.aclu.org/project-2025-explained",
        "ACLU summarizes Project 2025 proposals and civil liberties risks.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["project-2025-doesnt-exist", "schedule-f-harmless"],
  },
  {
    id: "teachers-indoctrinate",
    category: ["Education", "Culture Wars"],
    theySay: "Teachers are indoctrinating kids with radical history!",
    youSay:
      "Teaching primary sources about slavery, labor, and civil rights is education, not indoctrination. PEN America documents book bans that remove those materials. If a lesson cites the National Archives, argue with the document, not the teacher.",
    stab: "Your kid learning about Tulsa is not a conspiracy. Hiding Tulsa is.",
    sources: [
      cite(
        "pen_bans",
        "Banned in the USA",
        "PEN America",
        "https://pen.org/report/banned-in-the-usa/",
        "PEN America tracks coordinated school book bans.",
        "2021-01-01"
      ),
      cite(
        "archives_edu_r",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Federal archives provide primary sources for classrooms.",
        "2020-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["suppressed-history-brainwashing", "crt-schools"],
  },
  {
    id: "billionaires-job-creators",
    category: ["Economy"],
    theySay: "Billionaires are the real job creators!",
    youSay:
      "Workers, customers, and public infrastructure create value. Billionaire wealth often comes from monopoly rents, stock buybacks, and inherited capital, not a personal hiring fairy. If tax cuts for the top automatically made jobs, Kansas and federal trickle-down experiments would have proven it.",
    stab: "Your paycheck comes from work. Their yacht comes from capture.",
    sources: [
      cite(
        "bls_cps",
        "Current Population Survey",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cps/",
        "BLS labor force data tracks employment and wages.",
        "2024-01-01"
      ),
      cite(
        "kansas_experiment",
        "Kansas experiment",
        "Wikipedia",
        "https://en.wikipedia.org/wiki/Kansas_experiment",
        "Kansas tax-cut experiment failed to deliver promised growth.",
        "2012-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["trickle-down-works", "tax-the-rich-punishment"],
  },
  {
    id: "foia-deep-state",
    category: ["Democracy", "Media"],
    theySay: "FOIA and watchdogs are the deep state!",
    youSay:
      "FOIA is a statute Congress passed so citizens can request records. Inspectors general and GAO exist to audit power, not to plot coups. Calling transparency tools a conspiracy is how authoritarians redefine oversight as disloyalty.",
    stab: "Sunlight is not a cabal.",
    sources: [
      cite(
        "doj_oip",
        "Office of Information Policy",
        "U.S. Department of Justice",
        "https://www.justice.gov/oip",
        "DOJ OIP guides federal FOIA compliance.",
        "2024-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO audits federal programs for Congress and the public.",
        "2024-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["deep-state", "media-enemy"],
  },
  {
    id: "voting-id-only-common-sense",
    category: ["Elections", "Democracy"],
    theySay: "Voter ID is just common sense - you need ID to fly!",
    youSay:
      "Flying is optional; voting is a constitutional right. Strict ID laws disproportionately burden elderly, poor, and minority voters who already face registration hurdles. Secure elections need paper trails and audits, not turnout suppression dressed as airport rules.",
    stab: "Boarding a plane is not the Fifteenth Amendment.",
    sources: [
      cite(
        "crs_voting",
        "Voting and Elections",
        "Congressional Research Service",
        "https://www.congress.gov/crs-product/R46727",
        "CRS analyzes election administration and voting access issues.",
        "2024-01-01"
      ),
      cite(
        "aclu_imm",
        "Immigrants' Rights",
        "American Civil Liberties Union",
        "https://www.aclu.org/issues/immigrants-rights",
        "ACLU documents civil rights impacts of restrictive ID and voting rules.",
        "2024-01-01"
      ),
    ],
    difficulty: "medium",
    relatedClaims: ["election-fraud-widespread", "mail-ballots-fraud"],
  },
  {
    id: "hosting-is-bias",
    category: ["Media", "Democracy"],
    theySay: "Your site is biased because it has a point of view!",
    youSay:
      "Every civic project has values. Ours are transparency, primary sources, and anti-authoritarian democracy. Bias without receipts is propaganda; we publish citations, archives, and open JSON so you can check the work.",
    stab: "Having standards is not the same as hiding evidence.",
    sources: [
      cite(
        "gao_evidence2",
        "Evidence-Based Policymaking",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO promotes evidence standards in public policy.",
        "2024-01-01"
      ),
      cite(
        "archives_edu2",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources let readers verify claims independently.",
        "2020-01-01"
      ),
    ],
    difficulty: "easy",
    relatedClaims: ["pass22-rebuttal-count", "link-check-theater"],
  },
  // PASS26_MARKER
  {
    id: "tariffs-are-paid-by-china",
    category: ["Economy", "Foreign Policy"],
    theySay: "China pays the tariffs - they're a tax on China!",
    youSay: "Tariffs are taxes collected at the U.S. border from importers. Firms pass costs to U.S. consumers and businesses through higher prices. CRS and economic analyses treat tariffs as a domestic tax incidence question, not a foreign invoice China pays.",
    stab: "If China paid your tariffs, your grocery receipt would say thank you Beijing.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["reciprocal-tariffs"],
  },
  {
    id: "immigrants-steal-jobs",
    category: ["Immigration", "Economy"],
    theySay: "Immigrants are stealing American jobs!",
    youSay: "Labor markets are not a fixed pie. Immigrants fill shortages, start businesses, and raise demand. BLS and Census data show native-born unemployment and labor-force patterns driven more by automation, trade, and education than by immigration alone.",
    stab: "Blaming the worker next to you is easier than blaming the boss who cut the pension.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["border-invasion"],
  },
  {
    id: "climate-always-changes",
    category: ["Climate"],
    theySay: "The climate has always changed - stop the hysteria!",
    youSay: "Climate has always varied. What is new is the rate and cause: measured greenhouse gas rise from fossil fuels, with IPCC and NOAA documenting human-driven warming. Always changed is not a rebuttal to physics; it is a slogan.",
    stab: "Your thermostat also always changed. That does not mean setting it to 120 is fine.",
    sources: [
      cite(
        "ipcc",
        "Intergovernmental Panel on Climate Change",
        "IPCC",
        "https://www.ipcc.ch/",
        "IPCC assesses the science of climate change for policymakers.",
        "2023-01-01"
      ),
      cite(
        "noaa",
        "NOAA Climate",
        "NOAA",
        "https://www.noaa.gov/climate",
        "NOAA publishes climate observations and assessments.",
        "2025-01-01"
      ),
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "jan6-tourist-visit",
    category: ["Jan 6", "Democracy"],
    theySay: "January 6 was a mostly peaceful tourist visit!",
    youSay: "Congress, DOJ charging documents, and video show a violent breach that injured officers and delayed certification of an election. Tourists do not smash windows, assault police, or chant hang Mike Pence.",
    stab: "If it was tourism, the souvenir was a gallows.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["election-stolen"],
  },
  {
    id: "voter-fraud-everywhere",
    category: ["Elections", "Democracy"],
    theySay: "Voter fraud is rampant - millions of illegal votes!",
    youSay: "State audits, DOJ, and AP reviews of the 2020 election found no evidence of fraud at a scale that would change outcomes. Widespread fraud is asserted loudly because it is not proven in court.",
    stab: "If you had millions of illegal votes, you would have millions of convictions. You have vibes.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "cisa",
        "Cybersecurity and Infrastructure Security Agency",
        "CISA",
        "https://www.cisa.gov/topics/election-security",
        "CISA provides election infrastructure security guidance.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["election-stolen"],
  },
  {
    id: "deep-state-runs-everything",
    category: ["Democracy", "Culture Wars"],
    theySay: "The deep state runs everything - elections are fake!",
    youSay: "Career civil servants are constrained by statutes, inspectors general, FOIA, and courts. Conspiracy replaces evidence. If everything is fake, no document can ever convince you - which is the point of the conspiracy.",
    stab: "Deep state is Latin for I lost and need a villain.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "welfare-queens-drain",
    category: ["Economy", "Culture Wars"],
    theySay: "Welfare queens are draining the country dry!",
    youSay: "Census poverty data and GAO program audits show most safety-net spending goes to children, elderly, disabled people, and workers. The welfare queen was a political caricature, not a budget line that explains deficits.",
    stab: "Billionaire tax avoidance dwarfs the grocery budget you are mad about.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "unions-corrupt-obsolete",
    category: ["Economy"],
    theySay: "Unions are corrupt and obsolete!",
    youSay: "BLS data show union members earn more and have better benefits on average. Corruption exists in every institution; dissolving worker power is not an anti-corruption plan - it is a management plan.",
    stab: "If unions were powerless, CEOs would not spend so much fighting them.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "minimum-wage-kills-jobs",
    category: ["Economy"],
    theySay: "Raising the minimum wage kills jobs!",
    youSay: "Empirical reviews find modest minimum-wage increases have small or mixed employment effects while raising earnings for low-wage workers. Absolute claims of mass job death ignore decades of state-level evidence.",
    stab: "Your theory needs a new update; the data already got one.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "socialism-venezuela",
    category: ["Economy", "Whataboutism"],
    theySay: "Any social program is socialism and look at Venezuela!",
    youSay: "Medicare, Social Security, and public schools are popular American institutions. Venezuela's crisis has specific causes - oil dependence, authoritarianism, sanctions - not the existence of libraries or Medicaid.",
    stab: "Calling fire departments socialism does not make them Venezuelan.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "crime-cities-democrat",
    category: ["Crime", "Whataboutism"],
    theySay: "Democrat cities are crime hellholes!",
    youSay: "FBI and BJS data show crime varies by metro area and has fallen from 1990s peaks in many cities of both parties. Cherry-picking scary clips is not a crime rate. Policy debate needs victimization surveys and UCR trends, not vibes.",
    stab: "If party labels caused crime, rural red counties would be crime-free. They are not.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "guns-dont-kill",
    category: ["Crime", "Culture Wars"],
    theySay: "Guns don't kill people - people kill people!",
    youSay: "People with easier access to firearms kill more people with firearms. CDC injury data and cross-country comparisons show firearm availability shapes death rates. Tools matter; that is why we regulate cars, planes, and explosives.",
    stab: "People also drive cars. We still require licenses and seatbelts.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trans-kids-mutilation",
    category: ["Culture Wars", "Healthcare"],
    theySay: "They're mutilating kids with gender ideology!",
    youSay: "Major medical bodies publish careful, evidence-based standards for gender-affirming care; care for minors is limited and regulated. Panic language is designed to ban care, not to cite pediatric endocrinology.",
    stab: "If your argument needs the word mutilation in every sentence, you are doing politics, not medicine.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "crt-in-kindergarten",
    category: ["Education", "Culture Wars"],
    theySay: "They're teaching critical race theory in kindergarten!",
    youSay: "CRT is a graduate-level legal framework. School fights are usually about teaching accurate history of slavery and segregation. Banning books about Rosa Parks is not protecting kids from a law-review seminar.",
    stab: "If a picture book is CRT, then literacy is a conspiracy.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["book-bans"],
  },
  {
    id: "parents-rights-only",
    category: ["Education", "Culture Wars"],
    theySay: "Parents' rights means schools can't teach anything I dislike!",
    youSay: "Parents have rights; so do other parents and students. Public schools teach a shared curriculum under elected boards and state standards. One parent's veto is not a curriculum.",
    stab: "Your rights end where you demand everyone else's kids erase history.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "media-all-fake-news",
    category: ["Media"],
    theySay: "The media is all fake news!",
    youSay: "Outlets err and deserve scrutiny. Primary documents - Federal Register, court dockets, FEC filings - still exist. If every reporter is fake, check the PDF yourself. Sunrise cites those PDFs on purpose.",
    stab: "Fake news is easier to yell than FOIA is to file.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "both-parties-same",
    category: ["Whataboutism", "Democracy"],
    theySay: "Both parties are the same!",
    youSay: "Parties share donor pressures and failures. Platforms, judicial appointments, voting laws, and climate policy still diverge in measurable ways. Sameness is a refusal to vote or organize, not an analysis.",
    stab: "If they were the same, Project 2025 would not need 900 pages.",
    sources: [
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official presidential actions including executive orders.",
        "2025-01-20"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "billionaires-earned-it",
    category: ["Economy"],
    theySay: "Billionaires earned every penny - leave them alone!",
    youSay: "Wealth at that scale depends on public infrastructure, limited liability, IP law, tax rules, and labor. OpenSecrets and FEC data show political spending protects those rules. Earned is not the same as untaxable.",
    stab: "Nobody builds a billion-dollar fortune on a desert island with no roads or courts.",
    sources: [
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "fec_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC publishes federal campaign finance disclosures.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "regulation-kills-freedom",
    category: ["Economy", "Democracy"],
    theySay: "Regulation kills freedom!",
    youSay: "Food safety, clean water, banking rules, and workplace standards expand freedom to live without poison and fraud. GAO and EPA document what happens when oversight collapses. Freedom for dumpers is unfreedom for everyone downstream.",
    stab: "Your freedom to dump waste is my kid's asthma attack.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "defund-meant-abolish",
    category: ["Crime", "Whataboutism"],
    theySay: "Democrats wanted to abolish the police!",
    youSay: "Slogan chaos aside, most reform agendas funded mental-health response, accountability, and violence interruption - not literal zero police. Debating budgets requires budget docs, not cable chyron memory.",
    stab: "If abolish was the platform, show me the enacted city ordinance that deleted 911.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "ukraine-our-money",
    category: ["Foreign Policy", "Economy"],
    theySay: "We're sending all our money to Ukraine!",
    youSay: "Aid packages are a small share of the federal budget and often take the form of U.S.-made equipment. Debate the policy - do not invent a fiscal black hole that does not match CBO and CRS scoring.",
    stab: "The deficit is not hiding in Kyiv. Check the tax cuts and interest line items.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "israel-no-criticism",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "Any criticism of Israeli government policy is antisemitism!",
    youSay: "Antisemitism is real and must be confronted. Criticizing a government's military policy is not hatred of Jews, just as criticizing the U.S. government is not hatred of Americans. Collapse the distinction and you shield policy from scrutiny.",
    stab: "Governments are not religions. Accountability is not bigotry.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "muslim-ban-was-travel",
    category: ["Immigration", "Foreign Policy"],
    theySay: "It was just a travel pause, not a Muslim ban!",
    youSay: "Campaign promises targeted Muslim countries; the policy's design and messaging were religiously coded even when lawyers scrubbed the text. Courts and civil-rights groups documented discriminatory intent and impact.",
    stab: "If it walks like a ban and campaigns like a ban, the euphemism is not subtle.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "asylum-is-illegal",
    category: ["Immigration"],
    theySay: "Asylum seekers are illegal by definition!",
    youSay: "U.S. and international law allow people to request asylum. The claim is processed; it may be granted or denied. Illegal is a political smear for a legal process you dislike.",
    stab: "Calling a court process illegal is how you advertise that you do not like courts.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "birthright-not-in-constitution",
    category: ["Immigration", "Democracy"],
    theySay: "Birthright citizenship isn't really in the Constitution!",
    youSay: "The 14th Amendment's text and longstanding interpretation grant citizenship to those born in the U.S. subject to its jurisdiction. Ending it by executive order is a constitutional fight the text does not casually allow.",
    stab: "If you want to amend the 14th, call it an amendment - not a press conference.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: ["birthright"],
  },
  {
    id: "fbi-corrupt-always",
    category: ["Democracy", "Jan 6"],
    theySay: "The FBI is irreversibly corrupt!",
    youSay: "The FBI has a documented abusive history - COINTELPRO - and still requires oversight. That is an argument for Church Committee-style accountability, not for declaring every investigation of political violence illegitimate.",
    stab: "Past abuse does not grant you a lifelong FOIA exemption for your coup attempt.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trump-peace-president",
    category: ["Foreign Policy"],
    theySay: "Trump is the peace president!",
    youSay: "Peace is measured in wars ended, alliances managed, and civilian deaths avoided - not vibes. Score the record with CRS and wire reporting on strikes, withdrawals, and escalations rather than campaign nicknames.",
    stab: "Peace president is a brand. Body counts are a ledger.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "nato-freeloaders",
    category: ["Foreign Policy"],
    theySay: "NATO allies are freeloaders!",
    youSay: "Burden-sharing debates are real; alliance free-riding claims often ignore U.S. strategic benefits, basing access, and collective defense value documented in CRS analyses. Insult diplomacy is not a strategy memo.",
    stab: "Calling Canada a freeloader is a heckle, not a national security strategy.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "covid-was-hoax",
    category: ["Healthcare", "Culture Wars"],
    theySay: "COVID was a hoax!",
    youSay: "CDC death and hospitalization data, excess mortality studies, and global tallies document a real pandemic. Hoax rhetoric insults grieving families and erases ICU capacity crises hospitals recorded in real time.",
    stab: "A hoax does not fill morgues. A virus does.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "masks-dont-work",
    category: ["Healthcare"],
    theySay: "Masks don't work!",
    youSay: "High-quality masks reduce transmission in documented settings; public-health guidance evolved as evidence evolved. Absolute doesn't work erases nuance the same way always wear them outdoors alone did.",
    stab: "Your N95 is not a fashion statement. It is a filter. Filters filter.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "vaccine-microchips",
    category: ["Healthcare", "Culture Wars"],
    theySay: "Vaccines have microchips / change your DNA!",
    youSay: "mRNA vaccines do not alter your DNA; CDC and NIH explain the mechanism. Microchip claims are conspiracy content with zero manufacturing evidence. Extraordinary claims need extraordinary receipts - none exist.",
    stab: "If they could microchip you via a shot, they would not need your phone's location permissions.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "school-choice-only-fix",
    category: ["Education"],
    theySay: "School choice is the only education reform that works!",
    youSay: "Families deserve options; draining public schools without accountability can worsen segregation and outcomes. Evidence on vouchers is mixed. Reform that ignores Title I funding and teacher pay is ideology, not a toolkit.",
    stab: "Choice without a funded public baseline is escape hatches for some and leftovers for others.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "college-is-scam",
    category: ["Education", "Economy"],
    theySay: "College is a scam - just learn a trade!",
    youSay: "Trades are valuable and under-respected. Degree premiums still appear in Census and BLS earnings data on average. The scam is predatory lending and underfunded public colleges - not literacy itself.",
    stab: "You can respect welders without pretending epidemiology is a trade school elective.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "dei-is-racism",
    category: ["Culture Wars", "Democracy"],
    theySay: "DEI is anti-white racism!",
    youSay: "Diversity programs vary wildly; some are clumsy. Treating any effort to reduce discrimination as racism against the majority flips civil-rights history on its head. Equal opportunity is not reverse oppression.",
    stab: "If inclusion is racism, then the 1964 Civil Rights Act was a hate crime.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "great-replacement-real",
    category: ["Immigration", "Culture Wars"],
    theySay: "The Great Replacement is real!",
    youSay: "Demographic change is real; a plot to replace white voters via immigration is a white-nationalist conspiracy theory. Fertility, aging, and migration explain population math without a puppet master.",
    stab: "Conspiracy theories turn census tables into enemy battle maps.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "antifa-ran-jan6",
    category: ["Jan 6", "Whataboutism"],
    theySay: "Jan 6 was Antifa false flag!",
    youSay: "Charging documents, geolocation, and guilty pleas identify Trump supporters and militia members. False-flag claims collapse under named defendants and their own livestreams.",
    stab: "Your evidence cannot be a meme while the docket has names.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "pelosi-turned-down-guard",
    category: ["Jan 6", "Whataboutism"],
    theySay: "Pelosi turned down the National Guard!",
    youSay: "Capitol security failures were real and multi-agency. The claim that one Democratic leader uniquely refused available Guard protection has been repeatedly contradicted by timelines and testimony. Use the January 6 record, not a talking point.",
    stab: "Security failures do not convert a mob into tourists.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trump-economy-best",
    category: ["Economy"],
    theySay: "Trump had the best economy ever!",
    youSay: "Pre-pandemic growth continued trends from prior years; unemployment was low, then COVID crashed the economy. Best ever claims ignore who gained (asset owners) and what BLS wage and inequality data show for typical workers.",
    stab: "Dow records are not a wage stub.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "inflation-only-biden",
    category: ["Economy", "Whataboutism"],
    theySay: "Inflation is entirely Biden's fault!",
    youSay: "Inflation spiked globally after COVID supply shocks and war-related energy prices. U.S. fiscal policy played a role; so did corporate pricing power and global factors. Single-villain economics is cable news, not BLS methodology.",
    stab: "If one president owns global LNG prices, invent a new physics.",
    sources: [
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "gas-stove-ban",
    category: ["Culture Wars", "Climate"],
    theySay: "They're banning gas stoves!",
    youSay: "Federal agencies discussed efficiency standards and indoor air research - not a midnight SWAT team for your range. Culture-war ban talk converts technical rulemakings into persecution cosplay.",
    stab: "Reading a proposed rule is harder than posting a frying pan meme.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "esg-woke-capitalism",
    category: ["Economy", "Culture Wars"],
    theySay: "ESG is woke capitalism destroying markets!",
    youSay: "Investors price climate and governance risk because disasters and fraud destroy value. Some ESG products are marketing fluff; risk analysis is not a gender studies seminar.",
    stab: "Hurricanes do not check your culture-war scorecard before hitting a port.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "border-open-intentionally",
    category: ["Immigration"],
    theySay: "Democrats opened the border on purpose!",
    youSay: "Asylum law, court backlogs, and congressional funding fights shape border management. Open border is a slogan that erases Title 42, expulsions, and detention capacity debates documented in CRS reports.",
    stab: "If the border were open, you would not need a three-hour bridge wait to invent the phrase.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "caravans-invasion",
    category: ["Immigration", "Culture Wars"],
    theySay: "Migrant caravans are an invasion!",
    youSay: "Invasion is a wartime word. Asylum seekers traveling together for safety are not an army. Military metaphors justify military tactics against civilians.",
    stab: "People walking with kids are not Normandy.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "christianity-under-attack",
    category: ["Culture Wars", "Media"],
    theySay: "Christianity is under attack in America!",
    youSay: "Christians remain a large share of the population and hold vast institutional power. Losing monopoly status in public schools or retail greetings is not persecution. Compare to actual religious persecution data worldwide.",
    stab: "Starbucks cups are not the Colosseum.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "war-on-christmas",
    category: ["Culture Wars", "Media"],
    theySay: "There's a war on Christmas!",
    youSay: "Christmas remains a federal holiday saturated in commerce and public celebration. Happy holidays is courtesy, not a tank division. Manufactured victimhood sells outrage ads.",
    stab: "If Christmas is under siege, the mall loudspeakers did not get the memo.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "cancel-culture-left-only",
    category: ["Culture Wars", "Media"],
    theySay: "Only the left cancels people!",
    youSay: "Boycotts and firings happen across the spectrum - book bans, campus speakers, corporate advertisers. The free speech high ground requires defending speech you dislike, not only your team's.",
    stab: "Banning library books is cancel culture with a school-board smile.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "originalism-neutral",
    category: ["Courts", "Democracy"],
    theySay: "Originalism is just neutral constitutional interpretation!",
    youSay: "Originalism is one contested method. Historians dispute whose original meaning counts, and outcomes often track the justices' politics. Neutral is a brand; methods still require judgment.",
    stab: "If it were a calculator, justices would not split 6-3 so predictably.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "packing-court-illegitimate",
    category: ["Courts", "Democracy"],
    theySay: "Court expansion is illegitimate court packing!",
    youSay: "Congress has changed the Court's size multiple times. Lifetime seats plus ethics scandals and hardball appointments already politicized the Court. Reform debates are constitutional politics, not sacrilege.",
    stab: "The sacred number nine is tradition, not scripture.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "impeachment-coup",
    category: ["Democracy", "Whataboutism"],
    theySay: "Impeachments of Trump were illegal coups!",
    youSay: "Impeachment is in the Constitution. The Senate acquitted. A constitutional process you dislike is not a coup; a violent attempt to stop electoral counting is closer to one.",
    stab: "Coups do not come with Senate roll calls and C-SPAN.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "special-counsels-witch-hunt",
    category: ["Democracy", "Courts"],
    theySay: "Every investigation is a witch hunt!",
    youSay: "Investigations can be biased and still find real evidence - ask the convictions and plea deals. Witch hunt is a slogan that treats any accountability as persecution.",
    stab: "If every subpoena is a witch hunt, witchcraft is your word for oversight.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "classified-documents-both",
    category: ["Whataboutism", "Democracy"],
    theySay: "Everyone has classified documents issues!",
    youSay: "Compare cooperation with retrieval, obstruction evidence, and charging decisions. Whataboutism collapses different fact patterns into a shrug. Process and intent matter in Espionage Act cases.",
    stab: "Returning boxes is not the same as hiding boxes.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hunter-biden-everything",
    category: ["Whataboutism", "Media"],
    theySay: "Hunter Biden explains every Trump scandal!",
    youSay: "Hunter Biden's legal issues are real and adjudicated separately. They do not erase January 6, classified documents cases, or Project 2025 personnel plans. One family's taxes are not a universal solvent.",
    stab: "Your distraction is not a defense exhibit.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["hunter-biden-laptop"],
  },
  {
    id: "project-2025-not-trump",
    category: ["Democracy", "Culture Wars"],
    theySay: "Project 2025 has nothing to do with Trump!",
    youSay: "Heritage built the playbook with Trump-world authors and alumni; Day One orders tracked its personnel and agency agenda. Distance branding after the election does not erase the resume overlap or the implementation pattern.",
    stab: "If it walks like your transition plan and hires like your transition plan...",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official presidential actions including executive orders.",
        "2025-01-20"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "schedule-f-drains-swamp",
    category: ["Democracy", "Economy"],
    theySay: "Schedule F just drains the swamp!",
    youSay: "Replacing merit protections with at-will loyalty tests politicizes expertise at EPA, SSA, and nuclear safety shops. GAO and MSPB frameworks exist because patronage produced corruption last time.",
    stab: "Draining the swamp by firing the inspectors is how you get more swamp.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official presidential actions including executive orders.",
        "2025-01-20"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "doge-efficient-genius",
    category: ["Economy", "Democracy"],
    theySay: "DOGE is just efficiency - only waste gets cut!",
    youSay: "Efficiency requires metrics, inspectors general, and legal authority. Extra-constitutional access to payment systems and mass RIFs risk cutting capacity citizens need - benefits, food safety, disaster response.",
    stab: "Firing the air-traffic brain trust is not a spreadsheet flex.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official presidential actions including executive orders.",
        "2025-01-20"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "foia-slows-government",
    category: ["Democracy", "Media"],
    theySay: "FOIA just slows government down!",
    youSay: "Sunshine is a feature. FOIA.gov documents backlogs that agencies create by underfunding disclosure. If government cannot withstand records requests, it cannot withstand democracy.",
    stab: "Speed without receipts is how scandals stay warm.",
    sources: [
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "dark-money-free-speech",
    category: ["Democracy", "Economy"],
    theySay: "Dark money is free speech!",
    youSay: "Citizens United limited expenditure bans; it did not require secret donors. Voters can evaluate speech better when they know who paid for it. Disclosure is not a gag.",
    stab: "Speech with a bag over its head is lobbying cosplay.",
    sources: [
      cite(
        "fec_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC publishes federal campaign finance disclosures.",
        "2025-01-01"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "lobbyists-experts",
    category: ["Democracy"],
    theySay: "Lobbyists are just subject-matter experts!",
    youSay: "Expertise is real; paid access is also real. OpenSecrets data show industries buying influence. Public financing and revolving-door bans exist because expertise without sunlight becomes capture.",
    stab: "If it requires a fundraiser to hear your expertise, it is not a seminar.",
    sources: [
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "fec_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC publishes federal campaign finance disclosures.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "states-rights-always",
    category: ["Democracy", "Whataboutism"],
    theySay: "States' rights should decide everything!",
    youSay: "States' rights historically defended slavery and Jim Crow. Federal civil rights exist because local majorities abused local minorities. Federalism is a structure, not a moral blank check.",
    stab: "States' rights was the slogan; slavery was the product.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["civil-war-states-rights"],
  },
  {
    id: "civil-war-states-rights",
    category: ["Culture Wars", "Education"],
    theySay: "The Civil War was about states' rights, not slavery!",
    youSay: "Secession documents cite slavery. The Confederacy's own leaders said so. States' rights for slavery is still about slavery.",
    stab: "Read the declarations. They did not secede over tariff poetry.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "texas_secession",
        "Texas Ordinance of Secession",
        "Library of Congress",
        "https://www.loc.gov/resource/rbpe.0570100b/",
        "Texas's secession document cites slavery as central.",
        "1861-02-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "lost-cause-heritage",
    category: ["Culture Wars", "Education"],
    theySay: "Confederate statues are heritage not hate!",
    youSay: "Many monuments were erected during Jim Crow and massive resistance to civil rights - political intimidation in bronze. Heritage that celebrates traitors to the Union in defense of slavery is a choice.",
    stab: "Heritage is a museum. Domination is a pedestal outside a courthouse.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "slavery-was-everywhere",
    category: ["Culture Wars", "Whataboutism"],
    theySay: "Every society had slavery - stop picking on America!",
    youSay: "Comparative history is real. America's distinctives include racialized chattel slavery, a Constitution protecting it, a war to end it, and a century of Jim Crow afterward. Everywhere is not an absolution.",
    stab: "Your ancestors' crime does not cancel the ledger; it adds a line.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "nmaahc_home",
        "NMAAHC",
        "Smithsonian",
        "https://nmaahc.si.edu/",
        "Smithsonian museum documenting African American history including slavery.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "police-funding-equals-safety",
    category: ["Crime"],
    theySay: "Only more police funding stops crime!",
    youSay: "Policing is one tool. Evidence also supports violence interrupters, housing stability, and mental-health crisis teams. Budget maximalism without accountability ignores clearance rates and misconduct costs.",
    stab: "A blank check is not a crime strategy.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "mental-health-not-guns",
    category: ["Crime", "Healthcare"],
    theySay: "It's a mental health problem, not guns!",
    youSay: "Mental health care needs investment. Most people with mental illness are not violent, and countries with similar mental-health burdens but fewer guns have fewer gun massacres. Both/and beats either/or.",
    stab: "Japan has mental illness. It does not have America's firearm death rate.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "homeless-choose-it",
    category: ["Economy", "Culture Wars"],
    theySay: "Homeless people choose that lifestyle!",
    youSay: "HUD and Census-linked research tie homelessness to rents, wages, disability, and shelter capacity. Choice narratives erase eviction math.",
    stab: "Nobody chooses frostbite as a lifestyle brand.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "hud_home",
        "HUD",
        "U.S. Department of Housing and Urban Development",
        "https://www.hud.gov/",
        "HUD publishes housing and homelessness policy data.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "rent-control-always-fails",
    category: ["Economy"],
    theySay: "Rent control always fails!",
    youSay: "Poorly designed price caps can reduce supply; well-designed stabilization and social housing can protect tenants. Always is ideology. Housing shortages need construction, zoning reform, and tenant protection together.",
    stab: "Your landlord's newsletter is not a peer-reviewed consensus.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "ai-replaces-need-for-workers",
    category: ["Economy"],
    theySay: "AI means we don't need worker protections anymore!",
    youSay: "Automation shifts bargaining power; it does not erase the need for wages, safety, and benefits. BLS tracks displacement risks. Policy chooses whether gains go to capital only.",
    stab: "Robots do not need weekends. Humans still do.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "tiktok-only-threat",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "TikTok is the only speech platform that matters to ban!",
    youSay: "Foreign data risks deserve scrutiny. Selective panic that ignores other surveillance advertising models is national-security theater. Apply consistent privacy rules, not culture-war bans.",
    stab: "If privacy mattered, half of Silicon Valley would be in the dock too.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "election-deniers-patriots",
    category: ["Elections", "Democracy"],
    theySay: "Election deniers are patriots asking questions!",
    youSay: "Questions end when evidence is presented. Endless denial after audits and courts is sabotage of consent of the governed. Patriotism counts votes; it does not invent truckloads of ballots.",
    stab: "Asking questions expired when the answers arrived.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "gerrymandering-both-sides",
    category: ["Elections", "Whataboutism"],
    theySay: "Both sides gerrymander - so it's fine!",
    youSay: "Both parties have gerrymandered. That argues for independent commissions, not for shrugging while maps dilute voters. Harm is not canceled by reciprocity.",
    stab: "Two getaway cars do not legalize bank robbery.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "filibuster-sacred",
    category: ["Democracy"],
    theySay: "The filibuster is sacred!",
    youSay: "The filibuster is a Senate rule, altered many times. It has blocked civil rights and voting rights. Sacred status is nostalgia for gridlock.",
    stab: "A rule that buried anti-lynching bills is not holy water.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "popular-vote-bad",
    category: ["Elections", "Democracy"],
    theySay: "The Electoral College protects small states - popular vote would ruin us!",
    youSay: "The Electoral College can override the national popular vote and overweights some states. National popular vote debates are legitimate democratic design questions, not heresy.",
    stab: "Land does not vote. People do.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "aclu-only-defends-left",
    category: ["Culture Wars", "Democracy"],
    theySay: "The ACLU only defends the left!",
    youSay: "The ACLU has a long record defending unpopular speech across ideologies, including cases that anger progressives. Disagreement with a case is not proof of cartel capture.",
    stab: "Civil liberties that only cover your team are not civil liberties.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "factcheckers-biased",
    category: ["Media"],
    theySay: "Fact-checkers are all biased!",
    youSay: "Fact-checkers can err and deserve critique. Primary sources still adjudicate claims. If every referee is biased, publish better evidence - not a boycott of reality.",
    stab: "Refusing measurement does not make your claim taller.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "history-is-patriotism-only",
    category: ["Education", "Culture Wars"],
    theySay: "Teaching history should only make kids proud!",
    youSay: "Honest history includes glory and atrocity. Pride that requires amnesia is propaganda. National Archives documents exist so adults can handle complexity.",
    stab: "If your patriotism needs a redacted textbook, it is fragile.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "schedule-f-is-accountability",
    category: ["Democracy", "Economy"],
    theySay: "Schedule F just fires bad bureaucrats who sabotage the president!",
    youSay: "Schedule Policy/Career and Schedule F convert career experts into at-will staff removable without normal merit protections. GAO and MSPB frameworks exist because politicized firings destroy institutional memory and invite corruption, not because experts are sacred.",
    stab: "If accountability meant competence, you would publish performance metrics, not loyalty oaths.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["deep-state-runs-everything"],
  },
  {
    id: "doge-saves-billions",
    category: ["Economy", "Democracy"],
    theySay: "DOGE is cutting waste and saving taxpayers billions!",
    youSay: "Federal Register DOGE orders create review powers and hiring freezes; claimed savings require audited baselines. GAO already exists to score waste. Press releases are not audited savings.",
    stab: "If the savings were real, GAO would score them. Screenshots are not audits.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "tariffs-bring-factories-home",
    category: ["Economy", "Foreign Policy"],
    theySay: "Tariffs will bring all the factories back overnight!",
    youSay: "Tariffs raise import costs and can reshore some production over years, but BLS and CRS treat them as taxes paid through U.S. prices. Overnight factory magic is campaign poetry, not trade economics.",
    stab: "Factories need workers, power, and capital. A customs invoice is not a groundbreaking ceremony.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["tariffs-are-paid-by-china"],
  },
  {
    id: "immigrants-cause-crime-wave",
    category: ["Immigration", "Crime"],
    theySay: "Immigrants are driving a massive crime wave!",
    youSay: "BJS victimization surveys and multiple state analyses do not show immigrants as the engine of a national crime wave. Crime trends move with broader social factors. Anecdotes plus cable chyron is not epidemiology.",
    stab: "If your crime theory needs a foreign accent, it is not a crime theory.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["immigrants-steal-jobs"],
  },
  {
    id: "asylum-is-loophole",
    category: ["Immigration"],
    theySay: "Asylum is just a loophole for illegals!",
    youSay: "Asylum is a statutory protection rooted in refugee law and international commitments. Backlogs and weak processing capacity are administrative failures, not proof that protection is fake.",
    stab: "Calling a right a loophole is how you erase the statute without amending it.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "birthright-citizenship-mistake",
    category: ["Immigration", "Democracy"],
    theySay: "Birthright citizenship was a mistake we can erase by EO!",
    youSay: "The 14th Amendment's citizenship clause and long Supreme Court interpretation do not vanish because an executive order wants a different politics. Constitutional text is not a press secretary memo.",
    stab: "If an EO can rewrite the 14th Amendment, we do not have a Constitution. We have a mood ring.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "climate-hoax-scientists",
    category: ["Climate"],
    theySay: "Climate scientists are in it for the grant money!",
    youSay: "NOAA and IPCC assessments rest on multiple independent observational records, not one lab's paycheck. Conspiracy requires explaining why oil majors' own scientists also documented warming for decades.",
    stab: "Your uncle's Facebook post is not a peer-reviewed temperature record.",
    sources: [
      cite(
        "noaa",
        "NOAA Climate",
        "NOAA",
        "https://www.noaa.gov/climate",
        "NOAA publishes climate observations and assessments.",
        "2025-01-01"
      ),
      cite(
        "ipcc",
        "Intergovernmental Panel on Climate Change",
        "IPCC",
        "https://www.ipcc.ch/",
        "IPCC assesses the science of climate change for policymakers.",
        "2023-01-01"
      ),
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["climate-always-changes"],
  },
  {
    id: "ev-mandates-tyranny",
    category: ["Climate", "Economy"],
    theySay: "EV mandates are government tyranny against cars!",
    youSay: "Emissions standards and fleet rules are ordinary Clean Air Act tools. Markets already shift under fuel costs and tech change. Calling every pollution rule tyranny empties the word.",
    stab: "Seatbelts were tyranny too, until the funeral rate dropped.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "paris-accord-useless",
    category: ["Climate", "Foreign Policy"],
    theySay: "The Paris Agreement does nothing - leaving was smart!",
    youSay: "Paris is a framework for nationally determined contributions and transparency. Leaving reduces U.S. leverage and signals free-rider preference. Doing nothing is not a climate strategy.",
    stab: "Walking out of the fire drill does not put out the fire.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "noaa",
        "NOAA Climate",
        "NOAA",
        "https://www.noaa.gov/climate",
        "NOAA publishes climate observations and assessments.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "covid-overblown",
    category: ["Healthcare"],
    theySay: "COVID was overblown - just a flu!",
    youSay: "CDC excess-death and hospitalization data showed a multi-year mortality shock far beyond seasonal flu baselines. Minimizing mass death is politics, not epidemiology.",
    stab: "If it was just a flu, the cemeteries would not have needed overflow plans.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "vaccines-more-harm",
    category: ["Healthcare"],
    theySay: "Vaccines do more harm than good!",
    youSay: "CDC and NIH track adverse events and still find benefits dwarfing risks for routine immunizations. Rare harms are monitored precisely because public health systems measure them.",
    stab: "Anecdotes are not denominators. Public health runs on rates.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "medicaid-work-builds-character",
    category: ["Healthcare", "Economy"],
    theySay: "Medicaid work requirements just build character!",
    youSay: "Many Medicaid enrollees already work, caretake, or have disabilities. Work paperwork requirements mainly generate coverage loss through red tape, not character transformation.",
    stab: "Character is not measured by how many forms you lose before chemo.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "abortion-states-decide",
    category: ["Healthcare", "Democracy"],
    theySay: "Abortion should be left entirely to the states!",
    youSay: "Dobbs returned regulation to states, producing bans that override majorities in some places and force interstate travel for care. A right that ends at a state line is conditional liberty.",
    stab: "Your ZIP code is not a moral philosophy.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trans-care-is-mutilation",
    category: ["Healthcare", "Culture Wars"],
    theySay: "All gender-affirming care is mutilation!",
    youSay: "Major medical bodies distinguish adult care, adolescent protocols, and banned conversion practices. Blanket mutilation rhetoric erases clinical guidelines and parental/patient consent frameworks.",
    stab: "If every surgery you dislike is mutilation, cancel sports medicine next.",
    sources: [
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "crt-in-kindergarten",
    category: ["Education", "Culture Wars"],
    theySay: "They are teaching CRT in kindergarten!",
    youSay: "Critical race theory is a law-school framework. K-12 fights are usually about whether classrooms may discuss slavery, segregation, and racism using primary sources. Archives exist for a reason.",
    stab: "If reading the Emancipation Proclamation is CRT, your complaint is with 1863.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "parents-rights-means-bans",
    category: ["Education"],
    theySay: "Parents rights means banning books and curricula!",
    youSay: "Parents already have huge sway via boards and opt-outs. Blanket bans that purge library shelves for everyone are majoritarian censorship, not parental choice.",
    stab: "Your parental right ends where you start parenting the whole district's bookshelf.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "teachers-unions-destroy-schools",
    category: ["Education", "Economy"],
    theySay: "Teachers unions destroyed public schools!",
    youSay: "School outcomes track segregation, poverty, and funding gaps documented by Census and education research. Blaming only unions ignores decades of unequal investment.",
    stab: "If unions alone caused failure, wealthy union districts would look like ruins.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "college-is-scam",
    category: ["Education", "Economy"],
    theySay: "College is a scam - nobody should go!",
    youSay: "BLS earnings premiums for degree holders remain large on average, while debt and underfunding are real policy failures. The scam frame collapses unequal public investment into anti-education nihilism.",
    stab: "Fix the price of college. Do not celebrate ignorance as a vibe.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "dei-is-anti-white",
    category: ["Culture Wars", "Democracy"],
    theySay: "DEI is illegal anti-white discrimination!",
    youSay: "Equal employment law already bans racial discrimination. Many DEI programs are outreach, bias training, or compliance. Treating every equity office as a racial conspiracy is culture-war expansion of SFFA beyond campuses.",
    stab: "If fairness offends you only when the beneficiaries are not you, it was never about fairness.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "dol_home",
        "U.S. Department of Labor",
        "DOL",
        "https://www.dol.gov/",
        "DOL publishes labor standards, wages, and worker protections.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "woke-military-weak",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "A woke military cannot win wars!",
    youSay: "Readiness is about training, maintenance, recruiting, and strategy. Culture-war branding is not a force assessment. Pentagon metrics live in budgets and GAO readiness work, not memes.",
    stab: "Empires fall from logistics and politics, not rainbow stickers on a briefing slide.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "nato-freeloaders",
    category: ["Foreign Policy"],
    theySay: "NATO allies are freeloaders - ditch them!",
    youSay: "Alliance burden-sharing is contested, but collective defense multiplies U.S. power projection. Walking away hands adversaries a fractured Europe. Accounting debates are not abandonment arguments.",
    stab: "You do not cancel the fire department because a neighbor owns a nicer hose.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "foreign-aid-waste",
    category: ["Foreign Policy", "Economy"],
    theySay: "Foreign aid is a huge waste of our budget!",
    youSay: "Foreign assistance is a small slice of federal spending. Cutting it can raise refugee, conflict, and pandemic spillover costs. GAO can score waste without treating diplomacy as theft.",
    stab: "Pennies on the federal dollar are not why your town lacks a clinic.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "israel-no-criticism",
    category: ["Foreign Policy"],
    theySay: "Any criticism of Israel is antisemitism!",
    youSay: "Antisemitism is real and must be fought. Criticism of a government's military or settlement policy is not inherently hatred of Jews, just as criticizing Egypt is not anti-Arab racism.",
    stab: "Governments are not religions. Conflating them protects neither Jews nor Palestinians.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "jan6-fbi-fedsurrection",
    category: ["Jan 6", "Democracy"],
    theySay: "January 6 was an FBI fedsurrection!",
    youSay: "Thousands of hours of video, charging docs, and convictions show a real mob attacking police and Congress. Informants exist in many cases; they do not erase the breach you can watch.",
    stab: "If it was mostly feds, your friends in the zip-tie photos need better agents.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["jan6-tourist-visit"],
  },
  {
    id: "trump-won-2020",
    category: ["Elections", "Democracy"],
    theySay: "Trump actually won 2020 - it was stolen!",
    youSay: "Sixty-plus failed lawsuits, state audits, and AP reviews found no fraud at outcome-changing scale. Losing under rules you liked until you lost is not theft.",
    stab: "If you cannot prove it in court, it is a podcast, not a presidency.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "cisa",
        "Cybersecurity and Infrastructure Security Agency",
        "CISA",
        "https://www.cisa.gov/topics/election-security",
        "CISA provides election infrastructure security guidance.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["voter-fraud-everywhere"],
  },
  {
    id: "voter-id-common-sense",
    category: ["Elections"],
    theySay: "Voter ID is just common sense!",
    youSay: "ID rules can be crafted fairly, but many bills add narrow IDs, purge rules, and polling cuts that Brennan Center and election administrators flag as turnout barriers. Common sense is access plus security, not a obstacle course.",
    stab: "If the goal is security, fund free IDs and more poll sites. If the goal is fewer voters, you already showed your hand.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "cisa",
        "Cybersecurity and Infrastructure Security Agency",
        "CISA",
        "https://www.cisa.gov/topics/election-security",
        "CISA provides election infrastructure security guidance.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "mail-ballots-fraud",
    category: ["Elections"],
    theySay: "Mail ballots are fraud machines!",
    youSay: "States have used absentee voting for decades with bipartisan acceptance for military voters. Fraud rates documented in audits remain tiny. Convenience is not conspiracy.",
    stab: "Soldiers voting from abroad somehow became fraud only when your candidate lost.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "cisa",
        "Cybersecurity and Infrastructure Security Agency",
        "CISA",
        "https://www.cisa.gov/topics/election-security",
        "CISA provides election infrastructure security guidance.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "electoral-college-protects-small",
    category: ["Elections", "Democracy"],
    theySay: "The Electoral College protects small states!",
    youSay: "It weights voters unequally by design. Small-state protection can be debated; calling unequal vote power sacred democracy is branding, not civics.",
    stab: "One person, one vote is not radical. It is the slogan you use until the math fails you.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["popular-vote-bad"],
  },
  {
    id: "gerrymander-needed",
    category: ["Elections", "Democracy"],
    theySay: "Both sides gerrymander - stop complaining!",
    youSay: "Both parties have gerrymandered; that does not make extreme maps democratic. Independent commissions and court limits exist because voters should choose politicians, not the reverse.",
    stab: "Both sides do it is a confession, not a defense.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["gerrymandering-both-sides"],
  },
  {
    id: "filibuster-saves-republic",
    category: ["Democracy"],
    theySay: "The filibuster is what saves the republic!",
    youSay: "The modern talking-point filibuster is a Senate rule, not a constitutional commandment. It blocks voting rights and climate bills while exceptions appear when majorities want tax cuts.",
    stab: "Sacred until the tax bill, disposable after: that is not principle.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["filibuster-sacred"],
  },
  {
    id: "supreme-court-neutral",
    category: ["Courts", "Democracy"],
    theySay: "The Supreme Court is just calling balls and strikes!",
    youSay: "Courts interpret open-textured clauses with methods that change outcomes on abortion, money in politics, and agency power. Neutrality claims do not erase the political stakes of appointments.",
    stab: "If it were only balls and strikes, confirmation hearings would be five minutes long.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "originalism-objective",
    category: ["Courts"],
    theySay: "Originalism is the only objective method!",
    youSay: "Historians disagree about founding-era meanings, and selective originalism often ignores founding practices that are politically inconvenient. Method branding is not a time machine.",
    stab: "If originalism were a science, originalists would not split into factions every term.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "chevron-bad",
    category: ["Courts", "Economy"],
    theySay: "Killing Chevron deference frees America from bureaucrats!",
    youSay: "Chevron let expert agencies fill statutory gaps Congress left. Ending it shifts power to generalist judges. That is a governance choice, not automatic liberty.",
    stab: "You did not drain the swamp. You moved it into chambers with life tenure.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "corporations-are-people",
    category: ["Economy", "Democracy"],
    theySay: "Corporations are people - money is speech!",
    youSay: "Citizens United treated independent expenditures as protected speech. Corporate legal personhood for contracts is not the same as equal political citizenship. Voters without megaphones lose.",
    stab: "My corporation cannot be drafted, married, or jailed. Funny kind of person.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "fec_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC publishes federal campaign finance disclosures.",
        "2025-01-01"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["dark-money-free-speech"],
  },
  {
    id: "minimum-wage-kills-jobs",
    category: ["Economy"],
    theySay: "Minimum wage hikes always kill jobs!",
    youSay: "BLS and a large empirical literature find mixed, often modest employment effects depending on level and phase-in. Always kills jobs is ideology with a spreadsheet costume.",
    stab: "If wages must stay 1990 forever, call it a museum, not a labor market.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "dol_home",
        "U.S. Department of Labor",
        "DOL",
        "https://www.dol.gov/",
        "DOL publishes labor standards, wages, and worker protections.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "unions-corrupt",
    category: ["Economy"],
    theySay: "Unions are all corrupt bosses!",
    youSay: "Unions are democratic organizations with legal duties and public LM filings. Corruption exists in every sector; BLS still shows a union wage premium. Anecdote is not the median member.",
    stab: "You hate dues more than you hate the CEO's jet. Be honest.",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "nlrb_home",
        "National Labor Relations Board",
        "NLRB",
        "https://www.nlrb.gov/",
        "NLRB enforces private-sector collective bargaining rights.",
        "2025-01-01"
      ),
      cite(
        "dol_home",
        "U.S. Department of Labor",
        "DOL",
        "https://www.dol.gov/",
        "DOL publishes labor standards, wages, and worker protections.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "right-to-work-freedom",
    category: ["Economy"],
    theySay: "Right-to-work laws protect worker freedom!",
    youSay: "Right-to-work bans fair-share fees, weakening unions that still must represent free riders. Freedom for free riders is often employer strategy dressed as liberty.",
    stab: "If it is about freedom, why do the same bills never boost organizing rights?",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "dol_home",
        "U.S. Department of Labor",
        "DOL",
        "https://www.dol.gov/",
        "DOL publishes labor standards, wages, and worker protections.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "tax-cuts-pay-for-themselves",
    category: ["Economy"],
    theySay: "Tax cuts always pay for themselves!",
    youSay: "CBO and CRS score dynamic effects; they do not show large tax cuts routinely self-financing. Deficits after major cuts are a pattern, not a coincidence.",
    stab: "If tax cuts paid for themselves, we would be drowning in surplus. We are not.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "irs-is-weapon",
    category: ["Economy", "Democracy"],
    theySay: "The IRS is a weapon against patriots!",
    youSay: "Tax administration audits high-income complexity and refundable credits. Politicized targeting is illegal and investigated when alleged. Defunding enforcement mainly helps sophisticated evasion.",
    stab: "If your patriotism depends on nobody checking the return, it is a business model.",
    sources: [
      cite(
        "irs_home",
        "Internal Revenue Service",
        "IRS",
        "https://www.irs.gov/",
        "IRS administers tax law and publishes filing statistics.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "homelessness-is-drugs",
    category: ["Economy", "Crime"],
    theySay: "Homelessness is just drugs and personal failure!",
    youSay: "HUD and Census data show housing cost burdens and shortages. Addiction and mental illness interact with rents. Personal failure does not build apartments.",
    stab: "You cannot AA your way out of a 2-bedroom that costs half your paycheck.",
    sources: [
      cite(
        "hud_home",
        "HUD",
        "U.S. Department of Housing and Urban Development",
        "https://www.hud.gov/",
        "HUD publishes housing and homelessness policy data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["homeless-choose-it"],
  },
  {
    id: "crime-soft-on",
    category: ["Crime"],
    theySay: "Democrats are soft on crime and cities burned!",
    youSay: "BJS and FBI trend data show complex rises and falls that do not map cleanly onto one party's slogan. Soft on crime is a campaign chant that skips victimization survey nuance.",
    stab: "If cable news is your crime dashboard, you are the product, not the analyst.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "police-never-wrong",
    category: ["Crime", "Culture Wars"],
    theySay: "Support the badge - police are never the problem!",
    youSay: "Most officers are not murderers; accountability for the ones who are is how you protect the profession. DOJ pattern-or-practice cases exist because some departments rot.",
    stab: "A badge is not a halo. Treat it like power that needs oversight.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["police-funding-equals-safety"],
  },
  {
    id: "guns-only-deter",
    category: ["Crime"],
    theySay: "More guns always mean less crime!",
    youSay: "CDC and research literature show firearms raise lethality of arguments, suicides, and accidents even where defensive uses occur. Always is not a dataset.",
    stab: "If more guns automatically meant safety, the ER would be a spa.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["mental-health-not-guns"],
  },
  {
    id: "media-enemy-people",
    category: ["Media", "Democracy"],
    theySay: "The media is the enemy of the people!",
    youSay: "Watchdog reporting exposes corruption; authoritarian movements always brand scrutiny as treason. Read primary documents. Enemy of the people is a purge phrase.",
    stab: "If every critical headline is treason, you are not seeking truth. You are seeking a throne.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["factcheckers-biased"],
  },
  {
    id: "big-tech-censors-right",
    category: ["Media", "Culture Wars"],
    theySay: "Big Tech only censors conservatives!",
    youSay: "Platforms moderate across ideologies under opaque rules; conservatives also dominate parts of social media. The antidote is transparency and competition policy, not a state speech police for your side.",
    stab: "Wanting the algorithm to favor you is not a free speech principle.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "whatabout-clinton-emails",
    category: ["Whataboutism", "Democracy"],
    theySay: "But her emails! Why the double standard?",
    youSay: "Email server practices were investigated. They do not cancel later classified mishandling cases, Jan 6, or current executive actions. Past scandals are not lifetime immunity cards.",
    stab: "You cannot run a country on unfinished 2016 Facebook comments.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["but-obama-did-this"],
  },
  {
    id: "both-sides-same",
    category: ["Whataboutism", "Democracy"],
    theySay: "Both parties are the same - nothing matters!",
    youSay: "Parties share donor capture problems and differ sharply on voting rights, climate, labor, and abortion. Cynicism that erases those differences is how minority agendas win without persuading you.",
    stab: "If nothing matters, only the people who still show up matter. Guess who that helps.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "america-never-racist",
    category: ["Culture Wars", "Education"],
    theySay: "America was never a racist country!",
    youSay: "National Archives documents slavery, Jim Crow, redlining, and exclusion acts. A country can contain democracy and white supremacy at once. Denial is not patriotism.",
    stab: "If it was never racist, explain the separate water fountain without using the word.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["slavery-was-everywhere"],
  },
  {
    id: "slavery-not-cause",
    category: ["Education", "Culture Wars"],
    theySay: "The Civil War was not about slavery!",
    youSay: "Secession declarations and Confederate leaders named slavery as central. States rights was the right to own people. Library of Congress primary texts settle this.",
    stab: "When the documents say slavery, believe the documents.",
    sources: [
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["civil-war-states-rights"],
  },
  {
    id: "reparations-impossible",
    category: ["Economy", "Culture Wars"],
    theySay: "Reparations are impossible and unfair!",
    youSay: "Feasibility is a design question: tax credits, baby bonds, targeted investment. Unfair ignores unpaid labor, redlining, and wealth gaps Census still measures. Hard is not the same as unjustified.",
    stab: "We built the interstate system. We can build a spreadsheet.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "freedom-to-fix-ends-epa",
    category: ["Climate", "Economy"],
    theySay: "Freedom to Fix just lets you repair your own car - why do greens hate that?",
    youSay: "The June 2026 memorandum directs EPA to expand aftermarket emissions pathways and deprioritize certain tampering enforcement. DIY repairs are not the same as weakening Clean Air Act practical controls. Read the memo, not the slogan.",
    stab: "If it were only about wrenches, it would not need an EPA enforcement deprioritization clause.",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["epa-kills-jobs"],
  },
  {
    id: "emergency-powers-are-normal",
    category: ["Democracy", "Economy"],
    theySay: "Presidents use emergency powers all the time - stop freaking out!",
    youSay: "Frequency is not the same as health. CRS and congressional war-powers literature treat emergency authorities as exceptions that expand when Congress fails to constrain them. Normalizing forever emergencies is how exceptions eat the rulebook.",
    stab: "If everything is an emergency, nothing is oversight.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "nspm-not-a-law",
    category: ["Democracy", "Foreign Policy"],
    theySay: "NSPMs are just internal memos - they are not laws!",
    youSay: "National Security Presidential Memoranda can bind agencies without the transparency of statutes or ordinary rulemaking. Internal is not the same as unimportant when the subject is security state priorities.",
    stab: "Secret priority lists shape budgets and targeting. Call them memos if it helps you sleep.",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "pardons-are-absolute-so-fine",
    category: ["Democracy", "Courts"],
    theySay: "The pardon power is absolute so any pardon is fine!",
    youSay: "The Constitution grants broad clemency, not a morality shield. Patterns of self-dealing or allied impunity are still fair game for voters, Congress, and historians even when courts cannot unwind a pardon.",
    stab: "Absolute power is exactly when you judge the character of the person using it.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["jan6-was-tourism"],
  },
  {
    id: "tariffs-on-planes-good",
    category: ["Economy", "Foreign Policy"],
    theySay: "Adjusting aircraft imports protects American aerospace jobs!",
    youSay: "Trade proclamations can shift costs across airlines, manufacturers, and passengers. CRS and BLS treat tariff and import adjustments as distributional choices, not automatic job miracles.",
    stab: "A proclamation is not a hiring fair. Follow the price of tickets and parts.",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "bls_emp",
        "Employment Situation",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/empsit.toc.htm",
        "BLS publishes the monthly employment situation report.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "fertilizer-emergency-real",
    category: ["Economy", "Climate"],
    theySay: "A fertilizer emergency proves the president is fighting for farmers!",
    youSay: "Emergency trade relief can help farm inputs and also expands the habit of governing by proclamation. Ask for duration, alternatives, and whether Congress was cut out - not just the ribbon-cutting photo.",
    stab: "If every commodity spike is an emergency, Congress is a museum exhibit.",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "pacific-fishing-common-sense",
    category: ["Climate", "Economy"],
    theySay: "Restoring Pacific fishing is common-sense American jobs!",
    youSay: "Ocean access proclamations trade off conservation science, treaty obligations, and commercial harvest. Common sense without stock assessments is a slogan wearing waders.",
    stab: "Fish stocks do not care about your press release.",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "noaa",
        "NOAA Climate",
        "NOAA",
        "https://www.noaa.gov/climate",
        "NOAA publishes climate observations and assessments.",
        "2025-01-01"
      ),
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "schedule-f-efficiency",
    category: ["Democracy", "Economy"],
    theySay: "Schedule Policy/Career is just efficiency!",
    youSay: "Converting policy-influencing roles to at-will status trades expertise for loyalty. GAO and MSPB frameworks exist because politicized removals destroy continuity and invite corruption.",
    stab: "Efficiency that needs a loyalty filter is a purge with a stopwatch.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "mspb_home",
        "Merit Systems Protection Board",
        "MSPB",
        "https://www.mspb.gov/",
        "MSPB adjudicates federal employee appeals and merit-system principles.",
        "2025-01-01"
      ),
      cite(
        "opm_home",
        "Office of Personnel Management",
        "OPM",
        "https://www.opm.gov/",
        "OPM sets federal civil-service policy and publishes workforce guidance.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["schedule-f-is-accountability"],
  },
  {
    id: "civil-servants-deep-state",
    category: ["Democracy", "Whataboutism"],
    theySay: "Career civil servants are the deep state!",
    youSay: "Career staff implement statutes Congress passed. Calling expertise a conspiracy is how you justify firing the people who know where the bodies are buried in the budget.",
    stab: "If competence is a coup, you are not fighting tyranny. You are fighting homework.",
    sources: [
      cite(
        "mspb_home",
        "Merit Systems Protection Board",
        "MSPB",
        "https://www.mspb.gov/",
        "MSPB adjudicates federal employee appeals and merit-system principles.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["deep-state-runs-everything"],
  },
  {
    id: "foia-is-weaponized",
    category: ["Democracy", "Media"],
    theySay: "FOIA is weaponized against conservatives!",
    youSay: "FOIA is a statute that applies across administrations. Backlogs and denials are documented government-wide. Transparency that only feels fair when your side wins is not transparency.",
    stab: "If sunlight burns only your opponents, you were not standing in principle. You were standing in shade.",
    sources: [
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "dark-money-free-speech",
    category: ["Elections", "Democracy"],
    theySay: "Dark money is free speech!",
    youSay: "Speech is not the same as secret bankrolling. FEC disclosures and OpenSecrets tracking exist because voters deserve to know who is buying the megaphone.",
    stab: "If your ideas need a mask and a shell LLC, they are not winning on merit.",
    sources: [
      cite(
        "fec_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC publishes federal campaign finance disclosures.",
        "2025-01-01"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["citizens-united-freedom"],
  },
  {
    id: "voter-id-only-common-sense",
    category: ["Elections", "Democracy"],
    theySay: "Voter ID is the only election reform we need!",
    youSay: "ID rules can be designed fairly or as obstacle courses. Brennan Center research after Shelby County shows how restrictive packages stack with purged rolls and closed polling places.",
    stab: "If fraud were the epidemic, courts would be drowning in proven cases. They are not.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "cisa",
        "Cybersecurity and Infrastructure Security Agency",
        "CISA",
        "https://www.cisa.gov/topics/election-security",
        "CISA provides election infrastructure security guidance.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["voter-id-stops-fraud"],
  },
  {
    id: "cisa-is-censorship",
    category: ["Elections", "Media"],
    theySay: "CISA is a censorship agency!",
    youSay: "CISA's election-security role is infrastructure resilience and threat information. Conflating cybersecurity coordination with content policing is a category error that weakens election admin.",
    stab: "Patching a county server is not editing your Facebook meme.",
    sources: [
      cite(
        "cisa",
        "Cybersecurity and Infrastructure Security Agency",
        "CISA",
        "https://www.cisa.gov/topics/election-security",
        "CISA provides election infrastructure security guidance.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "climate-not-urgent",
    category: ["Climate"],
    theySay: "Climate change is real but not urgent!",
    youSay: "NOAA observations and IPCC assessments show rising damages, extremes, and locked-in risk with delay. Not urgent usually means not urgent for people who can buy higher ground.",
    stab: "The atmosphere does not wait for your quarterly earnings call.",
    sources: [
      cite(
        "noaa",
        "NOAA Climate",
        "NOAA",
        "https://www.noaa.gov/climate",
        "NOAA publishes climate observations and assessments.",
        "2025-01-01"
      ),
      cite(
        "ipcc",
        "Intergovernmental Panel on Climate Change",
        "IPCC",
        "https://www.ipcc.ch/",
        "IPCC assesses the science of climate change for policymakers.",
        "2023-01-01"
      ),
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["climate-always-changed"],
  },
  {
    id: "epa-overreach-always",
    category: ["Climate", "Economy"],
    theySay: "EPA overreach always kills jobs!",
    youSay: "Clean air and water rules have costs and benefits; EPA and academic literature document health savings that do not appear in a plant's quarterly memo. Always is not an impact analysis.",
    stab: "Asthma ER visits are an economic cost whether your lobbyist counts them or not.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "renewables-unreliable",
    category: ["Climate", "Economy"],
    theySay: "Renewables are too unreliable to matter!",
    youSay: "Grid planning already mixes firm, flexible, and storage resources. Unreliable is a slogan that ignores interconnection queues, transmission, and falling costs documented across energy agencies.",
    stab: "The sun is intermittent. So is a coal plant on outage. Plan the system.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "noaa",
        "NOAA Climate",
        "NOAA",
        "https://www.noaa.gov/climate",
        "NOAA publishes climate observations and assessments.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "oil-dominance-freedom",
    category: ["Climate", "Foreign Policy"],
    theySay: "Oil dominance is energy freedom!",
    youSay: "Fossil dominance exports price shocks and climate risk. Freedom that depends on volatile global commodities is a leash with a patriotic paint job.",
    stab: "If a foreign cartel can spike your gas price, you are not free. You are exposed.",
    sources: [
      cite(
        "epa_home",
        "U.S. Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "EPA publishes environmental regulation and enforcement information.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "medicaid-work-requirements-fair",
    category: ["Healthcare", "Economy"],
    theySay: "Medicaid work requirements just promote personal responsibility!",
    youSay: "Paperwork barriers kick eligible people off coverage even when they work irregular hours. CBO and health-services research treat churn as a feature of red tape, not a virtue.",
    stab: "Responsibility that starts with a lost pharmacy claim is cruelty with a worksheet.",
    sources: [
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "aca-failed",
    category: ["Healthcare"],
    theySay: "Obamacare failed and premiums prove it!",
    youSay: "The ACA expanded coverage and banned preexisting-condition exclusions; premium fights are often about subsidy design and insurer markets. Failed usually means unfinished, not nonexistent.",
    stab: "If it failed so hard, why is repealing preexisting-condition protections still a third rail?",
    sources: [
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["medicare-for-all-impossible"],
  },
  {
    id: "medicare-advantage-is-better",
    category: ["Healthcare"],
    theySay: "Medicare Advantage is better than traditional Medicare!",
    youSay: "Private plans can offer extras while billing the government more. GAO and MedPAC work repeatedly flag overpayments and prior-auth friction. Better for whom is the whole question.",
    stab: "If it needs heavy marketing and network traps, ask who the product is.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "vaccine-schedule-politics-fine",
    category: ["Healthcare", "Culture Wars"],
    theySay: "Realigning the childhood vaccine schedule is just following other countries!",
    youSay: "Peer-country cherry-picking is not the same as transparent evidence review. CDC processes exist so recommendations track data, not executive branding.",
    stab: "Science by press office is how confidence dies.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "cdc-deep-state-health",
    category: ["Healthcare", "Democracy"],
    theySay: "The CDC is deep-state health tyranny!",
    youSay: "Public-health agencies publish methods and surveillance data you can audit. Tyranny is a word that loses meaning when applied to outbreak tables.",
    stab: "If a case-count dashboard is tyranny, your dictionary needs a vaccine.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "abortion-is-settled-dobbs",
    category: ["Healthcare", "Courts"],
    theySay: "Dobbs returned abortion to the people - debate over!",
    youSay: "Dobbs returned abortion to state legislatures, not to pregnant people as moral agents. Ballot fights, travel bans, and ER refusals show the debate intensified.",
    stab: "The people include the patient in the waiting room, not only the lobbyist in the gallery.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["roe-was-judicial-activism"],
  },
  {
    id: "crime-down-because-trump",
    category: ["Crime", "Whataboutism"],
    theySay: "Crime dropped because Trump is tough!",
    youSay: "BJS and FBI trend data move with many factors across jurisdictions and years. Single-cause victory laps ignore baseline trends and local policy mix.",
    stab: "Correlation with a rally chant is not a causal model.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "immigrants-drain-welfare",
    category: ["Immigration", "Economy"],
    theySay: "Immigrants drain welfare and bankrupt states!",
    youSay: "Eligibility rules already bar many noncitizens from major federal benefits. Census and budget analyses do not support a simple bankrupt-the-treasury cartoon.",
    stab: "If the math needed a scapegoat, it was never math.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["immigrants-steal-jobs"],
  },
  {
    id: "border-only-issue",
    category: ["Immigration", "Democracy"],
    theySay: "The border is the only issue that matters!",
    youSay: "Border policy matters and so do wages, healthcare, climate, and voting rights. Single-issue tunnel vision is how you get stampeded past everything else on the agenda.",
    stab: "A country is bigger than a fence line.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "mass-deportation-easy",
    category: ["Immigration"],
    theySay: "Mass deportation is logistically easy and popular!",
    youSay: "Logistics include courts, detention capacity, employer dependency, and family separation. Easy in a speech is not easy in a democracy with due process.",
    stab: "If it were easy, prior administrations would have finished the spreadsheet.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "sanctuary-cities-lawless",
    category: ["Immigration", "Crime"],
    theySay: "Sanctuary cities are lawless!",
    youSay: "Local priorities about civil detainers are not nullification of criminal law. Cities still prosecute crimes; they limit becoming a federal immigration dragnet.",
    stab: "Lawless is a word campaigns use when local democracy disagrees.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "teachers-indoctrinate",
    category: ["Education", "Culture Wars"],
    theySay: "Teachers are indoctrinating kids with ideology!",
    youSay: "State standards, elected boards, and parental rights already structure curricula. Indoctrination is often the label for teaching histories and identities someone wants erased.",
    stab: "If a worksheet about Reconstruction is grooming, your fear needs a hobby.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["crt-in-k12"],
  },
  {
    id: "dei-is-discrimination",
    category: ["Education", "Culture Wars"],
    theySay: "DEI is illegal discrimination!",
    youSay: "Equal opportunity programs vary widely; some are lawful inclusion efforts and some overreach. Blanket bans treat diversity paperwork as the same as Jim Crow.",
    stab: "If your civil-rights theory starts from resentment of pronouns, you are not reading Title VII.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "college-is-scam",
    category: ["Education", "Economy"],
    theySay: "College is a scam - skip it!",
    youSay: "Returns vary by major and institution; Census and BLS still show average wage premia. Scam is a blunt word for a financing and sorting problem that needs reform, not nihilism.",
    stab: "Burning the ladder is not the same as fixing the toll.",
    sources: [
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "bls_emp",
        "Employment Situation",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/empsit.toc.htm",
        "BLS publishes the monthly employment situation report.",
        "2025-01-01"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "student-loans-personal-failure",
    category: ["Education", "Economy"],
    theySay: "Student debt is personal failure!",
    youSay: "Tuition growth, state disinvestment, and wage polarization shaped the debt load. Personal budgeting did not invent the price of a public university.",
    stab: "You cannot side-hustle your way out of a policy choice.",
    sources: [
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "parents-rights-absolute",
    category: ["Education", "Culture Wars"],
    theySay: "Parents rights mean parents control everything taught!",
    youSay: "Parents have rights; so do other parents, students, and public institutions bound by civil-rights law. Absolute control by the loudest faction is not pluralism.",
    stab: "Public school is not your group chat admin panel.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "jan6-fedsurrection",
    category: ["Jan 6", "Democracy"],
    theySay: "Jan 6 was a fed-surrection!",
    youSay: "Court records, video, and guilty pleas document thousands of participants. A few informants do not erase a crowd that built a gallows and stormed the Capitol.",
    stab: "If every crime you dislike is a false flag, you have left evidence for cosplay.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["jan6-was-tourism"],
  },
  {
    id: "trump-always-peace",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "Trump always brings peace!",
    youSay: "Peace claims require outcomes: wars ended, alliances stabilized, civilian harm reduced. Slogans about peace while expanding force authorities are marketing.",
    stab: "A peace brand is not a ceasefire.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "nato-obsolete",
    category: ["Foreign Policy"],
    theySay: "NATO is obsolete!",
    youSay: "Alliances are cost-sharing machines against coercion. Obsolete usually means inconvenient for a bilateral deal-making style, not a serious reading of European security.",
    stab: "If Putin cheers your take, check your homework.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "israel-no-criticism",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "Any criticism of Israel is antisemitism!",
    youSay: "Antisemitism is real and rising; criticizing a government's military policy is not automatically hatred of Jews. Collapsing the two shields both bigots and bad policy from scrutiny.",
    stab: "If a state cannot be criticized, it is not an ally in a democracy. It is a golden calf.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "china-only-threat",
    category: ["Foreign Policy", "Economy"],
    theySay: "China is the only threat that matters!",
    youSay: "Strategic competition with China is real; so are climate, pandemics, and domestic democratic decay. Monomania is how you miss the other fires.",
    stab: "A serious strategy can walk and chew gum. A slogan cannot.",
    sources: [
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "unions-obsolete-modern",
    category: ["Economy"],
    theySay: "Unions are obsolete in the modern economy!",
    youSay: "BLS still finds a union wage premium. Modern work did not abolish bargaining power problems; it relocated them to apps and contractors.",
    stab: "Obsolete to whom - the worker or the shareholder presentation?",
    sources: [
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "dol_home",
        "U.S. Department of Labor",
        "DOL",
        "https://www.dol.gov/",
        "DOL publishes labor standards, wages, and worker protections.",
        "2025-01-01"
      ),
      cite(
        "nlrb_home",
        "National Labor Relations Board",
        "NLRB",
        "https://www.nlrb.gov/",
        "NLRB enforces private-sector collective bargaining rights.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["unions-corrupt"],
  },
  {
    id: "gig-workers-want-flexibility",
    category: ["Economy"],
    theySay: "Gig workers only want flexibility, not employment rights!",
    youSay: "Surveys show many want both flexibility and benefits. Misclassification fights are about who pays for risk when the app sets the price.",
    stab: "Flexibility without a sick day is a brand name for precarity.",
    sources: [
      cite(
        "dol_home",
        "U.S. Department of Labor",
        "DOL",
        "https://www.dol.gov/",
        "DOL publishes labor standards, wages, and worker protections.",
        "2025-01-01"
      ),
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "corporate-tax-cuts-investment",
    category: ["Economy"],
    theySay: "Corporate tax cuts unlock investment and wages!",
    youSay: "CBO and empirical reviews show buybacks and shareholder returns often dominate. Investment and wages need demand, competition, and bargaining power - not only a lower rate.",
    stab: "If the cut always becomes a yacht, it was not a jobs program.",
    sources: [
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["tax-cuts-pay-for-themselves"],
  },
  {
    id: "deficit-only-democrats",
    category: ["Economy", "Whataboutism"],
    theySay: "Deficits are only a Democratic problem!",
    youSay: "CBO baselines show deficits under both parties depending on tax cuts, wars, downturns, and pandemics. Selective deficit hawkishness is a tell.",
    stab: "Math does not care about your yard sign.",
    sources: [
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "inflation-only-spending",
    category: ["Economy"],
    theySay: "Inflation is only caused by government spending!",
    youSay: "BLS CPI tracks multiple drivers: supply shocks, housing, energy, corporate pricing power. Only spending is a monocausal story for a multicausal index.",
    stab: "If your inflation theory has one villain, it is a campaign ad.",
    sources: [
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "homelessness-choose-streets",
    category: ["Economy", "Crime"],
    theySay: "People choose the streets!",
    youSay: "HUD point-in-time counts and housing-cost data show scarcity and rents. Addiction and illness interact with housing; choice rhetoric erases the price of a key.",
    stab: "Nobody chooses frostbite for the aesthetic.",
    sources: [
      cite(
        "hud_home",
        "HUD",
        "U.S. Department of Housing and Urban Development",
        "https://www.hud.gov/",
        "HUD publishes housing and homelessness policy data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["homelessness-is-drugs"],
  },
  {
    id: "police-funding-only-solution",
    category: ["Crime"],
    theySay: "Only more police funding solves crime!",
    youSay: "Policing is one tool beside lighting, housing, jobs, and prosecutors. BJS victimization trends do not show a single-lever utopia.",
    stab: "A badge is not a housing voucher with a siren.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "hud_home",
        "HUD",
        "U.S. Department of Housing and Urban Development",
        "https://www.hud.gov/",
        "HUD publishes housing and homelessness policy data.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["police-never-wrong"],
  },
  {
    id: "mental-health-not-guns-again",
    category: ["Crime", "Healthcare"],
    theySay: "It is mental health, not guns!",
    youSay: "Mental health care access matters and still does not explain U.S. firearm death rates versus peer countries. CDC data keep pointing at lethality of means.",
    stab: "Other countries have depression. They do not have our funeral schedule.",
    sources: [
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "CDC publishes public health data and guidance.",
        "2025-01-01"
      ),
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "nih_home",
        "National Institutes of Health",
        "NIH",
        "https://www.nih.gov/",
        "NIH funds and publishes biomedical research.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["guns-only-deter"],
  },
  {
    id: "supreme-court-ethics-fine",
    category: ["Courts", "Democracy"],
    theySay: "Supreme Court ethics rules are already enough!",
    youSay: "A code without strong investigation and enforcement is etiquette. Public confidence surveys and gift scandals show the gap between parchment and practice.",
    stab: "If the honor system worked, we would not be reading about the yacht.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["supreme-court-neutral"],
  },
  {
    id: "originalism-solves-all",
    category: ["Courts", "Culture Wars"],
    theySay: "Originalism solves every hard case objectively!",
    youSay: "Historians disagree, and selective history is still a choice. Originalism is a method with factions, not a vending machine that dispenses one answer.",
    stab: "If the Founders had one mind, they would not have needed amendments.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: ["originalism-objective"],
  },
  {
    id: "chevron-restore-liberty",
    category: ["Courts", "Economy"],
    theySay: "Killing Chevron restored liberty from bureaucrats!",
    youSay: "Chevron deference let expert agencies fill statutory gaps Congress left. Courts still need to interpret law; the shift reallocates power toward judges and litigants with resources.",
    stab: "Liberty for the best-lawyered party is not the same as liberty for the public.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: ["chevron-bad"],
  },
  {
    id: "press-is-failing-so-ignore",
    category: ["Media", "Democracy"],
    theySay: "The press failed so I only trust influencers!",
    youSay: "Newsrooms fail and still beat anonymous telegram channels on corrections culture. Influencers rarely publish methods or FOIA logs.",
    stab: "If your news diet has no editors, you are the product and the mark.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "reuters_home",
        "Reuters",
        "Reuters",
        "https://apnews.com/",
        "Reuters provides international wire reporting.",
        "2025-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["media-enemy-people"],
  },
  {
    id: "both-sides-violence",
    category: ["Democracy", "Whataboutism"],
    theySay: "Both sides are equally violent!",
    youSay: "Political violence is wrong from anyone; datasets and court records do not show perfect symmetry in every period. Equal blame is often a way to avoid naming the bigger threat.",
    stab: "If your scale always reads 50-50, it is broken.",
    sources: [
      cite(
        "bjs_home",
        "Bureau of Justice Statistics",
        "BJS",
        "https://bjs.ojp.gov/",
        "BJS publishes criminal victimization and justice system statistics.",
        "2024-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["both-sides-same"],
  },
  {
    id: "america-greatest-no-critique",
    category: ["Culture Wars", "Education"],
    theySay: "America is the greatest - stop criticizing it!",
    youSay: "Loving a country includes reading its archives. National Parks and National Archives publish hard histories because denial is not strength.",
    stab: "A team that bans film study is not building a dynasty.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["america-never-racist"],
  },
  {
    id: "history-is-over",
    category: ["Education", "Culture Wars"],
    theySay: "We already learned all the history that matters!",
    youSay: "New documents, archaeology, and scholarship keep revising understanding. Curriculum fights prove history is alive - and politically useful.",
    stab: "If history were finished, lobbyists would not be rewriting the standards.",
    sources: [
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },

  {
    id: "citizenship-proof-harms-nobody",
    category: ["Elections", "Democracy"],
    theySay: "Proof of citizenship for voting only stops illegal votes!",
    youSay: "Documentary proof requirements block eligible citizens who lack ready paperwork, especially naturalized, elderly, and low-income voters. Noncitizen voting remains vanishingly rare in audited studies. Election security is real; disenfranchising paperwork traps are a different project.",
    stab: "If the problem is rare, the solution should not be a mass paperwork tax on citizens.",
    sources: [
      cite("brennan_voting_laws", "State Voting Laws Roundup", "Brennan Center for Justice", "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review", "Restrictive voting laws continue to impose documentary and administrative burdens on eligible voters.", "2025-12-18"),
      cite("fr_citizenship_eo", "Ensuring Citizenship Verification and Integrity in Federal Elections", "Federal Register", "https://www.federalregister.gov/documents/2026/04/03/2026-06601/ensuring-citizenship-verification-and-integrity-in-federal-elections", "Federal citizenship-verification order adds executive pressure on election administration.", "2026-04-03"),
      cite("crs_elections", "Election Administration", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS tracks election-administration requirements and federal-state roles.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["voter-id-solves-fraud", "save-act-common-sense"],
  },
  {
    id: "dei-is-illegal-discrimination",
    category: ["Culture Wars", "Democracy"],
    theySay: "DEI is illegal discrimination against white people!",
    youSay: "Equity programs that expand opportunity are not the same as racial quotas banned by courts. Contractor DEI bans use discrimination language to chill voluntary inclusion work that never guaranteed anyone a job over a more qualified applicant.",
    stab: "Calling inclusion discrimination does not make exclusion colorblind.",
    sources: [
      cite("fr_dei_contractors", "Addressing DEI Discrimination by Federal Contractors", "Federal Register", "https://www.federalregister.gov/documents/2026/03/31/2026-06286/addressing-dei-discrimination-by-federal-contractors", "Executive order targets DEI practices by federal contractors.", "2026-03-31"),
      cite("eeoc_title_vii", "Title VII of the Civil Rights Act of 1964", "EEOC", "https://www.eeoc.gov/statutes/title-vii-civil-rights-act-1964", "Title VII prohibits employment discrimination based on race, color, religion, sex, and national origin.", "1964-07-02"),
      cite("oyez_sffa", "Students for Fair Admissions v. Harvard", "Oyez", "https://www.oyez.org/cases/2022/20-1199", "Court limited race-conscious college admissions without rewriting all workplace equity law.", "2023-06-29")
    ],
    difficulty: "hard",
    relatedClaims: ["affirmative-action-racist", "colorblind-already"],
  },
  {
    id: "trumpira-helps-workers",
    category: ["Economy"],
    theySay: "TrumpIRA.gov proves this administration helps workers save!",
    youSay: "Branding a federal retirement portal after a president is marketing. Worker retirement security depends on wages, fees, Social Security, and employer plans, not a vanity domain. Check the contribution rules and consumer protections, not the logo.",
    stab: "A .gov with a campaign name is not a raise.",
    sources: [
      cite("fr_trumpira", "Promoting Retirement-Savings Access for American Workers by Establishing TrumpIRA.gov", "Federal Register", "https://www.federalregister.gov/documents/2026/05/05/2026-08908/promoting-retirement-savings-access-for-american-workers-by-establishing-trumpiragov", "Order establishes TrumpIRA.gov branding for retirement-savings initiatives.", "2026-05-05"),
      cite("bls_wages_reb", "Union Members Summary", "Bureau of Labor Statistics", "https://www.bls.gov/news.release/union2.nr0.htm", "Wage and benefit gaps remain central to worker retirement capacity.", "2025-01-23"),
      cite("ssa_home", "Social Security", "Social Security Administration", "https://www.ssa.gov/", "Social Security remains the backbone of retirement income for millions.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["tax-cuts-help-workers"],
  },
  {
    id: "mental-health-eo-solves-guns",
    category: ["Healthcare", "Crime"],
    theySay: "A mental-health executive order proves guns are not the issue!",
    youSay: "Serious mental illness treatment access matters. It does not erase firearm mortality data, background-check gaps, or the fact that most gun deaths are not mass shootings by people with diagnosed serious mental illness. Both public health tools can be true.",
    stab: "Treatment is good. Using it as a shield against gun policy is a dodge.",
    sources: [
      cite("fr_mental_eo", "Accelerating Medical Treatments for Serious Mental Illness", "Federal Register", "https://www.federalregister.gov/documents/2026/04/22/2026-07907/accelerating-medical-treatments-for-serious-mental-illness", "Executive order accelerates serious-mental-illness treatment pathways.", "2026-04-22"),
      cite("cdc_faststats_guns", "All Injuries", "CDC", "https://www.cdc.gov/nchs/fastats/injury.htm", "CDC injury statistics include firearm mortality among leading causes.", "2024-01-01"),
      cite("nimh_home", "National Institute of Mental Health", "NIH", "https://www.nimh.nih.gov/", "NIMH publishes evidence on serious mental illness prevalence and treatment.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["mental-health-not-guns-again", "guns-dont-kill"],
  },
  {
    id: "college-sports-federal-emergency",
    category: ["Education", "Culture Wars"],
    theySay: "The president must save college sports!",
    youSay: "Campus athletics finance and Title IX compliance are real policy fights. Declaring urgent national action by executive order is culture-war federalization of NCAA politics, not a substitute for legislation or conference governance.",
    stab: "If football needs a national emergency, so does student debt.",
    sources: [
      cite("fr_college_sports", "Urgent National Action To Save College Sports", "Federal Register", "https://www.federalregister.gov/documents/2026/04/09/2026-06961/urgent-national-action-to-save-college-sports", "Executive order frames federal intervention in college sports.", "2026-04-09"),
      cite("ed_titleix", "Title IX and Sex Discrimination", "U.S. Code via Cornell LII", "https://www.law.cornell.edu/uscode/text/20/1681", "Title IX governs sex discrimination in education programs including athletics.", "2025-04-02"),
      cite("crs_home_reb", "Congressional Research Service", "CRS", "https://crsreports.congress.gov/", "CRS analyzes federal education and athletics-related authorities.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["title-ix-ruins-sports"],
  },
  {
    id: "de-minimis-protects-america",
    category: ["Economy", "Foreign Policy"],
    theySay: "Ending de minimis duty-free imports protects American workers!",
    youSay: "Closing the de minimis loophole can address underpriced imports and fentanyl packaging concerns. It also raises consumer prices and customs friction. Trade-offs exist; pretending it is costless patriotism is marketing.",
    stab: "Tariffs are taxes. Someone pays them at checkout.",
    sources: [
      cite("fr_deminimis", "Continuing the Suspension of Duty-Free De Minimis Treatment for All Countries", "Federal Register", "https://www.federalregister.gov/documents/2026/02/25/2026-03829/continuing-the-suspension-of-duty-free-de-minimis-treatment-for-all-countries", "Order continues suspension of duty-free de minimis treatment.", "2026-02-25"),
      cite("fr_end_tariffs", "Ending Certain Tariff Actions", "Federal Register", "https://www.federalregister.gov/documents/2026/02/25/2026-03832/ending-certain-tariff-actions", "Separate order terminates some IEEPA tariff actions while leaving others intact.", "2026-02-25"),
      cite("itc_home", "United States International Trade Commission", "USITC", "https://www.usitc.gov/", "USITC analyzes tariff and trade-remedy economic effects.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["tariffs-are-paid-by-china", "tariffs-lower-prices"],
  },
  {
    id: "tariff-toggle-is-strength",
    category: ["Economy", "Democracy"],
    theySay: "Ending some tariffs shows flexible genius dealmaking!",
    youSay: "Selective termination of IEEPA duties while keeping other surcharges shows trade policy as an executive toggle, not a stable rules-based system businesses can plan around. Volatility is a cost.",
    stab: "A light switch is not a strategy.",
    sources: [
      cite("fr_end_tariffs2", "Ending Certain Tariff Actions", "Federal Register", "https://www.federalregister.gov/documents/2026/02/25/2026-03832/ending-certain-tariff-actions", "E.O. 14389 ends some IEEPA duties while leaving other measures untouched.", "2026-02-25"),
      cite("crs_ieepa", "The International Emergency Economic Powers Act (IEEPA)", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS explains IEEPA emergency authorities used for tariff and sanctions actions.", "2024-01-01"),
      cite("wh_eo_index_reb", "Executive Orders", "The White House", "https://www.whitehouse.gov/presidential-actions/executive-orders/", "Official White House index of executive orders.", "2026-07-11")
    ],
    difficulty: "medium",
    relatedClaims: ["tariffs-win-trade", "emergency-powers-fine"],
  },
  {
    id: "fraud-task-force-drains-swamp",
    category: ["Democracy", "Economy"],
    theySay: "A fraud task force will finally stop waste!",
    youSay: "GAO already tracks improper payments. A branded task force can help or become selective political enforcement, especially while Schedule Policy/Career remakes the career staff who catch waste. Process and independence matter more than press releases.",
    stab: "Firing the referees and then announcing a fraud squad is not oversight.",
    sources: [
      cite("fr_fraud_tf", "Establishing the Task Force To Eliminate Fraud", "Federal Register", "https://www.federalregister.gov/documents/2026/03/19/2026-05497/establishing-the-task-force-to-eliminate-fraud", "Executive order establishes a fraud-elimination task force.", "2026-03-19"),
      cite("gao_improper_reb", "Improper Payments", "GAO", "https://www.gao.gov/improper-payments", "GAO tracks federal improper payments across major programs.", "2025-01-01"),
      cite("fr_schedule_pc", "Implementing Schedule Policy/Career in the Excepted Service", "Federal Register", "https://www.federalregister.gov/documents/2026/06/10/2026-11594/implementing-schedule-policycareer-in-the-excepted-service", "Schedule Policy/Career remakes excepted-service protections.", "2026-06-10")
    ],
    difficulty: "hard",
    relatedClaims: ["doge-saves-billions", "schedule-f-is-accountability"],
  },
  {
    id: "housing-eos-fix-prices",
    category: ["Economy"],
    theySay: "Deregulating homebuilding will make housing cheap!",
    youSay: "Zoning and permitting reform can help supply. Executive checklists that ignore local land-use, interest rates, and investor demand oversell a silver bullet. Affordability needs construction and demand-side honesty.",
    stab: "A memo cannot print vacant apartments.",
    sources: [
      cite("fr_housing_barriers", "Removing Regulatory Barriers to Affordable Home Construction", "Federal Register", "https://www.federalregister.gov/documents/2026/03/18/2026-05388/removing-regulatory-barriers-to-affordable-home-construction", "Order directs removal of regulatory barriers to home construction.", "2026-03-18"),
      cite("fr_mortgage_credit", "Promoting Access to Mortgage Credit", "Federal Register", "https://www.federalregister.gov/documents/2026/03/18/2026-05384/promoting-access-to-mortgage-credit", "Order promotes mortgage-credit access directives.", "2026-03-18"),
      cite("fr_wall_street_homes", "Stopping Wall Street From Competing With Main Street Homebuyers", "Federal Register", "https://www.federalregister.gov/documents/2026/01/23/2026-01424/stopping-wall-street-from-competing-with-main-street-homebuyers", "Order targets institutional competition with individual homebuyers.", "2026-01-23")
    ],
    difficulty: "medium",
    relatedClaims: ["supply-side-only-housing"],
  },
  {
    id: "wall-street-homebuyers-solved",
    category: ["Economy"],
    theySay: "Banning Wall Street from buying houses fixes the market!",
    youSay: "Institutional single-family purchases matter in some metros. Nationwide affordability also tracks underbuilding, rates, wages, and zoning. One order against investors is not a housing plan.",
    stab: "Scapegoats are cheaper than permits.",
    sources: [
      cite("fr_wall_street_homes2", "Stopping Wall Street From Competing With Main Street Homebuyers", "Federal Register", "https://www.federalregister.gov/documents/2026/01/23/2026-01424/stopping-wall-street-from-competing-with-main-street-homebuyers", "Order targets institutional residential investors.", "2026-01-23"),
      cite("census_housing", "Housing", "U.S. Census Bureau", "https://www.census.gov/topics/housing.html", "Census publishes housing inventory and construction data.", "2025-01-01"),
      cite("fhfa_home", "Federal Housing Finance Agency", "FHFA", "https://www.fhfa.gov/", "FHFA oversees Fannie Mae, Freddie Mac, and housing finance data.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["housing-eos-fix-prices"],
  },
  {
    id: "fema-review-is-efficiency",
    category: ["Democracy", "Healthcare"],
    theySay: "Extending the FEMA review council is just good management!",
    youSay: "Disaster response capacity is life-or-death infrastructure. Keeping FEMA under open-ended political review creates uncertainty for states and survivors. Reform through statute and professional standards beats perpetual council theater.",
    stab: "Hurricanes do not wait for another continuance notice.",
    sources: [
      cite("fr_fema_review", "Further Continuance of the Federal Emergency Management Agency Review Council", "Federal Register", "https://www.federalregister.gov/documents/2026/03/27/2026-06075/further-continuance-of-the-federal-emergency-management-agency-review-council", "Order further continues the FEMA Review Council.", "2026-03-27"),
      cite("fema_home", "FEMA", "FEMA", "https://www.fema.gov/", "FEMA coordinates federal disaster response and recovery programs.", "2025-01-01"),
      cite("gao_home_reb", "U.S. Government Accountability Office", "GAO", "https://www.gao.gov/", "GAO audits disaster-response and emergency-management programs.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["doge-efficient-genius"],
  },
  {
    id: "chri-sharing-just-safety",
    category: ["Immigration", "Crime"],
    theySay: "Sharing felony records with DHS is basic safety!",
    youSay: "Lawful information sharing for serious crimes is ordinary. An order expanding DHS criminal-history access for immigration dragnets can also sweep people with old, minor, or contested records into deportation pipelines. Scope and due process decide whether it is safety or sweep.",
    stab: "Safety is precise. Dragnets are not.",
    sources: [
      cite("fr_criminal_actors", "Protecting the National Security and Welfare of the United States and Its Citizens From Criminal Actors", "Federal Register", "https://www.federalregister.gov/documents/2026/02/11/2026-02819/protecting-the-national-security-and-welfare-of-the-united-states-and-its-citizens-from-criminal", "E.O. 14385 expands DHS CHRI access and international felony-record exchange.", "2026-02-11"),
      cite("dhs_home", "Department of Homeland Security", "DHS", "https://www.dhs.gov/", "DHS houses immigration and border enforcement components.", "2025-01-01"),
      cite("bjs_home", "Bureau of Justice Statistics", "BJS", "https://bjs.ojp.gov/", "BJS publishes criminal-history and justice-system statistics.", "2025-01-01")
    ],
    difficulty: "hard",
    relatedClaims: ["ice-only-criminals"],
  },
  {
    id: "arms-transfer-america-first",
    category: ["Foreign Policy"],
    theySay: "An America First arms strategy keeps us safe!",
    youSay: "Weapons-export strategy shapes wars others fight and blowback Americans inherit. America First branding does not answer end-use monitoring, human-rights conditions, or whether more transfers reduce or multiply conflict risk.",
    stab: "Selling more weapons is not the same as having a strategy.",
    sources: [
      cite("fr_arms_transfer", "Establishing an America First Arms Transfer Strategy", "Federal Register", "https://www.federalregister.gov/documents/2026/02/11/2026-02814/establishing-an-america-first-arms-transfer-strategy", "Order establishes an America First arms-transfer strategy.", "2026-02-11"),
      cite("state_pmddtc", "Directorate of Defense Trade Controls", "U.S. Department of State", "https://www.pmddtc.state.gov/", "State Department administers defense-trade controls.", "2025-01-01"),
      cite("crs_arms", "Arms Sales", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS analyzes U.S. arms-sales policy and oversight.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["military-always-right"],
  },
  {
    id: "recovery-initiative-ends-addiction",
    category: ["Healthcare"],
    theySay: "The Great American Recovery Initiative will end addiction!",
    youSay: "Addiction policy needs treatment capacity, naloxone, housing, and evidence-based care. A branded initiative can fund those things or substitute slogans for beds. Outcomes beat naming ceremonies.",
    stab: "Epidemics do not end at a logo unveil.",
    sources: [
      cite("fr_recovery", "Addressing Addiction Through the Great American Recovery Initiative", "Federal Register", "https://www.federalregister.gov/documents/2026/02/03/2026-02249/addressing-addiction-through-the-great-american-recovery-initiative", "Order launches the Great American Recovery Initiative.", "2026-02-03"),
      cite("cdc_overdose", "Overdose Prevention", "CDC", "https://www.cdc.gov/overdose-prevention/index.html", "CDC tracks overdose deaths and prevention strategies.", "2025-01-01"),
      cite("samhsa_home", "SAMHSA", "SAMHSA", "https://www.samhsa.gov/", "SAMHSA leads federal behavioral-health and substance-use programs.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["war-on-drugs-worked"],
  },
  {
    id: "made-in-america-labels-enough",
    category: ["Economy", "Media"],
    theySay: "Truthful Made in America ads fix the trade deficit!",
    youSay: "Truth-in-labeling helps consumers. It does not rebuild industrial capacity, rewrite tax incentives, or replace trade and labor policy. Do not confuse advertising enforcement with an industrial strategy.",
    stab: "A honest label on an imported part is still an imported part.",
    sources: [
      cite("fr_made_america", "Ensuring Truthful Advertising of Products Claiming To Be Made in America", "Federal Register", "https://www.federalregister.gov/documents/2026/03/18/2026-05383/ensuring-truthful-advertising-of-products-claiming-to-be-made-in-america", "Order directs truthful Made in America advertising enforcement.", "2026-03-18"),
      cite("ftc_home_reb", "Federal Trade Commission", "FTC", "https://www.ftc.gov/", "FTC enforces advertising and consumer-protection rules.", "2025-01-01"),
      cite("bea_trade", "U.S. International Trade Data", "Bureau of Economic Analysis", "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services", "BEA publishes goods and services trade balance data.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["tariffs-bring-factories-home"],
  },
  {
    id: "declaration-250-settles-history",
    category: ["Education", "Culture Wars"],
    theySay: "The 250th anniversary proves the founding was perfect!",
    youSay: "Anniversaries are civic rituals. The Declaration's equality language coexisted with slavery and Indigenous dispossession. Celebrating ideals while refusing the contradictions is pageantry, not history.",
    stab: "If the founding were finished, we would not need amendments.",
    sources: [
      cite("wh_declaration_250", "250th Anniversary of the Adoption of the Declaration of Independence", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/07/250th-anniversary-of-the-adoption-of-the-declaration-of-independence/", "Presidential proclamation marks the Declaration's 250th anniversary.", "2026-07-03"),
      cite("archives_declaration", "Declaration of Independence", "National Archives", "https://www.archives.gov/founding-docs/declaration-transcript", "Primary text of the Declaration of Independence.", "1776-07-04"),
      cite("archives_edu_reb", "National Archives Education", "National Archives", "https://www.archives.gov/education", "Primary sources enable independent verification of founding-era claims.", "2020-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["america-greatest-no-critique", "history-is-over"],
  },
  {
    id: "schedule-pc-not-schedule-f",
    category: ["Democracy"],
    theySay: "Schedule Policy/Career is totally different from Schedule F!",
    youSay: "Renaming an excepted-service conversion does not erase the core move: expanding at-will political removal risk for policy-influencing career roles. Read the Federal Register text, not the rebrand.",
    stab: "If it walks like Schedule F and fires like Schedule F, the logo is not a shield.",
    sources: [
      cite("fr_schedule_pc2", "Implementing Schedule Policy/Career in the Excepted Service", "Federal Register", "https://www.federalregister.gov/documents/2026/06/10/2026-11594/implementing-schedule-policycareer-in-the-excepted-service", "Federal Register publication of Schedule Policy/Career implementation.", "2026-06-10"),
      cite("gao_schedule_f_reb", "Civil Service", "GAO", "https://www.gao.gov/", "GAO has analyzed Schedule F and civil-service protection risks.", "2025-01-01"),
      cite("opm_home", "Office of Personnel Management", "OPM", "https://www.opm.gov/", "OPM issues civil-service rules and excepted-service guidance.", "2025-01-01")
    ],
    difficulty: "hard",
    relatedClaims: ["schedule-f-necessary", "schedule-f-drains-swamp"],
  },
  {
    id: "nspm-stack-is-normal",
    category: ["Democracy", "Foreign Policy"],
    theySay: "NSPMs are normal national-security paperwork!",
    youSay: "Presidents issue national-security memoranda. A cascade of NSPMs that remake policy outside notice-and-comment still concentrates power and reduces public visibility. Normal paperwork can still be abnormal governance.",
    stab: "Classified memo velocity is not democratic consent.",
    sources: [
      cite("wh_nspm12", "National Security Presidential Memorandum/NSPM-12", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-12/", "NSPM-12 is part of the mid-2026 national-security memo stack.", "2026-06-12"),
      cite("wh_nspm11", "National Security Presidential Memorandum/NSPM-11", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/national-security-presidential-memorandum-nspm-11/", "NSPM-11 adds to the mid-2026 NSPM cascade.", "2026-06-05"),
      cite("crs_exec_reb", "Executive Orders: Issuance and Revocation", "Congressional Research Service", "https://crsreports.congress.gov/product/pdf/R/R42699", "CRS explains forms of presidential directives and their legal effects.", "2024-03-15")
    ],
    difficulty: "hard",
    relatedClaims: ["nspm-not-a-law", "emergency-powers-fine"],
  },
  {
    id: "freedom-to-fix-consumer-win",
    category: ["Economy", "Climate"],
    theySay: "Freedom to Fix is just right-to-repair for cars!",
    youSay: "Right-to-repair can help consumers. An EPA-directed memo that deprioritizes emissions-tampering enforcement is also an air-quality and climate choice. Read the enforcement priorities, not only the slogan.",
    stab: "If the win requires dirtier exhaust, say that part out loud.",
    sources: [
      cite("wh_freedom_fix", "Lowering the Cost of Living by Promoting the Freedom to Fix", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/lowering-the-cost-of-living-by-promoting-the-freedom-to-fix/", "Presidential memorandum on Freedom to Fix and EPA guidance.", "2026-06-29"),
      cite("epa_home_reb", "U.S. Environmental Protection Agency", "EPA", "https://www.epa.gov/", "EPA administers mobile-source emissions and tampering rules.", "2025-01-01"),
      cite("crs_clean_air", "Clean Air Act", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS summarizes Clean Air Act authorities for mobile sources.", "2024-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["freedom-to-fix-ends-epa"],
  },
  {
    id: "phosphate-emergency-normal",
    category: ["Economy", "Foreign Policy"],
    theySay: "Duty-free Moroccan phosphate is a smart emergency!",
    youSay: "Fertilizer costs matter to farms. Declaring emergencies to rewrite tariff treatment for a favored supply line is still emergency-powered trade policy. Ask who benefits, for how long, and what precedent it sets.",
    stab: "If everything is an emergency, tariffs are a royal privilege.",
    sources: [
      cite("wh_phosphate", "Declaration of Emergency and Authorization for Temporary Duty Free Importation of Phosphate Fertilizer Morocco", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/declaration-of-emergency-and-authorization-for-temporary-duty-free-importation-of-phosphate-fertilizer-morocco/", "Emergency proclamation authorizes temporary duty-free phosphate imports from Morocco.", "2026-06-29"),
      cite("usda_home", "U.S. Department of Agriculture", "USDA", "https://www.usda.gov/", "USDA tracks fertilizer and farm-input market conditions.", "2025-01-01"),
      cite("crs_ieepa2", "IEEPA and Emergency Economic Powers", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS explains emergency economic authorities used in trade actions.", "2024-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["tariff-toggle-is-strength"],
  },
  {
    id: "aircraft-imports-national-security",
    category: ["Economy", "Foreign Policy"],
    theySay: "Adjusting aircraft imports is national security!",
    youSay: "Aerospace supply chains are strategic. Section 232-style and proclamation trade tools still let presidents pick winners with thin public process. Security labeling does not make every tariff a treaty.",
    stab: "National security is not a free pass to skip Congress forever.",
    sources: [
      cite("wh_aircraft", "Adjusting Imports of Commercial Aircraft, Jet Engines, and Aircraft and Engine Parts into the United States", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/07/adjusting-imports-of-commercial-aircraft-jet-engines-and-aircraft-and-engine-parts-into-the-united-states/", "Proclamation adjusts import treatment for commercial aircraft and parts.", "2026-07-09"),
      cite("bis_232", "Section 232 Investigations", "Bureau of Industry and Security", "https://www.bis.doc.gov/", "Commerce BIS administers Section 232 national-security trade investigations.", "2025-01-01"),
      cite("crs_trade_reb", "Trade Remedies and Tariffs", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS analyzes presidential tariff and trade-remedy authorities.", "2025-01-01")
    ],
    difficulty: "hard",
    relatedClaims: ["tariffs-on-planes-good"],
  },
  {
    id: "pacific-fishing-restored",
    category: ["Climate", "Economy"],
    theySay: "Restoring Pacific fishing just helps fishermen!",
    youSay: "Fishing communities need sustainable access. A proclamation that reframes conservation constraints can also reopen ecological risk. Fisheries science, not nostalgia, decides whether stocks survive.",
    stab: "Empty oceans are not a jobs program.",
    sources: [
      cite("wh_pacific_fish", "Restoring American Commercial Fishing in the Pacific", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/restoring-american-commercial-fishing-in-the-pacific/", "Proclamation reframes Pacific commercial fishing access.", "2026-06-11"),
      cite("noaa_fisheries", "NOAA Fisheries", "NOAA", "https://www.fisheries.noaa.gov/", "NOAA Fisheries manages U.S. marine fisheries science and regulation.", "2025-01-01"),
      cite("msa_overview", "Magnuson-Stevens Act", "NOAA", "https://www.fisheries.noaa.gov/topic/laws-policies", "Federal fisheries law requires science-based catch limits.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["climate-not-urgent"],
  },
  {
    id: "buyer-pardon-forgiveness",
    category: ["Democracy", "Crime"],
    theySay: "Pardons are absolute so stop complaining!",
    youSay: "The pardon power is broad. Using it for political allies still teaches that accountability is optional for the connected. Constitutional does not mean healthy for the rule of law.",
    stab: "A legal pardon can still be a corrupt signal.",
    sources: [
      cite("wh_buyer_pardon", "Granting Pardon to Stephen E. Buyer", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/granting-pardon-to-stephen-e-buyer/", "Presidential pardon of former Representative Stephen E. Buyer.", "2026-06-04"),
      cite("constitution_pardons", "Pardon Power", "National Archives", "https://www.archives.gov/founding-docs/constitution-transcript", "Article II grants the president power to grant pardons for federal offenses.", "1787-09-17"),
      cite("doj_pardon", "Office of the Pardon Attorney", "Department of Justice", "https://www.justice.gov/pardon", "DOJ describes ordinary pardon advisory processes.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["pardons-are-fine"],
  },
  {
    id: "regenerative-ag-greenwashes",
    category: ["Climate", "Economy"],
    theySay: "A regenerative agriculture order means climate policy is done!",
    youSay: "Soil health practices can help. One agriculture order does not replace emissions rules, power-sector policy, or methane standards. Do not let a farm-branded EO retire the rest of the climate file.",
    stab: "Cover crops are good. Cover stories are not climate policy.",
    sources: [
      cite("wh_regen_ag", "Advancing Regenerative Agriculture and Strengthening American Farm Resilience", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/advancing-regenerative-agriculture-and-strengthening-american-farm-resilience/", "E.O. 14414 sets regenerative agriculture directives.", "2026-06-25"),
      cite("epa_climate_reb", "Climate Change", "EPA", "https://www.epa.gov/climate-change", "EPA publishes U.S. climate science and sector emissions context.", "2025-01-01"),
      cite("usda_climate", "Climate Change", "USDA", "https://www.usda.gov/", "USDA publishes agriculture and climate adaptation programs.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["climate-hoax", "climate-not-urgent"],
  },
  {
    id: "quantum-crypto-stack-fine",
    category: ["Foreign Policy", "Economy"],
    theySay: "Quantum and crypto orders are just tech competitiveness!",
    youSay: "Advanced-tech industrial policy can be legitimate. Stacking cryptographic and quantum directives by executive order still concentrates dual-use tech governance without ordinary legislative bargaining. Competitiveness and oversight are not enemies.",
    stab: "Moonshot memos still need sunlight.",
    sources: [
      cite("wh_quantum", "Ushering in the Next Frontier of Quantum Innovation", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/ushering-in-the-next-frontier-of-quantum-innovation/", "E.O. 14413 advances federal quantum innovation priorities.", "2026-06-22"),
      cite("wh_crypto_attacks", "Securing the Nation Against Advanced Cryptographic Attacks", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/", "E.O. 14412 directs measures against advanced cryptographic attacks.", "2026-06-22"),
      cite("nist_home", "National Institute of Standards and Technology", "NIST", "https://www.nist.gov/", "NIST develops cryptographic and quantum-related standards.", "2025-01-01")
    ],
    difficulty: "hard",
    relatedClaims: ["ai-deregulation-good"],
  },
  {
    id: "fintech-integrity-pair",
    category: ["Economy"],
    theySay: "Fintech innovation plus financial integrity orders protect consumers!",
    youSay: "Innovation language paired with integrity branding can still mean lighter supervision. Watch CFPB and FTC enforcement capacity, not dual press releases. Consumer protection is staffing and cases, not adjectives.",
    stab: "Integrity without enforcers is a brochure.",
    sources: [
      cite("wh_fintech", "Integrating Financial Technology Innovation into Regulatory Frameworks", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/05/integrating-financial-technology-innovation-into-regulatory-frameworks/", "E.O. 14405 directs fintech integration into regulatory frameworks.", "2026-05-19"),
      cite("wh_fin_integrity", "Restoring Integrity to America's Financial System", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/05/restoring-integrity-to-americas-financial-system/", "E.O. 14406 reframes financial-system integrity priorities.", "2026-05-19"),
      cite("cfpb_home_reb", "Consumer Financial Protection Bureau", "CFPB", "https://www.consumerfinance.gov/", "CFPB is the primary federal consumer-finance enforcement agency.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["cfpb-unnecessary"],
  },
  {
    id: "ai-innovation-no-guardrails",
    category: ["Economy", "Democracy"],
    theySay: "AI innovation orders mean we must scrap safety rules!",
    youSay: "Competitiveness and safety are not a binary. An AI innovation-and-security order can fund research and still leave accountability, labor, and civil-rights risks unaddressed. Deregulation is a choice, not a physics law.",
    stab: "Move fast and break democracy is not a growth strategy.",
    sources: [
      cite("fr_ai_innovation", "Promoting Advanced Artificial Intelligence Innovation and Security", "Federal Register", "https://www.federalregister.gov/documents/2026/06/05/2026-11415/promoting-advanced-artificial-intelligence-innovation-and-security", "Federal Register publication of the AI innovation and security order.", "2026-06-05"),
      cite("nist_ai", "AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework", "NIST publishes voluntary AI risk-management guidance.", "2023-01-01"),
      cite("ostp_home", "Office of Science and Technology Policy", "White House OSTP", "https://www.whitehouse.gov/ostp/", "OSTP coordinates federal science and technology policy.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["ai-deregulation-good"],
  },
  {
    id: "federal-lands-access-freedom",
    category: ["Climate", "Economy"],
    theySay: "Removing federal lands restrictions frees Americans!",
    youSay: "Public lands are a shared inheritance. Removing access restrictions can mean more drilling, mining, and habitat loss under a freedom brand. Freedom for extractors is not automatically freedom for hikers, tribes, or future taxpayers.",
    stab: "Selling the commons is not liberation.",
    sources: [
      cite("fr_lands_access", "Removing Unnecessary and Counterproductive Restrictions on Access to Federal Lands", "Federal Register", "https://www.federalregister.gov/documents/2026/06/03/2026-11181/removing-unnecessary-and-counterproductive-restrictions-on-access-to-federal-lands", "Order removes restrictions framed as barriers to federal lands access.", "2026-06-03"),
      cite("blm_home", "Bureau of Land Management", "BLM", "https://www.blm.gov/", "BLM manages public lands multiple-use mandates.", "2025-01-01"),
      cite("nps_home_reb", "National Park Service", "NPS", "https://www.nps.gov/", "NPS stewardships parks and related public lands values.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["drill-baby-drill"],
  },
  {
    id: "vaccine-realign-science",
    category: ["Healthcare"],
    theySay: "Realigning vaccines with peer countries is just science!",
    youSay: "Schedule changes should follow transparent evidence review by independent medical bodies. An executive realignment order risks politicizing childhood immunization recommendations. Peer-country shopping is not a substitute for ACIP-style process.",
    stab: "Science is a method, not a press release about Europe.",
    sources: [
      cite("fr_vaccine_realign", "Realigning United States Core Childhood Vaccine Recommendations With Best Practices From Peer, Developed Countries", "GovInfo", "https://www.govinfo.gov/content/pkg/FR-2026-06-03/pdf/2026-11180.pdf", "Order directs realignment of core childhood vaccine recommendations.", "2026-06-03"),
      cite("cdc_vaccines", "Vaccines & Immunizations", "CDC", "https://www.cdc.gov/vaccines/index.html", "CDC publishes immunization schedules and vaccine safety systems.", "2025-01-01"),
      cite("who_immunization", "Immunization", "World Health Organization", "https://www.who.int/health-topics/immunization", "WHO publishes global immunization guidance and coverage data.", "2025-01-01")
    ],
    difficulty: "hard",
    relatedClaims: ["vaccines-personal-choice-only"],
  },
  {
    id: "customs-enforcement-only-trade",
    category: ["Immigration", "Economy"],
    theySay: "Strengthening customs enforcement is only about trade!",
    youSay: "Customs sits at the intersection of tariffs, drugs, and migration. An enforcement surge can be trade policy and interior hard-power at once. Read the operational directives, not the narrowest possible gloss.",
    stab: "Ports of entry enforce more than invoices.",
    sources: [
      cite("fr_customs_enf", "Strengthening Customs Enforcement", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/strengthening-customs-enforcement/", "Order directs strengthened customs enforcement.", "2026-06-10"),
      cite("cbp_home", "U.S. Customs and Border Protection", "CBP", "https://www.cbp.gov/", "CBP enforces customs, immigration, and border laws at ports of entry.", "2025-01-01"),
      cite("fr_criminal_actors2", "Criminal Actors Executive Order", "Federal Register", "https://www.federalregister.gov/documents/2026/02/11/2026-02819/protecting-the-national-security-and-welfare-of-the-united-states-and-its-citizens-from-criminal", "Related order expands DHS criminal-history access for immigration purposes.", "2026-02-11")
    ],
    difficulty: "medium",
    relatedClaims: ["chri-sharing-just-safety"],
  },
  {
    id: "contracting-efficiency-purge",
    category: ["Democracy", "Economy"],
    theySay: "Federal contracting efficiency orders save taxpayer money!",
    youSay: "Procurement reform can cut waste. Efficiency orders can also preference political vendors, weaken labor and equity clauses, and reduce oversight capacity. Savings claims need IG audits, not vibes.",
    stab: "Efficiency is a spreadsheet word until the inspector general signs.",
    sources: [
      cite("fr_contracting", "Promoting Efficiency, Accountability, and Performance in Federal Contracting", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/04/promoting-efficiency-accountability-and-performance-in-federal-contracting/", "Order promotes efficiency and performance in federal contracting.", "2026-05-05"),
      cite("gao_contracting", "Contracting and Acquisition", "GAO", "https://www.gao.gov/improper-payments", "GAO audits federal spending, contracting risk, and improper payments across programs.", "2025-01-01"),
      cite("ofpp_home", "Office of Federal Procurement Policy", "OMB", "https://www.whitehouse.gov/omb/", "OFPP sets federal procurement policy inside OMB.", "2025-01-01")
    ],
    difficulty: "medium",
    relatedClaims: ["doge-saves-billions"],
  },
  {
    id: "both-sides-eos-same",
    category: ["Whataboutism", "Democracy"],
    theySay: "Every president signs lots of executive orders so stop counting!",
    youSay: "Volume is not content. Rescinding climate rules, converting civil servants, and rewriting election administration are not equivalent to commemorative proclamations. Compare substance, severity, and durability.",
    stab: "A holiday proclamation is not Schedule Policy/Career.",
    sources: [
      cite("crs_eo_compare", "Executive Orders: Issuance and Revocation", "Congressional Research Service", "https://crsreports.congress.gov/product/pdf/R/R42699", "CRS notes executive orders vary widely in legal effect and must be compared by substance.", "2024-03-15"),
      cite("fr_home_reb", "Federal Register", "National Archives", "https://www.federalregister.gov/", "Federal Register is the official publication venue for presidential documents.", "2026-07-11"),
      cite("wh_eo_index2", "Executive Orders", "The White House", "https://www.whitehouse.gov/presidential-actions/executive-orders/", "White House index lists executive orders across subject matter.", "2026-07-11")
    ],
    difficulty: "easy",
    relatedClaims: ["but-obama-did-this", "both-sides-equivalence"],
  },
  {
    id: "foia-backlog-not-news",
    category: ["Democracy", "Media"],
    theySay: "FOIA backlogs are boring bureaucracy, not a scandal!",
    youSay: "Slow FOIA is how governments hide in plain sight. When personnel purges and records-pressure rise together, delayed disclosure is a democracy cost, not a paperwork shrug.",
    stab: "Sunshine delayed is sunlight denied.",
    sources: [
      cite("foia_gov_reb", "FOIA.gov", "Department of Justice", "https://www.foia.gov/", "Central portal for federal FOIA requests and agency reporting.", "2025-01-01"),
      cite("doj_oip", "Office of Information Policy", "Department of Justice", "https://www.justice.gov/oip", "DOJ OIP issues FOIA guidance and publishes compliance data.", "2025-01-01"),
      cite("crs_foia", "The Freedom of Information Act (FOIA)", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS explains FOIA procedures, exemptions, and oversight issues.", "2024-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["transparency-optional"],
  },
  {
    id: "bls-jobs-prove-mandate",
    category: ["Economy", "Media"],
    theySay: "Good jobs numbers prove every deregulatory move was right!",
    youSay: "Monthly employment prints are one indicator. They do not validate Schedule Policy/Career, tariff volatility, or enforcement pauses. Correlation with a press cycle is not causation for every EO.",
    stab: "A jobs print is not a moral blank check.",
    sources: [
      cite("bls_empsit", "Employment Situation", "Bureau of Labor Statistics", "https://www.bls.gov/news.release/empsit.toc.htm", "BLS monthly employment situation is the official labor-market scorecard.", "2025-01-01"),
      cite("bea_gdp", "Gross Domestic Product", "Bureau of Economic Analysis", "https://www.bea.gov/data/gdp/gross-domestic-product", "BEA GDP data provide broader macroeconomic context than one jobs print.", "2025-01-01"),
      cite("fr_schedule_pc3", "Schedule Policy/Career", "Federal Register", "https://www.federalregister.gov/documents/2026/06/10/2026-11594/implementing-schedule-policycareer-in-the-excepted-service", "Civil-service restructuring proceeds independently of monthly jobs headlines.", "2026-06-10")
    ],
    difficulty: "easy",
    relatedClaims: ["economy-only-scoreboard"],
  },
  {
    id: "project-2025-still-denied",
    category: ["Democracy", "Media"],
    theySay: "Project 2025 is a conspiracy theory!",
    youSay: "Heritage published a public mandate. Personnel and policy overlaps are documentable in the Federal Register and White House actions. Denial after implementation is branding, not evidence.",
    stab: "You can dislike the tracker. You cannot unread the PDFs.",
    sources: [
      cite("heritage_mandate_reb", "Mandate for Leadership 2025", "Heritage Foundation", "https://www.project2025.org/policy/", "Heritage Project 2025 policy book remains a public source document.", "2023-01-01"),
      cite("cpr_tracker_reb", "Project 2025 Executive Action Tracker", "Center for Progressive Reform", "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/", "Independent tracker maps executive actions to Project 2025 proposals.", "2025-01-01"),
      cite("fr_home_reb2", "Federal Register", "National Archives", "https://www.federalregister.gov/", "Primary publication channel for executive orders and proclamations.", "2026-07-11")
    ],
    difficulty: "easy",
    relatedClaims: ["project-2025-doesnt-exist"],
  },
  {
    id: "severity-scores-are-biased",
    category: ["Media", "Democracy"],
    theySay: "Your severity scores are just liberal feelings!",
    youSay: "Scores summarize impact scope using sourced actions, not vibes alone. You can dispute a number; you still have to answer the underlying Federal Register text and affected sectors.",
    stab: "Arguing with the thermometer does not cool the room.",
    sources: [
      cite("fr_home_reb3", "Federal Register", "National Archives", "https://www.federalregister.gov/", "Primary texts remain available regardless of any tracker's scoring.", "2026-07-11"),
      cite("gao_home_reb2", "GAO", "GAO", "https://www.gao.gov/", "Independent audits provide additional nonpartisan impact evidence.", "2025-01-01"),
      cite("crs_home_reb2", "Congressional Research Service", "CRS", "https://crsreports.congress.gov/", "CRS explains legal authorities behind executive actions.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["media-lies-always"],
  },
  {
    id: "history-classroom-indoctrination",
    category: ["Education", "Culture Wars"],
    theySay: "Teaching hard history is classroom indoctrination!",
    youSay: "Primary sources from the National Archives, NPS, and Congress are not a party platform. Hiding massacres and labor wars is the indoctrination. Students can handle footnotes.",
    stab: "If the document scares you, the problem is not the teenager.",
    sources: [
      cite("archives_edu_reb2", "National Archives Education", "National Archives", "https://www.archives.gov/education", "Archives education pages provide primary-source teaching materials.", "2020-01-01"),
      cite("nps_hist_reb", "Telling All Americans' Stories", "National Park Service", "https://www.nps.gov/subjects/tellingallamericansstories/index.htm", "NPS publishes historical context for U.S. historic sites.", "2020-01-01"),
      cite("loc_home_reb", "Library of Congress", "Library of Congress", "https://www.loc.gov/", "Library of Congress preserves and publishes historical documents.", "2025-01-01")
    ],
    difficulty: "easy",
    relatedClaims: ["history-is-over", "america-never-racist"],
  },
  {
    id: "civil-service-deep-state",
    category: ["Democracy"],
    theySay: "Career officials are the deep state!",
    youSay: "Career civil servants are the continuity layer that keeps Social Security checks, food inspections, and aviation safe across elections. Politicizing them raises corruption and competence risk. Disagreement is not a conspiracy.",
    stab: "The deep state is often just someone who still has the manual.",
    sources: [
      cite("opm_home2", "Office of Personnel Management", "OPM", "https://www.opm.gov/", "OPM explains merit-system principles for federal employment.", "2025-01-01"),
      cite("mspb_home", "Merit Systems Protection Board", "MSPB", "https://www.mspb.gov/", "MSPB adjudicates federal employee adverse-action appeals.", "2025-01-01"),
      cite("fr_schedule_pc4", "Schedule Policy/Career", "Federal Register", "https://www.federalregister.gov/documents/2026/06/10/2026-11594/implementing-schedule-policycareer-in-the-excepted-service", "Excepted-service expansion increases at-will removal risk for policy roles.", "2026-06-10")
    ],
    difficulty: "medium",
    relatedClaims: ["schedule-pc-not-schedule-f", "schedule-f-drains-swamp"],
  },
  {
    id: "emergency-powers-always-ok",
    category: ["Democracy"],
    theySay: "Emergency powers are how strong leaders govern!",
    youSay: "Time-limited emergencies can be necessary. Habitual emergency trade, immigration, and agency rewrites train the public to accept rule by proclamation. Strength without sunsets is just monarchy with better stationery.",
    stab: "If the emergency never ends, the republic is the temporary measure.",
    sources: [
      cite("crs_ieepa3", "IEEPA", "Congressional Research Service", "https://crsreports.congress.gov/", "CRS explains IEEPA emergency economic powers and their breadth.", "2024-01-01"),
      cite("wh_phosphate2", "Phosphate Fertilizer Emergency Proclamation", "The White House", "https://www.whitehouse.gov/presidential-actions/2026/06/declaration-of-emergency-and-authorization-for-temporary-duty-free-importation-of-phosphate-fertilizer-morocco/", "Example of emergency proclamation used for tariff treatment.", "2026-06-29"),
      cite("brennan_emergencies", "Emergency Powers", "Brennan Center for Justice", "https://www.brennancenter.org/", "Brennan Center researches emergency-powers accumulation and reform.", "2025-01-01")
    ],
    difficulty: "hard",
    relatedClaims: ["tariff-toggle-is-strength", "nspm-stack-is-normal"],
  },
  {
    id: "metals-tariffs-protect-jobs",
    category: ["Economy", "Foreign Policy"],
    theySay: "More aluminum and steel tariffs mean more American factory jobs!",
    youSay: "Metals proclamations can raise input costs for builders, automakers, and manufacturers while any hiring gains concentrate in protected niches. CRS and BLS treat tariff incidence as distributional, not a nationwide hiring miracle.",
    stab: "A tariff is a tax with a patriotism filter. Follow prices, not slogans.",
    sources: [
      cite(
        "metals_tariff",
        "Aluminum Steel Copper Tariff Proclamation",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states",
        "Proclamation further adjusts aluminum, steel, and copper import tariff regimes.",
        "2026-06-04"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "bls_emp",
        "Employment Situation",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/empsit.toc.htm",
        "BLS publishes the monthly employment situation report.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["tariff-toggle-is-strength"],
  },
  {
    id: "dpa-delegation-is-boring",
    category: ["Democracy", "Economy"],
    theySay: "Defense Production Act paperwork is too boring to care about!",
    youSay: "DPA delegations decide which agencies can compel production, prioritize contracts, and waive requirements. Boring authorities are how industrial policy happens without a floor fight.",
    stab: "If it can commandeer supply chains, it is not trivia.",
    sources: [
      cite(
        "dpa_del",
        "DPA Delegations EO",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/03/18/2026-05382/adjusting-certain-delegations-under-the-defense-production-act",
        "Executive order adjusts Defense Production Act delegations across agencies.",
        "2026-03-18"
      ),
      cite(
        "dpa303",
        "DPA Section 303 Waiver",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/02/19/2026-03380/presidential-waiver-of-statutory-requirements-pursuant-to-section-303-of-the-defense-production-act",
        "Presidential waiver under Defense Production Act Section 303.",
        "2026-02-19"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "leave-intl-orgs-sovereignty",
    category: ["Foreign Policy", "Democracy"],
    theySay: "Leaving international organizations just restores sovereignty!",
    youSay: "Exit memos can abandon cooperation on health, labor, and security without Congress rewriting the underlying commitments in public. Sovereignty theater that blinds the government is not strength.",
    stab: "You can leave a room and still need the fire code.",
    sources: [
      cite(
        "intl_withdraw",
        "International Organizations Withdrawal Memo",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/01/16/2026-00976/withdrawing-the-united-states-from-international-organizations-conventions-and-treaties-that-are",
        "Memorandum directs withdrawal from international organizations and treaties.",
        "2026-01-16"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "kickapoo-permit-local-issue",
    category: ["Democracy", "Culture Wars"],
    theySay: "Denying one tribal permit is a local zoning spat!",
    youSay: "Presidential permit denials for tribal projects sit at the intersection of Indigenous sovereignty, borders, and infrastructure. Calling it zoning hides the federal power move.",
    stab: "If the White House stamps denied, it is not a HOA meeting.",
    sources: [
      cite(
        "kickapoo_deny",
        "Kickapoo Permit Denial",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/01/14/2026-00697/denial-of-presidential-permit-for-the-kickapoo-traditional-tribe-of-texas",
        "Denial of presidential permit for the Kickapoo Traditional Tribe of Texas.",
        "2026-01-14"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "football-eo-harmless",
    category: ["Culture Wars", "Education"],
    theySay: "A football executive order is harmless Americana!",
    youSay: "Preserving America's Game plus the college-sports emergency order shows culture policy federalized into athletics governance. Harmless branding is still agenda-setting with a whistle.",
    stab: "When the presidency coaches football, look for the civil-rights tradeoffs.",
    sources: [
      cite(
        "americas_game",
        "Preserving America's Game",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/03/25/2026-05867/preserving-americas-game",
        "Executive order on preserving American football and related sports policy.",
        "2026-03-25"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["college-sports-federal-emergency"],
  },
  {
    id: "dpa-waiver-efficiency",
    category: ["Economy", "Democracy"],
    theySay: "DPA waivers cut red tape so America can build!",
    youSay: "Section 303 waivers suspend statutory requirements for selected priorities. Speed without disclosure is how industrial favors hide inside emergency grammar.",
    stab: "Red tape is sometimes the part where the public gets a look.",
    sources: [
      cite(
        "dpa303",
        "DPA Section 303 Waiver",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/02/19/2026-03380/presidential-waiver-of-statutory-requirements-pursuant-to-section-303-of-the-defense-production-act",
        "Presidential waiver under Defense Production Act Section 303.",
        "2026-02-19"
      ),
      cite(
        "dpa_del",
        "DPA Delegations EO",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/03/18/2026-05382/adjusting-certain-delegations-under-the-defense-production-act",
        "Executive order adjusts Defense Production Act delegations across agencies.",
        "2026-03-18"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "approps-proclamation-fine",
    category: ["Democracy", "Economy"],
    theySay: "Implementing appropriations by proclamation is just administration!",
    youSay: "Spending bills are Congress's power of the purse. Selective presidential implementation can privilege favored readings while the receipt trail thins.",
    stab: "If Congress writes the check, explain every endorsement stamp.",
    sources: [
      cite(
        "approps_impl",
        "Appropriations Implementation Proclamation",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/05/22/2026-10398/to-implement-certain-provisions-in-the-consolidated-appropriations-act-2026-and-for-other-purposes",
        "Proclamation implements selected Consolidated Appropriations Act 2026 provisions.",
        "2026-05-22"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "critical-pay-attracts-talent",
    category: ["Democracy", "Economy"],
    theySay: "Critical pay authority just helps hire talent!",
    youSay: "Pay flexibilities can be legitimate. Paired with Schedule Policy/Career removals, they also create a two-track workforce: prized hires up, career watchdogs out.",
    stab: "Raise pay for experts. Do not confuse that with purging the referees.",
    sources: [
      cite(
        "crit_pay",
        "Critical Position Pay Memo",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/2026/05/approving-critical-position-pay-authority-for-national-security-investment-workforce/",
        "Approves critical-position pay authority for national-security investment workforce.",
        "2026-05-29"
      ),
      cite(
        "opm_home",
        "Office of Personnel Management",
        "OPM",
        "https://www.opm.gov/",
        "OPM sets federal civil-service policy and publishes workforce guidance.",
        "2025-01-01"
      ),
      cite(
        "mspb_home",
        "Merit Systems Protection Board",
        "MSPB",
        "https://www.mspb.gov/",
        "MSPB adjudicates federal employee appeals and merit-system principles.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["schedule-pc-not-schedule-f"],
  },
  {
    id: "homeownership-month-enough",
    category: ["Economy"],
    theySay: "Homeownership Month proves they care about housing!",
    youSay: "Proclamations are calendar art. Housing outcomes track mortgage-credit orders, construction deregulation, and institutional-investor rules, not ribbon-cutting months.",
    stab: "A hashtag month is not a rent payment.",
    sources: [
      cite(
        "hud_home",
        "HUD",
        "U.S. Department of Housing and Urban Development",
        "https://www.hud.gov/",
        "HUD publishes housing and homelessness policy data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["housing-eos-fix-prices"],
  },
  {
    id: "pass30-counts-distraction",
    category: ["Whataboutism", "Media"],
    theySay: "240 events and 550 rebuttals are just vanity metrics!",
    youSay: "Counts are mile markers for a receipt stack you can audit against Federal Register and White House links. Vanity is refusing to read event #240 because the number offends you.",
    stab: "If documentation is vanity, secrecy must be virtue. Cute theory.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["milestone-counts-distraction"],
  },
  {
    id: "withdrawal-memos-not-law",
    category: ["Foreign Policy", "Democracy"],
    theySay: "Withdrawal memos are not treaties so chill out!",
    youSay: "Memoranda can still trigger exits, defunding, and nonparticipation that change facts on the ground. Formality is not the same as consequence.",
    stab: "A memo that strands diplomacy is policy wearing slippers.",
    sources: [
      cite(
        "intl_withdraw",
        "International Organizations Withdrawal Memo",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/01/16/2026-00976/withdrawing-the-united-states-from-international-organizations-conventions-and-treaties-that-are",
        "Memorandum directs withdrawal from international organizations and treaties.",
        "2026-01-16"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "metals-national-security-always",
    category: ["Economy", "Foreign Policy"],
    theySay: "Every metals tariff is national security. End of story!",
    youSay: "National-security justifications can be real or elastic. Congress and CRS still get to ask which blast furnaces and which threats match which duty rates.",
    stab: "If everything is security, oversight is the enemy. That is the tell.",
    sources: [
      cite(
        "metals_tariff",
        "Aluminum Steel Copper Tariff Proclamation",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states",
        "Proclamation further adjusts aluminum, steel, and copper import tariff regimes.",
        "2026-06-04"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "tribal-permits-states-rights",
    category: ["Democracy", "Culture Wars"],
    theySay: "States should control tribal permits, not activists!",
    youSay: "Federally recognized tribes have a government-to-government relationship with the United States. Presidential permit fights are federal Indian law, not a states-rights cosplay.",
    stab: "Sovereignty is not a zoning variance you revoke for vibes.",
    sources: [
      cite(
        "kickapoo_deny",
        "Kickapoo Permit Denial",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/01/14/2026-00697/denial-of-presidential-permit-for-the-kickapoo-traditional-tribe-of-texas",
        "Denial of presidential permit for the Kickapoo Traditional Tribe of Texas.",
        "2026-01-14"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "sports-eos-parents-rights",
    category: ["Culture Wars", "Education"],
    theySay: "Sports executive orders protect parents' rights!",
    youSay: "Federal sports orders can override local athletic governance while Title IX and education civil-rights capacity shrink. Parents' rights branding does not audit the statute stack.",
    stab: "If parents needed an EO to yell at a referee, the problem is elsewhere.",
    sources: [
      cite(
        "americas_game",
        "Preserving America's Game",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/03/25/2026-05867/preserving-americas-game",
        "Executive order on preserving American football and related sports policy.",
        "2026-03-25"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "industrial-policy-for-us-only",
    category: ["Economy", "Whataboutism"],
    theySay: "Industrial policy is socialism unless our guy does it!",
    youSay: "DPA tools, tariffs, and contracting directives are industrial policy regardless of the scarf color. Debate the targets and transparency, not the existence of the toolbox.",
    stab: "Socialism is when the out-group uses the same authorities.",
    sources: [
      cite(
        "dpa_del",
        "DPA Delegations EO",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/03/18/2026-05382/adjusting-certain-delegations-under-the-defense-production-act",
        "Executive order adjusts Defense Production Act delegations across agencies.",
        "2026-03-18"
      ),
      cite(
        "metals_tariff",
        "Aluminum Steel Copper Tariff Proclamation",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states",
        "Proclamation further adjusts aluminum, steel, and copper import tariff regimes.",
        "2026-06-04"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "foia-still-works-fine",
    category: ["Democracy", "Media"],
    theySay: "FOIA still works, stop whining about backlogs!",
    youSay: "Statutory rights without timely production are parchment promises. DOJ FOIA dashboards and GAO audits exist because delay is a known failure mode.",
    stab: "A right you wait five years to use is a suggestion.",
    sources: [
      cite(
        "foia_home",
        "FOIA.gov",
        "U.S. Department of Justice",
        "https://www.foia.gov/",
        "FOIA.gov publishes agency FOIA portals and compliance data.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["foia-backlog-not-news"],
  },
  {
    id: "civil-service-pay-flex-only",
    category: ["Democracy"],
    theySay: "Schedule Policy/Career is just HR modernization!",
    youSay: "Excepted-service conversions change removal protections. MSPB and OPM materials still describe merit-system principles that politicized firings threaten.",
    stab: "HR modernization that makes loyalty the KPI is a purge with benefits paperwork.",
    sources: [
      cite(
        "opm_home",
        "Office of Personnel Management",
        "OPM",
        "https://www.opm.gov/",
        "OPM sets federal civil-service policy and publishes workforce guidance.",
        "2025-01-01"
      ),
      cite(
        "mspb_home",
        "Merit Systems Protection Board",
        "MSPB",
        "https://www.mspb.gov/",
        "MSPB adjudicates federal employee appeals and merit-system principles.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["civil-service-deep-state"],
  },
  {
    id: "tariffs-beat-inflation",
    category: ["Economy"],
    theySay: "Tariffs will crush inflation for families!",
    youSay: "Import taxes can raise prices of goods and inputs. BLS CPI does not care about campaign poetry when washing machines and lumber cost more.",
    stab: "Taxing imports is not a coupon for groceries.",
    sources: [
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      ),
      cite(
        "metals_tariff",
        "Aluminum Steel Copper Tariff Proclamation",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/06/04/2026-11314/further-adjusting-the-tariff-regimes-for-imports-of-aluminum-steel-and-copper-into-the-united-states",
        "Proclamation further adjusts aluminum, steel, and copper import tariff regimes.",
        "2026-06-04"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "intl-exits-save-money",
    category: ["Foreign Policy", "Economy"],
    theySay: "Leaving organizations saves taxpayer money!",
    youSay: "Dues are visible; lost cooperation on pandemics, standards, and security is not a line item until the crisis invoice arrives. CBO-style budgeting still asks about net risk.",
    stab: "The cheapest membership fee is the one you pay before the disaster.",
    sources: [
      cite(
        "intl_withdraw",
        "International Organizations Withdrawal Memo",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/01/16/2026-00976/withdrawing-the-united-states-from-international-organizations-conventions-and-treaties-that-are",
        "Memorandum directs withdrawal from international organizations and treaties.",
        "2026-01-16"
      ),
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "receipts-are-partisan",
    category: ["Media", "Whataboutism"],
    theySay: "Federal Register links are partisan gotchas!",
    youSay: "The Federal Register is the government's own journal. Quoting it is not spin; refusing to read it is.",
    stab: "If primary sources feel partisan, check which team fears sunlight.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "kickapoo-border-security",
    category: ["Immigration", "Democracy"],
    theySay: "Denying the Kickapoo permit protects the border!",
    youSay: "Border security and tribal self-determination are not automatic opposites. A permit denial still requires a public rationale beyond vibes.",
    stab: "Security without consultation is just domination with better lighting.",
    sources: [
      cite(
        "kickapoo_deny",
        "Kickapoo Permit Denial",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/01/14/2026-00697/denial-of-presidential-permit-for-the-kickapoo-traditional-tribe-of-texas",
        "Denial of presidential permit for the Kickapoo Traditional Tribe of Texas.",
        "2026-01-14"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "game-day-distraction",
    category: ["Culture Wars", "Media"],
    theySay: "Critics only hate the football order because they hate America!",
    youSay: "Critics track presidential bandwidth. Sports EOs arriving beside Schedule Policy/Career and tariff stacks show agenda priorities, not team jerseys.",
    stab: "America is not a halftime show for deregulation.",
    sources: [
      cite(
        "americas_game",
        "Preserving America's Game",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/03/25/2026-05867/preserving-americas-game",
        "Executive order on preserving American football and related sports policy.",
        "2026-03-25"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "waiver-authority-normal",
    category: ["Democracy"],
    theySay: "Presidents waive statutes all the time!",
    youSay: "Some waiver clauses exist by design. Habitually leaning on them for industrial favorites still deserves GAO and congressional scrutiny.",
    stab: "Common abuse is still abuse.",
    sources: [
      cite(
        "dpa303",
        "DPA Section 303 Waiver",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/02/19/2026-03380/presidential-waiver-of-statutory-requirements-pursuant-to-section-303-of-the-defense-production-act",
        "Presidential waiver under Defense Production Act Section 303.",
        "2026-02-19"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "appropriations-are-suggestions",
    category: ["Democracy", "Economy"],
    theySay: "Appropriations text is more like guidelines!",
    youSay: "The Constitution puts the purse in Congress. Implementation proclamations that cherry-pick invite impoundment-by-another-name fights.",
    stab: "Guidelines is what kings call statutes.",
    sources: [
      cite(
        "approps_impl",
        "Appropriations Implementation Proclamation",
        "Federal Register",
        "https://www.federalregister.gov/documents/2026/05/22/2026-10398/to-implement-certain-provisions-in-the-consolidated-appropriations-act-2026-and-for-other-purposes",
        "Proclamation implements selected Consolidated Appropriations Act 2026 provisions.",
        "2026-05-22"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "talent-pipeline-national-security",
    category: ["Democracy", "Foreign Policy"],
    theySay: "Critical pay for national-security talent is nonnegotiable!",
    youSay: "Competing for talent matters. So does keeping career analysts who can say no. Pay up without converting the civil service into a patronage ladder.",
    stab: "Brain gain plus loyalty tests is how you lose the brains that dissent.",
    sources: [
      cite(
        "crit_pay",
        "Critical Position Pay Memo",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/2026/05/approving-critical-position-pay-authority-for-national-security-investment-workforce/",
        "Approves critical-position pay authority for national-security investment workforce.",
        "2026-05-29"
      ),
      cite(
        "mspb_home",
        "Merit Systems Protection Board",
        "MSPB",
        "https://www.mspb.gov/",
        "MSPB adjudicates federal employee appeals and merit-system principles.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "housing-supply-only-story",
    category: ["Economy"],
    theySay: "Only supply matters - deregulate everything!",
    youSay: "Supply constraints are real. So are credit rules, investor purchases, zoning politics, and wage stagnation. HUD and Census data support a multi-cause diagnosis.",
    stab: "One-knob economics breaks when the machine has twelve knobs.",
    sources: [
      cite(
        "hud_home",
        "HUD",
        "U.S. Department of Housing and Urban Development",
        "https://www.hud.gov/",
        "HUD publishes housing and homelessness policy data.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "bls_union",
        "Union Members Summary",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/news.release/union2.nr0.htm",
        "BLS publishes official union membership and earnings data.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["housing-eos-fix-prices"],
  },
  {
    id: "history-lex-concord-taxes",
    category: ["Culture Wars", "Education"],
    theySay: "Lexington and Concord were only about taxes!",
    youSay: "NPS histories cover arms seizures, imperial authority, and colonial resistance. Reducing 1775 to a modern tax meme flattens the record.",
    stab: "If your founding story fits on a bumper sticker, it is incomplete.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["history-classroom-indoctrination"],
  },
  {
    id: "little-bighorn-custer-hero",
    category: ["Culture Wars"],
    theySay: "Custer was a hero ambushed by savages!",
    youSay: "NPS interpretation of Little Bighorn treats it as a battle in a larger dispossession campaign. Hero mythology erased Indigenous strategy for generations.",
    stab: "Losing a battle does not mint a saint.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "sacco-guilty-enough",
    category: ["Crime", "Democracy"],
    theySay: "Sacco and Vanzetti were guilty, case closed!",
    youSay: "Historians still debate evidence while agreeing nativism and Red Scare politics tainted the atmosphere. Case closed is how miscarriages market themselves.",
    stab: "If the trial needs a century of defense briefs, it was not tidy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hiroshima-no-debate",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "Hiroshima debate is unpatriotic!",
    youSay: "National Archives documentation of the bombings exists so citizens can weigh military claims against civilian cost. Patriotism that bans archives is cosplay.",
    stab: "If the decision was airtight, primary sources would not scare you.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "social-security-colorblind",
    category: ["Economy", "Culture Wars"],
    theySay: "Social Security was perfectly color-blind from day one!",
    youSay: "SSA history notes occupational exclusions that left many Black, domestic, and agricultural workers outside early coverage. Design details matter.",
    stab: "Color-blind is easy to claim when the exclusions are occupational.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "shelby-fixed-outdated-map",
    category: ["Elections", "Democracy"],
    theySay: "Shelby County just updated an outdated coverage map!",
    youSay: "Striking preclearance without a replacement formula predicted and produced new voting barriers. Brennan Center and election litigators tracked the wave in real time.",
    stab: "Updating a map by deleting the referee is not modernization.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "citizens-united-free-speech",
    category: ["Elections", "Democracy"],
    theySay: "Citizens United is just free speech!",
    youSay: "Unlimited independent spending amplifies treasury-sized speakers. FEC disclosures and OpenSecrets charts show the flood after 2010.",
    stab: "A megaphone the size of a bank balance is not a town hall.",
    sources: [
      cite(
        "fec_data",
        "FEC Campaign Finance Data",
        "Federal Election Commission",
        "https://www.fec.gov/data/",
        "FEC publishes federal campaign finance disclosures.",
        "2025-01-01"
      ),
      cite(
        "opensecrets",
        "OpenSecrets",
        "OpenSecrets",
        "https://www.opensecrets.org/",
        "OpenSecrets tracks campaign finance, lobbying, and dark money.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "gitmo-still-needed",
    category: ["Foreign Policy", "Crime"],
    theySay: "Guantanamo is still needed for the worst of the worst!",
    youSay: "Indefinite detention without normal trials created a due-process crisis the U.S. still pays for in courts and credibility. Worst-of-the-worst rhetoric is not a substitute for charges.",
    stab: "If the evidence is solid, use a courtroom. If it is not, that is the scandal.",
    sources: [
      cite(
        "aclu_home",
        "American Civil Liberties Union",
        "ACLU",
        "https://www.aclu.org/",
        "ACLU litigates and documents civil liberties threats.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "maria-nobody-could-help",
    category: ["Healthcare", "Democracy"],
    theySay: "Nobody could have helped Puerto Rico after Maria!",
    youSay: "Storms are natural; response capacity, colonial status, and aid logistics are policy. Death-toll disputes were about counting, not magic.",
    stab: "Paper towels are not a logistics plan.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "census_pov",
        "Poverty in the United States",
        "U.S. Census Bureau",
        "https://www.census.gov/topics/income-poverty/poverty.html",
        "Census Bureau publishes official poverty and income statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "bush-gore-pure-law",
    category: ["Elections", "Courts"],
    theySay: "Bush v. Gore was pure law, not politics!",
    youSay: "A 5-4 halt to recounts decided the presidency. Equal-protection reasoning limited to that case is why critics call it politics in robes.",
    stab: "When the remedy is stop counting, bring receipts, not incense.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "korean-war-footnote",
    category: ["Foreign Policy"],
    theySay: "Korea was a minor police action!",
    youSay: "National Archives military records document a devastating war without a peace treaty. Footnotes do not kill millions.",
    stab: "If it still needs troops on a parallel today, it was not minor.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "marshall-plan-charity",
    category: ["Foreign Policy", "Economy"],
    theySay: "The Marshall Plan was pure charity!",
    youSay: "State Department histories describe strategic containment and market rebuilding alongside humanitarian aims. Strategy and solidarity can coexist.",
    stab: "Charity that rebuilds allies is still strategy. Own it.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "chicago68-hippies-started",
    category: ["Culture Wars", "Democracy"],
    theySay: "Chicago 1968 was hippies attacking police!",
    youSay: "Televised police violence against demonstrators is documented across news archives and later commissions. Clubbing protesters is not a debate tournament.",
    stab: "If your cut of the tape starts after the baton, you are editing.",
    sources: [
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "oil-shock-arab-greed",
    category: ["Economy", "Foreign Policy"],
    theySay: "1973 was just Arab greed!",
    youSay: "Federal Reserve history essays cover embargo politics, price shocks, and U.S. energy dependence. Monocausal greed stories skip policy choices.",
    stab: "Scapegoats are cheaper than energy policy.",
    sources: [
      cite(
        "bls_cpi",
        "Consumer Price Index",
        "Bureau of Labor Statistics",
        "https://www.bls.gov/cpi/",
        "BLS publishes official inflation measures.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "iran-hostage-no-context",
    category: ["Foreign Policy"],
    theySay: "Iran took hostages because they hate freedom!",
    youSay: "The 1953 coup and the Shah's U.S. medical haven are part of the documentary record. Hatred slogans erase causation you can read in State Department histories.",
    stab: "Amnesia is not a foreign policy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "ap_home",
        "Associated Press",
        "Associated Press",
        "https://apnews.com/",
        "AP provides fact-based national and international reporting.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "sandl-bad-apples",
    category: ["Economy"],
    theySay: "The S&L crisis was only a few bad apples!",
    youSay: "Federal Reserve history ties thrift deregulation and supervision failures to a taxpayer cleanup. Apples rot faster when you remove the fridge.",
    stab: "Bailouts are how you meet the orchard.",
    sources: [
      cite(
        "cbo_home",
        "Congressional Budget Office",
        "CBO",
        "https://www.cbo.gov/",
        "CBO provides nonpartisan budget and economic analysis to Congress.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "naacp-outside-agitators",
    category: ["Culture Wars", "Democracy"],
    theySay: "The NAACP was outside agitators stirring trouble!",
    youSay: "Founded after racial terror organizing, the NAACP used litigation and advocacy against Jim Crow for decades. Agitator is what segregationists called plaintiffs.",
    stab: "If equality needs a lawyer, the calm people were the problem.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "fed-deep-state-bank",
    category: ["Economy", "Democracy"],
    theySay: "The Federal Reserve is an illegal deep-state bank!",
    youSay: "Congress wrote the Federal Reserve Act in 1913 after panics. You can demand more accountability without pretending it spawned from a volcano.",
    stab: "Statutory agencies are not lizard people. Read the act.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "gettysburg-healed-nation",
    category: ["Culture Wars", "Education"],
    theySay: "Gettysburg and the Address healed the nation!",
    youSay: "NPS sites teach the battle and the speech as unfinished work toward equality. Reconciliation myths that skip Black freedom fights are fan service.",
    stab: "Two minutes of poetry did not finish Reconstruction.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "appomattox-ended-race-issue",
    category: ["Culture Wars", "Democracy"],
    theySay: "Appomattox ended the race issue!",
    youSay: "Surrender ended a field army. Black Codes, terror, and the Compromise of 1877 show the citizenship fight continued.",
    stab: "A ceasefire is not a civil rights act.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "sumner-both-sides",
    category: ["Culture Wars", "Democracy"],
    theySay: "The caning of Sumner was both sides being violent!",
    youSay: "A House member beat an antislavery senator on the Senate floor. That is not a debate club tie.",
    stab: "If your symmetry needs a cane, it is not symmetry.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "dorr-already-democracy",
    category: ["Democracy", "Elections"],
    theySay: "America already had democracy by the 1840s!",
    youSay: "The Dorr Rebellion erupted because Rhode Island's charter still restricted the vote. Even white working men had to fight for ballots.",
    stab: "Finished democracies do not need rebellions over who counts.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "yorktown-alone",
    category: ["Foreign Policy", "Culture Wars"],
    theySay: "America defeated Britain alone at Yorktown!",
    youSay: "NPS Yorktown interpretation centers the Franco-American alliance. Solo-hero myths erase French ships and troops.",
    stab: "Allies are not a plot against exceptionalism.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "election-1800-smooth",
    category: ["Elections", "Democracy"],
    theySay: "1800 proves transfers of power are always smooth!",
    youSay: "House deadlock nearly broke the system. Peaceful transfer was improvisation under pressure, not destiny.",
    stab: "A near-miss is not a warranty.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "cra1964-ended-racism",
    category: ["Culture Wars", "Democracy"],
    theySay: "The 1964 Civil Rights Act ended racism!",
    youSay: "The Act banned legal Jim Crow in public accommodations and employment. Enforcement fights and backlash never vanished from court dockets.",
    stab: "A statute can ban segregation and still leave discrimination to kill.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "pass30-infinite-room",
    category: ["Whataboutism", "Media"],
    theySay: "There cannot possibly be more verifiable actions to log!",
    youSay: "Federal Register and White House feeds keep publishing. Pass 30 added DPA waivers, metals tariffs, treaty-exit memos, and tribal permit fights because the receipt printer did not jam.",
    stab: "Infinite room is just another way to say the record is still live.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["pass30-counts-distraction"],
  },
  {
    id: "primary-sources-elitist",
    category: ["Education", "Media"],
    theySay: "Demanding primary sources is elitist!",
    youSay: "Archives, CRS, GAO, and agency dashboards are public. Elitism is telling voters to trust vibes while the PDFs sit online.",
    stab: "Literacy is not a coastal plot.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "severity-scores-made-up",
    category: ["Media", "Whataboutism"],
    theySay: "Severity scores are made-up activism!",
    youSay: "Scores summarize documented impact across sectors with linked sources. Argue the rubric; do not pretend the underlying EO vanished.",
    stab: "If scoring offends you, try refuting the citation instead.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: ["severity-scores-are-biased"],
  },
  {
    id: "both-sides-same-volume",
    category: ["Whataboutism"],
    theySay: "Both sides issue the same volume of executive actions!",
    youSay: "Volume can be compared. Content still differs: Schedule Policy/Career, citizenship-verification elections orders, and treaty-exit memos are not generic stationery.",
    stab: "Counting pages without reading them is how both-sides cosplay works.",
    sources: [
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "Congressional Research Service Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS provides nonpartisan analysis to Congress on legislation and policy.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: ["both-sides-eos-same"],
  },
  {
    id: "tripoli-christian-nation",
    category: ["Culture Wars","Democracy"],
    theySay: "America was founded as a Christian nation!",
    youSay: "The Senate-ratified Treaty of Tripoli said the opposite in 1797. Founding law is not a church pamphlet.",
    stab: "If your theology needs you to ignore a ratified treaty, it is not history.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "indian-citizenship-finished",
    category: ["Culture Wars","Democracy"],
    theySay: "The Indian Citizenship Act finished Native equality!",
    youSay: "Citizenship in 1924 did not restore land or guarantee ballots. States kept blocking Native voters for decades.",
    stab: "A status stamp is not sovereignty.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hollywood-just-taste",
    category: ["Culture Wars","Media"],
    theySay: "The Hollywood blacklist was just studio taste!",
    youSay: "HUAC hearings and secret employment bans destroyed careers over politics without convictions.",
    stab: "Taste that ends your paycheck is a blacklist.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "loving-always-legal",
    category: ["Culture Wars","Democracy"],
    theySay: "Interracial marriage was always obviously legal!",
    youSay: "States criminalized it until Loving v. Virginia in 1967. Courts had to kill the bans.",
    stab: "Obvious now was illegal then.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "church-committee-smear",
    category: ["Democracy","Whataboutism"],
    theySay: "The Church Committee was just a smear job!",
    youSay: "Senate investigators documented COINTELPRO, assassination plots, and illegal surveillance with primary records.",
    stab: "Calling oversight a smear is how covert programs survive.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "foia-optional",
    category: ["Democracy","Media"],
    theySay: "FOIA is optional political theater!",
    youSay: "FOIA is statute. Agencies stall because disclosure is mandatory, not because vibes demand secrecy.",
    stab: "If it were optional, backlogs would not need excuses.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "war-powers-irrelevant",
    category: ["Foreign Policy","Democracy"],
    theySay: "War Powers is irrelevant theater!",
    youSay: "Congress wrote it after Vietnam because unilateral force kept expanding. Compliance fights prove it still matters.",
    stab: "Theater does not get joint resolutions.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "three-mile-nothingburger",
    category: ["Climate","Culture Wars"],
    theySay: "Three Mile Island was a nothingburger!",
    youSay: "A partial meltdown froze U.S. reactor construction and exposed emergency-communication failure. NRC still publishes the case.",
    stab: "Nothingburgers do not rewrite an industry.",
    sources: [
      cite(
        "epa_home",
        "Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "Federal environmental regulation and science.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "exxon-one-off",
    category: ["Climate","Economy"],
    theySay: "Exxon Valdez was one unlucky captain!",
    youSay: "Weak tanker oversight and corporate cost-cutting produced an ecological catastrophe. Double-hull reforms came after.",
    stab: "Luck is not a spill-prevention plan.",
    sources: [
      cite(
        "epa_home",
        "Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "Federal environmental regulation and science.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "ada-special-rights",
    category: ["Culture Wars","Healthcare"],
    theySay: "The ADA is special rights!",
    youSay: "Access ramps and job accommodations are equal citizenship, not VIP passes. Congress passed a civil-rights statute.",
    stab: "Calling a ramp special is the tell.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "welfare-reform-ended-poverty",
    category: ["Economy","Culture Wars"],
    theySay: "1996 welfare reform ended poverty!",
    youSay: "Caseloads fell; deep poverty and hardship metrics did not magically vanish. Time limits are not a jobs program.",
    stab: "A closed casefile is not a full fridge.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "bls_home",
        "Bureau of Labor Statistics",
        "U.S. Bureau of Labor Statistics",
        "https://www.bls.gov/",
        "Official U.S. labor market and price statistics.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "glba-unrelated-to-2008",
    category: ["Economy","Whataboutism"],
    theySay: "Gramm-Leach-Bliley had nothing to do with 2008!",
    youSay: "Repealing Glass-Steagall barriers enabled megabank consolidation that amplified systemic risk before the crash.",
    stab: "If firewalls never mattered, why rebuild pieces afterward?",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "enron-few-bad-apples",
    category: ["Economy","Whataboutism"],
    theySay: "Enron was a few bad apples!",
    youSay: "Fraud plus deregulated energy markets wiped pensions and forced Sarbanes-Oxley. Systems failed, not just morals.",
    stab: "Bad-apple talk ends where retirees go broke.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "deepwater-freak-accident",
    category: ["Climate","Economy"],
    theySay: "Deepwater Horizon was a freak accident!",
    youSay: "Eleven dead workers and millions of barrels followed safety failures and weak oversight, not a lightning strike.",
    stab: "Freak accidents do not need blowout-preventer hearings.",
    sources: [
      cite(
        "epa_home",
        "Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "Federal environmental regulation and science.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "snowden-traitor-only",
    category: ["Democracy","Foreign Policy"],
    theySay: "Snowden was only a traitor, full stop!",
    youSay: "Whatever you think of his flight, the documents showed bulk collection on Americans. The Fourth Amendment debate is the point.",
    stab: "Calling the messenger a traitor does not delete the slides.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "ferguson-outside-agitators",
    category: ["Crime","Culture Wars"],
    theySay: "Ferguson was only outside agitators!",
    youSay: "DOJ documented unconstitutional policing and court revenue schemes in Ferguson. Federal findings are not a Twitter mob.",
    stab: "Agitators do not write DOJ pattern-or-practice reports.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "dominion-just-questions",
    category: ["Elections","Media"],
    theySay: "Fox was just asking questions about Dominion!",
    youSay: "Fox paid $787.5 million after airing claims it knew were false. Settlements that size are not curiosity.",
    stab: "Questions that cost nearly a billion are libel with a receipt.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "immunity-always-existed",
    category: ["Courts","Democracy"],
    theySay: "Presidents always had total criminal immunity!",
    youSay: "Trump v. United States (2024) newly broadened official-act immunity. Nixon's world was not this holding.",
    stab: "If it always existed, the Court would not have needed a landmark rewrite.",
    sources: [
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "nato-isolation-myth",
    category: ["Foreign Policy","Culture Wars"],
    theySay: "America stayed isolationist after WWII!",
    youSay: "NATO in 1949 created permanent peacetime commitments. Isolation ended on paper with Article 5.",
    stab: "Alliances are not isolation with better branding.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "teapot-both-sides",
    category: ["Democracy","Whataboutism"],
    theySay: "Teapot Dome proves both sides are always identical!",
    youSay: "A specific bribery scandal does not make every ethics fight cosplay. Name the leases and the money.",
    stab: "Both-sides is not a documentary.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "wagner-unions-unamerican",
    category: ["Economy","Culture Wars"],
    theySay: "The Wagner Act made unions un-American!",
    youSay: "Congress protected organizing after private armies killed strikers. Collective bargaining is statute, not sedition.",
    stab: "Calling the NLRA un-American is lobbying, not patriotism.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "bls_home",
        "Bureau of Labor Statistics",
        "U.S. Bureau of Labor Statistics",
        "https://www.bls.gov/",
        "Official U.S. labor market and price statistics.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "manzanar-protection",
    category: ["Immigration","Culture Wars"],
    theySay: "Camps like Manzanar protected Japanese Americans!",
    youSay: "Armed confinement without charges stole homes and businesses. Protection does not post sentries at the gate.",
    stab: "If it were protection, people could leave.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "alcatraz-publicity",
    category: ["Culture Wars","Democracy"],
    theySay: "Alcatraz was just publicity!",
    youSay: "Nineteen months of occupation demanded treaty enforcement. NPS still interprets it as a sovereignty protest.",
    stab: "Publicity stunts do not outlast winter on a rock.",
    sources: [
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "ruby-ridge-justified",
    category: ["Crime","Democracy"],
    theySay: "Ruby Ridge was fully justified!",
    youSay: "Rules-of-engagement failures killed civilians and fueled militia radicalization. Tactics matter when the state holds the rifles.",
    stab: "Justified operations do not recruit the next bombing.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "okc-foreign-only",
    category: ["Crime","Foreign Policy"],
    theySay: "Serious terror is always foreign!",
    youSay: "Oklahoma City killed 168 people. Domestic extremism is not a myth you can deport.",
    stab: "Body counts do not check passports first.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "crack-powder-fair",
    category: ["Crime","Culture Wars"],
    theySay: "Crack and powder disparities were fair!",
    youSay: "A 100:1 ratio produced racial sentencing gaps Congress later partially repaired. Fair was the branding, not the math.",
    stab: "If it were fair, reform would not have been needed.",
    sources: [
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "henrietta-no-issue",
    category: ["Healthcare","Culture Wars"],
    theySay: "Henrietta Lacks is a non-issue because rules differed!",
    youSay: "HeLa built modern medicine without consent. NIH later negotiated privacy because the injustice was real.",
    stab: "Different era is not a moral eraser.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "cdc_home",
        "Centers for Disease Control and Prevention",
        "CDC",
        "https://www.cdc.gov/",
        "Federal public-health agency data and guidance.",
        "2025-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "great-migration-choice",
    category: ["Culture Wars","Economy"],
    theySay: "The Great Migration was just free-market choice!",
    youSay: "People fled lynching and debt peonage. Northern redlining proved arrival was not equal welcome.",
    stab: "Choice under terror is not a labor-market TED talk.",
    sources: [
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "debs-deserved-prison",
    category: ["Democracy","Culture Wars"],
    theySay: "Debs deserved prison for hurting the war!",
    youSay: "Antiwar speech is not espionage. The Espionage Act was used to cage dissent, and he ran for president from prison.",
    stab: "If speech is sabotage, the First Amendment is a joke.",
    sources: [
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "pass31-no-more-room",
    category: ["Whataboutism","Media"],
    theySay: "There cannot be more verifiable room after Pass 30!",
    youSay: "Federal Register pages and White House actions kept printing. Pass 31 added housing stacks, DPA waivers, and history deep cuts because the record did not pause.",
    stab: "Infinite room is just the archive refusing to die.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "tracker-260-padding",
    category: ["Media","Whataboutism"],
    theySay: "260 tracker events must be padding!",
    youSay: "Each entry cites Federal Register or White House text. Padding does not survive validate-links and primary URLs.",
    stab: "If it were padding, the PDFs would 404.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "history-270-revisionism",
    category: ["Education","Culture Wars"],
    theySay: "270 history entries are revisionism!",
    youSay: "Archives, NPS, Oyez, and Congress.gov are not fan fiction. Dual timelines show textbook gaps against primary records.",
    stab: "Revisionism is ignoring the footnotes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      ),
      cite(
        "loc_home",
        "Library of Congress",
        "Library of Congress",
        "https://www.loc.gov/",
        "Library of Congress preserves and publishes historical documents.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "rebuttals-600-spam",
    category: ["Media","Whataboutism"],
    theySay: "600 rebuttals is spam!",
    youSay: "Each card carries citations. Volume without sources would be spam; volume with GAO and FR links is a desk.",
    stab: "Spam does not archive itself on the Wayback Machine.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "schedule-f-loyalty-fine",
    category: ["Democracy","Economy"],
    theySay: "Schedule F loyalty screens are fine!",
    youSay: "Converting career civil servants into at-will political staff guts expertise and invites corruption. GAO flagged the risks.",
    stab: "Loyalty oaths are not merit systems.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "metals-tariffs-always-work",
    category: ["Economy","Foreign Policy"],
    theySay: "Metals tariffs always work!",
    youSay: "Proclamation-driven aluminum-steel-copper regimes create uncertainty and retaliation risk without durable statute.",
    stab: "Always is not a trade model.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "dpa-waivers-normal",
    category: ["Economy","Democracy"],
    theySay: "DPA Section 303 waivers are normal housekeeping!",
    youSay: "Waiving statutory requirements concentrates industrial power in the presidency. Housekeeping does not need emergency carve-outs.",
    stab: "Normal is what Congress writes. Waivers are the exception lane.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "intl-org-exits-sovereignty",
    category: ["Foreign Policy","Culture Wars"],
    theySay: "Leaving international organizations is pure sovereignty!",
    youSay: "Blanket withdrawal memos can dump treaties and forums without replacing the cooperation they provided.",
    stab: "Sovereignty is not walking out of every room and calling it strategy.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "kickapoo-permit-local",
    category: ["Culture Wars","Democracy"],
    theySay: "Kickapoo permit denial is a local zoning spat!",
    youSay: "A presidential memorandum denying a tribal permit is federal power over Indigenous infrastructure, not a HOA meeting.",
    stab: "Local spats do not need White House letterhead.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "housing-eos-enough",
    category: ["Economy","Culture Wars"],
    theySay: "Housing executive orders alone fix affordability!",
    youSay: "Proclamations on Wall Street buyers and mortgage access do not build units. Supply, zoning, and subsidy still matter.",
    stab: "A PDF is not a roof.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "bls_home",
        "Bureau of Labor Statistics",
        "U.S. Bureau of Labor Statistics",
        "https://www.bls.gov/",
        "Official U.S. labor market and price statistics.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "citizenship-verify-common-sense",
    category: ["Elections","Immigration"],
    theySay: "Citizenship verification for elections is common sense!",
    youSay: "Poorly designed federal mandates risk blocking lawful voters and echoing the Shelby-era restriction wave.",
    stab: "Common sense that shrinks the electorate needs harder scrutiny.",
    sources: [
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "oyez_home",
        "Oyez",
        "Oyez",
        "https://www.oyez.org/",
        "Oyez summarizes Supreme Court cases with opinions and audio.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "dei-contractor-ban-neutral",
    category: ["Culture Wars","Economy"],
    theySay: "Banning DEI for contractors is neutral!",
    youSay: "Orders targeting equity programs chill lawful nondiscrimination work and invite politicized procurement.",
    stab: "Neutral does not need a culture-war acronym in the title.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "brennan_home",
        "Brennan Center for Justice",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center researches voting rights, democracy, and justice reform.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "lands-access-freedom",
    category: ["Climate","Culture Wars"],
    theySay: "Removing federal-lands restrictions is freedom!",
    youSay: "Access rollbacks can open extraction and damage while branding deregulation as recreation.",
    stab: "Freedom for bulldozers is not wilderness policy.",
    sources: [
      cite(
        "epa_home",
        "Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "Federal environmental regulation and science.",
        "2025-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "nps_hist",
        "National Park Service History",
        "National Park Service",
        "https://www.nps.gov/subjects/tellingallamericansstories/index.htm",
        "NPS publishes historical context for U.S. historic sites.",
        "2020-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "ai-speed-over-safety",
    category: ["Economy","Culture Wars"],
    theySay: "AI needs speed, not safety rules!",
    youSay: "Innovation orders that skip enforceable baselines export risk to workers and the public.",
    stab: "Speed without brakes is how you meet the wall first.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "college-sports-federalize",
    category: ["Education","Culture Wars"],
    theySay: "Washington should federalize college sports!",
    youSay: "Preserving America's Game and related orders put culture politics in athletic governance.",
    stab: "If football needs the Oval Office, the problem is not the playbook.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "fema-review-forever",
    category: ["Climate","Democracy"],
    theySay: "Endless FEMA review is responsible caution!",
    youSay: "Indefinite review while climate losses rise can stall capacity under the banner of reform.",
    stab: "Caution that never finishes is abandonment with meetings.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "epa_home",
        "Environmental Protection Agency",
        "EPA",
        "https://www.epa.gov/",
        "Federal environmental regulation and science.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trumpira-branding",
    category: ["Economy","Culture Wars"],
    theySay: "TrumpIRA.gov is just helpful branding!",
    youSay: "Politicizing retirement infrastructure through presidential domains mixes governance with campaign aesthetics.",
    stab: "Helpful branding does not need a surname in the URL.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "fec_home",
        "Federal Election Commission",
        "FEC",
        "https://www.fec.gov/",
        "Federal campaign-finance disclosure and enforcement.",
        "2025-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "fraud-task-force-trust",
    category: ["Democracy","Economy"],
    theySay: "A presidential fraud task force is automatically trustworthy!",
    youSay: "Concentrating fraud narrative power without strong IG independence risks selective enforcement.",
    stab: "Trust requires inspectors general, not slogans.",
    sources: [
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "congress_home",
        "Congress.gov",
        "Library of Congress",
        "https://www.congress.gov/",
        "Official legislative information for the U.S. Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "cuba-sanctions-simple",
    category: ["Foreign Policy","Whataboutism"],
    theySay: "Cuba sanctions are simple morality!",
    youSay: "Sanctions instruments can be real policy tools and still deserve scrutiny on human impact and consistency.",
    stab: "Morality that never updates is a press release.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "wh_actions",
        "Presidential Actions",
        "The White House",
        "https://www.whitehouse.gov/presidential-actions/",
        "Official White House presidential actions archive.",
        "2026-07-11"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "primary-sources-optional-now",
    category: ["Education","Media"],
    theySay: "Primary sources are optional in 2026!",
    youSay: "FR, GAO, Archives, and court records are free. Optional is what people say when the PDF hurts.",
    stab: "Literacy did not sunset.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "both-sides-same-fr",
    category: ["Whataboutism","Media"],
    theySay: "Both sides publish the same Federal Register volume!",
    youSay: "Receipt density is measurable. Claiming sameness without counting documents is vibes against the daily journal.",
    stab: "Both-sides needs a spreadsheet, not a shrug.",
    sources: [
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      ),
      cite(
        "crs_home",
        "CRS Reports",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "Nonpartisan legislative research for Congress.",
        "2025-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },

  {
    id: "stamp-act-just-taxes",
    category: ["Education", "Democracy"],
    theySay: "The Stamp Act was just normal taxes!",
    youSay: "Colonial resistance centered on consent and representation, not thrift cosplay. The documents show a constitutional fight.",
    stab: "No representation was the wound.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "bill-of-rights-optional",
    category: ["Democracy", "Courts"],
    theySay: "The Bill of Rights was optional window dressing!",
    youSay: "Ratification required explicit guarantees. Optional is what people say when amendments constrain them.",
    stab: "Written rights are not décor.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "embargo-was-genius",
    category: ["Economy", "Foreign Policy"],
    theySay: "Jefferson's embargo proved peacemaking genius!",
    youSay: "Shipping collapsed and Britain shrugged. Results beat mythology.",
    stab: "Empty harbors are data.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "black-hawk-self-defense",
    category: ["Culture Wars", "Democracy"],
    theySay: "Black Hawk was just self-defense against invaders!",
    youSay: "Returning to planted fields after treaty pressure is not invasion. Massacres of fleeing people are not defense.",
    stab: "Cornfields are not a casus belli.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "kansas-nebraska-fair",
    category: ["Elections", "Democracy"],
    theySay: "Kansas-Nebraska was fair popular sovereignty!",
    youSay: "Repealing the Missouri line invited armed settlement. Bleeding Kansas was the audit.",
    stab: "Rifles are not ballots.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "13th-ended-everything",
    category: ["Crime", "Democracy"],
    theySay: "The 13th Amendment ended forced labor forever!",
    youSay: "The punishment clause enabled convict leasing. Forever had a carve-out with a body count.",
    stab: "Read the exception.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "freedmens-bureau-waste",
    category: ["Economy", "Education"],
    theySay: "The Freedmen's Bureau was pure waste!",
    youSay: "Schools, contracts, and relief after slavery are governance, not waste. Starving the Bureau was the political project.",
    stab: "Literacy is not a boondoggle.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "15th-settled-voting",
    category: ["Elections", "Democracy"],
    theySay: "The 15th Amendment settled Black voting!",
    youSay: "Poll taxes, literacy tests, and terror nullified paper rights for generations.",
    stab: "Paper without polling places is theater.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "slaughterhouse-narrow",
    category: ["Courts", "Democracy"],
    theySay: "Slaughterhouse was a narrow butchers case!",
    youSay: "The holding gutted Privileges or Immunities and weakened Reconstruction enforcement.",
    stab: "Narrow facts, wide damage.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "pure-food-nanny",
    category: ["Economy", "Healthcare"],
    theySay: "Pure Food rules were nanny-state overreach!",
    youSay: "Adulterated meat and patent medicines were the market product. Labels followed corpses.",
    stab: "Poison is not liberty.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "1929-unavoidable",
    category: ["Economy", "Whataboutism"],
    theySay: "1929 was an unavoidable act of God!",
    youSay: "Leverage, weak banking rules, and inequality are policy choices. Acts of God do not issue margin calls.",
    stab: "Panics have architects.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "new-deal-destroyed",
    category: ["Economy", "Healthcare"],
    theySay: "The New Deal destroyed recovery!",
    youSay: "Banks reopened, jobs programs ran, and labor rights expanded. Slogan failure needs better math.",
    stab: "Relief is not ruin.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "court-packing-always-tyranny",
    category: ["Courts", "Democracy"],
    theySay: "Any Court critique is tyranny!",
    youSay: "1937 was a fight over doctrine after blocked New Deal laws. Institutions are political; history records that.",
    stab: "Dockets are not sacred relics.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "lend-lease-isolation",
    category: ["Foreign Policy", "Whataboutism"],
    theySay: "Lend-Lease kept America isolationist!",
    youSay: "Arming Allies is choosing sides. Isolation does not ship destroyers.",
    stab: "Materiel is a tell.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "double-v-disloyal",
    category: ["Culture Wars", "Democracy"],
    theySay: "Double V was disloyal wartime complaining!",
    youSay: "Demanding democracy at home while fighting fascism abroad is consistency, not betrayal.",
    stab: "Jim Crow was the contradiction.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trinity-just-science",
    category: ["Foreign Policy", "Education"],
    theySay: "Trinity was just science, not politics!",
    youSay: "A city-killing weapon test is policy with physics. Science does not erase strategy.",
    stab: "Kilotons are governance.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "nuremberg-revenge",
    category: ["Foreign Policy", "Courts"],
    theySay: "Nuremberg was only victors revenge!",
    youSay: "Open trials documenting genocide shaped international criminal law. Revenge alone does not build a record.",
    stab: "Transcripts outlast slogans.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "mccarthy-was-right",
    category: ["Media", "Democracy"],
    theySay: "McCarthy was right and censored!",
    youSay: "Army hearings exposed reckless accusations on live TV. Censure followed collapse, not cancellation vibes.",
    stab: "Have you no sense of decency still echoes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "greensboro-polite",
    category: ["Culture Wars", "Democracy"],
    theySay: "Greensboro change came from polite managers!",
    youSay: "Sit-ins, arrests, and boycotts forced desegregation. Politeness did not unlock the counter.",
    stab: "Empty stools made policy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "1965-immigration-ruined",
    category: ["Immigration", "Culture Wars"],
    theySay: "The 1965 Immigration Act ruined America!",
    youSay: "Ending racist national-origin quotas aligned law with civil-rights claims. Demography panic is not evidence.",
    stab: "Quotas were the stain.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "medicare-never-works",
    category: ["Healthcare", "Economy"],
    theySay: "Government health coverage never works!",
    youSay: "Medicare remains broadly popular and measurable. Pretending it failed requires ignoring enrollment.",
    stab: "Seniors vote with their coverage.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "panthers-only-violence",
    category: ["Crime", "Culture Wars"],
    theySay: "Black Panthers were only a street gang!",
    youSay: "Free breakfasts and clinics were real programs alongside self-defense, while COINTELPRO hunted the organization.",
    stab: "Erase the breakfasts, keep the caricature.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "rfk-changed-nothing",
    category: ["Democracy", "Media"],
    theySay: "RFK's assassination changed nothing!",
    youSay: "Two assassinations in weeks reshaped 1968 politics. Denial is not analysis.",
    stab: "Trauma is a historical force.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "epa-luxury-cult",
    category: ["Climate", "Economy"],
    theySay: "EPA is a luxury environmental cult!",
    youSay: "Rivers on fire and leaded air were not lifestyle brands. Pollution dumping created the agency.",
    stab: "Lungs are not externalities forever.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "title-ix-ruined-sports",
    category: ["Education", "Culture Wars"],
    theySay: "Title IX ruined men's sports!",
    youSay: "Equal opportunity is a budget and compliance choice, not theft by biology slogans.",
    stab: "Title IX bans sex discrimination in education.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "saturday-night-hr",
    category: ["Democracy", "Courts"],
    theySay: "Saturday Night Massacre was routine HR!",
    youSay: "Firing the prosecutor investigating you is why the night became a scandal name.",
    stab: "Investigators are not staff props.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "ford-pardon-healing",
    category: ["Democracy", "Whataboutism"],
    theySay: "Ford's pardon healed the nation!",
    youSay: "Unconditional amnesty before trial traded accountability for closure branding.",
    stab: "Healing that skips verdicts is spin.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "911-blank-check",
    category: ["Foreign Policy", "Democracy"],
    theySay: "9/11 justified every war and wiretap since!",
    youSay: "Honoring the dead means auditing outcomes. Blank checks are not patriotism.",
    stab: "Grief is not a statute.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "aca-total-failure",
    category: ["Healthcare", "Economy"],
    theySay: "Obamacare failed completely!",
    youSay: "Coverage expansions and preexisting-condition protections are measurable. Failure talk that skips enrollment is sloganeering.",
    stab: "Repeal fights prove stakes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trayvon-one-off",
    category: ["Crime", "Culture Wars"],
    theySay: "Trayvon was one local case, not a system!",
    youSay: "National movements do not form around footnotes. Stand Your Ground and race shaped the fight.",
    stab: "Local killings can expose national rules.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "schedule-f-efficiency-only",
    category: ["Democracy", "Economy"],
    theySay: "Schedule F is just efficiency!",
    youSay: "Converting career protections into loyalty screens is personnel politics with a Federal Register trail.",
    stab: "Efficiency that needs loyalty oaths is a tell.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "tariffs-by-tweet-fine",
    category: ["Economy", "Democracy"],
    theySay: "Tariffs by proclamation are fine forever!",
    youSay: "Industrial policy without durable statute is volatility marketed as strength.",
    stab: "Proclamations are not a customs code.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "dpa-waiver-trust",
    category: ["Economy", "Democracy"],
    theySay: "DPA waivers deserve blank trust!",
    youSay: "Emergency industrial powers need oversight, not applause. Paperwork volume is the warning light.",
    stab: "Waivers are not vibes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "housing-eo-solves-rent",
    category: ["Economy", "Culture Wars"],
    theySay: "Housing EOs will solve rent!",
    youSay: "Affordability is zoning, supply, wages, and credit. Proclamation months are branding.",
    stab: "Rent is not a press release.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "citizenship-check-harmless",
    category: ["Elections", "Immigration"],
    theySay: "Citizenship verification orders are harmless!",
    youSay: "Federalizing eligibility fights risks suppressing lawful ballots. Harmless is what architects call the first draft.",
    stab: "Eligibility theater has victims.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "dei-ban-is-fairness",
    category: ["Culture Wars", "Democracy"],
    theySay: "Banning DEI is pure fairness!",
    youSay: "Converting equity programs into enforcement targets is policy with receipts, not a fairness hymn.",
    stab: "Fairness that needs contractor blacklists is politics.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "freedom-to-fix-green",
    category: ["Climate", "Economy"],
    theySay: "Freedom-to-Fix is pro-environment!",
    youSay: "Deregulation under repair branding still rolls back rules. Greenwash needs metrics.",
    stab: "Fix can mean strip.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "fr-receipts-optional",
    category: ["Media", "Democracy"],
    theySay: "Federal Register receipts are optional homework!",
    youSay: "Daily journal density is how you measure executive action without cable chyron loyalty.",
    stab: "Homework is the point.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "foia-backlog-normal",
    category: ["Democracy", "Media"],
    theySay: "FOIA backlogs are just normal bureaucracy!",
    youSay: "Sunshine delayed is sunshine denied. Backlogs are a transparency failure metric SAFE-004 targets.",
    stab: "Normal is not acceptable.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "kickapoo-permit-local",
    category: ["Democracy", "Culture Wars"],
    theySay: "Kickapoo permit denial is a local zoning spat!",
    youSay: "Presidential memoranda blocking tribal infrastructure are federal power, not HOA drama.",
    stab: "Tribes are not subdivisions.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "ai-speed-over-safety",
    category: ["Economy", "Education"],
    theySay: "AI policy should maximize speed only!",
    youSay: "Speed without enforceable baselines externalizes risk. Innovation rhetoric is not a safety standard.",
    stab: "Move fast still breaks things.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "sports-eo-harmless",
    category: ["Education", "Culture Wars"],
    theySay: "Federal sports EOs are harmless culture!",
    youSay: "Presidential sports mandates are culture-war instruments with agency implications.",
    stab: "Harmless rarely needs an EO.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "fraud-task-force-pure",
    category: ["Democracy", "Economy"],
    theySay: "A presidential fraud task force is automatically pure!",
    youSay: "Narrative power without strong IG independence risks selective enforcement.",
    stab: "Purity claims need inspectors general.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "fema-review-forever-fine",
    category: ["Climate", "Democracy"],
    theySay: "Endless FEMA review is fine governance!",
    youSay: "Indefinite review during accelerating disasters is delay marketed as diligence.",
    stab: "Storms do not wait for councils.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trump-ira-branding-ok",
    category: ["Economy", "Media"],
    theySay: "Presidential retirement branding sites are normal!",
    youSay: "Politicizing benefits infrastructure through EO marketing is not neutral administration.",
    stab: "Dot-gov is not campaign swag.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "both-sides-same-dpa",
    category: ["Whataboutism", "Economy"],
    theySay: "Both sides use DPA the same!",
    youSay: "Waiver scope and oversight still matter. Sameness claims need the documents, not a shrug.",
    stab: "Both-sides needs a spreadsheet.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "history-deep-cuts-bias",
    category: ["Education", "Media"],
    theySay: "Hidden History deep cuts are biased by definition!",
    youSay: "Primary sources from Archives, NPS, and courts are auditable. Bias is refusing the PDFs.",
    stab: "Citations beat vibes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "300-history-enough",
    category: ["Education", "Democracy"],
    theySay: "300 history entries should be enough forever!",
    youSay: "Verifiable room is not a cap. New documents keep arriving; so do old ones people never learned.",
    stab: "Enough is a political word.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "tracker-280-noise",
    category: ["Media", "Democracy"],
    theySay: "280 tracker events are noise!",
    youSay: "Continuity documentation is how patterns become visible. Noise is what power calls a stack of receipts.",
    stab: "Volume can be the signal.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "rebuttal-650-spam",
    category: ["Media", "Education"],
    theySay: "650 rebuttals are spam!",
    youSay: "Sourced counters scale because talking points recycle. Spam is unsourced certainty.",
    stab: "Repetition is the opponent's strategy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-constitutional-myth",
    category: ["Education","Democracy"],
    theySay: "The Constitution was born as pure democracy!",
    youSay: "Closed doors, slavery compromises, and a narrow franchise wrote a republic, not a town meeting.",
    stab: "Minutes beat mythology.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-va-ky-freedom",
    category: ["Democracy","Education"],
    theySay: "Virginia and Kentucky Resolutions were just freedom essays!",
    youSay: "They seeded nullification arguments later used to defend slavery and secession.",
    stab: "States' rights had a body count.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-erie-neutral",
    category: ["Economy","Education"],
    theySay: "The Erie Canal was neutral infrastructure!",
    youSay: "It remade markets, cities, and westward pressure on Native nations. Neutrality is a tourist plaque.",
    stab: "Canals pick winners.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-antietam-nothing",
    category: ["Education","Democracy"],
    theySay: "Antietam changed nothing!",
    youSay: "It stalled Lee and opened the path to the Emancipation Proclamation. That is not nothing.",
    stab: "Bloodiest day, real politics.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-sherman-evil",
    category: ["Foreign Policy","Education"],
    theySay: "Sherman's March was uniquely evil!",
    youSay: "Destroying a slave republic's logistics was strategy. Selective outrage skips the cause of the war.",
    stab: "Property in people was the stakes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hist-credit-mobilier-blip",
    category: ["Economy","Democracy"],
    theySay: "Credit Mobilier was a one-off!",
    youSay: "Congressmen holding contractor stock is a system symptom, not a fluke.",
    stab: "Gilded means covered in gilt.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-pendleton-optional",
    category: ["Democracy", "Economy"],
    theySay: "Civil service exams are optional niceties!",
    youSay: "Garfield's murder by a spoils seeker forced Pendleton. Merit rules exist because patronage kills.",
    stab: "Spoils had a funeral.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-platt-liberation",
    category: ["Foreign Policy","Democracy"],
    theySay: "The Platt Amendment liberated Cuba!",
    youSay: "Intervention rights and treaty limits are occupation by paperwork.",
    stab: "Liberation with a veto is not freedom.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hist-ccc-leaf-raking",
    category: ["Economy", "Education"],
    theySay: "The CCC was leaf-raking!",
    youSay: "Parks, firebreaks, and soil work still stand. Go touch a CCC wall.",
    stab: "Make-work that lasts is called work.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-tva-socialism",
    category: ["Economy"],
    theySay: "TVA proved socialism fails!",
    youSay: "Public power lit a poor valley. Monopoly talking points are not a blackout.",
    stab: "Lights are evidence.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-wpa-ethic",
    category: ["Economy", "Education"],
    theySay: "WPA destroyed work ethic!",
    youSay: "Millions built roads and schools while private markets failed. Ethic lectures do not pave.",
    stab: "Hunger is not a curriculum.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-neutrality-wise",
    category: ["Foreign Policy"],
    theySay: "1930s Neutrality Acts were pure wisdom!",
    youSay: "They constrained Allied aid while fascism expanded. Safety later required choosing sides.",
    stab: "Isolation is not a force field.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hist-hatch-gag",
    category: ["Democracy", "Economy"],
    theySay: "The Hatch Act is a gag order!",
    youSay: "It limits on-the-clock partisan coercion in the civil service. Public pay is not a PAC.",
    stab: "Clock-in is not campaign time.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-atlantic-pure",
    category: ["Foreign Policy"],
    theySay: "The Atlantic Charter meant freedom for all immediately!",
    youSay: "Self-determination language collided with empire. Colonized peoples saw the gap.",
    stab: "Press releases are not decolonization.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hist-truman-narrow",
    category: ["Foreign Policy"],
    theySay: "The Truman Doctrine was narrow and temporary!",
    youSay: "It opened an open-ended containment blank check. Greece and Turkey were the door.",
    stab: "Temporary became decades.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-berlin-food",
    category: ["Foreign Policy","Democracy"],
    theySay: "Berlin Airlift was just food drops!",
    youSay: "It was a sovereignty fight over Europe's capital under blockade.",
    stab: "Calories were the strategy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-interstate-pure",
    category: ["Economy", "Culture Wars"],
    theySay: "Interstates hurt no one!",
    youSay: "Urban demolitions and segregated suburb growth were baked into the maps.",
    stab: "Ramps have victims.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-mapp-technicality",
    category: ["Courts","Democracy"],
    theySay: "Mapp is a technicality for criminals!",
    youSay: "Without exclusion, the Fourth Amendment is a poster. Remedies make rights real.",
    stab: "Warrants need teeth.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-gideon-coddle",
    category: ["Courts","Democracy"],
    theySay: "Gideon just coddles criminals!",
    youSay: "Poverty cannot cancel counsel. Fair trials are not optional upgrades.",
    stab: "Lawyers are due process.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-great-society-fail",
    category: ["Healthcare","Economy"],
    theySay: "Great Society proved government fails!",
    youSay: "Medicare, Medicaid, and voting protections are measurable. Erasure is not analysis.",
    stab: "Seniors still enroll.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-miranda-loophole",
    category: ["Courts","Crime"],
    theySay: "Miranda is only a loophole!",
    youSay: "Innocent people get interrogated. Warnings are the floor of custody, not a cheat code.",
    stab: "Silence is a right.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-camp-david-soft",
    category: ["Foreign Policy"],
    theySay: "Camp David was soft diplomacy!",
    youSay: "A peace treaty after wars is statecraft. Soft is a talk-radio word.",
    stab: "Accords are not vibes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-clinton-impeach-neutral",
    category: ["Democracy","Whataboutism"],
    theySay: "Clinton impeachment was never political!",
    youSay: "Party-line votes and media war say otherwise. Process can be legal and weaponized.",
    stab: "Neutral is not the transcript.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hist-nclb-testing",
    category: ["Education"],
    theySay: "NCLB testing alone fixes schools!",
    youSay: "Measurement without resources becomes punishment. Scores are not a curriculum.",
    stab: "Tests are not teachers.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-tarp-free-market",
    category: ["Economy"],
    theySay: "TARP proved free markets work!",
    youSay: "Socializing bank losses is crisis socialism for capital.",
    stab: "Bailouts are not laissez-faire.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "hist-kansas-lab",
    category: ["Economy"],
    theySay: "Tax cuts always pay for themselves!",
    youSay: "Kansas ran the experiment. The budget bled until taxes rose again.",
    stab: "Lab results beat slogans.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "hist-ira-nothing",
    category: ["Climate","Economy"],
    theySay: "The Inflation Reduction Act did nothing!",
    youSay: "Climate manufacturing, drug-cost tools, and tax enforcement are on the books.",
    stab: "Denial is not a statute.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "hist-loper-housekeeping",
    category: ["Courts","Democracy"],
    theySay: "Loper Bright was quiet housekeeping!",
    youSay: "Ending Chevron shifts policy power from agencies to courts across the regulatory state.",
    stab: "Fish cases move mountains.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "schedule-f-still-fine",
    category: ["Democracy"],
    theySay: "Schedule F is still no big deal!",
    youSay: "At-will conversion of policy roles is the personnel kill switch. Continuity is the point.",
    stab: "Civil service is the target.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "metals-tariff-vibes",
    category: ["Economy"],
    theySay: "Metals tariffs are just tough vibes!",
    youSay: "Proclamations raise input costs across manufacturing. Toughness shows up in prices.",
    stab: "Tariffs are taxes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "dpa-waiver-yawn",
    category: ["Economy","Democracy"],
    theySay: "DPA waivers are yawn-worthy!",
    youSay: "Industrial policy by waiver still needs oversight. Yawns are how capture wins.",
    stab: "Waivers are power.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "housing-eo-stack-ok",
    category: ["Economy","Democracy"],
    theySay: "Housing EO stacks are normal governance!",
    youSay: "Governing housing through cascading orders skips durable statute and public amendment.",
    stab: "Stacks are not statutes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "elections-mandate-fine",
    category: ["Elections","Democracy"],
    theySay: "Citizenship-verification mandates are fine!",
    youSay: "Unfunded mandates that chill lawful voters are not neutral hygiene.",
    stab: "Access is the test.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "fema-review-still",
    category: ["Climate","Democracy"],
    theySay: "Endless FEMA review is still diligence!",
    youSay: "Storms accelerate while councils deliberate. Delay is a policy choice.",
    stab: "Weather does not wait.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "foia-backlog-culture",
    category: ["Democracy","Media"],
    theySay: "FOIA backlogs are just culture!",
    youSay: "Sunshine delayed is sunshine denied. Culture is a euphemism for capacity choices.",
    stab: "Days matter.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "ai-speed-over-safety",
    category: ["Economy","Democracy"],
    theySay: "AI speed must beat safety rules!",
    youSay: "Speed without enforceable baselines socializes catastrophic downside.",
    stab: "Move fast still breaks things.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "lands-dereg-local",
    category: ["Climate", "Democracy"],
    theySay: "Lands deregulation is local freedom!",
    youSay: "Federal public lands are a national trust. Local capture is not liberty by default.",
    stab: "Commons need rules.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "intl-exit-memos-ok",
    category: ["Foreign Policy"],
    theySay: "Treaty-exit memos are routine!",
    youSay: "Unilateral exits rewire alliances without Senate consent theater. Routine is the tell.",
    stab: "Exits have costs.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "kickapoo-permit-local",
    category: ["Democracy","Culture Wars"],
    theySay: "Kickapoo permit denial is a local spat!",
    youSay: "Presidential permit power over tribal infrastructure is national policy, not gossip.",
    stab: "Sovereignty is not a spat.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "college-sports-federal",
    category: ["Education","Culture Wars"],
    theySay: "Federalizing college sports is harmless!",
    youSay: "Culture-war mandates through presidential sports orders are not athletic purity.",
    stab: "Scoreboards are not statutes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "fraud-task-force-optics",
    category: ["Democracy","Economy"],
    theySay: "Fraud task forces are always optics-free!",
    youSay: "Narrative enforcement without strong IG independence risks selective spectacle.",
    stab: "Optics need auditors.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "trump-ira-dotgov",
    category: ["Economy","Media"],
    theySay: "Branding retirement sites after presidents is fine!",
    youSay: "Dot-gov benefits infrastructure is not campaign merch.",
    stab: "IRA.gov is not a rally.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "both-sides-schedule-f",
    category: ["Whataboutism","Democracy"],
    theySay: "Both sides did Schedule F!",
    youSay: "Show the comparable mass at-will conversion order. Slogans are not FOIA results.",
    stab: "Both-sides needs PDFs.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "330-history-cap",
    category: ["Education","Democracy"],
    theySay: "330 history entries should be the ceiling!",
    youSay: "Verifiable room is not a lid. Documents keep existing whether curricula catch up or not.",
    stab: "Ceilings are political.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "tracker-300-noise",
    category: ["Media","Democracy"],
    theySay: "300 tracker events are noise!",
    youSay: "Pattern visibility requires continuity receipts. Noise is what power calls a stack.",
    stab: "Volume can be signal.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "rebuttal-700-spam",
    category: ["Media","Education"],
    theySay: "700 rebuttals are spam!",
    youSay: "Talking points recycle; sourced counters scale with the recycle rate. Spam is unsourced certainty.",
    stab: "Repetition is their strategy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "pass33-enough",
    category: ["Democracy","Education"],
    theySay: "Pass 33 should stop expanding!",
    youSay: "If claims remain verifiable, the desk keeps filing. Stop is a preference, not a standard.",
    stab: "Infinite room, receipts required.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "chevron-was-tyranny",
    category: ["Courts","Democracy"],
    theySay: "Chevron was pure agency tyranny!",
    youSay: "Experts under statute are not kings; judges without elections are not automatically democrats.",
    stab: "Tyranny needs a definition.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "tarp-main-street-first",
    category: ["Economy","Whataboutism"],
    theySay: "Bailouts always hit Main Street first!",
    youSay: "TARP sequenced bank stabilization ahead of homeowner rescue. Sequence is the tell.",
    stab: "First matters.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "great-society-vietnam-cancel",
    category: ["Whataboutism","Healthcare"],
    theySay: "Vietnam cancels Great Society wins!",
    youSay: "War waste does not erase Medicare enrollment. Two things can be true.",
    stab: "Cancel is not accounting.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "marbury-invented-review",
    category: ["Courts","Democracy"],
    theySay: "Judicial review was always explicit!",
    youSay: "Marbury claimed the power; the clause is practice, not a neon sign in Article III.",
    stab: "Practice is not a quote.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "louisiana-was-empty",
    category: ["Education","Democracy"],
    theySay: "Louisiana was empty land!",
    youSay: "Empires traded claims. Native nations were already there.",
    stab: "Empty is a colonial adjective.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "war-1812-clean-win",
    category: ["Foreign Policy","Whataboutism"],
    theySay: "The War of 1812 was a clean win!",
    youSay: "Washington burned and Native allies paid. Clean is marketing.",
    stab: "Check the capital ashes.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "wilmot-not-slavery",
    category: ["Education","Democracy"],
    theySay: "The Mexican War was not about slavery!",
    youSay: "Congress immediately fought the Wilmot Proviso over slave power in new land.",
    stab: "The rider tells the motive.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "bleeding-kansas-local",
    category: ["Education","Crime"],
    theySay: "Bleeding Kansas was a local spat!",
    youSay: "Guerrilla war after Kansas-Nebraska was the Civil War's rehearsal.",
    stab: "Local rifles, national cause.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "pacific-railway-destiny",
    category: ["Economy","Education"],
    theySay: "The railroad was destiny, not policy!",
    youSay: "Pacific Railway land grants were statutes. Destiny had a bill number.",
    stab: "Manifest destiny filed paperwork.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "gettysburg-just-words",
    category: ["Education","Democracy"],
    theySay: "The Gettysburg Address was just poetry!",
    youSay: "It reframed the war as equality's survival test. Poetry with policy stakes.",
    stab: "272 words, huge frame.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "reconstruction-acts-vengeance",
    category: ["Education","Democracy"],
    theySay: "Reconstruction Acts were pure vengeance!",
    youSay: "Black suffrage and new constitutions were the point. Vengeance talk erases citizenship.",
    stab: "Votes are not revenge.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "cruikshank-liberty",
    category: ["Courts","Democracy"],
    theySay: "Cruikshank protected liberty!",
    youSay: "It protected massacre perpetrators from federal accountability after Colfax.",
    stab: "Liberty for killers?",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "populists-were-cranks",
    category: ["Economy","Education"],
    theySay: "Populists were anti-progress cranks!",
    youSay: "They demanded railroad regulation and democratic tools against monopoly.",
    stab: "Crank was the monopoly slur.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "lusitania-forced-war",
    category: ["Foreign Policy","Media"],
    theySay: "Lusitania alone forced WWI entry!",
    youSay: "It shifted opinion; entry still took years, loans, and Zimmermann.",
    stab: "One cause is lazy history.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "zimmermann-fake",
    category: ["Foreign Policy","Media"],
    theySay: "The Zimmermann Telegram was fake news!",
    youSay: "Archives hold the diplomatic text. Denial is not a primary source.",
    stab: "Read the telegram.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "prohibition-proves-bans-work",
    category: ["Crime","Democracy"],
    theySay: "Prohibition proves moral bans always work!",
    youSay: "Black markets and repeal say enforcement without legitimacy fails.",
    stab: "Speakeasies graded the law.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "versailles-isolation-pure",
    category: ["Foreign Policy","Democracy"],
    theySay: "Rejecting Versailles kept America pure!",
    youSay: "Isolation still left loans, empires, and a later world war.",
    stab: "Purity is not a strategy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "sitdown-was-thuggery",
    category: ["Economy","Crime"],
    theySay: "Sit-down strikes were pure thuggery!",
    youSay: "Occupying GM forced UAW recognition after starvation wages.",
    stab: "Manners do not pay rent.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "four-freedoms-slogans",
    category: ["Foreign Policy","Education"],
    theySay: "Four Freedoms were empty slogans!",
    youSay: "They shaped Atlantic Charter language and postwar rights talk.",
    stab: "Slogans steered treaties.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "bretton-markets-alone",
    category: ["Economy","Foreign Policy"],
    theySay: "Bretton Woods was free markets alone!",
    youSay: "Governments designed the IMF and World Bank. Architecture is statecraft.",
    stab: "Markets did not convene themselves.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "eo9981-ended-racism",
    category: ["Democracy","Whataboutism"],
    theySay: "EO 9981 ended military racism overnight!",
    youSay: "Orders start processes; unequal treatment persisted for years.",
    stab: "Paper is not culture.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "nsc68-no-plan",
    category: ["Foreign Policy","Democracy"],
    theySay: "There was no Cold War militarization plan!",
    youSay: "NSC-68 urged permanent buildup in writing.",
    stab: "The memo exists.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "bay-pigs-cost-free",
    category: ["Foreign Policy","Whataboutism"],
    theySay: "Covert wars are cost-free!",
    youSay: "Bay of Pigs failed on television. Blowback is a cost.",
    stab: "Covert still burns.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "tonkin-narrow",
    category: ["Foreign Policy","Democracy"],
    theySay: "Gulf of Tonkin was a narrow vote!",
    youSay: "It became a blank check for Vietnam escalation.",
    stab: "Narrow was the brochure.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "kerner-ignored-pathology",
    category: ["Democracy","Media"],
    theySay: "Kerner ignored Black pathology!",
    youSay: "The commission blamed white racism and segregation in plain English.",
    stab: "Pathology was the dodge.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "era-unnecessary",
    category: ["Democracy","Education"],
    theySay: "The ERA was unnecessary!",
    youSay: "If equality was finished, ratification would have been easy.",
    stab: "Opposition proved the gap.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "prop13-no-tradeoff",
    category: ["Economy","Education"],
    theySay: "Prop 13 cut taxes with no service tradeoff!",
    youSay: "Caps without replacement revenue cut schools and local capacity.",
    stab: "Arithmetic is undefeated.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "patco-unique",
    category: ["Economy","Democracy"],
    theySay: "PATCO was a one-off labor spat!",
    youSay: "Mass firings signaled open season on public-sector unions.",
    stab: "Employers heard the shot.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "contract-just-process",
    category: ["Democracy","Economy"],
    theySay: "Contract with America was just process reform!",
    youSay: "It pledged welfare cuts and deregulation. Process was branding.",
    stab: "Read the promises.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "welfare-reform-fixed-poverty",
    category: ["Economy","Healthcare"],
    theySay: "1996 welfare reform ended poverty!",
    youSay: "It ended AFDC entitlement; poverty cycles and state gaps remained.",
    stab: "Caseloads are not dignity.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "aumf-temporary",
    category: ["Foreign Policy","Democracy"],
    theySay: "The 2001 AUMF was temporary!",
    youSay: "Administrations reused it for years of global operations.",
    stab: "Temporary became doctrine.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "surge-won-iraq",
    category: ["Foreign Policy","Whataboutism"],
    theySay: "The surge proved Iraq was won!",
    youSay: "More troops is not a verdict; costs outlasted the slogan.",
    stab: "Surge is not closure.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "bruen-history-settles",
    category: ["Courts","Democracy"],
    theySay: "Bruen history settles every gun law!",
    youSay: "Selective analogues become a judicial veto, not a time machine.",
    stab: "History is sampled.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "360-history-cap",
    category: ["Education","Democracy"],
    theySay: "360 history entries should be the ceiling!",
    youSay: "Verifiable room is not a lid. Documents keep existing whether curricula catch up or not.",
    stab: "Ceilings are political.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "tracker-320-noise",
    category: ["Media","Democracy"],
    theySay: "320 tracker events are noise!",
    youSay: "Pattern visibility requires continuity receipts. Noise is what power calls a stack.",
    stab: "Volume can be signal.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "rebuttal-750-spam",
    category: ["Media","Education"],
    theySay: "750 rebuttals are spam!",
    youSay: "Talking points recycle; sourced counters scale with the recycle rate.",
    stab: "Repetition is their strategy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "pass34-enough",
    category: ["Democracy","Education"],
    theySay: "Pass 34 should stop expanding!",
    youSay: "If claims remain verifiable, the desk keeps filing. Stop is a preference, not a standard.",
    stab: "Infinite room, receipts required.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "schedule-f-both-sides-again",
    category: ["Whataboutism","Democracy"],
    theySay: "Both sides did Schedule F at this scale!",
    youSay: "Show the comparable mass at-will conversion order. Slogans are not FOIA results.",
    stab: "Both-sides needs PDFs.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "tariffs-are-free",
    category: ["Economy","Whataboutism"],
    theySay: "Tariffs are a free lunch for workers!",
    youSay: "Input costs rise for manufacturers and consumers. Lunch has a receipt.",
    stab: "Prices are not slogans.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "dpa-waivers-normal-p34",
    category: ["Economy","Democracy"],
    theySay: "DPA waivers are just normal peacetime tools!",
    youSay: "Industrial directing without transparency baselines is emergency politics as default.",
    stab: "Normal needs sunlight.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "housing-eos-enough-p34",
    category: ["Economy","Democracy"],
    theySay: "Housing EOs alone fix shelter!",
    youSay: "Stacked proclamations are not durable statute or funding.",
    stab: "Orders are not roofs.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "citizenship-check-harmless-p34",
    category: ["Elections","Immigration"],
    theySay: "Citizenship verification mandates are harmless!",
    youSay: "Compliance burdens and error risk fall on eligible voters and local clerks.",
    stab: "Harmless is not a metric.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "fema-review-forever-fine-p34",
    category: ["Climate","Democracy"],
    theySay: "Indefinite FEMA review is fine!",
    youSay: "Disaster governance under endless review is delay dressed as diligence.",
    stab: "Review is not response.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "foia-backlog-inevitable",
    category: ["Media","Democracy"],
    theySay: "FOIA backlogs are inevitable!",
    youSay: "Backlogs are management choices about staffing and exemptions culture.",
    stab: "Inevitable is a shrug.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "lands-local-control",
    category: ["Climate","Economy"],
    theySay: "Lands deregulation is just local control!",
    youSay: "Federal defaults still steer extraction vs conservation at national scale.",
    stab: "Local talk, federal levers.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "intl-exit-sovereignty",
    category: ["Foreign Policy","Democracy"],
    theySay: "Leaving international orgs is pure sovereignty!",
    youSay: "Exit memos still need public accounting for alliances and obligations dumped.",
    stab: "Sovereignty is not secrecy.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "kickapoo-not-pattern",
    category: ["Democracy","Economy"],
    theySay: "Kickapoo permitting is a one-off!",
    youSay: "Indigenous projects hitting federal choke points is a recurring pattern, not a fluke.",
    stab: "One-off needs evidence.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "college-sports-harmless-brand",
    category: ["Education","Culture Wars"],
    theySay: "Federal sports branding is harmless!",
    youSay: "It inserts national politics into athletics governance fights.",
    stab: "Brand is not neutral.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "fraud-task-force-metrics",
    category: ["Democracy","Media"],
    theySay: "Fraud task forces prove results by existing!",
    youSay: "Without public metrics, branding outruns audit.",
    stab: "Existence is not evidence.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "ira-rebrand-erases-law",
    category: ["Climate","Economy"],
    theySay: "Rebranding the IRA erases the statute!",
    youSay: "Statutes remain until Congress repeals them. Branding is politics, not deletion.",
    stab: "Dotgov is not repeal.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "de-minimis-toggle-stable",
    category: ["Economy","Democracy"],
    theySay: "Customs toggles are stable policy!",
    youSay: "Presidential de minimis flips are the opposite of stable statute.",
    stab: "Toggle is the tell.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "medium",
    relatedClaims: [],
  },
  {
    id: "appropriations-by-proclamation-ok",
    category: ["Democracy","Economy"],
    theySay: "Appropriations-by-proclamation is fine!",
    youSay: "Spending execution outside committee sunlight weakens legislative power of the purse.",
    stab: "Purse needs daylight.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "hard",
    relatedClaims: [],
  },
  {
    id: "critical-pay-memo-harmless",
    category: ["Democracy","Economy"],
    theySay: "Critical-pay memos are harmless HR!",
    youSay: "Standing exception tracks still deserve public criteria and oversight.",
    stab: "HR can be power.",
    sources: [
      cite(
        "archives_edu",
        "National Archives Education",
        "National Archives",
        "https://www.archives.gov/education",
        "Primary sources enable independent verification of historical claims.",
        "2020-01-01"
      ),
      cite(
        "fr_home",
        "Federal Register",
        "National Archives",
        "https://www.federalregister.gov/",
        "Official daily journal of federal rules and notices.",
        "2025-01-01"
      ),
      cite(
        "gao_about",
        "What GAO Does",
        "U.S. Government Accountability Office",
        "https://www.gao.gov/about/what-gao-does",
        "GAO provides nonpartisan audits and investigations for Congress.",
        "2024-01-01"
      )
    ],
    difficulty: "easy",
    relatedClaims: [],
  },
  {
    id: "kamala-would-have-been-worse",
    category: ["Whataboutism", "Democracy", "Elections", "Economy"],
    theySay:
      "If Kamala would have gotten in it would have been much worse! We dodged a bullet!",
    youSay:
      "That line is projection dressed up as prophecy. It invents a catastrophic Harris future so you don't have to defend the documented Trump present. Harris ran on extending ACA premium tax credits, expanding drug-price negotiation, protecting reproductive rights as healthcare, and building on the Inflation Reduction Act's clean-energy jobs. Those are boring, measurable platform planks Tax Foundation, KFF, and campaign policy books already scored. What you actually got instead is Project 2025-aligned governance: Schedule F civil-service purges, DOGE-style outsourcing of agency power to unelected allies, tariff taxes paid by American importers and households, reproductive-rights rollbacks, and open contempt for the 2020 election and January 6 accountability. CBO and Tax Foundation model tariffs as a tax on U.S. buyers, not a magic China invoice. Brennan Center and court records document the election-denial and Jan 6 record. The gaslight is calling a normal Democratic platform 'destroying America' while treating Schedule F, rights rollbacks, and consumer-paid tariffs as patriotic. 'Much worse' is not evidence. It is a coping slogan for people who cannot look at Federal Register actions, GAO warnings, and price tags and still pretend hypothetical Kamala is the emergency.",
    stab:
      "You are not dodging a bullet. You are eating the tariff, the purge, and the rights rollback, then blaming a woman who never got the keys for the mess you voted for.",
    sources: [
      cite(
        "harris_policy_book_2024",
        "A New Way Forward for the Middle Class (Harris 2024 Policy Book)",
        "Harris-Walz Campaign",
        "https://www.kamalaharris.com/wp-content/uploads/2024/09/Policy_Book_Economic-Opportunity.pdf",
        "Harris 2024 economic policy book details permanent ACA tax-credit enhancements, drug-cost relief, housing cost measures, and clean-energy cost cuts for households.",
        "2024-09-01"
      ),
      cite(
        "taxfoundation_harris_2024",
        "Kamala Harris Tax Plan 2024: Details and Analysis",
        "Tax Foundation",
        "https://taxfoundation.org/research/all/federal/kamala-harris-tax-plan-2024/",
        "Tax Foundation analyzed Harris 2024 tax and credit proposals, including ACA premium tax credit permanence and high-earner revenue measures, as a scored platform rather than vibes.",
        "2024-10-07"
      ),
      cite(
        "kff_aca_credits",
        "ACA Marketplace Premium Payments if Enhanced Tax Credits Expire",
        "Kaiser Family Foundation",
        "https://www.kff.org/affordable-care-act/aca-marketplace-premium-payments-would-more-than-double-on-average-next-year-if-enhanced-premium-tax-credits-expire/",
        "KFF estimated enhanced ACA premium tax credits more than double average subsidized premiums if they expire, the exact coverage cliff Harris pledged to prevent.",
        "2025-11-08"
      ),
      cite(
        "taxfoundation_tariffs_rebut",
        "Trump Tariffs Tracker and Household Cost Estimates",
        "Tax Foundation",
        "https://taxfoundation.org/research/all/federal/trump-tariffs/",
        "Tax Foundation documents that U.S. importers pay tariff revenue and that costs pass through to American households and firms.",
        "2025-01-01"
      ),
      cite(
        "cbo_budget_options",
        "Congressional Budget Office",
        "Congressional Budget Office",
        "https://www.cbo.gov/",
        "CBO scorekeeping treats tariffs and major fiscal policies as domestic budget and price effects, not foreign gifts.",
        "2025-01-01"
      ),
      cite(
        "project2025_policy",
        "Project 2025 Policy Agenda",
        "Heritage Foundation / Project 2025",
        "https://www.project2025.org/policy/",
        "Project 2025 published an explicit conservative governing manual covering agency restructuring, civil service, and social policy priorities now echoed in executive actions.",
        "2023-04-21"
      ),
      cite(
        "cpr_p2025_tracker",
        "Project 2025 Executive Action Tracker",
        "Center for Progressive Reform",
        "https://progressivereform.org/tracking-trump-2/project-2025-executive-action-tracker/",
        "CPR tracks Project 2025 domestic administrative agenda items initiated or completed through executive action.",
        "2026-02-01"
      ),
      cite(
        "crs_schedule_f",
        "Schedule F and the Civil Service",
        "Congressional Research Service",
        "https://crsreports.congress.gov/",
        "CRS analyzes Schedule F reclassification of career policy roles into at-will political appointments.",
        "2025-01-01"
      ),
      cite(
        "brennan_jan6",
        "January 6 and Election Denial Documentation",
        "Brennan Center for Justice",
        "https://www.brennancenter.org/",
        "Brennan Center documents election-subversion efforts, voting restrictions, and democratic-norm erosion surrounding Jan 6 and subsequent denial politics.",
        "2025-01-01"
      ),
      cite(
        "ap_jan6",
        "AP Fact Check and January 6 Coverage Hub",
        "Associated Press",
        "https://apnews.com/hub/capitol-siege",
        "AP reporting and fact checks document the Capitol attack, convictions, and false stolen-election claims used to justify political violence.",
        "2025-01-01"
      ),
      cite(
        "factcheck_election_claims",
        "FactCheck.org Election and Policy Claims",
        "FactCheck.org",
        "https://www.factcheck.org/",
        "FactCheck.org archives false and misleading claims about elections, governance, and policy outcomes used in whataboutism and doomsday framing.",
        "2025-01-01"
      ),
      cite(
        "guttmacher_access",
        "Abortion and Reproductive Health Access Data",
        "Guttmacher Institute",
        "https://www.guttmacher.org/",
        "Guttmacher tracks clinic closures, travel burdens, and health harms after Dobbs, the rights landscape Harris pledged to protect and opponents celebrated restricting.",
        "2025-01-01"
      ),
    ],
    difficulty: "hard",
    relatedClaims: [
      "project-2025-doesnt-exist",
      "p2025-just-suggestions",
      "schedule-f-necessary",
      "tariffs-win-trade",
      "tariffs-are-paid-by-china",
      "election-stolen",
      "jan-6-tourist-visit",
      "whataboutism-pattern",
      "both-sides-equivalence",
      "unelected-billionaires",
    ],
    searchAliases: [
      "kamala worse",
      "harris worse",
      "kamala would have been worse",
      "harris would have been worse",
      "dodged a bullet",
      "if kamala won",
      "if harris won",
      "kamala would have destroyed america",
      "we dodged a bullet with kamala",
      "kamala much worse than trump",
    ],
  },
];

const CATEGORY_SLUG_MAP: Record<RebuttalCategory, string> = {
  Economy: "economy",
  Immigration: "immigration",
  "But Obama!": "but-obama",
  Courts: "courts",
  "Jan 6": "jan-6",
  Healthcare: "healthcare",
  Crime: "crime",
  Elections: "elections",
  Climate: "climate",
  "Culture Wars": "culture-wars",
  Media: "media",
  Democracy: "democracy",
  Whataboutism: "whataboutism",
  "Foreign Policy": "foreign-policy",
  Education: "education",
};

const SLUG_CATEGORY_MAP = Object.fromEntries(
  Object.entries(CATEGORY_SLUG_MAP).map(([cat, slug]) => [slug, cat])
) as Record<string, RebuttalCategory>;

export const rebuttalCategorySlugs = Object.values(CATEGORY_SLUG_MAP);

export function rebuttalCategorySlug(category: RebuttalCategory): string {
  return CATEGORY_SLUG_MAP[category];
}

export function rebuttalCategoryFromSlug(slug: string): RebuttalCategory | undefined {
  return SLUG_CATEGORY_MAP[slug];
}

export function rebuttalCategoryPath(category: RebuttalCategory): string {
  return `/rebuttal/category/${rebuttalCategorySlug(category)}`;
}

export function getRebuttalsByCategory(category: RebuttalCategory): ConversationHelper[] {
  return conversationHelpers.filter((h) => h.category.includes(category));
}

export function getConversationHelperById(id: string): ConversationHelper | undefined {
  return conversationHelpers.find((h) => h.id === id);
}

export function rebuttalDetailPath(rebuttalId: string): string {
  return `/rebuttal/${encodeURIComponent(rebuttalId)}`;
}
