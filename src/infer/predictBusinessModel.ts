// generate/predictBusinessModel.ts

import type { BusinessModel } from "../utils/businessModel";

import _ from "lodash";

import businessModels from "../data/businessModels";
import { answerMC } from "../huggingface/qna";

export const predictBusinessModel = async (
  idea: string
): Promise<BusinessModel> => {
  const modelNames: string[] = _.map(businessModels, "name");
  const [answer] = await answerMC({
    context: idea,
    choices: modelNames,
    question: "What is the company's business model?",
  });

  let modelFound: BusinessModel = _.find(
    businessModels,
    ({ name }) => name === answer
  );

  if (!modelFound) {
    console.error(
      `Predicted business model name: ${answer} does not match known models`
    );
    modelFound = _.sample(businessModels);
  }

  return modelFound;
};

export default predictBusinessModel;
