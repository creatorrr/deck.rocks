// env.ts

import _ from "lodash";
import path from "path";

export let {
  OPENAI_API_SECRET: apiKey,
  HUGGINGFACE_API_TOKEN: huggingfaceToken,
  REPLICATE_API_KEY: replicateApiKey,
  REPLICATE_MODEL_VERSION: replicateModelVersion,
  REDIS_URL: redisUrl = "0.0.0.0:6379",
  PEXELS_API_KEY: pexelsApiKey,
  PRODUCT_HUNT_TOKEN: productHuntToken,
  MAX_JOBS_PER_WORKER: _maxJobsPerWorker,
  PORT: _port,
  HIGH_ACCURACY: _highAccuracy,
  ENABLE_ADS: _enableAds,
  STRICT_FILTER_MODE: _strictFilterMode,
  GOOGLE_ANALYTICS_ID: googleAnalyticsId = "G-88P3G4KMHX",
  GOOGLE_ADS_CLIENT_ID: googleAdsClientId = "ca-pub-9216734241053665",
  DEBUG: _debug,
  DEFAULT_REDIS_TTL: _defaultRedisTtl,
  DEFAULT_TASK_TIMEOUT: _defaultTaskTimeout,
  SENTRY_DSN: sentryDsn = "",
  HOSTNAME: hostname = "http://localhost:3000",
  PDF_API_KEY: pdfApiKey,
  PDF_API_ENDPOINT: pdfApiEndpoint = "https://pdf.deck.rocks/api/render",
} = process.env;

export const debug = !_.isUndefined(_debug);

export const enableAds = !_.isUndefined(_enableAds);
export const highAccuracy = !_.isUndefined(_highAccuracy);
export const strictFilterMode = !_.isUndefined(_strictFilterMode);
export const maxJobsPerWorker = parseInt(_maxJobsPerWorker || "") || 50;
export const port = parseInt(_port || "") || 3000;

export const defaultRedisTtl = parseInt(_defaultRedisTtl || "") || 48 * 3600; // 48 hours
export const defaultTaskTimeout =
  parseInt(_defaultTaskTimeout || "") || 60 * 1000; // 60 seconds

export const assetsPath = path.join(__dirname, "../assets");
export const viewsPath = path.join(__dirname, "./views");

export const replicateEndpoint = "https://api.replicate.com/v1/predictions";

export const PRODUCT_HUNT_ENDPOINT =
  "https://ph-graph-api-explorer.herokuapp.com/graphql";
export const OWEN_ENDPOINT =
  "https://owen-wilson-wow-api.herokuapp.com/wows/random";
export const QUOTES_ENDPOINT = "https://quotes.rest/qod";
export const minInputLength: number = 30;
export const maxInputLength: number = (5 + 1) * 120; // 120 words with an average of 5 chars each and spaces
export const maxPromptLength: number = maxInputLength + (5 + 1) * 640; // 640 words with an average of 5 chars each and spaces

export const huggingfaceQnAModel: string = "allenai/macaw-large";
export const huggingfaceFinanceModel: string = "diwank/bartner";

export const huggingtweetModels: string[] = [
  "wallstreetbets",
  "realdonaldtrump",
  "billgates",
  "arstechnica",
  "barackobama",
  "elonmusk",
  "normmacdonald",
  "gordonramsay",
];

export const openaiModels = {
  embedding: highAccuracy
    ? "text-similarity-davinci-001"
    : "text-similarity-curie-001",
  complete: highAccuracy ? "text-davinci-003" : "text-curie-001",
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

export const defaultHuggingfaceOptions = {
  use_gpu: false,
  wait_for_model: true,
};

export const maxGalleryItems: number = 48;

// Log important info
console.log(`
Config:
- models: ${_(openaiModels).values().join(", ")}
- redis url: ${redisUrl}
- high accuracy: ${highAccuracy}
- strict filter: ${strictFilterMode}
`);
