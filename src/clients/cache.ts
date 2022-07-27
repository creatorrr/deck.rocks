// clients/cache.ts

import type { AsyncFunction } from "../utils/async";

import { encode, decode } from "messagepack";
import _memoize from "node-memoize";
import hash from "object-hash";

import { defaultRedisTtl } from "../env";
import { redisPromise } from "./redis";

// Cache for memoize
class RedisCache {
  ttl: number;
  constructor(ttl: number = 0) {
    this.ttl = ttl;
  }

  async clear() {
    const redis = await redisPromise;
    return redis.flushdb();
  }

  async has(key: string) {
    const redis = await redisPromise;
    return redis.exists(key);
  }

  async get(key: string) {
    const redis = await redisPromise;
    const encoded: Buffer | null = await redis.getBuffer(key);
    const value = encoded && decode(encoded);

    return value;
  }

  async set(key: string, value: any) {
    const redis = await redisPromise;
    const encoded: Buffer = Buffer.from(encode(value));
    const { ttl } = this;

    if (ttl) return redis.set(key, encoded, "EX", ttl);
    else return redis.set(key, encoded);
  }

  async delete(key: string) {
    const redis = await redisPromise;
    return redis.del(key);
  }
}

export const cache = new RedisCache();
export const ttlCache = new RedisCache(defaultRedisTtl);

// Needed to convert function args into keys
// The ':' prefix is so we can easily search in redis
const resolver = (args: any[]) => ":" + hash.MD5(args);

// `shouldEvict=false` switched to no-ttl cache.
// Need to set maxmemory=volatile-lfu on the redis server for this to work
export const memoize = (fn: AsyncFunction<any>, shouldEvict: boolean = true) =>
  _memoize(fn, resolver, shouldEvict ? ttlCache : cache);

export default cache;
