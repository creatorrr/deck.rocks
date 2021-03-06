// huggingface/embed.ts

import assert from "node:assert";
import _ from "lodash";

import * as hf from "../clients/huggingface";
import Sentry from "../clients/sentry";

export default async function embed(
  inputs: string | string[]
): Promise<number[][]> {
  const model = "sentence-transformers/all-mpnet-base-v2";
  const data = { inputs };

  const results = await hf.queryApi(data, model, "feature-extraction");

  if ("error" in results) {
    console.error(results.error);
    Sentry.captureException(results.error);

    throw new Error(results.error);
  }

  assert(_.isArrayLike(results), "Non-array returned from embedding endpoint");

  return results as any;
}
