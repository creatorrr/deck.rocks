// producthunt/getTopicsWithEmbeddings.ts

import _ from "lodash";

import { memoize } from "../clients/cache";
import embed from "../huggingface/embed";
import getTopics from "./getTopics";

async function getTopicsWithEmbeddings(limit = Infinity) {
  const topics = await getTopics();

  return await Promise.all(
    _(topics)
      .take(limit)
      .map(async ({ slug, description }) => ({
        slug,
        embedding: await embed(`${_.startCase(slug)}: ${description}`),
      }))
      .value()
  );
}

// export default getTopicsWithEmbeddings;
export default memoize(getTopicsWithEmbeddings, false); // Dont evict
