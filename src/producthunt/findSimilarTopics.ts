// producthunt/findSimilarTopics.ts

import _ from "lodash";
import VectorMath from "@seregpie/vector-math";

import embedding from "../openai/embedding";
import getTopicsWithEmbeddings from "./getTopicsWithEmbeddings";

export const findSimilarTopics = async (query, top = 3) => {
  const queryEmbedding = await embedding(query);
  const topicEmbeddings = await getTopicsWithEmbeddings();

  // Calculate cosine similarities between topic embeddings and the query embedding
  const querySimilarities = topicEmbeddings
    .map(({ slug, embedding }) => ({
      slug,
      similarity: VectorMath.CosineSimilarity(queryEmbedding, embedding),
    }))
    .sort((a, b) => b.similarity - a.similarity);

  // Return `top` similar topic slugs
  return _(querySimilarities).map("slug").take(top).value();
};

export default findSimilarTopics;
