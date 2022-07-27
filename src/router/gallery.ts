// router/gallery.ts

import _ from "lodash";
import * as Koa from "koa";

import cache from "../clients/cache";
import { maxGalleryItems } from "../env";
import { keysFromCache } from "../utils/cache";
import Gallery from "../views/Gallery";

export default async (ctx: Koa.Context) => {
  const { prefill, error } = ctx.query;
  const keys = (await keysFromCache("magic")) as any;

  const ideas = await Promise.all(
    _(keys)
      .sampleSize(maxGalleryItems)
      .map((key) => cache.get(key))
      .value()
  );

  await ctx.render(Gallery, {
    prefill,
    errors: error && [error],
    ideas,
  });
};
