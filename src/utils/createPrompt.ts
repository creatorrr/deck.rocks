// utils/createPrompt.ts

import assert from "node:assert/strict";
import _ from "lodash";

import { debug, maxInputLength, maxPromptLength } from "../env";

export interface PromptConfig {
  query: string | string[];
  examples?: string[][];
  instruction?: string;
  labels?: string[];
}

export const createPrompt = (
  { query, instruction = "", labels = ["Q", "A"], examples = [] }: PromptConfig,
  maxLength: number = maxInputLength
) => {
  if (_.isString(query)) query = [query];
  query.push("");

  assert(query.join("").length <= maxLength, "Input too long");

  assert(
    examples.every((example) => example.length === labels.length),
    "Examples need to follow the same structure as labels"
  );

  assert(
    labels.length === query.length,
    "Query should follow the same structure as labels"
  );

  const combined = [
    ...examples.map((example) => _.zip(labels, example)),
    _.zip(labels, query),
  ]
    .map((group) =>
      group.map(([label, text]) => `${label}: ${text}`).join("\n")
    )
    .join("\n---\n");

  assert(
    combined.length < maxPromptLength,
    `Input (${combined.length} chars) is too long. Should be less than ${maxPromptLength} chars`
  );

  const prompt: string = `
${instruction}

${combined}
`.trim();

  debug && console.debug("prompt", prompt);

  return prompt;
};

export default createPrompt;
