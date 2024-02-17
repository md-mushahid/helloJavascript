function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }
  
  const map = new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
  ]);
  
  map.forEach(logMapElements);
  
  // Expected output: "m[foo] = 3"
  // Expected output: "m[bar] = [object Object]"
  // Expected output: "m[baz] = undefined"

  