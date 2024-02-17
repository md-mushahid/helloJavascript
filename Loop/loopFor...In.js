
// In sparse arrays, for...of will visit the empty slots, but for...in will not.
// It is better to use a for loop with a numeric index, Array.prototype.forEach(), or the for...of
// for..in access the kye of object/array

const array = [6,2,3,4,5];

for(let i in array)
{
  console.log(i);
}
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"


const obj1 = { a: 1, b: 2, c: 3 };

for (const prop in obj1) {
  console.log(`obj.${prop} = ${obj1[prop]}`);
}


const proto = {};
const obj = { __proto__: proto, a: 1, b: 2 };

for (const prop in obj) {
  console.log(`${prop} = ${obj[prop]}`);
  proto.c = 3;
}

console.log(proto);