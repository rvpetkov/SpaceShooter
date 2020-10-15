import { BaseButton } from "../graphics/ui/BaseButton";

class MainMenu extends Phaser.Scene {
    private background: Phaser.GameObjects.Sprite;

    private startButton: BaseButton;
    private optionsButton: BaseButton;
    private exitButton: BaseButton;

    constructor() {
        super("mainMenu");
    }

    create() {
        this.background = new Phaser.GameObjects.Sprite(this, 0, 0, "background");
        this.background.setPosition(this.cameras.main.width / 2, this.cameras.main.height / 2);
        this.add.existing(this.background);

        this.startButton = new BaseButton(this, "UI", "button", "START", "button_hover");
        this.startButton.setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.3);
        this.startButton.setOnClick(this.onStart, this);
        this.add.existing(this.startButton);

        this.optionsButton = new BaseButton(this, "UI", "button", "OPTIONS", "button_hover");
        this.optionsButton.setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.5);
        this.optionsButton.setOnClick(this.onOptions, this);
        this.add.existing(this.optionsButton);

        this.exitButton = new BaseButton(this, "UI", "button", "EXIT", "button_hover");
        this.exitButton.setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.7);
        this.exitButton.setOnClick(this.onExit, this);
        this.add.existing(this.exitButton);
    }

    private onStart(): void {
        this.scene.start("main");
    }

    private onOptions(): void {

    }

    private onExit(): void {
        this.scene.stop();
    }
}

export { MainMenu }
