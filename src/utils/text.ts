// utils/text.ts

import _ from "lodash";
import processText from "../text/process";

const profanitiesSource = "retext-profanities";

export const isProfane = async (input: string) => {
  const { messages } = await processText(input);
  return _(messages).map("source").includes(profanitiesSource);
};
