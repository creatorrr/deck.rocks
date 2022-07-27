// utils/cache.ts

import _ from "lodash";
import { decode } from "messagepack";

import { redis } from "../clients/redis";

export const getRandomFromCache = async (namespace: string) => {
  const key = _(await redis.keys(`${namespace}:*`))
    .shuffle()
    .first();

  if (!key) return {};

  const encoded: Buffer | null = await redis.getBuffer(key);
  const value = encoded && decode(encoded);

  return value;
};
