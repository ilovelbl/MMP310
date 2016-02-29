var upload = document.getElementById("upload");
var answer = document.getElementById("answer");
var reaction = [];
var reactionElements = document.getElementsByClassName("reaction");

upload.onclick = function() {
    for (var i = 0; i < reactionElements.length;i++)
        reaction.push(reactionElements[i].value);

    answer.innerHTML = "Hello " + reaction[0] + " " +reaction[1] + ", if your question is: "  + reaction[2] + ". The Migic 8 answer will be";
};
