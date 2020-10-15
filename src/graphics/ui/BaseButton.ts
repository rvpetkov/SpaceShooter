class BaseButton extends Phaser.GameObjects.Container {
    private defaultStyle: any = {
        fontSize: '40px',
        fontFamily: 'Arial',
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
    }

    private sprite: Phaser.GameObjects.Sprite;
    private text: Phaser.GameObjects.Text;

    private tween: Phaser.Tweens.Tween;

    private defaultFrame: string;
    private overFrame: string;

    constructor(scene: Phaser.Scene, key: string, frame: string, text: string = "", onOverFrame?: string) {
        super(scene);

        this.defaultFrame = frame;
        this.overFrame = onOverFrame;

        this.sprite = new Phaser.GameObjects.Sprite(this.scene, 0, 0, key, frame);
        this.sprite.setInteractive();

        if (this.overFrame) {
            this.sprite.on("pointerover", this.onOver, this);
            this.sprite.on("pointerout", this.onOut, this);
        }

        this.add(this.sprite);

        if (text != "") {
            this.text = new Phaser.GameObjects.Text(scene, 0, 0, text, this.defaultStyle);
            this.text.setOrigin(0.5);
            this.text.y = -this.text.height * 0.1;
            this.add(this.text);
        }
    }

    private onOver(): void {
        this.sprite.setFrame(this.overFrame);

        this.tween = this.scene.add.tween({
            targets: this.sprite,
            angle: { start: -1, to: 1 },
            ease: Phaser.Math.Easing.Linear.Linear,
            duration: 600,
            yoyo: true,
            loop: -1
        });
    }

    private onOut(): void {
        this.sprite.setFrame(this.defaultFrame);
        this.sprite.setAngle(0);

        this.scene.tweens.remove(this.tween);
    }

    public enable(status: boolean): void {
        if (status) {
            this.sprite.setInteractive();
            this.sprite.setTint(0xffffff);
        } else {
            this.sprite.disableInteractive();
            this.sprite.setTint(0xd8ceab);
        }
    }

    public setOnClick(callback: Function, context: any): void {
        this.sprite.on("pointerdown", callback, context);
    }

    public destroy(fromScene: boolean): void {
        if (this.sprite != null) {
            this.sprite.destroy(fromScene);
            this.sprite = null;
        }

        if (this.text != null) {
            this.text.destroy(fromScene);
            this.text = null;
        }

        super.destroy(fromScene);
    }
}

export { BaseButton }
