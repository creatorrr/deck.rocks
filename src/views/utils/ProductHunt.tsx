// views/utils/ProductHunt.tsx

import React from "react";

export interface ProductHuntProps {
  theme?: "light" | "neutral" | "dark";
  imgStyle?: React.CSSProperties;
  aStyle?: React.CSSProperties;
  size?: 1 | 2;
}

export const ProductHuntProof = ({
  theme = "light",
  aStyle = {},
  imgStyle = {},
  size = 2,
}: ProductHuntProps) => (
  <a
    href="https://www.producthunt.com/products/deck-rocks?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-deck&#0045;rocks"
    style={aStyle}
    target="_blank"
  >
    <img
      src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=354234&period=daily&theme=${theme}`}
      alt="deck&#0046;rocks - Generate&#0032;pitch&#0032;decks&#0032;using&#0032;GPT3&#0032;from&#0032;1&#0032;liner&#0032;ideas | Product Hunt"
      style={{
        width: `${250 / (2 / size)}px`,
        height: `${54 / (2 / size)}px`,
        ...imgStyle,
      }}
      width={`${250 / (2 / size)}px`}
      height={`${54 / (2 / size)}px`}
    />
  </a>
);

export default ({
  theme = "light",
  aStyle = {},
  imgStyle = {},
  size = 2,
}: ProductHuntProps) => (
  <a
    href={`https://www.producthunt.com/posts/deck-rocks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-deck&#0045;rocks`}
    style={aStyle}
    target="_blank"
  >
    <img
      src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=354234&theme=${theme}`}
      alt="deck&#0046;rocks - Generate&#0032;pitch&#0032;decks&#0032;using&#0032;GPT3&#0032;from&#0032;1&#0032;liner&#0032;ideas | Product Hunt"
      style={{
        width: `${250 / (2 / size)}px`,
        height: `${54 / (2 / size)}px`,
        ...imgStyle,
      }}
      width={`${250 / (2 / size)}px`}
      height={`${54 / (2 / size)}px`}
    />
  </a>
);
