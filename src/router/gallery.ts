// router/gallery.ts

import * as Koa from "koa";
import _ from "lodash";

import cache from "../clients/cache";
import { maxGalleryItems } from "../env";
import { countCacheKeys, keysFromCache } from "../utils/cache";
import Gallery from "../views/Gallery";

const getSampleIdeas = _.memoize(async (_ts) => {
  // _ts is just for memoising by hour bucket
  // clear previous cache
  getSampleIdeas.cache.clear();

  // get ideas
  const _1000keys = (await keysFromCache("magic", 1000)) as any;
  const keys = _.sampleSize(_1000keys, maxGalleryItems);
  return await Promise.all(keys.map((key: string) => cache.get(key)));
});

export default async (ctx: Koa.Context) => {
  const { prefill, error } = ctx.query;

  const total: number = await countCacheKeys("magic");
  const ideas = await getSampleIdeas(new Date().getHours());

  await ctx.render(Gallery, {
    prefill,
    errors: error && [error],
    ideas,
    total: total + 8692,
  });
};
