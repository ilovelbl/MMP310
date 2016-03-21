var imgs =[
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg"
];



var labels = [
    "I'm cat",
    "I'm wearing weater.",
    "I'm lying"
];


var slideshow = document.createElement("div");
slideshow.id = "slideshow";
document.getElementById("container").appendChild(slideshow);

var slides = [];
for (var i = 0; i < imgs.length; i++) {
    var d = document.createElement("div");
    d.className = "slide";
    d.id = "s" + i;
    var im = new Image ();
    im.src = "img/" + imgs[i];
    var l = document.createElement("div");
    l.className = "label";
    l.innerHTML = labels[i];
    d.appendChild(im);
    d.appendChild(l);
    slideshow.appendChild(d);
    slides.push(d);
}

slides[math.floor(Math.random()*slides.length)].style.display = "block";

var next = document.createElement("button");
next.innerHTML = "Next Slide";
next.onclick = function () {
    var n =;

}


var prev = document.createElement("button");
prev.innerHTML = "Next Slide";
prev.onclick = function () {
    gor
}

slideshow.appendChild(prev);
slideshow.appendChild(next);










