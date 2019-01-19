class Renderer {
    constructor() {
        if(!Renderer.instance) {
            document.body.style.margin = "0px";
            document.body.style.overflow = "hidden";
            this.canvas = document.createElement("canvas");
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext("2d");

            this.renderables = [];
            Renderer.instance = this;
        }

        return Renderer.instance;
    }

    addRenderable(renderable) {
        if(typeof renderable['draw'] === 'function') {
            this.renderables.push(renderable);
        }        
    }

    removeRenderable(renderable) {
        for (var i = 0; i < renderables.length - 1; i++) {
            if (this.renderables[i] === renderable) {
                this.renderables.splice(i, 1);
            }
        }
    }

    draw(offset) {
        this.ctx.fillStyle = '#303030';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.renderables.forEach(renderable => {
            renderable.draw(this.ctx, offset);
        });
    }
}

const renderer = new Renderer();
Object.freeze(renderer);
export default renderer;