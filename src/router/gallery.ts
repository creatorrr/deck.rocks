// router/gallery.ts

import * as Koa from "koa";
import _ from "lodash";

import cache from "../clients/cache";
import { maxGalleryItems } from "../env";
import { countCacheKeys, keysFromCache } from "../utils/cache";
import Gallery from "../views/Gallery";

export default async (ctx: Koa.Context) => {
  const { prefill, error } = ctx.query;

  const total: number = await countCacheKeys("magic");
  const _1000keys = (await keysFromCache("magic", 1000)) as any;
  const keys = _.sampleSize(_1000keys, maxGalleryItems);
  const ideas = await Promise.all(keys.map((key: string) => cache.get(key)));

  await ctx.render(Gallery, {
    prefill,
    errors: error && [error],
    ideas,
    total,
  });
};
