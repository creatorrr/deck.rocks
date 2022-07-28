// openai/complete.ts

import type { PromptConfig } from "../utils/createPrompt";

import { setTimeout } from "node:timers/promises";
import _ from "lodash";

// import { memoize } from "../clients/cache";
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
  // Stagger requests so rate limit is not triggered
  await setTimeout(_.random(1, 3) * 50);

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

  choices?.forEach((c) => {
    c.text = c?.text?.replaceAll(separatorJunk, "");
  });

  return choices;
}

export default complete;
// export default memoize(complete);
