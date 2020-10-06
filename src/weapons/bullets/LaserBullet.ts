import { DirectionType } from "../../utils/DirectionType";
import { Bullet } from "./Bullet";

class LaserBullet extends Bullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "spaceShooter", "bullet_red");

        this.speed = 600;
    }
    
    public fire(direction: DirectionType, startX: number, startY: number, velocityY?: number): void {
        this.setSize(40, 20);

        super.fire(direction, startX, startY, velocityY);
    }
}

export { LaserBullet }