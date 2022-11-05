function create() {
  // platforms = this.physics.add.staticGroup();
  // this.background = this.add.tileSprite(0, 0, 400, 300, 'background').setOrigin(0);
  this.background = this.add.image(800, 600, 'background').setScale(3);

  this.player = this.physics.add.image(100, 450, 'player').setScale(2);

  // player.setBounce(0.2);
  // player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'frontleft',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'frontleft',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'front',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'front',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'frontright',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'frontright',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'right',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'backright',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'backright',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'back',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'back',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'backleft',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'backleft',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNames('player', {
      prefix: 'left',
      start: 0, end: 3,
    }),
    frameRate: 10,
    repeat: -1
  })

  this.cursors = this.input.keyboard.createCursorKeys();
}

export default create;