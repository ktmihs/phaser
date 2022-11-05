function preload() {
  this.load.image('background', 'src/assets/galletcity.png');

  // this.load.atlas('player', 'src/assets/black.png', 'src/assets/sprite.json');
  this.load.atlas('player', 'src/assets/creme.png', 'src/assets/sprite.json');
  // this.load.atlas('player', 'src/assets/red.png', 'src/assets/sprite.json');
  // this.load.spritesheet('player', blackImg, { frameWidth: 23, frameHeight: 20 });
  // this.load.spritesheet('player', blackImg, {
  //   frameWidth: 32,
  //   frameHeight: 32,
  //   startFrame: 0,
  //   endFrame: 79
  // });
}

export default preload;