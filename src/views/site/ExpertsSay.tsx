// views/site/Problem.tsx

import type { ExpertsSayProps } from "../deck/ExpertsSay";

export default ({ verdict }: ExpertsSayProps) => (
  <article id="experts-say" className="bg-cover">
    <h2 className="lh2">Experts say</h2>
    <h4>
      <blockquote className="no-margin">{verdict}</blockquote>
    </h4>
  </article>
);
