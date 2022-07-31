// clients/sentry.ts

import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import { sentryDsn as dsn } from "../env";

// Initialize
Sentry.init({
  dsn,
  tracesSampleRate: 1.0,
});

export default Sentry;
