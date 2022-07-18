// data/businessModels/manufacturer.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://fi.co/insight/the-10-most-popular-startup-revenue-models
export const name: string = "Manufactuer";
export const description: string = `
In a manufacturer model, the company sources raw material and creates useful products from them.
`
  .trim()
  .replace(/\n+/, " ");

export const examples: string[] = [
  "Samsung Electronics is a manufacturer of mobile phones and smartphones.",
  "Tesla designs and manufactures electric vehicles, battery energy storage.",
  "Coke, is a carbonated soft drink manufactured.",
];

export default makeBusinessModel(name, description, examples);
