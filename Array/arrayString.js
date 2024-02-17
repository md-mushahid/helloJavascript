const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits)); // make json data

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2);
// 2

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length); // 2

const fruitsString = fruits.join(", "); // Create string from array
console.log(fruitsString); 

const fruits4 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const removedItems = fruits4.splice(start = 2,num_elements = 3);
console.log(fruits4);
console.log(removedItems);

// Remove 1 element at index 2, and insert "trumpet"
const myFish = ["angel", "clown", "drum"];
const removed = myFish.splice(2, 1, "trumpet"); // removed is ["drum"] 
console.log(myFish); // myFish is ["angel", "clown", "trumpet"]

const myFish1 = ["angel", "clown", "trumpet", "sturgeon"];
const removed1 = myFish.splice(0, 2, "parrot", "anemone", "blue");
