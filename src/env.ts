// env.ts

import path from "path";

export const {
  OPENAI_API_SECRET: apiKey,
  REPLICATE_API_KEY: replicateApiKey,
  REPLICATE_MODEL_VERSION: replicateModelVersion,
  REDIS_ENDPOINT: redisEndpoint,
  REDIS_USER: redisUser,
  REDIS_PASSWORD: redisPassword,
  PEXELS_API_KEY: pexelsApiKey,
  PRODUCT_HUNT_TOKEN: productHuntToken,
} = process.env;

export const assetsPath = path.join(__dirname, "../assets");
export const viewsPath = path.join(__dirname, "./views");

export const PORT = parseInt(process.env.PORT) || 3000;

export const replicateEndpoint = "https://api.replicate.com/v1/predictions";

export const PRODUCT_HUNT_ENDPOINT =
  "https://ph-graph-api-explorer.herokuapp.com/graphql";
export const OWEN_ENDPOINT =
  "https://owen-wilson-wow-api.herokuapp.com/wows/random";
export const QUOTES_ENDPOINT = "https://quotes.rest/qod";
export const MAX_INPUT_LENGTH = (5 + 1) * 120; // 120 words with an average of 5 chars each and spaces

export const openaiModels = {
  embedding: "text-similarity-ada-001",
  complete: "text-davinci-002",
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
