// views/site/Solution.tsx

export interface SolutionProps {
  rationale: string;
}

export default ({ rationale }: SolutionProps) => (
  <article>
    <h2>Solution</h2>
    <h4>In more detail</h4>
    <p>{rationale}</p>
    <hr />
    <p></p>
  </article>
);
