












var submit = document.getElementById("submit");
submit.onclick = function() {
    //console.log(this);
    var name = document.getElementById("name").value;
    //console.log(name);
    var message = document.getElementById("message");
    message.innerHTML = "Hello " + name + ", form " + ". Welcome to my website.";
};
