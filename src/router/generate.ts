// router/generate.ts

import cyrb53 from "cyrb53";

import queue from "../clients/queue";
import { MIN_INPUT_LENGTH, MAX_INPUT_LENGTH } from "../env";
import moderate, { ContentPolicyError } from "../openai/moderate";
import { isProfane } from "../utils/text";

export default async (ctx) => {
  let { idea, format } = ctx.query;
  idea = idea || "";
  idea = idea.trim();
  format = format || "deck";

  // Reject profane stuff
  const profane = await isProfane(idea);
  if (profane) throw new ContentPolicyError({ categories: ["profanity"] });

  // Moderate input for compliance with OpenAI
  const { flagged, categories } = await moderate(idea);
  if (flagged) throw new ContentPolicyError({ categories });

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
