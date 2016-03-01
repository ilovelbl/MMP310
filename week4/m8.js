var upload = document.getElementById("upload");
var answer = document.getElementById("answer");
var reaction = [];
var reactionElements = document.getElementsByClassName("reaction");

upload.onclick = function() {
    for (var i = 0; i < reactionElements.length;i++)
    reaction.push(reactionElements[i].value);

    answer.innerHTML = "Hello " + reaction[0] + " " +reaction[1] + ", if your question is: "  + reaction[2] + ", please click the Maggic ball, you will get your answer.";
};

var result = ["Yes","Without a doubt, YES!", "Just do it!", "No", "Not today","My reply is no","Hmm, this is a hard question, ask again after 5 seconds", "Try again",];

var ball = document.getElementById("ball");

var message = document.getElementById("message");

ball.onclick = function () {
    console.log(result [0]);
    var randomanswer = result[Math.floor(Math.random() * result.length)];
    console.log(randomanswer);
    message.innerHTML = "The Magic 8 says: " + randomanswer;
}








