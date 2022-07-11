// app.ts

import Koa from "koa";
import staticCache from "koa-static-cache";

import { assetsPath } from "./env";
import router from "./router";
import render from "./utils/render";

export const app = new Koa();

// import magic from "./magic";
// const idea =
//   "Clark industries builds advanced alien-tech weaponry and energy systems. The exoskeleton used for Silver Man suit is now available for everyone to protect against hackers.";
// const generated = await magic({ idea });

app
  .use(render)
  .use(staticCache(assetsPath))
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
