var cowboy;
var cowboy_walk_sprites, cowboy_walk, cowboy_stand_sprites, cowboy_stand, cowboy_jp_sprites, cowboy_jp, cowboy_died_sprites, cowboy_died;
var speed = 10;
var jump = 20;
var jumping = false;
var dead = false;
var bullets;

var gravity = 1;

var platform, ground;
var obstacle, pirate;

function preload() {
	cowboy_walk_sprites = loadSpriteSheet("stand.png", 250, 280, 2);
	cowboy_walk = loadAnimation(cowboy_walk_sprites);
    
	cowboy_stand_sprites = loadSpriteSheet("stand.png", 250, 280, 1);
	cowboy_stand = loadAnimation(cowboy_stand_sprites);
    
    cowboy_jp_sprites = loadSpriteSheet("jp.png", 175, 280, 2);
	cowboy_jp = loadAnimation(cowboy_jp_sprites);
    
    cowboy_died_sprites = loadSpriteSheet("died.png" , 282, 250, 6);
    cowboy_died = loadAnimation(cowboy_died_sprites);

    
    
    
	pirate = loadImage("pr2.png");
	ground = loadImage("ground.png");
}

function setup() {
	createCanvas( 1080, 720 );

	platform = createSprite( width/2, 700, width, 40);
	platform.addImage(ground);
	platform.setCollider("rectangle", 0, 0, width, 10);
	platform.debug = true;

	cowboy = createSprite( 100, 400 );
	cowboy.addAnimation("walk", cowboy_walk);
	cowboy.addAnimation("stand", cowboy_stand);
	cowboy.addAnimation("died", cowboy_died);
	cowboy.addAnimation("jp", cowboy_jp);
	cowboy.setCollider("rectangle", 0, 0, 100, 280);
	cowboy.debug = true;

	obstacle = createSprite( 700, 550, 150, 280);
	obstacle.addImage(pirate);
	obstacle.setCollider("rectangle", 0, 0, 150, 280);
	obstacle.debug = true;
    
    
    
    bullets = createSprite(900,550);
    bullets.addAnimation("shoot","b1.png","b2.png","b3.png");

    bullets.setSpeed(15,180);
    bullets.setCollider("circle", -15, 0, 10);
    bullets.debug = true;


    
    
}

function draw() {
	background (150,180,250);

	if ( keyDown( "d" ) && !dead) {
		cowboy.changeAnimation("walk");
		platform.position.x -= speed;
		obstacle.position.x -= speed;
	} 

	if (platform.position.x < 0) platform.position.x = width/2;
	if (obstacle.position.x < -obstacle.width/2) obstacle.position.x = random(width, width*2);


	cowboy.velocity.y += gravity;
	if ( cowboy.collide( platform ) ) {
		cowboy.velocity.y = 0;
		if (jumping) jumping = false;
        cowboy.changeAnimation("stand");
	}

	if ( keyDown( "space" ) && !jumping ) {
		cowboy.changeAnimation("jp");  
        cowboy.velocity.y -= jump;
		jumping = true;
        
    } else {
       // 
    }
	

	if ( cowboy.collide(obstacle) ) {
		dead = true;
        jump = 0;
        cowboy.changeAnimation("died");
	}

	drawSprites();

    
    if (bullets.collide(cowboy)){
        dead = true;
        cowboy.changeAnimation("died");
        bullets.remove();
        }
    
    
    
    
    
    
    
    
    
    
}
