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
    .flatMap(({ examplesEmbeddings, descriptionEmbedding }) =>
      examplesEmbeddings.map((e) => [e, descriptionEmbedding])
    )
    .unzip()
    .value();

  // const exampleEmbeds: number[][] = _.map(modelData, "examplesEmbeddings");
  // const descriptionEmbeds: number[] = _.map(modelData, "descriptionEmbedding");

  const bestIndex: number = selectByAnalogy(
    exampleEmbeds,
    descriptionEmbeds,
    ideaEmbedding
  );

  return modelData[bestIndex];
};

export default predictBusinessModel;
