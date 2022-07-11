// router/home.ts

import Home from "../views/Home";

export default async (ctx) => {
  await ctx.render(Home, {
    idea: "Hello there",
  });
};
