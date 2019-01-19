import Entity from "./entity";

export default class SpriteSlice extends Entity {
    constructor(image, startFrame = 0, totalFrames = 0, framesx = 0, framesy = 0, speed = 1) {
        this.image = new Image();
        this.image.src = image;

        this.frame = startFrame;
        this.totalFrames = totalFrames;

        this.framesx = framesx;
        this.framesy = framesy;

        this.speed = speed;
    }

    draw(ctx, offset) {
        let curr = new Date().getTime();

        if(this.frame > this.startFrame + this.frameCount) {
            this.frame = this.startFrame;
        }

        let sx = (this.frame % this.totalFrames) * this.framesx;
        let sy = (this.frame % this.totalFrames) * this.framesy;
        ctx.drawImage(this.image, sx, sy, framesx, framesy, 0, 0, framesx, framesy);
    }

    isOnScreen() {

    }
}