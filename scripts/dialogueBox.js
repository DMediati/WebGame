import Entity from "./entity.js";
import renderer from "./renderer.js"
import {roundRect} from "./helpers.js"

export default class DialogueBox extends Entity {
    constructor() {
        super();
        renderer.addRenderable(this);
        this.borderThickness = 5;
        this.borderColor = 'white';
        this.fillColor = 'black';
    }

    setDialogueText(dialogueText) {
        this.dialogueText = dialogueText;
    }

    getWidth() {
        return this.width-2*this.borderThickness;
    }

    getHeight() {
        return this.height-2*this.borderThickness;
    }

    draw(ctx, offset) {
        var topPosition = false;
        //TODO: Put this in an event listener to listen to renderer resize broadcast
        this.position.x = renderer.getCanvasWidth() * 0.1;
        this.position.y = renderer.getCanvasHeight() * (topPosition ? 0.05 :0.7);
        this.width = renderer.getCanvasWidth() * 0.8;
        this.height = renderer.getCanvasHeight() * 0.25;

        roundRect(this.position.x, this.position.y, this.width, this.height, 20, this.borderColor, ctx);

        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        roundRect(this.borderThickness, this.borderThickness, this.width-2*this.borderThickness, this.height-2*this.borderThickness, 20, this.fillColor, ctx);
        this.children.forEach(child => {
            if(typeof child['draw'] === 'function') {
                child.draw(ctx, offset);
            }
        });
        ctx.restore();
    }
}