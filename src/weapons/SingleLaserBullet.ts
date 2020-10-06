import { DirectionType } from "../utils/DirectionType";
import { LaserBullet } from "./bullets/LaserBullet";
import { Weapon } from "./Weapon";

class SingleLaserWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, LaserBullet);

        this.fireRate = 200;
    }

    public shoot(direction: DirectionType, x: number, y: number): void {
            let bullet: LaserBullet = this.getFirstDead(true);
            if (bullet) {
                bullet.fire(direction, x, y);
            }
    }
}

export { SingleLaserWeapon }
