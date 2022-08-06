// views/site/ThankYou.tsx

import { illustration } from "../../utils/img";
import GeneratedUsing, { GeneratedUsingProps } from "../utils/GeneratedUsing";

export interface ThankYouProps extends GeneratedUsingProps {}

export default (props: ThankYouProps) => (
  <section
    className="bg-illustration not-printable"
    style={illustration("space")}
  >
    <h2>Thank you!</h2>
    <p>
      I hope you enjoyed this project! If you liked{" "}
      <a href="//diwank.name">my work</a>, please consider:
      <ul>
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
          >
            Sponsor
          </a>
        </li>
      </ul>
    </p>
    <br />
    <hr />
    <br />
  </section>
);
