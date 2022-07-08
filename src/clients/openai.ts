// clients/openai.ts

import { Configuration, OpenAIApi } from "openai";

import { apiKey } from "../env";

const config = new Configuration({ apiKey });
export const openai = new OpenAIApi(config);

export default openai;
