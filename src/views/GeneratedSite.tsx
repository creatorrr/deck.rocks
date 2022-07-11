// views/GeneratedSite.tsx

import Head from "./general/Head";
import Controls from "./Controls";
import Site from "./format-site";

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { SiteProps } from "./format-site";

interface GeneratedSiteProps extends HeadProps, FormProps, SiteProps {
  nocontrols?: boolean;
}

export default ({ nocontrols, prefill, ...props }: GeneratedSiteProps) => (
  <html>
    <Head {...props} appData={{ prefill }} />
    <body className="format-site">
      {nocontrols || <Controls {...props} prefill={prefill} />}
      <Site {...props} />
    </body>
  </html>
);
