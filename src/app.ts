import * as PIXI from "pixi.js";
// @ts-ignore
import { install } from "@pixi/unsafe-eval";

install(PIXI);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    //Create a Pixi Application
    let app = new PIXI.Application({
      width: 640,
      height: 480,
      antialias: true,
      resolution: 1,
    });
    document.body.appendChild(app.view);
  },
  false
);
