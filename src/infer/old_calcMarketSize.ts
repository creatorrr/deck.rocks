// @ts-nocheck
// generate/calcMarketSize.ts

import _ from "lodash";
import nlp from "compromise";

import complete from "../openai/complete";

const marketSizeInstruction = `Provide the market size of the given industry.`;

const marketSizeExamples = [
  ["Bars & Nightclubs", 26.7],
  ["Chain Restaurants", 162.6],
  ["Security Alarm Services", 34.9],
  ["Telemarketing & Call Centers", 23.9],
  ["Tobacco Growing", 0.87],
  ["Gym, Health & Fitness Clubs", 36.6],
  ["Arts, Entertainment and Recreation", 306.6],
  ["Sports Coaching", 10.4],
  ["Physical Therapists", 46.4],
  ["Specialist Doctors", 296.8],
  ["Cable Networks", 94.1],
  ["Movie Theaters", 12.1],
  ["Electronic & Computer Repair", 19.6],
  ["Accounting Services", 141.8],
  ["IT Consulting", 546.9],
  ["Professional, Scientific and Technical Services", 2500],
  ["Management Consulting", 236.5],
  ["Ethanol Fuel Production", 9.3],
  ["Point of Sale Software", 2.9],
  ["Smartphone App Developers", 161.7],
  ["Social Networking Sites", 72.2],
  ["Speech & Voice Recognition Software", 4.3],
].map(([industry, marketSize]) => [industry, `$${marketSize} billion`]);

export const calcMarketSize = async (query: string) => {
  const [result] = await complete(
    {
      instruction: marketSizeInstruction,
      labels: ["Industry", "Market size"],
      examples: marketSizeExamples,
      sampleSeparator: "\n\n\n",
      query,
    },
    {
      max_tokens: 3,
      temperature: 0.2,
      best_of: 3,
      presence_penalty: 2.0,
      frequency_penalty: 2.0,
    }
  );

  const doc = nlp(result.text);

  const numbers = doc.numbers().json();
  const top = _(numbers).map("number").map("num").max();

  return top;
};

export default calcMarketSize;
