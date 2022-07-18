// utils/businessModel.ts

import { snakeCase } from "lodash";
import VectorMath from "@seregpie/vector-math";

import { memoize } from "../clients/cache";
import getEmbedding from "../openai/embedding";

export interface BusinessModel {
  name: string;
  slug: string;
  description: string;
  examples: string[];
  examplesEmbeddings: number[][];
  descriptionEmbedding: number[];
}

export const makeBusinessModel = memoize(
  async (
    name: string,
    description: string,
    examples: string[]
  ): Promise<BusinessModel> => ({
    name,
    description: description.trim(),
    slug: snakeCase(name),
    examples,
    examplesEmbeddings: await Promise.all(examples.map(getEmbedding)),
    descriptionEmbedding: await getEmbedding(description),
  })
);
