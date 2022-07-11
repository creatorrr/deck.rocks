// views/format-site/MarketSize.tsx

import { sample } from "lodash";
import type { MarketSizeProps } from "../format-deck/MarketSize";

export default ({
  stockImages,
  marketSize,
  keywords,
  marketSizeDenomination = "billion",
}: MarketSizeProps) => (
  <section id="market-size">
    <h2>Market Size</h2>
    <h3
      className="lh1 align-right bg-cover inverted-color"
      style={{
        backgroundImage: `url(${sample(stockImages).src.large})`,
      }}
    >
      ${marketSize}
      {marketSizeDenomination[0].toUpperCase()}
    </h3>

    <p>
      According to Gartner, his is how big the market for
      <b>
        <u>{keywords}, etc</u>
      </b>{" "}
      is at the moment!
    </p>
    <code> And it will only keep getting bigger. (-•̀ᴗ•́-)و-̑̑ </code>
  </section>
);
