// utils/businessModel.ts

import { snakeCase } from "lodash";

import { localEmbed } from "../utils/similarity";

export interface BusinessModel {
  name: string;
  slug: string;
  description: string;
  examples: string[];
  embedding: Promise<number[][]>;
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
  embedding: localEmbed(name),
});
