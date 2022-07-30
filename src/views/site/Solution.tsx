// views/site/Solution.tsx

import { illustration } from "../../utils/img";

export interface SolutionProps {
  name: string;
  rationale: string;
  tagline: string;
}

export default ({ name, rationale, tagline }: SolutionProps) => (
  <article className="bg-illustration" style={illustration("analytics")}>
    <h2>Solution: {name}</h2>
    <p>{tagline}</p>
    <h4>In more detail</h4>
    <p>{rationale}</p>
    <br />
    <hr />
    <br />
  </article>
);
