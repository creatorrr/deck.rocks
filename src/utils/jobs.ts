// utils/jobs.ts

import generateQueue from "../clients/queue";

import Job from "bull/lib/job";
import bullUtils from "bull/lib/scripts";
import cyrb53 from "cyrb53";

export enum JobStatus {
  PROCESSING = 0,
  COMPLETED = 1,
  FAILED = 2,
}

export type JobWithStatus = typeof Job & {
  status: JobStatus;
};

export class JobError extends Error {}
export class NotFoundError extends JobError {}
export class HashMismatchError extends JobError {}

export async function getJobDetails(
  job_id: string | number,
  hash: number | string = null,
  queue = generateQueue
): Promise<JobWithStatus> {
  // Get job
  const job = await Job.fromId(queue, job_id);
  if (!job) throw new NotFoundError(`No job with ID: (${job_id})`);

  // If hash is provided, check consistency
  if (hash !== null) {
    const {
      data: { idea },
    } = job;

    const calculated = cyrb53(idea) + "";

    if (hash !== calculated)
      throw new HashMismatchError(`Hash (${hash}) does not match job data`);
  }

  // Get status of job
  const status: JobStatus = await bullUtils.isFinished(job);

  // Return the whole thing
  return { ...job, status };
}
