var pressed={};
document.onkeydown=function(e){
     e = e || window.event;
     pressed[e.keyCode] = true;
}

document.onkeyup=function(e){
     e = e || window.event;
     delete pressed[e.keyCode];
}

export default function processInput() {
    if(pressed[87]) {
        console.log("W");
    }

    if(pressed[65]) {
        console.log("A");
    }

    if(pressed[83]) {
        console.log("S");
    }

    if(pressed[68]) {
        console.log("D");
    }
}