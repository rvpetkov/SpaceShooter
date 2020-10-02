abstract class BaseActor extends Phaser.Physics.Arcade.Sprite {
    protected hitPoints: number;
    protected movementSpeed: number;

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
}

export { BaseActor }
