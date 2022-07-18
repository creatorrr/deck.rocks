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

export const calculateSimilarity = async (src: string, targets: string[]) => {
  // Calc embeddings
  const [srcE, ...targetsE] = await localEmbed([src, ...targets]);

  // calc cosine similarity
  const scores = targetsE.map((y) => VectorMath.AngularSimilarity(srcE, y));

  return scores;
};

// Returns index
export const selectByAnalogy = (
  As: number[][],
  Bs: number[][],
  C: number[],
  op: string = "sub"
): number => {
  const DCs: number[][] = Bs.map((D) => VectorMath[op](D, C));

  const BAs: number[][] = Bs.map((B, i) => VectorMath[op](B, As[i]));

  const [mostSimilarIndex] = _(BAs)
    .zip(DCs)
    .map(([BA, DC]) => VectorMath.AngularSimilarity(BA, DC))
    .map((sim, i) => [i, sim])
    .sortBy([1])
    .last();

  return mostSimilarIndex;
};
