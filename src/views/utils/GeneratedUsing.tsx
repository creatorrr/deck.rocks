// views/site/GeneratedUsing.tsx

export interface GeneratedUsingProps {
  idea: string;
  short?: boolean;
}

const ellipsize = (input: string, maxLength: number = 160): string =>
  input.length < maxLength ? input : input.substring(0, maxLength) + "...";

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
