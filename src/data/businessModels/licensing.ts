// data/businessModels/licensing.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.wikiwand.com/en/Revenue_model
export const name: string = "Licensing";
export const description: string = `
A licensing model entails that the business sells licenses to
a particular content for their customer who owns copyright to it.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
