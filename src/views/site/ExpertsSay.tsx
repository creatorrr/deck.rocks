// views/site/Problem.tsx

import type { ExpertsSayProps } from "../deck/ExpertsSay";

export default ({ verdicts }: ExpertsSayProps) => (
  <>
    {verdicts.map(({ content, handle }) => (
      <article id="experts-say" className="bg-cover">
        <h2 className="lh2">Experts say</h2>
        <h4>
          <img
            src={`https://unavatar.io/twitter/${handle}`}
            className="tiny round inline-block"
          />
          <a
            href={`https://huggingface.co/huggingtweets/${handle}`}
            className="va-top std-padding-sm"
          >
            @{handle}
            <sup>(fake)</sup>
          </a>
          <blockquote className="no-margin">{content}</blockquote>
        </h4>
      </article>
    ))}
  </>
);
