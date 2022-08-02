// views/GeneratedDeck.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { DeckProps } from "./deck";

import { hostname } from "../env";
import Controls from "./Controls";
import Deck from "./deck";
import Footer from "./Footer";
import Head from "./general/Head";
import GeneratedUsing, { GeneratedUsingProps } from "./utils/GeneratedUsing";
import Sharer from "./utils/Sharer";

interface GeneratedDeckProps
  extends HeadProps,
    FormProps,
    DeckProps,
    GeneratedUsingProps {
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
      {nocontrols || (
        <Controls
          job_id={job_id}
          hash={hash}
          nocontrols={nocontrols}
          {...props}
          prefill={prefill}
        />
      )}

      {nocontrols && (
        <Sharer
          showPrintBtn={true}
          showGeneratedUsing={nocontrols}
          url={`${
            hostname || "https://deck.rocks"
          }/display?job_id=${job_id}&hash=${hash}&format=${
            props.format || "deck"
          }`}
          title={props.idea}
          additionalParams={{ nocontrols: true }}
        />
      )}

      <Deck {...props} />

      <Sharer
        showPrintBtn={true}
        showGeneratedUsing={nocontrols}
        url={`${
          hostname || "https://deck.rocks"
        }/display?job_id=${job_id}&hash=${hash}&format=${
          props.format || "deck"
        }`}
        title={props.idea}
        additionalParams={{ nocontrols: true }}
      />
      <hr />

      <GeneratedUsing {...props} />

      <Footer slideInstructions={true} />
    </body>
  </html>
);
