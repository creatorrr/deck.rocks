// router/errorHandler.ts

import Error from "../views/Error";

export default async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.app.emit("error", err, ctx);

    await ctx.render(Error, {
      error: err.message,
    });
  }
};
