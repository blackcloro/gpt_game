import 'phaser';
import Preload from './preload';
import Create from './create';
import Update from './update';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: {
    preload: Preload,
    create: Create,
    update: Update
  }
};

const game = new Phaser.Game(config);