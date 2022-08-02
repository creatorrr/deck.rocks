// views/site/GeneratedUsing.tsx

export interface GeneratedUsingProps {
  idea: string;
  short?: boolean;
}

export default ({ idea, short = false }: GeneratedUsingProps) => (
  <p style={{ width: short ? "75%" : "100%" }}>
    <small>
      This <em>deck</em> was generated using some{" "}
      <a href="https://deck.rocks">awesome tech</a> using just:
      <mark>
        <cite>"{idea}"</cite>
      </mark>{" "}
      as input.
    </small>
  </p>
);
