// views/utils/ShareBtn.tsx

import { stringify } from "node:querystring";

export interface ShareBtnProps {
  url: string;
  sharer: "twitter" | "linkedin" | "email" | "hackernews";
  title?: string;
  additionalParams?: { [key: string]: any };
}

export default ({
  url,
  sharer,
  title = "",
  additionalParams = {},
}: ShareBtnProps) => {
  const joiner: string = !!~url.indexOf("?") ? "&" : "?";
  const additionalParamsString: string = stringify(additionalParams);
  const urlToShare: string = `${url}${joiner}${additionalParamsString}`;

  return (
    <a
      data-sharer={sharer}
      data-title={title || url}
      data-hashtags="deckrocks"
      data-via="diwanksingh"
      data-url={urlToShare}
      data-subject={`Check out: ${title || url}`}
    >
      <img src={`/img/social/${sharer}.svg`} alt={title || url} />
    </a>
  );
};
