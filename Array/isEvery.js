// The every() method of Array instances tests
// whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

let numbers = [1, 2, 3, 4, 5];
// Check if all elements are even
let allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(allEven); // Output: false (not all elements are even)

// ----------------------------------------------------------------------

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 100, 13];
console.log(array1.every(isBelowThreshold)); // false
const ans = array1.every((currentValue) => currentValue < 40); // same

// ----------------------------------------------------------------------------

function isBigEnough(element, index, array) {
    return element >= 10;
  }
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// Check if one array is a subset of another array -----------------------------------

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// is every use case-------------------------------------------------

var userPermissions = ['read', 'write', 'delete'];

var requiredPermissions = ['read', 'write'];

var hasRequiredPermissions = requiredPermissions.every(function(permission) {
    return userPermissions.includes(permission);
});

if (hasRequiredPermissions) {
    // Allow access to the feature
} else {
    // Display error message
}
