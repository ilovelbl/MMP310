var yn = document.getElementById("yn");
yn.onclick = function() {
    //console.log();
    var name = document.getElementById("name").value;
    console.log("worl");
    var message = document.getElementById("message");
    message.innerHTML = "OK " + name + ", let's begain";
};

///////if else statement////////

var r = 0;
var y = 5;
var w = 0;

var right = document.getElementsByClassName("right");
for (var i = 0; i < right.length; i++) {
    right[i].onclick = function(){
        r++;
        if (r >= 5) {
            r == 5;
        }
        console.log(r + " right score");
    }
}

var wrong = document.getElementsByClassName("wrong");
for (var j = 0; j < wrong.length; j++){
    wrong[j].onclick = function(){
        w++;
        console.log(w+" wrong score")
    }
}


//var e = 0;
//var ex = document.getElementById("ex");
//ex.onclick = function() {
//    e++;
//    console.log(e);
//}
//



var submit = document.getElementById("submit");

submit.onclick = function() {
    var commen = document.getElementById("commen");
    if (r >= y){
            commen = "good";
        console.log(r);

        }else if (r < y && r >= 3){
            commen = "not bad";
        }else if (r < 3){
            commen = "try hard";
        }

    var result = document.getElementById("result");
    result.innerHTML = commen + " you have " + r + "/5 right, " + w  +" /5 wrong, " + " thank you";
};











