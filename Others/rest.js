// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// providing a way to represent variadic functions in JavaScript.

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10


  
  function fun1(...theArgs) {
    console.log(theArgs.length);
  }
  
  fun1(); // 0
  fun1(5); // 1
  fun1(5, 6, 7); // 3