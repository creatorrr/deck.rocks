// clients/redis.ts

import Redis from "ioredis";

import { makePromise } from "../utils/misc";
import { redisEndpoint, redisPassword } from "../env";

export let redis: Redis;
const [redisHost, redisPort] = redisEndpoint.split(":");

// connect to redis and return client when ready
export const connectRedis = async () => {
  const client = new Redis(parseInt(redisPort), redisHost, {
    password: redisPassword,
  });

  const [promise, resolve, reject] = makePromise();
  client.on("connect", () => resolve(client));
  client.on("error", reject);

  return promise;
};

connectRedis().then((client) => {
  redis = client;
});
