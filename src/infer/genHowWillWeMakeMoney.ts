// generate/genHowWillWeMakeMoney.ts

import type { BusinessModel } from "../utils/businessModel";

import grammarify from "grammarify";

import * as rental from "../data/businessModels/rental";
import * as retail from "../data/businessModels/retail";
import * as freemium from "../data/businessModels/freemium";
import * as subscription from "../data/businessModels/subscription";
import * as marketplace from "../data/businessModels/marketplace";
import * as onDemand from "../data/businessModels/onDemand";
import * as adBased from "../data/businessModels/adBased";

import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const howWillWeMakeMoneyInstruction = `Given a description of what a company does and its business model, predict the best way for them to make money.`;

const howWillWeMakeMoneyExamples = [
  [
    `Platform that lets you access your team's work from computer, mobile device or any web browser.`,
    freemium.description,
    "We are going to give away free accounts to entice users and then charge for additional storage,",
  ],
  [
    `Platform to track users as they move from one channel to another. This helps provide a consistent experience across platforms.`,
    subscription.description,
    "We sell a monthly subscription. We'll also offer customers help with experiment design.",
  ],
  [
    `An art marketplace where customers can request artwork for logos, branding, and book covers.`,
    marketplace.description,
    "We take a cut of all transactions on the platform. We only act as the intermediary that takes care of the transactions between buyers and sellers.",
  ],
  [
    `A car-sharing company that provides automobile reservations to its members, billable by the hour.`,
    rental.description,
    "The company makes money by leasing out cars on an hourly basis.",
  ],
  [
    `App that makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers.`,
    onDemand.description,
    "We take a premium commission from our service providers for connecting them to on-demand customer requests.",
  ],
  [
    `We are more than just a grocery store; we seek out the finest natural and organic foods available, maintain the strictest quality standards.`,
    retail.description,
    "We make money from the markup on our goods.",
  ],
  [
    `A free video sharing website that makes it easy to watch online videos. You can create and upload your own videos.`,
    adBased.description,
    "As a high-value platform, we will make money by selling ad-space on our apps and website.",
  ],
].map((example) => example.map((text) => grammarify.clean(text)));

export const genHowWillWeMakeMoney = async (
  idea: string,
  businessModel: BusinessModel
) =>
  (
    await complete(
      createPrompt({
        instruction: howWillWeMakeMoneyInstruction,
        labels: ["Business Idea", "Revenue Model", "How it will make money"],
        examples: howWillWeMakeMoneyExamples,
        query: [idea, businessModel.description],
      }),
      { temperature: 0.5, max_tokens: 36, best_of: 1, frequency_penalty: 0.3 }
    )
  )[0].text;

export default genHowWillWeMakeMoney;
