// views/format-deck/WhatWeDoProps.tsx

import { sample } from "lodash";
import { gradients } from "../../data/lists";

export interface WhatWeDoProps {
  idea: string;
}

export default ({ idea }: WhatWeDoProps) => (
  <section data-background={sample(gradients)}>
    <h2>What we do</h2>
    <h4>{idea}</h4>
  </section>
);
