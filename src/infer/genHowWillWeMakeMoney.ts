// generate/genHowWillWeMakeMoney.ts

import businessModels from "../data/businessModels";
import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const howWillWeMakeMoneyInstruction = `This is a conversation between a human and a brilliant AI. The human describes a business idea and its model and the AI replies how that idea can make money.`;

const howWillWeMakeMoneyExamples = [
  [
    `Dropbox Lets You Access Your Team’s Work From Computer, Mobile Device or Any Web Browser. ${businessModels.freemium.description}`,
    "We are going with a freemium approach, where we give away free accounts and charge for additional storage,",
  ],
  [
    `Apptimize lets you AB test mobile applications. You keep the native experience without needing to push changes blindly or rely on users to update. ${businessModels.subscription.description}`,
    "The plan is a monthly subscription. We’ll offer customers help with experiment design.",
  ],
  [
    `Shaving tools and well-rounded skin care for every man: thoughtfully made, honestly priced, with a quality guarantee. ${businessModels.razor_blades.description}`,
    "We will sell premium shaving products with replaceable parts that we will ship directly to them.",
  ],
  [
    `Zipcar is a car-sharing company. It provides automobile reservations to its members, billable by the hour. ${businessModels.leasing.description}`,
    "The company makes money by leasing out cars on an hourly basis.",
  ],
  [
    `Instacart makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers. ${businessModels.retailer.description}`,
    "This makes money via commissions, delivery fees and profits on the items sold.",
  ],
];

export const genHowWillWeMakeMoney = async (
  title,
  businessModelSlug = "subscription"
) =>
  (
    await complete(
      createPrompt({
        instruction: howWillWeMakeMoneyInstruction,
        labels: ["Business Idea", "How it will make money"],
        examples: howWillWeMakeMoneyExamples,
        query: `${title}. ${businessModels[businessModelSlug].description}`,
      }),
      { temperature: 0.5, max_tokens: 36, best_of: 1, frequency_penalty: 0.3 }
    )
  )[0].text;

export default genHowWillWeMakeMoney;
