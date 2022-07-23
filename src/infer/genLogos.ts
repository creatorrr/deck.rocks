// generate/genLogos.ts

import fetch from "cross-fetch";

import { memoize } from "../clients/cache";
import pollReplicate from "../utils/pollReplicate";
import {
  replicateApiKey,
  replicateModelVersion,
  replicateEndpoint,
} from "../env";

async function genLogos(keywords: string, n: number = 1): Promise<string[]> {
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Token ${replicateApiKey}`,
  };

  const input = {
    prompt: `logo of a ${keywords} product`,
    n_predictions: `${n}`,
  };

  const body = {
    input,
    version: replicateModelVersion,
  };

  try {
    const response = await fetch(replicateEndpoint, {
      headers,
      body: JSON.stringify(body),
      method: "POST",
    });

    const {
      urls: { get: url },
    } = await response.json();

    // Need to poll replicate endpoint until the results are ready
    return (await pollReplicate(url)).map(({ image }) => image);
  } catch (e) {
    console.error(e);
    return [
      "https://replicate.com/api/models/borisdayma/dalle-mini/files/2c5b61dd-6bcd-400d-8abf-1712a915c432/output_0.png",
    ];
  }
}

export default memoize(genLogos);
