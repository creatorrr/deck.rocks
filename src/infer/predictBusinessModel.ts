// generate/predictBusinessModel.ts

import _ from "lodash";
import VectorMath from "@seregpie/vector-math";

import businessModels from "../data/businessModels";
import embedding from "../openai/embedding";

export const predictBusinessModel = async (idea: string) => {
  const bms = await businessModels;
  const ideaEmbedding = await embedding(idea);

  const predictedKey = _(bms)
    .entries()
    .map(([key, { embedding }]) => [
      key,
      VectorMath.CosineSimilarity(ideaEmbedding, embedding),
    ])
    .sortBy([1])
    .map(0)
    .last();

  return bms[predictedKey];
};

export default predictBusinessModel;
