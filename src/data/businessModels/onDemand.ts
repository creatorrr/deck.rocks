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

export default makeBusinessModel(name, description);
