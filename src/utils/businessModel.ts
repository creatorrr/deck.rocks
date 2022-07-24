// utils/businessModel.ts

import { snakeCase } from "lodash";

import getEmbedding from "../openai/embedding";

export interface BusinessModel {
  name: string;
  slug: string;
  description: string;
  examples: string[];
  get examplesEmbeddings(): Promise<number[][]>;
  get descriptionEmbedding(): Promise<number[]>;
}

export const makeBusinessModel = (
  name: string,
  description: string,
  examples: string[]
): BusinessModel => ({
  name,
  description: description.trim(),
  slug: snakeCase(name),
  examples,
  get examplesEmbeddings() {
    return Promise.all(examples.map(getEmbedding));
  },
  get descriptionEmbedding() {
    return getEmbedding(description);
  },
});
