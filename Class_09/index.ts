console.log("Before async code");

function doSomething() {
    console.log("print Something")
}

// setTimeout(doSomething,5000)

setInterval(doSomething,1000)

console.log("After async code");

