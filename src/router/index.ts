// routes.ts

import Router from "@koa/router";

import display from "./display";
import gallery from "./gallery";
import generate from "./generate";
import home from "./home";
import pdf from "./pdf";
import status from "./status";

export const router = new Router();

router.get("/", home);
router.get("/display", display);
router.get("/gallery", gallery);
router.get("/generate", generate);
router.get("/pdf", pdf);
router.get("/status", status);

export default router;
