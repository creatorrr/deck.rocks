// clients/openai.ts

import axios from "axios";
import axiosRetry from "axios-retry";
axiosRetry(axios, {
  retries: 3,
  retryCondition: (_error) => true, // Retry no matter what error
});

import { Configuration, OpenAIApi } from "openai";

import { apiKey } from "../env";

const config = new Configuration({ apiKey });
export const openai = new OpenAIApi(config);

export default openai;
