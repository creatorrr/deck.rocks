// generate/genStartupName.ts

import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const startupNameInstruction = `Suggest a "catchy" name for the startup idea based on what it does.`;

const startupNameExamples = [
  [
    "Search the world's information, including webpages, images, videos and more.",
    "Finderr",
  ],
  ["Social network connecting people with each other.", "Letsbefriendz"],
  [
    "A new kind of accelerator program for startups that teaches founders how to run companies.",
    "Accelr8",
  ],
  [
    "A web mapping platform that offers satellite imagery, street maps and navigation.",
    "MapsBot",
  ],
  ["Space startup that manufactures and launches advanced rockets.", "SpaceY"],
  [
    "A mobile game about trees where in-game purchases and ad revenues is spent on planting trees.",
    "Tree Planet",
  ],
  ["B2B startup sells solar power installations on rooftops.", "Solarity"],
  [
    "Battery packs that combine used battery cells to store solar energy.",
    "Relectrify",
  ],
];

export const genStartupName = async (query: string) =>
  (
    await complete(
      createPrompt({
        instruction: startupNameInstruction,
        labels: ["Idea", "Catchy Name"],
        examples: startupNameExamples,
        query,
      }),
      { max_tokens: 3, temperature: 1, best_of: 3 }
    )
  )[0].text;

export default genStartupName;
