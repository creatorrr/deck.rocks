// generate/genHowWillWeMakeMoney.ts

import type { BusinessModel } from "../utils/businessModel";

import _ from "lodash";

import businessModels from "../data/businessModels";
import complete from "../openai/complete";

const howWillWeMakeMoneyInstruction = `Given a description of what a company does, describe how it makes money.`;

const howWillWeMakeMoneyExamples = [
  [
    `Service for accessing your work from any computer or mobile device.`,
    businessModels.freemium.name,
    "We offer free accounts to users and charge for additional storage,",
  ],
  [
    `Platform for tracking users as they move from one channel to another.`,
    businessModels.subscription.name,
    "We sell a monthly subscription and charge for premium customer support.",
  ],
  [
    `A design marketplace for logos, branding, and book covers.`,
    businessModels.marketplace.name,
    "We take a cut of transactions. We only act as an intermediary between buyers and sellers.",
  ],
  [
    `A car-sharing service that provides cars on reservations, billable by the hour.`,
    businessModels.rental.name,
    "The company makes money by leasing out cars on an hourly basis.",
  ],
  [
    `App to order from your favorite grocery stores near you.`,
    businessModels.onDemand.name,
    "We take a commission from our service providers for the sales.",
  ],
  [
    `A free video sharing website to watch online videos.`,
    businessModels.adBased.name,
    "We make money by selling ad-space on our apps and website.",
  ],
];

export const genHowWillWeMakeMoney = async (
  query: string,
  { name }: BusinessModel
) =>
  (
    await complete(
      {
        instruction: howWillWeMakeMoneyInstruction,
        labels: ["Idea", "Business Model", "How we make money"],
        examples: howWillWeMakeMoneyExamples,
        query: [query, name],
      },
      { temperature: 0.8, max_tokens: 36, best_of: 1, frequency_penalty: 0.3 }
    )
  )[0].text;

export default genHowWillWeMakeMoney;
