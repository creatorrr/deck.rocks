// utils/createPrompt.ts

import _ from "lodash";

import { MAX_INPUT_LENGTH } from "../env";

export const createPrompt = ({ instruction, labels, examples, query }, maxLength=MAX_INPUT_LENGTH) => `
${ instruction || "" }

${
  _.map(examples,  // Need to join examples
    ex => ex.map((el, i) => labels[i] + ": " + el).join("\n")
  ).join("\n---\n")
}${ _.isArray(examples) ? "\n---" : "" }
${ labels[0] }: ${ query.slice(0, maxLength) }
${ labels[1] }:
`.trim();

export default createPrompt;
