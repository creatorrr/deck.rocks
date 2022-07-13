// utils/cache.ts

import _ from "lodash";

import { redis } from "../clients/redis";

export const getRandomFromCache = async (namespace) => {
  const key = _(await redis.keys(`${namespace}:*`))
    .shuffle()
    .first();

  if (!key) return {};

  const value = await redis.get(key);

  return JSON.parse(value);
};
