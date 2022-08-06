// views/GeneratedDeck.tsx

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { DeckProps } from "./deck";

import Controls from "./Controls";
import Deck from "./deck";
import Footer from "./general/Footer";
import Head from "./general/Head";
import Sharer from "./utils/Sharer";

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
          job_id={job_id}
          hash={hash}
          format={props.format}
          title={props.idea}
          additionalParams={{ nocontrols: true }}
        />
      )}

      <Deck {...props} />
      <hr style={{ width: "100%" }} />

      <p>
        <cite>
          You can use arrow keys <kbd>←</kbd> <kbd>→</kbd> to navigate between
          slides. On touch-screen devices, swipe left/right.
        </cite>
      </p>

      <Sharer
        className="no-margin"
        showPrintBtn={true}
        showGeneratedUsing={nocontrols}
        job_id={job_id}
        hash={hash}
        format={props.format}
        title={props.idea}
        additionalParams={{ nocontrols: true }}
      />

      <Footer {...props} />
    </body>
  </html>
);
