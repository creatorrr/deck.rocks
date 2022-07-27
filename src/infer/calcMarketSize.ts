// generate/calcMarketSize.ts

import _ from "lodash";
import nlp from "compromise";

import { debug, huggingfaceFinanceModel } from "../env";
import complete from "../huggingface/complete";

export const calcMarketSize = async (keywords: string): Promise<number> => {
  const answers = await complete(
    `The market size in US dollars for "${keywords}" industry is`,
    huggingfaceFinanceModel
  );

  const doc = nlp(answers.join("\n"));

  const numbers = doc.numbers().get();
  let top: number = _.max(numbers) || 0;

  if (!top) {
    console.error(`${top} is not a valid market size.`);
    top = top || 100_000_000; // Default to 100 M
  }

  debug && console.debug(answers, top);
  return top;
};

export default calcMarketSize;
