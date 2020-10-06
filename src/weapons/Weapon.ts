import { DirectionType } from "../utils/DirectionType";

abstract class Weapon extends Phaser.Physics.Arcade.Group {
    protected fireRate: number;         // duration between shots in ms
    protected fireTimestamp: number = 0;

    constructor(scene: Phaser.Scene, classType: any) {
        super(scene.physics.world, scene, {
            key: "spaceShooterUI",
            classType: classType,
            active: false,
            visible: false
        });
    }

    public getFireRate(): number {
        return this.fireRate;
    }

    public abstract shoot(direction: DirectionType, startX: number, startY: number): void;
}

export { Weapon }
