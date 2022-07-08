// producthunt/getTopics.ts

import fetch from "node-fetch2";

import { memoize } from "../clients/cache";
import { productHuntToken, PRODUCT_HUNT_ENDPOINT } from "../env";

// This is a recursive function that follows all cursors until the list of topics is exhausted,
// then returns the topics concated in a list
async function _getTopics(prevNodes=[], after="") {
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

  const body = JSON.stringify({ query, variables: null, });

  const response = await fetch(PRODUCT_HUNT_ENDPOINT, {
    body,
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${productHuntToken}`,
    },
  });

  const { data, errors } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));

  const { topics: { nodes, pageInfo: { hasNextPage, endCursor }}} = data;
  const nodesSoFar = [...prevNodes, ...nodes];

  // If reached end, return `nodesSoFar`
  // else, recurse again
  return (
    !hasNextPage
    ? nodesSoFar
    : _getTopics(nodesSoFar, endCursor)
  );
}

export const getTopics = memoize(_getTopics);
export default getTopics;
