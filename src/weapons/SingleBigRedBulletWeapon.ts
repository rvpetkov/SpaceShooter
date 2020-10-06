import { Weapon } from "./Weapon";
import { BigRedBullet } from "./bullets/BigRedBullet";
import { DirectionType } from "../utils/DirectionType";

class SingleBigRedBulletWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, BigRedBullet);

        this.fireRate = 200;
    }

    public shoot(direction: DirectionType, x: number, y: number): void {
        let bullet: BigRedBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(direction, x, y);
        }
    }
}

export { SingleBigRedBulletWeapon }
