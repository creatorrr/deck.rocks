// magic.ts

import { has, keys, startCase } from "lodash";

import { memoize } from "./clients/cache";
import searchImages from "./clients/pexels";
import businessModels from "./data/businessModels";
import calcMarketSize from "./generate/calcMarketSize";
import genStartupName from "./generate/genStartupName";
import genLogos from "./generate/genLogos";
import genHowWillWeMakeMoney from "./generate/genHowWillWeMakeMoney";
import genTagline from "./generate/genTagline";
import genProblemStatement from "./generate/genProblemStatement";
import genTopics from "./generate/genTopics";
import genYoBeReal from "./generate/genYoBeReal";
import genJargonExplanation from "./generate/genJargonExplanation";
import predictBusinessModel from "./generate/predictBusinessModel";
import edited from "./openai/edited";
import findSimilarProducts from "./producthunt/findSimilarProducts";
import { getQuote, getOwenWow } from "./utils/apis";
import { normalizeBusinessModelName } from "./utils/misc";

async function _magic({ idea, businessModelSlug }) {
  const [
    name,
    tagline,
    problem,
    keywords,
    verdict,
    rationale,
    businessModelName,
    editedIdea,
    quote,
    owenWow,
  ] = await Promise.all([
    genStartupName(idea),
    genTagline(idea),
    genProblemStatement(idea),
    genTopics(idea),
    genYoBeReal(idea),
    genJargonExplanation(idea),
    businessModelSlug || predictBusinessModel(idea),
    edited(idea),
    getQuote(),
    getOwenWow(),
  ]);

  idea = editedIdea ? editedIdea[0].text : idea;

  businessModelSlug = normalizeBusinessModelName(businessModelName);
  if (!has(businessModels, businessModelSlug)) {
    businessModelSlug = keys(businessModels)[0];
  }

  const [logos, stockImages, marketSize, howWillWeMakeMoney, competition] =
    await Promise.all([
      genLogos(tagline, 1),
      searchImages(keywords),
      calcMarketSize(keywords),
      genHowWillWeMakeMoney(idea, businessModelSlug),
      findSimilarProducts(idea, 1, 3),
    ]);

  return {
    idea,
    businessModel: businessModels[businessModelSlug],
    name,
    tagline: startCase(tagline),
    problem,
    keywords,
    verdict,
    rationale,
    howWillWeMakeMoney,
    marketSize,
    marketSizeDenomination: "billion",
    logos,
    stockImages,
    quote,
    owenWow,
    competition,
  };
}

export const magic = memoize(_magic);
export default magic;
