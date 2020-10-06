import { Bullet } from "./Bullet";

class BigRedBullet extends Bullet {
    constructor(scene: Phaser.Scene) {
        super(scene, "spaceShooter", "bullet_anim_red");

        this.speed = 400;
        
        if (this.scene.textures.exists("red_bullet_anim") == false) {
            this.scene.textures.addSpriteSheetFromAtlas("red_bullet_anim", {
                frameHeight: 32,
                frameWidth: 32,
                atlas: "spaceShooter",
                frame: "bullet_anim_red"
            });
            
            this.scene.anims.create({
                key: "big_red_bullet",
                frames: this.scene.anims.generateFrameNames("red_bullet_anim"),
                frameRate: 16,
                repeat: -1
            });
        }
        
        this.anims.play("big_red_bullet");
    }
}

export { BigRedBullet }