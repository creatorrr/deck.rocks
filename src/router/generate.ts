// router/generate.ts

import cyrb53 from "cyrb53";

import queue from "../clients/queue";

export default async (ctx) => {
  let { idea, format } = ctx.query;
  idea = idea.trim();
  format = format || "deck";

  const job = await queue.add({ idea });
  const hash = cyrb53(idea);

  return ctx.redirect(`/status?job_id=${job.id}&hash=${hash}&format=${format}`);
};
