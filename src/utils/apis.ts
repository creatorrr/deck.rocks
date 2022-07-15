// utils/apis.ts

import { sample } from "lodash";
import fetch from "cross-fetch";

import { OWEN_ENDPOINT, QUOTES_ENDPOINT } from "../env";

export async function getOwenWow() {
  const response = await fetch(OWEN_ENDPOINT);
  const [wow] = await response.json();
  return wow;
}

export async function getQuote() {
  const categories = ["inspire", "funny", "students"];
  const response = await fetch(
    `${QUOTES_ENDPOINT}?category=${sample(categories)}&language=en`
  );

  const {
    contents: {
      quotes: [quote],
    },
  } = await response.json();
  return quote;
}
