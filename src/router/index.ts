// routes.ts

import Router from "@koa/router";

import home from "./home";

export const router = new Router();

router.get("/", home);

export default router;
