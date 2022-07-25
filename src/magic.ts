// magic.ts

import grammarify from "grammarify";
import Quote from "inspirational-quotes";
import { startCase } from "lodash";

import { memoize } from "./clients/cache";
import searchImages from "./clients/pexels";
import calcMarketSize from "./infer/calcMarketSize";
import genStartupName from "./infer/genStartupName";
import genLogos from "./infer/genLogos";
import genHowWillWeMakeMoney from "./infer/genHowWillWeMakeMoney";
import genTagline from "./infer/genTagline";
import genProblemStatement from "./infer/genProblemStatement";
import genTopics from "./infer/genTopics";
import genYoBeReal from "./infer/genYoBeReal";
import genJargonExplanation from "./infer/genJargonExplanation";
import predictBusinessModel from "./infer/predictBusinessModel";
import edited from "./openai/edited";
import findSimilarProducts from "./producthunt/findSimilarProducts";
import { getOwenWow } from "./utils/apis";

import { debug } from "./env";

async function magic({ idea }) {
  console.time("magic");
  debug && console.debug("starting magic");

  console.time("phase1");
  const [
    name,
    tagline,
    problem,
    keywords,
    verdict,
    rationale,
    _editedIdea,
    quote,
    owenWow,
    competition,
    howWillWeMakeMoney,
    marketSize,
    logos,
  ] = await Promise.all([
    genStartupName(idea),
    genTagline(idea),
    genProblemStatement(idea),
    genTopics(idea),
    genYoBeReal(idea),
    genJargonExplanation(idea),
    edited(idea),
    Quote.getQuote(),
    getOwenWow(),
    findSimilarProducts(idea, 1, 3),
    genHowWillWeMakeMoney(idea),
    calcMarketSize(idea),
    genLogos(idea, 1),
  ]);

  debug && console.debug("phase 1");
  console.timeEnd("phase1");

  const editedIdea = _editedIdea ? _editedIdea[0].text : idea;

  console.time("phase2");

  const [stockImages, businessModel] = await Promise.all([
    searchImages(keywords),
    predictBusinessModel(howWillWeMakeMoney),
  ]);

  debug && console.debug("phase 2");
  console.timeEnd("phase2");

  const result = {
    editedIdea,
    idea,
    businessModel: grammarify.clean(businessModel),
    name,
    tagline: startCase(tagline),
    problem: grammarify.clean(problem),
    keywords,
    verdict,
    rationale: grammarify.clean(rationale),
    howWillWeMakeMoney: grammarify.clean(howWillWeMakeMoney),
    marketSize,
    marketSizeDenomination: "billion",
    logos,
    stockImages,
    quote,
    owenWow,
    competition,
  };

  debug && console.debug("magic", result);
  console.timeEnd("magic");

  return result;
}

export type Magic = Awaited<ReturnType<typeof magic>>;
export default memoize(magic);
