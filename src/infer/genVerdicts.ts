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
  const verdictPromises: Promise<Verdict>[] = _(huggingtweetModels)
    .shuffle()
    .map(async (handle) => ({ handle, content: await tweet(idea, handle) }))
    .value();

  const verdicts: Verdict[] = [];
  let i = 0;

  for await (const verdict of asDone(verdictPromises)) {
    verdicts.push(verdict);
    i += 1;

    if (i >= n) break;
  }

  debug && console.debug(verdicts);

  return verdicts;
}
