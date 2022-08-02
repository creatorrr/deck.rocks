// clients/pexels.ts

import _ from "lodash";
import { createClient as createPexelsClient } from "pexels";

// import { memoize } from "../clients/cache";
import Sentry from "../clients/sentry";
import pexelsDefault from "../data/pexelsDefault";
import { pexelsApiKey } from "../env";

const pexels = createPexelsClient(pexelsApiKey || "");

async function searchImages(
  query: string,
  opts = { orientation: "landscape" }
) {
  let response: { photos?: { src: any }[]; error?: string };

  try {
    response = (await pexels.photos.search({
      query,
      locale: "en-US",
      ...opts,
    })) as any;

    if ("error" in response) throw new Error(response?.error);
  } catch (e) {
    response = pexelsDefault;

    console.error(e);
    Sentry.captureException(e);
  }

  const { photos } = response;
  return _.map(photos, "src");
}

export default searchImages;
// export default memoize(searchImages);
