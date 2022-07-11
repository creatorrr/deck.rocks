// views/format-site/Owen.tsx

import type { OwenProps } from "../format-deck/Owen";

export default ({ owenWow: { video } }: OwenProps) => (
  <section id="owen">
    <video autoPlay loop muted>
      <source src={video["720p"]} type="video/mp4" />
    </video>

    <h1 className="align-right inverted-color">
      WOW
      <br />
      （◎0◎）
    </h1>
  </section>
);
