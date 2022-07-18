// data/businessModels/freemium.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Freemium";
export const description: string = `
A freemium model combines free and premium services into one business
via a tiered approach. The free service includes basic features.
The additional features entice customers to purchase the premium package.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
