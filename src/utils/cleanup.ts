// utils/cleanup.ts

import type { Magic } from "../magic";

import { setTimeout } from "node:timers/promises";
import { Readable } from "node:stream";

import "../env";
import cache from "../clients/cache";
import { redisPromise } from "../clients/redis";
import contentFilter from "../openai/contentFilter";

const processKey = async (key: string): Promise<boolean> => {
  const value: Magic = (await cache.get(key)) as any;
  const allowed = await contentFilter(value.idea + "\n" + value.tagline);

  if (!allowed) {
    await cache.set(`blocked:${key}`, value);
    await cache.delete(key);
  }

  return !allowed;
};

export const processKeys = async (
  keys: string[]
): Promise<[number, string[], number]> => {
  let processed = 0,
    failed = [],
    blocked = 0;

  for (const key of keys) {
    try {
      const result = await processKey(key);
      blocked += result ? 1 : 0;
    } catch (e) {
      console.error(e);
      failed.push(key);
    }
    processed += 1;
  }

  return [processed, failed, blocked];
};

export const process = async (stream: Readable) => {
  let processed = 0,
    failed = [],
    blocked = 0;

  for await (const keys of stream) {
    const [_processed, _failed, _blocked] = await processKeys(keys);
    processed += _processed;
    blocked += _blocked;
    failed.push(..._failed);

    await setTimeout(100);
  }

  return { processed, failed, blocked };
};

export default async function cleanup(match: string = "magic:*") {
  const redis = await redisPromise;
  const stream = redis.scanStream({ match, count: 10 });

  const { processed, failed, blocked } = await process(stream);

  if (failed.length > 0) {
    await cache.set("failed_cleanup_keys", failed);
  }

  const results = { processed, failed, blocked };
  console.log(results);

  return results;
}
