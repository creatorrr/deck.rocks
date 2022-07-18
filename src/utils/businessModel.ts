// utils/businessModel.ts

import { snakeCase } from "lodash";

import { memoize } from "../clients/cache";
import getEmbedding from "../openai/embedding";

export interface BusinessModel {
  name: string;
  slug: string;
  description: string;
  embedding?: number[];
}

export const makeBusinessModel = memoize(
  async (name: string, description: string): Promise<BusinessModel> => ({
    name,
    description: description.trim(),
    slug: snakeCase(name),
    embedding: await getEmbedding(description),
  })
);
