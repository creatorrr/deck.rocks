// views/format-site/Header.tsx

import { sample } from "lodash";
import type { OpeningProps } from "../format-deck/Opening";

export default ({ name, tagline, logos, stockImages }: OpeningProps) => (
  <header
    style={{
      backgroundImage: `url(${sample(stockImages).src.large})`,
    }}
  >
    <img src={sample(logos)} className="round logo" />

    <h1 className="lh2 bg-white">{name}</h1>

    <h2 className="lh2 bg-white">{tagline}</h2>
  </header>
);
