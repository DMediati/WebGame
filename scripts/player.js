import Entity from "./entity.js";
//import playerImg from "./images/character.png"

export default class Player extends Entity {
    constructor() {
        super();
        this.spriteSlices = [];
        
        this.direction = {
            x: 0,
            y: 0
        };

        this.speed = 1;
    }

    moveUp() {
        this.direction.y = -1;
    }
    
    moveLeft() {
        this.direction.x = -1
    }

    moveDown() {
        this.direction.y = 1
    }

    moveRight() {
        this.direction.x = 1
    }

    moveStop() {
        this.direction.x = 0;
        this.direction.y = 0;
    }

}