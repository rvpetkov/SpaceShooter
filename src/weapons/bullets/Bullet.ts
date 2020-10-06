import { DirectionType } from "../../utils/DirectionType";

abstract class Bullet extends Phaser.Physics.Arcade.Sprite {
    protected speed: number;

    constructor(scene: Phaser.Scene, texture: string, frame: string) {
        super(scene, 0, 0, texture, frame);

        this.speed = 0;
    }

    public fire(direction: DirectionType, startX: number, startY: number): void {
        if (direction == DirectionType.LEFT) {
            this.angle = 180;
        }

        this.body.reset(startX, startY);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocity(this.speed * direction, 0);
    }
}

export { Bullet }
