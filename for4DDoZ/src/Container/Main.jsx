import React from 'react'
import Phaser from 'phaser';
import { config, } from '../Component/game/Game.js'

function Main({ children }) {
  new Phaser.Game(config);
  return (
    <div>
      {children}
    </div>
  )
}
export default Main