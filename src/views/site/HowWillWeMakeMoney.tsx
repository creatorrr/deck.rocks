// views/site/HowWillWeMakeMoney.tsx

import type { HowWillWeMakeMoneyProps } from "../deck/HowWillWeMakeMoney";

export default ({
  businessModel,
  howWillWeMakeMoney,
}: HowWillWeMakeMoneyProps) => (
  <article>
    <h2>How will we make money</h2>
    <p>
      <strong> {businessModel.name} </strong>
    </p>
    <p>{howWillWeMakeMoney}</p>

    <blockquote>{businessModel.description}</blockquote>
    <hr />
    <p>
      <strong>Examples:</strong>{" "}
      {businessModel.examples
        .map((example) => example.split(" ")[0])
        .map((exampleName) => (
          <>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                exampleName + " business model"
              )}`}
            >
              {exampleName}
            </a>{" "}
          </>
        ))}
    </p>
  </article>
);
