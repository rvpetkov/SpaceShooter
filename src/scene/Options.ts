import { MenuScene } from "./MenuScene";

class Options extends MenuScene {

    constructor() {
        super("options");
    }

    create() {
        super.create();

        this.setOnCloseBtnCallback(this.onClose, this);
    }

    private onClose(): void {
        this.scene.stop("options");
        this.scene.resume("mainMenu");
    }
}

export { Options }
