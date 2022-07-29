// views/site/Problem.tsx

import type { StockImage } from "../deck/Opening";
import type { ProblemProps } from "../deck/Problem";

import { sample } from "lodash";

export interface SiteProblemProps extends ProblemProps {
  stockImages: StockImage[];
}

export default ({ stockImages, problem }: SiteProblemProps) => (
  <article
    style={{
      background: `url(${sample(stockImages)?.large2x})`,
    }}
  >
    <h2 className="inverted-color">Problem</h2>
    <h4 className="inverted-color">{problem}</h4>
  </article>
);
