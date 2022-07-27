// utils/misc.ts

import { range, snakeCase } from "lodash";
import Funnies from "funnies";

// Util that takes first N elements from a generator
export const take = (iter: Generator, n: number) =>
  Array.from(Array(n), (arg) => iter.next(arg), iter).map(({ value }) => value);

// Generator that produces a series of random funny messages
export function* generateFunnies(): Generator<string> {
  const funnies = new Funnies();
  while (true) {
    yield funnies.message() as any;
  }
}

export const AtoZ = range(65, 91).map((i) => String.fromCharCode(i));

// Convert a business model string to a slug
export const normalizeBusinessModelName = (name: string) =>
  snakeCase(name.toLowerCase().split(" model")[0].trim());

// nifty util to quickly make promises the easier way
export const makePromise = <T>(): [
  Promise<T>,
  (x: T) => void,
  (e: Error | string) => void
] => {
  let resolve = (_x: T) => {},
    reject = (_e: Error | string) => {};

  return [
    new Promise(
      (_resolve, _reject) => ((resolve = _resolve), (reject = _reject), null)
    ),
    resolve,
    reject,
  ];
};
