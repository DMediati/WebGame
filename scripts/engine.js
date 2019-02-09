import Player from "./player";
import Controller from "./controller";
import DialogueBox from "./dialogueBox";
import Renderer from "./renderer";

export default class Engine {
    constructor() {
        window.onresize = function(){Renderer.resizeCanvas()};
        this.player = new Player();
        this.controller = new Controller(this.player);
        this.dialogueBox = new DialogueBox();
    }

    //Elapsed is the actual time since last update
    preLogicUpdate(elapsed) {
        
    }

    //Step is the set time to update logic
    logicUpdate(step) {
        this.controller.inputUpdate();
        this.player.update();
    }

    //Offset is the lag compensation after updating
    postLogicUpdate(offset) {

    }
}
