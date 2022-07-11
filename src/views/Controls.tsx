// views/Controls.tsx

import Form from "./general/Form";
import type { FormProps } from "./general/Form";

export default (formProps: FormProps) => (
  <>
    <h3 id="home-button" className="p-absolute left-1">
      <a href="/">deck.rocks</a> 🤘
    </h3>

    <div id="controls">
      <Form {...formProps} />
      {formProps.prefill && (
        <>
          <a id="permalink" className="p-absolute top-1 right-5" href="#">
            ☆ Permalink
          </a>

          <a id="print" className="p-absolute top-1 right-1" href="#">
            🖶 Print
          </a>
        </>
      )}
    </div>
  </>
);
