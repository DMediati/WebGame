var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

export default function draw(offset) {
    console.log('In draw');
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.rect(0, 0, window.innerWidth/2, window.innerHeight);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.rect(window.innerWidth/2, 0, window.innerWidth/2, window.innerHeight);
    ctx.fillStyle = '#000099';
    ctx.fill();
    ctx.closePath()
}
