// views/general/Intro.tsx

import { random as randomSuperb } from "superb";

import Giphy from "../utils/Giphy";
import Thanks from "../utils/Thanks";

export interface IntroProps {
  idea: string;
  numIdeas?: number;
}

export default ({ numIdeas = 0, idea }: IntroProps) => (
  <section id="intro">
    <p>
      hi! <br />
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
        describe your <i>{randomSuperb()}™</i> idea in 1-2 sentences
      </li>
      <li>et voila! get a deck tailor-made for you. 😉 </li>
      <li>
        here's an{" "}
        <a
          href={`/generate?idea=${encodeURIComponent(
            idea || ""
          )}&amp;format=deck`}
        >
          example
        </a>
        .{" "}
        {numIdeas > 0 && (
          <span>
            browse the gallery <a href="/gallery">here</a>.
          </span>
        )}
      </li>
    </ol>
    <p className="align-right margin-1 lh2">
      — <a href="https://diwank.name">Diwank</a> <br />
    </p>
    <p className="small-80">
      p.s. you can check out the{" "}
      <a href="https://github.com/creatorrr/deck.rocks" target="_blank">
        github repo
      </a>{" "}
      (or the original{" "}
      <a href="https://runkit.com/diwank/startup-deck-gen" target="_blank">
        runkit notebook
      </a>
      ).
    </p>
    <br />
    <Giphy />
    <hr />
    <Thanks />
  </section>
);
