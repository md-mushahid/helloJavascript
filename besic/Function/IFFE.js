// IFFE function call it self and execute the function immediately.
(function() {
    // code inside this function is executed immediately
})();

(function(a, b) {
    console.log(a + b);
})(2, 3); // Outputs: 5

// IIFEs are commonly used in scenarios where you want to initialize something immediately
// or wrap a block of code to ensure it doesn't interfere with other parts of the program.
// They were especially popular before the introduction of block-scoped variables (let and const)
// in ES6, as a way to create local scopes. However, with ES6, the necessity of IIFEs has decreased,
// but they are still useful in certain situations, especially for creating self-contained modules
// or for maintaining compatibility with older JavaScript code.