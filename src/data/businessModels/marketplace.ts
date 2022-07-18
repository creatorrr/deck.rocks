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

export const examples: string[] = [
  "Housing.com is a real estate search portal which allows customers to search for housing.",
  "Alibaba.com is a wholesale mobile marketplace for global trade.",
  "Binance operates a cryptocurrency exchange platform where users can transact with one another.",
];

export default makeBusinessModel(name, description, examples);
