// generate/genVerdicts.ts

import _ from "lodash";

import { debug, huggingtweetModels } from "../env";
import tweet from "../huggingface/tweet";
import { asDone } from "../utils/async";

export interface Verdict {
  content: string;
  handle: string;
}

export default async function genVerdicts(idea: string, n: number = 3) {
  const controllers: AbortController[] = [
    ...Array(huggingtweetModels.length),
  ].map((_x) => new AbortController());

  const verdictPromises: Promise<Verdict>[] = _(huggingtweetModels)
    .zip(controllers)
    .shuffle()
    .map(async ([handle, controller]) => ({
      handle,
      content: await tweet(idea, handle, controller.signal),
    }))
    .value();

  const verdicts: Verdict[] = [];
  let i = 0;

  for await (const verdict of asDone(verdictPromises)) {
    verdicts.push(verdict as any);
    i += 1;

    if (i >= n) break;
  }

  controllers.forEach((controller) => controller.abort());

  debug && console.debug(verdicts);

  return verdicts;
}
