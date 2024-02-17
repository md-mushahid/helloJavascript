const set1 = new Set([1, 2, 3, 4, 5, 5, 4]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false

set1.delete(3);

for (const v of set1) {
    console.log(v);
}

set1.clear();

set1.add(17);
set1.add(12);

console.log(set1);
  

