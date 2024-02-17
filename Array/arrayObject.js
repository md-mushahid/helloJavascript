const fruits = ["banana", "apple", "peach"];
fruits[5] = "mango";

// In javascript array is an object
// every index consider as a key of the arrayObject
// and value  indie the index are the vlue property of arrayobject 
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
  };
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'

const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits; // 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.

// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift("Apple", "Banana");
console.log(fruits);      // ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias); // ['Apple', 'Banana', 'Strawberry', 'Mango']