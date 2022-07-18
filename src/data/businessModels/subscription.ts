// data/businessModels/subscription.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Subscription";
export const description: string = `
In a subscription model, a company sells a service via a subscription
as opposed to a one-off product for a monthly or yearly subscription fee.
`
  .trim()
  .replace(/\n+/, " ");

export const examples: string[] = [
  "Jira is an issue tracking product for bug tracking and agile project management.",
  "Netflix is a streaming service that offers a variety of TV shows and movies.",
  "Gold's Gym is a chain of fitness centers that offer a variety of equipment to its members.",
];

export default makeBusinessModel(name, description, examples);
