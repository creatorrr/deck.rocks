// data/lists.ts

export const revealThemes = [
  ...["white", "blood", "night", "moon", "solarized"].map(
    (name) =>
      `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/theme/${name}.min.css`
  ),
  "https://cdn.jsdelivr.net/gh/creatorrr/deck.rocks/assets/css/metropolis.css",
  "https://cdn.jsdelivr.net/gh/puzzle/pitc-revealjs-theme/theme/puzzle.css",
];

export const gradients = [
  `linear-gradient(to right top, #FDBB2D 0%, #22C1C3)`,
  `linear-gradient(to right top, rgb(250, 178, 234), rgb(82, 96, 255))`,
  `linear-gradient(to right top, #00C9FF 0%, #92FE9D 100%)`,
  `linear-gradient(to left bottom, #d53369 0%, #daae51 100%)`,
];
