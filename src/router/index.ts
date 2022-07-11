// routes.ts

import Router from "@koa/router";

import home from "./home";
import generate from "./generate";

export const router = new Router();

router.get("/", home);
router.get("/generate", generate);

export default router;
