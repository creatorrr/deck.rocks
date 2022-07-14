// worker.ts

import "dotenv/config";

import generateQueue from "./clients/queue";
import magic from "./magic";
import { maxJobsPerWorker } from "./env";

generateQueue.process(maxJobsPerWorker, async (job) => {
  const { data } = job;
  return await magic(data);
});

console.log("Listening for jobs");
