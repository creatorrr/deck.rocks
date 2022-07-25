// openai/edited.ts

import grammarify from "grammarify";

// import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultEditOpts = {
  model: openaiModels.edited,
  instruction: "Fix spelling and grammatical mistakes in the text",
  temperature: 0.3,
};

async function edited(input: string, opts = {}) {
  const {
    data: { choices },
  } = await openai.createEdit({
    ...defaultEditOpts,
    ...opts,
    input,
  });

  return choices.map((c) => ((c.text = grammarify.clean(c.text.trim())), c));
}

export default edited;
// export default memoize(edited);
