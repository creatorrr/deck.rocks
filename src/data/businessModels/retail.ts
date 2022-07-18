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

export default makeBusinessModel(name, description);
