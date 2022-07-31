// views/site/WhatWeDo.tsx

import type { WhatWeDoProps } from "../deck/WhatWeDo";

import { illustration } from "../../utils/img";

export default ({ name, idea }: WhatWeDoProps) => (
  <section className="bg-illustration" style={illustration("welcome")}>
    <h2>What we do</h2>
    <h4>
      <mark>{name}</mark>: {idea}
    </h4>
    <br />
    <hr />
    <br />
  </section>
);
