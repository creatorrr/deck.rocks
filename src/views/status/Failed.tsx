// views/status/Failed.tsx

import { sample, startCase } from "lodash";

import { JobStatus } from "../../utils/jobs";

export interface FailedProps {
  status: JobStatus;
}

export default ({ status }: FailedProps) => (
  <>
    <h3 className="align-center">
      Status: &nbsp;
      <mark className="hl-red">
        <kbd>{startCase(JobStatus[status || 0].toLowerCase())}</kbd>
      </mark>
    </h3>

    <h1 className="yo align-center">
      {sample(["🛑", "🤕", "😬", "🤔", "😭", "🤦‍♀️", "💩", "🤺"])}
    </h1>

    <small className="block align-center small-60 color-gray">
      Oops... Something went wrong.
      <br></br>
      Please <a href="/"> try again </a>.
    </small>
  </>
);
