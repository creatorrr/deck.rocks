// app.ts

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import conditional from "koa-conditional-get";
import etag from "koa-etag";
import helmet from "koa-helmet";
import staticCache from "koa-static-cache";
import { xss } from "koa-xss-sanitizer";

import Sentry from "./clients/sentry";
import { assetsPath } from "./env";
import errorHandler from "./middleware/errorHandler";
import tracing from "./middleware/tracing";
import router from "./router";
import render from "./utils/render";

export const app = new Koa();

app
  .use(conditional()) // use it upstream from etag
  .use(etag())
  .use(helmet())
  .use(staticCache(assetsPath))
  .use(bodyParser())
  .use(xss())
  .use(tracing({ match: (ctx) => ctx.url.includes("/generate") }))
  .use(render) // This needs to be before any rendering middleware, e.g. errorHandler
  .use(errorHandler) // This needs to be before router
  .use(router.routes())
  .use(router.allowedMethods());

app.on("error", (err, ctx: Koa.Context) => {
  console.error(err);

  Sentry.withScope((scope) => {
    scope.addEventProcessor((event) => {
      return Sentry.addRequestDataToEvent(event, ctx.request);
    });
    Sentry.captureException(err);
  });
});

export default app;
