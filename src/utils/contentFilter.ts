// utils/contentFilter.ts

import assert from "node:assert/strict";

import { CreateCompletionResponseChoicesInner } from "openai";

import { strictFilterMode } from "../env";

const is0 = (label: string) => label === "0";
const not2 = (label: string) => label !== "2";

// As instructed in https://beta.openai.com/docs/models/content-filter
export const processCFPrediction = (
  choices: CreateCompletionResponseChoicesInner[],
  toxicThreshold: number = -0.355,
  isSafe: (label: string) => boolean = strictFilterMode ? is0 : not2
): boolean => {
  // toxicThreshold:
  // This is the probability at which we evaluate that a "2" is likely real
  // vs. should be discarded as a false positive

  assert(choices.length > 0);

  const outputLabel = choices[0].text;
  let finalLabel: string = outputLabel;

  // if the most probable token is none of "0", "1", or "2"
  // this should be set as unsafe
  if (!["0", "1", "2"].includes(outputLabel)) {
    return false;
  }

  if (outputLabel === "2") {
    // If the model returns "2", return its confidence in 2 or other output-labels
    const logprobs = choices[0].logprobs.top_logprobs[0];

    // If the model is not sufficiently confident in "2",
    // choose the most probable of "0" or "1"
    // Guaranteed to have a confidence for 2 since this was the selected token.

    if (logprobs["2"] < toxicThreshold) {
      const logprob_0 = logprobs["0"];
      const logprob_1 = logprobs["1"];

      // If both "0" and "1" have probabilities, set the output label
      // to whichever is most probable
      if (logprob_0 && logprob_1) {
        if (logprob_0 >= logprob_1) finalLabel = "0";
        else finalLabel = "1";
      }

      // If only one of them is found, set output label to that one
      else if (logprob_0) finalLabel = "0";
      else if (logprob_1) finalLabel = "1";
    }
    // If neither "0" or "1" are available, stick with "2"
    // by leaving finalLabel unchanged.
  }

  return isSafe(finalLabel);
};
