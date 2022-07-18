// data/businessModels/rental.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.wikiwand.com/en/Revenue_model
export const name: string = "Rental";
export const description: string = `
A rental model allows customers to pay the company periodically for
a time-limited use of a product without having to own the product.
The company takes care of the maintenance of its physical assets,
insurance costs and other usual expenses.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
