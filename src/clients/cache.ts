// clients/cache.ts

import hash from "object-hash";
import _memoize from "node-memoize";

import { redis } from "./redis";

// Cache for memoize
class RedisCache {
  async clear() {
    return redis.flushdb();
  }

  async has(key) {
    return redis.exists(key);
  }

  async get(key) {
    return JSON.parse(await redis.get(key));
  }

  async set(key, value) {
    return redis.set(key, JSON.stringify(value));
  }

  async delete(key) {
    return redis.del(key);
  }
}

export const cache = new RedisCache();

// Needed to convert function args into keys
// The ':' prefix is so we can easily search in redis
const resolver = (args) => ":" + hash.MD5(args);

export const memoize = (fn) => _memoize(fn, resolver, cache);
