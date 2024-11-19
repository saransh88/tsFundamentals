
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

