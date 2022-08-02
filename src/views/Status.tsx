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
  let redirectTo: string, redirectIn: number;

  switch (job.status) {
    case JobStatus.READY:
      redirectTo = `/display?job_id=${job_id}&hash=${hash}&format=${props.format}`;
      redirectIn = 1;
      break;
    case JobStatus.PROCESSING:
      redirectTo = `/status?job_id=${job_id}&hash=${hash}&format=${props.format}`;
      redirectIn = 5;
      break;
    case JobStatus.FAILED:
      redirectTo = `/status?job_id=${job_id}&hash=${hash}&format=${props.format}`;
      break;
    default:
      redirectTo = `/status?job_id=${job_id}&hash=${hash}&format=${props.format}`;
      redirectIn = 5;
  }

  return (
    <html>
      <Head {...props} redirectTo={redirectTo} redirectIn={redirectIn} />
      <body>
        <Controls
          idea="Picnic box for families that want to spend time out in nature"
          showForm={false}
          format={props.format}
          prefill=""
          job_id={null}
          hash={null}
          {...props}
        />

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
