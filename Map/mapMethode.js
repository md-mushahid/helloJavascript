const map1 = new Map();

map1.set('bar', 'baz');
map1.set(1, 'foo');

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
// Expected output: 0

map1.set('bar', 'mushahid');
map1.delete('bar');
console.log(map1.has('bar'));

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.entries();
console.log(iterator1);


console.log(map1.has('bar'));
// Expected output: true

console.log(map1.has('0'));
// Expected output: false