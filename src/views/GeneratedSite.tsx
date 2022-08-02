// views/GeneratedSite.tsx

import type { FormProps } from "./general/Form";

import Controls, { ControlsProps } from "./Controls";
import Head, { HeadProps } from "./general/Head";
import Footer from "./general/Footer";
import Site, { SiteProps } from "./site";

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
      <Footer {...props} />
    </body>
  </html>
);
