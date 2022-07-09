// text/process.js

import dictionary from "dictionary-en";
import retextEnglish from "retext-english";
import retextQuotes from "retext-quotes";
import retextContractions from "retext-contractions";
import retextEmoji from "retext-emoji";
import retextProfanities from "retext-profanities";
import retextSpell from "retext-spell";
import retextDiacritics from "retext-diacritics";
import retextUsage from "retext-usage";
import retextStringify from "retext-stringify";
import { unified } from "unified";

const pipeline = unified()
  .use(retextEnglish)
  .use(retextQuotes, { preferred: "straight" })
  .use(retextContractions, { straight: true })
  .use(retextEmoji, { convert: "encode" })
  .use(retextProfanities, { sureness: 2 }) // See: https://github.com/words/cuss
  .use(retextSpell, dictionary)
  .use(retextDiacritics)
  .use(retextUsage)
  .use(retextStringify);

export const process = async (input) => await pipeline.process(input);
export default process;
