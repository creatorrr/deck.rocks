// views/general/Head.tsx

import { sample } from "lodash";
import { revealThemes } from "../../data/lists";
import { frontendConfig } from "../../env";

export interface HeadProps {
  format: "site" | "deck";
  tagline: string;
  name: string;
  appData?: { [key: string]: any };
}

export default ({
  format = "site",
  name = "decks rock!",
  tagline = "",
  appData = {},
}: HeadProps) => (
  <head>
    <meta charSet="UTF-8" />
    <title>{tagline ? name + ": " + tagline : name}</title>

    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘</text></svg>"
    />

    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />

    {format === "deck" && (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.min.css"
        />
        <link rel="stylesheet" href={sample(revealThemes)} />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.3.1/reveal.min.js"></script>
      </>
    )}
    <link rel="stylesheet" href="/css/main.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.1/cash.min.js"></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `window.APPLICATION_DATA = ${JSON.stringify({
          ...frontendConfig,
          ...appData,
        })};`,
      }}
    ></script>

    <script src="/js/form.js"></script>
    <script src="/js/control.js"></script>
    <script src="/js/video-autoplay.js"></script>
  </head>
);
