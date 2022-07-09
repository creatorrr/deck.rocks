// app.ts

import Koa from "koa";
import staticCache from "koa-static-cache";

import { assetsPath } from "./env";
import router from "./router";
import render from "./utils/render";

export const app = new Koa();

app
  .use(render)
  .use(staticCache(assetsPath))
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
