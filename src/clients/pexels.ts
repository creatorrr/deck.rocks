// clients/pexels.ts

import { createClient as createPexelsClient } from "pexels";

import { memoize } from "../clients/cache";
import { pexelsApiKey } from "../env";

const pexels = createPexelsClient(pexelsApiKey);

async function _searchImages(query, opts={ orientation: "landscape" }) {
  const { photos } = await pexels.photos.search({
    query,
    locale: "en-US",
    ...opts,
  });

  return photos;
}

export const searchImages = memoize(_searchImages);
