// views/utils/Sharer.tsx

import { hostname } from "../../env";
import DownloadIcon from "./DownloadIcon";
import PrintIcon from "./PrintIcon";
import ShareBtn from "./ShareBtn";

export interface SharerProps {
  url?: string;
  job_id?: number;
  hash?: string;
  format?: "site" | "deck";
  showPrintBtn?: boolean;
  title?: string;
  additionalParams?: { [key: string]: any };
  showGeneratedUsing?: boolean;
  className?: string;
}

export default ({
  url,
  job_id,
  hash,
  className = "",
  showGeneratedUsing = false,
  showPrintBtn = false,
  format = "site",
  ...props
}: SharerProps) => {
  const shareUrl: string =
    url || `${hostname}/display?job_id=${job_id}&hash=${hash}&format=${format}`;

  return (
    <nav id="sharer" className={`align-center ${className} not-printable`}>
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
          <a
            id="pdf"
            href={`/pdf?job_id=${job_id}&hash=${hash}&format=${format}`}
          >
            <kbd>
              <DownloadIcon />
            </kbd>
          </a>
        )}{" "}
        {showPrintBtn && (
          <a id="print">
            <kbd>
              <PrintIcon />
            </kbd>
          </a>
        )}
        <ShareBtn sharer="twitter" url={shareUrl} {...props} />
        <ShareBtn sharer="linkedin" url={shareUrl} {...props} />
        <ShareBtn sharer="hackernews" url={shareUrl} {...props} />
        <ShareBtn sharer="email" url={shareUrl} {...props} />
      </span>
      <div style={{ clear: "both" }} />
    </nav>
  );
};
