// utils/render.tsx

import { renderToStaticNodeStream } from "react-dom/server";

import { makePromise } from "./misc";

export const render = async (ctx, next) => {
  const [rendered, end, error] = makePromise();

  ctx.render = async (Component, props = {}) => {
    const component = <Component {...props} />;
    const stream = renderToStaticNodeStream(component);

    stream.on("error", error);
    stream.on("end", end);

    stream.pipe(ctx.res);

    return await rendered;
  };

  await next();
};

export default render;
