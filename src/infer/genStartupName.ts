// generate/genStartupName.ts

import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const startupNameInstruction = `Suggest a "catchy" name for the startup idea based on what it does.`;

const startupNameExamples = [
  [
    "Search the world's information, including webpages, images, videos and more.",
    "Finderr",
  ],
  [
    "Social network connecting people with each other. Alongside it, building a massive depository of information that documents both our reactions to events and our evolving customs with a scope and immediacy of which earlier historians could only dream",
    "Letsbefriendz",
  ],
  [
    "A new kind of accelerator program for startups. The program teaches founders to market their product, team and market, refining their business model, achieving product/market fit, and scaling the startup into a high growth business, etc.",
    "Accelr8",
  ],
  [
    "A web mapping platform for consumer. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bike, air and public transportation.",
    "MapsBot",
  ],
  [
    "Space startup that designs, manufactures and launches advanced rockets and spacecraft. We will get contracts from NASA and other private companies to launch satellites into orbit and one day send humans to Mars.",
    "SpaceY",
  ],
  [
    "Tree Planet has developed a mobile game about trees with in-game purchases and advertising revenues being spent on planting trees in real life.",
    "Tree Planet",
  ],
  [
    "B2B startup sells and mounts small- and medium-sizesd photovoltaic installations on rooftops. This way companies can immediately benefit from using renewable energy source.",
    "Solarity",
  ],
  [
    "Battery packs that combine used battery cells with their own technology to store solar energy. This way batteries get a second extended life.",
    "Relectrify",
  ],
];

export const genStartupName = async (query) =>
  (
    await complete(
      createPrompt({
        instruction: startupNameInstruction,
        labels: ["Startup Idea", "Awesome Name"],
        examples: startupNameExamples,
        query,
      }),
      { max_tokens: 3, temperature: 1, best_of: 10 }
    )
  )[0].text;

export default genStartupName;
