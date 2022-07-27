// generate/genTopics.ts

import complete from "../openai/complete";

const topicsExamples = [
  [
    `Truth is the property of being in accord with fact or reality. Truth is typically ascribed to things that aim to represent reality or otherwise correspond to it, such as beliefs, propositions, and declarative sentences.`,
    "Truth, Epistemology, Reality",
  ],
  [
    `Rock and roll (often written as rock & roll, rock 'n' roll, or rock 'n roll) is a genre of popular music that evolved in the United States during the late 1940s and early 1950s.`,
    "Music, Rock Music",
  ],
  [
    `Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.`,
    "Medicine, Doctors, Health",
  ],
];

export const genTopics = async (query: string) =>
  (
    await complete(
      {
        instruction: "What are the important topics of the following passages?",
        labels: ["Passage", "Topics"],
        examples: topicsExamples,
        query,
      },
      {
        max_tokens: 12,
        top_p: 0.25,
        temperature: 0.5,
        presence_penalty: 1,
        best_of: 2,
      }
    )
  )[0].text;

export default genTopics;
