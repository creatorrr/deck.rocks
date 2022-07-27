// generate/predictBusinessModel.ts

import type { BusinessModel } from "../utils/businessModel";

import _ from "lodash";

import businessModels from "../data/businessModels";
import { answerQuestion } from "../huggingface/qna";
import { calculateSimilarity } from "../utils/similarity";

export const predictBusinessModel = async (
  idea: string
): Promise<BusinessModel> => {
  const modelNames: string[] = _.map(businessModels, "name");
  const answer = await answerQuestion({
    context: idea,
    choices: modelNames,
    question: "What is the company's business model?",
  });

  const modelSimilarities = await calculateSimilarity(answer, modelNames);
  const foundName = _(modelNames)
    .zip(modelSimilarities)
    .sortBy([1])
    .map(0)
    .last();

  let modelFound: BusinessModel | undefined = _.find(
    businessModels,
    ({ name }) => name === foundName
  );

  if (!modelFound) {
    console.error(
      `Predicted business model name: ${answer} does not match known models`
    );
    modelFound = _.sample(businessModels);
  }

  return modelFound as any;
};

export default predictBusinessModel;
