// router/status.ts

import type { JobWithStatus } from "../utils/jobs";
import type { Magic } from "../magic";

import { isUndefined } from "lodash";
import GeneratedDeck from "../views/GeneratedDeck";
import GeneratedSite from "../views/GeneratedSite";
import { JobStatus, JobError, getJobDetails } from "../utils/jobs";

export default async (ctx) => {
  let { job_id, hash, format, nocontrols } = ctx.query;
  nocontrols = !isUndefined(nocontrols);

  if (isUndefined(job_id) || isUndefined(hash)) {
    ctx.body = "Both job_id and hash are required.";
    return;
  }

  let job: JobWithStatus;
  try {
    job = await getJobDetails(job_id, hash);
  } catch (e) {
    if (!(e instanceof JobError)) throw e;

    ctx.body = e.message;
    return;
  }

  if (job.status !== JobStatus.READY)
    return ctx.redirect(`/status?job_id=${job_id}&status=${job.status}`);

  const result: Magic = job.returnvalue as any;
  const Component = format === "deck" ? GeneratedDeck : GeneratedSite;

  await ctx.render(Component, {
    ...result,
    format,
    nocontrols,
    prefill: result.idea,
  });
};
