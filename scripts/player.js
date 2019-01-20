import Entity from "./entity.js";
import SpriteSlice from "./spriteSlice.js";
import renderer from "./renderer.js"
import playerMoveImg from "./images/characterMovement.png"

export default class Player extends Entity {
    constructor() {
        super();
        
        this.moveSprites = [
            new SpriteSlice(playerMoveImg, 0, 4, 0, 16.24, 23, 5),
            new SpriteSlice(playerMoveImg, 0, 4, 31, 16.24, 23, 5),
            new SpriteSlice(playerMoveImg, 0, 4, 63, 15.9, 23, 5),
            new SpriteSlice(playerMoveImg, 0, 4, 95, 16.2, 23, 5)
        ];

        this.currSprite = this.moveSprites[0];
        
        this.direction = {
            x: 0,
            y: 0
        };

        this.speed = 5;
        
        renderer.addRenderable(this);
    }

    update() {
        this.position.x += this.direction.x * this.speed;
        this.position.y += this.direction.y * this.speed;
    }

    moveUp() {
        this.direction.y = -1;
        this.currSprite = this.moveSprites[2];
        this.currSprite.resumeAnim();
    }

    moveDown() {
        this.direction.y = 1
        this.currSprite = this.moveSprites[0];
        this.currSprite.resumeAnim();
    }

    moveLeft() {
        this.direction.x = -1
        this.currSprite = this.moveSprites[3];
        this.currSprite.resumeAnim();
    }

    moveRight() {
        this.direction.x = 1
        this.currSprite = this.moveSprites[1];
        this.currSprite.resumeAnim();
    }

    moveStop() {
        this.direction.x = 0;
        this.direction.y = 0;
        this.currSprite.stopAnim();
    }

    draw(ctx, offset) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        
        this.currSprite.draw(ctx, offset);

        ctx.restore();
    }
}