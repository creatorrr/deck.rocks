// views/site/Owen.tsx

import coolFace from "cool-ascii-faces";

import type { OwenProps } from "../deck/Owen";

export default ({ owenWow: { video } }: OwenProps) => (
  <section id="owen">
    <video autoPlay loop muted>
      <source src={video["720p"]} type="video/mp4" />
    </video>

    <h1 className="align-right inverted-color">
      WOW
      <br />
      {coolFace()}
    </h1>
  </section>
);
