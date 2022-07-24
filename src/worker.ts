// worker.ts

import "dotenv/config";
import "@tensorflow/tfjs";
import { load as loadUSE } from "@tensorflow-models/universal-sentence-encoder";

import generateQueue from "./clients/queue";
import magic from "./magic";
import { maxJobsPerWorker } from "./env";

// Preload the tensorflow model...
loadUSE().then(() => console.log("USE Model loaded"), console.error);

generateQueue.process(maxJobsPerWorker, async (job) => {
  const { data } = job;
  return await magic(data);
});

console.log("Listening for jobs");
