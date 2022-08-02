// views/utils/GeneratedUsing.tsx

import { ellipsize } from "../../utils/text";

export interface GeneratedUsingProps {
  idea: string;
  short?: boolean;
}

export default ({ idea, short = false }: GeneratedUsingProps) => (
  <p style={{ width: short ? "75%" : "100%" }}>
    <small>
      This deck was generated using <a href="https://deck.rocks">deck.rocks</a>{" "}
      from just:
      <mark>
        <cite>"{ellipsize(idea)}"</cite>
      </mark>{" "}
      as input.
    </small>
  </p>
);
