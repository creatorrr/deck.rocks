// producthunt/getTopicsWithEmbeddings.ts

import { startCase } from "lodash";

import { memoize } from "../clients/cache";
import embed from "../huggingface/embed";
import getTopics from "./getTopics";

async function getTopicsWithEmbeddings(limit = Infinity) {
  const topics = await getTopics();

  return await Promise.all(
    topics.slice(0, limit).map(async ({ slug, description }) => ({
      slug,
      embedding: await embed(`${startCase(slug)}: ${description}`),
    }))
  );
}

// export default getTopicsWithEmbeddings;
export default memoize(getTopicsWithEmbeddings, false); // Dont evict
