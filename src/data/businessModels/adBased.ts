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

export const examples: string[] = [
  "Instagram is a free of cost photo and video sharing social networking service.",
  "TechCrunch is an online newspaper focusing on high tech and startup companies.",
  "Craigslist is a classifieds website with sections devoted to jobs, housing, for sale, etc.",
];

export default makeBusinessModel(name, description, examples);
