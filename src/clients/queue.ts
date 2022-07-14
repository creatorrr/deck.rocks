// clients/queue.ts

import Queue from "bull";
import { parseURL } from "ioredis/built/utils";

import { redisUrl, redisSettings } from "../env";

const redisOpts = parseURL(redisUrl || "0.0.0.0:6379");

export const generateQueue = new Queue("generate deck", {
  redis: {
    ...redisSettings,
    ...redisOpts,
  },
});

// Listen for queue events
// Docs: https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#events
generateQueue.on("error", console.error);
generateQueue.on("failed", ({ id }, error) =>
  console.error(`Failed: Job ${id}`, error)
);
generateQueue.on("stalled", ({ id }) => console.error(`Stalled: Job ${id}`));

generateQueue.on("waiting", console.log);
generateQueue.on("drained", () => console.log("Queue drained"));
generateQueue.on("active", ({ id }) => console.log(`Active: Job ${id}`));
generateQueue.on("completed", ({ id }) => console.log(`Completed: Job ${id}`));

export default generateQueue;
