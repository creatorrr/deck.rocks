// router/home.ts

import { stringify } from "node:querystring";

import * as Koa from "koa";
import _ from "lodash";

import { hostname, pdfApiEndpoint, pdfApiKey } from "../env";

export default async (ctx: Koa.Context) => {
  const { job_id, hash, format = "site" } = ctx.query;
  ctx.assert(job_id && hash, 400, `Job ID and hash both required.`);

  const deckParams: Record<string, any> = {
    job_id,
    hash,
    nocontrols: true,
    "print-pdf": true,
    format,
  };

  const deckUrl: string = `${hostname}/display?${stringify(deckParams)}`;

  const config: Record<string, any> = {
    emulateScreenMedia: false,
    scrollPage: true,
    waitFor: 500,
    "pdf.printBackground": true,
    ignoreHttpsErrors: true,
    attachmentName: `deck-${job_id}-${hash}.pdf`,
  };

  const url: string = `${pdfApiEndpoint}?${stringify(
    config
  )}&url=${encodeURIComponent(deckUrl)}`;

  const pdfResponse = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": pdfApiKey,
    },
  });

  if (!pdfResponse.ok)
    return ctx.throw(500, "The pdf service was unable to fulfil your request.");

  pdfResponse.headers.forEach((value, header) => ctx.set(header, value));

  ctx.body = Buffer.from(await pdfResponse.arrayBuffer());
};
