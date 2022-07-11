// index.ts

import "dotenv/config";

import app from "./app";
import { PORT } from "./env";

console.log(`Listening on port: ${PORT}`);
app.listen(PORT);
