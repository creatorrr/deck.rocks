// data/businessModels/onDemand.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "On-demand";
export const description: string = `
An on-demand business model provides customers with a service
that they can request and obtain any time they please.
Uber is a top example of this model.
`
  .trim()
  .replace(/\n+/, " ");

export const examples: string[] = [
  "Airbnb is a platform for finding vacation rentals, and tourism activities.",
  "Uber is a mobility as a service provider, allowing users to book a cab anywhere.",
  "Doordash is an online food ordering and food delivery platform.",
];

export default makeBusinessModel(name, description, examples);
