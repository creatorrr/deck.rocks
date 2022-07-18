// data/businessModels/retail.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://fi.co/insight/the-10-most-popular-startup-revenue-models
export const name: string = "Retail";
export const description: string = `
A retail model entails setting up a traditional department or retail store
through which the company offers physical goods to customers.
`
  .trim()
  .replace(/\n+/, " ");

export const examples: string[] = [
  "Walmart is a chain of hypermarkets, discount department stores, and grocery stores.",
  "H&M is a brand that makes fast-fashion clothing for men and women.",
  "Best Buy is a chain retailer with a large array of brand-name electronics, computers and appliances.",
];

export default makeBusinessModel(name, description, examples);
