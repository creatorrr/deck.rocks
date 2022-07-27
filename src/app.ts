// app.ts

import Koa from "koa";
import staticCache from "koa-static-cache";

import { assetsPath } from "./env";
import errorHandler from "./router/errorHandler";
import router from "./router";
import render from "./utils/render";

export const app = new Koa();

app
  .use(render)
  .use(staticCache(assetsPath))
  .use(errorHandler) // This needs to be before router
  .use(router.routes())
  .use(router.allowedMethods());

app.on("error", (err) => console.error(err));

export default app;
