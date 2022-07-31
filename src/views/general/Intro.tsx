// views/general/Intro.tsx

import { random as randomSuperb } from "superb";

import Examples from "../utils/Examples";
import Giphy from "../utils/Giphy";
import HowItWorks from "../utils/HowItWorks";
import ProductHunt from "../utils/ProductHunt";
import Thanks from "../utils/Thanks";

export interface IntroProps {
  examples: string[];
  showGallery?: boolean;
}

export default ({ examples, showGallery = false }: IntroProps) => (
  <section id="intro">
    <p className="inline-block float-right">
      <ProductHunt />
    </p>

    <h3>AI generated pitch decks!</h3>

    <p>
      this is a fun side project for generating pitch decks using GPT-3, (the{" "}
      <a
        href="https://www.technologyreview.com/2020/07/20/1005454/openai-machine-learning-language-generator-gpt-3-nlp/"
        target="_blank"
      >
        awesome AI model
      </a>{" "}
      from <i>OpenAI</i>). here's how it works:
    </p>

    <ol>
      <li>
        describe your <i>{randomSuperb()}™</i> idea in 1-2 sentences
      </li>
      <li>get a deck tailor-made for you </li>
      <li>that's it! 😉 </li>
    </ol>

    <br />
    <p>
      Browse the <a href="/gallery">gallery</a>, and please do <a href="https://www.producthunt.com/posts/deck-rocks">share</a>{" "}
      what you come up with! &nbsp; <kbd>^_^</kbd>
    </p>

    <p className="align-right margin-1 lh2">
      — <a href="https://diwank.name">Diwank</a> <br />
    </p>

    <hr />
    <Examples examples={examples} showGallery={showGallery} />

    <hr />
    <HowItWorks />

    <hr />
    <Giphy />

    <hr />
    <Thanks />
  </section>
);
