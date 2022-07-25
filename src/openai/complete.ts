// openai/complete.ts

import type { PromptConfig } from "../utils/createPrompt";

import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";
import createPrompt from "../utils/createPrompt";

const defaultCompleteOpts = {
  model: openaiModels.complete,
  temperature: 0.8,
  max_tokens: 300,
  best_of: 2,
  n: 1,
};

async function complete(promptConfig: PromptConfig, opts = {}) {
  const sampleSeparator: string = (promptConfig.sampleSeparator =
    promptConfig.sampleSeparator || "\n---\n\n");

  const separatorJunk = sampleSeparator.trim();

  const prompt: string = createPrompt(promptConfig);

  const {
    data: { choices },
  } = await openai.createCompletion({
    ...defaultCompleteOpts,
    ...opts,
    prompt,
  });

  return choices.map(
    (c) => ((c.text = c.text.replaceAll(separatorJunk, "")), c)
  );
}

export default memoize(complete);
