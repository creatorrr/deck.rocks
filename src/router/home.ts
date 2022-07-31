// router/home.ts

import * as Koa from "koa";
import _ from "lodash";

import Home from "../views/Home";
import { getRandomFromCache, keysFromCache } from "../utils/cache";

export default async (ctx: Koa.Context) => {
  const { prefill, error } = ctx.query;
  const haveExisting: boolean = (await keysFromCache("magic", 1)).length > 0;
  const examples = _(await getRandomFromCache("magic", 100))
    .sampleSize(3)
    .map("idea")
    .value();

  examples.length === 0 &&
    examples.push(
      "Picnic box for families that want to spend time out in nature"
    );

  await ctx.render(Home, {
    prefill,
    errors: error && [error],
    showGallery: haveExisting,
    examples,
    idea: _.sample(examples),
  });
};
