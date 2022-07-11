// views/format-deck/ExpertsSay.tsx

import { sample } from "lodash";
import type { StockImage } from "./Opening";

export interface ExpertsSayProps {
  verdict: string;
  stockImages: StockImage[];
}

export default ({ stockImages, verdict }: ExpertsSayProps) => (
  <section
    id="experts-say"
    data-background-image={sample(stockImages).src.large}
    data-background-size="cover"
    data-background-repeat="no-repeat"
  >
    <h2 className="lh2 inverted-color">Experts say</h2>
    <h4>
      <aside className="no-margin inverted-color bg-dark small-80">
        {verdict}
      </aside>
    </h4>
  </section>
);
