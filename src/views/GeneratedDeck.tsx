// views/GeneratedDeck.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { DeckProps } from "./deck";

import { hostname } from "../env";
import Head from "./general/Head";
import Sharer from "./utils/Sharer";
import Controls from "./Controls";
import Deck from "./deck";
import Footer from "./Footer";

interface GeneratedDeckProps extends HeadProps, FormProps, DeckProps {
  nocontrols?: boolean;
  job_id: number;
  hash: string;
}

export default ({
  job_id,
  hash,
  nocontrols,
  prefill,
  ...props
}: GeneratedDeckProps) => (
  <html>
    <Head
      {...props}
      appData={{ prefill, format: "deck" }}
      supportsMobile={false}
    />
    <body className="format-deck">
      {nocontrols || <Controls {...props} prefill={prefill} />}

      <Sharer
        url={`${
          hostname || "https://deck.rocks"
        }/display?job_id=${job_id}&hash=${hash}&format=${
          props.format || "site"
        }`}
        title={props.idea}
        additionalParams={{ nocontrols: true }}
      />

      <Deck {...props} />

      <Footer slideInstructions={true} />
    </body>
  </html>
);
