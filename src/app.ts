// app.ts

import Koa from "koa";
import staticCache from "koa-static-cache";

import { assetsPath } from "./env";
import errorHandler from "./router/errorHandler";
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
  .use(errorHandler) // This needs to be before router
  .use(router.routes())
  .use(router.allowedMethods());

app.on("error", (err) => console.error(err));

export default app;
