// views/Status.tsx

import type { HeadProps } from "./general/Head";
import type { JobWithStatus } from "../utils/jobs";

import { startCase } from "lodash";

import Head from "./general/Head";
import { getRandomLoadingGif } from "../utils/img";
import { JobStatus } from "../utils/jobs";
import { take, generateFunnies } from "../utils/misc";

interface StatusProps extends HeadProps {
  job: JobWithStatus;
}

export default ({ job, ...props }: StatusProps) => (
  <html>
    <Head {...props} />
    <body>
      <h3 className="align-center">
        Status: &nbsp;
        <mark>
          <kbd>{startCase(JobStatus[job.status].toLowerCase())}</kbd>
        </mark>
      </h3>
      <img src={getRandomLoadingGif()} className="margin-center" />
      <cite className="align-center funny">Initializing awesomeness...</cite>
      {take(generateFunnies(), 20).map((fun, i) => (
        <cite className="align-center funny hidden" key={i}>
          {fun}
        </cite>
      ))}

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
        }, 3000)`,
        }}
      ></script>
    </body>
  </html>
);
