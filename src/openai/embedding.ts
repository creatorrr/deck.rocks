// openai/embedding.ts

// import { memoize } from "../clients/cache";
import openai from "../clients/openai";
import { openaiModels } from "../env";

const defaultEmbeddingOpts = {
  model: openaiModels.embedding,
};

async function embedding(input, opts = {}) {
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

export default embedding;
// export default memoize(embedding);
