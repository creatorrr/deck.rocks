// generate/predictBusinessModel.ts

import type { BusinessModel } from "../utils/businessModel";

import _ from "lodash";

import businessModels from "../data/businessModels";
import { calculateSimilarity } from "../utils/similarity";

export const predictBusinessModel = async (
  howWillWeMakeMoney: string
): Promise<BusinessModel> => {
  const [keys, descriptions] = _(businessModels)
    .mapValues("description")
    .entries()
    .unzip()
    .value();

  const scores = await calculateSimilarity(howWillWeMakeMoney, descriptions);
  const [winner] = _(keys).zip(scores).sortBy([1]).last();

  return businessModels[winner];
};

export default predictBusinessModel;
