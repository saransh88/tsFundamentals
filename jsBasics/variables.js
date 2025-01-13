// var can be declared functionally / locally + globally 


/**
 * add() function can access n1 and n2 variables
 */
var n1 = 10000;
function add() {
    var n2 = 20;
    console.log(n1 + n2);
}

add();

/**
 * redeclare and reassigned are allowed for vars
*/
var browser = "chrome";
var browser = "firefox";

console.log(browser);// output is firefix because var can be redeclared and updated. The latest value will be used.

browser = "safari";
console.log(browser);// output is safari because var can be reassigned


// why we should not use var ?
// 1. var is functionally scoped
// 2. var can be redeclared and reassigned
// 3. var can be hoisted


// ## let ##
// scope : block scoped 
//{} : block
// let can be reassigned but not redeclared
// let can't be hoisted

let m = " hey Sunny";
let time = 4
if (time > 3) {
    let mesg = "good morning";
    console.log(mesg);
}
//console.log(mesg); // output : ReferenceError: mesg is not defined. why ? because let is block scoped and it is not available outside the block
console.log(m); // output : hey sunny . why ? because let is block scoped and it is available outside the block

// let m = "hey Saransh" // output : SyntaxError: Identifier 'm' has already been declared. why ? because let can't be redeclared

m = "hey Saransh";
console.log(m); // output : hey Saransh. why ? because let can be reassigned


// ## const ##
// scope : block scoped
// const can't be redeclared or reassigned
// const can't be hoisted
// use CAPS for const

const PI = 3.14;
//PI = 3.15; // output : TypeError: Assignment to constant variable. why ? because const can't be reassigned
console.log(PI);