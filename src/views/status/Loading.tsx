// views/status/Loading.tsx

import { startCase } from "lodash";

import { getRandomLoadingGif } from "../../utils/img";
import { take, generateFunnies } from "../../utils/misc";
import { JobStatus } from "../../utils/jobs";

export interface LoadingProps {
  status: JobStatus;
}

export default ({ status }: LoadingProps) => (
  <>
    <h3 className="align-center">
      Status: &nbsp;
      <mark>
        <kbd>{startCase(JobStatus[status || 0].toLowerCase())}</kbd>
      </mark>
    </h3>

    <img src={getRandomLoadingGif()} className="margin-center" />
    <cite className="align-center funny">Initializing awesomeness...</cite>
    {take(generateFunnies(), 20).map((fun, i) => (
      <cite className="align-center funny hidden" key={i}>
        {fun}
      </cite>
    ))}

    <small className="block align-center small-60 color-gray">
      We are working on your deck!
      <br></br>
      Generating new decks can take up to 30 seconds...
    </small>

    <script
      dangerouslySetInnerHTML={{
        __html: `setInterval(()=>{
          // hide everything
          const all = $(".funny");
          all.addClass("hidden");

          // Show a random one
          all.eq(
            Math.floor(Math.random() * all.length)
          ).removeClass("hidden")
        }, 2000)`,
      }}
    ></script>
  </>
);
