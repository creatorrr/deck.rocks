// views/utils/Illustration.tsx

export interface IllustrationProps {
  name: string;
  size?: "tiny" | "small" | "medium" | "large";
  inverted?: boolean;
}

export default ({
  name,
  size = "medium",
  inverted = false,
}: IllustrationProps) => (
  <img
    className={`illustration ${size} img-grayscale${
      inverted ? "-inverted" : ""
    }`}
    src={`/img/illustrations/${name}.png`}
  />
);
