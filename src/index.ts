// index.ts

import "dotenv/config";
import "cross-fetch/polyfill";

import app from "./app";
import { port } from "./env";
import { ready } from "./clients";
import Sentry from "./clients/sentry";

// Wait for all clients to become ready before starting the server
console.log("Starting up...");

process.on("unhandledRejection", (err) => {
  console.error(err);
  Sentry.captureException(err);
});

ready.then(() => {
  console.log(`Listening on port: ${port}`);
  app.listen(port);
});
