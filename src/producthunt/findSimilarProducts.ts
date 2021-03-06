// producthunt/findSimilarProducts.ts

import _ from "lodash";

import { calculateSimilarity } from "../utils/similarity";
import findSimilarTopics from "./findSimilarTopics";
import getProducts from "./getProducts";

export const findSimilarProducts = async (
  idea: string,
  numTopics = 1,
  each = 3,
  threshold: number = 0.65
) => {
  const topics = await findSimilarTopics(idea, numTopics);

  const products = _(await Promise.all(topics.map((t) => getProducts(t))))
    .flatten()
    .value();

  const similarities = await calculateSimilarity(
    idea,
    _.map(products, "tagline")
  );

  const ranked = _(products).zip(similarities).sortBy([1]).reverse().value();

  return _(ranked)
    .filter(([_product, similarity = 0]) => similarity > threshold)
    .take(each)
    .map(0)
    .value();
};

export default findSimilarProducts;
