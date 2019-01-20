export default class SpriteSlice {
    constructor(image, startFrame = 0, totalFrames = 0, sy = 0, framesx = 0, framesy = 0, speed = 1) {
        this.image = new Image();
        this.image.src = image;

        this.startFrame = startFrame;
        this.frame = startFrame;
        this.totalFrames = totalFrames;

        this.framesx = framesx;
        this.framesy = framesy;

        this.speed = speed;
        this.nextAnimTime = new Date().getTime();

        this.stop = false;
        this.sy = sy;
    }

    draw(ctx, offset) {
        let currTime = new Date().getTime();
        if(currTime >= this.nextAnimTime && !this.stop) {
            this.frame++;
            this.nextAnimTime = currTime + 1000 / this.speed;
        }

        if(this.frame > this.startFrame + this.frameCount || this.stop) {
            this.frame = this.startFrame;
        }

        let sx = (this.frame % this.totalFrames) * this.framesx;
        ctx.drawImage(this.image, sx, this.sy, this.framesx, this.framesy, 0, 0, this.framesx*10, this.framesy*10);
    }

    stopAnim() {
        this.stop = true;
    }

    resumeAnim() {
        this.stop = false;
    }

    isOnScreen() {

    }
}