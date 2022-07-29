// views/site/WhatWeDo.tsx

import type { WhatWeDoProps } from "../deck/WhatWeDo";

export default ({ idea }: WhatWeDoProps) => (
  <article>
    <h2>What we do</h2>
    <h4>{idea}</h4>
  </article>
);
