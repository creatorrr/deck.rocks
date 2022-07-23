// views/general/Form.tsx

import { minInputLength, maxInputLength } from "../../env";
import FormTips from "../utils/FormTips";

export interface FormProps {
  prefill: string;
  format: "site" | "deck";
  errors?: string[];
  tips?: string[];
}

export default ({ errors, tips, prefill = "", format = "site" }: FormProps) => (
  <>
    <form id="input-form" action="/generate" method="GET">
      {errors && !!errors.length && <FormTips items={errors} type_="error" />}
      {tips && !!tips.length && <FormTips items={tips} type_="tip" />}

      <textarea
        className="va-top no-border width-100"
        placeholder={"💡 What's your new idea?"}
        autoFocus={!prefill}
        name="idea"
        minLength={minInputLength}
        maxLength={maxInputLength}
        required={true}
        defaultValue={prefill}
      ></textarea>
      <input type="submit" className="va-top" value={"Go! 🔥"} />

      <span>Format:</span>

      <label>
        <input
          type="radio"
          name="format"
          value="site"
          defaultChecked={format === "site"}
        />
        Exec Summary
      </label>

      <label>
        <input
          type="radio"
          name="format"
          value="deck"
          defaultChecked={format === "deck"}
        />
        Deck
      </label>
    </form>
  </>
);
