// generate/calcMarketSize.ts

import _ from "lodash";
import nlp from "compromise";

import { huggingfaceFinanceModel } from "../env";
import complete from "../huggingface/complete";

export const calcMarketSize = async (keywords: string): Promise<number> => {
  const answer = await complete(
    `The market size in US dollars for "${keywords}" industry is`,
    huggingfaceFinanceModel
  );

  const doc = nlp(answer);

  const numbers = doc.money().get();

  const hundred_mil = 100_000_000;
  let lowest: number =
    _.min(numbers.filter((x: number) => x > hundred_mil)) || 0;
  lowest = _.max([lowest, hundred_mil]); // Default to min 100 M

  return lowest;
};

export default calcMarketSize;
