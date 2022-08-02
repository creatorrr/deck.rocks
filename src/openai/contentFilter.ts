// openai/contentFilter.ts

import { setTimeout } from "node:timers/promises";
import _ from "lodash";

import openai from "../clients/openai";
import { openaiModels } from "../env";
import { processCFPrediction } from "../utils/contentFilter";

export { ContentPolicyError } from "./moderate";

export default async function contentFilter(input: string): Promise<boolean> {
  // Stagger requests so rate limit is not triggered
  await setTimeout(_.random(1, 3) * 50);

  try {
    const {
      data: { choices },
    } = await openai.createCompletion({
      prompt: `<|endoftext|>${input}\n--\nLabel:`,
      model: openaiModels.safety,
      max_tokens: 1,
      temperature: 0,
      top_p: 0,
      logprobs: 10,
    });

    return processCFPrediction(choices);
  } catch (e) {
    console.error(e);

    // Don't punish input if content-filter fails
    return true;
  }
}
