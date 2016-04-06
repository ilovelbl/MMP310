var startButton = document.getElementById("start");
var quiz = document.getElementById("quiz");
var rightAnswer = document.getElementsByClassName("right");
var wrongAnswer = document.getElementsByClassName("wrong");

var count = 60;//out of the click fuction means this var can be controled by submitButton
var countDisplay = document.getElementById("countdown");

quiz.style.display = "none";

startButton.addEventListener("click", function() {

    var submitButton = document.getElementById("submit");
    submitButton.onclick = function() {
        count = 1;
    }
//    console.log(document.getElementById("submit"));

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

            countDisplay.innerHTML = "Time over. Your score is " + checked * 10 + " / " + rightAnswer.length + "0";
        } else {
            countDisplay.innerHTML = "Time to complete quiz: " + count;
            count--;
        }
    };
    var countdownInterval = setInterval(countdown, 1000);
    quiz.style.display = "block";
    this.style.display = "none";
});

