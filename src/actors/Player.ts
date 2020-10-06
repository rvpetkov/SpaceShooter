import { BaseActor } from "./BaseActor";
import { CustomKeyboardInput } from "../utils/CustomKeyboardInput";
import { SingleLaserWeapon } from "../weapons/SingleLaserBullet";
import { DirectionType } from "../utils/DirectionType";

class Player extends BaseActor {
    private readonly baseSpeed: number = 300;      //INFO: px per second. Explain this and the fps
    private readonly baseHP: number = 3;

    private keys: CustomKeyboardInput;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "ship_player", null);

        this.movementSpeed = this.baseSpeed;
        this.hitPoints = this.baseHP;

        this.scene.textures.addSpriteSheetFromAtlas("player", {
            frameWidth: 64,
            frameHeight: 64,
            atlas: "spaceShooter",
            frame: "ship_player"
        });

        this.scene.anims.create({
            key: "player_idle",
            frames: this.scene.anims.generateFrameNames("player"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.play("player_idle");

        this.setCollideWorldBounds(true);
        this.body.setSize(this.width, this.height / 2);         //custom collision box to make the game experience better

        this.setWeapon(new SingleLaserWeapon(this.scene));

        this.keys = new CustomKeyboardInput(this.scene);
    }

    public update(): void {
        this.handleKeyboardInput();

        this.updateWeapon();
    }

    private handleKeyboardInput(): void {
        this.setVelocity(0, 0);

        if (this.keys.up.isDown || this.keys.w.isDown) {
            this.setVelocityY(-this.movementSpeed);
        } else if (this.keys.down.isDown || this.keys.s.isDown) {
            this.setVelocityY(this.movementSpeed);
        }

        if (this.keys.left.isDown || this.keys.a.isDown) {
            this.setVelocityX(-this.movementSpeed);
        } else if (this.keys.right.isDown || this.keys.d.isDown) {
            this.setVelocityX(this.movementSpeed);
        }

        if (this.scene.input.keyboard.checkDown(this.keys.space, this.weapon.getFireRate())) {
            this.weapon.shoot(DirectionType.RIGHT, this.x + 30, this.y);
        }
    }
}

export { Player }
