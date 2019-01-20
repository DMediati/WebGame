export default class Controller {
    constructor(player) {
        this.pressed = {};
        document.onkeydown = (evt)=> {
            this.pressed[evt.code] = true;
        }

        document.onkeyup = (evt)=> {
            delete this.pressed[evt.code];
        }

        this.player = player;
    }

    isKeyDown(code) {
        return this.pressed[code];
    }

    inputUpdate() {
        this.player.moveStop();

        if(this.isKeyDown("KeyW")) { 
            this.player.moveUp();
        }

        if(this.isKeyDown("KeyS")) { 
            this.player.moveDown();
        }

        if(this.isKeyDown("KeyA")) { 
            this.player.moveLeft();
        }

        if(this.isKeyDown("KeyD")) { 
            this.player.moveRight();
        }
    }
}