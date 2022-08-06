// views/general/Head.tsx

import { sample } from "lodash";

import { revealThemes } from "../../data/lists";
import {
  frontendConfig,
  googleAdsClientId,
  googleAnalyticsId,
} from "../../env";

export interface HeadProps {
  format: "site" | "deck";
  tagline: string;
  name: string;
  supportsMobile?: boolean;
  redirectTo?: string;
  redirectIn?: number;
  appData?: { [key: string]: any };
}

export default ({
  format = "site",
  name = "decks rock!",
  tagline = "",
  appData = {},
  supportsMobile = true,
  redirectIn,
  redirectTo,
}: HeadProps) => (
  <head>
    <meta charSet="UTF-8" />
    {supportsMobile && (
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    )}
    <title>{tagline ? name + ": " + tagline : name}</title>

    {redirectTo && redirectIn && (
      <meta httpEquiv="refresh" content={`${redirectIn}; url=${redirectTo}`} />
    )}

    <link
      rel="icon"
      type="text/plain"
      href="data:;charset=utf-8,🤘"
      sizes="any"
    />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤘</text></svg>"
    />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />

    <link rel="stylesheet" href="/css/simple.min.css" />

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

    <link
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;900&display=swap"
      rel="stylesheet"
    />

    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.1/cash.min.js"></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `window.APPLICATION_DATA = ${JSON.stringify({
          ...frontendConfig,
          ...appData,
        })};`,
      }}
    ></script>

    <script src="/js/cyrb53.js"></script>
    <script src="/js/form.js"></script>
    <script src="/js/control.js"></script>
    <script src="/js/video-autoplay.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${googleAnalyticsId}');
      `,
      }}
    ></script>

    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
    ></script>

    <script
      dangerouslySetInnerHTML={{
        __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
      }}
    ></script>

    <script
      data-cfasync="false"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsClientId}`}
      crossOrigin="anonymous"
    ></script>
  </head>
);
