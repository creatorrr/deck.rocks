// generate/calcMarketSize.ts

import _ from "lodash";
import nlp from "compromise";

import { debug } from "../env";
import { answerQuestion } from "../huggingface/qna";

export const calcMarketSize = async (idea: string): Promise<number> => {
  const answers = await answerQuestion({
    question: `What is the market size in dollars for "${idea}"?`,
  });

  const doc = nlp(answers.join("\n"));

  const numbers = doc.numbers().get();
  let top: number = _.max(numbers);

  if (!top) {
    console.error(`${top} is not a valid market size.`);
    top = top || 100_000_000; // Default to 100 M
  }

  debug && console.debug(answers, top);
  return top;
};

export default calcMarketSize;
