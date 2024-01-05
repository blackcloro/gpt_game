class Preload extends Phaser.Scene {
  constructor() {
    super('preload');
  }

  preload() {
    this.load.baseURL = './assets/';
    // INPUT_REQUIRED replace 'https://placehold.co/100x200' and 'https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png' with the actual paths to your assets.
    this.load.image('player', 'https://placehold.co/100x200');
    this.load.image('background', 'https://htmlcolorcodes.com/assets/images/colors/light-green-color-solid-background-1920x1080.png');
  }
}

export default Preload;