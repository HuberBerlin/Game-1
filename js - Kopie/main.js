const game = new Game()
var fuente;
// all these functions will be called by the P5 library
function preload() {

	game.preload()
	fuente = loadFont('../assets/PressStart2P-Regular.ttf');
	
	
}
var score= 00;
var song;
var button;

function setup() {
	// createCanvas(704, 513)
	   createCanvas(700 , 530)
	 

}



function draw() {
	game.draw()
	fill(255);
	textSize(15);
	 textFont(fuente);
	text('Score:',530,520);
	text(score,  623,520,)
} 
 
function keyPressed() {
	if (keyCode === 32 || keyCode === 38) {
		game.player.jump()
	}
	 else if (keyCode === 39){
		game.player.avanza()
	}
	else if (keyCode === 37){
		game.player.retro ()
	}
	
	
}
