// views/Controls.tsx

import type { FormProps } from "./general/Form";

import { hostname } from "../env";
import Form from "./general/Form";
import Sharer from "./utils/Sharer";

export interface ControlsProps extends FormProps {
  job_id: number;
  hash: string;
  format: "site" | "deck";
  idea: string;
  shareUrl?: string;
  nocontrols?: boolean;
  showForm?: boolean;
}

export default ({
  nocontrols = false,
  showForm = true,
  shareUrl = "/",
  ...formProps
}: ControlsProps) => (
  <>
    <div id="controls" className="grid-span-full not-printable">
      <h3 id="home-button" className="float-left std-padding-md no-margin">
        <a href="/">deck.rocks</a> 🤘
      </h3>

      <Sharer
        className="float-right std-padding-md"
        showPrintBtn={!!formProps.prefill}
        showGeneratedUsing={nocontrols}
        job_id={formProps.job_id}
        hash={formProps.hash}
        format={formProps.format}
        url={formProps.job_id ? "" : `${hostname}${shareUrl}`}
        title={formProps.prefill || "Check out deck.rocks!"}
        additionalParams={formProps.prefill ? { nocontrols: true } : {}}
      />
    </div>
    <div style={{ clear: "both" }} />
    {showForm && <Form {...formProps} />}
  </>
);
