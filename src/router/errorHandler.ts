// router/errorHandler.ts

import { AssertionError } from "node:assert/strict";

import Error from "../views/Error";

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.app.emit("error", err, ctx);

    const error =
      err instanceof AssertionError
        ? err.message
        : `A "${err.constructor.name}" error occurred`;

    await ctx.render(Error, {
      title: err.title,
      error,
    });
  }
};
