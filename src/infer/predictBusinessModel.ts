// generate/predictBusinessModel.ts

import type { BusinessModel } from "../utils/businessModel";

import _ from "lodash";
import VectorMath from "@seregpie/vector-math";

import businessModels from "../data/businessModels";
import embedding from "../openai/embedding";
import { selectByAnalogy } from "../utils/similarity";

export const predictBusinessModel = async (
  idea: string
): Promise<BusinessModel> => {
  const ideaEmbedding = await embedding(idea);

  const models: { [key: string]: BusinessModel } = await businessModels;
  const modelData = _.values(models);

  // Get pairwise emebeddings
  const [exampleEmbeds, descriptionEmbeds] = _(modelData)
    .flatMap(({ examplesEmbeddings, descriptionEmbedding }, i) =>
      examplesEmbeddings.map((e) => [
        [i + "", e],
        [i + "", descriptionEmbedding],
      ])
    )
    .unzip()
    .value();

  const bestIndex: string = selectByAnalogy(
    _.fromPairs(exampleEmbeds),
    _.fromPairs(descriptionEmbeds),
    ideaEmbedding
  );

  return modelData[parseInt(bestIndex)];
};

export default predictBusinessModel;
