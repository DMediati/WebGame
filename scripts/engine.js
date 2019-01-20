import Player from "./player";
import Controller from "./controller";

export default class Engine {
    constructor() {
        this.player = new Player();
        this.controller = new Controller(this.player);
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
