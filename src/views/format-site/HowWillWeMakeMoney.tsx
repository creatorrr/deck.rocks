// views/format-site/HowWillWeMakeMoney.tsx

import type { HowWillWeMakeMoneyProps } from "../format-deck/HowWillWeMakeMoney";

export default ({
  businessModel,
  howWillWeMakeMoney,
}: HowWillWeMakeMoneyProps) => (
  <section>
    <h2>How will we make money</h2>
    <p>
      <strong> {businessModel.name} </strong>
    </p>
    <p>{howWillWeMakeMoney}</p>

    <blockquote>{businessModel.description}</blockquote>
  </section>
);
