// views/deck/MarketSize.tsx

import type { StockImage } from "./Opening";

import _ from "lodash";
import millify from "millify";

import { getComparableGDP } from "../../utils/businessModel";
import BarChart from "../utils/BarChart";

export interface MarketSizeProps {
  stockImages: StockImage[];
  marketSize: number;
  keywords: string;
}

export default ({ marketSize, keywords }: MarketSizeProps) => (
  <section id="market-size">
    <h2>Market Size</h2>
    <BarChart
      data={_([
        [keywords + " Market", marketSize],
        getComparableGDP(marketSize),
      ])
        .sortBy([1])
        .reverse()
        .value()}
      valueFormatter={(val: number) => `$${millify(val, { precision: 2 })}`}
    />
    <br />
    <small>
      Size of <b>{keywords}</b> market according to{" "}
      <a href="https://huggingface.co/diwank/bartner" target="_blank">
        Gartner<sup>🤖</sup>.
      </a>
    </small>
    <hr />
    <cite className="small">
      As opposed to{" "}
      <a href="https://www.worldometers.info/gdp/gdp-by-country/">
        {getComparableGDP(marketSize)[0]}
      </a>
      . And it will only keep getting bigger. (-•̀ᴗ•́-)و-̑̑
    </cite>
  </section>
);
