const obj = {
    prop: 42,
  };
  Object.freeze(obj);    // we cannot chnge a freeze object.
  obj.prop = 33;         // Throws an error in strict mode
  console.log(obj.prop); // Expected output: 42

 

const object1 = {
   a: 1,
   b: 2,
   c: 3,
 };

console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]

delete object1.a;
console.log(object1); // { b: 2, c: 3 }


function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  
  console.log(dog1.toString());