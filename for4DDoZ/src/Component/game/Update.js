function update() {
  const { x, y } = this.player;
  if (this.cursors.left.isDown) {
    // this.player.setPosition(x - 5, y);
    this.player.setVelocityX(-100);
    // this.anims.play({ key: 'left' });
  }
  else if (this.cursors.right.isDown) {
    // this.player.setPosition(x + 5, y);
    this.player.setVelocityX(100);
    // this.player.anims.play({ key: 'right' });
  } else if (this.cursors.up.isDown) {
    // this.player.setPosition(x , y- 5);
    this.player.setVelocityY(-100);
    // this.player.anims.play({ key: 'back' });
  } else if (this.cursors.down.isDown) {
    // this.player.setPosition(x , y+5);
    this.player.setVelocityY(100);
    // this.player.anims.play({ key: 'front' });
  } else {
    this.player.setVelocityX(0);
    this.player.setVelocityY(0);
    // this.player.anims.play({ key: 'frontleft' });
  }
}

export default update;