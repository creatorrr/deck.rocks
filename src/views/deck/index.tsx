// views/deck/index.tsx

import type { CompetitionProps } from "./Competition";
import type { OpeningProps } from "./Opening";
import type { WhatWeDoProps } from "./WhatWeDo";
import type { ProblemProps } from "./Problem";
import type { MarketSizeProps } from "./MarketSize";
import type { HowWillWeMakeMoneyProps } from "./HowWillWeMakeMoney";
import type { ExpertsSayProps } from "./ExpertsSay";
import type { OwenProps } from "./Owen";
import type { SolutionProps } from "./Solution";
import type { QuoteProps } from "./Quote";

import WhatWeDo from "./WhatWeDo";
import Problem from "./Problem";
import Solution from "./Solution";
import MarketSize from "./MarketSize";
import HowWillWeMakeMoney from "./HowWillWeMakeMoney";
import Competition from "./Competition";
import ExpertsSay from "./ExpertsSay";
import Owen from "./Owen";
import Opening from "./Opening";
import ThankYou from "./ThankYou";

export interface DeckProps
  extends OpeningProps,
    WhatWeDoProps,
    ProblemProps,
    SolutionProps,
    MarketSizeProps,
    CompetitionProps,
    ExpertsSayProps,
    OwenProps,
    QuoteProps,
    HowWillWeMakeMoneyProps {}

const revealOpts = {
  slideNumber: true,
  navigationMode: "linear",
  embedded: true,
  controlsLayout: "edges",
  controlsBackArrows: "visible",
  hash: false,
  fragments: false,
  fragmentInURL: false,
};

export default (props: DeckProps) => (
  <div className="reveal custom ingrid">
    <div className="slides">
      <Opening {...props} />
      <WhatWeDo {...props} />
      <Problem {...props} />
      <Solution {...props} />
      <MarketSize {...props} />
      <HowWillWeMakeMoney {...props} />
      <Competition {...props} />
      <ExpertsSay {...props} />
      <Owen {...props} />
      <ThankYou {...props} />
    </div>

    <script
      dangerouslySetInnerHTML={{
        __html: `typeof(Reveal) !== "undefined" && Reveal.initialize(${JSON.stringify(
          revealOpts
        )});`,
      }}
    ></script>
  </div>
);
