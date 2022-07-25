// huggingface/qna.ts

import _ from "lodash";

import * as hf from "../clients/huggingface";
import { HF_TASK } from "../env";
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
  const data = { ...opts, inputs };

  const results = await hf.queryApi(data, HF_TASK.QNA);
  return results.map(({ generated_text }) =>
    generated_text.replace("$answer$ =", "").trim()
  );
}
