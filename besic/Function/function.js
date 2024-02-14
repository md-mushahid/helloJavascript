function myName(){
    console.log('Mushahid');
}

myName();


function map(f, a) {                       // f = cube function and a = numbers array
    const result = new Array(a.length);    // creating new array result
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);                 // f(a[i]); -> calling cube function
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];

  // here we are passing numbers array and cube function as argument into map funtion.

  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]


// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = 'Chamakh'
  
    function add() {
      return `${name} scored ${num1 + num2}`;
    }
  
    return add();
  }
  
  console.log(getScore()); // "Chamakh scored 5"

// Another nested function example
  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  console.log(addSquares(2, 3)); // 13

// Function hoisting only works with function declarations
// not with function expressions. The following code will not work

console.log(sqr(5)); // ReferenceError: Cannot access 'square' before initialization

const sqr = function (n) {
  return n * n;
};