// views/deck/MarketSize.tsx

import { sample } from "lodash";
import type { StockImage } from "./Opening";

export interface MarketSizeProps {
  stockImages: StockImage[];
  marketSize: string;
  keywords: string;
  marketSizeDenomination?: string;
}

export default ({
  stockImages,
  marketSize,
  keywords,
  marketSizeDenomination = "billion",
}: MarketSizeProps) => (
  <section id="market-size">
    <h2>Market Size</h2>

    <h3
      className="lh1 inverted-color bg-cover align-right"
      style={{
        backgroundImage: `url(${sample(stockImages).src.large})`,
      }}
    >
      {marketSize}
      {marketSizeDenomination[0].toUpperCase()}
    </h3>

    <p className="small-60">
      According to Gartner, this is how big the market for
      <b>
        <u>{keywords}, etc</u>
      </b>{" "}
      is at the moment!
      <br />
      <br />
      <code className="small-60">
        And it will only keep getting bigger. (-•̀ᴗ•́-)و-̑̑
      </code>
    </p>
  </section>
);
