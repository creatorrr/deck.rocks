// generate/genHowWillWeMakeMoney.ts

import _ from "lodash";

import * as rental from "../data/businessModels/rental";
import * as freemium from "../data/businessModels/freemium";
import * as subscription from "../data/businessModels/subscription";
import * as marketplace from "../data/businessModels/marketplace";
import * as onDemand from "../data/businessModels/onDemand";
import * as adBased from "../data/businessModels/adBased";

import complete from "../openai/complete";

const howWillWeMakeMoneyInstruction = `Given a description of what a company does, describe how it makes money.`;

const howWillWeMakeMoneyExamples = [
  [
    `Service for accessing your work from any computer or mobile device.`,
    freemium.description,
    "We offer free accounts to users and charge for additional storage,",
  ],
  [
    `Platform for tracking users as they move from one channel to another.`,
    subscription.description,
    "We sell a monthly subscription and charge for premium customer support.",
  ],
  [
    `A design marketplace for logos, branding, and book covers.`,
    marketplace.description,
    "We take a cut of transactions. We only act as an intermediary between buyers and sellers.",
  ],
  [
    `A car-sharing service that provides cars on reservations, billable by the hour.`,
    rental.description,
    "The company makes money by leasing out cars on an hourly basis.",
  ],
  [
    `App to order from your favorite grocery stores near you.`,
    onDemand.description,
    "We take a commission from our service providers for the sales.",
  ],
  [
    `A free video sharing website to watch online videos.`,
    adBased.description,
    "We make money by selling ad-space on our apps and website.",
  ],
];

export const genHowWillWeMakeMoney = async (query: string) =>
  (
    await complete(
      {
        instruction: howWillWeMakeMoneyInstruction,
        labels: ["Idea", "How it makes money"],
        examples: _.map(howWillWeMakeMoneyExamples, ([desc, __, howMoney]) => [
          desc,
          howMoney,
        ]),
        query,
      },
      { temperature: 0.8, max_tokens: 36, best_of: 1, frequency_penalty: 0.3 }
    )
  )[0].text;

export default genHowWillWeMakeMoney;
