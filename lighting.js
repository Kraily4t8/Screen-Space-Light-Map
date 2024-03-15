class lighting {
    constructor(game) {
        this.game = game
        this.ctx2 = document.getElementById('lighting').getContext('2d')
    }

    update() {}

    draw(ctx) {
        if(PARAMS.LIGHTMAP) {
            let ctx2 = this.ctx2;
            ctx2.save();
            ctx2.clearRect(0,0,PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);
        
            let that = this.game;
            this.game.entities.forEach(function(entity) {
                if(entity && entity.light){
                    entity.drawLight(ctx2)
                }
            })
            ctx2.fillStyle = 'rgba(0,0,0,' + (0.8) + ')';
            ctx2.globalCompositeOperation = 'xor';
            ctx2.fillRect(0,0,PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);
            ctx2.restore();
        } else {
            this.clear();
        }
    }

    clear() {
        this.ctx2.clearRect(0,0,PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);
    }

}