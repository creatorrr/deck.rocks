// utils/render.tsx

import { pipeline } from "node:stream/promises";
import { renderToStaticNodeStream } from "react-dom/server";

export const render = async (ctx, next) => {
  ctx.render = async (Component, props = {}) => {
    const component = <Component {...props} />;
    const stream = renderToStaticNodeStream(component);

    stream.setEncoding("utf8");
    ctx.res.setHeader("content-type", "text/html; charset=utf-8");
    ctx.res.setHeader("Content-Security-Policy", "upgrade-insecure-requests");

    ctx.res.headersSent || ctx.res.flushHeaders();

    return await pipeline(stream, ctx.res);
  };

  await next();
};

export default render;
