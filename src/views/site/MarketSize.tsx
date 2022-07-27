// views/site/MarketSize.tsx

import type { MarketSizeProps } from "../deck/MarketSize";

import { sample } from "lodash";
import millify from "millify";

export default ({ stockImages, marketSize, keywords }: MarketSizeProps) => (
  <section id="market-size">
    <h2>Market Size</h2>
    <h3
      className="lh1 align-right bg-cover inverted-color"
      style={{
        backgroundImage: `url(${sample(stockImages)?.src.large2x})`,
      }}
    >
      $
      {millify(marketSize, {
        precision: 2,
      })}
    </h3>

    <p>
      According to Gartner, his is how big the market for{" "}
      <b>
        <u>{keywords}</u>
      </b>{" "}
      is at the moment!
    </p>
    <code> And it will only keep getting bigger. (-•̀ᴗ•́-)و-̑̑ </code>
  </section>
);
