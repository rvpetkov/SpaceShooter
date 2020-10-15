import { BaseButton } from "../graphics/ui/BaseButton";

class MenuScene extends Phaser.Scene {
    protected defaultStyle: any = {
        fontSize: '40px',
        fontFamily: 'Arial',
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
    }

    protected background: Phaser.GameObjects.Sprite;
    private title: Phaser.GameObjects.Text;

    private closeBtn: BaseButton;

    constructor(key: string) {
        super(key);
    }

    create() {
        this.background = this.add.sprite(0, 0, "UI", "window");
        this.background.setScale(0.4, 0.6);
        this.background.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        this.background.setAlpha(0.95);

        this.title = this.add.text(0, 0, "OPTIONS", this.defaultStyle);
        this.title.x = this.background.x;
        this.title.y = (this.background.y - this.background.displayHeight / 2) + this.background.displayHeight * 0.1;
        this.title.setOrigin(0.5);
        this.add.existing(this.title);

        this.closeBtn = new BaseButton(this, "UI", "closeBtn", "", "closeBtn_hover");
        this.closeBtn.x = this.background.x;
        this.closeBtn.y = (this.background.y + this.background.displayHeight / 2) - this.background.displayHeight * 0.15;
        this.closeBtn.setScale(0.3);
        this.add.existing(this.closeBtn);
    }

    public setOnCloseBtnCallback(callback: Function, context: any): void {
        this.closeBtn.setOnClick(callback, context);
    }
}

export { MenuScene }
