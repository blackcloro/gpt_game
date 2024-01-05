class Update extends Phaser.Scene {
  constructor() {
    super('update');
  }

  update() {
    if (global.cursors.left.isDown) {
      global.player.setVelocityX(-160);
    } else if (global.cursors.right.isDown) {
      global.player.setVelocityX(160);
    } else {
      global.player.setVelocityX(0);
    }
  }
}

export default Update;