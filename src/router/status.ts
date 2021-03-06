// router/status.ts

import type { JobWithStatus } from "../utils/jobs";

import { isUndefined } from "lodash";
import * as Koa from "koa";

import { JobError, getJobDetails } from "../utils/jobs";
import Status from "../views/Status";

export default async (ctx: Koa.Context) => {
  let { job_id, hash, format } = ctx.query;
  format = format || "deck";

  if (isUndefined(job_id) || isUndefined(hash)) {
    ctx.body = "Both job_id and hash are required.";
    return;
  }

  let job: JobWithStatus;
  try {
    job = await getJobDetails(job_id.toString(), hash.toString());
  } catch (e) {
    if (!(e instanceof JobError)) throw e;

    ctx.body = e.message;
    return;
  }

  await ctx.render(Status, {
    format,
    hash,
    job_id,
    job,
  });
};
