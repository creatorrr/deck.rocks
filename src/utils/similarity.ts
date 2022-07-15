// utils/similarity.ts

import "@tensorflow/tfjs";
import _ from "lodash";
import { load as loadUSE } from "@tensorflow-models/universal-sentence-encoder";

import { cosineSim } from "./math";

// Preload when this model is imported
const modelP = loadUSE();

export const calculateSimilarity = async (src: string, targets: string[]) => {
  const model = await modelP;

  // Calc embeddings
  const embeddings = await model.embed([src, ...targets]);
  const [srcE, ...targetsE] = await embeddings.array();

  // calc cosine similarity
  const scores = targetsE.map((y) => cosineSim(srcE, y));

  return scores;
};
