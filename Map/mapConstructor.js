const myMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);

  console.log(myMap.size);


const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1[Symbol.iterator](); 

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]


const myMap1 = new Map();
myMap1.set("0", "foo");
myMap1.set(1, "bar");
myMap1.set({}, "baz");

for (const entry of myMap1) {1
  console.log(entry);
}