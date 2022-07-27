// views/site/Solution.tsx

import type { StockImage } from "../deck/Opening";

import { sample } from "lodash";

export interface SolutionProps {
  rationale: string;
  stockImages: StockImage[];
}

export default ({ stockImages, rationale }: SolutionProps) => (
  <article
    style={{
      background: `url(${sample(stockImages).src.large2x})`,
    }}
  >
    <h2 className="lh2 inverted-color">Solution</h2>
    <blockquote className="inverted-color">{rationale}</blockquote>
  </article>
);
