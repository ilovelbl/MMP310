var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");

var rightAnswer = document.getElementsByClassName("right");
var wrongAnswer = document.getElementsByClassName("wrong");
//var rightAnswer = document.getElementsByTagName("input");

var countDisplay = document.getElementById("countdown");

quiz.style.display = "none";

startButton.addEventListener("click", function() {

    var count = 5;
    var countdown = function() {
        if (count == 0) {
            clearInterval(countdownInterval);
            var checked = 0;
            for (var i = 0; i < rightAnswer.length; i++) {
                if (rightAnswer[i].checked) {
                    checked++;
                }
                startButton.style.display = "block";
                startButton.innerHTML = "Try again.";
            }

//            for (var j = 0; j < wrongAnswer.length; j++) {
//                if (wrongAnswer[i].checked) {
//                    checked--;
//                }
//
            countDisplay.innerHTML = "Out of time. Your score is " + checked + " / " + rightAnswer.length;
        } else {
            countDisplay.innerHTML = "Time to complete quiz: " + count;
            count--;
        }
    };
    var countdownInterval = setInterval(countdown, 1000);


    quiz.style.display = "block";
    this.style.display = "none";
});
