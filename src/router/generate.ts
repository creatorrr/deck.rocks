// router/generate.ts

import { isUndefined } from "lodash";

import GeneratedSite from "../views/GeneratedSite";
import magic from "../magic";

export default async (ctx) => {
  let { idea, format, nocontrols } = ctx.query;
  idea = idea.trim();
  nocontrols = !isUndefined(nocontrols);

  const generated = await magic({ idea });

  await ctx.render(GeneratedSite, {
    ...generated,
    format,
    nocontrols,
    prefill: idea,
  });
};
