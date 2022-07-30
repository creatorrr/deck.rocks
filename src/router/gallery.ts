// router/gallery.ts

import * as Koa from "koa";

import cache from "../clients/cache";
import { maxGalleryItems } from "../env";
import { keysFromCache } from "../utils/cache";
import Gallery from "../views/Gallery";

export default async (ctx: Koa.Context) => {
  const { prefill, error } = ctx.query;
  const keys = (await keysFromCache("magic", maxGalleryItems)) as any;
  const ideas = await Promise.all(keys.map((key: string) => cache.get(key)));

  await ctx.render(Gallery, {
    prefill,
    errors: error && [error],
    ideas,
  });
};
