import Player from "./player";

class Create extends Phaser.Scene {
  constructor() {
    super('create');
  }

  create() {
    this.add.image(400, 300, 'background');
    global.player = this.physics.add.sprite(100, 450, 'player');
    global.cursors = this.input.keyboard.createCursorKeys();
  }
}

export default Create;