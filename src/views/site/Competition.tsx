// views/site/Competition.tsx

import { CompetitionProps } from "../deck/Competition";

export default ({ competition }: CompetitionProps) => (
  <section>
    <h2>Competition</h2>

    <h4>
      <div className="align-center item-grid gap-6 small-80">
        {competition.map((c) => (
          <div>
            <a href={c.url}>
              <img
                src={`${c.thumbnail.url}&frame=1`}
                alt={c.name}
                className="round grayed-out"
                loading="lazy"
              />

              {c.name}
            </a>
            <p>
              <small> {c.tagline} </small>
            </p>
          </div>
        ))}
      </div>
    </h4>
  </section>
);
