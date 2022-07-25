// generate/genTagline.ts

import complete from "../openai/complete";

const taglineInstruction = `Generate a catchy and impactful tagline for the startup described.`;
const taglineExamples = [
  [
    "Everything you need in the bathroom – from razor blades to grooming products – automatically delivered to your door.",
    "Shave Time. Shave Money",
  ],
  [
    "Chocolate candies, a treat for all candy and chocolate bar lovers",
    "Melts in Your Mouth, Not in Your Hands",
  ],
  [
    "This startup mines and processes phosphate and potash minerals into crop nutrients to help feed the world.",
    "We Help the World Grow the Food It Needs",
  ],
  [
    "Offering all women and men worldwide the best of cosmetics, haircare and perfume in terms of quality, efficacy and safety.",
    "Because You're Worth It",
  ],
  [
    "German manufacturer of luxury vehicles and motorcycles",
    "Designed for Driving Pleasure",
  ],
  [
    "American daily newspaper based in New York City with a worldwide readership.",
    "All the News That's Fit to Print",
  ],
];

export const genTagline = async (query: string) =>
  (
    await complete(
      {
        instruction: taglineInstruction,
        examples: taglineExamples,
        labels: ["Description", "Tagline"],
        query,
      },
      { max_tokens: 16, best_of: 3, temperature: 1.0 }
    )
  )[0].text;

export default genTagline;
