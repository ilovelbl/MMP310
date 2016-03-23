    var message = document.getElementById("message");
    console.log(message);

    var submit = document.getElementById("submit");
    submit.onclick = function() {
    //console.log(this);
        var name = document.getElementById("name").value;
        console.log(this);
    var message = document.getElementById("message");
    message.innerHTML = "Hello, " + name + "Thank you for signing up" ;
};



function randomAlphanumeric(dstObj,charsLength,chars) {

    var dstElem = document.getElementById(dstObj);

    var length = charsLength;

    if (!chars)
        var chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";

    var randomChars = "";

    for(x=0; x<length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        randomChars += chars.charAt(i);
    }

    dstElem.value = randomChars;
}
