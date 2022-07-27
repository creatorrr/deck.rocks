// clients/pexels.ts

import { createClient as createPexelsClient } from "pexels";

import { memoize } from "../clients/cache";
import { pexelsApiKey } from "../env";

const pexels = createPexelsClient(pexelsApiKey);

async function searchImages(query, opts = { orientation: "landscape" }) {
  const response = await pexels.photos.search({
    query,
    locale: "en-US",
    ...opts,
  });

  if ("error" in response) throw new Error(response.error);

  const { photos } = response;
  return photos;
}

// export default searchImages;
export default memoize(searchImages);
