// views/utils/ShareBtn.tsx

import ShareBtn from "./ShareBtn";

export interface SharerProps {
  url: string;
  align?: "left" | "center" | "right";
  title?: string;
  additionalParams?: { [key: string]: any };
  showGeneratedUsing?: boolean;
}

export default ({
  align = "center",
  showGeneratedUsing = false,
  ...props
}: SharerProps) => (
  <nav id="sharer" className={`align-${align}`}>
    <cite>
      {showGeneratedUsing && (
        <span>
          Generated using <a href="https://deck.rocks">deck.rocks</a>! |{" "}
        </span>
      )}
      Share
    </cite>

    <ShareBtn sharer="twitter" {...props} />
    <ShareBtn sharer="linkedin" {...props} />
    <ShareBtn sharer="hackernews" {...props} />
    <ShareBtn sharer="email" {...props} />
  </nav>
);
