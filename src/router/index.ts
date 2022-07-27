// routes.ts

import Router from "@koa/router";

import display from "./display";
import home from "./home";
import gallery from "./gallery";
import generate from "./generate";
import status from "./status";

export const router = new Router();

router.get("/", home);
router.get("/gallery", gallery);
router.get("/generate", generate);
router.get("/status", status);
router.get("/display", display);

export default router;
