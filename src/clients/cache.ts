// clients/cache.ts

import hash from "object-hash";
import _memoize from "node-memoize";

import { redisPromise } from "./redis";

// Cache for memoize
class RedisCache {
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
    return JSON.parse(await redis.get(key));
  }

  async set(key: string, value: any) {
    const redis = await redisPromise;
    return redis.set(key, JSON.stringify(value));
  }

  async delete(key: string) {
    const redis = await redisPromise;
    return redis.del(key);
  }
}

export const cache = new RedisCache();

// Needed to convert function args into keys
// The ':' prefix is so we can easily search in redis
const resolver = (args: any[]) => ":" + hash.MD5(args);

export const memoize = (fn) => _memoize(fn, resolver, cache);
