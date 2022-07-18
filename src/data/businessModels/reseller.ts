// data/businessModels/reseller.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Reseller";
export const description: string = `
In a reseller model, companies focus on promoting and selling products
that were produced or manufactured by another company.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
