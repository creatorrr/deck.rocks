// views/format-site/WhatWeDo.tsx

import type { WhatWeDoProps } from "../format-deck/WhatWeDo";

export default ({ idea }: WhatWeDoProps) => (
<section>
  <h2>What we do</h2>
  <h4>{idea}</h4>
</section>
);
