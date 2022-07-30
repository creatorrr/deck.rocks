// views/site/index.tsx

import type { CompetitionProps } from "../deck/Competition";
import type { OpeningProps } from "../deck/Opening";
import type { WhatWeDoProps } from "../deck/WhatWeDo";
import type { ProblemProps } from "../deck/Problem";
import type { MarketSizeProps } from "../deck/MarketSize";
import type { HowWillWeMakeMoneyProps } from "../deck/HowWillWeMakeMoney";
import type { ExpertsSayProps } from "../deck/ExpertsSay";
import type { OwenProps } from "../deck/Owen";

import type { SolutionProps } from "./Solution";

import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import Problem from "./Problem";
import Solution from "./Solution";
import MarketSize from "./MarketSize";
import HowWillWeMakeMoney from "./HowWillWeMakeMoney";
import Competition from "./Competition";
import ExpertsSay from "./ExpertsSay";
import Owen from "./Owen";
import ThankYou from "./ThankYou";

export interface SiteProps
  extends OpeningProps,
    WhatWeDoProps,
    ProblemProps,
    SolutionProps,
    MarketSizeProps,
    CompetitionProps,
    ExpertsSayProps,
    OwenProps,
    HowWillWeMakeMoneyProps {}

export default (props: SiteProps) => (
  <>
    <Header {...props} />

    <main>
      <WhatWeDo {...props} />
      <Problem {...props} />
      <Solution {...props} />
      <MarketSize {...props} />
      <HowWillWeMakeMoney {...props} />
      <Competition {...props} />
      <ExpertsSay {...props} />
      {/* <Owen {...props} /> */}
      <ThankYou {...props} />
    </main>
  </>
);
