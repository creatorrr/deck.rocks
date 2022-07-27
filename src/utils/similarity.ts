// utils/similarity.ts

import "@tensorflow/tfjs";
import { load as loadUSE } from "@tensorflow-models/universal-sentence-encoder";

import _ from "lodash";
import VectorMath from "@seregpie/vector-math";

// Save reference to model promise
let modelP: Promise<any>;

export const localEmbed = async (
  srcs: string | string[]
): Promise<number[][]> => {
  if (_.isString(srcs)) srcs = [srcs];

  modelP = modelP || loadUSE();
  const model = await modelP;

  // Calc embeddings
  const embeddings = await model.embed(srcs);
  return await embeddings.array();
};

export const calculateSimilarity = async (
  src: string,
  targets: string[]
): Promise<number[]> => {
  // Calc embeddings
  const [srcE, ...targetsE] = await localEmbed([src, ...targets]);

  // calc cosine similarity
  const scores = targetsE.map((y) => VectorMath.AngularSimilarity(srcE, y));

  return scores;
};

// Returns index
export const selectByAnalogy = (
  As: { [key: string]: number[] },
  Bs: { [key: string]: number[] },
  C: number[],
  op: string = "sub"
): string => {
  const DCs: { [key: string]: number[] } = _(Bs)
    .entries()
    .map(([k, D]) => [k, VectorMath[op](D, C)])
    .fromPairs()
    .value();

  const BAs: { [key: string]: number[] } = _(Bs)
    .entries()
    .map(([k, B]) => [k, VectorMath[op](B, As[k])])
    .fromPairs()
    .value();

  const mostSimilarIndices = _(BAs)
    .entries()
    .map(([k, BA]) => [k, VectorMath.AngularSimilarity(BA, DCs[k])])
    .sortBy([1])
    .last();

  return mostSimilarIndices![0];
};
