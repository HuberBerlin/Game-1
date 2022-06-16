class Obstacle {
	constructor(image) {
		this.image = image
		this.x = width - 50
		this.y = Math.random() * height / 0.5
		this.width = 59
		this.height = 78
	}

	collision(playerInfo) {
		// console.log('colission', playerInfo)

		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2
		const obstacleY = this.y + this.height / 2
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2

		if (dist(obstacleX, obstacleY, playerX, playerY) > 95 ) {
			
			return false
			
		} else {
			// we have a colission
			// console.log('colission') 
			score = score+100; 
			return true
		}
	}

	draw() {
		this.x-=7
		image(this.image, this.x, this.y, this.width, this.height)
	}
} // End CupCake --------------



// Pollo INICIO ------------

class Obstacle2 {
	constructor(imagen) {
		this.imagen = imagen
		this.x = width - 50
		this.y = Math.random() * height / 0.5
		this.width = 59
		this.height = 78
	}

	collision(playerInfo) {
		// console.log('colission', playerInfo)

		// get the middle of the obstacle
		const obstacle2X = this.x + this.width / 2
		const obstacle2Y = this.y + this.height / 2
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2

		if (dist(obstacle2X, obstacle2Y, playerX, playerY) > 95 ) {
			
			return false
			
		} else {
			// we have a colission
			// console.log('colission') 
			score = score-100; 
			return true
		}
	}

	draw() {
		this.x-=7
		image(this.image, this.x, this.y, this.width, this.height)
	}
}



// Pollo END ------------

