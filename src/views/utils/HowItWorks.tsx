// views/utils/HowItWorks.tsx

export default () => (
  <>
    <h4>How it works</h4>
    <ol>
      <li>
        The raw input is cleaned up and passed through a series of{" "}
        <a href="https://blogs.nvidia.com/blog/2022/03/25/what-is-a-transformer-model/">
          natural language models
        </a>{" "}
        to generate data for different parts of the deck.
      </li>
      <br />

      <li>
        Perhaps the most important of these is{" "}
        <a href="https://www.wikiwand.com/en/GPT-3">GPT-3</a>, an open-ended
        text-generation model by <em>OpenAI</em>.
      </li>
      <br />

      <li>
        Most of the answers are generated by <em>GPT-3</em> given prompts like:{" "}
        <br />
        <code>Generate a catchy tagline for: [your idea]</code>.
      </li>
      <br />

      <li>
        We use{" "}
        <a href="https://huggingface.co/spaces/dalle-mini/dalle-mini">
          Dall-E (mini)
        </a>{" "}
        for generating logos from the idea description.
      </li>
      <br />

      <li>
        We use the{" "}
        <a href="https://github.com/producthunt/producthunt-api">
          ProductHunt API
        </a>{" "}
        to find similar existing products to compare with.
      </li>
      <br />

      <li>
        We first guess the corresponding <b>product category</b> for the idea
        and then find the most <em>semantically</em> similar products by
        comparing their{" "}
        <a href="https://jalammar.github.io/illustrated-word2vec/">
          embeddings
        </a>{" "}
        with the idea.
      </li>
    </ol>
    <br />

    <p className="small-80">
      p.s. this is an open source project. you can check out its source code on
      this project's{" "}
      <a href="https://github.com/creatorrr/deck.rocks" target="_blank">
        github page
      </a>{" "}
      (or check out the original{" "}
      <a href="https://runkit.com/diwank/startup-deck-gen" target="_blank">
        runkit notebook
      </a>{" "}
      I used for experiments). You can find some of the other models I used on
      my <a href="https://huggingface.co/diwank">huggingface profile</a>.
    </p>
  </>
);
