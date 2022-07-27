// utils/render.tsx

import { pipeline } from "node:stream/promises";
import * as Koa from "koa";
import { FC } from "react";
import { renderToStaticNodeStream } from "react-dom/server";

export const render = async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.render = async (Component: FC, props = {}) => {
    const component = <Component {...props} />;
    const stream = renderToStaticNodeStream(component);

    stream.setEncoding("utf8");
    ctx.res.setHeader("content-type", "text/html; charset=utf-8");
    ctx.res.setHeader("Content-Security-Policy", "upgrade-insecure-requests");

    return await pipeline(stream, ctx.res);
  };

  await next();
};

export default render;
