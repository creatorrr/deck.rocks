// data/businessModels/virtualGoods.ts

import { makeBusinessModel } from "../../utils/businessModel";

// From: https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup
export const name: string = "Virtual Goods";
export const description: string = `
A virtual-goods model provides customers virtual goods to purchase which only
have value and exist in a virtual world. For example, in a video game, virtual goods
could be extra lives or weapon upgrades.
`
  .trim()
  .replace(/\n+/, " ");

export default makeBusinessModel(name, description);
