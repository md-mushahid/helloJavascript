const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]

const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']