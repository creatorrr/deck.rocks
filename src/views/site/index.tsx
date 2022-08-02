// views/site/index.tsx

import type { CompetitionProps } from "../deck/Competition";
import type { OpeningProps } from "../deck/Opening";
import type { WhatWeDoProps } from "../deck/WhatWeDo";
import type { ProblemProps } from "../deck/Problem";
import type { MarketSizeProps } from "../deck/MarketSize";
import type { HowWillWeMakeMoneyProps } from "../deck/HowWillWeMakeMoney";
import type { ExpertsSayProps } from "../deck/ExpertsSay";
import type { SolutionProps } from "./Solution";

import { hostname } from "../../env";
import Sharer from "../utils/Sharer";

import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import Problem from "./Problem";
import Solution from "./Solution";
import MarketSize from "./MarketSize";
import HowWillWeMakeMoney from "./HowWillWeMakeMoney";
import Competition from "./Competition";
import ExpertsSay from "./ExpertsSay";
import ThankYou from "./ThankYou";

export interface SiteProps
  extends OpeningProps,
    WhatWeDoProps,
    ProblemProps,
    SolutionProps,
    MarketSizeProps,
    CompetitionProps,
    ExpertsSayProps,
    HowWillWeMakeMoneyProps {
  job_id: number;
  hash: string;
  format: "site" | "deck";
  nocontrols?: boolean;
}

export default ({ job_id, hash, format, nocontrols = false, ...props }: SiteProps) => (
  <>
    <Header {...props} />

    <main>
      <Sharer
        showGeneratedUsing={!!nocontrols}
        url={`${
          hostname || "https://deck.rocks"
        }/display?job_id=${job_id}&hash=${hash}&format=${format || "site"}`}
        title={props.idea}
        additionalParams={{ nocontrols: true }}
        align="right"
      />

      <WhatWeDo {...props} />
      <Problem {...props} />
      <Solution {...props} />
      <MarketSize {...props} />
      <HowWillWeMakeMoney {...props} />
      <Competition {...props} />
      <ExpertsSay {...props} />
      <ThankYou {...props} />
      
      <Sharer
        showGeneratedUsing={!!nocontrols}
        url={`${
          hostname || "https://deck.rocks"
        }/display?job_id=${job_id}&hash=${hash}&format=${format || "site"}`}
        title={props.idea}
        additionalParams={{ nocontrols: true }}
        align="right"
      />

    </main>
  </>
);
