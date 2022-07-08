// producthunt/getProducts.ts

import fetch from "node-fetch2";

import { memoize } from "../clients/cache";
import { productHuntToken, PRODUCT_HUNT_ENDPOINT } from "../env";

async function _getProducts(topicSlug, first=5, featured=true) {
  const query = `{
    posts(featured:${featured ? "true" : "false"}, topic: "${topicSlug}", first:${first}) {
      nodes {
        url,
        tagline,
        name,
        thumbnail {
          url
        }
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

  const { posts: { nodes }} = data;

  return nodes;
}

export const getProducts = memoize(_getProducts);
export default getProducts;
