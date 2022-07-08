// utils/apis.ts

import _ from "lodash";
import fetch from "node-fetch2";

import { OWEN_ENDPOINT, QUOTES_ENDPOINT } from "../env";

export async function getOwenWow() {
  const response = await fetch(OWEN_ENDPOINT);
  const [wow] = await response.json();
  return wow;
}

export async function getQuote() {
  const categories = ["inspire", "funny", "students"];
  const response = await fetch(`${ QUOTES_ENDPOINT }?category=${_.sample(categories)}&language=en`);

  const { contents: {quotes: [quote]}} = await response.json();
  return quote;
}
