let array = [1, 2, 3, 4, 5, 6, 7, 8];
const copyArray = [...array]; // copy array to copyArray
const copyArray2 = Array.from(array);  // copy array to copyArray2

array.pop();     // remove last element
array.push(100);
array.push(100, 102); // adds the value to the end of the array
array.shift();   // removes the value from the start of the array
array.unshift(100)   // adds the value to the start of the array
console.log(array); 

const fromIndex = 2, no_of_elements = 2;
array.splice(fromIndex, no_of_elements) // removes the number_of_elements, starting from
console.log(array);                     // fromIndex from the array


let toIndex = 4;
const newArray = array.slice(fromIndex, toIndex) //copies a certain part of the array 
console.log(newArray);                           // [fromIndex, fromIndex + 1, ..., toIndex - 1]

const newArr = array.concat(newArray)// Join several arrays into one a.concat(a1,a2,.., an)

const bool = array.includes(5); // determines whether an array includes a certain
console.log(bool); // value among its entries, returning true or false as appropriate.

console.log(array.indexOf(100)); // returns the index of the first occurance of that value
console.log(array.lastIndexOf(100)); // returns the index of the last occurance of that value
