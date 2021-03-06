// openai/edited.ts

import { setTimeout } from "node:timers/promises";
import grammarify from "grammarify";
import _ from "lodash";

// import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultEditOpts = {
  model: openaiModels.edited,
  instruction:
    "Edit the text to remove grammatical mistakes and make it sound more positive.",
  temperature: 0.2,
  n: 2,
};

async function edited(input: string, opts = {}) {
  // Stagger requests so rate limit is not triggered
  await setTimeout(_.random(1, 3) * 50);

  const {
    data: { choices },
  } = await openai.createEdit({
    ...defaultEditOpts,
    ...opts,
    input,
  });

  choices?.forEach((c) => {
    c.text = grammarify.clean(c?.text?.trim());
  });

  return choices;
}

export default edited;
// export default memoize(edited);
