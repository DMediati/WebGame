document.body.style.margin = "0px";
document.body.style.overflow = "hidden";
let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");

export default function draw(offset) {
    ctx.beginPath();
    ctx.rect(0, 0, window.innerWidth/2, window.innerHeight);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(window.innerWidth/2, 0, window.innerWidth/2, window.innerHeight);
    ctx.fillStyle = '#000099';
    ctx.fill();
    ctx.closePath();
}
