import Engine from './engine.js';
import renderer from './renderer.js';

const MS_PER_UPDATE = 10;
var prev = null;
var lag = 0;
var engine = new Engine();

function update(current) {
    if(!prev) {
        prev = current;
    }
    var elapsed = current - prev;
    prev = current;
    lag += elapsed;

    engine.preLogicUpdate(elapsed);
    while(lag >= MS_PER_UPDATE) {
        engine.logicUpdate(MS_PER_UPDATE);
        lag -= MS_PER_UPDATE;
    }
    engine.postLogicUpdate(lag/MS_PER_UPDATE);
    renderer.draw(lag/MS_PER_UPDATE);
    window.requestAnimationFrame(update) 
}

window.requestAnimationFrame(update) 
