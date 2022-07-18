// data/businessModels/manufacturer.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://fi.co/insight/the-10-most-popular-startup-revenue-models
export const name: string = "Manufactuer";
export const description: string = `
In a manufacturer model, the company sources raw material and creates useful products from them.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
