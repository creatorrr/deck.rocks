// views/GeneratedSite.tsx

import Head from "./general/Head";
import Controls from "./Controls";
import Site from "./site";
import Footer from "./Footer";

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { SiteProps } from "./site";

interface GeneratedSiteProps extends HeadProps, FormProps, SiteProps {
  nocontrols?: boolean;
}

export default ({ nocontrols, prefill, ...props }: GeneratedSiteProps) => (
  <html>
    <Head {...props} appData={{ prefill, format: "site" }} />
    <body className="format-site">
      {nocontrols || <Controls {...props} prefill={prefill} />}
      <Site {...props} />
      <Footer />
    </body>
  </html>
);
