// views/site/Problem.tsx

import type { ProblemProps } from "../deck/Problem";

export default ({ problem }: ProblemProps) => (
  <section>
    <h2>Problem</h2>
    <h4>{problem}</h4>
  </section>
);
