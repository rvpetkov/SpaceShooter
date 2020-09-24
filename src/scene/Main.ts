import { BackgroundGraphic } from "../graphics/BackgroundGraphic";
import { ForegroundGraphic } from "../graphics/ForegroundGraphics";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;
    private foreground: ForegroundGraphic;

    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.foreground = new ForegroundGraphic(this);
        this.add.existing(this.foreground);
    }

    update() {
        this.background.update();
        this.foreground.update();
    }
}

export { Main }