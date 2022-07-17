// env.ts

import _ from "lodash";
import path from "path";

export let {
  OPENAI_API_SECRET: apiKey,
  REPLICATE_API_KEY: replicateApiKey,
  REPLICATE_MODEL_VERSION: replicateModelVersion,
  REDIS_URL: redisUrl,
  PEXELS_API_KEY: pexelsApiKey,
  PRODUCT_HUNT_TOKEN: productHuntToken,
  MAX_JOBS_PER_WORKER: _maxJobsPerWorker,
  PORT: _port,
  HIGH_ACCURACY: _highAccuracy,
  GOOGLE_ANALYTICS_ID: googleAnalyticsId,
} = process.env;

googleAnalyticsId = googleAnalyticsId || "G-88P3G4KMHX";

export const highAccuracy = !_.isUndefined(_highAccuracy);
export const maxJobsPerWorker = parseInt(_maxJobsPerWorker) || 50;
export const port = parseInt(_port) || 3000;

redisUrl = redisUrl || "0.0.0.0:6379";
export const redisSettings = redisUrl.includes("0.0.0.0")
  ? {}
  : {
      tls: {
        rejectUnauthorized: false,
      },
    };

export const assetsPath = path.join(__dirname, "../assets");
export const viewsPath = path.join(__dirname, "./views");

export const replicateEndpoint = "https://api.replicate.com/v1/predictions";

export const PRODUCT_HUNT_ENDPOINT =
  "https://ph-graph-api-explorer.herokuapp.com/graphql";
export const OWEN_ENDPOINT =
  "https://owen-wilson-wow-api.herokuapp.com/wows/random";
export const QUOTES_ENDPOINT = "https://quotes.rest/qod";
export const MIN_INPUT_LENGTH = 30;
export const MAX_INPUT_LENGTH = (5 + 1) * 120; // 120 words with an average of 5 chars each and spaces

export const openaiModels = {
  embedding: highAccuracy
    ? "text-similarity-curie-001"
    : "text-similarity-ada-001",
  complete: highAccuracy ? "text-davinci-002" : "text-curie-001",
  edited: "text-davinci-edit-001",
  safety: "content-filter-alpha",
};

// From: https://beta.openai.com/docs/models/content-filter
export const SAFETY_MAP = {
  0: "SAFE",
  1: "SENSITIVE",
  2: "UNSAFE",
};

// Frontend config
export const frontendConfig: { [key: string]: any } = {
  contentSelector: "#content",
};

// Log important info
console.log(`
Config:
- models: ${_(openaiModels).values().join(", ")}
- redis url: ${redisUrl}
- high accuracy: ${highAccuracy}
`);
