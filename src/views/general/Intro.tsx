// views/general/Intro.tsx

import classnames from "classnames";
import coolFace from "cool-ascii-faces";
import { random as randomSuperb } from "superb";

import Giphy from "../utils/Giphy";
import Thanks from "../utils/Thanks";

export interface IntroProps {
  idea: string;
}

export default ({ idea }: IntroProps) => (
  <section id="intro">
    <p>
      hi there! <br />
      <br />
      this is a fun side project for generating pitch decks using GPT-3, (the{" "}
      <a
        href="https://www.technologyreview.com/2020/07/20/1005454/openai-machine-learning-language-generator-gpt-3-nlp/"
        target="_blank"
      >
        awesome language model
      </a>{" "}
      from <i>OpenAI</i>). here's how it works:
    </p>
    <ol>
      <li>
        describe your{" "}
        <i>
          {randomSuperb()} idea <sup>TM</sup>
        </i>{" "}
        in 1-2 sentences
      </li>
      <li>get a deck tailor-made just for you </li>
      <li>et voila! 😉 </li>
    </ol>
    <p className="align-right margin-1 lh2">
      — <a href="https://diwank.name">Diwank</a> <br />
      {coolFace()}
    </p>
    <p
      className={classnames({
        example: true,
        hidden: !idea,
        block: !!idea,
        "small-80": true,
      })}
    >
      example:{" "}
      <a
        href={`/generate?idea=${encodeURIComponent(
          idea || ""
        )}&amp;format=deck`}
      >
        {idea || ""}
      </a>
    </p>
    <p className="small-80">
      p.s. you can check out the source code{" "}
      <a href="https://github.com/creatorrr/deck.rocks" target="_blank">
        here
      </a>{" "}
      (original{" "}
      <a href="https://runkit.com/diwank/startup-deck-gen" target="_blank">
        notebook
      </a>
      ).
    </p>
    <br />
    <Giphy />
    <hr />
    <Thanks />
  </section>
);
