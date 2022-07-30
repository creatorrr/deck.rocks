// views/deck/Problem.tsx

import Illustration from "../utils/Illustration";

export interface ProblemProps {
  problem: string;
}

export default ({ problem }: ProblemProps) => (
  <section>
    <h2>Problem</h2>
    <h4>{problem}</h4>
    <br />
    <Illustration name="analytics" />
  </section>
);
