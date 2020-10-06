import { LaserBullet } from "./bullets/LaserBullet";
import { Weapon } from "./Weapon";
import { DirectionType } from "../utils/DirectionType";

class TripleLaserWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, LaserBullet);

        this.fireRate = 200;
    }

    public shoot(direction: DirectionType, x: number, y: number): void {
        let bullet1: LaserBullet = this.getFirstDead(true);
        if (bullet1) {
            bullet1.fire(direction, x - 15, y - 20, -20);
        }

        let bullet2: LaserBullet = this.getFirstDead(true);
        if (bullet2) {
            bullet2.setScale(1.5);
            bullet2.fire(direction, x, y);
        }

        let bullet3: LaserBullet = this.getFirstDead(true);
        if (bullet3) {
            bullet3.fire(direction, x - 15, y + 20, 20);
        }
    }
}

export { TripleLaserWeapon }
