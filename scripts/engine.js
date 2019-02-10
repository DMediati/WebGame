import Player from "./player";
import Controller from "./controller";
import DialogueBox from "./dialogueBox";
import Renderer from "./renderer";
import DialogueText from "./dialogueText";

export default class Engine {
    constructor() {
        window.onresize = function(){Renderer.resizeCanvas()};
        this.player = new Player();
        this.controller = new Controller(this.player);
        this.dialogueBox = new DialogueBox();
        this.dtexttest = new DialogueText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", this.dialogueBox);
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
