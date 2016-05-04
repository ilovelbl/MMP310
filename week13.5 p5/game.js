var player;
var speed = 0.1;
var jump = 20;
var jumping = false;

var gravity = 1;

var platform;
var obstacle;

function setup() {
    createCanvas(720, 360);
    player = createSprite(400, 150, 40, 40);
    platform = createSprite(width / 2, height, width, 40);
    obstacle = createSprite(300, height, 50, 100);

}

function draw() {
    background("black");

    //    if (keyWentDown("a")) { 
    //    一次匀速
    if (keyDown("a")) {
    //    按住加速
        player.velocity.x -= speed;
    } else if (keyDown("d")) {
        player.velocity.x += speed;
    }
    
    

    player.velocity.y = gravity;
    
    if (player.collide(platform)) {
        player.velocity.y = 0;
        if (jumping) jumping = false;

    }
    
    if (keyDown ("space")){
        player.velocity.y -= jump;
    }

    if (player.collide(obstacle)) {
        player.remove;
    }

    drawSprites();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}