// views/format-site/index.tsx

import type { CompetitionProps } from "../format-deck/Competition";
import type { OpeningProps } from "../format-deck/Opening";
import type { WhatWeDoProps } from "../format-deck/WhatWeDo";
import type { ProblemProps } from "../format-deck/Problem";
import type { MarketSizeProps } from "../format-deck/MarketSize";
import type { HowWillWeMakeMoneyProps } from "../format-deck/HowWillWeMakeMoney";
import type { ExpertsSayProps } from "../format-deck/ExpertsSay";
import type { OwenProps } from "../format-deck/Owen";

import type { FooterProps } from "./Footer";
import type { SolutionProps } from "./Solution";

import Header from "./Header";
import Footer from "./Footer";
import WhatWeDo from "./WhatWeDo";
import Problem from "./Problem";
import Solution from "./Solution";
import MarketSize from "./MarketSize";
import HowWillWeMakeMoney from "./HowWillWeMakeMoney";
import Competition from "./Competition";
import ExpertsSay from "./ExpertsSay";
import Owen from "./Owen";

export interface SiteProps
  extends OpeningProps,
    FooterProps,
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
      <Owen {...props} />
    </main>

    <Footer {...props} />
  </>
);
