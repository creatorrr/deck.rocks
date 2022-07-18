// data/businessModels/marketplace.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Marketplace";
export const description: string = `
In a marketplace model, companies act as the intermediary for sellers and buyers.
The goal is to help sellers discover buyers and vice versa.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
