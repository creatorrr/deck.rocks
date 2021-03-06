// clients/huggingface.ts

import { debug, defaultHuggingfaceOptions, huggingfaceToken } from "../env";

export interface HasError {
  error?: string;
}

export interface HFResponse {
  generated_text?: string;
}

export async function queryApi(
  data: Record<string, any>,
  model: string,
  pipeline: string | null = null
): Promise<HasError | HFResponse[] | number[][]> {
  data = Object.assign({ options: defaultHuggingfaceOptions }, data);

  const endpoint: string =
    pipeline !== null
      ? `https://api-inference.huggingface.co/pipeline/${pipeline}/${model}`
      : `https://api-inference.huggingface.co/models/${model}`;

  const response = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${huggingfaceToken}` },
    method: "POST",
    body: JSON.stringify(data),
  });

  const results = await response.json();

  if (debug && pipeline !== "feature-extraction") console.debug(results);

  return results;
}

export default queryApi;
