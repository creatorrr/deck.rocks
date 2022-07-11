// views/format-deck/Owen.tsx

export interface OwenProps {
  movie: string;
  video: {
    ["720p"]: string;
  };
}

export default ({ video, movie }: OwenProps) => (
  <section
    id="owen"
    data-background-video={video["720p"]}
    data-background-size="cover"
    data-background-video-loop={true}
  >
    <h2 className="inverted-color">
      WOW
      <br></br>
      （◎0◎）
    </h2>

    <h4 className="align-center small-60 inverted-color">
      <pre className="align-center">({movie})</pre>
    </h4>
  </section>
);
