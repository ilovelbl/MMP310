var cowboy;
var cowboy_walk_sprites,cowboy_walk, cowboy_stand_sprites, cowboy_stand, cowboy_died_sprites, cowboy_died;
var speed = 10;
var GRAVITY = 1;
var JUMP = 20;
var JUMPING = false;
var dead = false;
var cowboyDied;

var platform, ground;
var bullets;



function preload() {
	cowboy_walk_sprites = loadSpriteSheet("assets/died.png", 250, 280, 6);
	cowboy_walk = loadAnimation(cowboy_walk_sprites);
	cowboy_stand_sprites = loadSpriteSheet("assets/stand.png", 64, 64, 2);
	cowboy_stand = loadAnimation(cowboy_stand_sprites);

	ground = loadImage("assets/grd.png");
}


function setup () {
    createCanvas(1024,768);
    background (156,200,250);
    
    platform = createSprite (width/2, height/2, 50, 40);
    platform.addImage(ground);
    platform.setCollider("rectangle",0,0,width,10);

}
//
//
//
//
//
//
//
//
//
//
//
//
//function setup() {
//    var cnv = createCanvas(950,650);
//    cowboy = createSprite(200,510);
//    cowboy.addAnimation("nomal","assets/cb-s1.png", "assets/cb-s2.png");
//    cowboy.addAnimation("stretch","assets/cb-jp1.png","assets/cb-jp1.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png");
//    cowboyDied = cowboy.addAnimation("died","assets/cb-die1.png","assets/cb-die2.png","assets/cb-die3.png","assets/cb-die4.png","assets/cb-die5.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png","assets/cb-die6.png");
//    cowboy.addAnimation("asasa","assets/cb-die6.png");
//
//    cowboy.setCollider("rectangle", 0,0,0,253);
//
//
////    bullets = createSprite(800,random(550));
//    bullets = createSprite(1000,500);
//    bullets.addAnimation("shoot","assets/b1.png","assets/b2.png","assets/b3.png");
//    bullets.addAnimation("boom","assets/b4.png");
//
//    platform = createSprite(400, 600);
//    platform.addAnimation("normal", "assets/grd.png");
//
//
//}
//
//
//function draw() {
//    background(185,200,200);
//
//    fill (200);
//
//    cowboy.velocity.y += GRAVITY;
//    if(cowboy.collide(platform)){
//        cowboy.velocity.y = 0;
//        cowboy.changeAnimation("nomal");
//    }
//
//    bullets.setSpeed(7,180);
//
//
//
//        if (bullets.collide(cowboy)){
//            cowboy.changeAnimation("died");
//            dead ++;
//            bullets.changeAnimation("boom");
//
//        }
////
//    if(keyWentDown("space"))
//        {
//        cowboy.changeAnimation("stretch");
//        cowboy.animation.rewind();
//        cowboy.velocity.y = -JUMP;
//        }
//
//
//
//
//    drawSprites();
//}

