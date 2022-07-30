// views/deck/HowWillWeMakeMoney.tsx

import { sample } from "lodash";

import { gradients } from "../../data/lists";
import Illustration from "../utils/Illustration";

export interface HowWillWeMakeMoneyProps {
  howWillWeMakeMoney: string;
  businessModel: {
    name?: string;
    description?: string;
    examples?: string[];
  };
}

export default ({
  businessModel,
  howWillWeMakeMoney,
}: HowWillWeMakeMoneyProps) => (
  <section
    className="how-will-we-make-money"
    data-background={sample(gradients)}
  >
    <h2>How we will make money</h2>

    <p className="color-dark">
      <abbr title={businessModel.description}>
        {" "}
        {businessModel.name} Model{" "}
      </abbr>
    </p>

    <small className="color-dark small-80">{howWillWeMakeMoney}</small>
    <br />

    <Illustration name="growth" size="small" />

    <cite className="block">
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
    </cite>
  </section>
);
