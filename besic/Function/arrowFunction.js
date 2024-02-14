const a = 4;
const b = 2;

function treditional(a, b) {
    return a + b + 100;
  }
 
console.log(treditional(a, b));

const arrow = (a, b) => a + b + 100; // this will return a + b + 100.
 
console.log('Arrow function print = ', arrow(a, b));
 
 (function () {
   return a + b + 100;
 });
 
const arrowFunctionNoparameter = () => a + b + 100;

console.log(arrowFunctionNoparameter());


// The braces can only be omitted if the function directly returns an expression.
// if the body has additional lines, the braces are required and so is return keyword.

const sum = (a, b) => {
    const chuck = 42;
    return a + b + chuck;
  };
console.log(sum(2, 6));


(() => "foobar")();
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sumArr = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]