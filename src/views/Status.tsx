// views/Status.tsx

import type { HeadProps } from "./general/Head";

import Head from "./general/Head";
import { JobStatus } from "../utils/jobs";

interface StatusProps extends HeadProps {
  status: JobStatus;
}

export default ({ status, ...props }: StatusProps) => (
  <html>
    <Head {...props} />
    <body>
      <p> Job status: {JobStatus[status]} </p>
    </body>
  </html>
);
