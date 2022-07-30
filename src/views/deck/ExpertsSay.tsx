// views/deck/ExpertsSay.tsx

import type { StockImage } from "./Opening";
import type { Verdict } from "../../infer/genVerdicts";

import { capitalCase } from "../../utils/text";

export interface ExpertsSayProps {
  verdicts: Verdict[];
  stockImages: StockImage[];
  name: string;
}

export default ({ name, verdicts }: ExpertsSayProps) => (
  <section id="experts-say">
    <h2 className="lh2">
      <img
        className="tiny inline-block va-middle margin-rt-md illustration"
        src="/img/twitter-blue.png"
      />
      People are saying
    </h2>

    {verdicts.map(({ content, handle }, idx: number) => (
      <blockquote className="align-left std-padding-md" key={idx}>
        <span className="small-40">
          “... {content} <mark>#{capitalCase(name)}”</mark>
        </span>
        <br />
        <a href={`https://huggingface.co/huggingtweets/${handle}`}>
          <img
            src={`https://unavatar.io/twitter/${handle}`}
            className="x-tiny round inline-block va-middle"
          />
          <cite className="std-padding-sm">
            @{handle}
            <sup>🤖</sup>
          </cite>
        </a>
      </blockquote>
    ))}
  </section>
);
