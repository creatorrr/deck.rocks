// app.ts

import Koa from "koa";
import staticCache from "koa-static-cache";

import { ready } from "./clients";
import { assetsPath } from "./env";
import router from "./router";
import render from "./utils/render";

export const app = new Koa();

app
  // Wait for all clients to become ready before mounting routes
  .use(async (_, next) => {
    await ready;
    return next();
  })
  .use(render)
  .use(staticCache(assetsPath))
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
