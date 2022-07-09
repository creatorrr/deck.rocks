// producthunt/findSimilarProducts.ts

import { sampleSize } from "lodash";

import findSimilarTopics from "./findSimilarTopics";
import getProducts from "./getProducts";

export const findSimilarProducts = async (idea, numTopics = 1, each = 3) => {
  const topics = await findSimilarTopics(idea, numTopics);

  const products = (
    await Promise.all(topics.map((t) => getProducts(t)))
  ).flatMap((arr) => sampleSize(arr, each));

  return products;
};

export default findSimilarProducts;
