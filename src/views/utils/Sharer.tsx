// views/utils/Sharer.tsx

import ShareBtn from "./ShareBtn";

export interface SharerProps {
  url: string;
  showPrintBtn?: boolean;
  title?: string;
  additionalParams?: { [key: string]: any };
  showGeneratedUsing?: boolean;
  className?: string;
}

export default ({
  className = "",
  showGeneratedUsing = false,
  showPrintBtn = false,
  ...props
}: SharerProps) => (
  <nav id="sharer" className={`align-center ${className}`}>
    {showGeneratedUsing && (
      <cite className="float-left lh3">
        Generated using{" "}
        <mark className="green">
          <a href="https://deck.rocks">deck.rocks</a>
        </mark>
      </cite>
    )}
    <span className={showGeneratedUsing ? "float-right" : ""}>
      <cite>Share</cite>&nbsp;
      {showPrintBtn && (
        <a id="print">
          <kbd>🖶</kbd>
        </a>
      )}
      <ShareBtn sharer="twitter" {...props} />
      <ShareBtn sharer="linkedin" {...props} />
      <ShareBtn sharer="hackernews" {...props} />
      <ShareBtn sharer="email" {...props} />
    </span>
    <div style={{ clear: "both" }} />
  </nav>
);
