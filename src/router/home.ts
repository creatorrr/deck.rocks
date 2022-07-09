// router/home.ts

import Hi from "../views/hi";

export default async (ctx) => {
  await ctx.render(Hi, { name: "Diwank" });
};
