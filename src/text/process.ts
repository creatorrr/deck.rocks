// text/process.js

let _pipeline;

const createPipline = async () => {
  if (_pipeline) return _pipeline;

  const { unified } = await import("unified");

  const { default: dictionary } = await import("dictionary-en");
  const { default: retextEnglish } = await import("retext-english");
  const { default: retextQuotes } = await import("retext-quotes");
  const { default: retextContractions } = await import("retext-contractions");
  const { default: retextEmoji } = await import("retext-emoji");
  const { default: retextProfanities } = await import("retext-profanities");
  const { default: retextSpell } = await import("retext-spell");
  const { default: retextDiacritics } = await import("retext-diacritics");
  const { default: retextUsage } = await import("retext-usage");
  const { default: retextStringify } = await import("retext-stringify");

  _pipeline = unified()
    .use(retextEnglish)
    .use(retextQuotes, { preferred: "straight" })
    .use(retextContractions, { straight: true })
    .use(retextEmoji, { convert: "encode" })
    .use(retextProfanities, { sureness: 2 }) // See: https://github.com/words/cuss
    .use(retextSpell, dictionary)
    .use(retextDiacritics)
    .use(retextUsage)
    .use(retextStringify);

  return _pipeline;
};

export const process = async (input) => {
  const pipeline = await createPipline();
  return await pipeline.process(input);
};

export default process;
