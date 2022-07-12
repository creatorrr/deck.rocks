// views/general/Form.tsx

import { MAX_INPUT_LENGTH } from "../../env";

export interface FormProps {
  prefill: string;
  format: "site" | "deck";
}

export default ({ prefill = "", format = "site" }: FormProps) => (
  <>
    <form id="input-form" action="/generate" method="GET">
      <textarea
        className="va-top no-border"
        placeholder={"💡 What's your new idea?"}
        autoFocus={!prefill}
        name="idea"
        minLength={40}
        maxLength={MAX_INPUT_LENGTH}
        required={true}
        defaultValue={prefill}
      ></textarea>
      <input type="submit" className="va-top" value={"🔥"} />

      <span>Format:</span>

      <label>
        <input
          type="radio"
          name="format"
          value="site"
          defaultChecked={format === "site"}
        />
        Site
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

      <small className="block small-60 color-gray">
        Generating new decks can take up to 30 seconds...
      </small>
    </form>
  </>
);
