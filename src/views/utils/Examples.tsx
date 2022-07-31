// views/utils/Examples.tsx

export interface ExamplesProps {
  examples?: string[];
  showGallery?: boolean;
}
export default ({ examples = [], showGallery = false }) => (
  <>
    <h4>Examples</h4>
    <ul>
      {examples.map((idea: string, idx: number) => (
        <li key={idx}>
          "
          <a
            href={`/generate?idea=${encodeURIComponent(
              idea || ""
            )}&format=site`}
          >
            {idea}
          </a>
          ."
        </li>
      ))}
      <br />
      {showGallery && (
        <li>
          ... or browse the{" "}
          <mark>
            <a href="/gallery">gallery</a>.
          </mark>
        </li>
      )}
    </ul>
  </>
);
