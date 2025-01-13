
//**Rules for naming variables**
/**
 * 1. Variables cannot be a reserved keyword
 * 2. Variables should be meaningful
 * 3. Variables cannot start with a number (1name)
 * 4. Variables cannot contain a space or hyphen (-)
 * 5. Variables are case-sensitive
 * 6. Variables should be in camelCase
 * 7. Variables should not be too long
 * 8. Variables should not be too short
 * 9. Variables should not be too generic
 * 10. Variables should not be too specific
 * 11. Variables should not be a single letter
 * 12. Variables should not be a single character
 * 13. Variables should not be a single number
 **/

//Example
let firstName = 'Sunny';
let lastName = 'Vaid'; 

console.log(`Hello ${firstName} ${lastName}`); // Output: Hello Mosh


//**Constants**
/** Rules for constants
 * 1. Constants cannot be reassigned
 * 2. Constants should be meaningful
 * 3. Constants should be in uppercase
 */

//Example
const INTRESTRATE = 0.3;
//INTRESTRATE = 1; // This will give an error because we cannot reassign a constant variable
console.log(INTRESTRATE);


//**Primitive or Value Types**
/**
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. Symbol
 */

//Example
firstName = 'Saransh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined; // Undefined . why ? because we have not assigned any value to it
let selectedColor = null; // Null . why ? because we have explicitly assigned null to it to clear the value
let symbol = Symbol('a'); // Symbol . why ? because it is a unique value

//** Reference types */
/**
 * 1. Object
 * 2. Array
 * 3. Function
 */
 let person = {'firstName': firstName, 'middleName':middleName, 'lastName': lastName , 'age': 30}; // Object Literal. why ? because we have key-value pairs
let colors = ['red', 'blue', 'green']; // Array Literal. why ? because we have square brackets

let greet = function() { console.log('Hello')}; // Function Literal. why ? because we have assigned a function to it
console.log(person);




// Dot Notation. use this when you have a valid key
person.firstName = 'Sunny';

// Bracket Notation. use this when you have a key that is not valid or it is dynamic
person['lastName'] = 'Notvaid';
console.log(person.lastName);

//**Arrays**
let selectedColors = ['blue','yellow']; // Object Literal. why ? because we have assigned null to it
selectedColors[2] = 'green'; // Array Literal. why ? because we have assigned a value to it
selectedColors[2] = 'green'; // Array Literal. why ? because we have assigned a value to it
console.log(selectedColors.length);

