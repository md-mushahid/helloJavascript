const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result); // ["exuberant", "destruction", "present"]


function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // [12, 130, 44]

// Find prime---------------------------------------------------------------------
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// Query ----------------------------------------------------------------------------

const fruits1 = ["apple", "banana", "grapes", "mango", "orange"];
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits1, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits1, "an")); // ['banana', 'mango', 'orange']


