const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

console.log(a);

const { c, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]


const user = {
    id: 42,
    isVerified: true,
  };
  
  const { id, isVerified } = user;
  
  console.log(id); // 42
  console.log(isVerified); // true


// Assigning to new variable names
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true


const props = [
    { id: 1, name: "Fizz" },
    { id: 2, name: "Buzz" },
    { id: 3, name: "FizzBuzz" },
  ];
  
  const [, , { name }] = props;
  
  console.log(name); // "FizzBuzz"

  