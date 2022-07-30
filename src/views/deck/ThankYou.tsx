// views/deck/ThankYou.tsx

import Illustration from "../utils/Illustration";

export default () => (
  <section>
    <h2>Thank you!</h2>
    <p className="small-60">
      I hope you enjoyed this project, please consider:
    </p>
    <ul className="small-60">
      <li>
        <a href="mailto:diwank@deck.rocks">reaching out</a>, I'd love to hear
        your thoughts!
      </li>
      <li>
        starring this repo on github &nbsp;
        <a
          className="github-button"
          href="https://github.com/creatorrr/deck.rocks"
          data-icon="octicon-star"
          data-show-count="true"
          data-size="large"
        >
          Star
        </a>
      </li>
      <li>
        sponsoring me &nbsp;
        <a
          className="github-button"
          href="https://github.com/sponsors/creatorrr"
          data-icon="octicon-heart"
          data-size="large"
        >
          Sponsor
        </a>
      </li>
    </ul>
    <hr />
    <Illustration name="mention" size="small" />
  </section>
);
