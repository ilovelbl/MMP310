var startButton = document.getElementById("start");
var quiz = document.createElement("quiz");
var question = document.getElementById("input");
var counntDisplay= document.getElementById("countdowm")

//console.log(startButton,quiz,input);

quiz.style.display = "none";

startButton.addEventListener("click",function(){
    quiz.style.display = "black";
    this.style.display = "none";

})

var count = 60;

var countdown =
