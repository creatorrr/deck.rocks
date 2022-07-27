// producthunt/findSimilarTopics.ts

import _ from "lodash";
import VectorMath from "@seregpie/vector-math";

import embed from "../huggingface/embed";
import getTopicsWithEmbeddings from "./getTopicsWithEmbeddings";

const preloadedTopicEmbeddings = getTopicsWithEmbeddings();

export const findSimilarTopics = async (query: string, top = 3) => {
  const queryEmbedding = await embed(query);
  const topicEmbeddings = await preloadedTopicEmbeddings;

  // Calculate cosine similarities between topic embeddings and the query embedding
  // Return `top` similar topic slugs
  const similarTopics = _(topicEmbeddings)
    .map(({ slug, embedding }) => ({
      slug,
      similarity: VectorMath.AngularSimilarity(queryEmbedding, embedding),
    }))
    .sortBy("similarity")
    .takeRight(top)
    .map("slug")
    .value();

  return similarTopics;
};

export default findSimilarTopics;
