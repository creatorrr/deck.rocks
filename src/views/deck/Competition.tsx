// views/deck/Competition.tsx

export interface CompetitionEntity {
  name: string;
  url: string;
  thumbnail: {
    url: string;
  };
  tagline?: string;
}

export interface CompetitionProps {
  competition: CompetitionEntity[];
}

export default ({ competition }: CompetitionProps) => {
  return competition.length === 0 ? (
    <></>
  ) : (
    <section>
      <h2>Similar Companies</h2>

      <h4>
        <div className="align-center item-grid gap-6 small-60">
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
    </section>
  );
};
