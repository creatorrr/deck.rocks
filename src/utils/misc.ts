// utils/misc.ts

import { range, snakeCase } from "lodash";
import Funnies from "funnies";

// Util that takes first N elements from a generator
export const take = (iter, n) =>
  Array.from(Array(n), iter.next, iter).map(({ value }) => value);

// Generator that produces a series of random funny messages
export function* generateFunnies() {
  const funnies = new Funnies();
  while (true) {
    yield funnies.message();
  }
}

export const AtoZ = range(65, 91).map((i) => String.fromCharCode(i));

// Convert a business model string to a slug
export const normalizeBusinessModelName = (name) =>
  snakeCase(name.toLowerCase().split(" model")[0].trim());

// nifty util to quickly make promises the easier way
export const makePromise = () => {
  let resolve, reject;
  return [
    new Promise(
      (_resolve, _reject) => ((resolve = _resolve), (reject = _reject), null)
    ),
    resolve,
    reject,
  ];
};

// Create a promise that times out after ms milliseconds
export const wait = async (ms = 0) => {
  const [promise, resolve] = makePromise();
  setTimeout(resolve, ms);

  return await promise;
};
