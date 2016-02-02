/* javascript goes here */
function setup() {
    createCanvas(windowWidth, windowHeight);
    // text set up
    textSize(32);
    textFont("Helvetica");

    fill(0,102,153);
    text("Week 1", 10, 30);



    // image setup
    loadImage("img/1.png", function(img) {
    image(img, 10, 45);
  });
    loadImage("img/3.png", function(img) {
    image(img, 265, 45);
  });
    loadImage("img/2.png", function(img) {
    image(img, 515, 45);
  });
    loadImage("img/4.png", function(img) {
    image(img, 355, 300);
    loadImage("img/5.png", function(img) {
    image(img, 80, 305);
  });
  });
    // for repeat texts
    var x = 0,y = 0;
    for(var i = 0; i < 5; i ++){
        drowText(x,y);
        y += 30;
    }

}
function drowText(startX,startY){
        var r = random(255), g = random(255), b = random(255);
    fill(r,g,b);
    textFont("Georgia");
    text("Siyu Han's first assignment on class.", 8, 600+startY);
    }
