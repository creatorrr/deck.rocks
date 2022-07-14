// routes.ts

import Router from "@koa/router";

import home from "./home";
import generate from "./generate";
import status from "./status";

export const router = new Router();

router.get("/", home);
router.get("/generate", generate);
router.get("/status", status);

export default router;
