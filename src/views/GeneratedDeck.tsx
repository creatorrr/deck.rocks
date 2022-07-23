// views/GeneratedDeck.tsx

import Head from "./general/Head";
import Controls from "./Controls";
import Deck from "./deck";

import type { FormProps } from "./general/Form";
import type { HeadProps } from "./general/Head";
import type { DeckProps } from "./deck";

interface GeneratedDeckProps extends HeadProps, FormProps, DeckProps {
  nocontrols?: boolean;
}

export default ({ nocontrols, prefill, ...props }: GeneratedDeckProps) => (
  <html>
    <Head
      {...props}
      appData={{ prefill, format: "deck" }}
      supportsMobile={false}
    />
    <body className="format-deck">
      {nocontrols || <Controls {...props} prefill={prefill} />}
      <Deck {...props} />
    </body>
  </html>
);
