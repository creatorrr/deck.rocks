// views/deck/Solution.tsx

import { sample } from "lodash";
import type { StockImage } from "./Opening";

export interface SolutionProps {
  rationale: string;
  stockImages: StockImage[];
}

export default ({ stockImages, rationale }: SolutionProps) => (
  <section
    className="solution"
    data-background-image={sample(stockImages)?.large2x}
    data-background-size="cover"
    data-background-repeat="no-repeat"
  >
    <h2 className="inverted-color margin-center">Solution</h2>
    <br />
    <aside className="small-60 bg-dark inverted-color">{rationale}</aside>
  </section>
);
