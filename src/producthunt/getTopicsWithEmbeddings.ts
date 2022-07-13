// producthunt/getTopicsWithEmbeddings.ts

import { startCase } from "lodash";

import { memoize } from "../clients/cache";
import embedding from "../openai/embedding";
import getTopics from "./getTopics";

async function getTopicsWithEmbeddings(limit = Infinity) {
  const topics = await getTopics();

  return await Promise.all(
    topics.slice(0, limit).map(async ({ slug, description }) => ({
      slug,
      embedding: await embedding(`${startCase(slug)}: ${description}`),
    }))
  );
}

// export const getTopicsWithEmbeddings = memoize(_getTopicsWithEmbeddings);
export default getTopicsWithEmbeddings;
