// @ts-nocheck
// generate/predictBusinessModel.ts

import _ from "lodash";

import businessModels from "../data/businessModels";
import complete from "../openai/complete";

const predictBusinessModelInstruction = `Given a business idea, suggest the most suitable business model for that business. It can be one of the following: "${_(
  businessModels
)
  .map("name")
  .join(`", "`)}"`;

const predictBusinessModelExamples = [
  [
    `Dropbox Lets You Access Your Team’s Work From Computer, Mobile Device or Any Web Browser.`,
    "Freemium Model",
  ],
  [
    `Apptimize lets you AB test mobile applications. You keep the native experience without needing to push changes blindly or rely on users to update.`,
    "Subscription Model",
  ],
  [
    `Shaving tools and well-rounded skin care for every man: thoughtfully made, honestly priced, with a quality guarantee`,
    "Razor Blades Model",
  ],
  [
    `Zipcar is a car-sharing company. It provides automobile reservations to its members, billable by the hour.`,
    "Leasing Model",
  ],
  [
    `Instacart makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers.`,
    "Retailer Model",
  ],
  ..._(businessModels)
    .entries()
    .map(([modelSlug, { description, examples }]) => [
      `${description} ${examples}`,
      `${_.startCase(modelSlug)} Model`,
    ])
    .value(),
];

export const predictBusinessModel = async (query) =>
  (
    await complete(
      {
        instruction: predictBusinessModelInstruction,
        labels: ["Idea", "Business Model"],
        examples: predictBusinessModelExamples,
        query,
      },
      { temperature: 0.1, max_tokens: 3, best_of: 1 }
    )
  )[0].text;

export default predictBusinessModel;
