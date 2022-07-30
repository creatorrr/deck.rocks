// views/site/Problem.tsx

import type { ExpertsSayProps } from "../deck/ExpertsSay";

import { illustration } from "../../utils/img";
import { capitalCase } from "../../utils/text";

export default ({ name, verdicts }: ExpertsSayProps) => (
  <article
    id="experts-say"
    className="bg-illustration"
    style={illustration("bird")}
  >
    <h2 className="lh2">
      <img
        className="small inline-block va-middle margin-rt-sm"
        src="/img/twitter-blue.png"
      />
      People are saying
    </h2>
    {verdicts.map(({ content, handle }, idx: number) => (
      <p key={idx}>
        <blockquote className="no-margin">
          <strong>
            “... {content} #{capitalCase(name)}”
          </strong>
          <p>
            <img
              src={`https://unavatar.io/twitter/${handle}`}
              className="tiny round inline-block"
            />
            <cite>
              <a
                href={`https://huggingface.co/huggingtweets/${handle}`}
                className="va-top std-padding-sm"
              >
                @{handle}
                <sup>🤖</sup>
              </a>
            </cite>
          </p>
        </blockquote>
        <br />
        <hr />
      </p>
    ))}
  </article>
);
