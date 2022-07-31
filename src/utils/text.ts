// utils/text.ts

import _ from "lodash";
import processText from "../text/process";

const profanitiesSource = "retext-profanities";

export const isProfane = async (input: string) => {
  const { messages } = await processText(input);
  return _(messages).map("source").includes(profanitiesSource);
};

export const capitalCase = (str: string): string => {
  if (!str) return str;

  const s = _.camelCase(str);
  return `${s[0].toUpperCase()}${s.slice(1)}`;
};
