import { DirectionType } from "../utils/DirectionType";
import { LaserBullet } from "./bullets/LaserBullet";
import { Weapon } from "./Weapon";

class SingleLaserWeapon extends Weapon {
    private sound: Phaser.Sound.BaseSound;

    constructor(scene: Phaser.Scene) {
        super(scene, LaserBullet);

        this.fireRate = 200;

        this.sound = this.scene.sound.add("laser1");
    }

    public shoot(direction: DirectionType, x: number, y: number): void {
            let bullet: LaserBullet = this.getFirstDead(true);
            if (bullet) {
                this.sound.play();
                bullet.fire(direction, x, y);
            }
    }
}

export { SingleLaserWeapon }
