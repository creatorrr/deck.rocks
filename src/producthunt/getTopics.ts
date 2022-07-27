// producthunt/getTopics.ts

import { memoize } from "../clients/cache";
import { productHuntToken, PRODUCT_HUNT_ENDPOINT } from "../env";

export interface Topic {
  slug: string;
  description: string;
}

// This is a recursive function that follows all cursors until the list of topics is exhausted,
// then returns the topics concated in a list
async function getTopics(
  prevNodes: Topic[] = [],
  after = ""
): Promise<Topic[]> {
  const query = `{
    topics(order: FOLLOWERS_COUNT, after: "${after}") {
      nodes {
        description
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`;

  const body = JSON.stringify({ query, variables: null });

  const response = await fetch(PRODUCT_HUNT_ENDPOINT, {
    body,
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${productHuntToken}`,
    },
  });

  const { data, errors } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));

  const {
    topics: {
      nodes,
      pageInfo: { hasNextPage, endCursor },
    },
  } = data;
  const nodesSoFar = [...prevNodes, ...nodes];

  // If reached end, return `nodesSoFar`
  // else, recurse again
  return !hasNextPage ? nodesSoFar : getTopics(nodesSoFar, endCursor);
}

// export default getTopics;
export default memoize(getTopics, false); // Dont evict
