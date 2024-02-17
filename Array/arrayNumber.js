const array = [1, 2, 3, 4, 5, 6,7, 8];
const arr = array.slice(1, 4); // this will store subarray from index(1-3) in container 'arr'
console.log(arr);

const array1 = [9, 10, 11];
const a = array.concat(array1); // 
console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


const str = a.join(''); // this will add all element to str as string
console.log(str); // '1234567891011'
console.log(a.join(',.,')); // 1,.,2,.,3,.,4,.,5,.,6,.,7,.,8,.,9,.,10,.,11

const str1 = array.toString(); // array into string
console.log(str1); // output a string value "1,2,3,4,5,6,7,8"

const array2 = [9, 7, 5, 4, 3];
array2.sort();   // sort the array
console.log(array2); // [ 3, 4, 5, 7, 9 ]

array2.push(1000); // [9, 7, 5, 4, 3, 1000]
console.log(Math.max(...array2)); 


