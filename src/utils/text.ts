// utils/text.ts

import _ from "lodash";
import processText from "../text/process";

const profanitiesSource = "retext-profanities";

export const isProfane = async (input: string) => {
  const { messages } = await processText(input);
  console.log(messages);

  return _(messages).map("source").includes(profanitiesSource);
};

export const capitalCase = (str: string): string => {
  if (!str) return str;

  const s = _.camelCase(str);
  return `${s[0].toUpperCase()}${s.slice(1)}`;
};

export const ellipsize = (input: string, maxLength: number = 160): string =>
  input.length < maxLength ? input : input.substring(0, maxLength) + "...";

export const extractIdeaName = (idea: string): string | null => {
  const namePattern: RegExp = /(?<name>[\w\d]+\s{0,1}[\w\d]+):/i;
  const { name } = idea.match(namePattern)?.groups || {};

  return name || null;
};
