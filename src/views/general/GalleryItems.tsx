// views/general/GalleryItems.tsx

import type { Magic } from "../../magic";

import _ from "lodash";

export interface GalleryItemsProps {
  ideas: Magic[];
}

export default ({ ideas }: GalleryItemsProps) => (
  <div className="align-center item-grid gap-6 small-80">
    {ideas.map((example, i) => (
      <div key={i}>
        <a
          href={`/generate?idea=${encodeURIComponent(
            example.idea || ""
          )}&format=site`}
        >
          <img
            src={_.sample(example.logos)}
            alt={example.idea}
            className="round"
            loading="lazy"
          />
          {example.name}
        </a>
        <p>
          <abbr title={example.idea}>
            <small> {example.tagline} </small>
          </abbr>
        </p>
      </div>
    ))}
  </div>
);
