// views/site/MarketSize.tsx

import type { MarketSizeProps } from "../deck/MarketSize";

import _ from "lodash";
import millify from "millify";

import gdps from "../../data/gdps";
import BarChart from "../utils/BarChart";

const one_mil: number = 1_000_000;

const getComparableGDP = (marketSize: number): [string, number] =>
  _(gdps)
    .entries()
    .map(([entity, gdp]) => [entity + "'s GDP", gdp * one_mil])
    .filter(([_entity, gdp]) => gdp < marketSize)
    .maxBy(1) as any;

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

    <p>
      According to{" "}
      <a href="https://huggingface.co/diwank/bartner" target="_blank">
        Gartner<sup>🤖</sup>
      </a>
      , this is how big the market for{" "}
      <b>
        <u>{keywords}</u>
      </b>{" "}
      is at the moment!
    </p>
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
