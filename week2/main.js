var submit = document.getElementById("submit");
submit.onclick = function() {
    //console.log(this);
    var name = document.getElementById("name").value;
    //console.log(name);
    var email = document.getElementById("email").value;
    var borough = document.getElementById("borough").value;
    console.log(borough);
    var message = document.getElementById("message");
    message.innerHTML = "Hello " + name + ", form " + borough + ". Welcome to my website.";
};
