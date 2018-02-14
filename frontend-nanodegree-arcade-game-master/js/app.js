// Enemies our player must avoid
var maxSpeed = 500;
var lowSpeed = 100;
var enemy = function(x, y) {
	this.x = x;
	this.y = y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
var Player = function(x, y) {
	this.x = x;
	this.y = y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
}

var allEnemies = [
	new enemy(0, 50),
	new enemy(0, 140),
	new enemy(0, 225)
];

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
enemy.prototype.speed = function () {
	//console.log(Math.random() * (maxSpeed-lowSpeed+1) + lowSpeed);
		return Math.floor(Math.random() * (maxSpeed-lowSpeed+1) + lowSpeed)
}
enemy.prototype.update = function(dt) {
		//this.speed();
		//while(this.x < 500){
		 this.x = this.speed() * dt;
	 //}
		//this.x = this.speed*dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
Player.prototype.update = function() {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};



// Draw the enemy on the screen, required method for game
enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.render = function() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.handleInput = function (keys) {
	//console.log(this.x);
		if(keys == 'left' && this.x > 0){
				console.log(this.x);
				this.x = this.x - 100;
		}
		else if(keys == 'up' && this.y > 0){
			console.log(this.y);
				this.y = this.y - 85;
		}
		else if (keys == 'right' && this.x < 400) {
			console.log("right");
				this.x = this.x + 100;
		}
		else if (keys == 'down' && this.y < 400) {
			console.log("down");
				this.y = this.y + 85;
		}
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var player=new Player(200,400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
