// utils/businessModel.ts

import { snakeCase } from "lodash";

export interface BusinessModel {
  name: string;
  slug: string;
  description: string;
  examples: string[];
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
});
