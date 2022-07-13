// openai/safety.ts

import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels, SAFETY_MAP } from "../env";

async function safety(content) {
  const {
    data: { choices },
  } = await openai.createCompletion({
    model: openaiModels.safety,
    prompt: `<|endoftext|>${content}
--
Label:`,
    max_tokens: 1,
    temperature: 0.0,
    top_p: 0.0,
    logprobs: 10,
    n: 1,
  });

  const [{ text: result }, ...rest] = choices;
  return SAFETY_MAP[result];
}

// const safety = memoize(_safety);

export default safety;
