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
textdiv.id = "text";
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
textZone.cols = 90;
textZone.rows = 10;
textdiv.appendChild(textZone);

var br =  document.createElement("br");
textdiv.appendChild(br);

var butn = document.createElement("button");
butn.innerHTML = "Click and Upload";
butn.id = "upload";
textdiv.appendChild(butn);

var para = document.createElement("p");
para.id = "message";
textdiv.appendChild(para);


butn.onclick = function(event) {
	console.log("You clicked me!");
	console.log(this);
    for (var i = 0; i < reactionElements.length;i++)
        reaction.push(reactionElements[i].value);

    message.innerHTML = "Hello, on " + reaction[0] + " " +reaction[1] + " you need do :" + reaction[2];

};

























