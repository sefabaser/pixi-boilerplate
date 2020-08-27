import * as PIXI from 'pixi.js';

import { Game, GameAssets } from 'pixi-framework';

let game = new Game();
game
  .setup([
    {
      name: 'crack',
      source: './src/assets/cracked.jpg'
    }
  ])
  .then(() => {
    let asset = GameAssets.getAsset('crack');
    let sprite = new PIXI.Sprite(asset.texture);
    game.app.stage.addChild(sprite);
  });
