import * as PIXI from 'pixi.js';
// @ts-ignore
import { install } from '@pixi/unsafe-eval';
install(PIXI);

const IsDev = process.env.NODE_ENV === 'development';

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

    app.loader.add('crack', 'src/assets/cracked.jpg');
    app.loader.load((loader, resources) => {
      if (resources.crack) {
        let sprite = new PIXI.Sprite(resources.crack.texture);
        app.stage.addChild(sprite);
      }
    });
  },
  false
);
