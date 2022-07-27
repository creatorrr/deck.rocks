// router/home.ts

import * as Koa from "koa";

import Home from "../views/Home";
import { getRandomFromCache } from "../utils/cache";

export default async (ctx: Koa.Context) => {
  const { prefill, error } = ctx.query;
  const { idea } = (await getRandomFromCache("magic")) as any;

  await ctx.render(Home, {
    prefill,
    errors: error && [error],
    idea:
      idea || "Picnic box for families that want to spend time out in nature",
  });
};