//**Functions**
/**
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 */
function greetUser(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

/**
 * Sunny and Vaid are arguments
 */
greetUser('Saransh'); // Output: Hello Sunny undefined bc default value of lastName is undefined
greetUser('Sunny', 'Vaid'); // Output: Hello Sunny Vaid


// Function that calculates a value
function square(number) {
    return number * number;
}

console.log(square(21)); // Output: 441


//**Operators**
let x = 10;
let y = 3;

console.log(x + y); // Output: 13
console.log(x - y); // Output: 7
console.log(x * y); // Output: 30
console.log(x / y); // output: 3.3333333333333335
console.log(x % y); // Output: 1 (Modulus. Remainder of the division) how does it work ? 10/3 = 3.3333333333333335 so 3*3 = 9 and 10-9 = 1 why is it used ? to check if a number is even or odd
console.log(x ** y); // Output: 1000 (Exponentiation) how does it work ? 10^3 = 1000 why is it used ? to calculate the power of a number

// Increment (++)
console.log(`value of x is ${x}`); // Output: 10
console.log(++x); // Output: 11 (Pre-increment) how does it work ? x = x + 1 . X is incremented first and then printed
console.log(`incremented value of X is ${x}`); // Output: 11
console.log(x++); // Output: 11 (Post-increment) how does it work ? x = x + 1. X is printed first and then incremented
console.log(`incremented value of X is ${x}`); // Output: 12

// Decrement (--)
console.log(`value of y is ${y}`); // Output: 3
console.log(--y); // Output: 2 (Pre-decrement) how does it work ? y = y - 1. Y is decremented first and then printed
console.log(`pre-decremented value of y is ${y}`); // Output: 2
console.log(y--); // Output: 2 (Post-decrement) how does it work ? y = y - 1. Y is printed first and then decremented
console.log(`post-decremented value of y is ${y}`); // Output: 1

let z = 10
z += 5; // z = z + 5   (Assignment Operator)
console.log(z); // Output: 15

z -= 5; // z = z - 5   (Assignment Operator)
console.log(z); // Output: 10

z *= 5; // z = z * 5   (Assignment Operator)
console.log(z); // Output: 50


//## Comparison Operators##

// Relational Operators

let c = 1;
console.log(c > 0); // Output: true
console.log(c >= 1); // Output: true
console.log(c < 1); // Output: false
console.log(c <= 1); // Output: true

// Equality Operators
// Strict Equality (Type + Value) Always use strict equality operators 
console.log(c === 1); // Output: true
console.log(c !== 1); // Output: false


// Loose Equality (Value)
console.log(c == 1); // Output: true
console.log('1'==1); // Output: true ? why ? because it is a loose equality operator and it only checks the value
console.log(false==0); // Output: true ? why ? because it is a loose equality operator and it only checks the value


//## Ternary Operator ##

// If a customer has more than 100 points, 
// they are a 'gold' customer, 
// otherwise, they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold':'silver'; // what does this do  ? if points > 100 then type = 'gold' else type = 'silver'
console.log(type); // Output: gold


//## Logical Operators ##

// Logical AND (&&)
// Returns TRUE if both operands are TRUE

let highIncome = false;
let goodCreditScore = true;
// what does this do  ? if highIncome and goodCreditScore are true then eligibleForLoan = true else eligibleForLoan = false
let eligibleForLoan = highIncome && goodCreditScore; 
console.log('Eligible',eligibleForLoan); // Output: true


// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

// what does this do  ? if highIncome or goodCreditScore is true then eligibleForLoan2 = true else eligibleForLoan2 = false
let eligibleForLoan2 = highIncome || goodCreditScore;
console.log('Eligible 2',eligibleForLoan2); // Output: true

// NOT (!)
// what does this do  ? if highIncome is not true then applicationRefused = true else applicationRefused = false
let applicationRefused = !eligibleForLoan2;
console.log(`The result of your loan application is ${applicationRefused}`);


//## Logical Operators with Non-Boolean Values ##
// Falsy (false) it is not just false but it is a value that is treated as false in a boolean context
// 1. undefined
// 2. null
// 3. 0
// 4. false
// 5. ''
// 6. NaN

// Anything that is not Falsy -> Truthy
// 1. '0'
// 2. ' '
// 3. []
// 4. {}

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // what does this do  ? if userColor is true then currentColor = userColor else currentColor = defaultColor
console.log('current color falsy',currentColor); // Output: blue
userColor = 'red';
currentColor = userColor || defaultColor; // what does this do  ? if userColor is true then currentColor = userColor else currentColor = defaultColor
console.log('current color truthy',currentColor); // Output: red

// short-circuiting
// if the first operand is truthy, it will return the first operand
let userColor2 = undefined;
let defaultColor2 = 'blue';
let currentColor2 = userColor2 || defaultColor2; // 
console.log('current color2 for short-circuting',currentColor2); // Output: blue

//## Bitwise Operators ##
// what is this ? it is a way to manipulate numbers in binary format
// 1 = 00000001
// 2 = 00000010 

// Bitwise OR (|)
console.log('Bitwise or',1 | 2); // Output: 3 (00000011) why ? because it is a bitwise OR operator and it will return 1 if either of the bits is 1

// Bitwise AND (&)
console.log('Bitwise and',1 & 0); // Output: 0 (00000000) why ? because it is a bitwise AND operator and it will return 1 if both bits are 1

// Read, Write, Execute. Implementing Read, Write, Execute permission
// 00000100
// 00000010
// 00000111

const readPermission = 4;
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001
let myPermmission = 0;

// With Bitwise OR (|) we can assign permission to a user and with Bitwise AND (&) we can check if a user has a permission
myPermmission = myPermmission | readPermission | writePermission; // 00000110

console.log('My permission',myPermmission);

let message = 
    (myPermmission & readPermission) ? 'yes' : 'no';

    console.log(message);