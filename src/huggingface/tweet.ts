// huggingface/tweet.ts

import _ from "lodash";

import complete from "./complete";

export default async function tweet(
  idea: string,
  twitterHandle: string,
  signal?: AbortSignal
) {
  const model = `huggingtweets/${twitterHandle}`;
  const inputs = `"${idea}". I think this idea is`;

  return await complete(inputs, model, inputs, {}, signal);
}
