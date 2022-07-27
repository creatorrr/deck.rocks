// openai/embedding.ts

import { setTimeout } from "node:timers/promises";
import _ from "lodash";

import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultEmbeddingOpts = {
  model: openaiModels.embedding,
};

async function embedding(input: string, opts = {}) {
  // Stagger requests so rate limit is not triggered
  await setTimeout(_.random(1, 3) * 50);

  const {
    data: {
      data: [{ embedding }],
    },
  } = await openai.createEmbedding({
    ...defaultEmbeddingOpts,
    ...opts,
    input,
  });

  return embedding;
}

// export default embedding;
export default memoize(embedding);
