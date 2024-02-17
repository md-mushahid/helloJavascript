// In sparse arrays, for...of will visit the empty slots, but for...in will not.
// It is better to use a for loop with a numeric index, Array.prototype.forEach(), or the for...of
// for..of access value of array(array[index]). we cannot use for..of in object
  
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const iterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (const entry of iterable) {
    console.log(entry);
  }
  // ['a', 1]
  // ['b', 2]
  // ['c', 3]
  
  for (const [key, value] of iterable) {
    console.log(value);
  }

  const iterable1 = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable1) {
  console.log(value);
}