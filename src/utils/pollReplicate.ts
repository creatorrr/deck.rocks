// utils/pollReplicate.ts

import { setTimeout } from "node:timers/promises";
import fetch from "@adobe/node-fetch-retry";

import { replicateApiKey } from "../env";

export const pollReplicate = async (
  url: string,
  count = 1,
  maxRetries = 20,
  waitSeconds = 3
): Promise<string[]> => {
  if (count >= maxRetries)
    throw new Error(`Max retries limit (${maxRetries}) reached`);

  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Token ${replicateApiKey}` },
  });

  const { status, output } = await response.json();

  // This switch-case is a little subtle. Careful of the implicit breaks
  switch (status) {
    case "canceled":
    case "failed":
      throw new Error(status);
    case "starting":
      console.log("Generating a logo. Can take up to 30 seconds...");
    case "processing":
      await setTimeout(waitSeconds * 1000); // wait for x seconds
      return await pollReplicate(url, count + 1);
    default:
      return output;
  }
};

export default pollReplicate;
