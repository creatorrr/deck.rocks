// huggingface/complete.ts

import _ from "lodash";

import * as hf from "../clients/huggingface";
import Sentry from "../clients/sentry";

export default async function complete(
  inputs: string,
  model: string,
  removeString: string = "",
  opts: Record<string, any> = {},
  signal?: AbortSignal
) {
  const data = { ...opts, inputs };

  const results = await hf.queryApi(data, model, null, signal);

  if ("error" in results) {
    console.error(results.error);
    Sentry.captureException(results.error);

    throw new Error(results.error);
  }

  const [{ generated_text }] = results as any;
  return generated_text.replace(removeString, "").trim();
}
