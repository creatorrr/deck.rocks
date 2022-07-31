// worker.ts

import "dotenv/config";
import "@tensorflow/tfjs";
import { load as loadUSE } from "@tensorflow-models/universal-sentence-encoder";

import generateQueue from "./clients/queue";
import Sentry from "./clients/sentry";
import { maxJobsPerWorker } from "./env";
import magic from "./magic";

process.on("unhandledRejection", (err) => {
  console.error(err);
  Sentry.captureException(err);
});

// Preload the tensorflow model...
loadUSE().then(() => console.log("USE Model loaded"), console.error);

generateQueue.process(maxJobsPerWorker, async (job) => {
  const { data, id } = job;

  console.log(`Starting job id: ${id}`);

  try {
    return await magic(data.idea);
  } catch (err) {
    console.error(err);
    Sentry.captureException(err);
  }
});

console.log("Listening for jobs");
