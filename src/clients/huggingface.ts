// clients/huggingface.ts

import { debug, huggingfaceToken, HF_TASK, huggingfaceModels } from "../env";

export interface HFResponse {
  generated_text?: string;
}

const defaultOptions = {
  use_gpu: true,
  wait_for_model: true,
};

export async function queryApi(
  data: Record<string, any>,
  task: HF_TASK
): Promise<HFResponse[]> {
  const model: string = huggingfaceModels[task];
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
