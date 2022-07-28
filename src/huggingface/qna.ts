// huggingface/qna.ts

import _ from "lodash";

import complete from "./complete";

import { huggingfaceQnAModel } from "../env";
import { AtoZ } from "../utils/misc";

export interface MCQ {
  question: string;
  choices?: string[];
  context?: string;
}

export const makeMCInput = ({
  choices = [],
  question,
  context = "",
}: MCQ): string =>
  [
    "$answer$",
    choices.length &&
      "$mcoptions$ = " +
        _(AtoZ)
          .zip(choices)
          .filter(1)
          .map(([i, choice]) => `(${i}) ${choice}`)
          .join(" "),
    context && `$context$ = ${context}`,
    `$question$ = ${question}`,
  ]
    .filter((x) => !!x)
    .join(" ; ");

export async function answerQuestion(mcq: MCQ, opts = {}) {
  const inputs: string = makeMCInput(mcq);

  return await complete(inputs, huggingfaceQnAModel, "$answer$ =", opts);
}
