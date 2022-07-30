// views/deck/Owen.tsx

export interface OwenWow {
  movie: string;
  video: {
    ["720p"]: string;
  };
}

export interface OwenProps {
  owenWow: OwenWow;
}

export default (_owen: OwenProps) => (
  <section
    id="owen"
    data-background-image="/img/owen.webp"
    data-background-size="cover"
  ></section>
);
