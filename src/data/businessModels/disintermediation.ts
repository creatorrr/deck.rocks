// data/businessModels/disintermediation.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Disintermediation";
export const description: string = `
The disintermediation model gets rid of the middleman,
which lowers the cost of doing business for the manufacturer.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
