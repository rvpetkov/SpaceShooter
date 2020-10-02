import { EnemyCone } from "../actors/enemies/EnemyCone";
import { EnemySphere } from "../actors/enemies/EnemySphere";
import { Player } from "../actors/Player";
import { GameApp } from "../GameApp";
import { BackgroundGraphic } from "../graphics/BackgroundGraphic";
import { ForegroundGraphic } from "../graphics/ForegroundGraphics";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;
    private foreground: ForegroundGraphic;

    private player: Player;

    private enemy1: EnemyCone;
    private enemy2: EnemySphere;

    constructor() {
        super("main");
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.foreground = new ForegroundGraphic(this);
        this.add.existing(this.foreground);

        this.player = new Player(this, 60, <number>(GameApp.gameConfig.height) / 2);
        this.add.existing(this.player);

        this.enemy1 = new EnemyCone(this, 900, 100);
        this.enemy1.startAttacking();
        this.add.existing(this.enemy1);

        this.enemy2 = new EnemySphere(this, 900, 200);
        this.enemy2.startAttacking();
        this.add.existing(this.enemy2);
    }

    update(time: number, delta: number) {
        this.background.update();
        this.foreground.update();

        this.player.update(time, delta);
    }
}

export { Main }