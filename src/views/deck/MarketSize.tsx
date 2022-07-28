// views/deck/MarketSize.tsx

import type { StockImage } from "./Opening";

import { sample } from "lodash";
import millify from "millify";

export interface MarketSizeProps {
  stockImages: StockImage[];
  marketSize: number;
  keywords: string;
}

export default ({ stockImages, marketSize, keywords }: MarketSizeProps) => (
  <section id="market-size">
    <h2>Market Size</h2>

    <h3
      className="lh1 inverted-color bg-cover align-right"
      style={{
        backgroundImage: `url(${sample(stockImages)?.large2x})`,
      }}
    >
      $
      {millify(marketSize, {
        precision: 2,
      })}
    </h3>

    <p className="small-60">
      According to Gartner, this is how big the market for{" "}
      <b>
        <u>{keywords}</u>
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
