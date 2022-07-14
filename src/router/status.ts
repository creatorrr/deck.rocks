// router/status.ts

import { isUndefined } from "lodash";
import { JobStatus, JobError, getJobStatus } from "../utils/jobs";
import Status from "../views/Status";

export default async (ctx) => {
  const { job_id, hash } = ctx.query;

  if (isUndefined(job_id) || isUndefined(hash)) {
    ctx.body = "Both job_id and hash are required.";
    return;
  }

  let status: JobStatus;
  try {
    status = await getJobStatus(job_id, hash);
  } catch (e) {
    if (!(e instanceof JobError)) throw e;

    ctx.body = e.message;
    return;
  }

  await ctx.render(Status, {
    status,
  });
};
