import { Weapon } from "../weapons/Weapon";
import { DirectionType } from "../utils/DirectionType";

abstract class BaseActor extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;
    protected movementSpeed: number;

    protected weapon: Weapon;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string, hp: number = 1, speed: number = 100) {
        super(scene, x, y, texture, frame);

        this.hitPoints = hp;
        this.movementSpeed = speed;

        this.scene.physics.add.existing(this);
    }

    public get isAlive(): boolean {
        return this.hitPoints > 0;
    }

    public get hp(): number {
        return this.hitPoints;
    }

    public setWeapon(w: Weapon): void {
        this.weapon = w;
    }

    public getWeapon(): Weapon {
        return this.weapon;
    }

    public shootWeapon(direction: DirectionType, x: number = this.x, y: number = this.y): void {
        if (this.weapon) {
            this.weapon.shoot(direction, x, y);
        }
    }

    public destroy(): void {
        if (this.weapon != null) {
            this.weapon.destroy(true);
            this.weapon = null;
        }

        super.destroy(true);
    }
}

export { BaseActor }
