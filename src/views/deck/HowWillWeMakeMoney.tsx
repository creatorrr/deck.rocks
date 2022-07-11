// views/deck/HowWillWeMakeMoney.tsx

import { sample } from "lodash";
import { gradients } from "../../data/lists";

export interface HowWillWeMakeMoneyProps {
  howWillWeMakeMoney: string;
  businessModel: {
    name?: string;
    description?: string;
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
    <h2 className="inverted-color">How we will make money</h2>

    <strong className="color-dark">
      <abbr title={businessModel.description}> {businessModel.name} </abbr>
    </strong>

    <p className="color-dark small-80">{howWillWeMakeMoney}</p>
  </section>
);
