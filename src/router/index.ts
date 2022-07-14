// routes.ts

import Router from "@koa/router";

import home from "./home";
import generate from "./generate";
import status from "./status";
import display from "./display";

export const router = new Router();

router.get("/", home);
router.get("/generate", generate);
router.get("/status", status);
router.get("/display", display);

export default router;
