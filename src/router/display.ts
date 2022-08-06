// router/status.ts

import type { JobWithStatus } from "../utils/jobs";
import type { Magic } from "../magic";

import { isUndefined } from "lodash";
import * as Koa from "koa";

import processText from "../text/process";
import GeneratedDeck from "../views/GeneratedDeck";
import GeneratedSite from "../views/GeneratedSite";
import {
  JobStatus,
  JobError,
  NotFoundError,
  getJobDetails,
} from "../utils/jobs";

export default async (ctx: Koa.Context) => {
  let { job_id, hash, format, nocontrols, print } = ctx.query;
  const _nocontrols = !isUndefined(nocontrols);
  const _print = !isUndefined(print);

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

  if (job.status !== JobStatus.READY)
    return ctx.redirect(`/status?job_id=${job_id}&status=${job.status}`);

  const result: Magic = job.returnvalue as any;
  const Component = format === "deck" ? GeneratedDeck : GeneratedSite;

  if (!result) throw new NotFoundError(`No job with ID: (${job_id})`);

  // Get tips to improve the idea
  const { messages: tips } = await processText(result.idea);

  await ctx.render(Component, {
    ...result,
    print: _print,
    tips: tips
      .map(({ reason }: { reason: string }) => reason)
      .filter((x: string) => !!x),
    format,
    job_id,
    hash,
    nocontrols: _nocontrols,
    prefill: result.idea,
  });
};
