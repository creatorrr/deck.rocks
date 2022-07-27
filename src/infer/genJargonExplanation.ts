// generate/genJargonExplanation.ts

import complete from "../openai/complete";

const jargonExplanationInstruction = `The human asks the AI to make a simple description more complicated. The AI responds by writing a verbose response full of jargon to explain a simple concept.`;

const jargonExplanationExamples = [
  [
    "Method of using a drinking fountain",
    "To activate the mechanized dihydrogen monoxide dispensary service station, use the flanges to provide a downward force to the simple circular activation console and continue to apply force until the pneumatic system begins operating as intended, which can be surmised at a time when the dihydrogen monoxide travels in a parabolic arc which at is greatest exceeds three inches from the rounded excess liquid receptacle. Once hydration is completed, cease applying force to the console and regard whether or not the dispensary has ceased expelling contents as expected.",
  ],
  [
    "Method of playing with a dog",
    "Being a typical domesticated animal, having been genetically selected for controllability, trainability, and general anthropomorphic features and functions, the typical dog possesses highly specialized and developed feeding behavior. The typical feeding behavior involves routine sustenance intake which can be observed by monitoring changes in animal size. Routine sustenance intake involves active and passive feeding habits, and one can gauge animal health by observing the relative levels of hydration. During training, reward conditioned reinforcement is applied. This involves the practice of rewarding targeted behaviors through the application of reinforcers, with the provision that the targeted behavior is observed. Relevant to the discussion at hand is the typical active and passive behavior exhibited by a typical dog.",
  ],
];

export const genJargonExplanation = async (query: string) =>
  (
    await complete(
      {
        instruction: jargonExplanationInstruction,
        labels: ["Concept", "Complicated Explanation"],
        examples: jargonExplanationExamples,
        query,
      },
      {
        max_tokens: 96,
        temperature: 1,
        best_of: 2,
        presence_penalty: 2.0,
        frequency_penalty: 2.0,
      }
    )
  )[0].text;

export default genJargonExplanation;
