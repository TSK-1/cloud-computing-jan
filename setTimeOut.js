function multiply(n) {
    return n * n;
}

function square(n) {
    return multiply(n);
}

function printSquaredOfANumber(n) {
    const answer = square(n);
    console.log(`square of ${n} is ${answer}`);
}

console.log("hello Im January");

setTimeout(function () {
    console.log("hello Im February");
    }, 6000);

    console.log("I'm before add event listener");
    addEventListener('', function() {
        console.log("you clicked something");
    })
    setTimeout(function() {
        console.log("i'm from set timeout");
    })
    printSquaredOfANumber(4);

setTimeout(function () {
    console.log("hello Im March");
    printSquaredOfANumber(5);
    }, 1000);

    console.log("hello Im April");