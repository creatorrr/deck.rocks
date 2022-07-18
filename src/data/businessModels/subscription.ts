// data/businessModels/subscription.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Subscription";
export const description: string = `
In a subscription model, a company sells a service via a subscription
as opposed to a one-off product for a monthly or yearly subscription fee.
`.trim();

export default makeBusinessModel(name, description);
