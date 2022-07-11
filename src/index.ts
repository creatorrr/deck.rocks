// index.ts

import "dotenv/config";

import app from "./app";
import { PORT } from "./env";
import { ready } from "./clients";

// Wait for all clients to become ready before starting the server
console.log("Starting up...");

ready.then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
});
