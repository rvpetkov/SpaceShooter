import { BaseButton } from "../graphics/ui/BaseButton";
import { MenuScene } from "./MenuScene";

class IngameMenu extends MenuScene {
    private restartBtn: BaseButton;
    private mainMenuBtn: BaseButton;

    constructor() {
        super("ingameMenu");
    }

    create() {
        super.create();

        this.restartBtn = new BaseButton(this, "UI", "button", "RESTART", "button_hover");
        this.restartBtn.x = this.background.x;
        this.restartBtn.y = (this.background.y - this.background.displayHeight / 2) + this.background.displayHeight * 0.54;
        this.restartBtn.setOnClick(this.onRestart, this);
        this.restartBtn.setScale(0.7);
        this.add.existing(this.restartBtn);

        this.mainMenuBtn = new BaseButton(this, "UI", "button", "MAIN MENU", "button_hover");
        this.mainMenuBtn.x = this.background.x;
        this.mainMenuBtn.y = (this.background.y - this.background.displayHeight / 2) + this.background.displayHeight * 0.69;
        this.mainMenuBtn.setOnClick(this.onMainMenu, this);
        this.mainMenuBtn.setScale(0.7);
        this.add.existing(this.mainMenuBtn);

        super.setOnCloseBtnCallback(this.onClose, this);

        let esc: Phaser.Input.Keyboard.Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        esc.on("down", this.onClose, this);
    }

    private onRestart(): void {
        this.scene.stop("main");
        this.scene.stop("ingameMenu");
        this.scene.start("main");
    }

    private onMainMenu(): void {
        this.scene.stop("main");
        this.scene.stop("ingameMenu");
        this.scene.start("mainMenu");
    }

    private onClose(): void {
        this.scene.stop();
        this.scene.resume("main");
    }
}

export { IngameMenu }
