import 'phaser';
import { Boot } from './scene/Boot';
import { Preload } from './scene/Preload';
import { SplashScene } from './scene/SplashScene';
import { Main } from './scene/Main';
import { MainMenu } from './scene/MainMenu';
import { Options } from './scene/Options';
import { IngameMenu } from './scene/IngameMenu';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = config;

        if (GameApp.gameConfig == null) {
            GameApp.gameConfig = {
                type: Phaser.AUTO,
                parent: "content",
                backgroundColor: '#385e78',
                width: 1024,
                height: 512,
                physics: {
                    default: "arcade",
                    arcade: {
                        debug: true
                    }
                },
                scene: [Boot, Preload, SplashScene, MainMenu, Options, Main, IngameMenu]
            };
        }

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
