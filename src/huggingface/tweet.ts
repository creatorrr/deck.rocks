// huggingface/tweet.ts

import _ from "lodash";

import * as hf from "../clients/huggingface";

export default async function tweet(idea: string, twitterHandle: string) {
  const model = `huggingtweets/${twitterHandle}`;
  const inputs = `"${idea}". I think this idea is`;
  const data = {
    inputs,
  };

  const results = await hf.queryApi(data, model);

  if ("error" in results) throw new Error(results.error);

  const [{ generated_text }] = results as any;
  return generated_text.replace(inputs, "").trim();
}
