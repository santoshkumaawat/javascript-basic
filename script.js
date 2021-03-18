document.getElementById("h1").style.background = "#51cf83";

function press() {
    alert("This is alert-box");
}

//1. Ways to print in Javascript.
console.log("We are learning Javascript.");
document.write("This is \"document.write\" function.");
alert("This is alert");

//-----------------------------------------------------------------

//2. Javascript console API.
console.log("Hello User this is console API");
console.warn("This is warning");
console.error("This is an error message");

//------------------------------------------------

//3. Variables in javascript.
var num1 = 56;
var num2 = 15;
document.write("<br>" + num1 + "+" + num2 + "=" + (num1 + num2));

//------------------------------------------------

//4. Datatypes in javascript
//Numbers
var number1 = 88;
var number2 = 20.63;
//-----------------------------
//String
var str1 = "This is string";
var str2 = 'This is also a string';
//-----------------------------
//Object
var marks = {
    ram: 45,
    shyam: 55,
    vinay: 52,
    ravi: 88,
    pranay: 75
}
console.log(marks);
//------------------------------
//boolean
var a = true;
var b = false;
console.log(a, b);
//--------------------------
var und; //undefined
var nul = null; //null
//--------------------------
//array
var arr = [1, 2, 3, 4, "santosh", 6, 7, 8, 9];
console.log(arr);

//------------------------------------------------

//5. Operators
//Arithmetic operators
var m = 55;
var n = 42;
console.log("The addition of a & b is: ", m + n);
console.log("The subtraction of a & b is: ", m - n);
console.log("The multiplication of a & b is: ", m * n);
console.log("The division of a & b is: ", m / n);
//------------------------------------------------
//Assignment operators
var p = n;
p += 2; //p=p+2
p -= 2;
p *= 2;
p /= 2;
console.log(p);
//------------------------------------------------
//comparision operator
x = 55;
y = 88;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);
//------------------------------------------------
//logical operator
//logical AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
//-------------
//logical OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//-------------
//logical NOT
console.log(!true);
console.log(!false);

//------------------------------------------------

//6. Functions in JavaScript
function avg(a, b) {
    return (a + b) / 2;
}
a1 = avg(4, 10);
a2 = avg(5, 25);
console.log(a1, a2);

//---------------------------------------------------------

//7. Conditionals in JavaScript
var age = 100;
//single if statement
if (age < 18) {
    console.log("you can not drink liquor");
}
//---------------------
//if-else statement
if (age < 18) {
    console.log("you can not drink liquor");
} else {
    console.log("you can drink liquor");
}
//-----------------------
//if-else ladder
if (age < 12) {
    console.log("you are a kid");
} else if (age < 18) {
    console.log("you are a boy");
} else if (age < 25) {
    console.log("you are a college boy");
} else if (age < 50) {
    console.log("you are a man");
} else {
    console.log("you are a old man");
}

//------------------------------
// Loop Statement 
//for loop
var arra = [1, 3, 4, 7, 8, , 0];
console.log(arra);
for (i = 0; i < arra.length; i++) {
    if (i == 3) {
        break;
        //continue;
    }
    console.log(arra[i]);
}
//-------------
//for each loop
arra.forEach(function (elements) {
    console.log(elements);
});
//-------------------------------
//while loop
//0var j = 0;
var jarr = [10, 20, 30, 40, 50];
let j = 0;
while (j < jarr.length) {
    console.log(jarr[j]);
    j++;
}
//----------------------------
//do while loop
var doarr = [11, 12, 13, 14, 15];
k = 0;
do {
    console.log(doarr[k]);
    k++;
} while (k < doarr.length);

//----------------------------------------------------

//8. arrays method
let myarray = ["santosh", 1, 2, 3, 5, 9, "kumawat", null, true];
console.log(myarray.length);          //1 length()
myarray.pop();                        //2 pop()
myarray.push("This-is-push-method");  //3 push()
myarray.shift();                      //4 shift()
const newLen = myarray.unshift("5");  //5 unshift()
myarray.toString();                   //6 toString()
myarray.sort();                       //7 sort()
console.log(myarray);

//-------------------------------------------------------

//9. String Methods
let myString = "Hey i am santosh kumawat and my nickname is sant";
console.log(myString.length);
console.log(myString.indexOf("santosh"));
console.log(myString.lastIndexOf("sant"));
console.log(myString.slice(0, 25));
console.log(myString.replace("kumawat", "bhadaniya"));

//-----------------------------------------------------------

//10. Date and Time in JavaScript
let myDate = new Date();
console.log(myDate.getDate());
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

//-----------------------------------------------------------------

//11. Events is JavaScript
firstContainer.addEventListener('click', function () {
    console.log("clicked on container");
})
firstContainer.addEventListener('mouseover', function () {
    console.log("mouse on container");
})
firstContainer.addEventListener('mouseout', function () {
    console.log("mouse out of container");
})
firstContainer.addEventListener('mouseup', function () {
    console.log("clicked on container");
})
firstContainer.addEventListener('mousedown', function () {
    console.log("clicked out container");
});
//-----------------------------------------------------------------

//12. SetTimeOut and SetInterval
function sum(a, b) {
    return a + b;
}

//arrow function
sum = (a, b) => {
    return a + b;
}
function cle() {
    clearInterval(clr);
}
load = () => {
    console.log("This is set timeout");
    setInterval(cle, 10000);
}
setTimeout(load, 2000);
clr = setInterval(load, 2000);

//---------------------------------------------------------------------

//13. JSON
obj = { name: "santosh", length: 1 };
console.log(obj);
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"santosh","length":1}`);
console.log(parsed);



//-------------THE END--------------------------