// generate/calcMarketSize.ts

import complete from "../openai/complete";
import createPrompt from "../utils/createPrompt";

const marketSizeInstruction = `Provide the market size of the given industry.`;

const marketSizeExamples = [
  ["Bars & Nightclubs", "26.7"],
  ["Chain Restaurants", "162.6"],
  ["Security Alarm Services", "34.9"],
  ["Telemarketing & Call Centers", "23.9"],
  ["Tobacco Growing", "0.87"],
  ["Gym, Health & Fitness Clubs", "36.6"],
  ["Arts, Entertainment and Recreation", "306.6"],
  ["Sports Coaching", "10.4"],
  ["Physical Therapists", "46.4"],
  ["Specialist Doctors", "296.8"],
  ["Cable Networks", "94.1"],
  ["Movie Theaters", "12.1"],
  ["Electronic & Computer Repair", "19.6"],
  ["Accounting Services", "141.8"],
  ["IT Consulting", "546.9"],
  ["Professional, Scientific and Technical Services", "2500"],
  ["Management Consulting", "236.5"],
  ["Ethanol Fuel Production", "9.3"],
  ["Point of Sale Software", "2.9"],
  ["Smartphone App Developers", "161.7"],
  ["Social Networking Sites", "72.2"],
  ["Speech & Voice Recognition Software", "4.3"],
];

export const calcMarketSize = async (query) =>
  (
    await complete(
      createPrompt({
        instruction: marketSizeInstruction,
        labels: ["Industry", "Market size in billions of US Dollars"],
        examples: marketSizeExamples,
        query,
      }),
      {
        max_tokens: 3,
        temperature: 0.2,
        best_of: 1,
        presence_penalty: 2.0,
        frequency_penalty: 2.0,
      }
    )
  )[0].text;

export default calcMarketSize;
