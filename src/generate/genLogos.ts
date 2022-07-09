// generate/genLogos.ts

import { memoize } from "../clients/cache";
import pollReplicate from "../utils/pollReplicate";
import {
  replicateApiKey,
  replicateModelVersion,
  replicateEndpoint,
} from "../env";

async function _genLogos(keywords, n = 1) {
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
}

export const genLogos = memoize(_genLogos);
export default genLogos;
