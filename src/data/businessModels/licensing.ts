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

export const examples: string[] = [
  "Microsoft Office, or simply Office, is a family of client software, server software, and services developed by Microsoft.",
  "TimescaleDB is a time-series SQL database providing fast analytics.",
  "The Pokémon Company is responsible for brand management, production, and marketing of the Pokémon franchise.",
];

export default makeBusinessModel(name, description, examples);
