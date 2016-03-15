var c = document.getElementById("container");
//c.style.color = "green";
//var img = new Image();
//img.src = "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg";
//img.style.width = "200px";
//var elem = document.createElement("div");
//elem.appendChild(img);
//c.appendChild(elem);
//
//
//
//
//var img2 = new Image();
//img2.src = "http://purrfectcatnames.com/wp-content/uploads/2013/11/Gray-Cat-MorgueFile-Nov16th-2013.jpg";
//img2.style.width = "200px";
//var newdiv = document.createElement("div");
//newdiv.className = "box";
//newdiv.appendChild(img2);
//c.appendChild(newdiv);

var textdiv = document.createElement("div");
textdiv.className = "text";
c.appendChild(textdiv);

var reaction = [];
var reactionElements = document.getElementsByClassName("reaction");


var month = document.createElement("select");
month.className ="reaction";
textdiv.appendChild(month);

    var op1 = document.createElement("option");
    month.appendChild(op1);
    op1.innerHTML= "Janurary";

    var op2 = document.createElement("option");
    month.appendChild(op2);
    op2.innerHTML= "February";

    var op3 = document.createElement("option");
    month.appendChild(op3);
    op3.innerHTML= "March";

    var op4 = document.createElement("option");
    month.appendChild(op4);
    op4.innerHTML= "April";

    var op5 = document.createElement("option");
    month.appendChild(op5);
    op5.innerHTML= "May";

    var op6 = document.createElement("option");
    month.appendChild(op6);
    op6.innerHTML= "June";

    var op7 = document.createElement("option");
    month.appendChild(op7);
    op7.innerHTML= "July";

    var op8 = document.createElement("option");
    month.appendChild(op8);
    op8.innerHTML= "August";

    var op9 = document.createElement("option");
    month.appendChild(op9);
    op9.innerHTML= "September";

    var op10 = document.createElement("option");
    month.appendChild(op10);
    op10.innerHTML= "October";

    var op11 = document.createElement("option");
    month.appendChild(op11);
    op11.innerHTML= "November";

    var op12 = document.createElement("option");
    month.appendChild(op12);
    op12.innerHTML= "December";

var day = document.createElement("select");
day.className ="reaction";
textdiv.appendChild(day);

    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "1";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "2";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "3";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "4";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "5";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "6";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "7";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "8";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "9";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "10";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "11";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "12";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "13";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "14";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "15";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "16";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "17";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "18";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "19";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "20";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "21";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "22";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "23";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "24";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "25";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "26";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "27";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "28";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "29";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "30";
    var da = document.createElement("option");
    day.appendChild(da);
    da.innerHTML= "30";



var br =  document.createElement("br");
textdiv.appendChild(br);
var br =  document.createElement("br");
textdiv.appendChild(br);


var textZone = document.createElement("textarea");
textZone.className = "reaction";
//textZone.rows = 10;
textZone.placeholder = "Task 1";
textdiv.appendChild(textZone);

    var br =  document.createElement("br");
    textdiv.appendChild(br);

var butn = document.createElement("button");
butn.innerHTML = "Click and Upload";
butn.id = "upload";
textdiv.appendChild(butn);

/////////////////////////text area 2////////////////////////

var textdiv2 = document.createElement("div");
textdiv2.className = "text";
c.appendChild(textdiv2);

var reaction2 = [];
var reaction2Elements = document.getElementsByClassName("reaction2");


    var br2 =  document.createElement("br");
    textdiv2.appendChild(br2);

var textZone2 = document.createElement("textarea");
textZone2.className = "reaction2";
textZone2.placeholder = "Task 2";
textdiv2.appendChild(textZone2);

    var br2 =  document.createElement("br");
    textdiv2.appendChild(br2);

var butn2 = document.createElement("button");
butn2.innerHTML = "Click and Upload";
butn2.id = "upload2";
textdiv2.appendChild(butn2);


/////////////////////////text area end 2////////////////////////


var textdiv3 = document.createElement("div");
textdiv3.className = "text";
c.appendChild(textdiv3);

var reaction3 = [];
var reaction3Elements = document.getElementsByClassName("reaction3");


    var br3 =  document.createElement("br");
    textdiv3.appendChild(br3);

var textZone3 = document.createElement("textarea");
textZone3.className = "reaction3";
textZone3.placeholder = "Task 3";
textdiv3.appendChild(textZone3);

    var br3 =  document.createElement("br");
    textdiv3.appendChild(br3);

var butn3 = document.createElement("button");
butn3.innerHTML = "Click and Upload";
butn3.id = "upload3";
textdiv3.appendChild(butn3);

////////////////////////// 3 3nd////////////////////////
var para = document.createElement("p");
para.id = "message";
c.appendChild(para);

var parac = document.createElement("p");
parac.id = "messag";
c.appendChild(parac);

butn.onclick = function(event) {
	console.log("You clicked me!");
	console.log(this);
    var brb =  document.createElement("br");

    for (var i = 0; i < reactionElements.length;i++)
    reaction.push(reactionElements[i].value);
    message.innerHTML = "Hello, Please remember on " + reaction[0] + " " + reaction[1] + ", don't forget: ";
    messag.innerHTML = "     " + reaction[2];

};


var para2 = document.createElement("p");
para2.id = "message2";
c.appendChild(para2);

butn2.onclick = function(event) {
	console.log("You butn2!");
	console.log(this);
    for (var i = 0; i < reaction2Elements.length;i++)
        reaction2.push(reaction2Elements[i].value);
    message2.innerHTML = "     " + reaction2[0];

};

var para3 = document.createElement("p");
para3.id = "message3";
c.appendChild(para3);

butn3.onclick = function(event) {
	console.log("You butn3!");
	console.log(this);
    for (var i = 0; i < reaction3Elements.length;i++)
        reaction3.push(reaction3Elements[i].value);
    message3.innerHTML = "     " + reaction3[0];

};
























