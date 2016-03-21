var pletters =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
var password = "";

var ur = document.getElementById("ur").value;

var message = document.getElementById("message");
console.log(message);

var submit = document.getElementById("submit");
console.log(submit);

submit.onclick = function() {
    console.log("submit");

    message.innerHTML =  ur + "you already signed up";
}

var ps = document.getElementById("ps");

ps.onclick = function() {
    console.log(ps);

    for(var i = 0; i < pletters.length; i++) {
        password += pletters[Math.floor(Math.random() * pletters.length)];
        password = document.getElementById("password").value;
    }


}
