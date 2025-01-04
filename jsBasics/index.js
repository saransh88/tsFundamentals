
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
console.log(x % y); // Output: 1 (Modulus) how does it work ? 10/3 = 3.3333333333333335 so 3*3 = 9 and 10-9 = 1 why is it used ? to check if a number is even or odd
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
