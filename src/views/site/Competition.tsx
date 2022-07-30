// views/site/Competition.tsx

import { illustration } from "../../utils/img";
import { CompetitionProps } from "../deck/Competition";

export default ({ competition }: CompetitionProps) =>
  competition.length === 0 ? (
    <></>
  ) : (
    <section className="bg-illustration" style={illustration("number_one")}>
      <h2>Similar companies</h2>

      <h4>
        <div className="align-center item-grid gap-6 small-80">
          {competition.map((c, i) => (
            <div key={i}>
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
      <hr />
      <p style={{ width: "80%" }}>
        <cite>
          <em>Note</em>: While not all of these do exactly the same thing as us,
          they still deserve mention here because they serve similar target
          users.
        </cite>
      </p>
    </section>
  );
