// openai/embedding.ts

import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultEmbeddingOpts = {
  model: openaiModels.embedding,
};

async function _embedding(input, opts={}) {
  const { data: { data: [{ embedding }] }} = await openai.createEmbedding({
    ...defaultEmbeddingOpts,
    ...opts,
    input,
  });

  return embedding;
}

export const embedding = memoize(_embedding);
export default embedding;
