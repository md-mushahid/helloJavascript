const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// Expected output: "foo"

console.log(map1.get('baz'));
// Expected output: undefined

// we can map an array and also can store multiple values on the mapped array
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");
myMap.get("bar").push("moo");

console.log(arr); // ["foo"]

console.log(myMap.get("bar")); // ["foo"]
