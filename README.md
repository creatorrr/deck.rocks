# deck.rocks

Let GPT3 make your pitch deck for you: [deck.rocks](https://deck.rocks)

<a href="https://www.producthunt.com/products/deck-rocks?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-deck&#0045;rocks" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=354234&theme=light&period=daily" alt="deck&#0046;rocks - Generate&#0032;pitch&#0032;decks&#0032;using&#0032;GPT3&#0032;from&#0032;1&#0032;liner&#0032;ideas | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
[![deck.rocks - Generate pitch decks using GPT3 from 1 liner ideas | Product Hunt
AI generated pitch decks!](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=354234&theme=light)](https://www.producthunt.com/posts/deck-rocks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-deck-rocks)

this is a fun side project for generating pitch decks using GPT-3, (the awesome AI model from OpenAI). here's how it works:

1. describe your smashing™ idea in 1-2 sentences
2. get a deck tailor-made for you
3. that's it! 😉

You can also browse the [gallery](https://deck.rocks/gallery).

## Examples

- "construction company that uses robots to build houses without any labor, reducing the cost to build a home and making home ownership affordable to all. The mission is to end homelessness throughout the world.."
- "Wine dinner series from regions lesser known."
- "blockchain pay to earn games easy."

## How it works

- The raw input is cleaned up and passed through a series of natural language models to generate data for different parts of the deck.

- Perhaps the most important of these is GPT-3, an open-ended text-generation model by OpenAI.

- Most of the answers are generated by GPT-3 given prompts like:
  Generate a catchy tagline for: [your idea].

- We use Dall-E (mini) for generating logos from the idea description.

- We use the ProductHunt API to find similar existing products to compare with.

- We first guess the corresponding product category for the idea and then find the most semantically similar products by comparing their embeddings with the idea.
