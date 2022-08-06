// generate/genLogos.ts

import fetch from "@adobe/node-fetch-retry";
import cyrb53 from "cyrb53";

import { memoize } from "../clients/cache";
import pollReplicate from "../utils/pollReplicate";
import {
  replicateApiKey,
  replicateModelVersion,
  replicateEndpoint,
} from "../env";

async function genLogos(idea: string, n: number = 1): Promise<string[]> {
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Token ${replicateApiKey}`,
  };

  const input = {
    text: `logo of a startup: ${idea}`,
    temperature: 0.66,
    top_k: 128,
    supercondition_factor: 4,
    save_as_png: true,
    progressive_outputs: false,
    seamless: false,
    grid_size: n,
  };

  const body = {
    input,
    version: replicateModelVersion,
  };

  try {
    const hash = cyrb53(idea);
    console.time(`logo-${hash}`);
    const response = await fetch(replicateEndpoint, {
      headers,
      body: JSON.stringify(body),
      method: "POST",
    });

    const {
      urls: { get: url },
    } = await response.json();

    // Need to poll replicate endpoint until the results are ready
    const result = await pollReplicate(url);
    console.timeEnd(`logo-${hash}`);

    return result;
  } catch (e) {
    console.error(e);
    return [
      "https://replicate.com/api/models/kuprel/min-dalle/files/00a9ba69-2ef1-446e-8399-16d081001e4b/logo-of-a-startup-some-idea.png",
    ];
  }
}

export default memoize(genLogos);
// export default genLogos;
