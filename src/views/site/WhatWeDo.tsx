// views/site/WhatWeDo.tsx

import type { WhatWeDoProps } from "../deck/WhatWeDo";

export default ({ editedIdea }: WhatWeDoProps) => (
  <article>
    <h2>What we do</h2>
    <h4>{editedIdea}</h4>
  </article>
);
