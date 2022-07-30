// utils/cache.ts

import { Readable } from "node:stream";
import _ from "lodash";
import { decode } from "messagepack";

import { redis } from "../clients/redis";

export const keysFromCache = async (
  namespace: string,
  count: number = 10
): Promise<string[]> => {
  const results: string[] = [];
  const keysStream: Readable = redis.scanStream({
    match: `${namespace}:*`,
    count,
  });

  for await (const keys of keysStream) {
    results.push(...keys);
    if (results.length >= count) break;
  }

  keysStream.destroyed || keysStream.destroy();
  return results;
};

export const getRandomFromCache = async (namespace: string) => {
  const key = _(await keysFromCache(namespace))
    .shuffle()
    .first();

  if (!key) return {};

  const encoded: Buffer | null = await redis.getBuffer(key);
  const value = encoded && decode(encoded);

  return value;
};
