import { Enemy } from "../actors/enemies/Enemy";
import { EnemySpawner } from "../actors/enemies/EnemySpawner";
import { Player } from "../actors/Player";
import { GameApp } from "../GameApp";
import { BackgroundGraphic } from "../graphics/BackgroundGraphic";
import { ForegroundGraphic } from "../graphics/ForegroundGraphics";
import { Bullet } from "../weapons/bullets/Bullet";

class Main extends Phaser.Scene {
    private background: BackgroundGraphic;
    private foreground: ForegroundGraphic;

    private player: Player;
    private enemySpawner: EnemySpawner;

    constructor() {
        super("main");
    }

    public get playerPosition(): Phaser.Math.Vector2 {
        return new Phaser.Math.Vector2(this.player.x, this.player.y);
    }

    create() {
        this.background = new BackgroundGraphic(this);
        this.add.existing(this.background);

        this.foreground = new ForegroundGraphic(this);
        this.add.existing(this.foreground);

        this.player = new Player(this, 60, <number>(GameApp.gameConfig.height) / 2);
        this.add.existing(this.player);

        this.enemySpawner = new EnemySpawner(this);

        this.initCollisions();
    }

    private initCollisions(): void {
        this.physics.add.collider(this.player, this.enemySpawner.allEnemies, this.onPlayerCollision, null, this);
        this.physics.add.collider(this.player.getWeapon(), this.enemySpawner.allEnemies, this.onPlayerBulletCollision, null, this);
    }

    private onPlayerCollision(player: Player, enemy: Enemy): void {
        player.destroy();
        enemy.destroy();
    }

    private onPlayerBulletCollision(bullet: Bullet, enemy: Enemy): void {        
        bullet.destroy(true);
        enemy.destroy();
    }

    update() {
        this.background.update();
        this.foreground.update();

        if (this.player.active) {
            this.player.update();
        }

        this.enemySpawner.update();
    }
}

export { Main }