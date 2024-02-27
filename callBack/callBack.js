function hello() {
    console.log('hello');
}

setTimeout(hello, 4000);

function sum(a, b) {
    console.log(a + b);
}

function cal(a, b, sumCallBack) {
    sumCallBack(a, b);
}

cal(2, 3, sum);