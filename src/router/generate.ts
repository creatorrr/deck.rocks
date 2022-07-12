// router/generate.ts

import { isUndefined } from "lodash";

import GeneratedDeck from "../views/GeneratedDeck";
import GeneratedSite from "../views/GeneratedSite";
import magic from "../magic";

export default async (ctx) => {
  let { idea, format, nocontrols } = ctx.query;
  idea = idea.trim();
  nocontrols = !isUndefined(nocontrols);

  const generated = await magic({ idea });
  const Component = format === "deck" ? GeneratedDeck : GeneratedSite;

  await ctx.render(Component, {
    ...generated,
    format,
    nocontrols,
    prefill: idea,
  });
};
