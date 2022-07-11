// clients/index.ts

import { redisPromise } from "./redis";

export const ready = Promise.all([redisPromise]);
