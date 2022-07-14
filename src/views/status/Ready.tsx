// views/status/Ready.tsx

import { sample, startCase } from "lodash";

import { JobStatus } from "../../utils/jobs";

export interface ReadyProps {
  status: JobStatus;
}

export default ({ status }: ReadyProps) => (
  <>
    <h3 className="align-center">
      Status: &nbsp;
      <mark className="hl-green">
        <kbd>{startCase(JobStatus[status || 0].toLowerCase())}</kbd>
      </mark>
    </h3>

    <h1 className="yo align-center">
      {sample([
        "🤘",
        "😎",
        "✅",
        "🎈",
        "🚀",
        "⚽",
        "🔥",
        "✨",
        "🤖",
        "🏖️",
        "🦸‍♀️",
      ])}
    </h1>

    <small className="block align-center small-60 color-gray">
      Just a moment!
      <br></br>
      We are taking you to your deck.
    </small>
  </>
);
