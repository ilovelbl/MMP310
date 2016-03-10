var c = document.getElementById("container");
c.style.color = "green";
var img = new Image();
img.src = "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg";
img.style.width = "200px";
var elem = document.createElement("div");
elem.appendChild(img);
c.appendChild(elem);




var img2 = new Image();
img2.src = "http://purrfectcatnames.com/wp-content/uploads/2013/11/Gray-Cat-MorgueFile-Nov16th-2013.jpg";
img2.style.width = "200px";
var newdiv = document.createElement("div");
newdiv.className = "box";
newdiv.appendChild(img2);
c.appendChild(newdiv);

var textdiv = document.createElement("div");
textdiv.id = "text";
c.appendChild(textdiv);
var p = document.createElement("p");
textdiv.appendChild(p);
