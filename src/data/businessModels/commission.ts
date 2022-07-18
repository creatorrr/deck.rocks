// data/businessModels/commission.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.wikiwand.com/en/Revenue_model
export const name: string = "Commission-based";
export const description: string = `
A commision-based business model entails charging a transaction fee for mediating between two parties. Brokerage companies or auction companies often use it.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
