console.log('Start');
import processInput from './controller.js';
import gameStep from './updater.js';
import draw from './renderer.js';

const MS_PER_UPDATE = 10;
var prev = null;
var lag = 0;

function update(current) {
    if(!prev) {
        prev = current;
    }
    var elapsed = current - prev;
    prev = current;
    lag += elapsed;

    processInput();
    console.log('After input');
    while(lag >= MS_PER_UPDATE) {
        gameStep(MS_PER_UPDATE);
        lag -= MS_PER_UPDATE;
    }
    console.log('After loop');
    draw(lag/MS_PER_UPDATE);
}

console.log('Requesting');
window.requestAnimationFrame(update) 
