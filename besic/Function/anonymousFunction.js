//anonymous function does not need to have a name 

const square = function (number) { 
    return number * number;
  };

console.log(square(4)); // 16

// but a name can be provided with a function expression.
// Providing a name allows the function to refer to itself
// and also makes it easier to identify the function in a debugger's stack traces

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };

console.log(factorial(4)); // 24


const numbers = [1, 2, 3, 4, 5];

// Using map
const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared); // Outputs: [1, 4, 9, 16, 25]

