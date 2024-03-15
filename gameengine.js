// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;
        this.lightingCtx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        this.keys = {};

        this.left = false;      // A
        this.right = false;     // D
        this.up = false;        // W
        this.down = false;      // S
        this.A = false;         // Q
        this.B = false;         // E
        this.Z = false;         // Z for emoting
        
        // Options and the Details
        this.options = options || {
            debugging: false,
        };
    };

    init(ctx, lightingCtx) {
        this.ctx = ctx;
        this.lightingCtx = lightingCtx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        this.keyboardActive = false;
        const that = this;
        
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });

        function mouseListener (e) {
            that.mouse = getXandY(e);
            
        }

        function mouseClickListener (e) {
            that.click = getXandY(e);
            // if (PARAMS.DEBUG) console.log(that.click);
        }

        function mouseLeftClickListener (e) {
            switch (e.button) {
                case 0:
                    that.leftclick = true;
                    // if (PARAMS.DEBUG) console.log("leftclick is clicked");
                    break;
                default:
                    that.leftclick = false;
            }
        }

        function wheelListener (e) {
            e.preventDefault();                             // Prevent Scrolling
            that.wheel = e.deltaY;
        }

        function keydownListener (e) {
            that.keyboardActive = true;
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.left = true;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = true;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.up = true;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = true;
                    break;
                case "Period":
                case "KeyE":
                    that.B = true;
                    break;
                case "Comma":
                case "KeyQ":
                    that.A = true;
                    break;
                case "KeyZ":
                    that.Z = true;
                    break;
            }
        }
        function keyUpListener (e) {
            that.keyboardActive = false;
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    that.left = false;
                    break;
                case "ArrowRight":
                case "KeyD":
                    that.right = false;
                    break;
                case "ArrowUp":
                case "KeyW":
                    that.up = false;
                    break;
                case "ArrowDown":
                case "KeyS":
                    that.down = false;
                    break;
                case "Period":
                case "KeyE":
                    that.B = false;
                    break;
                case "Comma":
                case "KeyQ":
                    that.A = false;
                    break;
                case "KeyZ":
                    that.Z = false;
                    break;
            }
        }

        // keeps track of keys?
        // this.ctx.canvas.addEventListener("keydown", event => this.keys[event.key] = true);
        // this.ctx.canvas.addEventListener("keyup", event => this.keys[event.key] = false);
        that.mousemove = mouseListener;
        that.click = mouseClickListener;
        // that.left = mouseLeftClickListener;
        that.wheelscroll = wheelListener;
        that.keydown = keydownListener;
        that.keyup = keyUpListener;

        this.ctx.canvas.addEventListener("mousemove", that.mousemove, false);

        this.ctx.canvas.addEventListener("click", that.click, false);

        this.ctx.canvas.addEventListener("click", mouseLeftClickListener, false);

        this.ctx.canvas.addEventListener("wheel", that.wheelscroll, false);

        this.ctx.canvas.addEventListener("keydown", that.keydown, false);

        this.ctx.canvas.addEventListener("keyup", that.keyup, false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};

// KV Le was here :)