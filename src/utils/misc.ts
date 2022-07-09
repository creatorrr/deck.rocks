// utils/misc.ts

import { snakeCase } from "lodash";

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
