// producthunt/getProducts.ts

import fetch from "@adobe/node-fetch-retry";

import { memoize } from "../clients/cache";
import Sentry from "../clients/sentry";
import { productHuntToken, PRODUCT_HUNT_ENDPOINT } from "../env";

async function getProducts(topicSlug: string, featured = false) {
  const query = `{
    posts(featured:${featured ? "true" : "false"}, topic: "${topicSlug}") {
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

  if (errors) {
    console.error(errors);
    const exn = new Error(errors);
    Sentry.captureException(exn);

    throw exn;
  }

  const {
    posts: { nodes },
  } = data;

  return nodes;
}

// export default getProducts;
export default memoize(getProducts);
