class Player {
  constructor(scene) {
    this.scene = scene;
    
    const player = this.scene.physics.add.sprite(100, 450, 'player');

    this.scene.input.keyboard.on('keydown_LEFT', function (event) {
      player.setVelocityX(-160);
    });

    this.scene.input.keyboard.on('keydown_RIGHT', function (event) {
      player.setVelocityX(160);
    });

    this.scene.input.keyboard.on('keyup', function (event) {
      if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        player.setVelocityX(0);
      }
    });
  }
}

export default Player;