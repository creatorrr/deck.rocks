// views/Status.tsx

import type { HeadProps } from "./general/Head";
import type { JobWithStatus } from "../utils/jobs";

import Controls from "./Controls";
import Head from "./general/Head";
import Loading from "./status/Loading";
import Ready from "./status/Ready";
import Failed from "./status/Failed";
import { JobStatus } from "../utils/jobs";

interface StatusProps extends HeadProps {
  job_id: number | string;
  hash: number | string;
  job: JobWithStatus;
}

export default ({ job_id, hash, job, ...props }: StatusProps) => {
  let redirectTo, redirectIn;

  switch (job.status) {
    case JobStatus.READY:
      redirectTo = `/display?job_id=${job_id}&hash=${hash}&format=${props.format}`;
      redirectIn = 2;
      break;
    default:
      redirectTo = `/status?job_id=${job_id}&hash=${hash}&format=${props.format}`;
      redirectIn = 10;
      break;
  }

  return (
    <html>
      <Head {...props} redirectTo={redirectTo} redirectIn={redirectIn} />
      <body>
        <Controls showForm={false} format={props.format} prefill="" />

        {job.status === JobStatus.FAILED ? (
          <Failed status={job.status} />
        ) : job.status === JobStatus.READY ? (
          <Ready status={job.status} />
        ) : (
          <Loading status={job.status} />
        )}
      </body>
    </html>
  );
};
