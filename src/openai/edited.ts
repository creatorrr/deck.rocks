// openai/edited.ts

// import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultEditOpts = {
  model: openaiModels.edited,
  instruction: "Fix spelling and grammatical mistakes in the text",
  temperature: 0.3,
};

async function edited(input, opts = {}) {
  const {
    data: { choices },
  } = await openai.createEdit({
    ...defaultEditOpts,
    ...opts,
    input,
  });

  return choices;
}

export default edited;
// export default memoize(edited);
