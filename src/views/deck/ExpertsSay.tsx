// views/deck/ExpertsSay.tsx

import type { StockImage } from "./Opening";
import type { Verdict } from "../../infer/genVerdicts";

import { sample } from "lodash";

export interface ExpertsSayProps {
  verdicts: Verdict[];
  stockImages: StockImage[];
}

export default ({ stockImages, verdicts }: ExpertsSayProps) => (
  <>
    {verdicts.map(({ content, handle }) => (
      <section
        id="experts-say"
        data-background-image={sample(stockImages).src.large2x}
        data-background-size="cover"
        data-background-repeat="no-repeat"
      >
        <h2 className="lh2 inverted-color">Experts say</h2>
        <p>
          <aside className="no-margin inverted-color bg-dark small-80">
            {content}
          </aside>
          <a
            href={`https://huggingface.co/huggingtweets/${handle}`}
            className="no-margin inverted-color bg-dark std-padding-sm small-60"
          >
            <img
              src={`https://unavatar.io/twitter/${handle}`}
              className="tiny round inline-block"
            />
            @{handle}
            <sup>(fake)</sup>
          </a>
        </p>
      </section>
    ))}
  </>
);
