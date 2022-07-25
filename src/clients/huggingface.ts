// clients/huggingface.ts

import { debug, huggingfaceToken } from "../env";

export interface HasError {
  error?: string;
}

export interface HFResponse {
  generated_text?: string;
}

const defaultOptions = {
  use_gpu: false,
  wait_for_model: false,
};

export async function queryApi(
  data: Record<string, any>,
  model: string
): Promise<HasError | HFResponse[]> {
  data = Object.assign({ options: defaultOptions }, data);

  const response = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      headers: { Authorization: `Bearer ${huggingfaceToken}` },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  const results = await response.json();

  debug && console.debug(results);

  return results;
}

export default queryApi;
