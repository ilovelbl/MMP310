var startButton = document.getElementById("start");
var quizdiv = document.createElement("div");
var question = document.getElementById("input");
var counntDisplay= document.getElementById("countdowm")

//console.log(startButton,quiz,input);

quizdiv.style.display = "none";

startButton.addEventListener("click",function(){
    quiz.style.display = "black";
    this.style.display = "none";

})

var count = 60;

var countdown =
