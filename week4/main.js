function foo() {
    document.write("Hello World ;)");
}

foo();
console.log(typeof foo)

var bar = function () {
    document.write("world.")
};//; use for statment such as var
bar();
console.log(bar);
document.write("<br><br>");

var greet = function(name,greeting) {
    console.log(arguments);
    if (arguments.length > 1){
    var text = greeting + ", " + name;
    document.write(text);
    }
};
greet();
greet("Siyu","Hello");
greet("Siyu","Hi");

var add = function (n1,n2) {
    console.log(arguments);
    return n1 + n2;
};

var x = add (2,2);
var y = add (x,2);
var z = add (x,y);

document.write("<p>" + add(x,y,z) + "</p>"); //the answer is 10 because it ignores the z because return only have n1 and n2 but n3, no matter how many var add in document.write("<p>" + add(x,y,z,...),it just be ignored

//(function() {
//    alert(x); // there is an error maybe
//}) ("Hello World!") //Anonymous functions

//scope fuction --VVVV
var assign = function() {
    var n = 0;
    var n = 1;
};

var multiply = function () {
    return n + m;
};
assign();
//multiply();



var j;
var k;
var assignValue = function () {
    j = 0;
    k = 1;
}

var divide = function() {
    return j/k;
};
assignValue();
var l = divide();
document.write("<p>" + l + "</p>");









