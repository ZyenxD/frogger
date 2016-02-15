// Enemies our player must avoid
var gethitted = [250,200,150,100,50];
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 10;
    this.y = 30;
    this.speed = Math.random()*2;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.reset = function(){
    this.x = 0;
    this.speed = Math.random() *3;
    while(this.y<50)
        this.y = gethitted[Math.floor(Math.random()*4)];
    //console.log("reset enemys");
};
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (100*dt*this.speed);
    if(this.x>500){
        this.reset();
    }
    //console.log("enemy x= "+this.x,"enemy y="+this.y);
    if(Math.floor(this.x)+50 >= player.x && Math.floor(this.x)-50 <= player.x ){
        if(player.y === gethitted[0] && this.y === gethitted[0] || player.y === gethitted[0]+30 && this.y === gethitted[0] || player.y === gethitted[0]-30 && this.y === gethitted[0]){
            console.log(" 1 hitted! between "+gethitted[0]);
            console.log('player x = ', player.x, 'player y = ', player.y);
            console.log("enemy x = "+this.x,"enemy y = "+this.y);
            player.reset();
        }else if(player.y === gethitted[1] && this.y === gethitted[1] || player.y === gethitted[1]+30 && this.y === gethitted[1] || player.y === gethitted[1]-30 && this.y === gethitted[1]){
             console.log("2 hitted! between "+gethitted[1]);
            console.log('player x = ', player.x, 'player y = ', player.y);
            console.log("enemy x = "+this.x,"enemy y = "+this.y);
            player.reset();
        }else if(player.y === gethitted[2] && this.y === gethitted[2] || player.y === gethitted[2]+30 && this.y === gethitted[2] || player.y === gethitted[2]-30 && this.y === gethitted[2]){
             console.log("3 hitted! between "+gethitted[2]);
            console.log('player x = ', player.x, 'player y = ', player.y);
            console.log("enemy x = "+this.x,"enemy y = "+this.y);
            player.reset();
        }else if(player.y === gethitted[3] && this.y === gethitted[3] || player.y === gethitted[3]+30 && this.y === gethitted[30] || player.y === gethitted[3]-30 && this.y === gethitted[3]){
            console.log(" 4 hitted! between "+gethitted[3]);
            console.log('player x = ', player.x, 'player y = ', player.y);
            console.log("enemy x = "+this.x,"enemy y = "+this.y);
            player.reset();
        }else if(player.y === gethitted[4] && this.y === gethitted[4] || player.y === gethitted[4]+30 && this.y === gethitted[4] || player.y === gethitted[4]-30 && this.y === gethitted[4]){
            console.log(" 5 hitted! between "+gethitted[4]);
            console.log('player x = ', player.x, 'player y = ', player.y);
            console.log("enemy x = "+this.x,"enemy y = "+this.y);
            player.reset();
        }

    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 100;
    this.y = 400;
}
//player.prototype = Object.create(Enemy.prototype);
player.prototype.reset = function(){
    this.x = 100;
    this.y = 400;
}
player.prototype.update = function(dt){
    if(player.y===0){
        player.reset();
    }
    console.log("movement: ",'player x = ', this.x, 'player y = ', this.y);
}
player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}
player.prototype.handleInput = function(direction){
    switch(direction){
        case'up':
        this.y -= 50;
        break;
        case'down':
        if(this.y===400){
            //don't do nothig
        }else{
            this.y += 50;
        }
        break;
        case'left':
        if(this.x===0){
            //nothing either
        }else{
            this.x -= 100;
        }
        break;
        case'right':
        if(this.x===400){
            //DON'T MOVE >:|
        }else{
            this.x += 100;
        }
        break;
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for(i = 1;i<=4;i++){
 allEnemies[i]= new Enemy();
}
var player = new player();



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
