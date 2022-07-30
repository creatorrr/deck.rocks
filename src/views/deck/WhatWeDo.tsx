// views/deck/WhatWeDoProps.tsx

import { sample } from "lodash";

import { gradients } from "../../data/lists";
import Illustration from "../utils/Illustration";

export interface WhatWeDoProps {
  idea: string;
  name: string;
}

export default ({ idea }: WhatWeDoProps) => (
  <section data-background={sample(gradients)}>
    <h2>What we do</h2>
    <h4>{idea}</h4>
    <br />
    <hr />
    <Illustration name="welcome" />
  </section>
);
