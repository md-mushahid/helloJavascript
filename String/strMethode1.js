const str = 'mushahid'

console.log(str.toUpperCase());

console.log(str.length);

console.log(str.at(5));

console.log(str.charAt(5));

console.log(str.charCodeAt(5)); // print the asqii value

const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Expected output: "Hello World"

const str3 = "To be, or not to be, that is the question.";
console.log(str3.endsWith("question.")); // true
console.log(str3.endsWith("to be"));     // false
console.log(str3.endsWith("to be", 19)); // true

console.log(str3.startsWith("To")); // true
console.log(str3.startsWith("be", 3)); // true


const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "

const greeting = "          hello            mushahid                                   ";
console.log(greeting.trim());
