// views/site/WhatWeDo.tsx

import type { WhatWeDoProps } from "../deck/WhatWeDo";

import { illustration } from "../../utils/img";

export default ({ name, idea }: WhatWeDoProps) => (
  <section className="bg-illustration" style={illustration("welcome")}>
    <h2>What we do</h2>
    <h4>
      {name}: {idea}
    </h4>
    <br />
    <hr />
    <br />
  </section>
);
