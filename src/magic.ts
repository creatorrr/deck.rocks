// magic.ts

import cyrb53 from "cyrb53";
import grammarify from "grammarify";
import Quote from "inspirational-quotes";

import { memoize } from "./clients/cache";
import searchImages from "./clients/pexels";
import calcMarketSize from "./infer/calcMarketSize";
import genStartupName from "./infer/genStartupName";
import genLogos from "./infer/genLogos";
import genHowWillWeMakeMoney from "./infer/genHowWillWeMakeMoney";
import genTagline from "./infer/genTagline";
import genProblemStatement from "./infer/genProblemStatement";
import genTopics from "./infer/genTopics";
import genVerdicts from "./infer/genVerdicts";
import genJargonExplanation from "./infer/genJargonExplanation";
import predictBusinessModel from "./infer/predictBusinessModel";
import findSimilarProducts from "./producthunt/findSimilarProducts";
import { getOwenWow } from "./utils/apis";
import { awaitAll, withTimeout } from "./utils/async";

import { debug, defaultTaskTimeout } from "./env";

const all = (...procs: any[]) =>
  withTimeout(defaultTaskTimeout, awaitAll, ...procs);

async function magic(idea: string) {
  const hash = cyrb53(idea);
  console.time(`magic-${hash}`);
  debug && console.debug("starting magic");

  console.time(`magic-${hash}:phase1`);
  let [
    name,
    tagline,
    problem,
    keywords,
    verdicts,
    rationale,
    quote,
    owenWow,
    competition,
    businessModel,
    logos,
  ] = await all(
    genStartupName(idea),
    genTagline(idea),
    genProblemStatement(idea),
    genTopics(idea),
    genVerdicts(idea),
    genJargonExplanation(idea),
    Quote.getQuote(),
    getOwenWow(),
    findSimilarProducts(idea, 1, 3),
    predictBusinessModel(idea),
    genLogos(idea, 1)
  );

  debug && console.debug("phase 1");
  console.timeEnd(`magic-${hash}:phase1`);

  console.time(`magic-${hash}:phase2`);

  let [stockImages, marketSize, howWillWeMakeMoney] = await all(
    searchImages(keywords),
    calcMarketSize(keywords),
    genHowWillWeMakeMoney(idea, businessModel)
  );

  name = name.trim();
  keywords = keywords.trim();

  problem = grammarify.clean(problem);
  rationale = grammarify.clean(rationale);
  howWillWeMakeMoney = grammarify.clean(howWillWeMakeMoney);

  debug && console.debug("phase 2");
  console.timeEnd(`magic-${hash}:phase2`);

  const result = {
    idea,
    businessModel,
    name,
    tagline,
    problem,
    keywords,
    verdicts,
    rationale,
    howWillWeMakeMoney,
    marketSize,
    logos,
    stockImages,
    quote,
    owenWow,
    competition,
  };

  debug && console.debug("magic", result);
  console.timeEnd(`magic-${hash}`);

  return result;
}

export type Magic = Awaited<ReturnType<typeof magic>>;
export default memoize(magic, false); // Dont evict
