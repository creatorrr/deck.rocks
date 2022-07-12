// views/deck/Owen.tsx

import coolFace from "cool-ascii-faces";

export interface OwenWow {
  movie: string;
  video: {
    ["720p"]: string;
  };
}

export interface OwenProps {
  owenWow: OwenWow;
}

export default ({ owenWow: { video } }: OwenProps) => (
  <section
    id="owen"
    data-background-video={video["720p"]}
    data-background-size="cover"
    data-background-video-loop={true}
  >
    <h2 className="inverted-color">
      WOW
      <br></br>
      {coolFace()}
    </h2>
  </section>
);
