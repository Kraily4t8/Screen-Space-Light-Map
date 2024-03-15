class Ground {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w});

        this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH, "ground");
        // this.leftBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
        // this.rightBB = new BoundingBox(this.x + this.w - PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
    };

    update(){

    };

    draw(ctx) {
        ctx.strokeStyle = "black";
        // ctx.strokeRect(this.x, this.y, this.w, PARAMS.BLOCKWIDTH);
        // this.BB.draw(ctx);
    };
}

class background {
    constructor(game, spritesheet) {
        Object.assign(this, { game, spritesheet});

        // this.BB = new BoundingBox(this.x, this.y, this.w, PARAMS.BLOCKWIDTH, "ground");
        // this.leftBB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
        // this.rightBB = new BoundingBox(this.x + this.w - PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH * 2)
    };

    update(){

    };

    draw(ctx) {
        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        ctx.drawImage(this.spritesheet, 0, 0);
    };
}