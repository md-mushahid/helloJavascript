const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj); // Expected output: Object { foo: "bar", baz: 42 }

  const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
  ];
  const obj1 = Object.fromEntries(arr);
  console.log(obj1); // { 0: "a", 1: "b", 2: "c" }


const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }

