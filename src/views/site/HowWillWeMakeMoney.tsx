// views/site/HowWillWeMakeMoney.tsx

import type { HowWillWeMakeMoneyProps } from "../deck/HowWillWeMakeMoney";

import { illustration } from "../../utils/img";

export default ({
  businessModel,
  howWillWeMakeMoney,
}: HowWillWeMakeMoneyProps) => (
  <article className="bg-illustration" style={illustration("drink")}>
    <h2>How will we make money</h2>
    <p>
      <strong> {businessModel.name} </strong>
    </p>
    <p>{howWillWeMakeMoney}</p>

    <blockquote>{businessModel.description}</blockquote>
    <br />
    <hr />
    <p>
      <strong>Other examples:</strong>{" "}
      {businessModel.examples
        .map((example) => example.split(" ")[0])
        .map((exampleName: string, idx: number) => (
          <a
            key={idx}
            style={{ marginLeft: "1em" }}
            href={`https://www.google.com/search?q=${encodeURIComponent(
              exampleName + " business model"
            )}`}
          >
            {exampleName}
          </a>
        ))}
    </p>
  </article>
);
