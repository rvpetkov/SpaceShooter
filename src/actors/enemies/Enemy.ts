import { DirectionType } from "../../utils/DirectionType";
import { BaseActor } from "../BaseActor";

abstract class Enemy extends BaseActor {
    protected attackTimer: Phaser.Time.TimerEvent;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string) {
        super(scene, x, y, texture, frame);
    }

    public abstract startAttacking(): void;
    public abstract stopAttacking(): void;

    public fire(): void {
        super.shootWeapon(DirectionType.LEFT, this.x - 30, this.y);
    }

    public destroy(): void {
        if (this.attackTimer != null) {
            this.attackTimer.remove(false);
            this.attackTimer.destroy();
            this.attackTimer = null;
        }

        super.destroy();
    }
}

export { Enemy }
