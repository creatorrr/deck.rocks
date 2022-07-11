// views/format-site/Problem.tsx

import type { ProblemProps } from "../format-deck/Problem";

export default ({ problem }: ProblemProps) => (
  <section>
    <h2>Problem</h2>
    <h4>{problem}</h4>
  </section>
);
