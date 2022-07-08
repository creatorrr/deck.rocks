// openai/complete.ts

import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultCompleteOpts = {
  model: openaiModels.complete,
  temperature: 0.8,
  max_tokens: 300,
  best_of: 2,
  n: 1,
};

async function _complete(prompt, opts={}) {
  const { data: { choices }} = await openai.createCompletion({
    ...defaultCompleteOpts,
    ...opts,
    prompt,
  });

  return choices.map(c => (c.text = c.text.trim(), c));
}

export const complete = memoize(_complete);
export default complete;
