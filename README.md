<a href="https://www.producthunt.com/products/deck-rocks?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-deck&#0045;rocks" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=354234&theme=light&period=daily" alt="deck&#0046;rocks - Generate&#0032;pitch&#0032;decks&#0032;using&#0032;GPT3&#0032;from&#0032;1&#0032;liner&#0032;ideas | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
[![deck.rocks - Generate pitch decks using GPT3 from 1 liner ideas | Product Hunt
AI generated pitch decks!](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=354234&theme=light)](https://www.producthunt.com/posts/deck-rocks?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-deck-rocks)

*****
<p align=center>
  <h3>Special thanks to the <a href="https://replicate.com"> Replicate team </a> for their support!</h3>
  <a href="https://replicate.com"><img src="https://user-images.githubusercontent.com/931887/201377564-033ffc28-7ffb-4d01-8b19-1a9e90a2868a.png" /></a>
</p>

*****

# deck.rocks

#### [deck.rocks](https://deck.rocks): Let GPT3 make your pitch deck for you!

this is a fun side project for generating pitch decks using GPT-3, (the awesome AI model from OpenAI). here's how it works:

1. describe your smashing™ idea in 1-2 sentences
2. get a deck tailor-made for you
3. that's it! 😉

You can also browse the [gallery](https://deck.rocks/gallery).

## Examples

1. ["Trading crypto currencies make easy. If you could trade like a pro without being one, would you?."](https://www.deck.rocks/generate?idea=Trading%20crypto%20currencies%20make%20easy.%20If%20you%20could%20trade%20like%20a%20pro%20without%20being%20one%2C%20would%20you%3F&format=site)
2. ["Creating leads to customers for food and beverage businesses."](https://www.deck.rocks/generate?idea=Creating%20leads%20to%20customers%20for%20food%20and%20beverage%20businesses&format=site)
3. ["Software Testing project proposal."](https://www.deck.rocks/generate?idea=Software%20Testing%20project%20proposal&format=site)

## How it works

1. The raw input is cleaned up and passed through a series of natural language models to generate data for different parts of the deck.

2. Perhaps the most important of these is GPT-3, an open-ended text-generation model by OpenAI.

3. Most of the answers are generated by GPT-3 given prompts like:
  Generate a catchy tagline for: [your idea].

4. We use Dall-E (mini) for generating logos from the idea description.

5. We use the ProductHunt API to find similar existing products to compare with.

6. We first guess the corresponding product category for the idea and then find the most semantically similar products by comparing their embeddings with the idea.
