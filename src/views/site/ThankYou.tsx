// views/site/ThankYou.tsx

import { illustration } from "../../utils/img";

export interface ThankYouProps {
  idea: string;
}

export default ({ idea }: ThankYouProps) => (
  <article className="bg-illustration" style={illustration("space")}>
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
    <p style={{ width: "75%" }}>
      <small>
        This <em>deck</em> was generated using some awesome tech using just:
        <mark>
          <cite>"{idea}"</cite>
        </mark>{" "}
        as input.
      </small>
    </p>
  </article>
);
