// views/site/Problem.tsx

import type { ExpertsSayProps } from "../deck/ExpertsSay";

import { sample } from "lodash";

export default ({ stockImages, verdict }: ExpertsSayProps) => (
  <section
    id="experts-say"
    className="bg-cover"
    style={{
      background: `url(${sample(stockImages).src.large})`,
    }}
  >
    <h2 className="lh2 inverted-color">Experts say</h2>
    <h4>
      <blockquote className="no-margin inverted-color">{verdict}</blockquote>
    </h4>
  </section>
);
