import { DirectionType } from "../../utils/DirectionType";
import { Bullet } from "./Bullet";

class PhotonBullet extends Bullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "spaceShooter", "bullet_blue");

        this.speed = 600;
    }

    public fire(direction: DirectionType, startX: number, startY: number): void {
        this.setSize(60, 30);

        super.fire(direction, startX, startY);
    }
}

export { PhotonBullet }