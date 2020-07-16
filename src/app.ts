import * as PIXI from 'pixi.js';
// @ts-ignore
import { install } from '@pixi/unsafe-eval';
install(PIXI);

const isDev = process.env.NODE_ENV === 'development';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    // Create a Pixi Application
    let app = new PIXI.Application({
      width: 1200,
      height: 800,
      antialias: true,
      resolution: 1
    });
    document.body.appendChild(app.view);
  },
  false
);
