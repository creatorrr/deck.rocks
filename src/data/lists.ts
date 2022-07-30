// data/lists.ts

export const revealThemes = [
  ...["moon", "solarized"].map(
    (name) =>
      `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/theme/${name}.min.css`
  ),
  "/css/metropolis.css",
  "https://cdn.jsdelivr.net/gh/puzzle/pitc-revealjs-theme/theme/puzzle.css",
];

export const gradients = [
  `linear-gradient(to right top, #FDBB2D 0%, #22C1C3)`,
  `linear-gradient(to right top, #00C9FF 0%, #92FE9D 100%)`,
  `linear-gradient(to left bottom, #d53369 0%, #daae51 100%)`,
];

export const thanku = [
  ["https://openai.com/blog/openai-api/", "The OpenAI team"],
  ["https://github.com/borisdayma/dalle-mini", "The Dall-E mini team"],
  ["https://api.producthunt.com/v2/docs", "ProductHunt API"],
  ["https://huggingface.co/diwank", "🤗 HuggingFace team"],
  ["https://www.pexels.com/api/", "Pexels API"],
  ["http://owen-wilson-wow-api.herokuapp.com", "Owen Wilson WOW API"],
  ["https://simplecss.org/", "simple.css"],
  ["https://revealjs.com/", "reveal.js"],
  ["https://undraw.co", "undraw.co for illustrations"],
  ["https://heroku.com", "Heroku"],
];
