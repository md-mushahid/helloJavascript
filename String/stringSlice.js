const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

const str1 = "The morning is upon us.";
str1.slice(-3); // 'us.'
str1.slice(-3, -1); // 'us'
str1.slice(0, -1); // 'The morning is upon us'
str1.slice(4, -1); // 'morning is upon us'