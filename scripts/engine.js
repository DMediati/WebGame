import Player from "./player";
import Controller from "./controller";

export default class Engine {
    constructor() {
        this.player = new Player();
        this.controller = new Controller(this.player);
    }

    //Elapsed is the actual time since last update
    preLogicUpdate(elapsed) {
        this.controller.inputUpdate();
    }

    //Step is the set time to update logic
    logicUpdate(step) {

    }

    //Offset is the lag compensation after updating
    postLogicUpdate(offset) {

    }
}
