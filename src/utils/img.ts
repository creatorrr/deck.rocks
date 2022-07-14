// utils/img.ts

import glob from "glob";
import { sample } from "lodash";

import { assetsPath } from "../env";

export const loadingGifs = glob
  .sync(`${assetsPath}/img/loading/*`)
  .map((path) => `/img/${path.split("/img/")[1]}`);

export const getRandomLoadingGif = () => sample(loadingGifs);
