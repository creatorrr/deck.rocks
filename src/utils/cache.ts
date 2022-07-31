// utils/cache.ts

import { Readable } from "node:stream";
import _ from "lodash";
import { decode } from "messagepack";

import { redis } from "../clients/redis";

export const countCacheKeys = async (
  namespace: string,
  max: number = 100_000
): Promise<number> => {
  let count: number = 0;
  const keysStream: Readable = redis.scanStream({
    match: `${namespace}:*`,
    count: _.max([max, 100]),
  });

  for await (const keys of keysStream) {
    count += keys.length;
    if (count >= max) break;
  }

  keysStream.destroyed || keysStream.destroy();
  return count;
};

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

export const getRandomFromCache = async (
  namespace: string,
  n: number = 10
): Promise<any[]> => {
  const keys: string[] = _(await keysFromCache(namespace, n))
    .shuffle()
    .value();

  const results = await Promise.all(
    keys
      .map((key) => redis.getBuffer(key))
      .filter(async (x) => !!(await x))
      .map(async (buf) => decode(await buf))
  );

  return results;
};
