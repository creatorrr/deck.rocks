// openai/complete.ts

import grammarify from "grammarify";

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

async function complete(prompt: string, opts = {}) {
  prompt = grammarify.clean(prompt);

  const {
    data: { choices },
  } = await openai.createCompletion({
    ...defaultCompleteOpts,
    ...opts,
    prompt,
  });

  return choices.map((c) => ((c.text = grammarify.clean(c.text.trim())), c));
}

export default memoize(complete);
