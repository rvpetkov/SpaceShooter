import { DirectionType } from "../utils/DirectionType";
import { PhotonBullet } from "./bullets/PhotonBullet";
import { Weapon } from "./Weapon";

class SinglePhotonWeapon extends Weapon {
    constructor(scene: Phaser.Scene) {
        super(scene, PhotonBullet);

        this.fireRate = 200;
    }

    public shoot(direction: DirectionType, x: number, y: number): void {        
        let bullet: PhotonBullet = this.getFirstDead(true);
        if (bullet) {
            bullet.fire(direction, x, y);
        }
    }
}

export { SinglePhotonWeapon }
