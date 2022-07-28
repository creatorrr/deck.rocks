// views/deck/Opening.tsx

import { sample } from "lodash";

export interface StockImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  large2x: string;
  original: string;
}

export interface OpeningProps {
  name: string;
  tagline: string;
  logos: string[];
  stockImages: StockImage[];
}

export default ({ name, tagline, logos, stockImages }: OpeningProps) => (
  <section
    id="opening"
    data-background-image={sample(stockImages)?.large2x}
    data-background-size="cover"
    data-background-repeat="no-repeat"
  >
    <img src={sample(logos)} className="round logo margin-center" />

    <h2 className="inverted-color">{name}</h2>

    <h4 className="inverted-color">{tagline}</h4>
  </section>
);
