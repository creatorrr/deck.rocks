// router/generate.ts

import cyrb53 from "cyrb53";

import { MIN_INPUT_LENGTH, MAX_INPUT_LENGTH } from "../env";
import queue from "../clients/queue";

export default async (ctx) => {
  let { idea, format } = ctx.query;
  idea = idea || "";
  idea = idea.trim();
  format = format || "deck";

  let error;

  if (!idea) {
    error = "Idea input missing";
  } else if (idea.length < MIN_INPUT_LENGTH) {
    error = `Input should be longer than ${MIN_INPUT_LENGTH} characters`;
  } else if (idea.length > MAX_INPUT_LENGTH) {
    error = `Input should be shorter than ${MAX_INPUT_LENGTH} characters`;
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
