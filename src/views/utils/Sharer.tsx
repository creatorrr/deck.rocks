// views/utils/ShareBtn.tsx

import ShareBtn from "./ShareBtn";

export interface SharerProps {
  url: string;
  align?: "left" | "center" | "right";
  title?: string;
  additionalParams?: { [key: string]: any };
}

export default ({ align = "center", ...props }: SharerProps) => (
  <nav id="sharer" className={`align-${align}`}>
    <cite>Share</cite>

    <ShareBtn sharer="twitter" {...props} />
    <ShareBtn sharer="linkedin" {...props} />
    <ShareBtn sharer="hackernews" {...props} />
    <ShareBtn sharer="email" {...props} />
  </nav>
);
