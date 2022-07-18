// data/businessModels/adBased.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://fi.co/insight/the-10-most-popular-startup-revenue-models
export const name: string = "Ad-based";
export const description: string = `
An ad-based business model entails creating ads for a specific website, service, app, or
another product, and placing them on strategic, high-traffic channels.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
