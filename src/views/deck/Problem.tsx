// views/deck/Problem.tsx

export interface ProblemProps {
  problem: string;
}

export default ({ problem }: ProblemProps) => (
  <section>
    <h2>Problem</h2>
    <h4>{problem}</h4>
  </section>
);
