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
  nocontrols?: boolean;
  showForm?: boolean;
}

export default ({
  nocontrols = false,
  showForm = true,
  ...formProps
}: ControlsProps) => (
  <>
    <div id="controls">
      <h3 id="home-button" className="p-absolute left-1">
        <a href="/">deck.rocks</a> 🤘
      </h3>

      {formProps.prefill && (
        <>
          <a id="print" className="p-absolute top-1 right-1" href="#">
            🖶 Print
          </a>

          {/* <Sharer
              showGeneratedUsing={nocontrols}
              url={
              formProps.job_id
              ? `${hostname || "https://deck.rocks"}/display?job_id=${
              formProps.job_id
              }&hash=${formProps.hash}&format=${formProps.format || "site"}`
              : "/"
              }
              title={formProps.idea || ""}
              additionalParams={{ nocontrols: true }}
              /> */}
        </>
      )}
    </div>
    {showForm && <Form {...formProps} />}
  </>
);
