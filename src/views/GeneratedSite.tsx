// views/GeneratedSite.tsx

import Head, { HeadProps } from "./general/Head";
import Controls, { ControlsProps } from "./Controls";
import Site, { SiteProps } from "./site";
import Footer from "./Footer";

import type { FormProps } from "./general/Form";

interface GeneratedSiteProps
  extends ControlsProps,
    HeadProps,
    FormProps,
    SiteProps {
  nocontrols?: boolean;
}

export default ({ nocontrols, prefill, ...props }: GeneratedSiteProps) => (
  <html>
    <Head {...props} appData={{ prefill, format: "site" }} />
    <body className="format-site">
      {nocontrols || (
        <Controls {...props} nocontrols={nocontrols} prefill={prefill} />
      )}
      <Site nocontrols={nocontrols} {...props} />
      <Footer />
    </body>
  </html>
);
