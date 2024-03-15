const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./miku spritesheet.png");
ASSET_MANAGER.queueDownload("./Stage_background_template.png");
ASSET_MANAGER.queueDownload("./transitionscreen.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const lightingCanvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	const lightingCtx = lightingCanvas.getContext("2d");
	
	PARAMS.BLOCKWIDTH = 50;
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;
	PARAMS.LIGHTMAP = false;

	gameEngine.init(ctx, lightingCtx);

	gameEngine.addEntity(new SceneManager(gameEngine));
	
	gameEngine.start();
});

function toggleLightMap() {
	PARAMS.LIGHTMAP = !PARAMS.LIGHTMAP;
}
