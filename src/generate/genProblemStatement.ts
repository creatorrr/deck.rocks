// generate/genProblemStatement.ts

import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const problemStatementInstruction = `Describe the problem which the solution is trying to solve.`;

const problemStatementExamples = [
  [
    "Tree Planet has developed a mobile game about trees with in-game purchases and advertising revenues being spent on planting trees in real life.",
    "Deforestation is responsible for 15% of global greenhouse gas emissions.",
  ],
  [
    "B2B startup sells and mounts small- and medium-sizesd photovoltaic installations on rooftops. This way companies can immediately benefit from using renewable energy source.",
    "Solar installations often were built quicker than a transmission network. Thus many companies and individuals can’t benefit from it.",
  ],
  [
    "Battery packs that combine used battery cells with their own technology to store solar energy. This way batteries get a second extended life.",
    "Rechargeable batteries (especially those used in mobile devices) turn into waste quite quickly.",
  ],
  [
    "Streaming platform that allows anyone to enjoy thousands of titles streamed directly to their home or delivered to their mailbox.",
    "Going to the video store requires fighting traffic, wandering the aisles and wasting time.",
  ],
  [
    "Startup leases off grid solar panels and batteries for as little as 35 cents per day. It’s cheaper and cleaner than widespread kerosene solutions.",
    "Many people don’t have permanent access to electricity.",
  ],
  [
    "A platform through which supermarkets can inform the consumers that they have discounts on food approaching its sell-by date.",
    "Supermarkets often have to throw away food due to expiration.",
  ],
  [
    "App that allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other content.",
    "In developing countries, most people got a personal cell phone number before they ever got an email address. This allows them to get connected without email.",
  ],
];

export const genProblemStatement = async (query) =>
  (
    await complete(
      createPrompt({
        instruction: problemStatementInstruction,
        labels: ["Startup Idea", "Problem Statement"],
        examples: problemStatementExamples,
        query,
      }),
      { max_tokens: 36, temperature: 1, best_of: 3 }
    )
  )[0].text;

export default genProblemStatement;
