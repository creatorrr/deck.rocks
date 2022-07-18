// generate/genYoBeReal.ts

import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const yoBeRealInstruction = `This is a conversation between a human and a brilliant AI. If a startup idea is "good" and "sensible" the AI replies whether it will work. If the idea is "dumb" or "nonsense" the AI says "yo be real... -_-"`;

const yoBeRealExamples = [
  [
    "Search the world's information, including webpages, images, videos and more.",
    "This would revolutionize the Internet!",
  ],
  [
    "Social network connecting people with each other. Alongside it, building a massive depository of information that documents both our reactions to events and our evolving customs with a scope and immediacy of which earlier historians could only dream",
    "Amazing idea. Hopefully it doesn't destroy democracy though",
  ],
  [
    "A new kind of accelerator program for startups. The program teaches founders to market their product, team and market, refining their business model, achieving product/market fit, and scaling the startup into a high growth business, etc.",
    "Very promising idea for startups",
  ],
  [
    "A web mapping platform for consumer. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bike, air and public transportation.",
    "Amazing idea. This would really empower people.",
  ],
  [
    "Space startup that designs, manufactures and launches advanced rockets and spacecraft. We will get contracts from NASA and other private companies to launch satellites into orbit and one day send humans to Mars.",
    "Wow! I hope we get to Mars one day.",
  ],
  [
    "This 'brilliant' idea for a website lets you pick who's invited to your funeral, who's not and even lets you choose the DJ for the day.",
    "yo be real... -_-",
  ],
  [
    "A social network for all your imaginary friends, from Jessica Rabbit to Batman. Keeping track of your favourite non-existent friends was never so much fun",
    "yo be real... -_-",
  ],
  [
    "This app tells you what ghostly forces are around you using terms like true heading, geo location and raw vector.",
    "yo be real... -_-",
  ],
  [
    "App that allows users to post every single one of their credit card transactions to a social media feed.",
    "yo be real... -_-",
  ],
  [
    `A social threat network where you can share your friends secrets, revealing it little by little until they pay you to stop.`,
    "yo be real... -_-",
  ],
  [
    "Platform designed to sporkle a morgle effectively and at scale",
    "yo be real... -_-",
  ],
  [
    "Building rainbows to jump from Hawaii to seventeen in 2 hours",
    "yo be real... -_-",
  ],
];

export const genYoBeReal = async (query) =>
  (
    await complete(
      createPrompt({
        instruction: yoBeRealInstruction,
        labels: ["Idea", "Review"],
        examples: yoBeRealExamples,
        query,
      }),
      { max_tokens: 24, temperature: 1, best_of: 3 }
    )
  )[0].text;

export default genYoBeReal;
