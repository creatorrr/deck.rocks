// utils/cache.ts

import _ from "lodash";
import { decode } from "messagepack";

import { redis } from "../clients/redis";

export const keysFromCache = async (namespace: string) =>
  await redis.keys(`${namespace}:*`);

export const getRandomFromCache = async (namespace: string) => {
  const key = _(await keysFromCache(namespace))
    .shuffle()
    .first();

  if (!key) return {};

  const encoded: Buffer | null = await redis.getBuffer(key);
  const value = encoded && decode(encoded);

  return value;
};
