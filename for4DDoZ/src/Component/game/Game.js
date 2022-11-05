import Phaser from 'phaser';
import preload from './Preload';
import create from './Create';
import update from './Update';

export const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1200,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

