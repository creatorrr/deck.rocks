// views/deck/WhatWeDoProps.tsx

import { sample } from "lodash";
import { gradients } from "../../data/lists";

export interface WhatWeDoProps {
  editedIdea: string;
}

export default ({ editedIdea }: WhatWeDoProps) => (
  <section data-background={sample(gradients)}>
    <h2>What we do</h2>
    <h4>{editedIdea}</h4>
  </section>
);
