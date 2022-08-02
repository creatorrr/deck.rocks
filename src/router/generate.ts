// router/generate.ts

import cyrb53 from "cyrb53";
import * as Koa from "koa";

import queue from "../clients/queue";
import { minInputLength, maxInputLength } from "../env";
import { ContentPolicyError } from "../openai/moderate";
import contentFilter from "../openai/contentFilter";
import { isProfane } from "../utils/text";

export default async (ctx: Koa.Context) => {
  let { idea, format } = ctx.query;
  idea = idea || "";
  idea = idea.toString().trim();
  format = format || "deck";

  // Reject obviously profane stuff
  const profane = await isProfane(idea);
  if (profane) throw new ContentPolicyError(["profanity"]);

  // Filter through OpenAI CF=2
  const safe: boolean = await contentFilter(idea);
  if (!safe) throw new ContentPolicyError(["toxicity"]);

  let error: string;

  if (!idea) {
    error = "Idea input missing";
  } else if (idea.length < minInputLength) {
    error = `Input should be longer than ${minInputLength} characters`;
  } else if (idea.length > maxInputLength) {
    error = `Input should be shorter than ${maxInputLength} characters`;
  }

  if (error)
    return ctx.redirect(
      `/?prefill=${encodeURIComponent(idea)}&error=${encodeURIComponent(error)}`
    );

  console.log(`Starting job for: ${idea}`);
  const job = await queue.add({ idea });
  const hash = cyrb53(idea);

  return ctx.redirect(`/status?job_id=${job.id}&hash=${hash}&format=${format}`);
};
