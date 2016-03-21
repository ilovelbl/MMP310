//var pletters =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//var password = "";
//
//var ur = document.getElementById("ur").value;
//
//var message = document.getElementById("message");
//console.log(message);
//
//var submit = document.getElementById("submit");
//console.log(submit);
//
//submit.onclick = function() {
//    console.log("submit");
//
//    message.innerHTML =  ur + "you already signed up";
//}
//
//var ps = document.getElementById("ps");
//
//ps.onclick = function() {
//    console.log(ps);
//
//    for(var i = 0; i < pletters.length; i++) {
//        password += pletters[Math.floor(Math.random() * pletters.length)];
//        password = document.getElementById("password").value;
//    }
//
//
//}


function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

var pps = document.getElementById("pps");
pps.onclick = function generate() {
    myform.row_pas.value = randomPassword(myform.length.value);
}
