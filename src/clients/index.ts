// clients/index.ts

import { redisPromise } from "./redis";
import Sentry from "./sentry";

export const ready = Promise.all([redisPromise, Sentry]);
