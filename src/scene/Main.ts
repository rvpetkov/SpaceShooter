import { BackgroundGraphic } from "../graphics/BackgroundGraphic";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;

    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);
    }

    update() {
        this.background.update();
    }
}

export { Main }