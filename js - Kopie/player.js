class Player {
	constructor() {
		this.velocity = 0;
		this.gravity = 0.5
		this.width = 152;
		this.height = 248;
		this.x = 97;
		this.y = 0 - this.height;
	}
	draw() {
		this.velocity += this.gravity
		this.y += this.velocity
		// this prevents the player from moving down throught the bottom of the screen
		if (this.y >= 510 - this.height) {
			// reset him to the starting position
			this.y = 510 - this.height
		}
		image(game.playerImage, this.x, this.y, this.width, this.height)
	}
	jump() {
		//console.log('jump')
		// this.y -= 30
		this.velocity = - 13 
	}
	avanza(){
		this.x =+ 10
	}

	retro(){
		this.x =- 10
	}




}

// class Player {
// 	constructor() {
// 		this.velocity = 0;
// 		this.gravity = 0.5
// 		this.width = 152;
// 		this.height = 248;
// 		this.x = 97;
// 		// this.y =  944 - this.height;
// 		this.y = 100
// 	}
// 	draw() {
// 		this.velocity += this.gravity
// 		// this.y += this.velocity
// 		// this prevents the player from moving down throught the bottom of the screen
// 		if (this.y >= height - this.height) {
// 			// reset him to the starting position
// 			this.y = 100 
// 		}
// 		image(game.playerImage, this.x, this.y, this.width, this.height)
// 		this.y += this.velocity
// 	}
// 	jump() {
// 		//console.log('jump')
// 	//  this.y -= 30
// 		this.velocity -= 13 
// 	}
// }