// router/home.ts

import Home from "../views/Home";
import { getRandomFromCache } from "../utils/cache";

export default async (ctx) => {
  const { prefill, error } = ctx.query;
  const { idea } = await getRandomFromCache("magic");

  await ctx.render(Home, {
    prefill,
    errors: error && [error],
    idea:
      idea || "Picnic box for familiies that want to spend time out in nature",
  });
};
