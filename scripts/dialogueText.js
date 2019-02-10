import Entity from "./entity.js";
import {wrapText} from "./helpers.js";

export default class DialogueText extends Entity {
    constructor(text, dialogueBox) {
        super();
        this.fullText = text;
        this.numCharacters = 1;
        this.speed = 25;
        this.letterColor = 'white';
        this.fontSize = 30;
        this.font = `${this.fontSize}px Arial`;
        this.nextLetterTime = new Date().getTime();
        this.dialogueBox = dialogueBox;
        this.position.x = this.fontSize + 10;
        this.position.y = this.fontSize + 20;
        
        this.dialogueBox.addChild(this);
    }

    setDialogueText(dialogueText) {
        this.dialogueText = dialogueText;
    }
    
    draw(ctx, offset) {
        let currTime = new Date().getTime();
        if(currTime >= this.nextLetterTime) {
            if(this.numCharacters < this.fullText.length) {
                ++this.numCharacters;
                while(this.numCharacters < this.fullText.length && this.fullText[this.numCharacters-1].trim() === '') {
                    ++this.numCharacters;
                }
            }            
            this.nextLetterTime = currTime + 1000 / this.speed;
        }

        ctx.font = this.font;
        ctx.fillStyle = this.letterColor;
        //TODO: Incorporate wrap text here to avoid starting a word on the wrong line
        wrapText(ctx, this.fullText.substr(0, this.numCharacters), this.position.x, this.position.y, this.dialogueBox.getWidth() - this.position.x, this.fontSize+2); 
    }
}