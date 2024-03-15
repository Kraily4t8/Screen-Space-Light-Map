class SceneManager {
    constructor(game) {


        this.loadLevel();
    };

    loadLevel() {
        gameEngine.addEntity(new lighting(gameEngine))

        gameEngine.addEntity(new Miku(gameEngine, 100, 400, ASSET_MANAGER.getAsset("./miku spritesheet.png")));
        gameEngine.addEntity(new Ground(gameEngine, 0, 550, 1024));
        gameEngine.addEntity(new background(gameEngine, ASSET_MANAGER.getAsset("./Stage_background_template.png")))
        // gameEngine.addEntity(new background(gameEngine, ASSET_MANAGER.getAsset("./transitionscreen.png")))
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    update() {
        // PARAMS.LIGHTMAP = document.getElementById("LightMap").checked;
    };

    draw(ctx) {
        ctx.font = "40px serif";
        ctx.fillStyle = "Black";
        // ctx.fillText("Score:", 50, 50);
        ctx.font = "50px serif";
        ctx.textAlign = "center";
        // ctx.fillText((this.game.score + ""), 300, 50);
        
        // ctx.fillText("x" + (this.coins < 10 ? "0" : "") + this.coins, 6.5 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);
        // ctx.fillText("WORLD", 9 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        // ctx.fillText("TIME", 12.5 * PARAMS.BLOCKWIDTH, 1 * PARAMS.BLOCKWIDTH);
        // ctx.fillText(this.time, 13 * PARAMS.BLOCKWIDTH, 1.5 * PARAMS.BLOCKWIDTH);

        if (this.title && !this.credits) { // Title Screen
            
        } else if (this.title && this.credits) { // Credits Screen 
            
        }

        if (PARAMS.DEBUG) {
            
        }
    };
};