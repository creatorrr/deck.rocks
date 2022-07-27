// generate/calcMarketSize.ts

import _ from "lodash";
import nlp from "compromise";

import { debug, huggingfaceFinanceModel } from "../env";
import complete from "../huggingface/complete";

export const calcMarketSize = async (keywords: string): Promise<number> => {
  const answer = await complete(
    `The market size in US dollars for "${keywords}" industry is`,
    huggingfaceFinanceModel
  );

  const doc = nlp(answer);

  const numbers = doc.numbers().get();
  let lowest: number = _.min(numbers) || 0;

  if (!lowest) {
    console.error(`${top} is not a valid market size.`);
    lowest = lowest || 100_000_000; // Default to 100 M
  }

  return lowest;
};

export default calcMarketSize;
