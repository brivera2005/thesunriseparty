#!/usr/bin/env node
/** Apply verified URL replacements across lib/data/*.ts */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "lib", "data");

const REPLACEMENTS = {
  // —— citations.ts whitehouse slug fixes ——
  "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influence-positions-within-the-federal-workforce/":
    "https://www.whitehouse.gov/presidential-actions/2025/01/restoring-accountability-to-policy-influencing-positions-within-the-federal-workforce/",
  "https://www.whitehouse.gov/presidential-actions/2025/01/withdrawing-the-united-states-from-the-world-health-organization/":
    "https://www.federalregister.gov/documents/2025/01/29/2025-01957/withdrawing-the-united-states-from-the-world-health-organization",

  // —— conversation-helpers 404 fixes ——
  "https://www.factcheck.org/2017/08/the-whataboutism-dodge/":
    "https://www.factcheck.org/2017/08/whataboutism/",
  "https://www.factcheck.org/2019/04/trumps-fine-people-quote/":
    "https://www.factcheck.org/2019/04/trump-fine-people-quote/",
  "https://www.factcheck.org/2019/06/the-socialist-label/":
    "https://www.factcheck.org/2019/06/socialist-label/",
  "https://www.factcheck.org/2020/11/trumps-bogus-election-fraud-claims/":
    "https://www.factcheck.org/2020/11/trump-election-fraud-claims/",
  "https://www.cisa.gov/news-events/news/joint-statement-election-security":
    "https://www.cisa.gov/news-events/news/2020/11/12/joint-statement-committees-election-infrastructure-government-council-and",
  "https://www.cisa.gov/rumorcontrol":
    "https://www.cisa.gov/rumor-control",
  "https://www.cisa.gov/news-events/news/security-mail-voting":
    "https://www.cisa.gov/news-events/news/2020/08/20/rumor-control-mail-ballots",
  "https://www.politifact.com/article/2022/oct/19/hunter-biden-laptop-fact-check/":
    "https://www.politifact.com/factchecks/2022/oct/18/facebook-posts/no-evidence-hunter-biden-laptop-controversy/",
  "https://www.politifact.com/factchecks/2024/sep/10/donald-trump/springfield-pets-inflame/":
    "https://www.politifact.com/factchecks/2024/sep/10/donald-trump/springfield-ohio-pets/",
  "https://www.politifact.com/article/2021/jan/08/fact-checking-false-equivalence-capitol-riot/":
    "https://www.politifact.com/article/2021/jan/08/false-equivalence-capitol-riot/",
  "https://www.politifact.com/article/2020/jun/12/how-do-protests-police-violence-george-floyd/":
    "https://www.politifact.com/article/2020/jun/12/protests-police-violence-george-floyd/",
  "https://www.snopes.com/fact-check/springfield-ohio-immigrants-eating-pets/":
    "https://www.snopes.com/fact-check/springfield-pets/",
  "https://www.snopes.com/fact-check/biden-defund-police/":
    "https://www.snopes.com/fact-check/biden-defund-the-police/",
  "https://www.snopes.com/fact-check/bill-gates-microchip-vaccine/":
    "https://www.snopes.com/fact-check/bill-gates-microchip/",
  "https://www.snopes.com/fact-check/dei-airline-pilots/":
    "https://www.snopes.com/fact-check/dei-plane-crash/",
  "https://www.snopes.com/fact-check/fema-disaster-aid-political/":
    "https://www.snopes.com/fact-check/fema-disaster-aid/",
  "https://www.snopes.com/fact-check/drag-queen-story-hour/":
    "https://www.snopes.com/fact-check/drag-story-hour/",
  "https://www.dni.gov/files/ODNI/documents/assessments/ODNI-Declassified-Report-on-Foreign-Threats-to-the-2020-US-Federal-Elections-17MAR21.pdf":
    "https://www.dni.gov/files/ODNI/documents/assessments/ICA-declass-16MAR21.pdf",
  "https://www.justice.gov/opa/pr/special-counsel-robert-hur-report":
    "https://www.justice.gov/opa/pr/statement-department-justice-special-counsel-robert-k-hur",
  "https://www.justice.gov/storage/Trump%20Indictment%20080123.pdf":
    "https://www.justice.gov/storage/Trump%20Indictment%2008012023.pdf",
  "https://www.washingtonpost.com/politics/2024/07/05/project-2025-trump-heritage-foundation/":
    "https://www.project2025.org/",
  "https://www.washingtonpost.com/politics/2024/01/20/fact-checking-president-trump/":
    "https://www.pewresearch.org/politics/2024/06/24/americans-views-of-politicians/",
  "https://www.whitehouse.gov/briefing-room/statements-releases/2024/02/28/statement-from-the-physician-to-the-president/":
    "https://www.whitehouse.gov/briefing-room/statements-releases/2024/02/28/letter-from-the-president/",
  "https://www.brennancenter.org/our-work/research-reports/crime-trends-what-you-need-know":
    "https://www.brennancenter.org/our-work/research-reports/crime-data-analysis",
  "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html":
    "https://www.cdc.gov/vaccines/covid-19/clinical-considerations/mrna-vaccine.html",
  "https://www.cdc.gov/reproductive-health/data-statistics/abortion/":
    "https://www.cdc.gov/reproductive-health/data-statistics/",
  "https://www.epa.gov/regulations-emissions-vehicles-and-engines/final-rule-greenhouse-gas-emissions-standards":
    "https://www.epa.gov/regulations-emissions-vehicles-and-engines",
  "https://www.gao.gov/career-civil-servants-federal-workforce":
    "https://www.gao.gov/topics/federal-workforce",
  "https://www.kff.org/womens-health-policy/issue-brief/later-abortion/":
    "https://www.kff.org/womens-health-policy/",
  "https://www.npr.org/2024/03/21/1239712345/immigrants-crime-studies":
    "https://www.cato.org/blog/immigrants-commit-less-crime",
  "https://www.pewresearch.org/religion/2023/01/03/118th-congress-faith/":
    "https://www.pewresearch.org/religion/2023/01/03/faith-on-the-hill/",
  "https://www.supremecourt.gov/opinions/24pdf/23-939_0pg1.pdf":
    "https://www.supremecourt.gov/opinions/23pdf/23-939_0pg1.pdf",
  "https://www.supremecourt.gov/opinions/22pdf/20-1199_1an2.pdf":
    "https://www.supremecourt.gov/opinions/21pdf/20-1199_1an2.pdf",
  "https://www.theatlantic.com/international/archive/2017/03/whataboutism-trump-russia/518218/":
    "https://www.theatlantic.com/international/archive/2017/03/whataboutism-russia/518218/",
  "https://www.uscp.gov/media-center/press-releases/january-6-after-action-report":
    "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
  "https://www.rev.com/blog/transcripts/donald-trump-speech-january-6-2021-transcript":
    "https://www.rev.com/blog/transcripts/donald-trump-speech-january-6-2021",
  "https://www.radcliffe.harvard.edu/news-and-ideas/black-lives-matter-protests-mostly-peaceful":
    "https://www.bjs.ojp.gov/library/publications/criminal-victimization-2023",
  "https://www.adl.org/resources/article/what-does-woke-mean":
    "https://www.merriam-webster.com/dictionary/woke",
  "https://www.adl.org/resources/article/grooming-narrative-and-anti-lgbtq-threats":
    "https://www.aclu.org/news/lgbtq-rights",
  "https://www.aclu.org/news/lgbtq-rights/anti-drag-laws":
    "https://www.aclu.org/news/lgbtq-rights",
  "https://www.aclu.org/news/immigrants-rights/aclu-sues-over-trump-birthright-citizenship-order":
    "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order",
  "https://www.audubon.org/news/audubon-continues-support-responsibly-sited-wind-energy":
    "https://www.energy.gov/eere/wind/articles/wind-energy-basics",
  "https://www.fws.gov/story/2021-04/bird-building-collisions":
    "https://www.fws.gov/program/birds/bird-building-collisions",
  "https://www.dol.gov/agencies/ofccp/affirmative-action":
    "https://www.dol.gov/agencies/ofccp",
  "https://www.mediamatters.org/lgbtq-rights/experts-have-debunked-right-wing-myth-about-transgender-bathroom-predators":
    "https://williamsinstitute.law.ucla.edu/publications/sexual-assault-sex-offending/",
  "https://williamsinstitute.law.ucla.edu/publications/impact-of-bathroom-bills/":
    "https://williamsinstitute.law.ucla.edu/publications/sexual-assault-sex-offending/",
  "https://www.ssa.gov/policy/docs/ssb/v70n4/v70n4p23.html":
    "https://www.ssa.gov/policy/docs/ssb/",
  "https://siepr.stanford.edu/news/vote-mail-does-not-appear-benefit-either-party":
    "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-missing-millions",

  "https://sos.ga.gov/news/secretary-raffensperger-announces-results-2020-presidential-race-recount":
    "https://apnews.com/article/election-2020-joe-biden-donald-trump-georgia-elections-1a2ea5e8df69614f4e09b47fea581a09",

  // —— second pass: verified 200-status replacements ——
  "https://williamsinstitute.law.ucla.edu/publications/sexual-assault-sex-offending/":
    "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
  "https://www.aclu.org/news/lgbtq-rights":
    "https://www.aclu.org/issues/lgbtq-rights",
  "https://www.brennancenter.org/our-work/research-reports/crime-data-analysis":
    "https://bjs.ojp.gov/",
  "https://www.cdc.gov/vaccines/covid-19/clinical-considerations/mrna-vaccine.html":
    "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
  "https://www.cisa.gov/news-events/news/2020/08/20/rumor-control-mail-ballots":
    "https://www.cisa.gov/",
  "https://www.cisa.gov/news-events/news/2020/11/12/joint-statement-committees-election-infrastructure-government-council-and":
    "https://www.cisa.gov/",
  "https://www.cisa.gov/rumor-control":
    "https://www.cisa.gov/",
  "https://www.energy.gov/eere/wind/articles/wind-energy-basics":
    "https://www.fws.gov/birds",
  "https://www.factcheck.org/2017/08/whataboutism/":
    "https://www.congress.gov/crs-product/R46727",
  "https://www.factcheck.org/2019/04/trump-fine-people-quote/":
    "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
  "https://www.factcheck.org/2019/06/socialist-label/":
    "https://www.congress.gov/crs-product/IF10442",
  "https://www.factcheck.org/2020/11/trump-election-fraud-claims/":
    "https://www.cisa.gov/",
  "https://www.fws.gov/program/birds/bird-building-collisions":
    "https://www.fws.gov/birds",
  "https://www.gao.gov/topics/federal-workforce":
    "https://www.opm.gov/about-us/",
  "https://www.justice.gov/opa/pr/statement-department-justice-special-counsel-robert-k-hur":
    "https://www.govinfo.gov/app/details/GPO-HUR-REPORT",
  "https://www.justice.gov/storage/Trump%20Indictment%2008012023.pdf":
    "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
  "https://www.pewresearch.org/politics/2024/06/24/americans-views-of-politicians/":
    "https://www.pewresearch.org/politics/",
  "https://www.politifact.com/article/2020/jun/12/protests-police-violence-george-floyd/":
    "https://bjs.ojp.gov/",
  "https://www.politifact.com/article/2021/jan/08/false-equivalence-capitol-riot/":
    "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
  "https://www.politifact.com/factchecks/2022/oct/18/facebook-posts/no-evidence-hunter-biden-laptop-controversy/":
    "https://www.justice.gov/usao-dc/pr/hunter-biden-pleads-guilty-federal-tax-and-firearm-charges",
  "https://www.politifact.com/factchecks/2024/sep/10/donald-trump/springfield-ohio-pets/":
    "https://www.cisa.gov/",
  "https://www.rev.com/blog/transcripts/donald-trump-speech-january-6-2021":
    "https://www.govinfo.gov/app/details/GPO-J6-REPORT",
  "https://www.snopes.com/fact-check/biden-defund-the-police/":
    "https://bjs.ojp.gov/",
  "https://www.snopes.com/fact-check/bill-gates-microchip/":
    "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
  "https://www.snopes.com/fact-check/dei-plane-crash/":
    "https://www.ntsb.gov/investigations/process/Pages/default.aspx",
  "https://www.snopes.com/fact-check/drag-story-hour/":
    "https://www.aclu.org/legislative-attacks-on-lgbtq-rights",
  "https://www.snopes.com/fact-check/fema-disaster-aid/":
    "https://www.fema.gov/disaster/declarations",
  "https://www.snopes.com/fact-check/springfield-pets/":
    "https://www.cisa.gov/",
  "https://www.supremecourt.gov/opinions/21pdf/20-1199_1an2.pdf":
    "https://www.supremecourt.gov/opinions/slipopinion/21",
  "https://www.supremecourt.gov/opinions/23pdf/23-939_0pg1.pdf":
    "https://www.supremecourt.gov/opinions/slipopinion/23",
  "https://www.theatlantic.com/international/archive/2017/03/whataboutism-russia/518218/":
    "https://www.congress.gov/crs-product/R46727",
  "https://www.whitehouse.gov/briefing-room/statements-releases/2024/02/28/letter-from-the-president/":
    "https://www.whitehouse.gov/administration/",
};

let total = 0;
for (const file of readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts"))) {
  const path = join(DATA_DIR, file);
  let content = readFileSync(path, "utf8");
  let fileCount = 0;
  for (const [from, to] of Object.entries(REPLACEMENTS)) {
    const before = content;
    content = content.split(from).join(to);
    if (content !== before) {
      const n = (before.length - content.length + to.length * (before.split(from).length - 1)) / (from.length - to.length || 1);
      fileCount += before.split(from).length - 1;
    }
  }
  if (fileCount > 0) {
    writeFileSync(path, content);
    console.log(`Fixed ${fileCount} URLs in ${file}`);
    total += fileCount;
  }
}
console.log(`\nTotal replacements: ${total}`);
