export default class Entity {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }

        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    draw(ctx, offset) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        
        this.children.forEach(child => {
            if(typeof child['draw'] === 'function') {
                child.draw(ctx, offset);
            }
        });

        ctx.restore();
    }
}